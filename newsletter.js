// Shared by the home page and bryan/news.html.
// Same Supabase project and publishable key as the 中文练字 page (write.html).
(function () {
  var URL = 'https://uscpgatqeeqejbwnvyoh.supabase.co';
  var KEY = 'sb_publishable_Tc5qBurC5SnTyNjB2jtA2A_jFs9T3og';
  var db = null;
  try { db = window.supabase.createClient(URL, KEY); } catch (e) { db = null; }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  // Local calendar date as YYYY-MM-DD (not UTC, so a morning edition isn't filed under yesterday).
  function dateKey(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function fromKey(k) { var p = k.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function problem(err) {
    var msg = (err && (err.code + ' ' + err.message)) || '';
    return /42P01|PGRST20[45]|does not exist|schema cache|column/i.test(msg) ? 'setup' : 'offline';
  }
  function run(q) {
    if (!db) return Promise.reject({ message: 'offline' });
    return q(db.from('newsletter')).then(function (res) { if (res.error) throw res.error; return res.data; });
  }

  window.News = {
    dateKey: dateKey,
    fromKey: fromKey,
    problem: problem,
    list: function () {
      return run(function (t) { return t.select('edition_date,headline,weather,story,content').order('edition_date', { ascending: false }).limit(120); });
    },
    get: function (key) {
      return run(function (t) { return t.select('edition_date,headline,weather,story,content').eq('edition_date', key).maybeSingle(); });
    },
    save: function (ed) {
      return run(function (t) {
        return t.upsert({ edition_date: ed.edition_date, headline: ed.headline, weather: ed.weather, story: ed.story, content: ed.content || {}, updated_at: new Date().toISOString() }, { onConflict: 'edition_date' });
      });
    }
  };
})();
