eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return c;
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[c] = k[c] || c;
      }
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    '27 8=9 10({11:"#12",13:{5:"",4:"14",3:"15.7",2:"",1:"<6>17 18!</6>",},16:{19:20(){21(0.5===0.4){22.23.24=0.3}25{26(0.2=0.1)}},},});',
    10,
    28,
    "this|msg|salah|producturl|value|password|p|html|vue|new|Vue|el|app|data|234|kuitansi|methods|Password|Salah|cekpass|function|if|window|location|href|else|return|const".split(
      "|"
    ),
    0,
    {}
  )
);
