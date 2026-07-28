/* ==========================================================================
   AVAILABILITY — this is the only file you need to edit
   ==========================================================================

   1. Change LAST_UPDATED every time you touch this file. It shows on the page,
      and a stale date is worse than no calendar at all.

   2. Add booked dates to BOOKINGS. Dates are YYYY-MM-DD.

        { from: '2026-08-10', to: '2026-08-17' }   a block of dates, inclusive
        { on: '2026-08-24' }                        a single date

      Add  status: 'limited'  if you could still squeeze in another household
      that day. Leave it off and the day shows as fully booked.

   3. Save, commit, done. Everything else is worked out automatically.
   ========================================================================== */

var LAST_UPDATED = '2026-07-28';

var BOOKINGS = [
  // EDIT: these are examples — delete them and add your real bookings
  { from: '2026-08-08', to: '2026-08-16' },
  { on:   '2026-08-22', status: 'limited' },
  { from: '2026-09-05', to: '2026-09-12' },
  { from: '2026-10-19', to: '2026-10-25', status: 'limited' },
  { from: '2026-12-21', to: '2027-01-02' }
];

/* How many months to show. 6 is usually plenty. */
var MONTHS_SHOWN = 6;

/* ==========================================================================
   Renderer — no need to edit below this line
   ========================================================================== */
(function () {
  var grid = document.getElementById('cal-grid');
  if (!grid) return;

  var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'];
  var DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  function iso(d) {
    return d.getFullYear() + '-' +
           String(d.getMonth() + 1).padStart(2, '0') + '-' +
           String(d.getDate()).padStart(2, '0');
  }

  // Flatten the bookings into a lookup of date -> status
  var marked = {};
  BOOKINGS.forEach(function (b) {
    var status = b.status === 'limited' ? 'limited' : 'booked';
    if (b.on) { marked[b.on] = status; return; }
    if (!b.from || !b.to) return;
    var cur = new Date(b.from + 'T12:00:00');
    var end = new Date(b.to + 'T12:00:00');
    while (cur <= end) {
      marked[iso(cur)] = status;
      cur.setDate(cur.getDate() + 1);
    }
  });

  var now = new Date();
  var todayIso = iso(now);
  var html = '';

  for (var m = 0; m < MONTHS_SHOWN; m++) {
    var first = new Date(now.getFullYear(), now.getMonth() + m, 1);
    var year = first.getFullYear();
    var month = first.getMonth();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var lead = (first.getDay() + 6) % 7; // Monday-first

    html += '<div class="cal-month"><h3>' + MONTH_NAMES[month] + ' ' + year + '</h3>';
    html += '<div class="cal-week">' + DAY_NAMES.map(function (d) {
      return '<span>' + d.charAt(0) + '<span class="sr-only">' + d.slice(1) + '</span></span>';
    }).join('') + '</div><div class="cal-days">';

    for (var p = 0; p < lead; p++) html += '<span class="cal-day cal-day--pad"></span>';

    for (var d = 1; d <= daysInMonth; d++) {
      var key = iso(new Date(year, month, d));
      var cls = 'cal-day';
      var label = '';
      if (key < todayIso) {
        cls += ' cal-day--past';
      } else if (marked[key] === 'booked') {
        cls += ' cal-day--booked';
        label = ' title="Fully booked"';
      } else if (marked[key] === 'limited') {
        cls += ' cal-day--limited';
        label = ' title="Limited availability"';
      }
      if (key === todayIso) cls += ' cal-day--today';
      html += '<span class="' + cls + '"' + label + '>' + d + '</span>';
    }
    html += '</div></div>';
  }

  grid.innerHTML = html;

  var stamp = document.getElementById('cal-updated');
  if (stamp) {
    var u = new Date(LAST_UPDATED + 'T12:00:00');
    stamp.textContent = 'Last updated ' + u.getDate() + ' ' +
      MONTH_NAMES[u.getMonth()] + ' ' + u.getFullYear();
  }
})();
