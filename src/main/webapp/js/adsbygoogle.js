(function() {
    var aa = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.da = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        for (var d in b)
            if (Object.defineProperties) {
                var e = Object.getOwnPropertyDescriptor(b, d);
                e && Object.defineProperty(a, d, e)
            } else
                a[d] = b[d]
    }
      , l = this
      , ba = function(a) {
        return "number" == typeof a
    }
      , ca = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
      , da = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
      , ea = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , fa = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , n = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = ea : n = fa;
        return n.apply(null, arguments)
    }
      , ga = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
      , r = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.da = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ha = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
                d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var ha = (new Date).getTime();
    var u = document
      , v = window;
    var ia = function(a, b) {
        a = parseInt(a, 10);
        return isNaN(a) ? b : a
    }
      , ja = function(a, b) {
        return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
    }
      , ka = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/
      , la = function(a, b) {
        return a ? (a = a.match(ka)) ? a[0] : b : b
    };
    var ma = ia("90", 0)
      , na = ia("468", 0);
    var oa = function() {
        return "r20170517"
    }
      , pa = ja("false", !1)
      , qa = ja("true", !1)
      , ra = ja("false", !1)
      , sa = ra || !qa;
    var z = function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
      , Aa = function(a) {
        if (!ta.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(ua, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(va, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(wa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(ya, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(za, "&#0;"));
        return a
    }
      , ua = /&/g
      , va = /</g
      , wa = />/g
      , xa = /"/g
      , ya = /'/g
      , za = /\x00/g
      , ta = /[\x00&<>"']/
      , Ba = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    }
      , Ca = {
        "'": "\\'"
    }
      , Da = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
      , Ea = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    };
    var Fa = function(a, b, c) {
        for (var d = a.length, e = "string" == typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , Ga = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" == typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
      , Ha = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    var A;
    a: {
        var Ia = l.navigator;
        if (Ia) {
            var Ja = Ia.userAgent;
            if (Ja) {
                A = Ja;
                break a
            }
        }
        A = ""
    }
    var B = function(a) {
        return -1 != A.indexOf(a)
    };
    var Ka = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return c
    };
    var La = function(a) {
        La[" "](a);
        return a
    };
    La[" "] = function() {}
    ;
    var Ma = B("Opera"), Na = B("Trident") || B("MSIE"), Oa = B("Edge"), Pa = B("Gecko") && !(-1 != A.toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"), Qa = -1 != A.toLowerCase().indexOf("webkit") && !B("Edge"), Ra = function() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }, Sa;
    a: {
        var Ta = ""
          , Ua = function() {
            var a = A;
            if (Pa)
                return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Oa)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Na)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Qa)
                return /WebKit\/(\S+)/.exec(a);
            if (Ma)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Ua && (Ta = Ua ? Ua[1] : "");
        if (Na) {
            var Va = Ra();
            if (null != Va && Va > parseFloat(Ta)) {
                Sa = String(Va);
                break a
            }
        }
        Sa = Ta
    }
    var Wa = Sa, Xa = {}, Ya;
    var Za = l.document;
    Ya = Za && Na ? Ra() || ("CSS1Compat" == Za.compatMode ? parseInt(Wa, 10) : 5) : void 0;
    var $a;
    if (!($a = !Pa && !Na)) {
        var ab;
        if (ab = Na)
            ab = 9 <= Number(Ya);
        $a = ab
    }
    var bb;
    if (!(bb = $a)) {
        var cb;
        if (cb = Pa) {
            var db;
            if (Object.prototype.hasOwnProperty.call(Xa, "1.9.1"))
                db = Xa["1.9.1"];
            else {
                for (var eb = 0, fb = z(String(Wa)).split("."), gb = z("1.9.1").split("."), hb = Math.max(fb.length, gb.length), ib = 0; !eb && ib < hb; ib++) {
                    var jb = fb[ib] || ""
                      , kb = gb[ib] || "";
                    do {
                        var lb = /(\d*)(\D*)(.*)/.exec(jb) || ["", "", "", ""]
                          , mb = /(\d*)(\D*)(.*)/.exec(kb) || ["", "", "", ""];
                        if (0 == lb[0].length && 0 == mb[0].length)
                            break;
                        eb = Da(0 == lb[1].length ? 0 : parseInt(lb[1], 10), 0 == mb[1].length ? 0 : parseInt(mb[1], 10)) || Da(0 == lb[2].length, 0 == mb[2].length) || Da(lb[2], mb[2]);
                        jb = lb[3];
                        kb = mb[3]
                    } while (!eb)
                }
                db = Xa["1.9.1"] = 0 <= eb
            }
            cb = db
        }
        bb = cb
    }
    var nb = bb;
    var ob = function(a) {
        return nb && a.children ? a.children : Ga(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    var C = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        La(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , pb = function(a, b) {
        var c = a.createElement("script");
        c.src = b;
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }
      , D = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
      , qb = function(a) {
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }
      , rb = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
      , sb = function(a) {
        var b = a.length;
        if (!b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
      , tb = /^([0-9.]+)px$/
      , ub = /^(-?[0-9.]{1,30})$/
      , vb = function(a) {
        return ub.test(a) && (a = Number(a),
        !isNaN(a)) ? a : null
    }
      , wb = function(a) {
        return (a = tb.exec(a)) ? +a[1] : null
    };
    var xb = function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            l.addEventListener("test", null, b)
        } catch (c) {}
        return a
    }()
      , yb = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, xb ? void 0 : !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , zb = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, xb ? void 0 : !1) : a.detachEvent && a.detachEvent("on" + b, c)
    };
    var Ab = function(a) {
        a = a || l;
        var b = a.context;
        if (!b)
            try {
                b = a.parent.context
            } catch (c) {}
        try {
            if (b && "pageViewId"in b && "canonicalUrl"in b)
                return b
        } catch (c) {}
        return null
    }
      , Bb = function(a) {
        a = a || Ab();
        if (!a)
            return null;
        a = a.master;
        return C(a) ? a : null
    };
    var Cb = function(a, b) {
        l.google_image_requests || (l.google_image_requests = []);
        var c = l.document.createElement("img");
        if (b) {
            var d = function(a) {
                b(a);
                zb(c, "load", d);
                zb(c, "error", d)
            };
            yb(c, "load", d);
            yb(c, "error", d)
        }
        c.src = a;
        l.google_image_requests.push(c)
    };
    var Db = Object.prototype.hasOwnProperty
      , Eb = function(a, b) {
        for (var c in a)
            Db.call(a, c) && b.call(void 0, a[c], c, a)
    }
      , Fb = function(a) {
        return !(!a || !a.call) && "function" === typeof a
    }
      , Gb = function(a, b) {
        for (var c = 1, d = arguments.length; c < d; ++c)
            a.push(arguments[c])
    }
      , Hb = function(a, b) {
        if (a.indexOf)
            return a = a.indexOf(b),
            0 < a || !a;
        for (var c = 0; c < a.length; c++)
            if (a[c] === b)
                return !0;
        return !1
    }
      , Ib = function(a) {
        a = Bb(Ab(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }
      , Jb = function(a) {
        a = Bb(Ab(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
      , Kb = !!window.google_async_iframe_id
      , Lb = Kb && window.parent || window
      , Mb = /(^| )adsbygoogle($| )/
      , Nb = function(a) {
        a = pa && a.google_top_window || a.top;
        return C(a) ? a : null
    };
    var E = function(a, b) {
        a = a.google_ad_modifications;
        return Hb(a ? a.eids || [] : [], b)
    }
      , G = function(a, b) {
        a = a.google_ad_modifications;
        return Hb(a ? a.loeids || [] : [], b)
    }
      , Ob = function(a, b, c) {
        if (!a)
            return null;
        for (var d = 0; d < a.length; ++d)
            if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)
                return a[d];
        return null
    };
    var Pb = function(a, b, c) {
        c = c ? c : {};
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Qb = function(a, b) {
        this.j = a;
        this.l = b
    }
      , Rb = function(a, b, c) {
        this.url = a;
        this.j = b;
        this.T = !!c;
        this.depth = ba(void 0) ? void 0 : null
    };
    var Sb = function(a, b, c, d, e) {
        this.w = c || 4E3;
        this.m = a || "&";
        this.B = b || ",$";
        this.o = void 0 !== d ? d : "trn";
        this.J = e || null;
        this.v = !1;
        this.l = {};
        this.C = 0;
        this.j = []
    }
      , Tb = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
      , Vb = function(a, b, c, d, e) {
        var f = [];
        rb(a, function(a, h) {
            (a = Ub(a, b, c, d, e)) && f.push(h + "=" + a)
        });
        return f.join(b)
    }
      , Ub = function(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Ub(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(Vb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
      , Wb = function(a, b, c, d) {
        a.j.push(b);
        a.l[b] = Tb(c, d)
    }
      , Yb = function(a, b, c, d) {
        b = b + "//" + c + d;
        var e = Xb(a) - d.length - 0;
        if (0 > e)
            return "";
        a.j.sort(function(a, b) {
            return a - b
        });
        d = null;
        c = "";
        for (var f = 0; f < a.j.length; f++)
            for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? g : d;
                    break
                }
                var m = Vb(h[k], a.m, a.B);
                if (m) {
                    m = c + m;
                    if (e >= m.length) {
                        e -= m.length;
                        b += m;
                        c = a.m;
                        break
                    } else
                        a.v && (c = e,
                        m[c - 1] == a.m && --c,
                        b += m.substr(0, c),
                        c = a.m,
                        e = 0);
                    d = null == d ? g : d
                }
            }
        f = "";
        a.o && null != d && (f = c + a.o + "=" + (a.J || d));
        return b + f + ""
    }
      , Xb = function(a) {
        if (!a.o)
            return a.w;
        var b = 1, c;
        for (c in a.l)
            b = c.length > b ? c.length : b;
        return a.w - a.o.length - b - a.m.length - 1
    };
    var Zb = function(a, b, c, d, e, f) {
        if ((d ? a.v : Math.random()) < (e || a.j))
            try {
                if (c instanceof Sb)
                    var g = c;
                else
                    g = new Sb,
                    rb(c, function(a, b) {
                        var c = g
                          , d = c.C++;
                        a = Tb(b, a);
                        c.j.push(d);
                        c.l[d] = a
                    });
                var h = Yb(g, a.o, a.l, a.m + b + "&");
                h && ("undefined" === typeof f ? Cb(h) : Cb(h, f))
            } catch (k) {}
    };
    var $b = function(a, b) {
        this.start = a < b ? a : b;
        this.j = a < b ? b : a
    };
    var ac = function(a, b) {
        this.j = b >= a ? new $b(a,b) : null
    }
      , bc = function() {
        try {
            var a = parseInt(v.localStorage.getItem("google_experiment_mod"), 10)
        } catch (b) {
            return null
        }
        if (0 <= a && 1E3 > a)
            return a;
        a = Math.floor(1E3 * qb(v));
        try {
            return v.localStorage.setItem("google_experiment_mod", "" + a),
            a
        } catch (b) {
            return null
        }
    };
    var cc = !1
      , dc = function(a) {
        try {
            var b = (a || l).top.location.hash;
            if (b) {
                var c = b.match(/\bdeid=([\d,]+)/);
                return c && c[1] || ""
            }
        } catch (d) {}
        return ""
    }
      , ec = function(a, b) {
        var c;
        if (c = (c = dc().match(new RegExp("\\b(" + a.join("|") + ")\\b"))) && c[0] || null)
            a = c;
        else if (cc)
            a = null;
        else
            a: {
                if (!(1E-4 > Math.random()) && (c = Math.random(),
                c < b)) {
                    c = qb(l);
                    a = a[Math.floor(c * a.length)];
                    break a
                }
                a = null
            }
        return a
    };
    var gc = function(a, b) {
        var c = fc();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random()
    };
    var hc = function(a, b) {
        this.events = [];
        this.l = b || l;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.events = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
        b = dc(this.l);
        b = b.indexOf && 0 <= b.indexOf("1337");
        this.j = (this.j = null != c ? c : Math.random() < a) || b;
        a = this.l.performance;
        this.m = !!(a && a.mark && a.clearMarks && b)
    };
    hc.prototype.o = function(a) {
        if (a && this.m) {
            var b = this.l.performance;
            b.clearMarks("goog_" + a.uniqueId + "_start");
            b.clearMarks("goog_" + a.uniqueId + "_end")
        }
    }
    ;
    hc.prototype.start = function(a, b) {
        if (!this.j)
            return null;
        a = new gc(a,b);
        this.m && this.l.performance.mark("goog_" + a.uniqueId + "_start");
        return a
    }
    ;
    var fc = function() {
        var a = l.performance;
        return a && a.now ? a.now() : +new Date
    };
    var ic = function(a, b, c, d) {
        this.w = a;
        this.C = b;
        this.o = c;
        this.m = null;
        this.B = this.j;
        this.l = void 0 === d ? null : d;
        this.v = !1
    }
      , lc = function(a, b, c, d, e) {
        try {
            if (a.l && a.l.j) {
                var f = a.l.start(b.toString(), 3);
                var g = c();
                var h = a.l;
                c = f;
                h.j && (c.duration = fc() - c.value,
                h.m && h.l.performance.mark("goog_" + c.uniqueId + "_end"),
                h.j && h.events.push(c))
            } else
                g = c()
        } catch (k) {
            h = a.o;
            try {
                a.l && f && a.l.o(f),
                h = (e || a.B).call(a, b, new jc(kc(k),k.fileName,k.lineNumber), void 0, d)
            } catch (m) {
                a.j(217, m)
            }
            if (!h)
                throw k;
        }
        return g
    }
      , mc = function(a, b) {
        var c = H;
        return function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f)
                e[f - 0] = arguments[f];
            return lc(c, a, function() {
                return b.apply(void 0, e)
            }, void 0, void 0)
        }
    };
    ic.prototype.j = function(a, b, c, d, e) {
        e = e || this.C;
        try {
            var f = new Sb;
            f.v = !0;
            Wb(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new jc(kc(b),b.fileName,b.lineNumber));
            b.msg && Wb(f, 2, "msg", b.msg.substring(0, 512));
            b.file && Wb(f, 3, "file", b.file);
            0 < b.line && Wb(f, 4, "line", b.line);
            var g = b.meta || {};
            if (this.m)
                try {
                    this.m(g)
                } catch (F) {}
            if (d)
                try {
                    d(g)
                } catch (F) {}
            b = [g];
            f.j.push(5);
            f.l[5] = b;
            d = l;
            b = [];
            var g = null;
            do {
                var h = d;
                if (C(h)) {
                    var k = h.location.href;
                    g = h.document && h.document.referrer || null
                } else
                    k = g,
                    g = null;
                b.push(new Rb(k || "",h));
                try {
                    d = h.parent
                } catch (F) {
                    d = null
                }
            } while (d && h != d);k = 0;
            for (var m = b.length - 1; k <= m; ++k)
                b[k].depth = m - k;
            h = l;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (k = 1; k < b.length; ++k) {
                    var q = b[k];
                    q.url || (q.url = h.location.ancestorOrigins[k - 1] || "",
                    q.T = !0)
                }
            var w = new Rb(l.location.href,l,!1)
              , p = b.length - 1;
            for (h = p; 0 <= h; --h) {
                var y = b[h];
                if (y.url && !y.T) {
                    w = y;
                    break
                }
            }
            var y = null
              , x = b.length && b[p].url;
            0 != w.depth && x && (y = b[p]);
            var t = new Qb(w,y);
            t.l && Wb(f, 6, "top", t.l.url || "");
            Wb(f, 7, "url", t.j.url || "");
            Zb(this.w, e, f, this.v, c)
        } catch (F) {
            try {
                Zb(this.w, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: kc(F),
                    url: t.j.url
                }, this.v, c)
            } catch (je) {}
        }
        return this.o
    }
    ;
    var kc = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d; )
                    d = a,
                    a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    }
      , jc = function(a, b, c) {
        Pb.call(this, Error(a), {
            message: a,
            file: void 0 === b ? "" : b,
            line: void 0 === c ? -1 : c
        })
    };
    aa(jc, Pb);
    var nc, H;
    if (Kb && !C(Lb)) {
        var oc = "." + u.domain;
        try {
            for (; 2 < oc.split(".").length && !C(Lb); )
                u.domain = oc = oc.substr(oc.indexOf(".") + 1),
                Lb = window.parent
        } catch (a) {}
        C(Lb) || (Lb = window)
    }
    var pc = Lb
      , I = new hc(1,pc)
      , qc = function(a) {
        null != a && (pc.google_measure_js_timing = a);
        pc.google_measure_js_timing || (I.events != I.l.google_js_reporting_queue && (I.events.length = 0,
        I.m && Fa(I.events, I.o, I)),
        I.j = !1)
    };
    nc = new function() {
        this.o = "http:" === v.location.protocol ? "http:" : "https:";
        this.l = "pagead2.googlesyndication.com";
        this.m = "/pagead/gen_204?id=";
        this.j = .01;
        this.v = Math.random()
    }
    ;
    H = new ic(nc,"jserror",!0,I);
    "complete" == pc.document.readyState ? qc() : I.j && yb(pc, "load", function() {
        qc()
    });
    var tc = function() {
        var a = [rc, sc];
        H.m = function(b) {
            Fa(a, function(a) {
                a(b)
            })
        }
    }
      , uc = function(a, b, c, d) {
        return lc(H, a, c, d, b)
    }
      , vc = function(a, b) {
        return mc(a, b)
    }
      , wc = H.j;
    var xc = function(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Zb(nc, "ama", b, !0, .01, void 0)
    };
    var yc = function(a, b, c) {
        c || (c = sa ? "https" : "http");
        v.location && "https:" == v.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    };
    var zc = new function() {
        this.j = "google-auto-placed";
        this.l = {
            google_tag_origin: "qs"
        }
    }
    ;
    var Ac = B("Safari") && !((B("Chrome") || B("CriOS")) && !B("Edge") || B("Coast") || B("Opera") || B("Edge") || B("Silk") || B("Android")) && !(B("iPhone") && !B("iPod") && !B("iPad") || B("iPad") || B("iPod"));
    var Bc = null
      , Cc = null
      , Dc = Pa || Qa && !Ac || Ma || "function" == typeof l.btoa
      , Ec = function(a, b) {
        if (Dc && !b)
            var c = l.btoa(a);
        else {
            c = [];
            for (var d = 0, e = 0; e < a.length; e++) {
                for (var f = a.charCodeAt(e); 255 < f; )
                    c[d++] = f & 255,
                    f >>= 8;
                c[d++] = f
            }
            if (!Bc)
                for (Bc = {},
                Cc = {},
                a = 0; 65 > a; a++)
                    Bc[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
                    Cc[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);
            b = b ? Cc : Bc;
            a = [];
            for (d = 0; d < c.length; d += 3) {
                var g = c[d]
                  , h = (e = d + 1 < c.length) ? c[d + 1] : 0
                  , k = (f = d + 2 < c.length) ? c[d + 2] : 0
                  , m = g >> 2
                  , g = (g & 3) << 4 | h >> 4
                  , h = (h & 15) << 2 | k >> 6
                  , k = k & 63;
                f || (k = 64,
                e || (h = 64));
                a.push(b[m], b[g], b[h], b[k])
            }
            c = a.join("")
        }
        return c
    };
    var J = function() {}
      , Fc = "function" == typeof Uint8Array
      , K = function(a, b, c) {
        a.j = null;
        b || (b = []);
        a.B = void 0;
        a.o = -1;
        a.l = b;
        a: {
            if (a.l.length) {
                b = a.l.length - 1;
                var d = a.l[b];
                if (d && "object" == typeof d && "array" != ca(d) && !(Fc && d instanceof Uint8Array)) {
                    a.v = b - a.o;
                    a.m = d;
                    break a
                }
            }
            a.v = Number.MAX_VALUE
        }
        a.w = {};
        if (c)
            for (b = 0; b < c.length; b++)
                d = c[b],
                d < a.v ? (d += a.o,
                a.l[d] = a.l[d] || Gc) : a.m[d] = a.m[d] || Gc
    }
      , Gc = []
      , L = function(a, b) {
        if (b < a.v) {
            b += a.o;
            var c = a.l[b];
            return c === Gc ? a.l[b] = [] : c
        }
        c = a.m[b];
        return c === Gc ? a.m[b] = [] : c
    }
      , Hc = function(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = L(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }
      , Ic = function(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = L(a, c), e = [], f = 0; f < d.length; f++)
                e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == Gc && (b = a.j[c] = []);
        return b
    }
      , Jc = function(a) {
        if (a.j)
            for (var b in a.j) {
                var c = a.j[b];
                if ("array" == ca(c))
                    for (var d = 0; d < c.length; d++)
                        c[d] && Jc(c[d]);
                else
                    c && Jc(c)
            }
    };
    J.prototype.toString = function() {
        Jc(this);
        return this.l.toString()
    }
    ;
    var Lc = function(a) {
        K(this, a, Kc)
    };
    r(Lc, J);
    var Kc = [4]
      , Mc = function(a) {
        K(this, a, null)
    };
    r(Mc, J);
    var Nc = function(a) {
        K(this, a, null)
    };
    r(Nc, J);
    var Pc = function(a) {
        K(this, a, Oc)
    };
    r(Pc, J);
    var Oc = [6, 7, 9];
    var Rc = function(a) {
        K(this, a, Qc)
    };
    r(Rc, J);
    var Qc = [1, 2, 5, 7]
      , Sc = function(a) {
        K(this, a, null)
    };
    r(Sc, J);
    var Uc = function(a) {
        K(this, a, Tc)
    };
    r(Uc, J);
    var Tc = [2];
    var Vc = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6
    };
    var Wc = null
      , Xc = function() {
        if (!Wc) {
            for (var a = l, b = a, c = 0; a && a != a.parent; )
                if (a = a.parent,
                c++,
                C(a))
                    b = a;
                else
                    break;
            Wc = b
        }
        return Wc
    };
    var Yc = {
        D: "368226004",
        A: "368226005"
    }
      , Zc = {
        D: "368226014",
        A: "368226015"
    }
      , $c = {
        s: "10583695",
        u: "10583696"
    }
      , ad = {
        s: "10573695",
        u: "10573696"
    }
      , bd = {
        s: "10593695",
        u: "10593696"
    }
      , cd = {
        s: "4089037",
        u: "4089038"
    }
      , M = {
        s: "4089040",
        K: "4089041",
        L: "4089042",
        M: "4089043"
    }
      , dd = {
        s: "4089045",
        u: "4089046"
    }
      , ed = {
        O: "20040067",
        s: "20040068",
        N: "1337"
    }
      , N = {
        s: "62710010",
        VIEWPORT: "62710011",
        I: "62710012"
    }
      , fd = {
        s: "62710013",
        VIEWPORT: "62710014",
        I: "62710015"
    }
      , gd = {
        s: "201222021",
        F: "201222022",
        G: "201222023"
    }
      , hd = {
        s: "201222031",
        F: "201222032",
        G: "201222033"
    }
      , id = {
        s: "20040000",
        u: "20040001"
    }
      , jd = {
        s: "21060161",
        u: "21060162",
        H: "21060152"
    }
      , cc = !1;
    var O = function(a) {
        a = a.document;
        return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
    };
    var kd = function(a) {
        var b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d)
            c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
            if (!c[b[d]])
                return !1;
        return !0
    };
    var ld = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c]
              , e = Ea(d.ia);
            a[e] = d.value
        }
    };
    var md = function(a, b) {
        var c = a.length;
        if (null != c)
            for (var d = 0; d < c; d++)
                b.call(void 0, a[d], d)
    };
    var nd = function(a, b, c, d) {
        this.o = a;
        this.l = b;
        this.m = c;
        this.j = d
    };
    nd.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.o,
            occurrenceIndex: this.l,
            paragraphIndex: this.m,
            ignoreMode: this.j
        })
    }
    ;
    var od = function(a, b) {
        if (null == a.j)
            return b;
        switch (a.j) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.j);
        }
    }
      , qd = function(a) {
        var b = [];
        md(a.getElementsByTagName("p"), function(a) {
            100 <= pd(a) && b.push(a)
        });
        return b
    }
      , pd = function(a) {
        if (3 == a.nodeType)
            return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)
            return 0;
        var b = 0;
        md(a.childNodes, function(a) {
            b += pd(a)
        });
        return b
    }
      , rd = function(a) {
        return !a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };
    var sd = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    }
      , td = function(a) {
        return null != a ? sd[a] : a
    }
      , ud = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    var vd = function(a, b) {
        if (!a)
            return !1;
        a = D(a, b);
        if (!a)
            return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }
      , wd = function(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType; )
            a = a.previousSibling;
        return a ? a : null
    }
      , xd = function(a) {
        return !!a.nextSibling || !!a.parentNode && xd(a.parentNode)
    };
    var zd = function() {
        this.l = new yd(this);
        this.j = 0
    }
      , Ad = function(a) {
        if (0 != a.j)
            throw Error("Already resolved/rejected.");
    }
      , yd = function(a) {
        this.j = a
    };
    yd.prototype.then = function(a, b) {
        if (this.l)
            throw Error("Then functions already set.");
        this.l = a;
        this.m = b;
        Bd(this)
    }
    ;
    var Bd = function(a) {
        switch (a.j.j) {
        case 0:
            break;
        case 1:
            a.l && a.l(a.j.o);
            break;
        case 2:
            a.m && a.m(a.j.m);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    };
    var Cd = function(a) {
        this.exception = a
    }
      , Dd = function(a, b, c, d) {
        this.l = a;
        this.m = b;
        this.v = c;
        this.j = d
    };
    Dd.prototype.start = function() {
        this.o()
    }
    ;
    Dd.prototype.o = function() {
        try {
            switch (this.l.document.readyState) {
            case "complete":
            case "interactive":
                Ed(this.m, !0);
                Fd(this);
                break;
            default:
                Ed(this.m, !1) ? Fd(this) : this.l.setTimeout(n(this.o, this), this.v)
            }
        } catch (a) {
            Fd(this, a)
        }
    }
    ;
    var Fd = function(a, b) {
        try {
            var c = a.j
              , d = new Cd(b);
            Ad(c);
            c.j = 1;
            c.o = d;
            Bd(c.l)
        } catch (e) {
            a = a.j,
            b = e,
            Ad(a),
            a.j = 2,
            a.m = b,
            Bd(a.l)
        }
    };
    var Gd = function(a, b) {
        this.j = l;
        this.w = a;
        this.v = b;
        this.o = zc || null;
        this.l = this.m = !1
    }
      , Ed = function(a, b) {
        if (a.m)
            return !0;
        if (!a.l) {
            a: {
                var c = a.j;
                var d = O(c).clientHeight || 0;
                for (var c = Array.prototype.slice.call(c.document.querySelectorAll("ins.adsbygoogle")).concat(Array.prototype.slice.call(c.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]"))), e = 0; e < c.length; e++) {
                    var f = c[e]
                      , g = f.getBoundingClientRect();
                    if (!f.hasAttribute("data-anchor-shown") && (g.top || g.right || g.bottom || g.left) && g.top <= d) {
                        d = !0;
                        break a
                    }
                }
                d = !1
            }
            a.l = d
        }
        if (a.l)
            return a = a.j.google_ama_state = a.j.google_ama_state || {},
            a.eatf = !0;
        c = Ic(a.v, Pc, 1);
        for (d = 0; d < c.length; d++)
            if (e = c[d],
            1 == L(e, 8) && (f = Hc(e, Nc, 4)) && 2 == L(f, 1) && Hd(a, e, b))
                return a.m = !0,
                a = a.j.google_ama_state = a.j.google_ama_state || {},
                a.placement = d,
                !0;
        return !1
    }
      , Hd = function(a, b, c) {
        if (1 != L(b, 8))
            return !1;
        var d = Hc(b, Lc, 1);
        if (!d)
            return !1;
        var e = L(d, 7);
        if (L(d, 1) || L(d, 3) || 0 < L(d, 4).length) {
            var f = L(d, 3)
              , g = L(d, 1)
              , h = L(d, 4);
            e = L(d, 2);
            var k = L(d, 5)
              , d = td(L(d, 6))
              , m = "";
            g && (m += g);
            f && (m += "#" + rd(f));
            if (h)
                for (f = 0; f < h.length; f++)
                    m += "." + rd(h[f]);
            e = (h = m) ? new nd(h,e,k,d) : null
        } else
            e = e ? new nd(e,L(d, 2),L(d, 5),td(L(d, 6))) : null;
        if (!e)
            return !1;
        k = [];
        try {
            k = a.j.document.querySelectorAll(e.o)
        } catch (y) {}
        if (k.length) {
            h = k.length;
            if (0 < h) {
                d = Array(h);
                for (f = 0; f < h; f++)
                    d[f] = k[f];
                k = d
            } else
                k = [];
            k = od(e, k);
            ba(e.l) && (h = e.l,
            0 > h && (h += k.length),
            k = 0 <= h && h < k.length ? [k[h]] : []);
            if (ba(e.m)) {
                h = [];
                for (d = 0; d < k.length; d++)
                    f = qd(k[d]),
                    g = e.m,
                    0 > g && (g += f.length),
                    0 <= g && g < f.length && h.push(f[g]);
                k = h
            }
            e = k
        } else
            e = [];
        if (!e.length)
            return !1;
        e = e[0];
        k = L(b, 2);
        k = ud[k];
        k = void 0 !== k ? k : null;
        if (!(h = null == k)) {
            a: {
                h = a.j;
                switch (k) {
                case 0:
                    h = vd(wd(e), h);
                    break a;
                case 3:
                    h = vd(e, h);
                    break a;
                case 2:
                    d = e.lastChild;
                    h = vd(d ? 1 == d.nodeType ? d : wd(d) : null, h);
                    break a
                }
                h = !1
            }
            if (c = !h && !(!c && 2 == k && !xd(e)))
                c = 1 == k || 2 == k ? e : e.parentNode,
                c = !(c && (1 != c.nodeType || "INS" != c.tagName || !kd(c)) && 0 >= c.offsetWidth);
            h = !c
        }
        if (h)
            return !1;
        b = Hc(b, Mc, 3);
        h = {};
        b && (h.V = L(b, 1),
        h.R = L(b, 2),
        h.aa = !!L(b, 3));
        b = a.j;
        c = a.o;
        d = a.w;
        f = b.document;
        a = f.createElement("div");
        g = a.style;
        g.textAlign = "center";
        g.width = "100%";
        g.height = "auto";
        g.clear = h.aa ? "both" : "none";
        h.ba && ld(g, h.ba);
        f = f.createElement("ins");
        g = f.style;
        g.display = "block";
        g.margin = "auto";
        g.backgroundColor = "transparent";
        h.V && (g.marginTop = h.V);
        h.R && (g.marginBottom = h.R);
        h.$ && ld(g, h.$);
        a.appendChild(f);
        f.setAttribute("data-ad-format", "auto");
        h = [];
        if (g = c && c.j)
            a.className = g;
        f.className = "adsbygoogle";
        f.setAttribute("data-ad-client", d);
        h.length && f.setAttribute("data-ad-channel", h.join("+"));
        var q;
        a: {
            try {
                switch (k) {
                case 0:
                    e.parentNode && e.parentNode.insertBefore(a, e);
                    break;
                case 3:
                    var w = e.parentNode;
                    if (w) {
                        var p = e.nextSibling;
                        if (p && p.parentNode != w)
                            for (; p && 8 == p.nodeType; )
                                p = p.nextSibling;
                        w.insertBefore(a, p)
                    }
                    break;
                case 1:
                    e.insertBefore(a, e.firstChild);
                    break;
                case 2:
                    e.appendChild(a)
                }
                if (1 != e.nodeType ? 0 : "INS" == e.tagName && kd(e))
                    e.style.display = "block";
                f.setAttribute("data-adsbygoogle-status", "reserved");
                w = {
                    element: f
                };
                (q = c && c.l) && (w.params = q);
                (b.adsbygoogle = b.adsbygoogle || []).push(w)
            } catch (y) {
                a && a.parentNode && a.parentNode.removeChild(a);
                q = !1;
                break a
            }
            q = !0
        }
        return q ? !0 : !1
    };
    var Id = function(a) {
        xc(a, {
            atf: 1
        })
    }
      , Jd = function(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        xc(a, {
            atf: 0
        })
    };
    var Kd = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledByReactiveTag = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.debugCard = null;
        this.messageValidationEnabled = this.debugCardRequested = !1;
        this.adRegion = this.floatingAdsFillMessage = this.grappleTagStatusService = null
    };
    var Ld = function(a) {
        if (!a)
            return !1;
        a = ob(a);
        if (!a)
            return !1;
        for (var b = 0; b < a.length; b++)
            if (a[b].hasAttribute("data-google-ad-template"))
                return !0;
        return !1
    };
    var Md = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    }
      , Nd = function(a, b) {
        if (15 == b) {
            if (728 <= a)
                return 728;
            if (468 <= a)
                return 468
        } else if (90 == b) {
            if (200 <= a)
                return 200;
            if (180 <= a)
                return 180;
            if (160 <= a)
                return 160;
            if (120 <= a)
                return 120
        }
        return null
    };
    var sc = function(a) {
        try {
            var b = l.google_ad_modifications;
            if (b) {
                var c = Ha(b.eids, b.loeids);
                c && 0 < c.length && (a.eid = c.join(","))
            }
        } catch (d) {}
    }
      , rc = function(a) {
        a.shv = oa()
    };
    H.o = !pa;
    var P = function(a, b) {
        this.o = a;
        this.m = b
    };
    P.prototype.minWidth = function() {
        return this.o
    }
    ;
    P.prototype.height = function() {
        return this.m
    }
    ;
    P.prototype.j = function(a) {
        return 300 < a && 300 < this.m ? this.o : Math.min(1200, Math.round(a))
    }
    ;
    P.prototype.l = function(a) {
        return this.j(a) + "x" + this.height()
    }
    ;
    var Od = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    }
      , Q = function(a, b, c) {
        P.call(this, a, b);
        this.ca = c
    };
    aa(Q, P);
    var Pd = function(a) {
        return function(b) {
            return !!(b.ca & a)
        }
    }
      , Qd = function(a, b) {
        P.call(this, a, b)
    };
    aa(Qd, P);
    Qd.prototype.j = function() {
        return this.minWidth()
    }
    ;
    var R = [new Q(970,90,2), new Q(728,90,2), new Q(468,60,2), new Q(336,280,1), new Q(320,100,2), new Q(320,50,2), new Q(300,600,4), new Q(300,250,1), new Q(250,250,1), new Q(234,60,2), new Q(200,200,1), new Q(180,150,1), new Q(160,600,4), new Q(125,125,1), new Q(120,600,4), new Q(120,240,4)]
      , Rd = [R[6], R[12], R[3], R[0], R[7], R[14], R[1], R[8], R[10], R[4], R[15], R[2], R[11], R[5], R[13], R[9]];
    function Sd(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = wb(a[c[d]])
                  , f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }
    var Td = function(a, b) {
        do {
            var c = D(a, b);
            if (c && "fixed" == c.position)
                return !1
        } while (a = a.parentElement);return !0
    }
      , Ud = function(a) {
        var b = 0, c;
        for (c in Od)
            -1 != a.indexOf(c) && (b |= Od[c]);
        return b
    };
    var Vd = function(a, b, c) {
        if (a.style) {
            var d = wb(a.style[c]);
            if (d)
                return d
        }
        if (a = D(a, b))
            if (c = wb(a[c]))
                return c;
        return null
    }
      , Wd = function(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }
      , Zd = function(a, b, c) {
        var d = a && Xd(c, b)
          , e = Yd(b);
        return function(a) {
            return !(d && a.height() >= e)
        }
    }
      , Xd = function(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            var e = {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (f) {
            e = null
        }
        a = e;
        return (a ? a.y : 0) < O(b).clientHeight - 100
    }
      , $d = function(a, b) {
        var c = Infinity;
        do {
            var d = Vd(b, a, "height");
            d && (c = Math.min(c, d));
            (d = Vd(b, a, "maxHeight")) && (c = Math.min(c, d))
        } while ((b = b.parentElement) && "HTML" != b.tagName);return c
    }
      , Yd = function(a) {
        var b = !Jb(a);
        return G(a, hd.F) || G(a, hd.G) && b ? 2 * O(a).clientHeight / 3 : 250
    };
    var ae = function(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b))
                    return !1;
            return !0
        }
    }
      , be = function(a, b, c) {
        for (var d = a.length, e = null, f = 0; f < d; ++f) {
            var g = a[f];
            if (b(g)) {
                if (!c || c(g))
                    return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var S = function(a, b) {
        this.l = a;
        this.j = b
    };
    var T = function(a) {
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, T) : this.stack = Error().stack || ""
    };
    r(T, Error);
    var ce = function(a) {
        return !(a.error && a.meta && a.id ? a.msg || kc(a.error) : kc(a)).indexOf("TagError")
    };
    var de = function(a, b, c, d, e) {
        if (!G(c, Zc.A) && !G(c, Zc.D))
            return a;
        e.google_full_width_responsive_allowed = !1;
        if (!("auto" == b && 488 > O(c).clientWidth && c.innerHeight >= c.innerWidth))
            return a;
        b = O(c).clientWidth;
        var f = b - a;
        if (!(f = !b || 5 > f || .3 < f / b || (pa && c.google_top_window || c.top) != c || !(e.google_safe_for_responsive_override = Td(d, c))))
            a: {
                for (var f = O(c).clientWidth, g = d.parentElement, h = 0; 100 > h && g; h++) {
                    var k = D(g, c);
                    if ("hidden" == k.overflow && (k = wb(k.width)) && k < f) {
                        f = !0;
                        break a
                    }
                    g = g.parentElement
                }
                f = !1
            }
        if (f)
            return a;
        f = d.parentElement;
        if (!f)
            return a;
        e.google_full_width_responsive_allowed = !0;
        if (!G(c, Zc.A))
            return a;
        e = D(f, c);
        e = wb(e.paddingLeft) || 0;
        for (h = g = 0; 100 > h && f; h++)
            g += f.offsetLeft + f.clientLeft - f.scrollLeft,
            f = f.offsetParent;
        e = g + e;
        "rtl" == D(d, c).direction ? d.style.marginRight = -1 * (b - a - e) + "px" : d.style.marginLeft = -1 * e + "px";
        d.style.width = b + "px";
        d.style.zIndex = 30;
        return b
    }
      , ge = function(a, b, c, d, e) {
        e = e || {};
        var f = a;
        a = uc(247, wc, function() {
            return de(a, b, c, d, e)
        });
        var g = f != a
          , f = "auto" == b ? .25 >= a / Math.min(1200, O(c).clientWidth) ? 4 : 3 : Ud(b);
        e.google_responsive_formats = f;
        var h = !(B("iPad") || B("Android") && !B("Mobile") || B("Silk")) && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile")) && !Xd(d, c) && (e.google_safe_for_responsive_override = Td(d, c))
          , k = (h ? Rd : R).slice(0)
          , m = 488 > O(c).clientWidth
          , m = [Wd(a), ee(m), Zd(m, c, d), Pd(f)]
          , q = [];
        if (h) {
            var w = $d(c, d);
            q.push(function(a) {
                return a.height() <= w
            })
        }
        var p = be(k, ae(m), ae(q));
        if (!p)
            throw new T("No slot size for availableWidth=" + a);
        p = uc(248, wc, function() {
            var b = a;
            var e = p;
            if (g)
                if (G(c, Zc.A))
                    if (Xd(d, c))
                        b = new Qd(b,e.height());
                    else {
                        var e = b / 1.2
                          , f = $d(c, d)
                          , f = Math.min(e, f);
                        if (f < .5 * e || 100 > f)
                            f = e;
                        b = new Qd(b,Math.floor(f))
                    }
                else
                    throw Error("Slot was expanded without experiment");
            else
                b = e;
            return b
        });
        return new S(fe(b, f),p)
    };
    function fe(a, b) {
        if ("auto" == a)
            return 1;
        switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8
        }
        throw Error("bad mask");
    }
    function ee(a) {
        return function(b) {
            return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
        }
    }
    ;var he = {
        ga: "google_content_recommendation_ui_type",
        ea: "google_content_recommendation_columns_num",
        fa: "google_content_recommendation_rows_num"
    }
      , ie = {
        image_stacked: 1 / 1.91,
        image_sidebyside: 1 / 3.82,
        image_card_stacked: 1 / 1.91,
        image_card_sidebyside: 1 / 3.74,
        text: 0
    }
      , ke = {
        image_sidebyside: .2667
    }
      , le = {
        image_stacked: 80,
        image_sidebyside: 0,
        image_card_stacked: 85,
        image_card_sidebyside: 0,
        text: 80
    }
      , U = function(a, b) {
        P.call(this, a, b)
    };
    aa(U, P);
    U.prototype.j = function(a) {
        return Math.min(1200, Math.round(a))
    }
    ;
    var me = function(a) {
        var b = 0;
        Eb(he, function(c) {
            null != a[c] && ++b
        });
        if (!b)
            return !1;
        if (3 == b)
            return !0;
        throw new T("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
    };
    function ne(a) {
        return 1200 <= a ? new U(1200,600) : 850 <= a ? new U(a,Math.floor(.5 * a)) : 550 <= a ? new U(a,Math.floor(.6 * a)) : 468 <= a ? new U(a,Math.floor(.7 * a)) : new U(a,Math.floor(3.44 * a))
    }
    var pe = function(a, b) {
        if (b.google_content_recommendation_ui_type && b.google_content_recommendation_columns_num && b.google_content_recommendation_rows_num)
            return oe(a, b);
        b.google_content_recommendation_ui_type = "image_sidebyside,image_stacked";
        b.google_content_recommendation_columns_num = "1,4";
        b.google_content_recommendation_rows_num = "13,2";
        var c = {
            image_stacked: ma
        }
          , d = (new S(9,ne(a))).j;
        b.google_orig_ad_width = d.j(d.minWidth());
        b.google_orig_ad_height = d.height();
        b.google_orig_ad_format = d.l(d.minWidth());
        return oe(a, b, ke, c)
    }
      , oe = function(a, b, c, d) {
        c = c ? c : {};
        d = d ? d : {};
        var e = b.google_content_recommendation_ui_type.split(",")
          , f = b.google_content_recommendation_columns_num.split(",")
          , g = b.google_content_recommendation_rows_num.split(",");
        a: {
            if (e.length == f.length && f.length == g.length) {
                if (1 == e.length) {
                    var h = 0;
                    break a
                }
                if (2 == e.length) {
                    h = a < na ? 0 : 1;
                    break a
                }
                throw new T("The size of element (" + e.length + ") specified in tag data-matched-content-ui-type, data-matched-content-columns-num, data-matched-content-rows-num is wrong.");
            }
            throw new T("The size of element (" + e.length + "," + f.length + "," + g.length + ") specified in tag data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num does not match.");
        }
        e = z(e[h]);
        f = +f[h];
        g = +g[h];
        b.google_content_recommendation_ui_type = e;
        b.google_content_recommendation_columns_num = f;
        b.google_content_recommendation_rows_num = g;
        b = c;
        if (isNaN(f) || !f)
            throw new T("Wrong value for data-matched-content-columns-num");
        if (isNaN(g) || !g)
            throw new T("Wrong value for data-matched-content-rows-num");
        d = Math.floor(((a - 8 * f - 8) / f * (b[e] || ie[e]) + (d[e] || le[e])) * g + 8 * g + 8);
        if (1500 < a)
            throw new T("Calculated slot width is too large: " + a);
        if (1500 < d)
            throw new T("Calculated slot height is too large: " + d);
        return new S(9,new U(a,d))
    };
    var qe = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : a / 1.91 + 130
        }
    };
    var V = function(a, b) {
        P.call(this, a, b)
    };
    aa(V, P);
    V.prototype.j = function() {
        return this.minWidth()
    }
    ;
    V.prototype.l = function(a) {
        return P.prototype.l.call(this, a) + "_0ads_al"
    }
    ;
    var re = [new V(728,15), new V(468,15), new V(200,90), new V(180,90), new V(160,90), new V(120,90)]
      , se = function(a) {
        var b = be(re, Wd(a));
        if (!b)
            throw new T("No link unit size for width=" + a + "px");
        return b
    }
      , te = function(a, b, c, d) {
        c = void 0 === c ? 130 : c;
        d = void 0 === d ? 30 : d;
        var e = se(a);
        a = Math.min(a, 1200);
        e = e.height();
        b = Math.max(e, b);
        return new S(10,new V(a,Math.min(b, 15 == e ? d : c)))
    };
    var ue = function(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c)
            return E(a, $c.u) ? 6 : E(a, ad.u) ? 7 : E(a, bd.u) ? 14 : me(b) ? 9 : 5;
        if ("auto" == c || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(c))
            return 1;
        if ("link" == c)
            return E(a, M.K) || E(a, M.L) || E(a, M.M) ? 15 : 13;
        if ("fluid" == c)
            return 8
    };
    function ve(a, b, c, d, e) {
        var f = d.google_ad_format
          , g = d.google_ad_height || Vd(c, e, "height");
        switch (a) {
        default:
        case 1:
            return ge(b, f, e, c, d);
        case 5:
            return new S(9,ne(b));
        case 6:
            return pe(b, d);
        case 7:
            return pe(b, d);
        case 14:
            return d.google_content_recommendation_ui_type && d.google_content_recommendation_columns_num && d.google_content_recommendation_rows_num ? g = oe(b, d) : (b < na ? (d.google_content_recommendation_ui_type = "image_sidebyside",
            d.google_content_recommendation_columns_num = 1,
            d.google_content_recommendation_rows_num = 13) : (d.google_content_recommendation_ui_type = "image_stacked",
            d.google_content_recommendation_columns_num = 4,
            d.google_content_recommendation_rows_num = 2),
            g = new S(9,ne(b))),
            g;
        case 9:
            return oe(b, d);
        case 4:
            return new S(10,se(b));
        case 10:
            return g = se(b),
            new S(10,new V(Math.min(b, 1200),g.height()));
        case 12:
            return te(b, we(c, e));
        case 13:
            return e = we(c, e),
            e = te(b, e, 130, 30).j,
            b = e.minWidth(),
            e = e.height(),
            15 <= g && (e = g),
            new S(10,new V(b,e));
        case 15:
            return a = we(c, e),
            e = te(b, a, E(e, M.K) ? 190 : E(e, M.L) ? 250 : 130, E(e, M.M) ? 90 : 30).j,
            b = e.minWidth(),
            e = e.height(),
            15 <= g && (e = g),
            new S(10,new V(b,e));
        case 8:
            if (250 > b)
                throw new T("Fluid responsive ads must be at least 250px wide: availableWidth=" + b);
            if (g && 50 > g)
                throw new T("Fluid responsive ads must be at least 50px tall: height=" + g);
            e = "" + (d.google_ad_layout || "image-top");
            b = Math.min("in-article" == e ? 700 : 1200, Math.floor(b));
            if (g)
                g = new S(11,new P(b,g));
            else {
                g = qe[e];
                if (!g)
                    throw new T("Invalid data-ad-layout value: " + e);
                g = Math.ceil(g(b));
                g = new S(11,new P(b,g))
            }
            return g
        }
    }
    function we(a, b) {
        if (E(b, dd.u)) {
            var c = Vd(a, b, "height");
            if (!c) {
                var d = a.style.height;
                a.style.height = "inherit";
                c = Vd(a, b, "height");
                a.style.height = d;
                if (!c) {
                    c = Infinity;
                    do
                        (d = a.style && wb(a.style.height)) && (c = Math.min(c, d)),
                        (d = Vd(a, b, "maxHeight")) && (c = Math.min(c, d));
                    while ((a = a.parentElement) && "HTML" != a.tagName)
                }
            }
            b = c
        } else
            b = $d(b, a);
        return b
    }
    ;var xe = {
        1: "0.1",
        2: "0.02",
        3: "100",
        4: "0",
        5: "0.01",
        6: "0.01",
        7: "0.01",
        8: "0.0",
        9: "400",
        10: "200",
        11: "0.003",
        12: "0.01",
        13: "0.001",
        14: "303",
        15: "3",
        16: "600",
        17: "20",
        18: "1",
        19: "0.01",
        20: "0",
        22: "0.01",
        23: "0.2",
        24: "0.05",
        26: "0.01",
        27: "0.001",
        28: "0.001",
        29: "0.01",
        30: "0.05",
        31: "0.001",
        32: "0.02",
        33: "0.001",
        34: "0.001",
        35: "0.01",
        36: "0.05",
        37: "0.0",
        38: "0.04",
        39: "0.15",
        40: "0.15",
        41: "0.006",
        42: "0.001",
        43: "0.1",
        44: "0.0",
        45: "0.0",
        46: "0.0",
        47: "0.01",
        48: "0.2",
        49: "0.2",
        50: "0.08",
        51: "0.05",
        52: "0.5"
    };
    var ye = null
      , ze = function() {
        this.j = xe
    }
      , W = function(a, b) {
        a = parseFloat(a.j[b]);
        return isNaN(a) ? 0 : a
    };
    var Ae = new ac(100,299)
      , Be = new ac(300,399)
      , Ce = new ac(400,599)
      , De = new ac(600,699);
    var Fe = function() {
        var a = v.google_ad_modifications = v.google_ad_modifications || {};
        if (!a.plle) {
            a.plle = !0;
            var b = a.eids = a.eids || [], a = a.loeids = a.loeids || [], c;
            ye || (ye = new ze);
            var d = ye;
            var e = Zc;
            var f = Ee(Ae, W(d, 3), W(d, 4), [e.D, e.A]);
            X(a, f);
            var g = Yc;
            f == e.D ? c = g.D : f == e.A ? c = g.A : c = "";
            X(b, c);
            e = $c;
            X(b, Y(W(d, 5), [e.s, e.u]));
            e = ad;
            X(b, Y(W(d, 6), [e.s, e.u]));
            e = bd;
            X(b, Y(W(d, 7), [e.s, e.u]));
            e = cd;
            X(b, Y(W(d, 8), [e.s, e.u]));
            e = M;
            X(b, Ee(Ce, W(d, 9), W(d, 10), [e.s, e.K, e.L, e.M]));
            e = dd;
            X(b, Ee(De, W(d, 16), W(d, 17), [e.s, e.u]));
            u.body || (e = id,
            X(a, Y(W(d, 1), [e.s, e.u])));
            z("") && X(a, "");
            e = N;
            f = Y(W(d, 11), [e.s, e.VIEWPORT, e.I]);
            e = Ka(e, function(a) {
                return a == f
            });
            e = fd[e];
            X(b, f);
            X(b, e);
            e = jd;
            f = Y(W(d, 12), [e.s, e.u, e.H]);
            X(a, f);
            e = ed;
            f = Y(W(d, 13), [e.O, e.s]);
            X(b, f);
            X(b, ec([e.N], 0));
            e = hd;
            f = Ee(Be, W(d, 14), W(d, 15), [e.s, e.F, e.G]);
            X(a, f);
            g = gd;
            f == e.s ? c = g.s : f == e.F ? c = g.F : f == e.G ? c = g.G : c = "";
            X(b, c)
        }
    }
      , X = function(a, b) {
        b && a.push(b)
    }
      , Y = function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (v.location && v.location.hash == "#google_plle_" + b[c])
                return b[c];
        return ec(b, a)
    }
      , Ee = function(a, b, c, d) {
        for (var e = 0; e < d.length; e++)
            if (v.location && v.location.hash == "#google_plle_" + d[e])
                return d[e];
        e = new $b(b,b + c - 1);
        (c = 0 >= c || c % d.length) || (a = a.j,
        c = !(a.start <= e.start && a.j >= e.j));
        c ? b = null : (a = bc(),
        b = null !== a && e.start <= a && e.j >= a ? d[(a - b) % d.length] : null);
        return b
    };
    var Ge = function(a) {
        if (!a)
            return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var He = function(a, b, c) {
        var d = ["<iframe"], e;
        for (e in a)
            a.hasOwnProperty(e) && Gb(d, e + "=" + a[e]);
        d.push('style="' + ("left:0;position:absolute;top:0;width:" + b + "px;height:" + c + "px;") + '"');
        d.push("></iframe>");
        a = a.id;
        b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
        return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
    };
    var Ie = null;
    var Z = function(a) {
        this.o = [];
        this.l = a || window;
        this.j = 0;
        this.m = null;
        this.C = 0
    }, Je, Ke = function(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }, Le = function(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && Ke(a) && Fb(a.nq) && Fb(a.nqa) && Fb(a.al) && Fb(a.rl)
    }, Me = function() {
        if (Je && Ke(Je))
            return Je;
        var a = Xc()
          , b = a.google_jobrunner;
        return Le(b) ? Je = b : a.google_jobrunner = Je = new Z(a)
    }, Ne = function(a, b) {
        Me().nq(a, b)
    }, Oe = function(a, b) {
        Me().nqa(a, b)
    };
    Z.prototype.J = function(a, b) {
        0 != this.j || this.o.length || b && b != window ? this.v(a, b) : (this.j = 2,
        this.B(new Pe(a,window)))
    }
    ;
    Z.prototype.v = function(a, b) {
        this.o.push(new Pe(a,b || this.l));
        Qe(this)
    }
    ;
    Z.prototype.X = function(a) {
        this.j = 1;
        if (a) {
            var b = vc(188, n(this.w, this, !0));
            this.m = this.l.setTimeout(b, a)
        }
    }
    ;
    Z.prototype.w = function(a) {
        a && ++this.C;
        1 == this.j && (null != this.m && (this.l.clearTimeout(this.m),
        this.m = null),
        this.j = 0);
        Qe(this)
    }
    ;
    Z.prototype.Y = function() {
        return !(!window || !Array)
    }
    ;
    Z.prototype.W = function() {
        return this.C
    }
    ;
    var Qe = function(a) {
        var b = vc(189, n(a.Z, a));
        a.l.setTimeout(b, 0)
    };
    Z.prototype.Z = function() {
        if (0 == this.j && this.o.length) {
            var a = this.o.shift();
            this.j = 2;
            var b = vc(190, n(this.B, this, a));
            a.j.setTimeout(b, 0);
            Qe(this)
        }
    }
    ;
    Z.prototype.B = function(a) {
        this.j = 0;
        a.l()
    }
    ;
    Z.prototype.nq = Z.prototype.J;
    Z.prototype.nqa = Z.prototype.v;
    Z.prototype.al = Z.prototype.X;
    Z.prototype.rl = Z.prototype.w;
    Z.prototype.sz = Z.prototype.Y;
    Z.prototype.tc = Z.prototype.W;
    var Pe = function(a, b) {
        this.l = a;
        this.j = b
    };
    var Re = function(a) {
        this.j = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: n(this.o, this)
        });
        this.m = a.google_iframe_oncopy
    }
      , Se = function(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)")
          , d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    };
    Re.prototype.set = function(a, b) {
        this.m.handlers[a] = b;
        this.j.addEventListener && this.j.addEventListener("load", n(this.l, this, a), !1)
    }
    ;
    Re.prototype.l = function(a) {
        a = this.j.document.getElementById(a);
        try {
            var b = a.contentWindow.document;
            if (a.onload && b && (!b.body || !b.body.firstChild))
                a.onload()
        } catch (c) {}
    }
    ;
    Re.prototype.o = function(a, b) {
        var c = Se("rx", a);
        a: {
            if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
                a = a[1];
                break a
            }
            a = ""
        }
        a = (new Date).getTime() - a;
        c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= a ? "M" : 0 <= a ? a : "-M"));
        this.set(b, c);
        return c
    }
    ;
    var Te = Aa("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
    var Ue = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Ve = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g
      , We = function() {}
      , Ye = function(a, b, c) {
        switch (typeof b) {
        case "string":
            Xe(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
        case "boolean":
            c.push(String(b));
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (null == b) {
                c.push("null");
                break
            }
            if (b instanceof Array || void 0 != b.length && b.splice) {
                var d = b.length;
                c.push("[");
                for (var e = "", f = 0; f < d; f++)
                    c.push(e),
                    Ye(a, b[f], c),
                    e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (e in b)
                b.hasOwnProperty(e) && (f = b[e],
                "function" != typeof f && (c.push(d),
                Xe(e, c),
                c.push(":"),
                Ye(a, f, c),
                d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof b);
        }
    }
      , Xe = function(a, b) {
        b.push('"');
        b.push(a.replace(Ve, function(a) {
            if (a in Ue)
                return Ue[a];
            var b = a.charCodeAt(0)
              , c = "\\u";
            16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0");
            return Ue[a] = c + b.toString(16)
        }));
        b.push('"')
    };
    var Ze = {
        google_ad_modifications: !0,
        google_analytics_domain_name: !0,
        google_analytics_uacct: !0
    }
      , $e = function(a) {
        try {
            if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
                var b = function() {
                    return this
                };
                if (Object.prototype.hasOwnProperty("toJSON")) {
                    var c = Object.prototype.toJSON;
                    Object.prototype.toJSON = b
                }
                if (Array.prototype.hasOwnProperty("toJSON")) {
                    var d = Array.prototype.toJSON;
                    Array.prototype.toJSON = b
                }
                var e = window.encodeURIComponent(window.JSON.stringify(a));
                try {
                    var f = Ec(e)
                } catch (g) {
                    f = "#" + Ec(e, !0)
                }
                c && (Object.prototype.toJSON = c);
                d && (Array.prototype.toJSON = d);
                return f
            }
        } catch (g) {
            H.j(237, g, void 0, void 0)
        }
        return ""
    }
      , af = function(a) {
        a.google_page_url && (a.google_page_url = String(a.google_page_url));
        var b = [];
        Eb(a, function(a, d) {
            if (null != a) {
                try {
                    var c = [];
                    Ye(new We, a, c);
                    var f = c.join("")
                } catch (g) {}
                f && (f = f.replace(/\//g, "\\$&"),
                Gb(b, d, "=", f, ";"))
            }
        });
        return b.join("")
    };
    var bf = La("script");
    Jb(v);
    var cf = vc(215, function(a) {
        var b = a.google_sa_queue
          , c = b.shift();
        "function" == ca(c) && uc(216, wc, c);
        b.length && a.setTimeout(ga(cf, a), 0)
    })
      , ef = function(a) {
        return ["<", bf, ' src="', df(void 0 === a ? "/show_ads_impl.js" : a), '"></', bf, ">"].join("")
    }
      , df = function(a) {
        a = void 0 === a ? "/show_ads_impl.js" : a;
        var b = ra ? "https" : "http";
        a: {
            if (pa)
                try {
                    var c = v.google_cafe_host || v.top.google_cafe_host;
                    if (c) {
                        var d = c;
                        break a
                    }
                } catch (e) {}
            d = la("", "pagead2.googlesyndication.com")
        }
        return yc(d, ["/pagead/js/", oa(), "/r20170110", a, ""].join(""), b)
    }
      , ff = function(a, b, c, d) {
        return function() {
            var e = !1;
            d && Me().al(3E4);
            try {
                var f = a.document.getElementById(b).contentWindow;
                if (C(f)) {
                    var g = a.document.getElementById(b).contentWindow
                      , h = g.document;
                    h.body && h.body.firstChild || (/Firefox/.test(navigator.userAgent) ? h.open("text/html", "replace") : h.open(),
                    g.google_async_iframe_close = !0,
                    h.write(c))
                } else {
                    for (var k = a.document.getElementById(b).contentWindow, f = c, f = String(f), g = ['"'], h = 0; h < f.length; h++) {
                        var m = f.charAt(h), q = m.charCodeAt(0), w = h + 1, p;
                        if (!(p = Ba[m])) {
                            if (31 < q && 127 > q)
                                var y = m;
                            else {
                                var x = void 0
                                  , t = m;
                                if (t in Ca)
                                    y = Ca[t];
                                else if (t in Ba)
                                    y = Ca[t] = Ba[t];
                                else {
                                    var F = t.charCodeAt(0);
                                    if (31 < F && 127 > F)
                                        x = t;
                                    else {
                                        if (256 > F) {
                                            if (x = "\\x",
                                            16 > F || 256 < F)
                                                x += "0"
                                        } else
                                            x = "\\u",
                                            4096 > F && (x += "0");
                                        x += F.toString(16).toUpperCase()
                                    }
                                    y = Ca[t] = x
                                }
                            }
                            p = y
                        }
                        g[w] = p
                    }
                    g.push('"');
                    k.location.replace("javascript:" + g.join(""))
                }
                e = !0
            } catch (je) {
                k = Xc().google_jobrunner,
                Le(k) && k.rl()
            }
            e && (e = Se("google_async_rrc", c),
            (new Re(a)).set(b, ff(a, b, e, !1)))
        }
    }
      , gf = function(a) {
        var b = ["<iframe"];
        Eb(a, function(a, d) {
            null != a && b.push(" " + d + '="' + Aa(a) + '"')
        });
        b.push("></iframe>");
        return b.join("")
    }
      , jf = function(a, b, c) {
        hf(a, b, c, function(a, b, f) {
            a = a.document;
            for (var d = b.id, e = 0; !d || a.getElementById(d); )
                d = "aswift_" + e++;
            b.id = d;
            b.name = d;
            d = Number(f.google_ad_width);
            e = Number(f.google_ad_height);
            16 == f.google_reactive_ad_format ? (f = a.createElement("div"),
            a = He(b, d, e),
            f.innerHTML = a,
            c.appendChild(f.firstChild)) : (f = He(b, d, e),
            c.innerHTML = f);
            return b.id
        })
    }
      , kf = function(a) {
        var b = "<" + bf + ">window.parent.google_sa_impl.call(this, window, document, location);</" + bf + ">";
        G(a, jd.u) ? (a.google_sa_queue = a.google_sa_queue || [],
        a.google_sa_impl || (b = ef("/show_ads_impl_single_load.js") + b,
        a.google_sa_impl = function(b) {
            a.google_sa_queue.push(b)
        }
        ,
        a.google_process_slots = function() {
            Fa(a.google_sa_queue, function(b) {
                a.google_sa_impl.call(b, b, b.document, b.location)
            });
            a.google_sa_queue.length = 0
        }
        )) : G(a, jd.s) ? b = ef("/show_ads_impl_single_load_control.js") : G(a, jd.H) || (b = ef());
        return b
    }
      , hf = function(a, b, c, d) {
        var e = {}
          , f = b.google_ad_height;
        e.width = '"' + b.google_ad_width + '"';
        e.height = '"' + f + '"';
        e.frameborder = '"0"';
        e.marginwidth = '"0"';
        e.marginheight = '"0"';
        e.vspace = '"0"';
        e.hspace = '"0"';
        e.allowtransparency = '"true"';
        e.scrolling = '"no"';
        e.allowfullscreen = '"true"';
        e.onload = '"' + Te + '"';
        d = d(a, e, b);
        f = b.google_ad_output;
        (e = b.google_ad_format) || "html" != f && null != f || (e = b.google_ad_width + "x" + b.google_ad_height);
        f = !b.google_ad_slot || b.google_override_format || !Md[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
        e && f ? e = e.toLowerCase() : e = "";
        b.google_ad_format = e;
        if (!ba(b.google_reactive_sra_index) || !b.google_ad_unit_key) {
            for (var e = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height], f = [], g = 0, h = c; h && 25 > g; h = h.parentNode,
            ++g)
                f.push(9 !== h.nodeType && h.id || "");
            (f = f.join()) && e.push(f);
            b.google_ad_unit_key = sb(e.join(":")).toString();
            e = [];
            for (f = 0; c && 25 > f; ++f) {
                g = (g = 9 !== c.nodeType && c.id) ? "/" + g : "";
                a: {
                    if (c && c.nodeName && c.parentElement)
                        for (var h = c.nodeName.toString().toLowerCase(), k = c.parentElement.childNodes, m = 0, q = 0; q < k.length; ++q) {
                            var w = k[q];
                            if (w.nodeName && w.nodeName.toString().toLowerCase() === h) {
                                if (c === w) {
                                    h = "." + m;
                                    break a
                                }
                                ++m
                            }
                        }
                    h = ""
                }
                e.push((c.nodeName && c.nodeName.toString().toLowerCase()) + g + h);
                c = c.parentElement
            }
            c = e.join() + ":";
            e = a;
            f = [];
            if (e)
                try {
                    for (var p = e.parent, g = 0; p && p !== e && 25 > g; ++g) {
                        for (var y = p.frames, h = 0; h < y.length; ++h)
                            if (e === y[h]) {
                                f.push(h);
                                break
                            }
                        e = p;
                        p = e.parent
                    }
                } catch (F) {}
            b.google_ad_dom_fingerprint = sb(c + f.join()).toString()
        }
        var p = af(b), y = $e(b), x;
        b = b.google_ad_client;
        if (!Ie)
            b: {
                e = [l.top];
                c = [];
                for (f = 0; g = e[f++]; ) {
                    c.push(g);
                    try {
                        if (g.frames)
                            for (var t = g.frames.length, h = 0; h < t && 1024 > e.length; ++h)
                                e.push(g.frames[h])
                    } catch (F) {}
                }
                for (t = 0; t < c.length; t++)
                    try {
                        if (x = c[t].frames.google_esf) {
                            Ie = x;
                            break b
                        }
                    } catch (F) {}
                Ie = null
            }
        Ie ? x = "" : (x = {
            style: "display:none"
        },
        /[^a-z0-9-]/.test(b) ? x = "" : (x["data-ad-client"] = Ge(b),
        x.id = "google_esf",
        x.name = "google_esf",
        x.src = yc(la("", "googleads.g.doubleclick.net"), ["/pagead/html/", oa(), "/r20170110/zrt_lookup.html#"].join("")),
        x = gf(x)));
        t = ha;
        b = (new Date).getTime();
        a.google_t12n_vars = xe;
        t = ["<!doctype html><html><body>", x, "<", bf, ">", p, "google_show_ads_impl=true;google_unique_id=", Jb(a), ';google_async_iframe_id="', d, '";google_start_time=', t, ";", y ? 'google_pub_vars = "' + y + '";' : "", "google_bpp=", b > t ? b - t : 1, ";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</", bf, ">", kf(a), "</body></html>"].join("");
        x = a.document.getElementById(d) ? Ne : Oe;
        d = ff(a, d, t, !0);
        G(a, jd.H) ? (a.google_sa_queue = a.google_sa_queue || [],
        a.google_sa_impl ? d() : a.google_sa_queue.push(d)) : x(d)
    }
      , lf = function(a, b) {
        var c = navigator;
        a && b && c && (a = a.document,
        b = Ge(b),
        /[^a-z0-9-]/.test(b) || ((c = z("r20160913")) && (c += "/"),
        pb(a, yc("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js"))))
    };
    var mf = !1
      , nf = 0
      , of = !1
      , pf = !1
      , qf = function(a) {
        return Mb.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }
      , sf = function(a, b) {
        var c = window;
        a.setAttribute("data-adsbygoogle-status", "done");
        rf(a, b, c)
    }
      , rf = function(a, b, c) {
        tf(a, b, c);
        if (!uf(a, b, c)) {
            if (Ld(a)) {
                b.enable_native_ads = !0;
                var d = document.createElement("ins");
                d.style.display = "none";
                a.appendChild(d);
                a = d
            }
            vf(b);
            if (b.google_reactive_ads_config) {
                if (mf)
                    throw new T("Only one 'enable_page_level_ads' allowed per page.");
                mf = !0
            } else
                b.google_ama || Ib(c);
            of || (of = !0,
            lf(c, b.google_ad_client));
            Eb(Ze, function(a, d) {
                b[d] = b[d] || c[d]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === nf;
            if ((d = b.google_ad_output) && "html" != d && "js" != d)
                throw new T("No support for google_ad_output=" + d);
            uc(164, wc, function() {
                jf(c, b, a)
            })
        }
    }
      , vf = function(a) {
        if (a.enable_native_ads || a.google_native_ad_template)
            a.google_ad_type = "text",
            a.google_max_num_ads = 1,
            a.hasOwnProperty("google_ad_format") || (a.google_ad_format = "300x250")
    }
      , uf = function(a, b, c) {
        var d = b.google_reactive_ads_config;
        if (d) {
            var e = d.page_level_pubvars;
            var f = (da(e) ? e : {}).google_tag_origin
        }
        if (b.google_ama || "js" === b.google_ad_output)
            return !1;
        var g = b.google_ad_slot
          , e = c.google_ad_modifications;
        !e || Ob(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none",
        e = (g = Ob(e.ad_blacklist, g)) ? {
            P: !0,
            U: g.space_collapsing || f
        } : e.remove_ads_by_default ? {
            P: !0,
            U: f
        } : null);
        if (e && e.P && "on" != b.google_adtest)
            return "slot" == e.U && (null !== vb(a.getAttribute("width")) && a.setAttribute("width", 0),
            null !== vb(a.getAttribute("height")) && a.setAttribute("height", 0),
            a.style.width = "0px",
            a.style.height = "0px"),
            !0;
        if ((e = D(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d))
            return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
            !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (l.console && l.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"),
        !0)
    }
      , tf = function(a, b, c) {
        for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
            var g = d[f];
            if (/data-/.test(g.name)) {
                var h = z(g.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                if (!b.hasOwnProperty(h)) {
                    var g = g.value
                      , k = {
                        google_reactive_ad_format: ia,
                        google_allow_expandable_ads: ja
                    }
                      , g = k.hasOwnProperty(h) ? k[h](g, null) : g;
                    null === g || (b[h] = g)
                }
            }
        }
        if (E(c, N.s) || E(c, N.VIEWPORT) || E(c, N.I) && a.style && c.document && c.document.body) {
            d = parseInt(a.style.width, 10);
            b: {
                if (e = Nb(c)) {
                    e = O(e).clientWidth;
                    f = c.document.body.currentStyle ? c.document.body.currentStyle.direction : c.getComputedStyle ? c.getComputedStyle(c.document.body).getPropertyValue("direction") : "";
                    if ("ltr" === f && e) {
                        e = Math.floor(Math.min(1200, e - a.getBoundingClientRect().left));
                        break b
                    }
                    if ("rtl" === f && e) {
                        f = c.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right;
                        e = Math.floor(Math.min(1200, e - f - Math.floor((e - c.document.body.clientWidth) / 2)));
                        break b
                    }
                }
                e = -1
            }
            if (0 < e && d > e)
                if (f = parseInt(a.style.height, 10),
                d = !!Md[d + "x" + f],
                E(c, N.VIEWPORT)) {
                    if (d)
                        if (d = Nd(e, f))
                            e = d;
                        else
                            throw new T("No slot size for availableWidth=" + e);
                    b.google_ad_width = e;
                    a.style.width = e + "px";
                    b.google_ad_format = null;
                    b.google_override_format = !0;
                    b.google_ad_resize = 1
                } else
                    E(c, N.I) ? (a.style.width = e + "px",
                    b.google_ad_format = d ? "link" : "auto",
                    b.google_ad_resize = 2) : E(c, N.s) && (b.google_ad_resize = 0)
        }
        b.google_enable_content_recommendations && 1 == b.google_reactive_ad_format ? (b.google_ad_width = O(c).clientWidth,
        b.google_ad_height = 50,
        a.style.display = "none") : (e = ue(c, b)) ? (b.google_auto_format = b.google_ad_format,
        d = a.offsetWidth,
        c = ve(e, d, a, b, c),
        e = c.j,
        b.google_ad_width = e.j(d),
        f = b.google_ad_height = e.height(),
        a.style.height = f + "px",
        b.google_ad_resizable = !0,
        b.google_ad_format = e.l(d),
        b.google_override_format = 1,
        b.google_responsive_auto_format = c.l,
        b.google_loader_features_used = 128) : !ub.test(b.google_ad_width) && !tb.test(a.style.width) || !ub.test(b.google_ad_height) && !tb.test(a.style.height) ? (c = D(a, c),
        a.style.width = c.width,
        a.style.height = c.height,
        Sd(c, b),
        b.google_ad_width || (b.google_ad_width = a.offsetWidth),
        b.google_ad_height || (b.google_ad_height = a.offsetHeight),
        b.google_loader_features_used = 256) : (Sd(a.style, b),
        b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (c = a.style.width,
        a.style.width = "100%",
        d = a.offsetWidth,
        a.style.width = c,
        b.google_available_width = d))
    }
      , wf = function(a) {
        for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (qf(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a))
                return d
        }
        return null
    }
      , yf = function(a) {
        if (!pf) {
            pf = !0;
            try {
                var b = l.localStorage.getItem("google_ama_config")
            } catch (y) {
                b = null
            }
            try {
                var c = b ? new Rc(b ? JSON.parse(b) : null) : null
            } catch (y) {
                c = null
            }
            if (b = c)
                if (c = Hc(b, Sc, 3),
                !c || L(c, 1) <= +new Date)
                    try {
                        l.localStorage.removeItem("google_ama_config")
                    } catch (y) {
                        xc(l, {
                            lserr: 1
                        })
                    }
                else {
                    try {
                        a: {
                            var d = L(b, 5);
                            if (0 < d.length)
                                var e = d;
                            else {
                                c: {
                                    var f = l.location.pathname
                                      , g = Ic(b, Uc, 7)
                                      , d = {};
                                    for (c = 0; c < g.length; ++c) {
                                        var h = L(g[c], 1);
                                        ba(h) && !d[h] && (d[h] = g[c])
                                    }
                                    for (var k = f.replace(/(^\/)|(\/$)/g, ""); ; ) {
                                        var m = sb(k);
                                        if (d[m]) {
                                            var q = d[m];
                                            break c
                                        }
                                        if (!k) {
                                            q = null;
                                            break c
                                        }
                                        k = k.substring(0, k.lastIndexOf("/"))
                                    }
                                }
                                e = q ? L(q, 2) : []
                            }
                            for (q = 0; q < e.length; q++)
                                if (1 == e[q]) {
                                    var w = !0;
                                    break a
                                }
                            w = !1
                        }
                        if (w) {
                            var p = new zd;
                            (new Dd(l,new Gd(a,b),100,p)).start();
                            p.l.then(ga(Id, l), ga(Jd, l))
                        }
                    } catch (y) {
                        xc(l, {
                            atf: -1
                        })
                    }
                    w = xf();
                    l.document.documentElement.appendChild(w);
                    sf(w, {
                        google_ama: !0,
                        google_ad_client: a
                    })
                }
        }
    }
      , xf = function() {
        var a = document.createElement("ins");
        a.className = "adsbygoogle";
        a.style.display = "none";
        return a
    }
      , zf = function(a, b) {
        var c = {};
        Eb(Vc, function(b, d) {
            !1 === a.enable_page_level_ads ? c[d] = !1 : a.hasOwnProperty(d) && (c[d] = a[d])
        });
        da(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = xf();
        b ? u.body.appendChild(d) : u.documentElement.appendChild(d);
        sf(d, {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        })
    }
      , Af = function(a) {
        var b = Nb(window);
        if (!b)
            throw new T("Page-level tag does not work inside iframes.");
        b.google_reactive_ads_global_state || (b.google_reactive_ads_global_state = new Kd);
        b.google_reactive_ads_global_state.wasPlaTagProcessed = !0;
        var b = G(v, id.u)
          , c = !b;
        u.body || b ? zf(a, c) : yb(u, "DOMContentLoaded", vc(191, function() {
            zf(a, c)
        }))
    }
      , Bf = function(a, b, c, d) {
        return ce(b) ? (H.v = !0,
        H.j(a, b, .1, d, "puberror"),
        !1) : H.j(a, b, c, d)
    }
      , Cf = function(a, b, c, d) {
        return ce(b) ? !1 : H.j(a, b, c, d)
    }
      , Ef = function(a) {
        var b = {};
        uc(165, Bf, function() {
            Df(a, b)
        }, function(c) {
            c.client = c.client || b.google_ad_client || a.google_ad_client;
            c.slotname = c.slotname || b.google_ad_slot;
            c.tag_origin = c.tag_origin || b.google_tag_origin
        })
    }
      , Df = function(a, b) {
        ha = (new Date).getTime();
        a: {
            if (void 0 != a.enable_page_level_ads) {
                if ("string" == typeof a.google_ad_client) {
                    var c = !0;
                    break a
                }
                throw new T("'google_ad_client' is missing from the tag config.");
            }
            c = !1
        }
        if (c)
            0 === nf && (nf = 1),
            yf(a.google_ad_client),
            Af(a);
        else {
            0 === nf && (nf = 2);
            c = a.element;
            (a = a.params) && Eb(a, function(a, c) {
                b[c] = a
            });
            if ("js" === b.google_ad_output) {
                l.google_ad_request_done_fns = l.google_ad_request_done_fns || [];
                l.google_radlink_request_done_fns = l.google_radlink_request_done_fns || [];
                if (b.google_ad_request_done) {
                    if ("function" != ca(b.google_ad_request_done))
                        throw new T("google_ad_request_done parameter must be a function.");
                    l.google_ad_request_done_fns.push(b.google_ad_request_done);
                    delete b.google_ad_request_done;
                    b.google_ad_request_done_index = l.google_ad_request_done_fns.length - 1
                } else
                    throw new T("google_ad_request_done parameter must be specified.");
                if (b.google_radlink_request_done) {
                    if ("function" != ca(b.google_radlink_request_done))
                        throw new T("google_radlink_request_done parameter must be a function.");
                    l.google_radlink_request_done_fns.push(b.google_radlink_request_done);
                    delete b.google_radlink_request_done;
                    b.google_radlink_request_done_index = l.google_radlink_request_done_fns.length - 1
                }
                a = xf();
                l.document.documentElement.appendChild(a);
                c = a
            }
            if (c) {
                if (!qf(c) && (c.id ? c = wf(c.id) : c = null,
                !c))
                    throw new T("'element' has already been filled.");
                if (!("innerHTML"in c))
                    throw new T("'element' is not a good DOM element.");
            } else if (c = wf(),
            !c)
                throw new T("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
            sf(c, b)
        }
    }
      , Gf = function() {
        tc();
        uc(166, Cf, Ff)
    }
      , Ff = function() {
        Fe();
        qc(E(v, ed.O) || E(v, ed.N));
        G(v, jd.H) && !v.google_sa_queue && (v.google_sa_queue = [],
        v.google_process_slots = ga(cf, v),
        pb(v.document, df("/show_ads_impl_single_load_pub.js")));
        var a = window.adsbygoogle;
        if (a && a.shift)
            try {
                for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c; )
                    Ef(b),
                    --c
            } catch (d) {
                throw window.setTimeout(Gf, 0),
                d;
            }
        if (!a || !a.loaded) {
            window.adsbygoogle = {
                push: Ef,
                loaded: !0
            };
            a && Hf(a.onload);
            try {
                Object.defineProperty(window.adsbygoogle, "onload", {
                    set: Hf
                })
            } catch (d) {}
        }
    }
      , Hf = function(a) {
        Fb(a) && window.setTimeout(a, 0)
    };
    Gf();
}
).call(this);
