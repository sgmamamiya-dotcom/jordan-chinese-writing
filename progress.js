// Saves learning progress online (Supabase table "progress", see supabase/progress.sql) and keeps a copy on the device.
// Each page keeps its own data object with a _t timestamp (ms) that it bumps on every change.
// On load, the newer of the device copy and the online copy wins, so the last device used carries over to the next.
(function () {
  var URL = 'https://uscpgatqeeqejbwnvyoh.supabase.co';
  var KEY = 'sb_publishable_Tc5qBurC5SnTyNjB2jtA2A_jFs9T3og';
  var db = null;
  try { db = window.supabase.createClient(URL, KEY); } catch (e) { db = null; }
  var pending = {}, timers = {}, listeners = [], status = db ? 'loading' : 'local', syncs = [], lastErr = '';

  function setStatus(s) { status = s; listeners.forEach(function (f) { try { f(s); } catch (e) {} }); }
  function problem(err) {
    var msg = (err && (err.code + ' ' + err.message)) || '';
    lastErr = (err && (err.code || err.message)) || '';
    return /42P01|PGRST20[45]|does not exist|schema cache|relation/i.test(msg) ? 'setup' : 'offline';
  }
  function push(k) {
    var data = pending[k]; if (!data || !db) return;
    delete pending[k];
    var p = k.split('/');
    setStatus('saving');
    db.from('progress').upsert({ kid: p[0], app: p[1], data: data, updated_at: new Date().toISOString() }, { onConflict: 'kid,app' })
      .then(function (res) { if (res.error) throw res.error; if (!Object.keys(pending).length) setStatus('synced'); })
      .catch(function (e) { if (!pending[k]) pending[k] = data; setStatus(problem(e)); });
  }
  function flush() { Object.keys(pending).forEach(function (k) { clearTimeout(timers[k]); push(k); }); }

  var P = window.Progress = {
    status: function () { return status; },
    // Short Chinese line describing where progress is saved.
    label: function (s) {
      return ({ loading: '☁️ 正在连接网上存档…', synced: '☁️ 进度已存到网上，换设备也能接着练', saving: '☁️ 正在保存…',
        offline: '⚠️ 暂时连不上网，进度先存在这台设备，联网后会自动上传', setup: '⚠️ 网上存档还没设置好，进度先存在这台设备',
        local: '进度只存在这台设备' })[s || status] + ((s || status) === 'setup' || (s || status) === 'offline' ? (lastErr ? '（' + lastErr + '）' : '') : '');
    },
    onStatus: function (f) { listeners.push(f); f(status); },
    save: function (kid, app, data) {
      if (!db) return;
      var k = kid + '/' + app;
      pending[k] = JSON.parse(JSON.stringify(data));
      clearTimeout(timers[k]); timers[k] = setTimeout(function () { push(k); }, 600);
    },
    flush: flush,
    // getLocal() returns the device copy; apply(remote) is called when the online copy is newer.
    sync: function (kid, app, getLocal, apply) {
      if (syncs.every(function (s) { return s[0] !== kid || s[1] !== app; })) syncs.push([kid, app, getLocal, apply]);
      if (!db) return Promise.resolve();
      return db.from('progress').select('data').eq('kid', kid).eq('app', app).maybeSingle().then(function (res) {
        if (res.error) throw res.error;
        if (!pending[kid + '/' + app]) setStatus('synced');
        var remote = res.data ? res.data.data : null, local = getLocal();
        var lt = (local && local._t) || 0, rt = (remote && remote._t) || 0;
        if (remote && rt > lt) apply(remote);
        else if (local && (!remote || lt > rt)) P.save(kid, app, local);
      }).catch(function (e) { setStatus(problem(e)); });
    }
  };
  // Save before the page is hidden; fetch again when it comes back (e.g. after practising on another device).
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') flush();
    else syncs.forEach(function (s) { P.sync(s[0], s[1], s[2], s[3]); });
  });
  window.addEventListener('pagehide', flush);
})();
