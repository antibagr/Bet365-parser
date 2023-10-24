function override(e, t, n) {}
function final(e, t) {}
function delegate(e, t) {}
function AccessibilityDelegate(e) {
    return $assert && $assert(e, "missing accessibility delegate"),
    function(t) {
        var n = function() {
            return t.prototype.accessibilityDelegate = e
        };
        ns_gen5_ui_accessibility.accessibilityEnabled ? n() : ns_gen5_ui_accessibility.accSetupFuncList.push(n)
    }
}
function StaticAccessibilityDelegate(e) {
    return $assert && $assert(e, "missing accessibility delegate"),
    function() {
        var t = function() {
            return e.MakeAccessible()
        };
        ns_gen5_ui_accessibility.accessibilityEnabled ? t() : ns_gen5_ui_accessibility.accSetupFuncList.push(t)
    }
}
function GetCompiledAsset(e) {
    return ErrorReporter.Trace(null, "GetCompiledAsset call outside of module definition."),
    ""
}
function RegisterCompiledAsset(e, t) {}
function Harness(e) {
    return null
}
function JasmineSpec(e) {
    return null
}
function lazyStaticInit(e) {
    return function(t) {
        var n = !0
          , i = function() {
            var i = t.apply(this, arguments);
            return n && (n = !1,
            e()),
            i
        };
        return i.prototype = t.prototype,
        i
    }
}
function $timestamp(e) {
    "console"in window && "timeStamp"in console && "object" != typeof console.timeStamp && -1 == console.timeStamp.toString().indexOf("__BROWSERTOOLS_CONSOLE_SAFEFUNC") && console.timeStamp(e)
}
function $warn(e) {}
function $time(e) {}
function $timeEnd(e) {}
function $dir(e) {}
function $now() {
    return null
}
function $stem(e) {
    var t = Locator.treeLookup.getReference(e);
    return "dir"in console && console.dir(t),
    t
}
function cycleid() {
    return "Locator"in window && Locator.validationManager ? Locator.validationManager.cyclecount : 0
}
var ns_test, ns_gen5_util, ErrorReporter, __decorate, __param, __spreadArrays, __extends, ANIMATION_END, TRANSITION_END, $log_log, $log, $logTest, $logFmt, $assert, queueAsserts, assertMessageArray_1, timerId_1, ns_gen5_util_internal, ns_gen5_ml, ns_gen5_util_user, ns_gen5_events, ns_gen5_net, ns_gen5_util_logging, ns_gen5_validation, ns_gen5_language, ns_gen5_data, ns_gen5_ui, ns_gen5_config, ns_gen5_ui_accessibility, ns_gen5_ui_managers, ns_gen5_ui_controls, ns_gen5_animation_easing, ns_gen5_animation, readit, Locator, RegisterCompiledAsset, GetCompiledAsset, cache, SITE_ROOT_PATH = "sports";
!function(e) {
    var t, n, i = function() {
        function e() {}
        return e.prototype.runSpec = function() {
            throw new Error("Method should be overriten")
        }
        ,
        e
    }();
    e.B365JasmineSpec = i,
    t = window,
    n = t.JasmineSpecLookup = {},
    t.addJasmineSpec = function(e, t, i) {
        var r = n[e] || (n[e] = []);
        r.push([t, i])
    }
}(ns_test || (ns_test = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.encrypt = function(t) {
            var n, i = "", r = t.length, o = 0, s = 0;
            for (o = 0; r > o; o++) {
                for (n = t.substr(o, 1),
                s = 0; s < e.MAP_LEN; s++)
                    if (n == e.charMap[s][0]) {
                        n = e.charMap[s][1];
                        break
                    }
                i += n
            }
            return i
        }
        ,
        e.decrypt = function(t) {
            var n, i = "", r = t.length, o = 0, s = 0;
            for (o = 0; r > o; o++) {
                for (n = t.substr(o, 1),
                s = 0; s < e.MAP_LEN; s++) {
                    if (":" == n && ":|~" == t.substr(o, 3)) {
                        n = "\n",
                        o += 2;
                        break
                    }
                    if (n == e.charMap[s][1]) {
                        n = e.charMap[s][0];
                        break
                    }
                }
                i += n
            }
            return i
        }
        ,
        e.MAP_LEN = 64,
        e.charMap = [["A", "d"], ["B", "e"], ["C", "f"], ["D", "g"], ["E", "h"], ["F", "i"], ["G", "j"], ["H", "k"], ["I", "l"], ["J", "m"], ["K", "n"], ["L", "o"], ["M", "p"], ["N", "q"], ["O", "r"], ["P", "s"], ["Q", "t"], ["R", "u"], ["S", "v"], ["T", "w"], ["U", "x"], ["V", "y"], ["W", "z"], ["X", "a"], ["Y", "b"], ["Z", "c"], ["a", "Q"], ["b", "R"], ["c", "S"], ["d", "T"], ["e", "U"], ["f", "V"], ["g", "W"], ["h", "X"], ["i", "Y"], ["j", "Z"], ["k", "A"], ["l", "B"], ["m", "C"], ["n", "D"], ["o", "E"], ["p", "F"], ["q", "0"], ["r", "1"], ["s", "2"], ["t", "3"], ["u", "4"], ["v", "5"], ["w", "6"], ["x", "7"], ["y", "8"], ["z", "9"], ["0", "G"], ["1", "H"], ["2", "I"], ["3", "J"], ["4", "K"], ["5", "L"], ["6", "M"], ["7", "N"], ["8", "O"], ["9", "P"], ["\n", ":|~"], ["\r", ""]],
        e
    }();
    e.B365SimpleEncrypt = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t, n;
    !function(e) {
        e.CONNECTION_ENTRY = "CONNECTION_ENTRY",
        e.PUSH_MESSAGE_CONNECTION_ENTRY = "PUSH_MESSAGE_CONNECTION_ENTRY",
        e.PULL_DATA_ENTRY = "PULL_DATA_ENTRY",
        e.MODULE_LOAD_ENTRY = "MODULE_LOAD_ENTRY",
        e.NAVIGATION_ENTRY = "NAVIGATION_ENTRY",
        e.VIDEO_ENTRY = "VIDEO_ENTRY",
        e.COUPON_STREAMING_ENTRY = "COUPON_STREAMING_ENTRY",
        e.BET_SLIP_ENTRY = "BET_SLIP_ENTRY",
        e.GLOBAL_CONFIG_ENTRY = "GLOBAL_CONFIG_ENTRY",
        e.PLAYTECH_INSTANT_GAMES_ENTRY = "PLAYTECH_INSTANT_GAMES_ENTRY",
        e.FLASH_MODULE_ENTRY = "FLASH_MODULE_ENTRY",
        e.EMPTY_TOPIC_ENTRY = "EMPTY_TOPIC_ENTRY",
        e.FINANCIALS_TOPIC_ENTRY = "FINANCIALS_TOPIC_ENTRY",
        e.FILTERING_ENTRY = "FILTERING_ENTRY",
        e.BLOB_ENTRY = "BLOB_ENTRY",
        e.EDIT_BETS_ENTRY = "EDIT_BETS",
        e.MATCH_ALERTS_SERVICE_WORKER_ENTRY = "MATCH_ALERTS_SERVICE_WORKER_ENTRY",
        e.MATCH_ALERTS_ENTRY = "MATCH_ALERTS_ENTRY",
        e.QUICK_BET_ENTRY = "QUICK_BET_ENTRY",
        e.GENERAL_ENTRY = "GENERAL_ENTRY",
        e.DEPRECATION_WARNING_ENTRY = "DEPRECATION_WARNING_ENTRY",
        e.MOS_ENTRY = "MOS_ENTRY",
        e.GEO_COMPLY_ENTRY = "GEO_COMPLY_ENTRY",
        e.LOGIN_ENTRY = "LOGIN_ENTRY",
        e.MEMBERS_ENTRY = "MEMBERS_ENTRY",
        e.USER_NOTIFICATION_POPUPS = "USER_NOTIFICATION_POPUPS",
        e.FANTASY_SPORTS = "FANTASY_SPORTS",
        e.INCENTIVE_GAMES = "INCENTIVE_GAMES",
        e.GEOCHECK = "GEOCHECK"
    }(t = e.InfoReporterGroups || (e.InfoReporterGroups = {})),
    n = function() {
        function e() {}
        return e.getLog = function() {
            return e.InfoLog
        }
        ,
        e.Trace = function(t, n) {
            var i, r;
            e.InfoLog[t] || (e.InfoLog[t] = []),
            i = new Date,
            r = i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds(),
            n = r + " " + n,
            e.InfoLog[t].push(n)
        }
        ,
        e.InfoLog = {},
        e
    }(),
    e.InfoReporter = n
}(ns_gen5_util || (ns_gen5_util = {})),
ErrorReporter = function() {
    function e() {}
    return e.Trace = function(t, n, i, r) {
        var o, s, a;
        void 0 === r && (r = "");
        try {
            o = n.stack || n.message || n,
            s = "" + t,
            $log(n.message || n, s, o, i),
            this.ErrorLog.length >= e.MAXIMUM_LOG_SIZE && (a = this.ErrorLog.length - e.MAXIMUM_LOG_SIZE + 1,
            e.ErrorLog.splice(0, a)),
            this.ErrorLog.push(new Date + " " + s + " " + n),
            ns_gen5_util_logging.ClientErrorLogger.QueueError(t, n, i, r)
        } catch (n) {
            ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "Problem happened during logging error")
        }
    }
    ,
    e.MAXIMUM_LOG_SIZE = 100,
    e.ErrorLog = [],
    e.GetLog = function() {
        return e.ErrorLog
    }
    ,
    e
}(),
__decorate = this && this.__decorate || function(e, t, n, i) {
    var r, o, s = arguments.length, a = 3 > s ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, n, i);
    else
        for (o = e.length - 1; o >= 0; o--)
            (r = e[o]) && (a = (3 > s ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
    return s > 3 && a && Object.defineProperty(t, n, a),
    a
}
,
__param = this.__param || function(e, t) {
    return function(n, i) {
        t(n, i, e)
    }
}
,
__spreadArrays = this && this.__spreadArrays || function() {
    var e, t, n, i, r, o, s, a, c;
    for (e = 0,
    t = 0,
    n = arguments.length; n > t; t++)
        e += arguments[t].length;
    for (i = Array(e),
    r = 0,
    o = 0; n > o; o++)
        for (s = arguments[o],
        a = 0,
        c = s.length; c > a; a++,
        r++)
            i[r] = s[a];
    return i
}
,
__extends = this && this.__extends || function(e, t) {
    var n, i;
    for (n in t)
        t.hasOwnProperty(n) && (e[n] = t[n]);
    i = function() {
        this.constructor = e
    }
    ,
    e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
    new i)
}
,
function() {
    var e, t, n, i, r = document.createElement("div"), o = r.style;
    for ("" === o.animation ? ANIMATION_END = "animationend" : "" === o.webkitAnimation ? ANIMATION_END = "webkitAnimationEnd" : "" === o.mozAnimation ? ANIMATION_END = "mozAnimationEnd" : "" === o.msAnimation && (ANIMATION_END = "msAnimationEnd"),
    "" === o.transition ? TRANSITION_END = "transitionend" : "" === o.webkitTransition && (TRANSITION_END = "webkitTransitionEnd"),
    e = 0,
    t = ["webkit", "moz"],
    n = window,
    i = 0; i < t.length && !window.requestAnimationFrame; ++i)
        n.requestAnimationFrame = n[t[i] + "RequestAnimationFrame"],
        n.cancelAnimationFrame = n[t[i] + "CancelAnimationFrame"] || n[t[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
        var n = (new Date).getTime()
          , i = Math.max(0, 16 - (n - e))
          , r = window.setTimeout(function() {
            t(n + i)
        }, i);
        return e = n + i,
        r
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }
    )
}(),
$log_log = "",
$log = function() {}
,
$logTest = function() {}
,
$logFmt = function(e, t) {}
,
$assert && (assertMessageArray_1 = [],
timerId_1 = -1,
queueAsserts = function(e) {
    var t, n = e.stack || e.message, i = n && n.split("\n"), r = e.message || "Unknown", o = "", s = "";
    try {
        o = i && i.filter(function(e) {
            return e.indexOf("Module.") > -1 || e.indexOf("Lib.") > -1
        })[0],
        o = o && o.match(/\s{1}\b(\w*)\./i)[1] || "Window",
        s = i && i[2].match(/\s{1}\b(\w*)\s\(/i)[1]
    } catch (a) {}
    assertMessageArray_1.push({
        summary: (o || s || "Unknown") + ": " + s + " encountered an error with the message " + r,
        filename: o || "Unknown",
        funcname: s || "Unknown",
        message: r,
        stack: n || "Unknown",
        url: Locator.config.domain.href(),
        history: (ns_gen5_util.InfoReporter.getLog()[ns_gen5_util.InfoReporterGroups.NAVIGATION_ENTRY] || []).join("\n"),
        zone: Locator.user.zoneId,
        language: Locator.user.languageId,
        sessionid: ns_gen5_util.CookieManager.GetSessionId(),
        manifestversion: Locator.manifestManager.getBuildVersion(),
        betstring: window.safeSessionStorage.getItem("betstring") || "Unknown",
        sitename: window.SITE_ROOT_PATH
    }),
    t = "/api/1/clienterrors/asserts",
    -1 === timerId_1 && (timerId_1 = window.setTimeout(function() {
        (new ns_gen5_net.Loader).load(t, {
            method: "POST",
            data: JSON.stringify(assertMessageArray_1)
        }),
        assertMessageArray_1 = [],
        timerId_1 = -1
    }, 5e3))
}
),
function() {
    window.safeSessionStorage || (window.safeSessionStorage = function() {
        function e() {}
        function t() {
            this._store = {}
        }
        var n = "test-string"
          , i = function() {
            try {
                if (window.sessionStorage)
                    return window.sessionStorage.setItem(n, n),
                    window.sessionStorage.removeItem(n),
                    !0
            } catch (e) {
                ErrorReporter.Trace(null, e)
            }
            return !1
        }();
        return e.prototype.setItem = function(e, t) {
            try {
                window.sessionStorage && window.sessionStorage.setItem(e, t)
            } catch (n) {}
        }
        ,
        e.prototype.getItem = function(e) {
            try {
                if (window.sessionStorage)
                    return window.sessionStorage.getItem(e)
            } catch (t) {}
            return null
        }
        ,
        e.prototype.removeItem = function(e) {
            try {
                window.sessionStorage && window.sessionStorage.removeItem(e)
            } catch (t) {}
        }
        ,
        t.prototype.setItem = function(e, t) {
            this._store[e] = t
        }
        ,
        t.prototype.getItem = function(e) {
            return this._store[e]
        }
        ,
        t.prototype.removeItem = function(e) {
            delete this._store[e]
        }
        ,
        i ? new e : new t
    }())
}(),
window.DOMRect || (window.DOMRect = function(e, t, n, i) {
    this.x = e,
    this.y = t,
    this.width = n,
    this.height = i,
    this.top = Math.min(t, t + i),
    this.right = Math.max(e, e + n),
    this.bottom = Math.max(t, t + i),
    this.left = Math.min(e, e + n)
}
,
window.DOMRect.fromRect = function(e) {
    return new DOMRect("x"in e ? e.x : 0,"y"in e ? e.y : 0,"width"in e ? e.width : 0,"height"in e ? e.height : 0)
}
),
function(e) {
    var t = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
      , n = function() {
        function e() {}
        return e.DaysSinceZero = function(e) {
            var t, n = e - 1601, i = n / 400 << 0;
            return n -= 400 * i,
            t = 146097 * i,
            i = n / 100 << 0,
            n -= 100 * i,
            t += 36524 * i,
            i = n / 4 << 0,
            n -= 4 * i,
            t += 1461 * i,
            i = n,
            t += 365 * i
        }
        ,
        e.TimeNow = function() {
            return Date.now() + 116444736e5
        }
        ,
        e.TimeFromParts = function(n, i, r, o, s, a, c) {
            var u, l, d, h, p, _ = e.Norm(n, i, 12);
            return n = _[0],
            i = _[1],
            u = e.Norm(a, c, 1e3),
            a = u[0],
            c = u[1],
            l = e.Norm(s, a, 60),
            s = l[0],
            a = l[1],
            d = e.Norm(o, s, 60),
            o = d[0],
            s = d[1],
            h = e.Norm(r, o, 24),
            r = h[0],
            o = h[1],
            p = e.DaysSinceZero(n),
            p += t[i],
            i >= 2 && e.IsLeap(n) && p++,
            p += r - 1,
            864e5 * p + 36e5 * o + 6e4 * s + 1e3 * a + c
        }
        ,
        e.Norm = function(e, t, n) {
            var i;
            return 0 > t && (i = (-t - 1) / n + 1 << 0,
            e -= i,
            t += i * n),
            t >= n && (i = t / n << 0,
            e += i,
            t -= i * n),
            [e, t]
        }
        ,
        e.IsLeap = function(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
        }
        ,
        e.PartsFromTime = function(n) {
            var i, r, o, s, a = n / 864e5 << 0, c = a / 146097 << 0, u = 400 * c;
            if (a -= 146097 * c,
            c = a / 36524 << 0,
            c -= c >> 2,
            u += 100 * c,
            a -= 36524 * c,
            c = a / 1461 << 0,
            u += 4 * c,
            a -= 1461 * c,
            c = a / 365 << 0,
            c -= c >> 2,
            u += c,
            a -= 365 * c,
            u += 1601,
            i = a,
            r = 0,
            e.IsLeap(u))
                switch (!0) {
                case i > 59:
                    i--;
                    break;
                case 59 == i:
                    r = 1,
                    i = 29
                }
            return 0 == r && (r = i / 31 << 0,
            o = t[r + 1],
            s = 0,
            i >= o ? (r++,
            s = o) : s = t[r],
            i = i - s + 1),
            {
                year: u,
                monthIndex: r,
                date: i
            }
        }
        ,
        e.DayOfWeek = function(e) {
            var t = (e + 864e5) % 6048e5;
            return t / 864e5 << 0
        }
        ,
        e
    }();
    e.Date365Internal = n
}(ns_gen5_util_internal || (ns_gen5_util_internal = {})),
function(e) {
    var t = ns_gen5_util_internal.Date365Internal
      , n = function() {
        function e() {}
        return e.ApplyTimeZone = function(n, i) {
            var r, o, s, a;
            return e.IntlDateFormatter ? (r = "h" + (n - n % 36e5),
            void 0 !== e.KnownOffsets[r] ? n + e.KnownOffsets[r] : (o = n % 1e3,
            s = e.IntlDateFormatter(n - 116444736e5 - o),
            a = t.TimeFromParts(Number(s.slice(6, 10)), Number(s.slice(0, 2)) - 1, Number(s.slice(3, 5)), Number(s.slice(12, 14)) % 24, Number(s.slice(15, 17)), Number(s.slice(18, 20)), o),
            e.KnownOffsets[r] = a - n,
            a)) : n + e.TimeZoneOffset + (i ? 36e5 : 0)
        }
        ,
        e.TimeZoneToUTC = function(t) {
            for (var n = e.TimeZoneOffset + (e.IsUKDST(t) ? 36e5 : 0), i = t - n, r = 0, o = 3; r != t && o > 0; )
                r = e.ApplyTimeZone(i, e.IsUKDST(i)),
                r != t && (i -= r - t),
                o--;
            return i
        }
        ,
        e.IsUKDST = function(t) {
            var n, i, r, o = !1;
            for (n = 0,
            i = e.UKClockChanges; n < i.length && (r = i[n],
            !(r.time >= t)); n++)
                o = r.isUKDST;
            return o
        }
        ,
        e.Init = function(t, n) {
            var i, r;
            e.setUkClockChanges(),
            e.TimeZoneOffset = 6e4 * n;
            try {
                if (!Intl || !Intl.DateTimeFormat || !t)
                    return;
                e.IntlDateFormatter = new Intl.DateTimeFormat("en-US",e.getFormatterOptions(t)).format,
                i = new Date(Date.UTC(2020, 0, 2, 13, 4, 5)),
                r = new Intl.DateTimeFormat("en-US",e.getFormatterOptions("GMT")).format(i),
                "01/02/2020, 13:04:05" != r && (e.IntlDateFormatter = null)
            } catch (o) {
                return void (e.IntlDateFormatter = null)
            }
        }
        ,
        e.getFormatterOptions = function(e) {
            return {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: !1,
                timeZone: e
            }
        }
        ,
        e.setUkClockChanges = function() {
            var n, i = function(e, n) {
                var i = t.TimeFromParts(e, n, 1, 10 == n ? 2 : 1, 0, 0, 0)
                  , r = t.DayOfWeek(i);
                return i - 864e5 * (0 == r ? 7 : r)
            }, r = [], o = t.PartsFromTime(t.TimeNow()).year;
            for (n = o - 1; o + 3 >= n; n++)
                r.push({
                    time: i(n, 3),
                    isUKDST: !0
                }),
                r.push({
                    time: i(n, 10),
                    isUKDST: !1
                });
            e.UKClockChanges = r
        }
        ,
        e.KnownOffsets = {},
        e
    }();
    e.TimeZoneManager = n
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = ns_gen5_util_internal.Date365Internal
      , n = e.TimeZoneManager
      , i = function() {
        function e(e) {
            this.time = e
        }
        return e.Now = function() {
            return new e(t.TimeNow())
        }
        ,
        e.From2Char = function(t) {
            var n = new e(0);
            return n.parse2Char(t),
            n
        }
        ,
        e.prototype.parse2Char = function(e) {
            this.time = t.TimeFromParts(Number(e.slice(0, 4)), Number(e.slice(4, 6)) - 1, Number(e.slice(6, 8)), Number(e.slice(8, 10)), Number(e.slice(10, 12)), Number(e.slice(12, 14)), 0),
            n.IsUKDST(this.time) && (this.time -= 36e5,
            this.isUKDST = !0)
        }
        ,
        e.FromUnix = function(t) {
            return new e(t + 116444736e5)
        }
        ,
        e.prototype.toUTC = function() {
            return !this.isUKDST && n.IsUKDST(this.time) && (this.time = this.time - 36e5,
            this.isUKDST = !0),
            this
        }
        ,
        e.FromParts = function(n, i, r, o, s, a, c) {
            return new e(t.TimeFromParts(n, i, r, o, s, a, c))
        }
        ,
        e.prototype.invalidate = function() {
            this.dateParts = null
        }
        ,
        e.prototype.getDateParts = function() {
            return this.dateParts || (this.dateParts = t.PartsFromTime(this.time)),
            this.dateParts
        }
        ,
        e.prototype.clone = function() {
            var t = new e(this.time);
            return t.hasTimeZoneApplied = this.hasTimeZoneApplied,
            t.isUKDST = this.isUKDST,
            t
        }
        ,
        e.prototype.toUnix = function() {
            return this.time - 116444736e5
        }
        ,
        e.prototype.getTime = function() {
            return this.time
        }
        ,
        e.prototype.setTime = function(e) {
            this.time = e,
            this.invalidate()
        }
        ,
        e.prototype.setHours = function(e) {
            this.time += 36e5 * (e - this.getHours()),
            this.invalidate()
        }
        ,
        e.prototype.setMinutes = function(e) {
            this.time += 6e4 * (e - this.getMinutes()),
            this.invalidate()
        }
        ,
        e.prototype.setSeconds = function(e) {
            this.time += 1e3 * (e - this.getSeconds()),
            this.invalidate()
        }
        ,
        e.prototype.toTimeZone = function() {
            if (this.hasTimeZoneApplied)
                return new e(this.time);
            var t = new e(n.ApplyTimeZone(this.time, this.isUKDST));
            return t.hasTimeZoneApplied = !0,
            t
        }
        ,
        e.prototype.fromTimeZoneToUTC = function() {
            return new e(n.TimeZoneToUTC(this.time))
        }
        ,
        e.prototype.toDate = function() {
            var t = this.hasTimeZoneApplied ? this : this.toTimeZone()
              , n = t.time % 864e5;
            return new e(t.time - n)
        }
        ,
        e.prototype.getFullYear = function() {
            return (this.dateParts || this.getDateParts()).year
        }
        ,
        e.prototype.getMonth = function() {
            return (this.dateParts || this.getDateParts()).monthIndex
        }
        ,
        e.prototype.getDate = function() {
            return (this.dateParts || this.getDateParts()).date
        }
        ,
        e.prototype.getDay = function() {
            return t.DayOfWeek(this.time)
        }
        ,
        e.prototype.getHours = function() {
            return this.time / 36e5 % 24 << 0
        }
        ,
        e.prototype.getMinutes = function() {
            return this.time / 6e4 % 60 << 0
        }
        ,
        e.prototype.getSeconds = function() {
            return this.time / 1e3 % 60 << 0
        }
        ,
        e.prototype.getMilliseconds = function() {
            return this.time % 1e3
        }
        ,
        e.prototype.isToday = function() {
            return this.isSameDate(e.Now())
        }
        ,
        e.prototype.isSameDate = function(e) {
            var t, n, i;
            return e = e.hasTimeZoneApplied ? e : e.toTimeZone(),
            t = this.hasTimeZoneApplied ? this : this.toTimeZone(),
            n = t.time - t.time % 864e5,
            i = e.time - e.time % 864e5,
            n == i
        }
        ,
        e
    }();
    e.Date365 = i
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e(e, t, n, i, r, o, s) {
            this.languageId = e,
            this.cultureCode = t,
            this.cultureCode2 = n,
            this.languageCode = i,
            this.supportsEmbeddedFonts = r,
            this.isAsianRegion = o,
            this.allowCapitalisation = s
        }
        return e
    }();
    e.LanguageProfile = t
}(ns_gen5_ml || (ns_gen5_ml = {})),
function(e) {
    var t = e.LanguageProfile
      , n = function() {
        function e() {}
        return e.SelectLanguageProfile = function(t) {
            0 == t && (t = 1),
            e.SelectedProfile = e.LanguageProfiles[t]
        }
        ,
        e.getRegionIsAsian = function() {
            return e.SelectedProfile.isAsianRegion
        }
        ,
        e.getLanguageId = function() {
            return e.SelectedProfile.languageId
        }
        ,
        e.allowCapitalisation = function() {
            return e.SelectedProfile.allowCapitalisation
        }
        ,
        e.getLanguageCode = function() {
            return this.SelectedProfile.languageCode
        }
        ,
        e.getCultureCode = function() {
            return this.SelectedProfile.cultureCode
        }
        ,
        e.getCultureCode2 = function() {
            return this.SelectedProfile.cultureCode2
        }
        ,
        e.init = function() {
            e.LanguageProfiles = {
                1: new t(1,"en","en","en-GB",!0,!1,!0),
                2: new t(2,"zht","zh-cht","ch",!1,!0,!1),
                3: new t(3,"es","es","es",!0,!1,!0),
                4: new t(4,"fr","fr","fr",!0,!1,!0),
                5: new t(5,"de","de","de",!0,!1,!0),
                6: new t(6,"it","it","it",!0,!1,!0),
                7: new t(7,"da","da","da",!0,!1,!0),
                8: new t(8,"sv","sv","sv",!0,!1,!0),
                9: new t(9,"nn","nn","no",!0,!1,!0),
                10: new t(10,"zh","zh-chs","zh-cn",!1,!0,!1),
                19: new t(19,"bg","bg","bg",!0,!1,!0),
                20: new t(20,"el","el","el",!0,!1,!1),
                21: new t(21,"pl","pl","pl",!0,!1,!0),
                22: new t(22,"pt","pt","pt",!0,!1,!0),
                23: new t(23,"ro","ro","ro",!0,!1,!0),
                24: new t(24,"cs","cs","cs",!0,!1,!0),
                25: new t(25,"hu","hu","hu",!0,!1,!0),
                26: new t(26,"sk","sk","sk",!0,!1,!0),
                28: new t(28,"nl","nl","nl-nl",!0,!1,!0),
                29: new t(29,"et","et","et-EE",!0,!1,!0),
                30: new t(30,"au","au","en-AU",!0,!1,!0),
                31: new t(31,"ru","ru","ru",!0,!1,!0),
                32: new t(32,"us","us","en-US",!0,!1,!0),
                33: new t(33,"br","br","br",!0,!1,!0),
                34: new t(34,"ja","ja","ja",!1,!0,!1),
                36: new t(36,"es","es","es",!0,!1,!0),
                37: new t(37,"rs","rs","rs",!0,!1,!0)
            }
        }
        ,
        e
    }();
    e.LanguageSettings = n,
    n.init()
}(ns_gen5_ml || (ns_gen5_ml = {})),
function(e) {
    var t = e.LanguageSettings
      , n = function() {
        function e() {}
        return e.GetMonthName = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_MONTHS[t.getLanguageId()]),
            e._mylanguage[n]
        }
        ,
        e.CYC = "年",
        e.JYC = "年",
        e.ALL_MONTHS = {
            1: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            2: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            3: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            4: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            5: ["Januar", "Februar", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            6: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
            7: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober ", "november", "december"],
            8: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
            9: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            10: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            19: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
            20: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            21: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
            22: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            23: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
            24: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            25: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
            26: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
            28: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            29: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
            30: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            31: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            32: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            33: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            34: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            36: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            37: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
        },
        e
    }();
    e.LongMonthNames = n
}(ns_gen5_ml || (ns_gen5_ml = {})),
function(e) {
    var t = e.LanguageSettings
      , n = function() {
        function e() {}
        return e.GetDay = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_DAYS[t.getLanguageId()],
            e._mylanguage || ($assert ? $assert(e._mylanguage, "attempting to resolve ml for undefined languageId " + t.getLanguageId()) : e._mylanguage = e.ALL_DAYS[1])),
            e._mylanguage[n].toString()
        }
        ,
        e.ALL_DAYS = {
            1: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            2: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            3: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            4: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            5: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            6: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            7: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            8: ["Söndag", "Mandag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            9: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            10: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            19: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            20: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            21: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            22: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
            23: ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"],
            24: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            25: ["Vasárnap", "Hétfő", "Kedd", "Szerda", " Csütörtök", "Péntek", "Szombat"],
            26: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            28: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            29: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
            30: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            31: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            32: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            33: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
            34: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "今日", "昨日"],
            36: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            37: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
        },
        e
    }();
    e.LongDayNames = n
}(ns_gen5_ml || (ns_gen5_ml = {})),
function(e) {
    var t = e.LanguageSettings
      , n = function() {
        function e() {}
        return e.GetMonthName = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_MONTHS[t.getLanguageId()],
            e._mylanguage || ($assert ? $assert(e._mylanguage, "attempting to resolve ml for undefined languageId " + t.getLanguageId()) : e._mylanguage = e.ALL_MONTHS[1])),
            t.getRegionIsAsian() ? String(n + 1) + this.CMC : e._mylanguage[n]
        }
        ,
        e.CYC = "年",
        e.CMC = "月",
        e.CDC = "日",
        e.JYC = "年",
        e.JMC = "月",
        e.JDC = "日",
        e.ALL_MONTHS = {
            1: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            2: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            3: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            4: ["janv", "févr", "mars", "avril", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"],
            5: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            6: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            7: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            8: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            9: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            10: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            14: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            19: ["яну", "фев", "мар", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"],
            20: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐου", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            21: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
            22: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"],
            23: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            24: ["led", "úno", "bře", "dub", "kvě", "čer", "čvc", "srp", "zář", "říj", "lis", "pro"],
            25: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            26: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
            28: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            29: ["jan", "veb", "mär", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "det"],
            30: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            31: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Нбр", "Дек"],
            32: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            33: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"],
            34: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            36: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            37: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"]
        },
        e
    }();
    e.ShortMonthNames = n
}(ns_gen5_ml || (ns_gen5_ml = {})),
function(e) {
    var t = e.LanguageSettings
      , n = function() {
        function e() {}
        return e.GetMonthName = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_MONTHS[t.getLanguageId()],
            e._mylanguage || ($assert ? $assert(e._mylanguage, "attempting to resolve ml for undefined languageId " + t.getLanguageId()) : e._mylanguage = e.ALL_MONTHS[1])),
            e._mylanguage[n]
        }
        ,
        e.ALL_MONTHS = {
            1: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            2: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            3: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            4: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            5: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            6: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
            7: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            8: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            9: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            10: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            14: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            19: ["Я", "Ф", "М", "А", "М", "Ю", "Ю", "А", "С", "О", "Н", "Д"],
            20: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
            21: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
            22: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            23: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
            24: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
            25: ["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"],
            26: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            28: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            29: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            30: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            31: ["я", "ф", "м", "а", "м", "и", "и", "а", "с", "о", "н", "д"],
            32: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            33: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            34: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            37: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]
        },
        e
    }();
    e.ShortestMonthNames = n
}(ns_gen5_ml || (ns_gen5_ml = {})),
function(e) {
    var t = e.LanguageSettings
      , n = function() {
        function e() {}
        return e.GetDay = function(n) {
            return e._mylanguage || (e._mylanguage = e.ALL_DAYS[t.getLanguageId()],
            e._mylanguage || ($assert ? $assert(e._mylanguage, "attempting to resolve ml for undefined languageId " + t.getLanguageId()) : e._mylanguage = e.ALL_DAYS[1])),
            e._mylanguage[n]
        }
        ,
        e.ALL_DAYS = {
            1: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            2: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            3: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            4: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
            5: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            6: ["Dom", "Lun", "Mar", "Mer", "Giov", "Ven", "Sab"],
            7: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", " Lør"],
            8: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
            9: ["Søn", "Man", "Tirs", "Ons", "Tors", "Fre", "Lør"],
            10: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            19: ["Нед", "Пон", "Вт", "Ср", "Чет", "Пет", "Съб"],
            20: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            21: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
            22: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            23: ["D", "L", "Ma", "Mi", "J", "V", "S"],
            24: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            25: ["Vas", "Hét", "Kedd", "Sze", " Csüt", "Pén", "Szo"],
            26: ["Ned", "Pon", "Ut", "Str", "Štv", "Pia", "Sob"],
            28: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            29: ["P", "E", "T", "K", "N", "R", "L"],
            30: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            31: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            32: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            33: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            34: ["日", "月", "火", "水", "木", "金", "土"],
            36: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            37: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"]
        },
        e
    }();
    e.ShortDayNames = n
}(ns_gen5_ml || (ns_gen5_ml = {})),
function(e) {
    var t, n = e.LanguageSettings, i = e.ShortMonthNames, r = e.ShortestMonthNames, o = e.ShortDayNames, s = null, a = null, c = null, u = {
        lookup: {
            1: "st",
            2: "nd",
            3: "rd",
            21: "st",
            22: "nd",
            23: "rd",
            31: "st"
        },
        "default": "th"
    }, l = function(e) {
        var t = a;
        return t.lookup ? t.lookup && t.lookup[e] || t["default"] || "" : t
    }, d = function(e) {
        var t = 10 > e ? "0" : "";
        return "" + t + e
    }, h = function(e) {
        return c ? (0 == e ? e = 12 : e > 12 && (e -= 12),
        "" + e) : d(e)
    }, p = function(e, t) {
        var n = t ? c.am : c.pm;
        return 1 == c.affix ? n + " " + e : e + " " + n
    }, _ = function(e) {
        var t = e.getHours()
          , n = h(t)
          , i = d(e.getMinutes())
          , r = d(e.getSeconds())
          , o = n + ":" + i + ":" + r;
        return c ? p(o, t >= 0 && 12 > t) : o
    }, g = function(e) {
        var t = e.getHours()
          , n = h(t)
          , i = d(e.getMinutes())
          , r = n + ":" + i;
        return c ? p(r, t >= 0 && 12 > t) : r
    }, f = function(e) {
        var t = d(e.getHours())
          , n = d(e.getMinutes());
        return t + ":" + n
    }, m = function(e) {
        return {
            sMth: i.GetMonthName(e.getMonth()),
            dom: e.getDate(),
            hhmm: g(e)
        }
    }, E = function(e) {
        var t = m(e);
        return t.sMth + " " + t.dom + " " + t.hhmm
    }, v = function(e) {
        var t = m(e);
        return "" + t.sMth + t.dom + i.CDC + " " + t.hhmm
    }, y = function(e) {
        var t = m(e);
        return "" + t.sMth + t.dom + i.JDC + t.hhmm
    }, S = function(e) {
        var t = m(e);
        return t.dom + " " + t.sMth + " " + t.hhmm
    }, C = function(e) {
        return {
            sMth: i.GetMonthName(e.getMonth()),
            sDay: o.GetDay(e.getDay()),
            zpDoM: d(e.getDate())
        }
    }, T = function(e) {
        var t = C(e);
        return t.sDay + " " + t.sMth + t.zpDoM + i.CDC
    }, L = function(e) {
        var t = C(e);
        return t.sDay + " " + t.sMth + " " + t.zpDoM
    }, D = function(e) {
        var t = i.GetMonthName(e.getMonth())
          , n = e.getDate()
          , r = o.GetDay(e.getDay());
        return "" + t + n + i.JDC + "(" + r + ")"
    }, b = function(e) {
        var t = C(e);
        return t.sDay + " " + t.zpDoM + " " + t.sMth
    }, I = function(e) {
        var t = e.getFullYear() % 100
          , n = O(e);
        return n + " " + t
    }, A = function(e) {
        var t = e.getFullYear() % 100
          , n = P(e);
        return n + " " + t
    }, M = function(e) {
        var t = e.getFullYear()
          , n = e.getMonth() + 1
          , r = e.getDate();
        return "" + t + i.JYC + n + i.JMC + r + i.JDC
    }, N = function(e) {
        var t = e.getFullYear() % 100
          , n = k(e);
        return n + " " + t
    }, R = function(e) {
        return {
            sMth: i.GetMonthName(e.getMonth()),
            zpDoM: d(e.getDate())
        }
    }, O = function(e) {
        var t = R(e);
        return "" + t.sMth + t.zpDoM + i.CDC
    }, P = function(e) {
        var t = R(e);
        return t.sMth + " " + t.zpDoM
    }, w = function(e) {
        var t = i.GetMonthName(e.getMonth())
          , n = e.getDate();
        return "" + t + n + i.JDC
    }, k = function(e) {
        var t = R(e);
        return t.zpDoM + " " + t.sMth
    }, H = function(t) {
        var n = t.getDay();
        return e.LongDayNames.GetDay(n)
    }, x = function(e) {
        var t = e.getDay();
        return o.GetDay(t)
    }, F = function(e) {
        var t = ve(e);
        return "" + t.dom + t.domSfx
    }, U = function(e) {
        var t = ve(e);
        return "" + t.dom
    }, G = function(e) {
        var t = ve(e);
        return "" + t.dom
    }, B = function(e) {
        var t = Ee(e);
        return "" + t.dom + t.domSfx + " " + t.month
    }, V = function(e) {
        var t = Ee(e);
        return t.month + " " + t.dom + t.domSfx
    }, Y = function(e) {
        var t = e.getMonth();
        return r.GetMonthName(t)
    }, z = function(e) {
        var t = $(e);
        return t.sMth + " " + t.yyyy
    }, J = function(e) {
        var t = Q(e);
        return t.lMth + " " + t.yyyy
    }, W = function(e) {
        var t = ve(e);
        return t.dom + "$" + i.JDC + "}"
    }, j = function(e) {
        var t = ve(e);
        return "" + t.dom + t.domSfx
    }, $ = function(e) {
        return {
            yyyy: e.getFullYear(),
            sMth: i.GetMonthName(e.getMonth())
        }
    }, Q = function(t) {
        return {
            yyyy: t.getFullYear(),
            lMth: e.LongMonthNames.GetMonthName(t.getMonth())
        }
    }, K = function(t) {
        var n = Q(t);
        return "" + n.yyyy + e.LongMonthNames.CYC + n.lMth
    }, q = function(e) {
        var t = Q(e);
        return t.yyyy + " " + t.lMth
    }, X = function(t) {
        var n = Q(t);
        return "" + n.yyyy + e.LongMonthNames.JYC + n.lMth
    }, Z = function(t) {
        return {
            yyyy: t.getFullYear(),
            lMth: e.LongMonthNames.GetMonthName(t.getMonth()),
            dom: t.getDate()
        }
    }, ee = function(t) {
        var n = Z(t);
        return "" + n.yyyy + e.LongMonthNames.CYC + n.lMth + n.dom + i.CDC
    }, te = function(t) {
        var n = Z(t);
        return "" + n.yyyy + e.LongMonthNames.JYC + n.lMth + n.dom + i.JDC
    }, ne = function(e) {
        var t = Z(e);
        return t.dom + " " + t.lMth + " " + t.yyyy
    }, ie = function(e) {
        return {
            yyyy: e.getFullYear(),
            sMth: i.GetMonthName(e.getMonth()),
            dom: e.getDate(),
            sDay: o.GetDay(e.getDay()),
            hhmm: g(e)
        }
    }, re = function(e) {
        var t = ie(e);
        return t.sDay + " " + t.yyyy + i.CYC + t.sMth + t.dom + i.CDC + ", " + t.hhmm
    }, oe = function(e) {
        var t = ie(e);
        return t.sDay + ", " + t.dom + " " + t.sMth + " " + t.yyyy + ", " + t.hhmm
    }, se = function(e) {
        var t = ie(e);
        return t.sDay + " " + t.yyyy + " " + t.sMth + " " + t.dom + " " + t.hhmm
    }, ae = function(e) {
        var t = ie(e);
        return t.sDay + " " + t.sMth + " " + t.dom + " " + t.yyyy + ", " + t.hhmm
    }, ce = function(e) {
        var t = ie(e);
        return "" + t.yyyy + i.JYC + t.sMth + t.dom + i.JDC + "(" + t.sDay + ")" + t.hhmm
    }, ue = function(e) {
        var t = ie(e);
        return t.sDay + " " + t.dom + " " + t.sMth + " " + t.yyyy + ", " + t.hhmm
    }, le = function(e) {
        return {
            yyyy: e.getFullYear(),
            sMth: i.GetMonthName(e.getMonth()),
            dom: e.getDate(),
            sDay: o.GetDay(e.getDay()),
            hhmmss: _(e)
        }
    }, de = function(e) {
        var t = le(e);
        return t.sDay + " " + t.yyyy + i.CYC + t.sMth + t.dom + i.CDC + ", " + t.hhmmss
    }, he = function(e) {
        var t = le(e);
        return t.sDay + ", " + t.dom + " " + t.sMth + " " + t.yyyy + ", " + t.hhmmss
    }, pe = function(e) {
        var t = le(e);
        return t.sDay + " " + t.yyyy + " " + t.sMth + " " + t.dom + " " + t.hhmmss
    }, _e = function(e) {
        var t = le(e);
        return t.sDay + " " + t.sMth + " " + t.dom + " " + t.yyyy + ", " + t.hhmmss
    }, ge = function(e) {
        var t = le(e);
        return "" + t.yyyy + i.JYC + t.sMth + t.dom + i.JDC + "(" + t.sDay + ")" + t.hhmmss
    }, fe = function(e) {
        var t = le(e);
        return t.sDay + " " + t.dom + " " + t.sMth + " " + t.yyyy + ", " + t.hhmmss
    }, me = function(e) {
        var t = e.getDay()
          , n = e.getDate();
        return {
            sMth: i.GetMonthName(e.getMonth()),
            dom: n,
            domSfx: l(n),
            sDay: o.GetDay(t),
            dayOfWeek: t,
            hhmm: g(e)
        }
    }, Ee = function(e) {
        var t = e.getDate()
          , n = e.getMonth();
        return {
            dom: t,
            domSfx: l(t),
            month: i.GetMonthName(n)
        }
    }, ve = function(e) {
        var t = e.getDate();
        return {
            dom: t,
            domSfx: l(t)
        }
    }, ye = function(e) {
        var t = me(e);
        return t.sDay + " " + t.sMth + " " + t.dom + t.domSfx + " " + t.hhmm
    }, Se = function(e) {
        var t = me(e);
        return t.sDay + " " + t.sMth + " " + t.dom + " " + t.hhmm
    }, Ce = function(e) {
        var t = me(e);
        return t.sDay + " " + t.dom + " " + t.sMth + " " + t.hhmm
    }, Te = function(e) {
        var t = me(e);
        return "" + t.sMth + t.dom + i.JDC + "(" + t.sDay + ")" + t.hhmm
    }, Le = function(e) {
        var t = me(e);
        return t.sDay + " " + t.dom + t.domSfx + " " + t.sMth + " " + t.hhmm
    }, De = function(t) {
        var n = e.LongDayNames.GetDay(t.getDay())
          , i = g(t);
        return "" + n + i
    }, be = function(e) {
        var t = o.GetDay(e.getDay())
          , n = g(e);
        return t + " " + n
    }, Ie = function(e) {
        return {
            yyyy: e.getFullYear(),
            zpMth: d(e.getMonth() + 1),
            zpDoM: d(e.getDate())
        }
    }, Ae = function(e) {
        var t = Ie(e);
        return "" + t.yyyy + i.CYC + t.zpMth + i.CMC + t.zpDoM + i.CDC
    }, Me = function(e) {
        var t = Ie(e);
        return t.zpDoM + "." + t.zpMth + "." + t.yyyy
    }, Ne = function(e) {
        var t = Ie(e);
        return t.yyyy + "-" + t.zpMth + "-" + t.zpDoM
    }, Re = function(e) {
        var t = Ie(e);
        return t.zpDoM + ". " + t.zpMth + ". " + t.yyyy
    }, Oe = function(e) {
        var t = Ie(e);
        return t.yyyy + "." + t.zpMth + "." + t.zpDoM
    }, Pe = function(e) {
        var t = Ie(e);
        return t.zpMth + "/" + t.zpDoM + "/" + t.yyyy
    }, we = function(e) {
        var t = Ie(e);
        return t.zpDoM + "/" + t.zpMth + "/" + t.yyyy
    }, ke = function(e) {
        return we(e) + " " + g(e)
    }, He = function(e) {
        return Ae(e) + " " + g(e)
    }, xe = function(e) {
        return Me(e) + " " + g(e)
    }, Fe = function(e) {
        return Ne(e) + " " + g(e)
    }, Ue = function(e) {
        return Re(e) + " " + g(e)
    }, Ge = function(e) {
        return Oe(e) + " " + g(e)
    }, Be = function(e) {
        return Pe(e) + " " + g(e)
    }, Ve = function(e) {
        return M(e) + " " + g(e)
    }, Ye = function(e) {
        return we(e) + " " + f(e)
    }, ze = function(e) {
        return Ae(e) + " " + f(e)
    }, Je = function(e) {
        return Me(e) + " " + f(e)
    }, We = function(e) {
        return Ne(e) + " " + f(e)
    }, je = function(e) {
        return Re(e) + " " + f(e)
    }, $e = function(e) {
        return Oe(e) + " " + f(e)
    }, Qe = function(e) {
        return Pe(e) + " " + f(e)
    }, Ke = function(e) {
        return M(e) + " " + f(e)
    }, qe = function(e) {
        return {
            sMth: i.GetMonthName(e.getMonth()),
            dom: e.getDate(),
            sDay: o.GetDay(e.getDay())
        }
    }, Xe = function(e) {
        var t = qe(e);
        return t.sDay + " " + t.sMth + " " + t.dom
    }, Ze = function(e) {
        var t = qe(e);
        return "" + t.sMth + t.dom + i.JDC + "(" + t.sDay + ")"
    }, et = function(e) {
        var t = qe(e);
        return t.sDay + " " + t.dom + " " + t.sMth
    }, tt = function(e) {
        return {
            sMth: i.GetMonthName(e.getMonth()),
            dom: e.getDate(),
            sDay: o.GetDay(e.getDay()),
            hhmm: g(e)
        }
    }, nt = function(e) {
        var t = tt(e);
        return t.sDay + " " + t.sMth + " " + t.dom + " " + t.hhmm
    }, it = function(e) {
        var t = tt(e);
        return "" + t.sMth + t.dom + i.JDC + "(" + t.sDay + ")" + t.hhmm
    }, rt = function(e) {
        var t = tt(e);
        return t.sDay + " " + t.dom + " " + t.sMth + " " + t.hhmm
    }, ot = function(e) {
        var t = g(e);
        return "" + t
    }, st = {
        methods: {
            bookClose: v,
            dayDateLong: T,
            dayDate: O,
            dateMonthNameYear: I,
            daySuffixDateMonthTime: Ce,
            daySuffix: U,
            daySuffixMonth: V,
            monthShortest: Y,
            dateLongMonthYear: ee,
            dayDateMonthYearTime: re,
            dayDateMonthYearTimeSeconds: de,
            dateMonthYearSlash: Ae,
            dateMonthYearSlashTime: He,
            dateMonthYearSlashTime24h: ze,
            longMonthYear: K
        }
    }, at = {
        affix: 1,
        am: "上午",
        pm: "下午"
    }, ct = {
        meridiem: null,
        suffix: "",
        methods: {
            bookClose: S,
            dayDateLong: b,
            dayDate: k,
            dateMonthNameYear: N,
            day: H,
            dayShort: x,
            hhmm: g,
            hhmm24h: f,
            hhmmss: _,
            daySuffixDateMonthTime: Le,
            daySuffix: F,
            daySuffixMonth: B,
            monthShortest: Y,
            monthYear: z,
            dateLongMonthYear: ne,
            dayDateMonthYearTime: ue,
            dayDateMonthYearTimeSeconds: fe,
            daySuffixTime: be,
            dateMonthYearSlash: we,
            dateMonthYearSlashTime: ke,
            dateMonthYearSlashTime24h: Ye,
            dayDateMonthTime: rt,
            dayDateMonth: et,
            time: ot,
            longMonthYear: J
        }
    }, ut = {
        1: {
            suffix: u
        },
        2: st,
        3: {
            suffix: "°"
        },
        4: {
            suffix: {
                lookup: {
                    1: "er"
                },
                "default": ""
            }
        },
        5: {
            suffix: ".",
            methods: {
                dateMonthYearSlash: Me,
                dateMonthYearSlashTime: xe,
                dateMonthYearSlashTime24h: Je
            }
        },
        6: {
            suffix: {
                lookup: {
                    1: "°",
                    21: "°",
                    31: "°"
                }
            }
        },
        7: {
            suffix: "."
        },
        8: {
            suffix: {
                lookup: {
                    0: "e:",
                    1: ":a",
                    2: ":a",
                    20: "e:",
                    21: ":a",
                    22: ":a",
                    30: "e:",
                    31: ":a"
                },
                "default": ":e"
            },
            methods: {
                dateMonthYearSlash: Ne,
                dateMonthYearSlashTime: Fe,
                dateMonthYearSlashTime24h: We
            }
        },
        9: {
            suffix: ".",
            methods: {
                dateMonthYearSlash: Me,
                dateMonthYearSlashTime: xe,
                dateMonthYearSlashTime24h: Je
            }
        },
        10: st,
        19: {
            methods: {
                dateMonthYearSlash: Me,
                dateMonthYearSlashTime: xe,
                dateMonthYearSlashTime24h: Je
            }
        },
        21: {
            suffix: ".",
            methods: {
                dateMonthYearSlash: Me,
                dateMonthYearSlashTime: xe,
                dateMonthYearSlashTime24h: Je
            }
        },
        23: {
            methods: {
                dayDateMonthYearTime: oe,
                dayDateMonthYearTimeSeconds: he,
                dateMonthYearSlash: Me,
                dateMonthYearSlashTime: xe,
                dateMonthYearSlashTime24h: Je
            }
        },
        24: {
            suffix: ".",
            methods: {
                dateMonthYearSlash: Re,
                dateMonthYearSlashTime: Ue,
                dateMonthYearSlashTime24h: je
            }
        },
        25: {
            suffix: ".",
            methods: {
                bookClose: E,
                dayDateLong: L,
                dayDate: P,
                dateMonthNameYear: A,
                dayDateMonthYearTime: se,
                daySuffixMonth: V,
                dayDateMonthYearTimeSeconds: pe,
                dateMonthYearSlash: Oe,
                dateMonthYearSlashTime: Ge,
                dateMonthYearSlashTime24h: $e,
                longMonthYear: q
            }
        },
        26: {
            suffix: ".",
            methods: {
                dateMonthYearSlash: Me,
                dateMonthYearSlashTime: xe,
                dateMonthYearSlashTime24h: Je
            }
        },
        28: {
            suffix: "e"
        },
        29: {
            methods: {
                dateMonthYearSlash: Me,
                dateMonthYearSlashTime: xe,
                dateMonthYearSlashTime24h: Je
            }
        },
        31: {
            methods: {
                dateMonthYearSlash: Me,
                dateMonthYearSlashTime: xe,
                dateMonthYearSlashTime24h: Je
            }
        },
        32: {
            methods: {
                bookClose: E,
                dayDateLong: L,
                dayDate: P,
                dateMonthNameYear: A,
                daySuffixDateMonthTime: Se,
                daySuffix: G,
                daySuffixMonth: V,
                monthShortest: Y,
                dayDateMonthYearTime: ae,
                dayDateMonthYearTimeSeconds: _e,
                dayDateMonthTime: nt,
                dayDateMonth: Xe,
                dateMonthYearSlash: Pe,
                dateMonthYearSlashTime: Be,
                dateMonthYearSlashTime24h: Qe
            }
        },
        34: {
            methods: {
                bookClose: y,
                dayDateLong: D,
                dayDate: w,
                dateMonthNameYear: M,
                daySuffixDateMonthTime: Te,
                daySuffix: W,
                monthShortest: Y,
                daySuffixTime: De,
                dateLongMonthYear: te,
                dayDateMonthYearTime: ce,
                dayDateMonthYearTimeSeconds: ge,
                dateMonthYearSlash: M,
                dateMonthYearSlashTime: Ve,
                dateMonthYearSlashTime24h: Ke,
                dayDateMonthTime: it,
                dayDateMonth: Ze,
                longMonthYear: X
            }
        }
    }, lt = {
        CA: {
            1: {
                methods: {
                    bookClose: E,
                    dayDateLong: L,
                    dayDate: P,
                    dateMonthNameYear: A,
                    daySuffixDateMonthTime: ye,
                    daySuffix: j,
                    monthShortest: Y,
                    dayDateMonthYearTime: ae,
                    dayDateMonthYearTimeSeconds: _e,
                    dayDateMonthTime: nt,
                    dayDateMonth: Xe
                }
            }
        },
        US: {
            2: {
                meridiem: at
            },
            3: {
                meridiem: {
                    affix: 2,
                    am: "a.m.",
                    pm: "p.m."
                }
            },
            5: {
                meridiem: null
            },
            10: {
                meridiem: at
            },
            20: {
                meridiem: {
                    affix: 2,
                    am: "π.μ.",
                    pm: "μ.μ."
                }
            },
            25: {
                meridiem: {
                    affix: 1,
                    am: "de.",
                    pm: "du."
                }
            },
            32: {
                meridiem: {
                    affix: 2,
                    am: "AM",
                    pm: "PM"
                },
                methods: {
                    dateMonthYearSlashTime24h: Qe
                }
            },
            Default: {
                meridiem: {
                    affix: 2,
                    am: "AM",
                    pm: "PM"
                },
                methods: {
                    dateMonthYearSlashTime24h: Ye
                }
            }
        }
    }, dt = function() {
        var e, i, r, o, u, l;
        a = ct.suffix,
        c = ct.meridiem,
        s = {};
        for (e in ct.methods)
            s[e] = ct.methods[e];
        if (i = n.getLanguageId() + "",
        r = ut[i],
        r && (a = r.suffix || a,
        c = r.meridiem || c,
        r.methods))
            for (e in r.methods)
                s[e] = r.methods[e];
        if (t || (o = boot.getLocale(),
        o.stateLocale && lt[o.stateLocale] && (t = o.stateLocale),
        !t && o.countryLocale && lt[o.countryLocale] && (t = o.countryLocale)),
        t && lt[t] && (u = lt[t],
        l = u[i] || u.Default,
        l && (c = l.meridiem || c,
        a = l.suffix || a,
        l.methods)))
            for (e in l.methods)
                s[e] = l.methods[e]
    }, ht = function() {
        s = null,
        a = null,
        c = null
    }, pt = function() {
        function e() {}
        return e.FormatDate = function(e, t) {
            s || dt();
            var n = s[e];
            return n(t)
        }
        ,
        e.SetLocaleId = function(e) {
            t = e,
            ht()
        }
        ,
        e.ClearConfigCache = function() {
            ht()
        }
        ,
        e.GetSuffix = function(e) {
            e %= 100;
            var t = 31 >= e ? e : e % 10;
            return s || dt(),
            l(t)
        }
        ,
        e.BOOK_CLOSE = "bookClose",
        e.HH_MM_SS = "hhmmss",
        e.HH_MM = "hhmm",
        e.HH_MM_24H = "hhmm24h",
        e.DAY_SUFFIX_DATE_MONTH_TIME = "daySuffixDateMonthTime",
        e.DAY_DATE_MONTH_YEAR_TIME = "dayDateMonthYearTime",
        e.DAY_SUFFIX_TIME = "daySuffixTime",
        e.DAY_SUFFIX = "daySuffix",
        e.DAY_SUFFIX_MONTH = "daySuffixMonth",
        e.MONTH_SHORTEST = "monthShortest",
        e.MONTH_YEAR = "monthYear",
        e.LONG_MONTH_YEAR = "longMonthYear",
        e.DAY_ONLY = "day",
        e.DAY_ONLY_SHORT = "dayShort",
        e.DAY_DATE = "dayDate",
        e.DAY_DATE_LONG = "dayDateLong",
        e.DATE_LONG_MONTH_YEAR = "dateLongMonthYear",
        e.DAY_DATE_MONTH = "dayDateMonth",
        e.DAY_DATE_MONTH_TIME = "dayDateMonthTime",
        e.DAY_DATE_MONTH_YEAR_TIME_SECONDS = "dayDateMonthYearTimeSeconds",
        e.DATE_MONTHNAME_YEAR = "dateMonthNameYear",
        e.DATE_MONTH_YEAR_SLASH = "dateMonthYearSlash",
        e.DATE_MONTH_YEAR_SLASH_TIME = "dateMonthYearSlashTime",
        e.DATE_MONTH_YEAR_SLASH_TIME_24H = "dateMonthYearSlashTime24h",
        e.TIME_ONLY = "time",
        e
    }();
    e.MLDateFormatter = pt
}(ns_gen5_ml || (ns_gen5_ml = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.Init = function() {
            var t = Locator.user.countryId
              , n = Locator.config.domain.hostname.toLowerCase().split(".");
            e.IsSpanish = t === e.Spain,
            e.IsDanish = t === e.Denmark,
            e.IsGreek = t === e.Greece,
            e.IsCypriot = t === e.Cyprus,
            e.IsItalyDomain = t === e.Italy,
            e.IsBulgarian = t === e.Bulgaria,
            e.IsSpainDomain = "es" == n[n.length - 1],
            e.IsAusDomain = t === e.Australia,
            e.IsCzechRepublic = t === e.CzechRepublic,
            e.IsIndia = t === e.India,
            e.IsEstonia = t === e.Estonia,
            e.IsEstoniaRestricted = e.IsEstonia && Locator.user.restrictedBettingEnabled,
            e.IsMexico = t === e.Mexico,
            e.IsMexicoDomain = "mx" == n[n.length - 1],
            e.IsUnitedStatesOfAmerica = t === e.UnitedStatesOfAmerica,
            e.IsSwedish = t === e.Sweden,
            e.IsDkDomain = "dk" == n[n.length - 1],
            e.IsCanadian = t === e.Canada,
            e.IsAusDomainAndCustomer = e.IsAusDomain && (Locator.user.isLoggedIn || !Locator.user.isLoggedIn && "AU" === Locator.user.countryCode)
        }
        ,
        e.Denmark = "54",
        e.Spain = "171",
        e.Greenland = "218",
        e.Australia = "13",
        e.Germany = "75",
        e.Greece = "78",
        e.Cyprus = "51",
        e.Italy = "97",
        e.Bulgaria = "31",
        e.CzechRepublic = "52",
        e.India = "91",
        e.Estonia = "64",
        e.Mexico = "126",
        e.UnitedStatesOfAmerica = "198",
        e.Sweden = "181",
        e.Canada = "36",
        e.Brazil = "28",
        e
    }();
    e.RegisteredCountry = t
}(ns_gen5_util_user || (ns_gen5_util_user = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.HexStringToNumber = function(e) {
            return Number("0x" + e.slice(1))
        }
        ,
        e.NumberToHexString = function(e) {
            var t = (16777215 & e).toString(16);
            return "#" + "00000".substring(0, 6 - t.length) + t
        }
        ,
        e.AdjustColourBrightness = function(e, t) {
            return e = ((16711680 & e) >> 16) * t << 16 | ((65280 & e) >> 8) * t << 8 | (255 & e) * t,
            e > 16777215 ? 16777215 : e
        }
        ,
        e.AdjustHexBrightness = function(e, t) {
            return this.NumberToHexString(this.AdjustColourBrightness(this.HexStringToNumber(e), t))
        }
        ,
        e.Blend = function(e, t, n) {
            var i = (((16711680 & e) >> 16) * (1 - n) << 16 | ((65280 & e) >> 8) * (1 - n) << 8 | (255 & e) * (1 - n)) + (((16711680 & t) >> 16) * n << 16 | ((65280 & t) >> 8) * n << 8 | (255 & t) * n);
            return i
        }
        ,
        e
    }();
    e.ColourUtil = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t;
    !function(e) {
        function t(e) {
            return e - 0
        }
        function n(t, n) {
            var i = Math.pow(10, n);
            return ((t + e.Epsilon) * i + .5 << 0) / i
        }
        function i(t) {
            return (100 * (t + e.Epsilon) + .5 << 0) / 100
        }
        function r(t) {
            return (100 * (t + e.Epsilon) << 0) / 100
        }
        function o(e) {
            return ~~e
        }
        function s(e) {
            return e - e % 1
        }
        e.Epsilon = Math.pow(2, -52),
        e.StringToNumber = t,
        e.ToNDecimalPlaces = n,
        e.To2DecimalPlaces = i,
        e.RoundDownTo2DecimalPlaces = r,
        e.StringToInteger = o,
        e.Truncate = s
    }(t = e.MathUtil || (e.MathUtil = {}))
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.prototype.setConfigJSON = function(e) {
            this.rawJSON = e,
            this.configJSON = this.rawJSON.config
        }
        ,
        e.prototype.getItem = function(e) {
            return this.configJSON[e]
        }
        ,
        e.prototype.getRawJson = function() {
            return this.rawJSON
        }
        ,
        e
    }();
    e.Config = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e(e) {
            this.message = e,
            this.timestamp = new Date
        }
        return e.prototype.toString = function() {
            return "[" + this.timestamp + "] - " + this.message
        }
        ,
        e
    }();
    e.LogEntry = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    e.EventTrigger = function() {
        "use strict";
        return {
            triggerEventOnElement: function(e, t, n) {
                var i;
                document.createEvent ? (i = document.createEvent("HTMLEvents"),
                i.initEvent(t, !0, !0)) : (i = document.createEventObject(),
                i.eventType = t),
                i.eventName = t,
                i.data = n || {},
                document.createEvent ? document.dispatchEvent(i) : document.fireEvent("on" + i.eventType, i)
            }
        }
    }()
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e(e, t) {
            this.scope = e,
            this.method = t
        }
        return e.prototype.toString = function() {
            return "[Delegate scope=" + this.scope + "]"
        }
        ,
        e
    }();
    e.Delegate = t,
    e.EventListener = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t;
    !function(e) {
        e[e.DEFAULT = 1] = "DEFAULT",
        e[e.FRACTIONAL = 1] = "FRACTIONAL",
        e[e.DECIMAL = 2] = "DECIMAL",
        e[e.AMERICAN = 3] = "AMERICAN",
        e[e.AMERICANFRACTIONAL = 4] = "AMERICANFRACTIONAL"
    }(t = e.OddsType || (e.OddsType = {}))
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.NOT_SUSPENDED = "0",
        e.SUSPEND_AND_SHOW = "1",
        e.OFF_THE_BOARD = "2",
        e.IPPG_SUSPEND_AND_HIDE = "3",
        e
    }();
    e.SuspendType = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t, n, i = {}, r = {};
    !function(e) {
        e[e.AVAILABLE = 0] = "AVAILABLE",
        e[e.BELOW_MINIMUM = 1] = "BELOW_MINIMUM",
        e[e.NOT_OFFERED = 2] = "NOT_OFFERED"
    }(t = e.OddsAvailable || (e.OddsAvailable = {})),
    n = function() {
        function e() {}
        return e.ConvertOddsDecimal = function(t, n, r) {
            var o, s, a, c, u, l, d, h;
            if (n || 0 == n || (n = 2),
            r || 0 == r || (r = !0),
            o = t + n,
            r && (i[o] || !t))
                return i[o];
            if (a = t.indexOf("/", 1),
            a > -1)
                if (s = [t.slice(0, a), t.slice(++a)],
                c = Number(Number(s[0]) / Number(s[1]) + (r ? 1 : 0)).toFixed(4),
                Number(c) < 1.1 && c.split(".")[1].length > 2 && 0 == e.MinOdds && "0" !== c.charAt(c.length - 2) && (n = 3),
                u = 0,
                l = c.indexOf(".", 1),
                0 == n)
                    c = c.slice(0, l > -1 ? l : 2147483647);
                else if (l > -1)
                    if (u = n - (c.length - ++l),
                    u > 0)
                        for (d = 0; u > d; d++)
                            c += "0";
                    else
                        0 > u && (c = c.slice(0, c.length + u));
                else
                    for (c += ".",
                    h = 0; n > h; h++)
                        c += "0";
            return r && (i[o] = c),
            c
        }
        ,
        e.ConvertOddsUS = function(e) {
            var t, n, i, o, s, a;
            return r[e] || !e ? r[e] : (i = e.indexOf("/", 1),
            i > -1 && (n = [e.slice(0, i), e.slice(++i)],
            o = Number(n[0]),
            s = Number(n[1]),
            a = o / s,
            t = a > .999999 ? "+" + Math.floor(100 * a + 1e-6) : "-" + Math.floor(s / o * 100 + .999999)),
            r[e] = t,
            t)
        }
        ,
        e.AreOddsBelowMinimum = function(t) {
            if (e.MinOdds <= 1)
                return !1;
            var n = e.ConvertOddsDecimal(t, 4);
            return isNaN(n) ? !1 : n - 0 < e.MinOdds
        }
        ,
        e.AreOddsRestricted = function(e) {
            var t, n, i = e.data.PX, r = !1;
            if (i) {
                t = -1,
                n = Locator.user.countryCode64;
                do
                    t = i.indexOf(n, ++t);
                while (-1 != t && t % 2);
                r = t > -1
            }
            return r
        }
        ,
        e.ConvertDecimalOddsToFractional = function(t) {
            var n, i, r, o = String(t), s = Math.pow(o.length, 10), a = (t - 1) * s, c = e.FactorOdds(a, s);
            return c ? (i = a / c,
            r = s / c) : (i = a,
            r = s),
            n = String(i) + "/" + String(r)
        }
        ,
        e.FactorOdds = function(t, n) {
            var i;
            return i = e.HCF(t, n),
            Math.floor(i)
        }
        ,
        e.HCF = function(t, n) {
            var i;
            return i = 0 == t ? n : 0 == n ? t : e.HCF(n, t % n),
            Math.floor(i)
        }
        ,
        e.AreOddsAvailable = function(e, n) {
            var i = n ? n : e.data.OD;
            return this.AreOddsBelowMinimum(i) ? t.BELOW_MINIMUM : this.AreOddsRestricted(e) ? t.NOT_OFFERED : t.AVAILABLE
        }
        ,
        e.MinOdds = 0,
        e.NOT_OFFERED = "N / O",
        e
    }(),
    e.OddsConverter = n
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e(e, t) {
            this.min = e,
            this.max = t
        }
        return e.prototype.getLength = function() {
            return this.max - this.min
        }
        ,
        e
    }();
    e.Range = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e(e) {
            this.type = e,
            $assert && $assert(e, '"type" has not been defined on ' + this)
        }
        return e.prototype.toString = function() {
            return "[Event365 type=" + this.type + "]"
        }
        ,
        e.SInit = function() {
            e.prototype.stopPropagation = !1,
            e.prototype.target = null,
            e.prototype.currentTarget = null
        }(),
        e
    }();
    e.Event365 = t
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.type = t,
            i.data = n,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[Event365 type=" + this.type + ", data = " + this.data + "]"
        }
        ,
        t.DATA = "data",
        t
    }(e.Event365);
    e.DataEvent = t
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.prototype.toString = function() {
            return "[EventDispatcher]"
        }
        ,
        e.prototype.addEventListener = function(e, t) {
            $assert && $assert(t, "handlerDelegate must be defined."),
            this._eRegister || (this._eRegister = {},
            this._touchlist = {});
            var n = this._eRegister[e];
            n ? n[n.length] = t : this._eRegister[e] = [t]
        }
        ,
        e.prototype.dispatchEvent = function(e) {
            var t, n, i, r;
            if (e.target ? e.currentTarget = this : e.target = e.currentTarget = this,
            this._eRegister && (t = e.type,
            n = this._eRegister[t]))
                for (this._touchlist[t] && this.cleanRegister(t),
                r = 0; r < n.length; r++) {
                    i = n[r];
                    try {
                        i && i.method.call(i.scope, e)
                    } catch (o) {
                        ErrorReporter.Trace(i.scope, o)
                    }
                }
        }
        ,
        e.prototype.bubbleEvent = function(e) {
            if (this.dispatchEvent(e),
            !e.stopPropagation)
                for (var t = this.parent; t; ) {
                    if (t.bubbleEvent) {
                        t.bubbleEvent(e);
                        break
                    }
                    t = t.parent
                }
        }
        ,
        e.prototype.removeEventListener = function(e, t) {
            var n, i;
            return this._eRegister ? (n = this._eRegister[e],
            void (n && (i = n.indexOf(t)) > -1 ? (n[i] = void 0,
            this._touchlist[e] = !0) : $assert && $assert(!1, "removeEventListener call failed because the delegate didn't exist."))) : void ($assert && $assert(!1, "removeEventListener call failed because the eRegister doesn't exist."))
        }
        ,
        e.prototype.hasEventListener = function(e) {
            if (!this._eRegister)
                return !1;
            this._touchlist[e] && this.cleanRegister(e);
            var t = this._eRegister[e];
            return t && t.length > 0
        }
        ,
        e.prototype.hasEventListenerWithDelegate = function(e, t) {
            if (!this._eRegister)
                return !1;
            this._touchlist[e] && this.cleanRegister(e);
            var n = this._eRegister[e];
            return !!(n && n.indexOf(t) > -1)
        }
        ,
        e.prototype.cleanRegister = function(e) {
            var t, n, i, r, o;
            for (this._touchlist[e] = !1,
            t = this._eRegister[e],
            n = [],
            i = 0,
            r = t; i < r.length; i++)
                o = r[i],
                o && (n[n.length] = o);
            this._eRegister[e] = n
        }
        ,
        e.SInit = function() {
            e.prototype._eRegister = null,
            e.prototype._touchlist = null
        }(),
        e
    }();
    e.EventDispatcher = t
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            void 0 === n && (n = NaN);
            var i = e.call(this, t) || this;
            return i.width = n,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ApplicationEvent]"
        }
        ,
        t.LOADING = "loading",
        t.LOADING_COMPLETE = "loadingComplete",
        t.LOADING_TIMEOUT = "loadingTimeout",
        t.UNLOADING = "unloading",
        t.WIDTH_STATE_CHANGED = "widthStateChanged",
        t.VIEW_STATE_CHANGED = "viewStateChanged",
        t.HEIGHT_CHANGED = "heightChanged",
        t.WIDTH_CHANGED = "widthChanged",
        t.FOCUS_IN = "focusIn",
        t.FOCUS_OUT = "focusOut",
        t
    }(e.Event365);
    e.ApplicationEvent = t
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.ODDS_TYPE_CHANGED = "oddsChanged",
        t.LANGUAGE_CHANGED = "languageChanged",
        t
    }(e.Event365);
    e.UserEvent = t
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.MODULE_READY = "moduleReady",
        t
    }(e.Event365);
    e.ModuleEvent = t
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = e.Event365
      , n = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.BALANCEMODEL_UPDATE_EVENT = "balanceModelUpdated",
        t
    }(t);
    e.BalanceModelEvent = n
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.modal = n,
            i
        }
        return __extends(t, e),
        t.MODAL_CHANGE = "modalChange",
        t
    }(e.Event365);
    e.ModalEvent = t
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = function(e) {
        function t(t, n, i) {
            var r = e.call(this, t) || this;
            return r.x = n,
            r.y = i,
            r
        }
        return __extends(t, e),
        t.SCROLL_TO = "scrollTo",
        t
    }(e.Event365);
    e.ScrollEvent = t
}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = ns_gen5_events.EventDispatcher
      , n = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.preformattedXML = t,
            n
        }
        return __extends(t, e),
        t.prototype.setPreformattedXML = function(e) {
            this.preformattedXML !== e && (this.preformattedXML = e)
        }
        ,
        t.prototype.parse = function(e) {
            var t, n, i;
            if (e && this.setPreformattedXML(e),
            window.DOMParser && DOMParser.prototype.parseFromString)
                n = new DOMParser,
                t = n.parseFromString(this.preformattedXML, "text/xml");
            else {
                if (n = new ActiveXObject("Microsoft.XMLDOM"),
                n.aSync && (n.aSync = !1),
                i = n.loadXML(this.preformattedXML),
                !i)
                    return ErrorReporter.Trace(this, "Unable to parse XML"),
                    null;
                t = n
            }
            return t
        }
        ,
        t
    }(t);
    e.XMLParser = n
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.overrun = n,
            i
        }
        return __extends(t, e),
        t.COMPLETE = "complete",
        t.TICK = "tick",
        t
    }(ns_gen5_events.Event365);
    e.TimerEvent = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = e.TimerEvent
      , n = e.Date365
      , i = function(e) {
        function i(t, n) {
            var i = e.call(this) || this;
            return i.time = t,
            i.timeStarted = null,
            i.tickTimeout = -1,
            i.repeats = n || 0,
            i.ticks = 0,
            i.callback_tickHandler = function() {
                return i.tickHandler()
            }
            ,
            i
        }
        return __extends(i, e),
        i.After = function(e, t) {
            var n = new i(e);
            return n.completeDelegate = function() {
                return Locator.validationManager.callLater(t)
            }
            ,
            n.start(),
            n
        }
        ,
        i.prototype.start = function() {
            if (this.timerStoppedTime) {
                var e = this.timerStoppedTime.getTime() - this.timeStarted.getTime();
                this.timeStarted = n.FromUnix(n.Now().getTime() - e / 1e3),
                this.timerStoppedTime = null
            } else
                this.timeStarted = n.Now();
            this.tickTimeout = window.setTimeout(this.callback_tickHandler, this.time > 1e3 ? 1e3 : this.time),
            this.active = !0
        }
        ,
        i.prototype.reset = function() {
            this.tickTimeout > -1 && (clearTimeout(this.tickTimeout),
            this.tickTimeout = -1),
            this.ticks = 0,
            this.timerStoppedTime = null,
            this.timeStarted = null,
            this.active && (this.active = !1)
        }
        ,
        i.prototype.stop = function() {
            this.tickTimeout > -1 && (this.timerStoppedTime = n.Now(),
            clearTimeout(this.tickTimeout),
            this.tickTimeout = -1,
            this.active = !1)
        }
        ,
        i.prototype.tickHandler = function() {
            if (n.Now().getTime() - this.timeStarted.getTime() < this.time)
                return void (this.tickTimeout = window.setTimeout(this.callback_tickHandler, this.time > 1e3 ? 1e3 : this.time));
            if (this.repeats > -1 && ++this.ticks >= this.repeats) {
                var e = n.Now().getTime() - this.timeStarted.getTime() - this.time;
                this.dispatchEvent(new t(t.COMPLETE,e)),
                this.completeDelegate && this.completeDelegate(),
                this.active = !1
            } else
                this.dispatchEvent(new t(t.TICK)),
                this.tickDelegate && this.tickDelegate(),
                this.start()
        }
        ,
        i
    }(ns_gen5_events.EventDispatcher);
    e.Timer = i
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function(e) {
        function t(t, n, i) {
            var r = e.call(this, t) || this;
            return r.date = n,
            r.dateZoneAdjusted = i,
            r
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[TimeManagerEvent type=" + this.type + "]"
        }
        ,
        t.TICK = "tick",
        t
    }(ns_gen5_events.Event365);
    e.TimeManagerEvent = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = e.TimeManagerEvent
      , n = e.Date365
      , i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.delegates = [],
            t._callback_serverTime_tick = function() {
                t._serverTime_tick()
            }
            ,
            t
        }
        return __extends(i, e),
        i.prototype.addTimeDelegate = function(e) {
            var t = this;
            return this._serverDate ? void Locator.validationManager.callLater(function() {
                e.serverTimeReceived(t._serverDate.clone())
            }) : void this.delegates.push(e)
        }
        ,
        i.prototype.removeTimeDelegate = function(e) {
            var t = this.delegates.indexOf(e);
            -1 !== t && this.delegates.splice(t, 1)
        }
        ,
        i.prototype.getTime = function() {
            return this._serverDate ? this._serverDate.clone() : null
        }
        ,
        i.prototype.getTimeZoneAdjustedDate = function() {
            var e = this._serverDateZoneAdjusted ? this._serverDateZoneAdjusted : this._serverDate;
            return e ? e.clone() : null
        }
        ,
        i.prototype.setServerTime = function(e) {
            var t, i, r;
            for (this._serverTime || (Locator.validationManager.callLater(this._callback_serverTime_tick),
            this._lastUpdatedMS = (new Date).getTime()),
            this._serverTime = e,
            this._serverDate = n.From2Char(e),
            this._lastUpdatedMS = (new Date).getTime(),
            this._serverDateZoneAdjusted = this._serverDate.toTimeZone(),
            t = 0,
            i = this.delegates; t < i.length; t++)
                r = i[t],
                r.serverTimeReceived(this._serverDate.clone());
            this.delegates = []
        }
        ,
        i.prototype._serverTime_tick = function() {
            var e, n, i, r;
            this._serverDate && (n = (new Date).getTime(),
            i = n - this._lastUpdatedMS,
            this._lastUpdatedMS = n,
            r = this._serverDate.getTime() + i,
            this._serverDate.setTime(r),
            this._serverDateZoneAdjusted ? (r = this._serverDateZoneAdjusted.getTime() + i,
            this._serverDateZoneAdjusted.setTime(r),
            e = this._serverDateZoneAdjusted) : e = this._serverDate,
            this.dispatchEvent(new t(t.TICK,this._serverDate,e)),
            window.setTimeout(this._callback_serverTime_tick, 1e3))
        }
        ,
        i
    }(ns_gen5_events.EventDispatcher);
    e.TimeManager = i
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    e.PrintDump = function() {
        "use strict";
        function e(n, i) {
            var r, o, s, a, c, u;
            for (i || (i = 0),
            r = t(n),
            o = "",
            a = "",
            c = 0; i > c; c++)
                a += "  ";
            switch (r) {
            case "string":
                return '"' + n + '"';
            case "number":
                return n.toString();
            case "boolean":
                return n ? "true" : "false";
            case "date":
                return "Date: " + n.toLocaleString();
            case "array":
                for (o += "List ( \n",
                s = 0; s < n.length; s++)
                    o += a + "  " + s + " => " + e(n[s], i + 1) + "\n";
                o += a + ")";
                break;
            case "object":
                o += "\n";
                for (u in n)
                    n.hasOwnProperty(u) && (o += a + "  " + u + ": " + e(n[u], i + 1) + "\n");
                break;
            default:
                o += "N/A: " + r
            }
            return o
        }
        function t(e) {
            var t = typeof e;
            if ("object" !== t)
                return t;
            switch (e) {
            case null:
                return "null"
            }
            switch (e.constructor) {
            case Array:
                return "array";
            case Boolean:
                return "boolean";
            case Date:
                return "date";
            case Number:
                return "number";
            case Object:
                return "object"
            }
            return "Unknown"
        }
        function n(t) {
            return e(t)
        }
        return n
    }()
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = "\r\n"
      , n = " -------------------- "
      , i = function() {
        function i() {}
        return i.prototype.buildHeader = function(e) {
            return "*" + n + e + n + "*" + t
        }
        ,
        i.prototype.generate = function() {
            var e = [this._appendSummary()];
            return e.push(this._appendNavigationHistory()),
            e.push(this._appendManifest()),
            e.push(this._appendSiteProps()),
            e.push(this._appendSettings()),
            e.push(this._pushedConfig()),
            e.push(this._appendNavigator()),
            e.push(this._appendReadIt()),
            e.push(this._appendSportSubscriptions()),
            e.push(this._appendPrivateSubscriptions()),
            e.push(this._appendErrorLog()),
            e.push(this._appendTraceLog()),
            e.push(this._appendOpenBetsLog()),
            e.push(this._appendAAATCookie()),
            e.push(this._appendSiteDataLocal()),
            e.join("\n")
        }
        ,
        i.prototype.send = function() {
            var e = new XMLHttpRequest;
            e.open("POST", "/api/1/clienterrors/ots", !0),
            e.send(this.generate())
        }
        ,
        i.prototype._appendSiteProps = function() {
            return ""
        }
        ,
        i.prototype._appendAAATCookie = function() {
            var t = e.CookieManager.GetCookieValue("aaat");
            return t ? this.buildHeader("Alternative Auth Token Cookie") + t : ""
        }
        ,
        i.prototype._appendSiteDataLocal = function() {
            if ("siteDataLocal"in window) {
                var t = window.siteDataLocal.siteData;
                return t.constructor = Object,
                this.buildHeader("Site Data Local") + e.PrintDump(t)
            }
            return ""
        }
        ,
        i.prototype._appendManifest = function() {
            var e, n, i = this.buildHeader("Manifest");
            i = i.concat("MasterVersion:" + Locator.manifestManager.getBuildVersion() + t),
            e = Locator.manifestManager.getDependencyLookup();
            for (n in e)
                e.hasOwnProperty(n) && (i = i.concat(n + ":" + t),
                i = i.concat("  version:" + e[n].v + t),
                i = i.concat(t));
            return i
        }
        ,
        i.prototype._appendSettings = function() {
            var n, i, r = Locator.user, o = this.buildHeader("User");
            o = o.concat("sessionId: " + e.CookieManager.GetSessionId() + t);
            for (n in r)
                if (r.hasOwnProperty(n)) {
                    if (i = r[n],
                    "object" == typeof i)
                        try {
                            i = JSON.stringify(i)
                        } catch (s) {
                            i = ""
                        }
                    i && (o = o.concat(n + ":" + i + t))
                }
            return o
        }
        ,
        i.prototype._pushedConfig = function() {
            var e, n = "", i = Locator.pushedConfig, r = this.buildHeader("pushedConfig");
            for (n in i)
                if (i.hasOwnProperty(n)) {
                    if (e = i[n],
                    "object" == typeof e)
                        try {
                            e = JSON.stringify(e)
                        } catch (o) {
                            e = ""
                        }
                    e && (r = r.concat(n + ":" + e + t))
                }
            return r
        }
        ,
        i.prototype._appendSummary = function() {
            var e = "";
            return e = e.concat("Current Url:" + Locator.config.domain.href() + t),
            e = e.concat("Current time:" + new Date + t)
        }
        ,
        i.prototype._appendNavigator = function() {
            var e = window.navigator
              , n = this.buildHeader("Navigator");
            return n = n.concat("UserAgent:" + e.userAgent + t),
            n = n.concat("Language:" + (e.language || e.userLanguage) + t),
            n = n.concat("Vendor:" + e.vendor + t),
            n = n.concat("Platform:" + e.platform + t)
        }
        ,
        i.prototype._appendNavigationHistory = function() {
            return ""
        }
        ,
        i.prototype._appendReadIt = function() {
            var e, n = readit.ReadItLog.getLog(), i = this.buildHeader("ReadIt");
            for (e = 0; e < n.length; e++)
                i = i.concat(n[e].toString() + t);
            return i
        }
        ,
        i.prototype._appendSportSubscriptions = function() {
            return this.buildHeader("SubscriptionManager - Sports") + Locator.subscriptionManager._OtsReport()
        }
        ,
        i.prototype._appendPrivateSubscriptions = function() {
            return this.buildHeader("PrivateSubscriptionManager") + Locator.privateSubscriptionManager._OtsReport()
        }
        ,
        i.prototype._appendErrorLog = function() {
            var e, n = ErrorReporter.GetLog(), i = this.buildHeader("Error Reporter");
            for (e = 0; e < n.length; e++)
                i = i.concat(n[e] + t);
            return i
        }
        ,
        i.prototype._appendTraceLog = function() {
            var i, r, o, s, a = e.InfoReporter.getLog(), c = this.buildHeader("Trace Log");
            for (i in a)
                for (c = c.concat(n + i + n + t),
                r = 0,
                o = a[i]; r < o.length; r++)
                    s = o[r],
                    c = c.concat(s + t);
            return c = c.concat(n + t)
        }
        ,
        i.prototype._appendOpenBetsLog = function() {
            var e, n, i = "";
            try {
                if (n = Locator.treeLookup.getReference("OPENBETS"))
                    for (i = this.buildHeader("Open Bets"),
                    e = 0; e < n.getChildren().length; e++)
                        i = i.concat(n.getChildren()[e].data.IT + t)
            } catch (r) {
                i = ""
            }
            return i
        }
        ,
        i
    }();
    e.OTSReport = i
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = ns_gen5_ml.LanguageSettings
      , n = function() {
        function e() {}
        return e.Format = function(e) {
            var t, n, i, r = [];
            for (t = 1; t < arguments.length; t++)
                r[t - 1] = arguments[t];
            if (!e)
                return null;
            for (n = r.length,
            i = 0; n > i; i++)
                e = e.split("{" + i + "}").join(r[i]);
            return e
        }
        ,
        e.Uppercase = function(e) {
            return e ? t.allowCapitalisation() ? e.toUpperCase() : e : ""
        }
        ,
        e.Trim = function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        }
        ,
        e.DecodeHtmlEntity = function(e) {
            return e ? e.replace(this.HTML_ENTITY_REGEX, function(e, t) {
                return String.fromCharCode(t)
            }) : ""
        }
        ,
        e.HTML_ENTITY_REGEX = /&#(\d+);/g,
        e
    }();
    e.StringUtil = n
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e() {
            this.endPageRenderReceivers = [],
            this.pageRenderEndQueued = !1
        }
        return e.prototype.pageRenderEnd = function() {
            var e = this;
            this.pageRenderEndQueued || (this.pageRenderEndQueued = !0,
            Locator.validationManager.callNewContext(function() {
                Locator.validationManager.callNewContext(function() {
                    e.callPageRenderEndReceivers(),
                    e.pageRenderEndQueued = !1
                })
            }))
        }
        ,
        e.prototype.registerEndPageRenderReceivers = function(e) {
            $assert && $assert(-1 === this.endPageRenderReceivers.indexOf(e), "Delegate already exists"),
            this.endPageRenderReceivers.push(e)
        }
        ,
        e.prototype.callPageRenderEndReceivers = function() {
            for (; this.endPageRenderReceivers.length; ) {
                var e = this.endPageRenderReceivers.shift();
                e.pageLoaded()
            }
        }
        ,
        e
    }();
    e.PageRender = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.getUnloadedDependencies = function(e) {
            var t, n, i, r, o, s, a;
            if (!this.Lookup)
                return null;
            for (t = [],
            n = Locator.manifestManager.getApp(e),
            n && boot.isAppRequest && t.push(e + "-App"),
            i = Locator.manifestManager.getLocaleNames(e),
            i && i.length && (r = boot.getLocale(),
            r.stateLocale && i.indexOf(r.stateLocale) > -1 ? t.push(e + "-" + r.stateLocale) : i.indexOf(r.countryLocale) > -1 ? t.push(e + "-" + r.countryLocale) : t.push(e + "-Default")),
            o = 0,
            s = this.Lookup[e].d || []; o < s.length; o++)
                a = s[o],
                this.LoadedDependenciesLookup[a] || t.push(a);
            return t.length ? t : null
        }
        ,
        e.setLookup = function(e) {
            this.Lookup = e
        }
        ,
        e.setLoaded = function(e) {
            this.LoadedDependenciesLookup[e] = !0
        }
        ,
        e.IsLoaded = function(e) {
            return e in this.LoadedDependenciesLookup
        }
        ,
        e.LoadedDependenciesLookup = {},
        e
    }();
    e.DependencyManager = t
}(ns_gen5_net || (ns_gen5_net = {})),
function(e) {
    var t, n, i = ns_gen5_util.Timer, r = ns_gen5_util.TimerEvent, o = function() {
        function e(e) {
            this.keys = [],
            e && this.deSerialize(e)
        }
        return e.prototype.addPair = function(e, t) {
            this.keys[this.keys.length] = [e, t]
        }
        ,
        e.prototype.getPairWithKey = function(e) {
            var t, n, i;
            for (t = 0,
            n = this.keys; t < n.length; t++)
                if (i = n[t],
                i[0] == e)
                    return i[1];
            return null
        }
        ,
        e.prototype.getKeys = function() {
            return this.keys
        }
        ,
        e.prototype.serialize = function() {
            var e, t, n, i = "";
            for (e = 0,
            t = this.keys; e < t.length; e++)
                n = t[e],
                i += n[0] + "=" + encodeURIComponent(n[1]) + "&";
            return i.length ? i.slice(0, i.length - 1) : i
        }
        ,
        e.prototype.deSerialize = function(e) {
            var t, n, i, r, o = e.split("&");
            for (t = 0,
            n = o; t < n.length; t++)
                i = n[t],
                r = i.indexOf("="),
                r > -1 && this.addPair(i.substring(0, r), i.substring(r + 1))
        }
        ,
        e
    }();
    e.URLVariables = o,
    t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.COMPLETE = "complete",
        t.ERROR = "error",
        t.TIMEOUT = "timeout",
        t
    }(ns_gen5_events.Event365),
    e.LoaderEvent = t,
    n = function(n) {
        function o() {
            var e = null !== n && n.apply(this, arguments) || this;
            return e.instanceCounter = o.Counter++,
            e
        }
        return __extends(o, n),
        o.prototype.load = function(n, s) {
            var a, c = this;
            void 0 === s && (s = {}),
            e.url = n + (s && s.method != o.POST && s.urlVariables && "?" + s.urlVariables.serialize() || ""),
            e.body = s.data || "",
            s.customRequestHeaders || (s.customRequestHeaders = {}),
            a = function(u) {
                var l, d, h, p = u.detail;
                if (p) {
                    if (window.removeEventListener("xcft" + c.instanceCounter, a),
                    l = c.isSameDomainCheck(Locator.config.domain.host, n),
                    l ? (s.customRequestHeaders["X-Request-Id"] = Locator.Guid,
                    s.customRequestHeaders["X-Net-Sync-Term"] = p) : s.withCrossDomainXCFT && (s.customRequestHeaders["X-Net-Sync-Term"] = p),
                    e.url = "",
                    c.url = n,
                    c.options = s,
                    s && s.timeout && (c.timer = new i(s.timeout,1),
                    c.timer.addEventListener(r.COMPLETE, c.delegate_timeHandler = new ns_gen5_util.Delegate(c,function() {
                        c.abort(),
                        c.timeoutHandler && Locator.validationManager.callNewContext(function() {
                            return c.timeoutHandler()
                        }),
                        c.hasEventListener(t.TIMEOUT) && Locator.validationManager.callNewContext(function() {
                            return c.dispatchEvent(new t(t.TIMEOUT))
                        })
                    }
                    )),
                    c.timer.start()),
                    o.App)
                        return o.App.load(n, s, function(e) {
                            return c.onInternalRequestComplete(e)
                        });
                    if (d = c.xhr = new XMLHttpRequest,
                    d.onreadystatechange = function() {
                        return c.onInternalRequestComplete(d)
                    }
                    ,
                    d.open(s && s.method || "GET", n + (s && s.method != o.POST && s.urlVariables && "?" + s.urlVariables.serialize() || ""), !0),
                    s && s.contentType && d.setRequestHeader("Content-type", s.contentType),
                    s && s.customRequestHeaders)
                        for (h in s.customRequestHeaders)
                            d.setRequestHeader(h, s.customRequestHeaders[h]);
                    d.withCredentials = s && s.withCredentials || !1,
                    d.send((s && s.method == o.POST ? s.urlVariables && s.urlVariables.serialize() : null) || s && s.data || "")
                }
            }
            ,
            window.addEventListener("xcft" + this.instanceCounter, a),
            window.dispatchEvent(new CustomEvent("xcftr",{
                detail: this.instanceCounter
            }))
        }
        ,
        o.prototype.abort = function() {
            try {
                this.xhr && (this.xhr.onreadystatechange = null,
                this.xhr = null)
            } catch (e) {}
            this.disposeTimer()
        }
        ,
        o.prototype.getURL = function() {
            return this.url
        }
        ,
        o.prototype.onInternalRequestComplete = function(e) {
            var n, i, r = this;
            4 == e.readyState && (this.xhr = null,
            200 == e.status ? (this.completeHandler && Locator.validationManager.callNewContext(function() {
                return r.completeHandler && r.completeHandler(e.responseText, e.status)
            }),
            this.hasEventListener(t.COMPLETE) && (n = new t(t.COMPLETE),
            n.status = e.status,
            n.data = e.responseText,
            Locator.validationManager.callNewContext(function() {
                return r.dispatchEvent(n)
            }))) : (this.errorHandler && Locator.validationManager.callNewContext(function() {
                return r.errorHandler(e.status, e.responseText)
            }),
            this.hasEventListener(t.ERROR) && (i = new t(t.ERROR),
            i.status = e.status,
            i.data = e.responseText,
            Locator.validationManager.callNewContext(function() {
                return r.dispatchEvent(i)
            }))),
            this.disposeTimer(),
            delete this.options.customRequestHeaders,
            ns_gen5_util_logging.ReplayLogger.RecordPullRequest({
                URL: this.url.replace("/legacyproxyapi", ""),
                options: this.options || {},
                response: {
                    readyState: e.readyState,
                    responseText: e.responseText,
                    status: e.status
                }
            }))
        }
        ,
        o.prototype.disposeTimer = function() {
            this.timer && (this.timer.removeEventListener(r.COMPLETE, this.delegate_timeHandler),
            this.timer.stop(),
            this.timer = null)
        }
        ,
        o.prototype.isSameDomainCheck = function(e, t) {
            return -1 == t.indexOf("://") ? !0 : (e = -1 != e.indexOf("//") ? e.split("//")[1] : e,
            e == t.split("/")[2].toLowerCase())
        }
        ,
        o.GET = "GET",
        o.POST = "POST",
        o.Counter = 0,
        o
    }(ns_gen5_events.EventDispatcher),
    e.Loader = n
}(ns_gen5_net || (ns_gen5_net = {})),
function(e) {
    var t;
    !function(e) {
        e[e.LANGUAGE = 1] = "LANGUAGE",
        e[e.CSS = 2] = "CSS",
        e[e.APP = 4] = "APP"
    }(t = e.LoadingFlags || (e.LoadingFlags = {}))
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = ns_gen5_util.LoadingFlags
      , n = function() {
        function n() {
            this.pendingModules = [],
            this.callbacks = []
        }
        return n.prototype.loadModule = function(t, n, i) {
            var r = this;
            e.DependencyManager.IsLoaded(t) || (e.DependencyManager.setLoaded(t),
            this.pendingModules.push({
                id: t,
                resourcePack: n
            }),
            this.callbacks.push(i),
            this.flushing || (Locator.validationManager.callLater(function() {
                r.flushing = !1,
                r.flushModules()
            }),
            this.flushing = !0))
        }
        ,
        n.prototype.flushModules = function() {
            var i, r, o, s, a, c, u = n.ResolvePackDependencies(this.pendingModules), l = Locator.manifestManager.getDependencyLookup(), d = boot.BLOB_URL, h = u.length;
            for (i = 0; i < u.length; i++)
                r = u[i],
                e.DependencyManager.setLoaded(r.id),
                o = l[r.id],
                s = o.v,
                d += r.id + "/" + s + "/",
                o.f & t.CSS && (d += "S",
                h++,
                r.resourcePack && r.resourcePack.resourcesNeeded++),
                o.f & t.LANGUAGE && (d += "L",
                h++,
                r.resourcePack && r.resourcePack.resourcesNeeded++),
                i !== u.length - 1 && (d += boot.getBlobDelimiter());
            a = this.callbacks,
            c = function() {
                var e, t, n, i, r, o;
                for (e = 0,
                t = u; e < t.length; e++)
                    n = t[e],
                    n.resourcePack && (n.resourcePack.resourcesLoaded = n.resourcePack.resourcesNeeded);
                for (i = 0,
                r = a; i < r.length; i++)
                    (o = r[i])()
            }
            ,
            boot.loadBlob(d, c, {
                expectedFiles: h
            }),
            this.pendingModules.length = 0,
            this.callbacks = []
        }
        ,
        n.ResolveDependencies = function(t) {
            var n, i, r, o, s, a, c, u = [];
            for (n = 0,
            i = t.slice().sort(); n < i.length; n++) {
                if (r = i[n],
                o = e.DependencyManager.getUnloadedDependencies(r))
                    for (s = 0,
                    a = this.ResolveDependencies(o); s < a.length; s++)
                        c = a[s],
                        -1 === u.indexOf(c) && u.push(c);
                -1 === u.indexOf(r) && u.push(r)
            }
            return u
        }
        ,
        n.ResolvePackDependencies = function(t) {
            var n, i, r, o, s, a, c, u = [], l = {};
            for (n = 0,
            i = t.slice().sort(); n < i.length; n++) {
                if (r = i[n],
                o = e.DependencyManager.getUnloadedDependencies(r.id))
                    for (s = 0,
                    a = this.ResolveDependencies(o); s < a.length; s++)
                        c = a[s],
                        l[c] || (u.push({
                            id: c
                        }),
                        l[c] = !0);
                l[r.id] || (u.push(r),
                l[r.id] = !0)
            }
            return u
        }
        ,
        n
    }();
    e.ModuleLoaderBlob = n
}(ns_gen5_net || (ns_gen5_net = {})),
function(e) {
    var t = e.LoadingFlags
      , n = function() {
        function e() {
            this.manifest = _websiteManifest
        }
        return e.prototype.getBuildVersion = function(e) {
            return e ? this.manifest.m[e].v : this.manifest.v
        }
        ,
        e.prototype.getDefaultTopic = function(e) {
            return this.manifest.m[e].t
        }
        ,
        e.prototype.getDependencyLookup = function() {
            return this.manifest.m
        }
        ,
        e.prototype.getDefaultApiLocation = function(e) {
            return this.manifest.m[e].u
        }
        ,
        e.prototype.getLocaleNames = function(e) {
            return this.manifest.m[e] ? this.manifest.m[e].l : []
        }
        ,
        e.prototype.getApp = function(e) {
            return !!(this.manifest.m[e].f & t.APP)
        }
        ,
        e
    }();
    e.WebsiteManifest = n
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this) || this;
            return i._url = t,
            i._options = n,
            i
        }
        return __extends(t, e),
        t.prototype.load = function() {
            e.prototype.load.call(this, this._url, this._options)
        }
        ,
        t
    }(ns_gen5_net.Loader)
      , n = function() {
        function e() {}
        return e.QueueForLogSubmission = function(e, n) {
            $assert && $assert(e, "URL isn't defined."),
            this.LoggingQueue[this.LoggingQueue.length] = new t(e,n)
        }
        ,
        e.ProcessQueue = function() {
            var e, t, n, i = this.LoggingQueue;
            for (this.LoggingQueue = [],
            e = i.length,
            t = 0; e > t; t++)
                try {
                    n = i[t],
                    n.load()
                } catch (r) {
                    ErrorReporter.Trace(this, r)
                }
        }
        ,
        e.LoggingQueue = [],
        e
    }();
    e.ServerLogger = n
}(ns_gen5_util_logging || (ns_gen5_util_logging = {})),
function(e) {
    var t = e.ServerLogger
      , n = function() {
        function e() {}
        return e.QueueError = function(t, n, i, r) {
            var o, s, a, c, u, l, d, h, p;
            void 0 === r && (r = "");
            try {
                if (e.LogLevel > 0) {
                    if (100 * Math.random() > e.LogLevel)
                        return
                } else {
                    if (!Locator.pushedConfig.getArePropertiesInitialised())
                        return;
                    if (o = (ns_gen5_util.MathUtil.StringToNumber(Locator.pushedConfig.getAttributeValue("WL")) || 0) * e.ErrorMultiplier,
                    o > 0 && 1e4 * Math.random() > o)
                        return
                }
                if (s = n.stack || n.message,
                a = s && s.split("\n"),
                c = void 0,
                u = void 0,
                l = void 0,
                "string" == typeof t)
                    c = t;
                else if (c = t.moduleName || "",
                c || (d = ns_gen5_ui.Module.getRoot(t),
                d && (c = d.parent.moduleName || "")),
                t._styleList)
                    for (h in t._styleList)
                        c = c + " " + h;
                p = void 0,
                a && a[1] ? (a[0].indexOf(n.message) > -1 ? (u = a[1].match(/\.([<>\w\d]+)\s/i),
                p = u ? u[1] : "Window") : a[0].indexOf("@") > -1 && (p = a[0].split("@")[0]),
                l = n.message) : l = n + "",
                this.QueueBatch({
                    summary: (c || p || "Unknown") + ": " + p + " encountered an error with the message " + l,
                    filename: c || "Unknown",
                    funcname: p || "Unknown",
                    main: t + "",
                    message: l || "Unknown",
                    stack: s || "Unknown",
                    url: Locator.config.domain.href(),
                    history: (ns_gen5_util.InfoReporter.getLog()[ns_gen5_util.InfoReporterGroups.NAVIGATION_ENTRY] || []).join("\n"),
                    zone: Locator.user.zoneId,
                    language: Locator.user.languageId,
                    sessionid: ns_gen5_util.CookieManager.GetSessionId(),
                    manifestversion: Locator.manifestManager.getBuildVersion(),
                    betstring: window.safeSessionStorage.getItem("betstring") || "Unknown",
                    metadata: i || "",
                    sitename: SITE_ROOT_PATH,
                    timestamp: Math.floor(ns_gen5_util.Date365.Now().toUnix() / 1e3) + "",
                    rid: Locator.Guid,
                    functionalArea: r
                })
            } catch (_) {
                ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "MobileServerLogger failed to submit to the server.")
            }
        }
        ,
        e.QueueBatch = function(e) {
            var n = this;
            this.ErrorMessageArray.push(e),
            -1 === this.TimerId && (this.TimerId = window.setTimeout(function() {
                t.QueueForLogSubmission(Locator.config.clientErrorLocation, {
                    method: "POST",
                    data: JSON.stringify(n.ErrorMessageArray)
                }),
                n.ErrorMessageArray = [],
                n.TimerId = -1
            }, 1e4 + (2e4 * Math.random() | 0)))
        }
        ,
        e.ErrorMessageArray = [],
        e.ErrorMultiplier = 1,
        e.TimerId = -1,
        e.LogLevel = 0,
        e
    }();
    e.ClientErrorLogger = n
}(ns_gen5_util_logging || (ns_gen5_util_logging = {})),
function(e) {
    var t = ns_gen5_net.Loader
      , n = ns_gen5_net.URLVariables
      , i = function() {
        function e() {}
        return e.QueueCounter = function(t, n) {
            try {
                e.CounterLookup[t] ? e.CounterLookup[t] += n : e.CounterLookup[t] = n
            } catch (i) {
                ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "CounterLogger failed to submit to the server.")
            }
        }
        ,
        e.QueueAdd = function(t, n) {
            try {
                e.StatsLookup[t] || (e.StatsLookup[t] = []),
                e.StatsLookup[t] = e.StatsLookup[t].concat(n)
            } catch (i) {
                ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "CounterLogger failed to submit to the server.")
            }
        }
        ,
        e.QueueJSON = function(t, n) {
            e.CounterJSONLookup[t] || (e.CounterJSONLookup[t] = []),
            e.CounterJSONLookup[t].push(JSON.stringify(n))
        }
        ,
        e.ForceCounterFlush = function() {
            e.FlushCounters()
        }
        ,
        e.FlushCounters = function() {
            var i, r, o, s, a, c, u;
            if ("1" === Locator.pushedConfig.getAttributeValue("EC")) {
                if (Object.keys(e.CounterLookup).length || Object.keys(e.StatsLookup).length) {
                    i = new n;
                    for (r in e.CounterLookup)
                        i.addPair(r, e.CounterLookup[r] + "");
                    for (r in e.StatsLookup)
                        for (o = e.StatsLookup[r],
                        s = 0,
                        a = o; s < a.length; s++)
                            c = a[s],
                            i.addPair(r, c);
                    (new t).load("/uicountersapi/increment", {
                        method: "GET",
                        urlVariables: i
                    }),
                    e.CounterLookup = {},
                    e.StatsLookup = {}
                }
                if (Object.keys(e.CounterJSONLookup).length) {
                    u = "[";
                    for (r in this.CounterJSONLookup)
                        u += '{"n": "' + r + '", "v": [' + this.CounterJSONLookup[r] + "]},";
                    u = u.slice(0, u.length - 1),
                    u += "]",
                    (new t).load("/uicountersapi/group/batch", {
                        method: "POST",
                        contentType: "application/json",
                        data: u
                    }),
                    e.CounterJSONLookup = {}
                }
            }
        }
        ,
        e.CounterLookup = {},
        e.StatsLookup = {},
        e.CounterJSONLookup = {},
        e.FlushTimer = setInterval(function() {
            e.FlushCounters()
        }, 1e4),
        e
    }();
    e.CounterLogger = i
}(ns_gen5_util_logging || (ns_gen5_util_logging = {})),
function(e) {
    var t = e.CounterLogger
      , n = ns_gen5_util.Date365
      , i = function() {
        function e(e) {
            this.startTime = this.getTimeStamp(),
            this.key = e
        }
        return e.prototype.getTimeStamp = function() {
            return performance && performance.now ? performance.now() : n.Now().getTime()
        }
        ,
        e.prototype.snapshotTimestampNow = function() {
            this.endTime = this.getTimeStamp()
        }
        ,
        e.prototype.record = function() {
            var e = this.endTime ? this.endTime - this.startTime : this.getTimeStamp() - this.startTime;
            isNaN(e) || t.QueueAdd(this.key, e.toFixed(2))
        }
        ,
        e
    }();
    e.Timer = i
}(ns_gen5_util_logging || (ns_gen5_util_logging = {})),
function(e) {
    var t, n = ns_gen5_net.Loader, i = ns_gen5_net.LoaderEvent, r = ns_gen5_net.URLVariables, o = function() {
        function e() {
            this.data = {}
        }
        return e.UserPreferencesGUID = "ns_gen5_util.UserPreferenceData",
        e
    }();
    e.UserPreferenceData = o,
    t = function() {
        function t() {
            this._preferences = new o,
            this._preferencesInitialised = !1,
            this._pendingRequest = null,
            this._saveToServerCompleteHandlerDelegate = new e.Delegate(this,this._saveToServerCompleteHandler)
        }
        return t.prototype.setUserPreferenceServiceUrl = function(e) {
            $assert && $assert(!this._userPreferenceServiceUrl, "setUserPreferenceServiceUrl: value already set."),
            this._userPreferenceServiceUrl = e
        }
        ,
        t.prototype.loadInitialPreferenceData = function(e) {
            $assert && $assert(!this._preferencesInitialised, "UserPreferencesAPI already initialised!"),
            this._preferencesInitialised || (this._preferencesInitialised = !0,
            e && (this._preferences.data[t.TEAM_PREFERENCE] = e.teamPreference,
            this._preferences.data[t.MARKET_GROUP_PREFERENCE] = e.marketGroupPreference,
            this._preferences.data[t.LEAGUE_TABLE_PREFERENCE] = e.leagueTablePreference,
            this._preferences.data[t.OVERVIEW_DEFAULT_MARKET] = e.overviewDefaultMarketPreference,
            this._preferences.data[t.PREGAME_CLASSIFICATION_MENU_FAVOURITES] = e.prematchClassificationsPreference,
            this._preferences.data[t.INPLAY_FAVOURITE_MARKETS] = e.inplayFavouriteMarkets,
            this._preferences.data[t.ALT_AUTH_DISMISSED_COUNT] = [e.altAuthDismissedCount],
            this._preferences.data[t.NOTIFICATIONS_DEVICEID] = [e.notificationsDeviceID],
            this._preferences.data[t.REMEMBER_STAKE] = [e.rememberStakeValue],
            this._preferences.data[t.PREGAME_CLASSIFICATION_MENU_FREQUENT] = e.prematchFrequentClassificationsPreference,
            this._preferences.data[t.FAVOURITE_IPCOMPETITIONS] = e.inplayFavouriteCompetitions,
            this._preferences.data[t.FAVOURITE_IPFIXTURES] = e.inplayFavouriteFixtures))
        }
        ,
        t.prototype.getSerializationData = function() {
            return this._preferences
        }
        ,
        t.prototype.setSerializationData = function(e) {
            this._preferences = e
        }
        ,
        t.prototype.addValues = function(e, t) {
            var n, i, r, o;
            for (this._preferences.data[e] || (this._preferences.data[e] = []),
            n = this._preferences.data[e],
            i = 0,
            r = t; i < r.length; i++)
                o = r[i],
                -1 === n.indexOf(o) && n.push(o);
            this.save(e)
        }
        ,
        t.prototype.removeValues = function(e, t) {
            var n, i, r = this._preferences.data[e];
            for (n = 0; n < r.length; ++n)
                for (i = 0; i < t.length; ++i)
                    r[n] === t[i] && r.splice(n--, 1);
            this._preferences.data[e] = r,
            this.save(e)
        }
        ,
        t.prototype.setValue = function(e, t) {
            this.setValues(e, [t])
        }
        ,
        t.prototype.setValues = function(e, t) {
            this._preferences.data[e] = t,
            this.save(e)
        }
        ,
        t.prototype.getValue = function(e) {
            var t = this._preferences.data[e];
            return t ? t[0] : ""
        }
        ,
        t.prototype.getValues = function(e) {
            return this._preferences.data[e]
        }
        ,
        t.prototype.save = function(e) {
            this.saveToServer(e)
        }
        ,
        t.prototype.saveToServer = function(e) {
            var t, o, s, a = this;
            if (Locator.user.isLoggedIn) {
                if (this._clearPendingRequest(),
                t = new r,
                e)
                    t.addPair(e, this._preferences.data[e].join(","));
                else
                    for (o in this._preferences.data)
                        t.addPair(o, this._preferences.data[o].join(","));
                s = this._pendingRequest = new n,
                s.addEventListener(i.COMPLETE, this._saveToServerCompleteHandlerDelegate),
                s.errorHandler = function() {
                    return a._clearPendingRequest()
                }
                ,
                s.load(this._userPreferenceServiceUrl, {
                    method: n.POST,
                    urlVariables: t,
                    contentType: "application/x-www-form-urlencoded"
                })
            }
        }
        ,
        t.prototype._saveToServerCompleteHandler = function() {
            $log(this, "Save To Server OK"),
            this._clearPendingRequest()
        }
        ,
        t.prototype._clearPendingRequest = function() {
            this._pendingRequest && (this._pendingRequest.removeEventListener(i.COMPLETE, this._saveToServerCompleteHandlerDelegate),
            this._pendingRequest.abort(),
            this._pendingRequest = null)
        }
        ,
        t.TEAM_PREFERENCE = "te",
        t.MARKET_GROUP_PREFERENCE = "lg",
        t.LEAGUE_TABLE_PREFERENCE = "lt",
        t.OVERVIEW_DEFAULT_MARKET = "odm",
        t.PREGAME_CLASSIFICATION_MENU_FAVOURITES = "lhsf",
        t.INPLAY_FAVOURITE_MARKETS = "ipf",
        t.ALT_AUTH_DISMISSED_COUNT = "aadc",
        t.NOTIFICATIONS_DEVICEID = "nd",
        t.REMEMBER_STAKE = "rs",
        t.PREGAME_CLASSIFICATION_MENU_FREQUENT = "lhsfv",
        t.FAVOURITE_IPCOMPETITIONS = "ipco",
        t.FAVOURITE_IPFIXTURES = "ipfi",
        t
    }(),
    e.UserPreferenceAPI = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e() {
            this._interface = null
        }
        return e.prototype.getValues = function(e) {
            return this._interface && this._interface.getValues(e)
        }
        ,
        e.prototype.getValue = function(e) {
            return this._interface && this._interface.getValue(e)
        }
        ,
        e.prototype.setValues = function(e, t) {
            this._interface && this._interface.setValues(e, t)
        }
        ,
        e.prototype.setValue = function(e, t) {
            this._interface && this._interface.setValue(e, t)
        }
        ,
        e.prototype.setUserPreferenceInterface = function(e) {
            this._interface = e
        }
        ,
        e.prototype.get3wayPreference = function(e) {
            try {
                if (this._interface && this._interface.get3wayPreference)
                    return this._interface.get3wayPreference(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }
        ,
        e.prototype.set3wayPreference = function(e, t) {
            try {
                this._interface && this._interface.set3wayPreference && this._interface.set3wayPreference(e, t)
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
        }
        ,
        e.prototype.getAltAuthDissmisedCount = function() {
            try {
                return this._interface && this._interface.getAltAuthDissmisedCount ? this._interface.getAltAuthDissmisedCount() : 0
            } catch (e) {
                return ErrorReporter.Trace(this, e),
                0
            }
        }
        ,
        e.prototype.setAltAuthDissmisedCount = function(e) {
            try {
                this._interface && this._interface.setAltAuthDissmisedCount && this._interface.setAltAuthDissmisedCount(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getNotificationsDeviceId = function() {
            try {
                if (this._interface && this._interface.getNotificationsDeviceId)
                    return this._interface.getNotificationsDeviceId()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return ""
        }
        ,
        e.prototype.setNotificationsDeviceId = function(e) {
            try {
                if (this._interface && this._interface.setNotificationsDeviceId)
                    return this._interface.setNotificationsDeviceId(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.setTeamPreference = function(e, t) {
            try {
                if (this._interface && this._interface.setTeamPreference)
                    return this._interface.setTeamPreference(e, t)
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
            return !1
        }
        ,
        e.prototype.getTeamPreference = function(e) {
            try {
                if (this._interface && this._interface.getTeamPreference)
                    return this._interface.getTeamPreference(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }
        ,
        e.prototype.getPreferredTeamIds = function() {
            try {
                if (this._interface && this._interface.getPreferredTeamIds)
                    return this._interface.getPreferredTeamIds()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }
        ,
        e.prototype.setLeagueTableLiveUpdates = function(e) {
            try {
                if (this._interface && this._interface.setLeagueTableLiveUpdates)
                    return this._interface.setLeagueTableLiveUpdates(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getLeagueTableLiveUpdates = function() {
            try {
                if (this._interface && this._interface.getLeagueTableLiveUpdates)
                    return this._interface.getLeagueTableLiveUpdates()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return ""
        }
        ,
        e.prototype.setClassificationMenuFavourites = function(e) {
            try {
                if (this._interface && this._interface.setClassificationMenuFavourites)
                    return this._interface.setClassificationMenuFavourites(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getClassificationMenuFavourites = function() {
            try {
                if (this._interface && this._interface.getClassificationMenuFavourites)
                    return this._interface.getClassificationMenuFavourites()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }
        ,
        e.prototype.setClassificationMenuFrequent = function(e) {
            try {
                if (this._interface && this._interface.setClassificationMenuFrequent)
                    return this._interface.setClassificationMenuFrequent(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getClassificationMenuFrequents = function() {
            try {
                if (this._interface && this._interface.getClassificationMenuFrequents)
                    return this._interface.getClassificationMenuFrequents()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return {}
        }
        ,
        e.prototype.setOverviewDefaultMarkets = function(e) {
            try {
                if (this._interface && this._interface.setOverviewDefaultMarkets)
                    return this._interface.setOverviewDefaultMarkets(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getOverviewDefaultMarkets = function() {
            try {
                if (this._interface && this._interface.getOverviewDefaultMarkets)
                    return this._interface.getOverviewDefaultMarkets()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }
        ,
        e.prototype.setRememberStakeValue = function(e) {
            try {
                if (this._interface && this._interface.setRememberStakeValue)
                    return this._interface.setRememberStakeValue(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.getRememberStakeValue = function() {
            try {
                if (this._interface && this._interface.getRememberStakeValue)
                    return this._interface.getRememberStakeValue()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return ""
        }
        ,
        e
    }();
    e.ServerPreferenceManager = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function t() {}
        return t.FilterStemChildren = function(e) {
            var t, n;
            for (n = 0; n < e.getChildren().length; n++)
                (t = e.getChildren()[n]) && this.IsExcludedFromPromotion(t.data.EF) && (t.remove(),
                n--);
            return e.parent && "XL" !== e.parent.nodeName && 0 === e.getChildren().length && Locator.validationManager.callPostValidation(function() {
                return e.parent && e.parent.remove()
            }),
            e.getChildren().length > 0
        }
        ,
        t.IsExcludedFromPromotion = function(n) {
            return 1 == Locator.user.customerType && e.MathUtil.StringToNumber(n) & t.NSW_EXCLUSION_FLAG ? !0 : !!(e.MathUtil.StringToNumber(n) & Locator.user.offerType)
        }
        ,
        t.IsExcludedFromOffers = function(t) {
            return !!(e.MathUtil.StringToNumber(t) & Locator.user.offerType) || !!(e.MathUtil.StringToNumber(t) & Locator.user.offersRestricted)
        }
        ,
        t.NSW_EXCLUSION_FLAG = 4,
        t
    }();
    e.PromotionalFilter = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {}(ns_gen5_validation || (ns_gen5_validation = {})),
function(e) {
    var t = ns_gen5_util_logging.ServerLogger
      , n = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.callLaterQueue = [],
            t.priorityQueue = [],
            t.postValidationQueue = [],
            t.canCreateNewContext = !0,
            t.nextCallLaterQueue = [],
            t.cycleID = -1,
            t.callback_cycleHandler = function() {
                return t.cycleHandler()
            }
            ,
            t.cyclecount = 0,
            t.processQueueFrequency = .05,
            t
        }
        return __extends(n, e),
        n.prototype.toString = function() {
            return "[ValidationManager]"
        }
        ,
        n.prototype.callLater = function(e) {
            $assert && $assert(e, "Callback isn't defined."),
            this.callLaterQueue[this.callLaterQueue.length] = e,
            -1 == this.cycleID && this.cycle()
        }
        ,
        n.prototype.callNewContext = function(e) {
            var t = this;
            $assert && $assert(e, "Callback isn't defined."),
            this.nextCallLaterQueue[this.nextCallLaterQueue.length] = e,
            this.canCreateNewContext && (this.canCreateNewContext = !1,
            window.setTimeout(function() {
                document.body.clientWidth,
                t.canCreateNewContext = !0,
                t.callLaterQueue = t.nextCallLaterQueue.concat(t.callLaterQueue),
                t.nextCallLaterQueue.length = 0,
                t.processValidationCycleNow()
            }, 1))
        }
        ,
        n.prototype.queueForValidation = function(e) {
            var t, n;
            1 != e.validationState && (e.validationState = 1,
            t = e.nestLevel || 0,
            n = this.priorityQueue[t],
            n || (n = this.priorityQueue[t] = []),
            n[n.length] = e,
            -1 == this.cycleID && this.cycle())
        }
        ,
        n.prototype.callPostValidation = function(e) {
            $assert && $assert(e, "Callback isnt defined."),
            this.postValidationQueue[this.postValidationQueue.length] = e,
            -1 == this.cycleID && this.cycle()
        }
        ,
        n.prototype.processValidationCycleNow = function() {
            -1 != this.cycleID && clearTimeout(this.cycleID),
            this.cycleHandler()
        }
        ,
        n.prototype.processCallLaterQueue = function() {
            var e, t, n = this.callLaterQueue;
            for (this.callLaterQueue = [],
            e = n.length,
            t = 0; e > t; t++)
                try {
                    n[t]()
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
        }
        ,
        n.prototype.processValidationQueue = function() {
            var e, t, n, i, r, o, s = this.priorityQueue;
            for (this.priorityQueue = [],
            r = s.length,
            o = 0; r > o; o++)
                if (n = s[o])
                    for (e = 0,
                    t = n.length; t > e; e++)
                        if ((i = n[e]) && 1 == i.validationState)
                            try {
                                i.validationState = 2,
                                i.validateNow(!1),
                                i.validationState = 0
                            } catch (a) {
                                ErrorReporter.Trace(i, a)
                            }
        }
        ,
        n.prototype.processPostValidationQueue = function() {
            var e, t, n = this.postValidationQueue;
            for (this.postValidationQueue = [],
            e = n.length,
            t = 0; e > t; t++)
                try {
                    n[t]()
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
        }
        ,
        n.prototype.cycle = function(e) {
            this.cycleID = window.setTimeout(this.callback_cycleHandler, e || 50)
        }
        ,
        n.prototype.cycleHandler = function() {
            for (this.cyclecount++,
            $timestamp("Start Frame"),
            this.callLaterQueue.length > 0 && this.processCallLaterQueue(); this.priorityQueue.length > 0; )
                this.processValidationQueue();
            this.postValidationQueue.length > 0 && this.processPostValidationQueue(),
            this.callLaterQueue.length > 0 || this.priorityQueue.length > 0 || this.postValidationQueue.length > 0 ? ($timestamp("Recursive Start Frame"),
            this.cycleHandler()) : (Math.random() < this.processQueueFrequency && t.ProcessQueue(),
            this.cycleID = -1)
        }
        ,
        n
    }(ns_gen5_events.EventDispatcher);
    e.ValidationManager = n
}(ns_gen5_validation || (ns_gen5_validation = {})),
function(e) {
    var t = function() {
        function e() {
            this.mlJson = {}
        }
        return e.prototype.toString = function() {
            return "[Resource]"
        }
        ,
        e.prototype.getValue = function(e, t) {
            return this.mlJson[e] || t
        }
        ,
        e
    }();
    e.Resource = t
}(ns_gen5_language || (ns_gen5_language = {})),
function(e) {
    var t, n = function() {
        function e(e, t, n, i, r, o) {
            this.topic = e,
            this.type = t,
            this.item = n,
            this.nodeType = i,
            this.info = r,
            this.stem = o
        }
        return e.prototype.toString = function() {
            return "[DataMessage type=" + this.type + " item=" + this.item + " nodeType=" + this.nodeType + " info=" + this.info + "]"
        }
        ,
        e
    }();
    e.DataMessage = n,
    t = function() {
        function e() {}
        return e.SNAPSHOT = "F",
        e.UPDATE = "U",
        e.INSERT = "I",
        e.DELETE = "D",
        e
    }(),
    e.DataMessageType = t
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[StemEvent type=" + this.type + "]"
        }
        ,
        t.UPDATE = "update",
        t.INSERT = "insert",
        t.DELETE = "delete",
        t.CHILD_DELETE = "childDelete",
        t
    }(ns_gen5_events.Event365);
    e.StemEvent = t
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = e.StemEvent
      , n = e.DataMessage
      , i = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._delegateList = [],
            t._actualChildren = [],
            t
        }
        return __extends(i, e),
        i.prototype.toString = function() {
            return "[Stem]"
        }
        ,
        i.prototype.update = function(e) {
            var n, r, o, s, a, c, u, l, d, h;
            if (e) {
                for (s in e)
                    this.data[s] = e[s];
                if (this.parent)
                    if (a = "OR"in e,
                    a && (c = Number(e.OR),
                    u = this.parent._actualChildren,
                    u.splice(u.indexOf(this), 1),
                    u.splice(c, 0, this)),
                    "FF"in e) {
                        for (l = !1,
                        d = e.FF,
                        h = null,
                        i.FilterToken.lastIndex = 0; !l && null !== (h = i.FilterToken.exec(d)); )
                            l = !(1 & h.index),
                            i.FilterToken.lastIndex--;
                        if (this.filtered != (this.filtered = l)) {
                            if (this.parent._filterInvalidated = !0,
                            this.filtered) {
                                if (this.readonly_length--,
                                this._hasDelegates)
                                    for (n = 0,
                                    r = this._delegateList.length; r > n; n++)
                                        if (o = this._delegateList[n])
                                            try {
                                                o.stemDeleteHandler(this)
                                            } catch (p) {
                                                ErrorReporter.Trace(this, p)
                                            }
                                this._hasListeners && this.dispatchEvent(new t(t.DELETE))
                            } else {
                                if (this.parent.getChildren(),
                                this.parent._hasDelegates)
                                    for (n = 0,
                                    r = this.parent._delegateList.length; r > n; n++)
                                        if (o = this.parent._delegateList[n])
                                            try {
                                                o.stemInsertHandler(this.parent, this)
                                            } catch (p) {
                                                ErrorReporter.Trace(this, p)
                                            }
                                this.parent._hasListeners && this.parent.dispatchEvent(new t(t.INSERT,this)),
                                this._filterInvalidated = !0
                            }
                            return
                        }
                    } else
                        a && !this.filtered && this.parent._children && (this.parent._filterInvalidated = !0);
                if (!this.filtered) {
                    if (this._hasDelegates)
                        for (n = 0,
                        r = this._delegateList.length; r > n; n++)
                            if (o = this._delegateList[n])
                                try {
                                    o.stemUpdateHandler(this, e)
                                } catch (p) {
                                    ErrorReporter.Trace(this, p)
                                }
                    this._hasListeners && this.dispatchEvent(new t(t.UPDATE,e))
                }
            }
        }
        ,
        i.prototype.insert = function(e, r) {
            var o, s, a, c, u, l;
            if (r = r || i,
            e instanceof n ? (s = e,
            o = new r,
            o.set_data(s.item),
            o.nodeName = s.nodeType) : e instanceof i ? o = e : (o = new r,
            o.set_data(e)),
            o.parent = this,
            a = o.data.OR,
            a ? this._actualChildren.splice(Number(a), 0, o) : this._actualChildren[this._actualChildren.length] = o,
            o.filtered)
                this._filterInvalidated = !0;
            else {
                if (this._children ? (this._filterInvalidated = !0,
                this.getChildren()) : this.readonly_length++,
                this._hasDelegates)
                    for (c = void 0,
                    u = this._delegateList.length,
                    l = 0; u > l; l++)
                        if (c = this._delegateList[l])
                            try {
                                c.stemInsertHandler(this, o)
                            } catch (d) {
                                ErrorReporter.Trace(this, d)
                            }
                this._hasListeners && this.dispatchEvent(new t(t.INSERT,o))
            }
        }
        ,
        i.prototype.remove = function() {
            var e, n, i, r, o, s, a;
            if (this._hasDelegates)
                for (e = void 0,
                n = this._delegateList.length,
                i = 0; n > i; i++)
                    if (e = this._delegateList[i])
                        try {
                            e.stemDeleteHandler(this)
                        } catch (c) {
                            ErrorReporter.Trace(this, c)
                        }
            for (this._hasListeners && this.dispatchEvent(new t(t.DELETE)),
            o = this._actualChildren.length,
            s = 0; o > s; s++)
                r = this._actualChildren[s],
                r && (r.parent = null,
                r.remove(),
                delete this._actualChildren[s]);
            this.hasLookupReference && Locator.treeLookup.removeReference(this.data.IT),
            this.shadow && (this.shadow.remove(),
            this.shadow = null),
            null != this.parent && (a = this.parent,
            a.removeChildStem(this),
            this.parent = a,
            this.parent._hasListeners && this.parent.hasEventListener(t.CHILD_DELETE) && this.parent.dispatchEvent(new t(t.CHILD_DELETE,this)),
            this.parent = null)
        }
        ,
        i.prototype.removeChildStem = function(e) {
            if (e.parent == this) {
                e.filtered || this.readonly_length--,
                this._children && (this._filterInvalidated = !0);
                var t = this._actualChildren.indexOf(e);
                t > -1 && this._actualChildren.splice(t, 1),
                e.parent = null
            }
        }
        ,
        i.prototype.adoptStem = function(e, t) {
            var n, i, r, o;
            if (null != e.parent) {
                for (n = e.parent,
                i = n._actualChildren,
                r = i.length,
                e.filtered || (n.readonly_length--,
                this.readonly_length++),
                n._children && (n._filterInvalidated = !0),
                o = 0; r > o; o++)
                    if (i[o] == e) {
                        i.splice(o, 1);
                        break
                    }
                e.parent = this,
                (void 0 == t || t > this._actualChildren.length) && (t = this._actualChildren.length),
                this._actualChildren[t] = e,
                this._children && (this._filterInvalidated = !0)
            }
        }
        ,
        i.prototype.set_data = function(e) {
            var n, r, o, s, a, c;
            if (this.data = e,
            this.hasLookupReference || Locator.treeLookup.addReference(this),
            e.FF) {
                for (n = !1,
                r = e.FF,
                o = null,
                i.FilterToken.lastIndex = 0; !n && null !== (o = i.FilterToken.exec(r)); )
                    n = !(1 & o.index),
                    i.FilterToken.lastIndex--;
                n ? (this.filtered = !0,
                this.parent && (this.parent._filterInvalidated = !0)) : this.parent && this.parent.readonly_length++
            } else
                this.parent && this.parent.readonly_length++;
            if (this._hasDelegates)
                for (s = void 0,
                a = this._delegateList.length,
                c = 0; a > c; c++)
                    if (s = this._delegateList[c])
                        try {
                            s.stemUpdateHandler(this, e)
                        } catch (u) {
                            ErrorReporter.Trace(this, u)
                        }
            this._hasListeners && this.dispatchEvent(new t(t.UPDATE,e))
        }
        ,
        i.prototype.getChildren = function() {
            var e, t, n, i, r;
            if (this._filterInvalidated) {
                for (this._filterInvalidated = !1,
                this._children ? this._children.length = 0 : this._children = [],
                e = void 0,
                t = this._actualChildren,
                n = void 0,
                i = t.length,
                r = 0; i > r; r++)
                    e = t[r],
                    e && !e.filtered && (n = this._children.length,
                    e.data.OR = String(n),
                    this._children[n] = e);
                this.readonly_length = this._children.length
            }
            return this._children || this._actualChildren
        }
        ,
        i.prototype.shed = function() {
            var e, n, i, r, o, s = this;
            if (this._hasDelegates)
                for (i = void 0,
                e = 0,
                n = this._delegateList.length; n > e; e++)
                    if (i = this._delegateList[e])
                        try {
                            i.stemDeleteHandler(this)
                        } catch (a) {
                            ErrorReporter.Trace(this, a)
                        }
            for (this._hasListeners && this.dispatchEvent(new t(t.DELETE)),
            $assert && (this.hasClearedDown() || (r = this.data && this.data.IT || "",
            Locator.validationManager.callPostValidation(function() {
                return $assert && $assert(s.hasClearedDown(), "'shed' has been called on this stem, but delegates/listeners still exist. Topic: " + r)
            }))),
            o = this._actualChildren,
            e = 0,
            n = o.length; n > e; e++)
                o[e].shed();
            this.shadow && this.shadow.shed()
        }
        ,
        i.prototype.hasClearedDown = function() {
            var e, t, n;
            for (e = 0,
            t = this._delegateList; e < t.length; e++)
                if (n = t[e])
                    return !1;
            return !this._hasListeners
        }
        ,
        i.prototype.addDelegate = function(e) {
            this._delegateList[this._delegateList.length] = e,
            this._hasDelegates = !0
        }
        ,
        i.prototype.removeDelegate = function(e) {
            var t = this._delegateList.indexOf(e);
            t > -1 && (this._delegateList[t] = void 0)
        }
        ,
        i.prototype.addEventListener = function(t, n) {
            this._numListeners++,
            this._hasListeners = !0,
            e.prototype.addEventListener.call(this, t, n)
        }
        ,
        i.prototype.removeEventListener = function(t, n) {
            this._numListeners--,
            this._hasListeners = this._numListeners > 0,
            e.prototype.removeEventListener.call(this, t, n)
        }
        ,
        i.SInit = function() {
            i.prototype._actualChildren = null,
            i.prototype._children = null,
            i.prototype._numListeners = 0,
            i.prototype._hasListeners = !1,
            i.prototype._filterInvalidated = !1,
            i.prototype.data = null,
            i.prototype.parent = null,
            i.prototype.filtered = !1,
            i.prototype.readonly_length = 0,
            i.prototype.nodeName = null,
            i.prototype.hasLookupReference = !1
        }(),
        i.FilterToken = /\^\^\^/,
        i
    }(ns_gen5_events.EventDispatcher);
    e.Stem = i
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = e.Stem
      , n = e.StemEvent
      , i = e.DataMessage
      , r = function(e) {
        function r() {
            var t = e.call(this) || this;
            return t.statGroups = [],
            t.teamGroups = [],
            t.additionalScores = [],
            t
        }
        return __extends(r, e),
        r.prototype.toString = function() {
            return "[FixtureStem]"
        }
        ,
        r.prototype.insert = function(e, r) {
            var o, s, a, c, u, l;
            if (r = r || t,
            e instanceof i ? (s = e,
            o = new r,
            o.set_data(s.item),
            o.nodeName = s.nodeType) : e instanceof t ? o = e : (o = new r,
            o.set_data(e)),
            o.parent = this,
            "ES" == o.nodeName ? this.additionalScores[this.additionalScores.length] = o : "TG" == o.nodeName ? this.teamGroups[this.teamGroups.length] = o : "SG" == o.nodeName ? this.statGroups[this.statGroups.length] = o : (a = o.data.OR,
            a ? this._actualChildren.splice(Number(a), 0, o) : this._actualChildren[this._actualChildren.length] = o,
            o.filtered || (this._children ? (this._filterInvalidated = !0,
            this.getChildren()) : this.readonly_length++)),
            o.filtered)
                this._filterInvalidated = !0;
            else {
                if (this._hasDelegates)
                    for (c = void 0,
                    u = this._delegateList.length,
                    l = 0; u > l; l++)
                        (c = this._delegateList[l]) && c.stemInsertHandler(this, o);
                this._hasListeners && this.dispatchEvent(new n(n.INSERT,o))
            }
        }
        ,
        r.prototype.remove = function() {
            var t, n, i;
            for (e.prototype.remove.call(this),
            n = this.statGroups.length,
            i = 0; n > i; i++)
                t = this.statGroups[i],
                t && (t.parent = null,
                t.remove(),
                delete this.statGroups[i]);
            for (n = this.teamGroups.length,
            i = 0; n > i; i++)
                t = this.teamGroups[i],
                t && (t.parent = null,
                t.remove(),
                delete this.teamGroups[i]);
            for (n = this.additionalScores.length,
            i = 0; n > i; i++)
                t = this.additionalScores[i],
                t && (t.parent = null,
                t.remove(),
                delete this.additionalScores[i])
        }
        ,
        r.prototype.shed = function() {
            var t, n, i, r, o, s, a;
            for (e.prototype.shed.call(this),
            t = 0,
            n = this.additionalScores; t < n.length; t++)
                i = n[t],
                i.shed();
            for (r = 0,
            o = this.teamGroups; r < o.length; r++)
                i = o[r],
                i.shed();
            for (s = 0,
            a = this.statGroups; s < a.length; s++)
                i = a[s],
                i.shed()
        }
        ,
        r.prototype.getLegacyID = function() {
            return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + "-" + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
        }
        ,
        r.prototype.getLegacyIDraw = function() {
            return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
        }
        ,
        r.prototype.getLegacyInPlayNavigationID = function() {
            return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + "C" + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
        }
        ,
        r.prototype.removeChildStem = function(t) {
            var n, i;
            if (t.parent === this) {
                if (e.prototype.removeChildStem.call(this, t),
                "SG" == t.nodeName)
                    n = this.statGroups;
                else if ("TG" == t.nodeName)
                    n = this.teamGroups;
                else {
                    if ("ES" != t.nodeName)
                        return;
                    n = this.additionalScores
                }
                i = n.indexOf(t),
                -1 !== i && n.splice(i, 1)
            }
        }
        ,
        r
    }(e.Stem);
    e.FixtureStem = r
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = function() {
        function e() {
            this.addReferenceEnabled = this.addReference,
            this.addReferenceDisabled = function(e, t) {}
            ,
            this._table = {}
        }
        return e.prototype.toString = function() {
            return "[TreeLookup]"
        }
        ,
        e.prototype.addReference = function(e, t) {
            var n = e.data[t || "IT"];
            n && (this._table[n] = e,
            e.hasLookupReference = !0)
        }
        ,
        e.prototype.getReference = function(e) {
            return this._table[e]
        }
        ,
        e.prototype.removeReference = function(e) {
            var t = this._table[e];
            t && (delete this._table[e],
            t.hasLookupReference = !1)
        }
        ,
        e.prototype.enable = function() {
            this.addReference = this.addReferenceEnabled
        }
        ,
        e.prototype.disable = function() {
            this.addReference = this.addReferenceDisabled
        }
        ,
        e
    }();
    e.TreeLookup = t
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n,
            i
        }
        return __extends(t, e),
        t.INFO_UPDATED = "infoUpdated",
        t.SNAPSHOT_EMPTY = "snapshotEmpty",
        t.SERVER_RECONNECT = "serverReconnect",
        t.CONNECTION_FAILED = "connectionFailed",
        t.RECONNECT_FAILED = "reconnectFailed",
        t.CONNECTED = "connected",
        t.PULL_DATA_RECEIVED = "pullDataReceived",
        t.PULL_REQUEST_FAILED = "pullRequestFailed",
        t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession",
        t
    }(ns_gen5_events.Event365);
    e.StreamDataProcessorEvent = t
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.message = n,
            i
        }
        return __extends(t, e),
        t.BALANCE_RECEIVED = "balanceReceived",
        t.PUSH_MESSAGE_RECEIVED = "pushMessageReceived",
        t
    }(ns_gen5_events.Event365);
    e.PrivateStreamDataProcessorEvent = t
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    e.ModuleContainerFlags = {
        DEFER_LOAD: 2
    }
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    e.SubscriptionManagerFlags = {
        SUPPRESS_SERVER_MESSAGE: 1,
        BATCH: 2,
        SUPPRESS_FULL_HIERARCHY: 4,
        NO_GRACE_PERIOD: 16,
        DONT_BATCH: 32,
        USE_CUSTOM_PARAMS: 64,
        SUPPRESS_STANDARD_QS_PARAMS: 128,
        GLOBAL_CONTEXT: 256,
        VAL: 512
    }
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n,
            i
        }
        return __extends(t, e),
        t.RENEW_SUBSCRIPTION = "renewSubscription",
        t.CONNECTION_FAILED = "connectionFailed",
        t.CONNECTED = "connected",
        t.ERROR = "error",
        t.INFO_UPDATED = "infoUpdated",
        t
    }(ns_gen5_events.Event365);
    e.SubscriptionManagerEvent = t
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = function(e) {
        function t(t, n, i) {
            var r = e.call(this, t) || this;
            return r.topic = n,
            r.message = i,
            r
        }
        return __extends(t, e),
        t.BALANCE_RECEIVED = "balanceReceived",
        t.PUSH_MESSAGE_RECEIVED = "pushMessageReceived",
        t
    }(ns_gen5_events.Event365);
    e.PrivateSubscriptionManagerEvent = t
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    function t(e) {
        e.VI = "0",
        e.VS = "0",
        e.MS = "0"
    }
    var n = e.Stem
      , i = e.DataMessage
      , r = e.DataMessageType
      , o = e.FixtureStem
      , s = ns_gen5_util.MathUtil
      , a = r.SNAPSHOT
      , c = "PH"
      , u = 0
      , l = function() {
        function l() {
            this.toString = function() {
                return "[DataUtil]"
            }
        }
        return l.ProcessStemChanges = function(e, t, n, i, s) {
            var a, c, u, l, d, h = e.type, p = e.item;
            h == r.SNAPSHOT ? s(t) : h == r.UPDATE ? (a = Locator.treeLookup.getReference(t),
            a && a.update(p)) : h == r.INSERT ? (c = i ? t : n,
            u = c.lastIndexOf("/"),
            l = c.lastIndexOf("/", u - 1) + 1,
            d = c.slice(l, u),
            a = Locator.treeLookup.getReference(d),
            a && a.insert(e, "EV" == e.nodeType ? o : null)) : h == r.DELETE && (a = Locator.treeLookup.getReference(t),
            a && a.remove())
        }
        ,
        l.ParseMessage = function(e, d) {
            for (var h, p, _, g, f, m, E, v, y, S, C, T, L, D, b, I, A, M, N, R, O, P, w, k, H, x, F, U, G, B, V, Y, z, J, W, j, $, Q, K, q, X, Z, ee, te, ne, ie, re = Locator.treeLookup, oe = e.charAt(0), se = oe == r.SNAPSHOT || oe == r.INSERT, ae = new n, ce = [], ue = e.indexOf("|", 1), le = ue, de = (p = oe != a) ? 0 : 1, he = Locator.user.countryCode || "", pe = Locator.user.countryStateCode || "", _e = Locator.user.countryCode64, ge = Locator.user.phoneOnlyEnabled; -1 != le; ) {
                for (ue = e.indexOf("|", ++le),
                f = e.slice(le, ue).split(";"),
                g = f.length - 1,
                le = ue,
                m = {},
                y = f[0],
                h = de; g > h; h++)
                    v = f[h],
                    m[v.charAt(0) + v.charAt(1)] = v.substr(3);
                if (se && !m.IT && (m.IT = "_i" + u++),
                !he && !pe && "CB"in m && "" != m.CB && t(m),
                m.CB) {
                    for (Q = !1,
                    K = m.CB,
                    q = null,
                    l.StreamingFilterToken.lastIndex = 0; !Q && null !== (q = l.StreamingFilterToken.exec(K)); )
                        Q = !(1 & q.index),
                        l.StreamingFilterToken.lastIndex--;
                    X = void 0,
                    X != (X = Q) && X && t(m)
                }
                if (ge && "TO"in m) {
                    j = m.TO,
                    $ = -1;
                    do
                        $ = j.indexOf(_e, ++$);
                    while (-1 != $ && 1 == (1 & $));
                    -1 != $ && (m[c] = "1")
                }
                if ("FI"in m && (C = m.FI),
                "TK"in m && (Z = m.TK,
                S = String.fromCharCode(Z.charCodeAt(0) ^ Z.charCodeAt(1))),
                p && "IN" != y)
                    return oe === r.INSERT && "PA" === y ? m.ZW = C + "-" + m.ID : oe === r.UPDATE && m.ID && (ee = Locator.treeLookup.getReference(d),
                    ee && "PA" === ee.nodeName && (C || (C = ee.data.FI),
                    m.ZW = C + "-" + m.ID)),
                    [new i(d,oe,m,y,_)];
                switch (y) {
                case "PA":
                    E = new n,
                    J = O || R || Y || z || ae,
                    C && (m.ZW = C + "-" + m.ID),
                    S && (m._T = S),
                    E.parent = J,
                    P = J._actualChildren[J._actualChildren.length] = E;
                    break;
                case "CO":
                    E = new n,
                    E.parent = R,
                    O = R._actualChildren[R._actualChildren.length] = E;
                    break;
                case "MA":
                    O = null,
                    R = E = new n,
                    W = M || A || z || ae,
                    E.parent = W,
                    W._actualChildren[W._actualChildren.length] = E;
                    break;
                case "MG":
                    O = null,
                    M = E = new n,
                    E.parent = A,
                    A._actualChildren[A._actualChildren.length] = E;
                    break;
                case "CT":
                    N = E = new n,
                    E.parent = I,
                    I._actualChildren[I._actualChildren.length] = E;
                    break;
                case "EV":
                    E = new o,
                    null == I && (I = D || z || ae),
                    W = N || I,
                    E.parent = W,
                    A = E,
                    W._actualChildren[W._actualChildren.length] = E;
                    break;
                case "CL":
                    I = E = new n,
                    N = null,
                    E.parent = b || z || ae,
                    E.parent._actualChildren[E.parent._actualChildren.length] = E;
                    break;
                case "CS":
                    b = E = new n,
                    E.parent = ae,
                    ae._actualChildren[ae._actualChildren.length] = E;
                    break;
                case "TG":
                    w = E = new n,
                    E.parent = A,
                    A.teamGroups[A.teamGroups.length] = E;
                    break;
                case "TE":
                    E = new n,
                    E.parent = w,
                    w._actualChildren[w._actualChildren.length] = E;
                    break;
                case "SG":
                    k = E = new n,
                    E.parent = A,
                    A.statGroups[A.statGroups.length] = E;
                    break;
                case "ST":
                    E = new n,
                    E.parent = k,
                    k._actualChildren[k._actualChildren.length] = E;
                    break;
                case "ES":
                    H = E = new n,
                    E.parent = A,
                    A.additionalScores[A.additionalScores.length] = E;
                    break;
                case "SC":
                    x = E = new n,
                    E.parent = H,
                    H._actualChildren[H._actualChildren.length] = E;
                    break;
                case "SL":
                    E = new n,
                    E.parent = x,
                    x._actualChildren[x._actualChildren.length] = E;
                    break;
                case "AS":
                    F = E = new n,
                    E.parent = A,
                    A._actualChildren[A._actualChildren.length] = E;
                    break;
                case "AP":
                    U = E = new n,
                    E.parent = F,
                    F._actualChildren[F._actualChildren.length] = E;
                    break;
                case "AT":
                    G = E = new n,
                    E.parent = U,
                    U._actualChildren[U._actualChildren.length] = E;
                    break;
                case "AC":
                    B = E = new n,
                    E.parent = G,
                    G._actualChildren[G._actualChildren.length] = E;
                    break;
                case "AE":
                    E = new n,
                    E.parent = B,
                    B._actualChildren[B._actualChildren.length] = E;
                    break;
                case "SP":
                    E = new n,
                    E.parent = P,
                    P._actualChildren[P._actualChildren.length] = E;
                    break;
                case "IN":
                    _ = m;
                    break;
                case "PD":
                    D = E = new n,
                    null == L && (L = T || z || ae),
                    E.parent = L,
                    L._actualChildren[L._actualChildren.length] = E;
                    break;
                case "PS":
                    L = E = new n,
                    null == T && (T = ae),
                    E.parent = T,
                    T._actualChildren[T._actualChildren.length] = E;
                    break;
                case "XL":
                    T = E = new n,
                    ae._actualChildren[ae._actualChildren.length] = T;
                    break;
                case "LG":
                    E.parent = A,
                    A._actualChildren[A._actualChildren.length] = E;
                    break;
                case "XI":
                    ae = E = new n;
                    break;
                case "CG":
                    ae = E = new n;
                    break;
                case "OP":
                    V = E = new n;
                    break;
                case "CF":
                    V = E = new n;
                    break;
                case "BE":
                    Y = E = new n,
                    E.parent = V,
                    V._actualChildren[V._actualChildren.length] = E;
                    break;
                case "SH":
                    z = E = new n,
                    b = null,
                    A = null,
                    M = null,
                    R = null,
                    O = null,
                    ce = [];
                    break;
                default:
                    y ? (te = s.StringToNumber(y),
                    te == te ? (E = new n,
                    te ? (ne = ce[te - 1],
                    ce[te] = E,
                    E.parent = ne,
                    ne._actualChildren[ne._actualChildren.length] = E) : (ce[0] = E,
                    ae._actualChildren[0] = E)) : E = null) : E = null
                }
                E && (E.nodeName = y,
                E.set_data(m))
            }
            return 1 == ae._actualChildren.length && "PA" == ae._actualChildren[0].nodeName ? ae = ae._actualChildren[0] : re.getReference(d) || ae.set_data({
                IT: d
            }),
            z && (re.getReference(d).shadow = z),
            ie = new i(d,oe,ae,y,_,ae),
            [ie]
        }
        ,
        l.ParseMergeMessage = function(n, o) {
            var u, d, h, p, _, g, f, m, E, v, y, S, C, T, L, D, b, I, A, M, N, R, O, P, w, k, H, x, F, U, G, B, V, Y, z, J, W, j, $, Q, K, q, X, Z, ee, te, ne, ie, re, oe, se, ae, ce, ue, le, de, he, pe, _e, ge, fe = Locator.treeLookup, me = [], Ee = n.indexOf("|", 1), ve = Ee, ye = Locator.user.phoneOnlyEnabled, Se = n.charAt(0), Ce = Locator.user.countryCode64, Te = Locator.user.countryStateCode, Le = Locator.user.countryCode, De = Se != a ? 0 : 1, be = {}, Ie = [], Ae = [], Me = [], Ne = [Ie, Ae, Me], Re = [];
            for (be[o] = !0,
            o.lastIndexOf("/") >= 0 && (j = o.substring(o.lastIndexOf("/") + 1, o.length),
            be[j] = !0); -1 != ve; )
                try {
                    if (Ee = n.indexOf("|", ++ve),
                    p = n.slice(ve, Ee).split(";"),
                    h = p.length - 1,
                    ve = Ee,
                    -1 === ve && 0 === h)
                        break;
                    for (_ = {},
                    E = p[0],
                    u = De; h > u; u++)
                        m = p[u],
                        _[m.substr(0, 2)] = m.substr(3);
                    if (!Le && !Te && "CB"in _ && "" != _.CB && t(_),
                    _.CB) {
                        for ($ = !1,
                        Q = _.CB,
                        K = null,
                        l.StreamingFilterToken.lastIndex = 0; !$ && null !== (K = l.StreamingFilterToken.exec(Q)); )
                            $ = !(1 & K.index),
                            l.StreamingFilterToken.lastIndex--;
                        q = void 0,
                        q != (q = $) && q && t(_)
                    }
                    if (ye && "TO"in _) {
                        J = _.TO,
                        W = -1;
                        do
                            W = J.indexOf(Ce, ++W);
                        while (-1 != W && 1 == (1 & W));
                        -1 != W && (_[c] = "1")
                    }
                    switch ("FI"in _ && (y = _.FI),
                    "TK"in _ && (X = _.TK,
                    v = String.fromCharCode(X.charCodeAt(0) ^ X.charCodeAt(1))),
                    E) {
                    case "PA":
                        V = _.IT,
                        Y = N || M || G || B || o,
                        y && (_.ZW = y + "-" + _.ID),
                        v && (_._T = v),
                        f = Y;
                        break;
                    case "CO":
                        N = _.IT,
                        f = M;
                        break;
                    case "MA":
                        N = null,
                        M = _.IT,
                        z = I || b || B || o,
                        f = z;
                        break;
                    case "MG":
                        N = null,
                        I = _.IT,
                        f = b;
                        break;
                    case "CT":
                        A = _.IT,
                        f = D;
                        break;
                    case "EV":
                        null == D && (D = T || o),
                        z = A || D || B,
                        f = z,
                        b = _.IT;
                        break;
                    case "CL":
                        D = _.IT,
                        A = null,
                        f = L || B || o || _.IT;
                        break;
                    case "CS":
                        L = _.IT,
                        f = _.IT;
                        break;
                    case "TG":
                        R = _.IT,
                        f = b;
                        break;
                    case "TE":
                        f = R;
                        break;
                    case "SG":
                        O = _.IT,
                        f = b;
                        break;
                    case "ST":
                        f = O;
                        break;
                    case "ES":
                        P = _.IT,
                        f = b;
                        break;
                    case "SC":
                        w = _.IT,
                        f = P;
                        break;
                    case "SL":
                        f = w;
                        break;
                    case "AS":
                        k = _.IT,
                        f = b;
                        break;
                    case "AP":
                        H = _.IT,
                        f = k;
                        break;
                    case "AT":
                        x = _.IT,
                        f = H;
                        break;
                    case "AC":
                        F = _.IT,
                        f = x;
                        break;
                    case "AE":
                        f = F;
                        break;
                    case "IN":
                        d = _;
                        break;
                    case "PD":
                        T = _.IT,
                        null == C && (C = S || B || o),
                        f = C;
                        break;
                    case "PS":
                        C = _.IT,
                        null == S && (S = o),
                        f = S;
                        break;
                    case "XL":
                        S = _.IT;
                        break;
                    case "LG":
                        f = b;
                        break;
                    case "OP":
                        U = _.IT;
                        break;
                    case "CF":
                        U = _.IT,
                        f = U;
                        break;
                    case "BE":
                        G = _.IT,
                        f = U;
                        break;
                    case "CG":
                        f = _.IT;
                        break;
                    case "SH":
                        B = f = _.IT,
                        L = null,
                        b = null,
                        I = null,
                        M = null,
                        N = null,
                        me = [];
                        break;
                    case "SP":
                        f = V;
                        break;
                    default:
                        Z = s.StringToNumber(E),
                        Z == Z && (ee = _.IT,
                        me[Z] = ee,
                        f = Z ? me[Z - 1] : ee)
                    }
                    if (g = _.IT,
                    be[g] = !0,
                    te = fe.getReference(g),
                    te && (g === f || te.parent && te.parent.data && te.parent.data.IT === f)) {
                        ne = te.data,
                        ie = {},
                        re = !1;
                        for (oe in _)
                            ne[oe] != _[oe] && (re = !0,
                            ie[oe] = _[oe]);
                        re && (ie.IT = g,
                        Me[Me.length] = {
                            topic: g,
                            msgType: r.UPDATE,
                            data: ie,
                            nodeType: E,
                            info: d
                        })
                    } else
                        g !== f ? Ae.push({
                            topic: f + "/" + g,
                            msgType: r.INSERT,
                            data: _,
                            nodeType: E,
                            info: d
                        }) : "EMPTY" === o && "undefined" != typeof d && Ae.push({
                            topic: o,
                            msgType: r.SNAPSHOT,
                            data: _,
                            nodeType: "",
                            info: d
                        })
                } catch (Oe) {
                    ErrorReporter.Trace(l, Oe)
                }
            for (se = fe.getReference(o),
            se && (ce = function(e) {
                var t, n = e.length;
                for (t = 0; n > t; t++)
                    ae(e[t], e)
            }
            ,
            (ae = function(t, n) {
                var i, o;
                if (t) {
                    if (!be[t.data.IT] && (Ie.push({
                        topic: t.data.IT,
                        msgType: r.DELETE,
                        data: t.data,
                        nodeType: t.nodeName
                    }),
                    n && t.parent instanceof e.FixtureStem && (n === t.parent.statGroups || n === t.parent.teamGroups || n === t.parent.additionalScores)))
                        for (i = n.length,
                        o = 0; i > o; o++)
                            n[o] === t && n.splice(o, 1);
                    ce(t.getChildren()),
                    t instanceof e.FixtureStem && (ce(t.statGroups),
                    ce(t.teamGroups),
                    ce(t.additionalScores))
                }
            }
            )(se)),
            ue = Ne.length,
            le = 0; ue > le; le++)
                if (de = Ne[le])
                    for (he = de.length,
                    pe = 0; he > pe; pe++)
                        _e = de[pe],
                        _e && (ge = new i(_e.topic,_e.msgType,_e.data,_e.nodeType,_e.info),
                        Re.push(ge));
            return Re
        }
        ,
        l.Decode2Char = function(e) {
            return e.replace(/\u001E/g, "|").replace(/\u001F/g, ";")
        }
        ,
        l.StreamingFilterToken = /\^\^\^/,
        l
    }();
    e.DataUtil = l
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = e.Stem
      , n = ns_gen5_events.UserEvent
      , i = "GD,GG,GI,GJ"
      , r = function(r) {
        function o() {
            var e = null !== r && r.apply(this, arguments) || this;
            return e.zoneLookup = {
                1: "1",
                3: "0",
                22: "0"
            },
            e.username = null,
            e.geoComplyUserId = null,
            e.migratedSession = !1,
            e.oddsTypeId = null,
            e.languageId = null,
            e.zoneId = null,
            e.timeZoneId = null,
            e.timeZoneAdjustment = null,
            e.timeZoneInitials = null,
            e.timeZoneName = null,
            e.wizeGuy = !1,
            e.displayGroupId = null,
            e.offerType = 1,
            e.offersRestricted = 1,
            e.countryId = null,
            e.countryStateId = null,
            e.countryGroupId = null,
            e.countryCode = null,
            e.countryCode64 = "",
            e.countryState64 = "",
            e.countryStateCode = "",
            e.countryGroup64 = "",
            e.filterMode = null,
            e.phoneOnlyEnabled = !1,
            e.isLoggedIn = !1,
            e.lastLoginTime = null,
            e.telephoneAccountNumber = null,
            e.codiceFiscale = null,
            e.impersonatedUsername = null,
            e.currencyCode = null,
            e.currencyRate = null,
            e.currencyDecimalSeparator = null,
            e.currencyId = null,
            e.userSessionStarted = null,
            e.restrictedBettingEnabled = !1,
            e._balance = null,
            e.cookieSecurityLevel = "",
            e.platformId = "2",
            e.delegates = [],
            e
        }
        return __extends(o, r),
        o.prototype.setCCRMCanShowOffersStatus = function(e) {
            var t, n, i, r;
            for (this.ccrmCanShowOffersStatus = e,
            this.ccrmCanShowOffersStatusSet = !0,
            t = this.delegates.slice(),
            n = 0,
            i = t; n < i.length; n++)
                r = i[n],
                r.userCCRMStatusChanged(this.ccrmCanShowOffersStatus)
        }
        ,
        o.prototype.add = function(e) {
            this.ccrmCanShowOffersStatusSet && e.userCCRMStatusChanged(this.ccrmCanShowOffersStatus),
            this.delegates.push(e)
        }
        ,
        o.prototype.remove = function(e) {
            var t = this.delegates.indexOf(e);
            -1 !== t && this.delegates.splice(t, 1)
        }
        ,
        o.prototype.getBalance = function() {
            return this._balance || (this._balance = ns_gen5_util.Singleton.getInstance(ns_gen5_util.BalanceModel))
        }
        ,
        o.prototype.setSiteConfig = function(e, t, n, i) {
            this.countryId = t,
            this.countryStateId = n,
            this.countryGroupId = i,
            this.filterMode = e,
            this._setStemFilterMode()
        }
        ,
        o.prototype.setOddsTypeId = function(e) {
            this.oddsTypeId != e && (this.oddsTypeId = e,
            this.dispatchEvent(new n(n.ODDS_TYPE_CHANGED)))
        }
        ,
        o.prototype.setLanguageId = function(e) {
            this.languageId != e && (this.languageId = e,
            this.dispatchEvent(new n(n.LANGUAGE_CHANGED)))
        }
        ,
        o.prototype.getFilterToken = function() {
            return new RegExp("(" + this.countryCode64.replace("+", "\\+") + "|" + this.countryState64.replace("+", "\\+") + "|" + this.countryGroup64.replace("+", "\\+") + ")","g")
        }
        ,
        o.prototype.getStreamingFilterToken = function() {
            return Locator.user.countryStateCode ? new RegExp("(" + Locator.user.countryCode + "|" + Locator.user.countryStateCode + ")","g") : new RegExp("(" + Locator.user.countryCode + ")","g")
        }
        ,
        o.prototype.getDefaultZoneForLanguage = function() {
            return this.zoneLookup[Locator.user.languageId] || Locator.user.zoneId
        }
        ,
        o.prototype._setStemFilterMode = function() {
            for (var n, r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "+", "/"], o = [], s = 0, a = 0, c = 0; 4096 > c; )
                n = r[s] + r[a],
                (c + 1) % 64 == 0 && (s++,
                a = -1),
                o[c] = n,
                a++,
                c++;
            this.countryCode64 = o[1024 + Number(this.countryId)],
            this.countryState64 = o[2048 + Number(this.countryStateId)],
            this.countryGroup64 = o[Number(this.countryGroupId)],
            this.phoneOnlyEnabled = i.split(",").indexOf(this.countryCode64) > -1,
            t.FilterToken = this.getFilterToken(),
            e.DataUtil.StreamingFilterToken = this.getStreamingFilterToken()
        }
        ,
        o.FILTER_MODE_COUNTRY_GROUP = "1",
        o.FILTER_MODE_COUNTRY = "2",
        o.FILTER_MODE_COUNTRY_STATE = "3",
        o
    }(ns_gen5_events.EventDispatcher);
    e.User = r
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = ns_gen5_events.Event365
      , n = e.DataUtil
      , i = e.SubscriptionManagerEvent
      , r = e.User
      , o = ns_gen5_net.Loader
      , s = ns_gen5_net.LoaderEvent
      , a = ns_gen5_util.Delegate
      , c = ns_gen5_util.InfoReporter
      , u = ns_gen5_util.InfoReporterGroups
      , l = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t
    }(o)
      , d = function(o) {
        function d() {
            var e = o.call(this) || this;
            return e._dataInclusionExclusionLevel = "",
            e._customDataInclusionExclusionLevel = "",
            e._topicRequestLookup = null,
            e._initialised = !1,
            e.canDebouncePVCN = !0,
            e._topicRequestLookup = {},
            e
        }
        return __extends(d, o),
        d.prototype.toString = function() {
            return "[PullDataProcessor]"
        }
        ,
        d.prototype.loadPageData = function(t, n, i, r) {
            var o, c, u, d, h, p;
            if (this._initialised || this._initialise(),
            o = Locator.config,
            c = Locator.user,
            u = o.apiLocation,
            d = this._dataInclusionExclusionLevel,
            i && (u = i,
            r & e.SubscriptionManagerFlags.USE_CUSTOM_PARAMS && (d = this._customDataInclusionExclusionLevel)),
            -1 == u.indexOf("?") && (u += "?"),
            r & e.SubscriptionManagerFlags.SUPPRESS_STANDARD_QS_PARAMS || (u += "lid=" + c.languageId + "&zid=" + c.zoneId + "&pd=" + escape(t) + "&cid=" + c.countryId),
            u += d,
            null != n)
                for (h in n)
                    u += "&" + h + "=" + n[h];
            p = new l,
            this._topicRequestLookup[t] = p,
            (!i || r & e.SubscriptionManagerFlags.VAL) && (p = new l),
            p.pageTopic = t,
            p.addEventListener(s.COMPLETE, new a(this,this._pageDataCompleteHandler)),
            p.addEventListener(s.ERROR, new a(this,this._pageDataErrorHandler)),
            p.load(u)
        }
        ,
        d.prototype.cancelPageDataLoad = function(e) {
            var t = this._topicRequestLookup[e];
            if (t)
                try {
                    t.abort(),
                    delete this._topicRequestLookup[e]
                } catch (n) {
                    ErrorReporter.Trace(this, n)
                }
        }
        ,
        d.prototype._initialise = function() {
            var e = Locator.user;
            if (this._initialised = !0,
            e.countryGroupId && (this._dataInclusionExclusionLevel = "&cg=" + e.countryGroupId),
            e.filterMode) {
                if ("-1" != e.filterMode)
                    switch (e.filterMode) {
                    case r.FILTER_MODE_COUNTRY_GROUP:
                        this._dataInclusionExclusionLevel = "&cgid=" + e.countryGroupId;
                        break;
                    case r.FILTER_MODE_COUNTRY:
                        this._dataInclusionExclusionLevel = "&cgid=" + e.countryGroupId + "&ctid=" + e.countryId;
                        break;
                    case r.FILTER_MODE_COUNTRY_STATE:
                        this._dataInclusionExclusionLevel = "&cgid=" + e.countryGroupId + "&ctid=" + e.countryId + "&csid=" + e.countryStateId
                    }
                this._customDataInclusionExclusionLevel = "&csid=" + e.countryStateId + "&ctid=" + e.countryId + "&cgid=" + e.countryGroupId
            }
        }
        ,
        d.prototype._pageDataCompleteHandler = function(e) {
            var i, r, o, s, a, c, u = this, l = e.target, d = l.pageTopic, h = e.data;
            for (delete this._topicRequestLookup[d],
            i = h.split("\b"),
            a = i.length,
            c = 0; a > c; c++)
                r = i[c],
                s = r.indexOf("IT="),
                o = 1 == a ? d : r.slice(s + 3, r.indexOf(";", s)),
                n.ParseMessage(r, o);
            Locator.validationManager.callLater(function() {
                u.dispatchEvent(new t(d))
            }),
            this.canDebouncePVCN && (this.canDebouncePVCN = !1,
            window.setTimeout(function() {
                u.canDebouncePVCN = !0,
                Locator.validationManager.processValidationCycleNow()
            }, 1))
        }
        ,
        d.prototype._pageDataErrorHandler = function(e) {
            var t = e.target
              , n = t.pageTopic
              , r = e.status
              , o = Locator.subscriptionManager;
            n && (o.dispatchEvent(new i(i.ERROR + n)),
            c.Trace(u.PULL_DATA_ENTRY, "Pull API IO Error on pageData: " + n + " - " + r),
            o.unsubscribe(n),
            delete this._topicRequestLookup[n])
        }
        ,
        d
    }(ns_gen5_events.EventDispatcher);
    e.PullDataProcessor = d
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    function t() {
        return i.length ? i.pop() : document.createComment("")
    }
    function n(e) {
        i[i.length] = e
    }
    var i = []
      , r = function(e) {
        function i(t) {
            var n = e.call(this) || this;
            return n._element = n._active_element = n.createElement ? n.createElement(t || "div") : document.createElement(t || "div"),
            n._element.wrapper = n,
            n
        }
        return __extends(i, e),
        i.prototype.toString = function() {
            return "[DomElement]"
        }
        ,
        i.prototype.initialize = function() {
            var e = this;
            this.initialized = !0,
            this.accessibilityDelegate && Locator.validationManager.callNewContext(function() {
                return e.accessibilityDelegate.MakeAccessible(e)
            })
        }
        ,
        i.prototype.appendChild = function(e) {
            var t = e;
            return e.parent = this,
            !t.initialized && t.initialize && (t.nestLevel = this.nestLevel + 1,
            t.initialize()),
            $assert && $assert("initialized"in e && t.initialized || !("initialized"in e), "Child - " + e + " - is not initialized."),
            this._element.appendChild(t._active_element),
            e
        }
        ,
        i.prototype.insertBefore = function(e, t) {
            $assert && $assert(t, "before is null or undefined!!!");
            var n = e;
            return e.parent = this,
            !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1,
            n.initialize()),
            this._element.insertBefore(n._active_element, t._active_element ? t._active_element : t),
            e
        }
        ,
        i.prototype.insertAfter = function(e, t) {
            var n, i;
            return $assert && $assert(t, "after is null or undefined!!!"),
            n = e,
            e.parent = this,
            !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1,
            n.initialize()),
            i = t._active_element ? t._active_element : t,
            i.nextSibling ? this._element.insertBefore(n._active_element, i.nextSibling) : this._element.appendChild(n._active_element),
            e
        }
        ,
        i.prototype.appendChildAt = function(e, t) {
            var n, i = e;
            return e.parent = this,
            !i.initialized && i.initialize && (i.nestLevel = this.nestLevel + 1,
            i.initialize()),
            n = this._element.children.length > t ? this._element.children[t] : null,
            this._element.insertBefore(i._active_element, n),
            e
        }
        ,
        i.prototype.removeChild = function(e) {
            var t, n, i, r, o = e;
            if (e.parent == this) {
                e.parent = null;
                try {
                    this._element.removeChild(o._active_element)
                } catch (s) {
                    t = e.getElement(),
                    n = t.parentNode && t.parentNode.className || "",
                    i = t.parentNode ? "" : " Check for earlier dChild.initialize() or .createChildren() failure from appendChild() etc.",
                    this._element.className || t.className || n ? (r = "Parent: [" + this._element.className + "] Child: [" + t.className + "] Actual Parent: [" + n + "]",
                    ErrorReporter.Trace(r, s, "childElem.parentNode property has " + (t.parentNode ? "a different parent" : "no value") + "." + i)) : $assert && $assert(!1, "Remove child has parent " + t.parentNode + " when being called." + i)
                }
            }
            return e
        }
        ,
        i.prototype.replaceChild = function(e, t) {
            if (t.parent == this) {
                t.parent = null;
                var n = e;
                e.parent = this,
                !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1,
                n.initialize()),
                this._element.replaceChild(n._active_element, t._active_element)
            }
            return e
        }
        ,
        i.prototype.removeAllChildren = function() {
            for (var e, t = this._element.firstChild; t; )
                e = t.wrapper,
                t = t.nextSibling,
                e && this.removeChild(e);
            return this
        }
        ,
        i.prototype.suspendElementFromDom = function() {
            var e, n;
            this._suspended_markerNode || (e = this._active_element = this._suspended_markerNode = t(),
            e.wrapper = this,
            this.parent && this._element.parentNode && (n = this.parent._element,
            n.replaceChild(e, this._element)))
        }
        ,
        i.prototype.unsuspendElementFromDom = function() {
            var e, t;
            this._suspended_markerNode && (e = this._suspended_markerNode,
            e.wrapper = null,
            this._suspended_markerNode = null,
            this._active_element = this._element,
            n(e),
            this.parent && e.parentNode && (t = this.parent._element,
            t.replaceChild(this._element, e)))
        }
        ,
        i.prototype.setAttribute = function(e, t) {
            return this._element.setAttribute(e, t),
            this
        }
        ,
        i.prototype.removeAttribute = function(e) {
            return this._element.removeAttribute(e),
            this
        }
        ,
        i.prototype.getAttribute = function(e) {
            return this._element.getAttribute(e)
        }
        ,
        i.prototype.getElement = function() {
            return this._element
        }
        ,
        i.prototype.getActiveElement = function() {
            return this._active_element
        }
        ,
        i.prototype.getElementChildren = function() {
            return this._element.children
        }
        ,
        i.prototype.getFirstChild = function() {
            return this._element.firstChild
        }
        ,
        i.prototype.getLastChild = function() {
            return this._element.lastChild
        }
        ,
        i.prototype.getPreviousSibling = function() {
            return this._active_element.previousSibling
        }
        ,
        i.prototype.getNextSibling = function() {
            return this._active_element.nextSibling
        }
        ,
        i.prototype.getInlineStyle = function() {
            return this._element.style
        }
        ,
        i.prototype.getTooltip = function() {
            return this.tooltip
        }
        ,
        i.SInit = function() {
            i.prototype._element = null,
            i.prototype._active_element = null,
            i.prototype.parent = null,
            i.prototype.initialized = !1,
            i.prototype.nestLevel = 0,
            i.prototype._suspended_markerNode = null,
            i.prototype.tooltip = null,
            i.prototype.alwaysShowTooltip = !1
        }(),
        i
    }(ns_gen5_events.EventDispatcher);
    e.DomElement = r
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n._styleList = {},
            n
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[Component]"
        }
        ,
        t.prototype.initialize = function() {
            var e = this;
            1 != this._stopInitInvalidation && (Locator.validationManager.queueForValidation(this),
            this._propertiesInvalidated = !0),
            this.createChildren(),
            this.initialized = !0,
            this.accessibilityDelegate && Locator.validationManager.callNewContext(function() {
                try {
                    e.accessibilityDelegate.MakeAccessible(e)
                } catch (t) {
                    ErrorReporter.Trace(e, t)
                }
            })
        }
        ,
        t.prototype.setAttribute = function(t, n) {
            return $assert && $assert("class" != t, "It's not safe to use 'setAttribute(\"class\",' with a Component instance. Use 'addStyle' instead."),
            e.prototype.setAttribute.call(this, t, n)
        }
        ,
        t.prototype.createChildren = function() {}
        ,
        t.prototype.commitProperties = function() {}
        ,
        t.prototype.commitStyles = function() {
            var e, t = "";
            for (e in this._styleList)
                t += e + " ";
            this._element.className = t
        }
        ,
        t.prototype.hasStyle = function(e) {
            return !!this._styleList[e]
        }
        ,
        t.prototype.addStyle = function(e) {
            return this._styleList[e] = !0,
            this._stylesInvalidated || this.invalidateStyles(),
            this
        }
        ,
        t.prototype.removeStyle = function(e) {
            return delete this._styleList[e],
            this._stylesInvalidated || this.invalidateStyles(),
            this
        }
        ,
        t.prototype.overwriteStyle = function(e, t) {
            return delete this._styleList[e],
            this._styleList[t] = !0,
            this.invalidateStyles(),
            this
        }
        ,
        t.prototype.setVisible = function(e) {
            return e != this._visible && (this._visible = e,
            e ? this.removeStyle("Hidden") : this.addStyle("Hidden")),
            this
        }
        ,
        t.prototype.getVisible = function() {
            return this._visible
        }
        ,
        t.prototype.invalidateProperties = function() {
            return this._propertiesInvalidated = !0,
            1 != this.validationState && this.parent && Locator.validationManager.queueForValidation(this),
            this
        }
        ,
        t.prototype.invalidateStyles = function() {
            return this._stylesInvalidated = !0,
            0 == this.validationState && this.parent && Locator.validationManager.queueForValidation(this),
            this
        }
        ,
        t.prototype.validateNow = function(e) {
            this._propertiesInvalidated && (this._propertiesInvalidated = !1,
            this.commitProperties()),
            this._stylesInvalidated && (this._stylesInvalidated = !1,
            this.commitStyles()),
            0 != e && (this.validationState = 0)
        }
        ,
        t.prototype.detatchStem = function() {
            this.validationState = 0
        }
        ,
        t.Wrapper = function(e) {
            var t, n, i, r, o;
            for (ns_gen5_events.EventDispatcher.call(this),
            this.parent = !0,
            this._element = e,
            e.wrapper = this,
            t = this._element.getAttribute("class"),
            n = {},
            i = t ? t.split(" ") : [],
            r = i.length,
            o = 0; r > o; o++)
                n[i[o]] = !0;
            this._styleList = n
        }
        ,
        t.SInit = function() {
            t.prototype._styleList = null,
            t.prototype._propertiesInvalidated = !1,
            t.prototype._stylesInvalidated = !1,
            t.prototype._visible = !0,
            t.prototype._stopInitInvalidation = !1,
            t.prototype.validationState = 0,
            t.Wrapper.prototype = new t
        }(),
        t
    }(e.DomElement);
    e.Component = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = e.DomElement
      , n = 0
      , i = function(i) {
        function r(e) {
            var r = i.call(this, e) || this;
            return r.root = new t,
            r.uid = ++n,
            r
        }
        return __extends(r, i),
        r.prototype.toString = function() {
            return "[Module]"
        }
        ,
        r.getRoot = function(e) {
            for (; e; ) {
                if (e instanceof r)
                    return e;
                e = e.parent
            }
            return null
        }
        ,
        r.prototype.initialize = function() {
            i.prototype.initialize.call(this),
            ns_gen5_util.Singleton.RegisterModule(this),
            this.parent && this.parent.parent || this.parent instanceof e.ModuleContainer || (this.parent = this.root,
            this.moduleReady())
        }
        ,
        r.prototype.moduleReady = function() {
            this.ready = !0
        }
        ,
        r.prototype.dispose = function() {
            var e = this;
            this.disposed = !0,
            Locator.validationManager.callNewContext(function() {
                ns_gen5_util.Singleton.RemoveScope(e)
            })
        }
        ,
        r
    }(e.Component);
    e.Module = i
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = e.SubscriptionManagerEvent
      , n = ns_gen5_util.Delegate
      , i = 15e3
      , r = function(r) {
        function o() {
            var e = r.call(this) || this;
            return e.pushConnected = !1,
            e.topicCountLookup = {},
            e.unsubscribeDeferralPeriodMS = i,
            e._subscribedTopics = {},
            e.unsubscribeGraceLookup = {},
            e.batchSubscribe = "",
            e.batchUnsubscribe = "",
            e._streamDataProcessor = null,
            e.pullDataProcessor = null,
            e.delegatesnapshotRecievedHandler = new n(e,e.snapshotRecievedHandler),
            e.delegatepushConnectedHandler = new n(e,e.pushConnectedHandler),
            e.delegatepushReConnectedHandler = new n(e,e.pushReConnectedHandler),
            e.delegatepushConnectFailedHandler = new n(e,e.pushConnectFailedHandler),
            e.delegatepushInfoUpdatedHandler = new n(e,e.infoUpdatedHandler),
            e.callback_submitBatch = function() {
                return e.submitBatch()
            }
            ,
            e
        }
        return __extends(o, r),
        o.prototype.toString = function() {
            return "[SubscriptionManager]"
        }
        ,
        o.prototype.connect = function() {
            this._streamDataProcessor.connect()
        }
        ,
        o.prototype.subscribe = function(n, i, r, o) {
            var s, a, c, u, l, d, h, p;
            return "boolean" == typeof r && (s = arguments[2],
            a = arguments[3],
            c = arguments[4],
            u = arguments[5],
            r = 0,
            s || (r |= e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE),
            a || (r |= e.SubscriptionManagerFlags.SUPPRESS_FULL_HIERARCHY),
            c && (o = c),
            u && (r |= e.SubscriptionManagerFlags.BATCH)),
            n ? (l = Locator.treeLookup.getReference(n),
            d = this.unsubscribeGraceLookup[n],
            d && (clearTimeout(d),
            !l && this._subscribedTopics[n] && delete this._subscribedTopics[n],
            delete this.unsubscribeGraceLookup[n]),
            l ? Locator.validationManager.callLater(function() {
                $assert && $assert(i, "eventHandlerDelegate does not exist"),
                i && i.method.call(i.scope, new t(n))
            }) : (this.addEventListener(n, i),
            this._subscribedTopics[n] ? this._subscribedTopics[n].push(i) : (this._subscribedTopics[n] = [i],
            "#" == n.charAt(0) ? (r & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (h = void 0,
            !o && this.pullServiceLocator && (p = this.pullServiceLocator.getUrlForTopic(n),
            p && (h = p.qsParams,
            r = p.flags,
            o = p.url)),
            this.pullDataProcessor.loadPageData(n, h, o, r)),
            this.pullDataProcessor.addEventListener(n, this.delegatesnapshotRecievedHandler)) : (r & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (r & e.SubscriptionManagerFlags.DONT_BATCH ? this._streamDataProcessor.subscribe(n) : this._addToSubscribeBuffer(n)),
            this._streamDataProcessor.addEventListener(n, this.delegatesnapshotRecievedHandler)))),
            n) : null
        }
        ,
        o.prototype.sharedSubscribe = function(e, t, n, i) {
            return this.topicCountLookup[e] = this.topicCountLookup[e] ? this.topicCountLookup[e] + 1 : 1,
            this.subscribe(e, t, n, i)
        }
        ,
        o.prototype.sharedUnsubscribe = function(e, t) {
            this.topicCountLookup[e] = this.topicCountLookup[e] - 1,
            this.topicCountLookup[e] < 1 && (delete this.topicCountLookup[e],
            this.unsubscribe(e, t))
        }
        ,
        o.prototype.unsubscribe = function(t, n) {
            var i, r, o, s = this;
            t && (this.removeListenersForTopic(t),
            i = Locator.treeLookup.getReference(t),
            i && i.shed(),
            "#" != t.charAt(0) ? n & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (i || this._streamDataProcessor.hasEventListener(t) && this._streamDataProcessor.removeEventListener(t, this.delegatesnapshotRecievedHandler),
            (!this.unsubscribeGraceLookup[t] || n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD) && (r = function() {
                n & e.SubscriptionManagerFlags.DONT_BATCH ? s._streamDataProcessor.unsubscribe(t) : s.addToUnsubscribeBuffer(t),
                s.clearDownTopic(t, i);
                var r = s.unsubscribeGraceLookup[t];
                r && (clearTimeout(r),
                delete s.unsubscribeGraceLookup[t])
            }
            ,
            n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD || this.unsubscribeDeferralPeriodMS <= 0 ? r() : (o = window.setTimeout(r, this.unsubscribeDeferralPeriodMS),
            this.unsubscribeGraceLookup[t] = o))) : (!this.unsubscribeGraceLookup[t] || n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD) && (r = function() {
                s.pullDataProcessor.cancelPageDataLoad(t),
                s.clearDownTopic(t, i);
                var e = s.unsubscribeGraceLookup[t];
                e && (clearTimeout(e),
                delete s.unsubscribeGraceLookup[t])
            }
            ,
            n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD || !i ? r() : (o = window.setTimeout(r, this.unsubscribeDeferralPeriodMS),
            this.unsubscribeGraceLookup[t] = o)))
        }
        ,
        o.prototype.clearDownTopic = function(e, t) {
            delete this._subscribedTopics[e],
            t && t.remove()
        }
        ,
        o.prototype.send = function(e, t) {
            this._streamDataProcessor.send(e, t)
        }
        ,
        o.prototype.resubscribePush = function(e) {
            for (var t in e)
                "#" != t.charAt(0) && this._addToSubscribeBuffer(t)
        }
        ,
        o.prototype.getSubscribedPushTopics = function() {
            var e, t = [];
            for (e in this._subscribedTopics)
                "#" != e.charAt(0) && (t[t.length] = e);
            return t
        }
        ,
        o.prototype.setStreamDataProcessor = function(t) {
            var n = this;
            this._streamDataProcessor && (this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.CONNECTED, this.delegatepushConnectedHandler),
            this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.CONNECTION_FAILED, this.delegatepushConnectFailedHandler),
            this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.RECONNECT_FAILED, this.delegatepushConnectFailedHandler),
            this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.SERVER_RECONNECT, this.delegatepushReConnectedHandler),
            this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.INFO_UPDATED, this.delegatepushInfoUpdatedHandler)),
            this._streamDataProcessor = t,
            this._streamDataProcessor.getCurrentTopics = function() {
                return n.getSubscribedPushTopics();
            }
            ,
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.CONNECTED, this.delegatepushConnectedHandler),
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.CONNECTION_FAILED, this.delegatepushConnectFailedHandler),
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.RECONNECT_FAILED, this.delegatepushConnectFailedHandler),
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.SERVER_RECONNECT, this.delegatepushReConnectedHandler),
            this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.INFO_UPDATED, this.delegatepushInfoUpdatedHandler)
        }
        ,
        o.prototype.setPullServiceLocator = function(e) {
            this.pullServiceLocator = e
        }
        ,
        o.prototype.setPullDataProcessor = function(e) {
            this.pullDataProcessor = e
        }
        ,
        o.prototype.close = function() {
            this._streamDataProcessor.close(readit.ReaditFlags.SEND_CLOSE)
        }
        ,
        o.prototype._addToSubscribeBuffer = function(e) {
            0 == this.batchSubscribe.length && 0 == this.batchUnsubscribe.length ? Locator.validationManager.callLater(this.callback_submitBatch) : this.batchSubscribe && (this.batchSubscribe += ","),
            this.batchSubscribe += e
        }
        ,
        o.prototype.addToUnsubscribeBuffer = function(e) {
            0 == this.batchSubscribe.length && 0 == this.batchUnsubscribe.length ? Locator.validationManager.callLater(this.callback_submitBatch) : this.batchUnsubscribe && (this.batchUnsubscribe += ","),
            this.batchUnsubscribe += e
        }
        ,
        o.prototype.submitBatch = function() {
            this.batchSubscribe && this.batchUnsubscribe ? this._streamDataProcessor.swapSubscriptions(this.batchSubscribe, this.batchUnsubscribe) : (this.batchSubscribe && this._streamDataProcessor.subscribe(this.batchSubscribe),
            this.batchUnsubscribe && this._streamDataProcessor.unsubscribe(this.batchUnsubscribe)),
            this.batchSubscribe = "",
            this.batchUnsubscribe = ""
        }
        ,
        o.prototype.removeListenersForTopic = function(e) {
            var t, n, i = this._subscribedTopics[e];
            if (i) {
                for (t = i.length,
                n = 0; t > n; n++)
                    this.removeEventListener(e, i[n]);
                i.length = 0
            }
        }
        ,
        o.prototype._OtsReport = function() {
            var e, t = "";
            for (e in this._subscribedTopics)
                t += e + "	\r\n";
            return this.pullServiceLocator && this.pullServiceLocator.otsReport && (t += "	\r\n PullServiceLocator 	\r\n",
            t += this.pullServiceLocator.otsReport()),
            t
        }
        ,
        o.prototype.snapshotRecievedHandler = function(e) {
            var n = e.type;
            e.target.removeEventListener(n, this.delegatesnapshotRecievedHandler);
            try {
                this.dispatchEvent(new t(n)),
                this.removeListenersForTopic(n),
                Locator.treeLookup.getReference(n) || delete this._subscribedTopics[n]
            } catch (i) {
                ErrorReporter.Trace(this, i)
            }
        }
        ,
        o.prototype.pushReConnectedHandler = function() {}
        ,
        o.prototype.pushConnectedHandler = function() {
            this.pushConnected || this.dispatchEvent(new t(t.CONNECTED)),
            this.pushConnected = !0,
            this.unsubscribeDeferralPeriodMS = i
        }
        ,
        o.prototype.pushConnectFailedHandler = function() {
            this.pushConnected && this.dispatchEvent(new t(t.CONNECTION_FAILED)),
            this.pushConnected = !1,
            this.unsubscribeDeferralPeriodMS = 0
        }
        ,
        o.prototype.infoUpdatedHandler = function(e) {
            this.dispatchEvent(new t(t.INFO_UPDATED,e.data))
        }
        ,
        o.TOPIC_FALLBACK_INDICATOR = "*",
        o
    }(ns_gen5_events.EventDispatcher);
    e.SubscriptionManager = r
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = ns_gen5_util.Delegate
      , n = function(n) {
        function i() {
            return n.call(this) || this
        }
        return __extends(i, n),
        i.prototype.setStreamDataProcessor = function(i) {
            this._streamDataProcessor ? (this._streamDataProcessor.removeEventListener(e.PrivateStreamDataProcessorEvent.BALANCE_RECEIVED, this.delegate_balanceReceivedHandler),
            this._streamDataProcessor.removeEventListener(e.PrivateStreamDataProcessorEvent.PUSH_MESSAGE_RECEIVED, this.delegate_pushMessageReceivedHandler)) : (this.delegate_balanceReceivedHandler = new t(this,this.balanceReceivedHandler),
            this.delegate_pushMessageReceivedHandler = new t(this,this.pushMessageReceivedHandler)),
            n.prototype.setStreamDataProcessor.call(this, i),
            this._streamDataProcessor.addEventListener(e.PrivateStreamDataProcessorEvent.BALANCE_RECEIVED, this.delegate_balanceReceivedHandler),
            this._streamDataProcessor.addEventListener(e.PrivateStreamDataProcessorEvent.PUSH_MESSAGE_RECEIVED, this.delegate_pushMessageReceivedHandler)
        }
        ,
        i.prototype.balanceReceivedHandler = function(t) {
            this.dispatchEvent(new e.PrivateSubscriptionManagerEvent(e.PrivateSubscriptionManagerEvent.BALANCE_RECEIVED,t.message.topic,t.message.message))
        }
        ,
        i.prototype.pushMessageReceivedHandler = function(t) {
            this.dispatchEvent(new e.PrivateSubscriptionManagerEvent(e.PrivateSubscriptionManagerEvent.PUSH_MESSAGE_RECEIVED,t.message.topic,t.message.message))
        }
        ,
        i.prototype.getSubscribedPushTopics = function() {
            return []
        }
        ,
        i.prototype.pushReConnectedHandler = function() {
            n.prototype.resubscribePush.call(this, this._subscribedTopics)
        }
        ,
        i
    }(e.SubscriptionManager);
    e.PrivateSubscriptionManager = n
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = e.DataUtil
      , n = ns_gen5_net.Loader
      , i = function() {
        function i(e, t, n) {
            void 0 === n && (n = !1),
            this.initialSnapshotHandler = function(e) {}
            ,
            this.url = e,
            this.topic = t,
            n && this.buildInclusionExclusionData()
        }
        return i.prototype.poll = function(e) {
            var t, i = this;
            this.dataInclusionExclusionLevel && (this.url = -1 === this.url.indexOf("?") ? this.url + "?" : this.url + "&",
            this.url += "lid=" + Locator.user.languageId + "&zid=" + Locator.user.zoneId + "&pd=" + encodeURIComponent(this.topic) + "&cid=" + Locator.user.countryId,
            this.url += this.dataInclusionExclusionLevel,
            this.dataInclusionExclusionLevel = null),
            t = new n,
            t.completeHandler = function(e, t) {
                200 === t && i.handleResponse(e)
            }
            ,
            t.load(this.url)
        }
        ,
        i.prototype.handleResponse = function(e) {
            var n, i, r, o = this, s = this.topic, a = !!Locator.treeLookup.getReference(s), c = a ? t.ParseMergeMessage(e, s) : t.ParseMessage(e, s);
            for (n = 0,
            i = c; n < i.length; n++)
                r = i[n],
                a && (s = r.topic),
                t.ProcessStemChanges(r, s, this.topic, a, function(e) {
                    return o.initialSnapshotHandler(e)
                });
            this.pollCompleteHandler && this.pollCompleteHandler()
        }
        ,
        i.prototype.buildInclusionExclusionData = function() {
            var t = Locator.user;
            if (t.countryGroupId && (this.dataInclusionExclusionLevel = "&cg=" + t.countryGroupId),
            t.filterMode && "-1" != t.filterMode)
                switch (t.filterMode) {
                case e.User.FILTER_MODE_COUNTRY_GROUP:
                    this.dataInclusionExclusionLevel = "&cgid=" + t.countryGroupId;
                    break;
                case e.User.FILTER_MODE_COUNTRY:
                    this.dataInclusionExclusionLevel = "&cgid=" + t.countryGroupId + "&ctid=" + t.countryId;
                    break;
                case e.User.FILTER_MODE_COUNTRY_STATE:
                    this.dataInclusionExclusionLevel = "&cgid=" + t.countryGroupId + "&ctid=" + t.countryId + "&csid=" + t.countryStateId
                }
        }
        ,
        i
    }();
    e.PollDataProcessor = i
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[PushedConfigPropertyChangeEvent type=" + this.type + "]"
        }
        ,
        t.PROPERTIES_INITIALISED = "PUSH_CONFIG_PROPERTIES_INITIALISED",
        t.IS_INPLAY_AVAILABLE = "IS_INPLAY_AVAILABLE",
        t.INPLAY_LAUNCHER_DISPLAY_MODE = "INPLAY_LAUNCHER_CONTENT_TYPE",
        t.INPLAY_RHS_LAUNCHER_DISPLAY_MODE = "INPLAY_RHS_LAUNCHER_CONTENT_TYPE",
        t.IS_MYBETS_SYSTEM_ENABLED = "IS_MYBETS_SYSTEM_ENABLED",
        t.IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE = "IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE",
        t.IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE = "IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE",
        t.IS_MYBETS_SITE_FEATURE_AVAILABLE = "IS_MYBETS_SITE_FEATURE_AVAILABLE",
        t.IS_CLICK_TO_CALL_SITE_FEATURE_AVAILABLE = "IS_CLICK_TO_CALL_SITE_FEATURE_AVAILABLE",
        t.IS_BET_CALL_AVAILABLE = "IS_BET_CALL_AVAILABLE",
        t.IS_BET_CALL_TWILIO_AVAILABLE = "IS_BET_CALL_TWILIO_AVAILABLE",
        t.IS_CUSTOMER_TO_CUSTOMER_CALLING_FEATURE_AVAILABLE = "IS_CUSTOMER_TO_CUSTOMER_CALLING_FEATURE_AVAILABLE",
        t.IS_CUSTOMER_TO_REPRESENTATIVE_CALLING_FEATURE_AVAILABLE = "IS_CUSTOMER_TO_REPRESENTATIVE_CALLING_FEATURE_AVAILABLE",
        t.PUSH_BALANCE_ENABLED_AVAILABLE = "PUSH_BALANCE_ENABLED_AVAIBLE",
        t.IS_SETTLED_BETS_FEATURE_AVAILABLE = "IS_SETTLED_BETS_FEATURE_AVAILABLE",
        t.IS_EDIT_BETS_FEATURE_AVAILABLE = "IS_EDIT_BETS_FEATURE_AVAILABLE",
        t.IS_EDIT_BETS_COMPLEX_MULTIPLES_FEATURE_AVAILABLE = "IS_EDIT_BETS_COMPLEX_MULTIPLE_FEATURE_AVAILABLE",
        t.IS_AUS_MULTIPLES_AVAILABLE = "IS_AUS_MULTIPLES_AVAILABLE",
        t.FREE_BET_COUNTRIES_UPDATED = "FREE_BET_COUNTRIES_UPDATED",
        t
    }(ns_gen5_events.Event365);
    e.PushedConfigPropertyChangeEvent = t
}(ns_gen5_config || (ns_gen5_config = {})),
function(e) {
    function t(e) {
        e && e.length > 0 && (e = ns_gen5_util.B365SimpleEncrypt.decrypt(e),
        Locator.subscriptionManager.subscribe(e, new c(this,function(e) {}
        )))
    }
    var n, i, r = ns_gen5_events.EventDispatcher, o = ns_gen5_events.Event365, s = ns_gen5_data.SubscriptionManagerEvent, a = ns_gen5_data.StemEvent, c = ns_gen5_util.Delegate;
    !function(e) {
        e[e.fixture = 0] = "fixture",
        e[e.classification = 1] = "classification"
    }(n = e.InplayLauncherDisplayModeEnum || (e.InplayLauncherDisplayModeEnum = {})),
    i = function(n) {
        function i() {
            var e = n.call(this) || this;
            return e._subscriptionTopic = null,
            e._subscriptionManager = null,
            e._configStem = null,
            e._configStemInsertHandlerDelegate = null,
            e._configStemDeleteHandlerDelegate = null,
            e._pushConnectedHandlerDelegate = null,
            e._pushDisconnectedHandlerDelegate = null,
            e._childConfigStemUpdateHandler = null,
            e._childConfigStemDeleteHandler = null,
            e._isSubscriptionInitialised = !1,
            e._isDisposed = !1,
            e._pushConnected = !1,
            e._arePropertiesInitialised = !1,
            e._isInPlayDataAvailable = !1,
            e._isMyBetsSystemEnabled = !1,
            e._isOpenBetsPullDeliveryAvailable = !1,
            e._isMyBetsSiteFeatureAvailable = !1,
            e._isBetCallAvailable = !1,
            e._isAusMultiplesAvailable = !1,
            e._isBetCallTwilioAvailable = !1,
            e._isPushBalanceEnabled = !0,
            e._settledBetsEnabled = !1,
            e._isCloseBetPullPresentationEnabled = !0,
            e._isEditBetsEnabled = !1,
            e.freeBetCountries = [],
            e.editBetsComplexMultiplesEnabled = !1,
            e.betCallDisabledAttribute = "MB",
            e.ausMultiplesDisabledAttribute = "AM",
            e.betCallTwilioDisabledAttribute = "MT",
            e.settledBetsDisabledAttribute = "SB",
            e.pushBalanceEnabledAttribute = "PB",
            e.complexMultiplesEnabledAttribute = "EM",
            e
        }
        return __extends(i, n),
        i.prototype.initialiseSubscription = function(e, t) {
            this._isSubscriptionInitialised || this._isDisposed || (this._pushConnectedHandlerDelegate = new c(this,this.pushConnectedHandler),
            this._pushDisconnectedHandlerDelegate = new c(this,this.pushDisconnectedHandler),
            Locator.privateSubscriptionManager.addEventListener(s.CONNECTED, this._pushConnectedHandlerDelegate),
            Locator.privateSubscriptionManager.addEventListener(s.CONNECTION_FAILED, this._pushDisconnectedHandlerDelegate),
            this._isSubscriptionInitialised = !0,
            this._subscriptionTopic = i.USER_CONFIG_SUBSCRIPTION_TOPIC,
            this._subscriptionManager = e,
            e.subscribe(this._subscriptionTopic, new c(this,this.configTopicSubscriptionHandler)))
        }
        ,
        i.prototype.getArePropertiesInitialised = function() {
            return this._arePropertiesInitialised
        }
        ,
        i.prototype.getAttributeValue = function(e) {
            var t = Locator.treeLookup.getReference(i.USER_CONFIG_SUBSCRIPTION_TOPIC + "_" + e);
            return t && t.data.VA || ""
        }
        ,
        i.prototype.getIsInPlayAvailable = function() {
            return this._isInPlayDataAvailable
        }
        ,
        i.prototype.getIsMyBetsSystemEnabled = function() {
            return this._isMyBetsSystemEnabled
        }
        ,
        i.prototype.getIsOpenBetsPullDeliveryAvailable = function() {
            return this._isOpenBetsPullDeliveryAvailable
        }
        ,
        i.prototype.getIsCloseBetPullPresentationEnabled = function() {
            return this._isCloseBetPullPresentationEnabled
        }
        ,
        i.prototype.getIsMyBetsSiteFeatureAvailable = function() {
            return this._isMyBetsSiteFeatureAvailable
        }
        ,
        i.prototype.getIsBetCallAvailable = function() {
            return this._isBetCallAvailable
        }
        ,
        i.prototype.getIsAusMultiplesAvailable = function() {
            return this._isAusMultiplesAvailable
        }
        ,
        i.prototype.getIsBetCallTwilioAvailable = function() {
            return this._isBetCallTwilioAvailable
        }
        ,
        i.prototype.getIsPushBalanceEnabled = function() {
            return this._isPushBalanceEnabled
        }
        ,
        i.prototype.getIsEditBetsEnabled = function() {
            return this._isEditBetsEnabled
        }
        ,
        i.prototype.getIsSettledBetsEnabled = function() {
            return this._settledBetsEnabled
        }
        ,
        i.prototype.getIsEditBetsComplexEnabled = function() {
            return this.editBetsComplexMultiplesEnabled
        }
        ,
        i.prototype.getIsFreeBetsAllowed = function(e) {
            return this.freeBetCountries.indexOf(e) > -1
        }
        ,
        i.prototype.dispose = function() {
            this._isDisposed || (this._isDisposed = !0,
            this._subscriptionTopic && (Locator.privateSubscriptionManager.removeEventListener(s.CONNECTED, this._pushConnectedHandlerDelegate),
            Locator.privateSubscriptionManager.removeEventListener(s.CONNECTION_FAILED, this._pushDisconnectedHandlerDelegate),
            this._subscriptionManager.unsubscribe(this._subscriptionTopic),
            this._subscriptionTopic = null,
            this._subscriptionManager = null),
            this.configStemDeleteHandler())
        }
        ,
        i.prototype.getIsDisposed = function() {
            return this._isDisposed
        }
        ,
        i.prototype.configTopicSubscriptionHandler = function(n) {
            var i, r, o, s = this, u = Locator.treeLookup;
            if (!this._configStem && u) {
                for (this._configStem = u.getReference(n.type),
                this._configStemInsertHandlerDelegate = new c(this,this.configStemInsertHandler),
                this._configStemDeleteHandlerDelegate = new c(this,this.configStemDeleteHandler),
                this._childConfigStemUpdateHandler = new c(this,this.childConfigStemUpdateHandler),
                this._childConfigStemDeleteHandler = new c(this,this.childConfigStemDeleteHandler),
                this._configStem.addEventListener(a.INSERT, this._configStemInsertHandlerDelegate),
                this._configStem.addEventListener(a.DELETE, this._configStemDeleteHandlerDelegate),
                i = 0,
                r = this._configStem.getChildren(); i < r.length; i++)
                    o = r[i],
                    this.childConfigStemChanged(o),
                    o.addEventListener(a.UPDATE, this._childConfigStemUpdateHandler),
                    o.addEventListener(a.DELETE, this._childConfigStemDeleteHandler);
                this._arePropertiesInitialised = !0,
                this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.PROPERTIES_INITIALISED)),
                this.addEventListener("AD", new c(this,function(e) {
                    return t(s.getAttributeValue("AD"))
                }
                )),
                this.getAttributeValue("AD") && t(this.getAttributeValue("AD"))
            }
        }
        ,
        i.prototype.updateProperties = function(t, n) {
            var i, r, o, s, a, c, u, l, d, h, p, _;
            "IF"in t && (i = "1" === t.IF,
            this._isInPlayDataAvailable !== i && (this._isInPlayDataAvailable = i,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_INPLAY_AVAILABLE)))),
            "CB"in t && (r = "0" === t.CB,
            this._isMyBetsSystemEnabled !== r && (this._isMyBetsSystemEnabled = r,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_MYBETS_SYSTEM_ENABLED)))),
            "CP"in t && (o = "0" === t.CP,
            this._isCloseBetPullPresentationEnabled !== o && (this._isCloseBetPullPresentationEnabled = o,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE)))),
            "OP"in t && (s = "0" === t.OP,
            this._isOpenBetsPullDeliveryAvailable !== s && (this._isOpenBetsPullDeliveryAvailable = s,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE)))),
            "FC"in t && (this.freeBetCountries = t.FC.split(","),
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.FREE_BET_COUNTRIES_UPDATED))),
            a = this._isMyBetsSystemEnabled && this._isOpenBetsPullDeliveryAvailable,
            this._isMyBetsSiteFeatureAvailable !== a && (this._isMyBetsSiteFeatureAvailable = a,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_MYBETS_SITE_FEATURE_AVAILABLE))),
            this.betCallTwilioDisabledAttribute in t && (c = "1" != t[this.betCallTwilioDisabledAttribute],
            this._isBetCallTwilioAvailable !== c && (this._isBetCallTwilioAvailable = c,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_BET_CALL_TWILIO_AVAILABLE)))),
            this.betCallDisabledAttribute in t && (u = "1" != t[this.betCallDisabledAttribute],
            this._isBetCallAvailable !== u && (this._isBetCallAvailable = u,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_BET_CALL_AVAILABLE)))),
            this.ausMultiplesDisabledAttribute in t && (l = "1" != t[this.ausMultiplesDisabledAttribute],
            this._isAusMultiplesAvailable !== l && (this._isAusMultiplesAvailable = l,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_AUS_MULTIPLES_AVAILABLE)))),
            this.settledBetsDisabledAttribute in t && (d = "1" != t[this.settledBetsDisabledAttribute],
            this._settledBetsEnabled !== d && (this._settledBetsEnabled = d,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_SETTLED_BETS_FEATURE_AVAILABLE)))),
            this.pushBalanceEnabledAttribute in t && (h = "1" == t[this.pushBalanceEnabledAttribute],
            this._isPushBalanceEnabled !== h && (this._isPushBalanceEnabled = h,
            n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.PUSH_BALANCE_ENABLED_AVAILABLE)))),
            "EE"in t && (p = "1" !== t.EE,
            this._isEditBetsEnabled !== p && (this._isEditBetsEnabled = p,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_EDIT_BETS_FEATURE_AVAILABLE)))),
            this.complexMultiplesEnabledAttribute in t && (_ = t[this.complexMultiplesEnabledAttribute] && "1" !== t[this.complexMultiplesEnabledAttribute],
            this.editBetsComplexMultiplesEnabled !== _ && (this.editBetsComplexMultiplesEnabled = _,
            this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_EDIT_BETS_COMPLEX_MULTIPLES_FEATURE_AVAILABLE))))
        }
        ,
        i.prototype.configStemInsertHandler = function(e) {
            this.childConfigStemChanged(e.data),
            e.data.addEventListener(a.UPDATE, this._childConfigStemUpdateHandler),
            e.data.addEventListener(a.DELETE, this._childConfigStemDeleteHandler)
        }
        ,
        i.prototype.childConfigStemUpdateHandler = function(e) {
            this.childConfigStemChanged(e.target)
        }
        ,
        i.prototype.childConfigStemChanged = function(e) {
            var t = e.data.IT
              , n = t.substring(this._subscriptionTopic.length + 1, t.length)
              , i = e.data.VA
              , r = {};
            r[n] = i,
            this.updateProperties(r, !0),
            this.dispatchEvent(new o(n))
        }
        ,
        i.prototype.configStemDeleteHandler = function() {
            this._configStem && (this._configStem.removeEventListener(a.INSERT, this._configStemInsertHandlerDelegate),
            this._configStem.removeEventListener(a.DELETE, this._configStemDeleteHandlerDelegate),
            this._configStem = null)
        }
        ,
        i.prototype.childConfigStemDeleteHandler = function(e) {
            e.target.data.VA = "",
            this.childConfigStemChanged(e.target),
            e.target.removeEventListener(a.UPDATE, this._childConfigStemUpdateHandler),
            e.target.removeEventListener(a.DELETE, this._childConfigStemDeleteHandler)
        }
        ,
        i.prototype.pushDisconnectedHandler = function() {
            this._pushConnected && (this._pushConnected = !1)
        }
        ,
        i.prototype.pushConnectedHandler = function() {
            this._pushConnected || (this._pushConnected = !0)
        }
        ,
        i.USER_CONFIG_SUBSCRIPTION_TOPIC = "P_CONFIG",
        i
    }(r),
    e.PushedConfigManager = i
}(ns_gen5_config || (ns_gen5_config = {})),
function(e) {
    var t = function() {
        function e(e, t, n) {
            void 0 === t && (t = "www"),
            void 0 === n && (n = "responsiblegambling"),
            this.host = e,
            this.sportsHost = e.replace(t, "www"),
            this.membersHost = e.replace(t, "members"),
            this.mobileHost = e.replace(t, "mobile"),
            this.streamHost = e.replace(t, "streaming").replace("extra", "streaming"),
            this.videoStreamHost = e.replace("extra", "www"),
            this.extraHost = e.replace(t, "extra"),
            this.helpHost = e.replace(t, "help"),
            this.casinoHost = e.replace(t, "casino"),
            this.liveCasinoHost = e.replace(t, "livecasino"),
            this.bingoHost = e.replace(t, "bingo"),
            this.pokerHost = e.replace(t, "poker"),
            this.gamesHost = e.replace(t, "games"),
            this.slotsHost = e.replace(t, "slots"),
            this.vegasHost = e.replace(t, "vegas"),
            this.rsGamblingHost = e.replace(t, n),
            this.hostname = e.replace(/https{0,1}\:\/\//g, "")
        }
        return e.prototype.href = function() {
            return (this.host || "") + location.href.substring(location.href.indexOf(location.host) + location.host.length)
        }
        ,
        e.prototype.hrefNoHash = function() {
            return this.href().split("#")[0]
        }
        ,
        e
    }();
    e.Domain = t
}(ns_gen5_config || (ns_gen5_config = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.prototype.setConnectionDetails = function(e) {
            this.connectionDetails = e
        }
        ,
        e.prototype.getConnectionDetails = function() {
            return this.connectionDetails
        }
        ,
        e.prototype.setPrivateConnectionDetails = function(e) {
            this.privateConnectionDetails = e
        }
        ,
        e.prototype.getPrivateConnectionDetails = function() {
            return this.privateConnectionDetails
        }
        ,
        e.prototype.fallbackConnectionEnabled = function() {
            return !1
        }
        ,
        e.prototype.hasSessionExpired = function() {
            return !1
        }
        ,
        e
    }();
    e.ApplicationConfig = t
}(ns_gen5_config || (ns_gen5_config = {})),
function(e) {}(ns_gen5_events || (ns_gen5_events = {})),
function(e) {
    var t = function() {
        function e(e) {
            this._element = this._active_element = document.createTextNode(e || ""),
            this._text = e || null
        }
        return e.prototype.toString = function() {
            return "[TextNode text=" + this._text + "]"
        }
        ,
        e.prototype.setText = function(e) {
            return this._text = this._element.data = e
        }
        ,
        e.prototype.getText = function() {
            return this._text
        }
        ,
        e.prototype.getElement = function() {
            return this._element
        }
        ,
        e.Wrapper = function(e) {
            this._element = e,
            this._text = this._element.data || null
        }
        ,
        e.SInit = function() {
            e.prototype.parent = null,
            e.prototype._element = null,
            e.prototype._active_element = null,
            e.prototype._text = null,
            e.Wrapper.prototype = new e
        }(),
        e
    }();
    e.TextNode = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function() {
        function t(e) {
            var t = this;
            this.element = e,
            this._callback_clickHandler = function(e) {
                return t._clickHandler(e)
            }
        }
        return t.prototype.activate = function() {
            var t = this.element instanceof e.DomElement ? this.element.getElement() : this.element;
            t.addEventListener("click", this._callback_clickHandler)
        }
        ,
        t.prototype.release = function() {
            var t = this.element instanceof e.DomElement ? this.element.getElement() : this.element;
            t.removeEventListener("click", this._callback_clickHandler)
        }
        ,
        t.prototype._clickHandler = function(e) {
            var t, n = e || window.event;
            if (n.target) {
                for (ns_gen5_util_logging.ReplayLogger.RecordInteraction({
                    x: n.clientX,
                    y: n.clientY,
                    scroll: e.target.scrollTop || window.scrollY,
                    target: e.target.className,
                    time: Date.now()
                }),
                t = n.target; t; ) {
                    if (t.wrapper && t.wrapper.clickHandler) {
                        try {
                            t.wrapper.clickHandler(n)
                        } catch (i) {
                            ErrorReporter.Trace(this, i)
                        }
                        break
                    }
                    t = t.parentNode
                }
                Locator.validationManager.processValidationCycleNow()
            }
        }
        ,
        t
    }();
    e.PointerProcessor = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    function t(e) {
        return function(t) {
            return e + "  " + (t.moduleName || "") + ":" + (t.elementName || "")
        }
    }
    function n(e) {
        var t = "Module Load Error " + e;
        ErrorReporter.Trace("ModuleContainer:::", t),
        $logFmt(t, "font-weight:bold; color:#FF0000;")
    }
    var i, r = t("0x01"), o = ns_gen5_util.Delegate, s = ns_gen5_util.Config, a = ns_gen5_events.ModuleEvent, c = ns_gen5_util.InfoReporter, u = ns_gen5_util.InfoReporterGroups, l = ns_gen5_data.ModuleContainerFlags, d = function() {
        function e() {
            this.resourcesNeeded = 1,
            this.resourcesLoaded = 0
        }
        return e.prototype.isFullyLoaded = function() {
            return this.resourcesLoaded >= this.resourcesNeeded
        }
        ,
        e
    }();
    e.ModuleResourcePackage = d,
    i = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.invokeQueue = [],
            e
        }
        return __extends(i, t),
        i.LoadModule = function(e, t) {
            var n, r, o, s = i.ModuleCache[e];
            s && s.definition ? (n = s.isFullyLoaded(),
            Locator.validationManager.callLater(function() {
                t.moduleAvailableHandler(s),
                n && t.moduleReadyHandler(s)
            })) : s ? (r = i.PendingList[e],
            r[r.length] = t) : (s = i.ModuleCache[e] = new d,
            o = function() {
                var t, n, r, o;
                if (s.isFullyLoaded() && (t = i.PendingList[e])) {
                    for (n = 0,
                    r = t; n < r.length; n++)
                        o = r[n],
                        o.moduleReadyHandler(s);
                    delete i.PendingList[e]
                }
            }
            ,
            i.PendingList[e] = [t],
            i.ModuleLoader.loadModule(e, s, o))
        }
        ,
        i.RegisterModule = function(e, t) {
            var n, r, o, s, a = i.ModuleCache[e];
            if (a || (a = i.ModuleCache[e] = new d),
            a.resourcesLoaded++,
            $assert && $assert(!a.definition, "Duplicate module definition loaded - " + e),
            a.definition = t,
            n = i.PendingList[e])
                for (r = 0,
                o = n; r < o.length; r++)
                    s = o[r],
                    s.moduleAvailableHandler(a)
        }
        ,
        i.RegisterLanguage = function(e, t) {
            var n = i.ModuleCache[e];
            n.resourcesLoaded++,
            n.languageDefinition = t
        }
        ,
        i.RegisterConfig = function(e, t) {
            var n = i.ModuleCache[e];
            n.config = t
        }
        ,
        i.prototype.load = function(t, n) {
            var r, s, a, c, u, d, h, p, _;
            if (n & l.DEFER_LOAD) {
                if (!i.ModuleCache[t])
                    return void this.deferLoad(t)
            } else if (i.PendingDeferredList[t])
                for (r = i.PendingDeferredList[t],
                delete i.PendingDeferredList[t],
                s = 0,
                a = r; s < a.length; s++)
                    c = a[s],
                    c.load(t);
            this.moduleName = t,
            u = Locator.manifestManager.getLocaleNames(t),
            u && u.length && (d = boot.getLocale(),
            h = void 0,
            h = d.stateLocale && u.indexOf(d.stateLocale) > -1 ? t + "-" + d.stateLocale : u.indexOf(d.countryLocale) > -1 ? t + "-" + d.countryLocale : t + "-Default",
            this.localeModule = new e.ModuleContainer,
            this.localeModule.load(h)),
            Locator.manifestManager.getApp(t) && boot.isAppRequest && (this.appModule = new e.ModuleContainer,
            this.appModule.load(t + "-App")),
            i.LoadModule(t, this),
            this.defaultApiLocation = this.defaultApiLocation || Locator.manifestManager.getDefaultApiLocation(t),
            p = Locator.manifestManager.getDefaultTopic(t),
            null !== p && (p && (_ = Locator.user,
            p = p.replace("{L}", _.languageId),
            p = p.replace("{Z}", _.zoneId),
            p = p.replace("{C}", "" + _.customerType),
            this.defaultTopic = p),
            this.defaultTopic && (this.defaultApiLocation ? Locator.subscriptionManager.subscribe(this.defaultTopic, new o(this,this.defaultTopicSubscriptionHandler), null, this.defaultApiLocation) : Locator.subscriptionManager.subscribe(this.defaultTopic, new o(this,this.defaultTopicSubscriptionHandler))))
        }
        ,
        i.prototype.deferLoad = function(e) {
            var t = this;
            i.PendingDeferredList[e] || (i.PendingDeferredList[e] = []),
            i.PendingDeferredList[e].push(this),
            i.DeferredLoadTimeout || (i.DeferredLoadTimeout = window.setTimeout(function() {
                Locator.validationManager.callNewContext(function() {
                    t.loadDeferredModules()
                })
            }, 600))
        }
        ,
        i.prototype.loadDeferredModules = function() {
            var t, n, r, o, s, a, c, u = Object.keys(i.PendingDeferredList);
            for (t = 0,
            n = u; t < n.length; t++)
                for (r = n[t],
                o = i.PendingDeferredList[r],
                delete i.PendingDeferredList[r],
                s = 0,
                a = o; s < a.length; s++)
                    c = a[s],
                    c.load(r);
            i.PendingDeferredList = {},
            e.ModuleContainer.DeferredLoadTimeout = null
        }
        ,
        i.prototype.defaultTopicSubscriptionHandler = function(e) {
            var t = Locator.treeLookup.getReference(e.type);
            this.defaultStem = t,
            this.storedResourcePackage && this.moduleReadyHandler(this.storedResourcePackage)
        }
        ,
        i.prototype.dispose = function() {
            if (this._module) {
                try {
                    this._module.dispose()
                } catch (e) {
                    ErrorReporter.Trace(this, e)
                }
                $assert && $assert(this._module.disposed, "dispose() has been called but module isn't reporting as being disposed - " + this._module),
                this._module.disposed || c.Trace(u.MODULE_LOAD_ENTRY, this._module + " did not dispose correctly"),
                this._module = null
            }
            this.localeModule && (this.localeModule.dispose(),
            this.localeModule = null),
            this.appModule && (this.appModule.dispose(),
            this.appModule = null),
            this.disposed = !0
        }
        ,
        i.prototype.getModule = function() {
            return this._module
        }
        ,
        i.prototype.invoke = function(e) {
            var t = this;
            this.moduleReady ? Locator.validationManager.callLater(function() {
                t.disposed || e(t._module)
            }) : this.invokeQueue.push(e)
        }
        ,
        i.prototype.moduleAvailableHandler = function(t) {
            var n, i = this._module = new t.definition;
            i.initObject = this.initObject,
            e.MediaTypeIdLookup && (n = -1 === this.moduleName.indexOf("-") ? this.moduleName : this.moduleName.substring(0, this.moduleName.indexOf("-")),
            i.mediaTypeId = e.MediaTypeIdLookup[n],
            $assert && $assert(void 0 !== i.mediaTypeId, "moduleAvailableHandler() is looking for the media type of module '" + this.moduleName + "' which is not defined in MediaTypeIdLookup"));
            try {
                this.appendChild(i)
            } catch (r) {
                ErrorReporter.Trace(this, r)
            }
        }
        ,
        i.prototype.moduleReadyHandler = function(e) {
            var t, i, o, l;
            if (!this.disposed) {
                if (this.defaultTopic && !this.defaultStem)
                    return void (this.storedResourcePackage = e);
                if (this.defaultTopic && !this._module)
                    return void n(r(this));
                this.storedResourcePackage = null,
                t = this._module.languageDefinition = ns_gen5_util.Singleton.getInstance(ns_gen5_language.Resource, this._module),
                t.mlJson = e.languageDefinition,
                e.config && (this._module.config = new s,
                this._module.config.setConfigJSON(e.config)),
                this.defaultStem && (this._module.defaultStem = this.defaultStem),
                this.defaultApiLocation && (this._module.defaultApiLocation = this.defaultApiLocation),
                this.localeModule && (this._module.localeModuleContainer = this.localeModule);
                try {
                    this._module.moduleReady(),
                    this._module.bubbleEvent(new a(a.MODULE_READY)),
                    this.moduleReady = !0
                } catch (d) {
                    ErrorReporter.Trace(this, d)
                }
                for ($assert && $assert(this._module.ready, "moduleReady() has been called but module isn't reporting as ready - " + this.moduleName),
                this._module.ready || c.Trace(u.MODULE_LOAD_ENTRY, this.moduleName + " did not ready-up correctly"),
                i = 0,
                o = this.invokeQueue; i < o.length; i++) {
                    l = o[i];
                    try {
                        l(this._module)
                    } catch (d) {
                        ErrorReporter.Trace(this, d)
                    }
                }
                this.invokeQueue.length = 0
            }
        }
        ,
        i.ModuleCache = {},
        i.PendingList = {},
        i.PendingDeferredList = {},
        i.ModuleLoader = new ns_gen5_net.ModuleLoaderBlob,
        i.SInit = function() {
            i.prototype._module = null,
            i.prototype.defaultStem = null,
            i.prototype.moduleReady = !1,
            i.prototype.storedResourcePackage = null,
            i.prototype.disposed = !1,
            i.prototype.initObject = null,
            i.prototype.defaultTopic = null,
            i.prototype.elementName = null,
            i.prototype.moduleName = null,
            i.prototype.defaultApiLocation = null
        }(),
        i
    }(e.Component),
    e.ModuleContainerAs = i,
    e.ModuleContainer = i
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = e.DomElement
      , n = function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.spinnerStyle = "g5-Spinner_Image",
            t.defaultStyle = "g5-Spinner",
            t
        }
        return __extends(n, e),
        n.prototype.createChildren = function() {
            this.addStyle(this.defaultStyle),
            this.addStyle("g5-Spinner_FadeIn");
            var e = new t;
            e.setAttribute("class", this.spinnerStyle),
            this.appendChild(e),
            this.validateNow()
        }
        ,
        n.prototype.remove = function() {
            var e, t = this, n = this._element;
            this.removeStyle("g5-Spinner_FadeIn"),
            this.addStyle("g5-Spinner_FadeOut"),
            e = function() {
                t.removeStyle("g5-Spinner_FadeOut"),
                n.parentElement.removeChild(n),
                n.removeEventListener(ANIMATION_END, e)
            }
            ,
            this._element.addEventListener && this._element.addEventListener(ANIMATION_END, e, !1),
            this.validateNow()
        }
        ,
        n
    }(e.Component);
    e.Spinner = n
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    function t() {
        if ("undefined" != typeof u.currentApplication) {
            v = e.replayWidth || document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
            y = e.replayHeight || document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight,
            S = window.innerHeight,
            u.currentApplication.width = v;
            var t;
            t = v < u.widthThreshold ? 0 : 1,
            t != u.currentApplication.widthState && (u.currentApplication.removeStyle(m + u.currentApplication.widthState),
            u.currentApplication.widthState = t,
            o.dispatchEvent(new l(l.WIDTH_STATE_CHANGED,v)),
            Locator.validationManager.processValidationCycleNow(),
            u.currentApplication.overwriteStyle(m + u.currentApplication.widthState, m + t)),
            t = v < u.viewWidthThreshold ? 0 : 1,
            t != u.currentApplication.viewState && (u.currentApplication.removeStyle(E + u.currentApplication.viewState),
            u.currentApplication.viewState = t,
            o.dispatchEvent(new l(l.VIEW_STATE_CHANGED)),
            Locator.validationManager.processValidationCycleNow(),
            u.currentApplication.overwriteStyle(E + u.currentApplication.viewState, E + t)),
            u.currentApplication.height !== y && (u.currentApplication.height = y,
            o.dispatchEvent(new l(l.HEIGHT_CHANGED))),
            u.currentApplication.innnerHeight !== S && (u.currentApplication.innnerHeight = S,
            u.currentApplication.innnerHeight !== y && o.dispatchEvent(new l(l.HEIGHT_CHANGED))),
            u.currentApplication.dispatchEvent(new l(l.WIDTH_CHANGED,v))
        }
    }
    function n(e) {
        window.removeEventListener("orientationchanged", n),
        window.removeEventListener("resize", n),
        window.addEventListener(e.type, t),
        t()
    }
    function i() {
        o && !o.preventUnloading && (o.preventUnloading = !1,
        o.dispatchEvent(new l(l.UNLOADING)))
    }
    function r(e) {
        o && (e = e || window.event,
        "focus" == e.type || "focusin" == e.type ? o.suspended = !1 : "blur" == e.type || "focusout" == e.type ? o.suspended = !0 : this[a] ? o.suspended = !0 : o.suspended = !1,
        o.suspended ? o.dispatchEvent(new l(l.FOCUS_OUT)) : o.dispatchEvent(new l(l.FOCUS_IN)))
    }
    var o, s, a, c, u, l = ns_gen5_events.ApplicationEvent, d = ns_gen5_util.Delegate, h = e.Spinner, p = ns_gen5_data.StreamDataProcessorEvent, _ = e.PointerProcessor, g = ns_gen5_events.ScrollEvent, f = !1, m = "widthState", E = "viewState", v = 0, y = 0, S = 0, C = 0, T = 0;
    window.addEventListener("orientationchanged", n),
    window.addEventListener("resize", n),
    window.addEventListener("beforeunload", i),
    a = "",
    c = {
        hidden: "visibilitychange",
        mozHidden: "mozvisibilitychange",
        webkitHidden: "webkitvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (a in c)
        if (a in document) {
            s = c[a];
            break
        }
    s ? (document.removeEventListener(s, r),
    document.addEventListener(s, r)) : "onfocusin"in document ? document.onfocusin = document.onfocusout = r : window.onfocus = window.onblur = r,
    u = function(n) {
        function i(r) {
            var s = n.call(this) || this;
            return s.applyPointerProcessor = !0,
            s._loadingTimer = null,
            s._spinner = null,
            s.height = 0,
            s.width = 0,
            s.widthState = -1,
            s.viewState = -1,
            s.suspended = !1,
            s.preventUnloading = !1,
            s.connected = !1,
            s.innnerHeight = 0,
            e.Component.Wrapper.call(s, r),
            s.addStyle("g5-Application"),
            s._delegate_loadingHandler = new d(s,s.loadingHandler),
            s._delegate_loadingCompleteHandler = new d(s,s.loadingCompleteHandler),
            s._delegate_showStreamingHandler = new d(s,s._showStreamingHandler),
            s._delegate_connectedHandler = new d(s,s._connectedHandler),
            s._delegate_connectionFailureHandler = new d(s,s._connectionFailedHandler),
            s._delegate_scrollToHandler = new d(s,s._windowScrollHandler),
            s._addSpinnerCallback = function() {
                return s.addSpinner()
            }
            ,
            Locator.subscriptionManager._streamDataProcessor.addEventListener(p.CONNECTED, s._delegate_connectedHandler),
            Locator.subscriptionManager._streamDataProcessor.addEventListener(p.CONNECTION_FAILED, s._delegate_connectionFailureHandler),
            Locator.subscriptionManager._streamDataProcessor.addEventListener(p.RECONNECT_FAILED, s._delegate_connectionFailureHandler),
            o = i.currentApplication = s,
            v = window.innerWidth || document.body.clientWidth,
            y = window.innerHeight || document.body.clientHeight,
            "screen"in window && (C = window.screen.width,
            T = window.screen.height),
            s.width = v,
            t(),
            s
        }
        return __extends(i, n),
        i.prototype.toString = function() {
            return "[Application]"
        }
        ,
        i.prototype.enableUI = function() {
            f || (f = !0,
            this.applyPointerProcessor && (this.pointerProcessor = new _(this),
            this.pointerProcessor.activate()),
            this.addEventListener(l.LOADING, this._delegate_loadingHandler),
            this.addEventListener(l.LOADING_COMPLETE, this._delegate_loadingCompleteHandler),
            this.addEventListener("showStreaming", this._delegate_showStreamingHandler),
            this.addEventListener(g.SCROLL_TO, this._delegate_scrollToHandler))
        }
        ,
        i.prototype.disableUI = function() {
            f && (f = !1,
            this._spinner && (this._spinner.remove(),
            this._spinner = null),
            this.removeEventListener(l.LOADING, this._delegate_loadingHandler),
            this.removeEventListener(l.LOADING_COMPLETE, this._delegate_loadingCompleteHandler),
            this.removeEventListener("showStreaming", this._delegate_showStreamingHandler),
            this.removeEventListener(g.SCROLL_TO, this._delegate_scrollToHandler),
            this.pointerProcessor && (this.pointerProcessor.release(),
            this.pointerProcessor = null))
        }
        ,
        i.prototype.loadingHandler = function() {
            f && !this._loadingTimer && (this._loadingTimer = window.setTimeout(this._addSpinnerCallback, i.loadingTimeout))
        }
        ,
        i.prototype.addSpinner = function() {
            this._spinner = new h;
            var e = this.getElement();
            e.appendChild(this._spinner.getElement()),
            this._spinner.initialize()
        }
        ,
        i.prototype.loadingCompleteHandler = function() {
            this._loadingTimer && (clearTimeout(this._loadingTimer),
            this._loadingTimer = null),
            this._spinner && (this._spinner.remove(),
            this._spinner = null)
        }
        ,
        i.prototype._showStreamingHandler = function() {
            this.preventUnloading = !0
        }
        ,
        i.prototype._connectedHandler = function() {
            this.connected = !0
        }
        ,
        i.prototype._connectionFailedHandler = function() {
            this.connected = !1
        }
        ,
        i.prototype.getDeviceWidth = function() {
            return v
        }
        ,
        i.prototype.getDeviceHeight = function() {
            return y
        }
        ,
        i.prototype.getDeviceInnerHeight = function() {
            return S
        }
        ,
        i.prototype.getScreenWidth = function() {
            return C
        }
        ,
        i.prototype.getScreenHeight = function() {
            return T
        }
        ,
        i.prototype.lockScrolling = function() {
            this.scrollPos = document.documentElement.scrollTop,
            this.getInlineStyle().top = "-" + this.scrollPos + "px",
            this.scrollLocked = !0,
            this.addStyle("g5-Application-scrolllock")
        }
        ,
        i.prototype.unlockScrolling = function() {
            var e = this;
            this.scrollLocked = !1,
            this.getInlineStyle().top = "",
            this.removeStyle("g5-Application-scrolllock"),
            this.scrollPos && Locator.validationManager.callPostValidation(function() {
                window.scrollTo(0, e.scrollPos),
                e.scrollPos = 0
            })
        }
        ,
        i.prototype.resetSavedScrollPositionValue = function() {
            this.scrollPos = 0
        }
        ,
        i.prototype.getIsScrollLocked = function() {
            return this.scrollLocked
        }
        ,
        i.prototype.setHasOverlay = function(e) {
            e ? this.addStyle("g5-Application-hasoverlay") : this.removeStyle("g5-Application-hasoverlay")
        }
        ,
        i.prototype._windowScrollHandler = function(e) {
            window.scrollTo(e.x, e.y),
            e.stopPropagation = !0
        }
        ,
        i.loadingTimeout = 200,
        i.overflowLayout = !1,
        i.widthThreshold = 550,
        i.viewWidthThreshold = 950,
        i
    }(e.Component),
    e.Application = u
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.MakeAccessible = function(e, t) {
            e.setAttribute("title", t || "")
        }
        ,
        e
    }();
    e.IFrameAccessibilityDelegate = t
}(ns_gen5_ui_accessibility || (ns_gen5_ui_accessibility = {})),
function(e) {
    var t = function() {
        function e(e) {
            this.element = e
        }
        return e.prototype.activate = function() {
            var e = this
              , t = this.element.getElement();
            t.addEventListener("keydown", function(t) {
                return e.keydownHandler(t)
            }),
            this.useMouseEventConstructor = "function" == typeof MouseEvent
        }
        ,
        e.prototype.keydownHandler = function(e) {
            var t, n;
            if (" " === e.key || "Enter" === e.key || "Spacebar" === e.key) {
                for (t = document.activeElement,
                this.useMouseEventConstructor ? n = new MouseEvent(e.type) : (n = document.createEvent("MouseEvent"),
                n.initMouseEvent(e.type, !1, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null)),
                Object.defineProperty(n, "target", {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                }); t; ) {
                    if (t.wrapper && t.wrapper.clickHandler) {
                        try {
                            t.wrapper.clickHandler(n)
                        } catch (i) {
                            ErrorReporter.Trace(this, i)
                        }
                        break
                    }
                    t = t.parentNode
                }
                Locator.validationManager.processValidationCycleNow()
            }
        }
        ,
        e
    }();
    e.KeyProcessor = t
}(ns_gen5_ui_accessibility || (ns_gen5_ui_accessibility = {})),
function(e) {
    function t(e) {
        var n, i, r;
        for (e.accessibilityDelegate && Locator.validationManager.callLater(function() {
            e.accessibilityDelegate.MakeAccessible(e)
        }),
        n = e.getElementChildren(),
        i = 0; i < n.length; i++)
            r = n[i],
            r.wrapper && t(r.wrapper)
    }
    function n() {
        document.documentElement.lang = ns_gen5_ml.LanguageSettings.getLanguageCode()
    }
    function i() {
        var e = document.head.querySelector("meta[name=viewport]")
          , t = e.getAttribute("content").replace("maximum-scale=1.0, user-scalable=0, ", "");
        e.setAttribute("content", t)
    }
    function r() {
        $assert && $assert(u, "Focus styles have not been registered"),
        u && (a = document.createElement("style"),
        document.head.appendChild(a),
        a.textContent = u,
        c = !0,
        document.body.addEventListener("mousedown", function(e) {
            o(e)
        }),
        document.body.addEventListener("keydown", function(e) {
            s(e)
        }))
    }
    function o(e) {
        c && (a.textContent = ":focus { outline: none; }",
        c = !1)
    }
    function s(e) {
        ("INPUT" !== e.target.nodeName && "TEXTAREA" !== e.target.nodeName || "Tab" == e.key) && (c || (a.textContent = u,
        c = !0))
    }
    var a, c, u, l, d = ns_gen5_ui.Application, h = e.KeyProcessor;
    e.accSetupFuncList = [],
    l = function() {
        function o() {}
        return o.RegisterFocusStyles = function(e) {
            u = e
        }
        ,
        o.EnableAccessibility = function(o) {
            var s, a, c, u;
            if (void 0 === o && (o = !0),
            !e.accessibilityEnabled) {
                for (e.accessibilityEnabled = !0,
                s = 0,
                a = e.accSetupFuncList; s < a.length; s++)
                    (c = a[s])();
                e.accSetupFuncList = [],
                u = new h(d.currentApplication),
                u.activate(),
                r(),
                n(),
                o && i(),
                t(d.currentApplication)
            }
        }
        ,
        o
    }(),
    e.AccessibilityController = l
}(ns_gen5_ui_accessibility || (ns_gen5_ui_accessibility = {})),
function(e) {
    var t = function() {
        function e(e) {
            this.svgWrapperComponent = e
        }
        return e.prototype.makeAccessible = function() {
            var e = this.svgWrapperComponent.getElementChildren() && this.svgWrapperComponent.getElementChildren()[0];
            e && "svg" === e.tagName && (this.svgWrapperComponent.title ? (e.setAttribute("role", "img"),
            e.setAttribute("aria-label", this.svgWrapperComponent.title)) : e.setAttribute("aria-hidden", "true"),
            e.setAttribute("focusable", "false"))
        }
        ,
        e
    }();
    e.SVGWrapperDelegate = t
}(ns_gen5_ui_accessibility || (ns_gen5_ui_accessibility = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.MakeAccessible = function(e) {
            "svg" == e.getElement().tagName && (e.title ? (e.setAttribute("role", "img"),
            e.setAttribute("focusable", "false"),
            e.setAttribute("aria-label", e.title)) : e.setAttribute("aria-hidden", "true"))
        }
        ,
        e
    }();
    e.SVGDelegate = t
}(ns_gen5_ui_accessibility || (ns_gen5_ui_accessibility = {})),
function(e) {
    var t = function() {
        function e(e, t) {
            this.props = e,
            this.label = t
        }
        return e.prototype.makeAccessible = function() {
            var e = this.props.button;
            e && (e.setAttribute("role", "button"),
            e.setAttribute("tabindex", "0"),
            e.setAttribute("aria-expanded", this.props.getOpen() ? "true" : "false"),
            this.label && e.setAttribute("aria-label", this.label))
        }
        ,
        e.prototype.setOpen = function(e) {
            this.props.button && this.props.button.setAttribute("aria-expanded", e ? "true" : "false")
        }
        ,
        e.prototype.setDisabled = function(e) {
            e ? this.props.button.setAttribute("aria-disabled", "true") : this.props.button.removeAttribute("aria-disabled")
        }
        ,
        e
    }();
    e.ClosableContainerAccessibilityDelegate = t
}(ns_gen5_ui_accessibility || (ns_gen5_ui_accessibility = {})),
function(e) {
    var t = ns_gen5_ui_accessibility.SVGWrapperDelegate
      , n = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        __extends(n, e),
        i = n,
        n.prototype.setSVGData = function(e) {
            this._element.innerHTML = e,
            this.accessibility && this.accessibility.makeAccessible()
        }
        ,
        n.MakeAccessible = function(e) {
            var n = new t(e);
            e.accessibility = n,
            n.makeAccessible()
        }
        ;
        var i;
        return n = i = __decorate([AccessibilityDelegate(i)], n)
    }(e.Component);
    e.SVGWrapperComponent = n
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = ns_gen5_ui_accessibility.SVGDelegate
      , n = function(e) {
        function n(t) {
            return e.call(this, t) || this
        }
        return __extends(n, e),
        n.prototype.commitStyles = function() {
            var e, t = "";
            for (e in this._styleList)
                t += e + " ";
            this._element.setAttribute("class", t)
        }
        ,
        n.prototype.createElement = function(e) {
            return document.createElementNS("http://www.w3.org/2000/svg", e)
        }
        ,
        n.prototype.setViewbox = function(e) {
            this._element.setAttribute("viewBox", e)
        }
        ,
        n.prototype.createSVGPoint = function() {
            return this._element.createSVGPoint()
        }
        ,
        n = __decorate([AccessibilityDelegate(t)], n)
    }(e.Component);
    e.SVG = n
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.addPoint = function(e) {
            var t = this.cordinateContext ? this.cordinateContext.createSVGPoint() : e;
            this.cordinateContext && (t.x = e.x,
            t.y = e.y),
            this._element.points.appendItem(t)
        }
        ,
        t.prototype.removePoint = function(e) {
            this._element.points.removeItem(e)
        }
        ,
        t.prototype.pointCount = function() {
            return this._element.points.numberOfItems
        }
        ,
        t.prototype.clearPoints = function() {
            this._element.points.clear()
        }
        ,
        t.prototype.setStroke = function(e) {
            this._element.setAttribute("stroke", e)
        }
        ,
        t.prototype.setStrokeWidth = function(e) {
            this._element.setAttribute("stroke-width", e)
        }
        ,
        t.prototype.setFill = function(e) {
            this._element.setAttribute("fill", e)
        }
        ,
        t.prototype.setFillOpacity = function(e) {
            this._element.setAttribute("fill-opacity", e)
        }
        ,
        t.SInit = function() {
            t.prototype.cordinateContext = null
        }(),
        t
    }(e.SVG);
    e.SVGPoly = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this, "stop") || this
        }
        return __extends(t, e),
        t.prototype.setOffset = function(e) {
            this._element.setAttribute("offset", e)
        }
        ,
        t.prototype.setOpacity = function(e) {
            this._element.setAttribute("stop-opacity", e)
        }
        ,
        t.prototype.setColor = function(e) {
            this._element.setAttribute("stop-color", e)
        }
        ,
        t
    }(e.SVG);
    e.SVGStop = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            var n = e.call(this, "linearGradient") || this;
            return n.id = t,
            n.svgId = t,
            n
        }
        return __extends(t, e),
        t.prototype.initialize = function() {
            this._element.setAttribute("id", this.id),
            e.prototype.initialize.call(this)
        }
        ,
        t.prototype.setX1 = function(e) {
            this._element.setAttribute("x1", e)
        }
        ,
        t.prototype.setX2 = function(e) {
            this._element.setAttribute("x2", e)
        }
        ,
        t.prototype.setY1 = function(e) {
            this._element.setAttribute("y1", e)
        }
        ,
        t.prototype.setY2 = function(e) {
            this._element.setAttribute("y2", e)
        }
        ,
        t.prototype.getUrl = function() {
            return "url(" + Locator.config.domain.hrefNoHash() + "#" + this.svgId + ")"
        }
        ,
        t
    }(e.SVG);
    e.SVGLinearGradient = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t, n = function(e) {
        function n(n, i) {
            var r = this;
            return t = i.getElement(),
            r = e.call(this, n) || this,
            t = null,
            1 != r._stopInitInvalidation && (Locator.validationManager.queueForValidation(r),
            r._propertiesInvalidated = !0),
            r
        }
        return __extends(n, e),
        n.prototype.createElement = function(e) {
            var n = t.querySelector("#" + e);
            return $assert && $assert(!n.wrapper, "The SVG element has already been wrapped."),
            n
        }
        ,
        n
    }(e.SVG);
    e.SVGWrapper = n
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    function t(e, t) {
        if (!t)
            return !1;
        for (; t.parent; ) {
            if (t.parent == e || t == e)
                return !0;
            t = t.parent
        }
        return !1
    }
    var n = ns_gen5_ui.Component
      , i = ns_gen5_ui.Application
      , r = function() {
        function e() {}
        return e.Register = function(t) {
            e.Root = t
        }
        ,
        e.AddPopup = function(t, n, i, r) {
            void 0 === n && (n = !0),
            void 0 === i && (i = e.Root),
            void 0 === r && (r = !0),
            $assert && $assert(e.Root, "Root is not specified"),
            n ? (e.PopupHasOverlay = !0,
            e.ShowOverlay(!0, e.Root)) : e.PopupHasOverlay && (e.PopupHasOverlay = !1,
            e.ShowOverlay(!1, e.Root)),
            e.PopupList.push(t),
            i.appendChildAt(t, 0),
            r && (e.SupressClickTarget = t)
        }
        ,
        e.RemovePopup = function(t) {
            $assert && $assert(e.PopupList.indexOf(t) > -1, "Popup does not exist in the manager");
            var n = e.PopupList.indexOf(t);
            n > -1 && (t.parent.removeChild(t),
            t.dispose(),
            e.PopupList.splice(n, 1),
            e.PopupHasOverlay && (e.PopupHasOverlay = !1,
            e.ShowOverlay(!1, e.Root)))
        }
        ,
        e.HasPopup = function() {
            return this.PopupList.length > 0
        }
        ,
        e.ContainsPopup = function(n) {
            return t(e.Root, n)
        }
        ,
        e.HandleHover = function(t) {
            for (var n = 0; n < e.RegisteredDelegates.length; n++)
                e.RegisteredDelegates[n].overlayHoverHandler && e.RegisteredDelegates[n].overlayHoverHandler(t)
        }
        ,
        e.HandleTouchMove = function(e) {
            e.preventDefault()
        }
        ,
        e.HandleClick = function(n) {
            var i, r;
            if (n = n || window.event,
            n.target) {
                for (r = 0; r < e.RegisteredDelegates.length; r++)
                    i = e.RegisteredDelegates[r],
                    t(i, n.target.wrapper) || i == e.SupressClickTarget || i.clickOutsideHandler(n);
                e.SupressClickTarget = null
            }
        }
        ,
        e.AddDelegate = function(t) {
            var n = e.RegisteredDelegates.indexOf(t);
            $assert && $assert(-1 === n, "The delegate has already been added."),
            -1 === n && e.RegisteredDelegates.push(t)
        }
        ,
        e.RemoveDelegate = function(t) {
            var n = e.RegisteredDelegates.indexOf(t);
            $assert && $assert(n > -1, "The delegate is not added."),
            n > -1 && e.RegisteredDelegates.splice(n, 1)
        }
        ,
        e.ShowOverlay = function(t, n) {
            var r, o, s;
            void 0 === n && (n = null),
            r = e.OverlayComponent,
            r.initialized || r.initialize(),
            t ? (e.OverlayCount > 0 && (e.RemoveOverlay(r),
            e.OverlayCount--),
            null != n ? n.appendChild(r) : (o = document.body,
            o && o.appendChild(r.getElement())),
            e.OverlayCount++) : e.OverlayCount > 0 && (e.RemoveOverlay(r),
            e.OverlayCount--),
            s = e.OverlayCount > 0,
            r.setVisible(s),
            i.currentApplication.setHasOverlay(s),
            Locator.validationManager.queueForValidation(r)
        }
        ,
        e.RemoveOverlay = function(e) {
            e.parent ? e.parent.removeChild(e) : e.getElement().parentElement.removeChild(e.getElement())
        }
        ,
        e.RegisteredDelegates = [],
        e.OverlayCount = 0,
        e.PopupList = [],
        e.CreateOverlay = function() {
            var t, i, r = new n;
            r.addStyle("g5-PopupManager_ClickMask"),
            r.setVisible(!1),
            t = document.body,
            t && (t.appendChild(r.getElement()),
            t.addEventListener("click", e.HandleClick),
            t.addEventListener("touchend", e.HandleClick)),
            i = r.getElement(),
            i.addEventListener("mousemove", e.HandleHover),
            i.addEventListener("touchmove", e.HandleTouchMove),
            e.OverlayComponent = r
        }(),
        e
    }();
    e.PopupManager = r
}(ns_gen5_ui_managers || (ns_gen5_ui_managers = {})),
function(e) {
    var t = e.Component
      , n = ns_gen5_ui_accessibility.ClosableContainerAccessibilityDelegate
      , i = function(e) {
        function i(t) {
            return e.call(this, t) || this
        }
        __extends(i, e),
        r = i,
        i.prototype.toString = function() {
            return "[ClosableContainer]"
        }
        ,
        i.prototype.createChildren = function() {
            this._button = new this._buttonClass(this._buttonTag),
            this._initAppendChildButton && this.appendChild(this._button),
            this._open && this.initializeContainer()
        }
        ,
        i.prototype.initializeContainer = function() {
            this._container || (this._container = new this._containerClass(this._containerTag),
            this._initAppendChildContainer && this.appendChild(this._container))
        }
        ,
        i.prototype.setOpen = function(e) {
            e != this._open && (this._open = e,
            this._container ? this._container.setVisible(this._open) : this.initializeContainer()),
            this.accessibility && this.accessibility.setOpen(e)
        }
        ,
        i.prototype.getOpen = function() {
            return this._open
        }
        ,
        i.prototype.clickHandler = function(e) {
            this.setOpen(!this._open)
        }
        ,
        i.MakeAccessible = function(e) {
            var t = {
                button: e._button,
                getOpen: function() {
                    return e.getOpen()
                }
            }
              , i = new n(t);
            e.accessibility = i,
            i.makeAccessible()
        }
        ;
        var r;
        return i.SInit = function() {
            r.prototype._button = null,
            r.prototype._buttonClass = t,
            r.prototype._container = null,
            r.prototype._containerClass = t,
            r.prototype._open = !1,
            r.prototype._initAppendChildButton = !0,
            r.prototype._initAppendChildContainer = !0,
            r.prototype._buttonTag = null,
            r.prototype._containerTag = null,
            r.prototype.accessibility = null
        }(),
        i = r = __decorate([AccessibilityDelegate(r)], i)
    }(e.Component);
    e.ClosableContainer = i
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    e.StemBaseMixin = function() {
        function e() {
            this.stem && this.stem.addDelegate(this),
            this.___initialize && this.___initialize()
        }
        function t(e) {
            var n, i, r = e || this;
            if (r.detatchStem && r.detatchStem(),
            r.validationState = 0,
            r.getFirstChild)
                for (n = r.getFirstChild(),
                i = void 0; n; )
                    i = n.wrapper,
                    n = n.nextSibling,
                    i && (i.validationState = 0,
                    i.recursiveDetatchStem ? i.recursiveDetatchStem() : t(i))
        }
        function n() {
            this.validationState = 0,
            this.stem && (this.stem.removeDelegate(this),
            this.stem = null,
            this.parent && this._active_element.parentNode && this.parent.removeChild(this))
        }
        function i(e, t) {}
        function r(e, t) {}
        function o(e) {
            this.detatchStem()
        }
        return function() {
            this.stem = null,
            this.___initialize = this.initialize,
            this.initialize = e,
            this.stemUpdateHandler = i,
            this.stemDeleteHandler = o,
            this.stemInsertHandler = r,
            this.detatchStem = n,
            this.recursiveDetatchStem = t
        }
    }()
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ComponentStemBase]"
        }
        ,
        t.prototype.stemUpdateHandler = function(e, t) {}
        ,
        t.prototype.stemDeleteHandler = function(e) {}
        ,
        t.prototype.stemInsertHandler = function(e, t) {}
        ,
        t.prototype.detatchStem = function() {}
        ,
        t.prototype.recursiveDetatchStem = function() {}
        ,
        t
    }(e.Component);
    e.ComponentStemBase = t,
    e.StemBaseMixin.call(t.prototype)
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ClosableContainerStemBase]"
        }
        ,
        t.prototype.createChildren = function() {
            this._button = new this._buttonClass(this._buttonTag),
            this.buttonAcceptsStem && (this._button.stem = this.stem),
            this._initAppendChildButton && this.appendChild(this._button),
            this._open && this.initializeContainer()
        }
        ,
        t.prototype.initializeContainer = function() {
            this._container = new this._containerClass,
            this._container.stem = this.stem,
            this._initAppendChildContainer && this.appendChild(this._container)
        }
        ,
        t.prototype.stemUpdateHandler = function(e, t) {}
        ,
        t.prototype.stemDeleteHandler = function(e) {}
        ,
        t.prototype.stemInsertHandler = function(e, t) {}
        ,
        t.prototype.detatchStem = function() {}
        ,
        t.prototype.recursiveDetatchStem = function() {}
        ,
        t.SInit = function() {
            t.prototype.buttonAcceptsStem = !1
        }(),
        t
    }(e.ClosableContainer);
    e.ClosableContainerStemBase = t,
    e.StemBaseMixin.call(t.prototype)
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    function t(e) {
        return !!e.createChildInstance
    }
    var n = e.ComponentStemBase
      , i = function(e) {
        function i(t) {
            return e.call(this, t) || this
        }
        return __extends(i, e),
        i.prototype.toString = function() {
            return "[GenericStemRenderer]"
        }
        ,
        i.prototype.createChildren = function() {
            var e, n, i, r, o, s, a, c, u;
            if (this.stem)
                if (e = this,
                n = this.stem.getChildren(),
                i = this.childType,
                t(e))
                    for (r = 0,
                    o = n; r < o.length; r++)
                        s = o[r],
                        a = e.createChildInstance(s),
                        a.stem = s,
                        this.appendChild(a);
                else
                    for (c = 0,
                    u = n; c < u.length; c++)
                        s = u[c],
                        a = new i,
                        a.stem = s,
                        this.appendChild(a)
        }
        ,
        i.prototype.appendChildAt = function(t, n) {
            return e.prototype.appendChildAt.call(this, t, n + this.baseIndex)
        }
        ,
        i.prototype.stemInsertHandler = function(e, n) {
            var i, r = n.data.OR, o = this, s = t(o) ? o.createChildInstance(n) : new this.childType;
            if (s.stem = n,
            r)
                try {
                    i = this._element.childNodes[Number(r) + this.baseIndex],
                    i ? this.insertBefore(s, i) : this.appendChild(s)
                } catch (a) {
                    ErrorReporter.Trace(this, a),
                    this.appendChild(s)
                }
            else
                this.appendChild(s)
        }
        ,
        i.prototype.setStem = function(e) {
            var t = this
              , n = 0 !== this.validationState;
            this.stem && this.recursiveDetatchStem(),
            this.stem = e,
            this.parent && this.stem && (this.stem.addDelegate(this),
            Locator.validationManager.callLater(function() {
                t.suspendElementFromDom(),
                t.createChildren(),
                Locator.validationManager.callPostValidation(function() {
                    return t.unsuspendElementFromDom()
                })
            })),
            n && (this.validationState = 1)
        }
        ,
        i.SInit = function() {
            i.prototype.childType = n,
            i.prototype.baseIndex = 0
        }(),
        i
    }(e.ComponentStemBase);
    e.GenericStemRenderer = i
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this, "input") || this;
            return t.passwordDisplay = !1,
            t._rendered = !1,
            t
        }
        return __extends(t, e),
        t.prototype.createChildren = function() {
            if (this.defaultValue && this.setValue(this.defaultValue),
            this.maxLength > 0 && this.setAttribute("maxlength", this.maxLength + ""),
            this.passwordDisplay)
                this.setAttribute("type", "password");
            else if (this.setAttribute("type", "text"),
            this._initialValue && "" != this._initialValue) {
                var e = this.getElement();
                e.value = this._initialValue
            }
            this._rendered = !0
        }
        ,
        t.prototype.setValue = function(e) {
            return this._rendered ? this.getElement().value = e : this._initialValue = e,
            e
        }
        ,
        t.prototype.getValue = function() {
            var e;
            return e = this._rendered ? this.getElement().value : this._initialValue
        }
        ,
        t
    }(e.Component);
    e.TextInput = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = ns_gen5_ui.DomElement
      , n = ns_gen5_ui.Module
      , i = function() {
        function e() {}
        return e.getInstance = function(i, r) {
            var o, s, a;
            if (e.ClassMap || (e.ClassMap = new Map,
            e.ModuleBank = new Map),
            r) {
                if (a = r instanceof t ? n.getRoot(r) : e.ModuleIDLookup[r],
                !a)
                    return null;
                o = e.ModuleBank.get(a),
                o || (o = new Map,
                e.ModuleBank.set(a, o))
            } else
                o = e.ClassMap;
            return s = o.get(i),
            s || (s = new i,
            o.set(i, s)),
            s
        }
        ,
        e.RemoveInstance = function(t) {
            e.ClassMap["delete"](t)
        }
        ,
        e.RemoveScope = function(t) {
            t instanceof n && delete e.ModuleIDLookup[t.uid],
            e.ModuleBank["delete"](t)
        }
        ,
        e.RegisterModule = function(t) {
            e.ModuleIDLookup[t.uid] || (e.ModuleIDLookup[t.uid] = t)
        }
        ,
        e.ModuleIDLookup = [],
        e
    }();
    e.Singleton = i
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[WidthStateWatcherEvent]"
        }
        ,
        t.WIDTH_STATE_CHANGED = "widthStateChanged",
        t
    }(ns_gen5_events.Event365);
    e.WidthStateWatcherEvent = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = ns_gen5_ui.Application
      , n = ns_gen5_events.ApplicationEvent
      , i = e.Delegate
      , r = e.WidthStateWatcherEvent
      , o = function(e) {
        function o() {
            return e.call(this) || this
        }
        return __extends(o, e),
        o.prototype.toString = function() {
            return "[WidthStateWatcher]"
        }
        ,
        o.prototype.initialize = function() {
            var e, r, o, s, a;
            if (this._delegate_applicationWidthChangedHandler = new i(this,this._applicationWidthChangedHandler),
            this._applicationWidthChangedHandler(new n(n.WIDTH_CHANGED,t.currentApplication.width)),
            t.currentApplication.addEventListener(n.WIDTH_CHANGED, this._delegate_applicationWidthChangedHandler),
            $assert)
                for ($assert(this.thresholds, "Thresholds have not been set on this instance of " + this),
                e = this.thresholds,
                r = -1,
                o = e.length,
                s = 0; o > s; s++)
                    a = e[s],
                    $assert(a > r, "The thresholds list provided to this instance of " + this + " is not sequential."),
                    r = a;
            this.initialized = !0
        }
        ,
        o.prototype.dispose = function() {
            this._registeredDisplayElements = null,
            t.currentApplication.removeEventListener(n.WIDTH_CHANGED, this._delegate_applicationWidthChangedHandler)
        }
        ,
        o.prototype.registerElement = function(e) {
            this._registeredDisplayElements || (this._registeredDisplayElements = []),
            this._registeredDisplayElements[this._registeredDisplayElements.length] = e,
            this.initialized && e.addStyle(this.classPrefix + this.state)
        }
        ,
        o.prototype.unregisterElement = function(e) {
            this._registeredDisplayElements.splice(this._registeredDisplayElements.indexOf(e), 1)
        }
        ,
        o.prototype._applicationWidthChangedHandler = function(e) {
            var t, n, i, o, s = this.thresholds, a = e.width, c = -1, u = s.length;
            for (n = 0; u > n; n++)
                if (t = s[n],
                t > a) {
                    c = n;
                    break
                }
            if (-1 == c && (c = s.length),
            this.state != c && (i = this.state,
            this.state = c,
            this.hasEventListener(r.WIDTH_STATE_CHANGED) && this.dispatchEvent(new r(r.WIDTH_STATE_CHANGED)),
            o = this._registeredDisplayElements,
            o && (u = o.length)))
                if (-1 == i)
                    for (n = 0; u > n; n++)
                        o[n].addStyle(this.classPrefix + c);
                else
                    for (n = 0; u > n; n++)
                        o[n].overwriteStyle(this.classPrefix + i, this.classPrefix + c)
        }
        ,
        o.SInit = function() {
            o.prototype._delegate_applicationWidthChangedHandler = null,
            o.prototype._registeredDisplayElements = null,
            o.prototype.initialized = !1,
            o.prototype.state = -1,
            o.prototype.thresholds = null,
            o.prototype.classPrefix = "g5-WidthStateWatcher_CurrentSize-"
        }(),
        o
    }(ns_gen5_events.EventDispatcher);
    e.WidthStateWatcher = o
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t, n = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.initialize = function() {}
        ,
        t.prototype.stemUpdateHandler = function(e, t) {}
        ,
        t.prototype.stemInsertHandler = function(e, t) {}
        ,
        t.prototype.stemDeleteHandler = function(e) {}
        ,
        t.prototype.detatchStem = function() {}
        ,
        t.prototype.recursiveDetatchStem = function() {}
        ,
        t.SInit = function() {
            ns_gen5_ui.StemBaseMixin.call(t.prototype)
        }(),
        t
    }(ns_gen5_events.EventDispatcher);
    e.StemMergeProcessor_PrivateBase = n,
    t = function(e) {
        function t(t, n) {
            var i = e.call(this) || this;
            if (i.toStem = null,
            i._excludeMap = null,
            !t || !n) {
                $assert && $assert(!1, "StemMergeProcessor.ts - Null stem passed to constructor - fromStem: " + t + ", toStem: " + n);
                try {
                    throw new Error
                } catch (r) {
                    ErrorReporter.Trace("StemMergeProcessor.ts", "Null stem passed to constructor", r.stack + ("\nfromStem: " + t + ", toStem: " + n))
                }
                return i
            }
            return i.stem = t,
            i.toStem = n,
            "_T"in n.data && delete n.data._T,
            i._excludeMap = {},
            i._excludeMap.IT = 1,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[StemMergeProcessor]"
        }
        ,
        t.prototype.excludeAttributes = function() {
            var e, t, n, i = [];
            for (e = 0; e < arguments.length; e++)
                i[e] = arguments[e];
            for (t = arguments.length,
            n = 0; t > n; n++)
                this._excludeMap[arguments[n]] = 1
        }
        ,
        t.prototype.initialize = function() {
            e.prototype.initialize.call(this),
            this.takeAll()
        }
        ,
        t.prototype.takeAll = function() {
            var e, t = this.stem.data, n = this.toStem.data;
            for (e in t)
                e in this._excludeMap || (n[e] = t[e]);
            return n
        }
        ,
        t.prototype.detatchStem = function() {
            this.toStem = null,
            e.prototype.detatchStem.call(this)
        }
        ,
        t.prototype.stemUpdateHandler = function(e, t) {
            var n, i = {};
            for (n in t)
                n in this._excludeMap || (i[n] = t[n]);
            this.toStem.update(i)
        }
        ,
        t
    }(n),
    e.StemMergeProcessor = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.GetCookieValue = function(e) {
            return this.GetCookieAttributeValue(e)
        }
        ,
        e.GetCookieAttributeValue = function(e, t) {
            var n, i, r, o, s, a, c = document.cookie.split(";"), u = null, l = c.length;
            for (o = 0; l > o; o++)
                if (r = c[o],
                i = r.indexOf("="),
                n = r.substr(0, i),
                n = n.replace(/^\s+|\s+$/g, ""),
                n == e) {
                    if (u = r.substr(i + 1),
                    t)
                        for (s = u.split("&"),
                        u = null,
                        a = 0; a < s.length; a++)
                            if (t == s[a].split("=")[0]) {
                                u = s[a].split("=")[1];
                                break
                            }
                    break
                }
            return u ? unescape(u) : u
        }
        ,
        e.SetCookieValue = function(e, t, n, i, r) {
            var o, s, a, c, u = document.cookie.split(";"), l = [], d = !1, h = "";
            if (i && (h = ";domain=" + i),
            t && 0 != t.length) {
                for (s = 0; s < u.length; s++)
                    if (u[s] = u[s].replace(/^\s+|\s+$/g, ""),
                    e == u[s].split("=")[0])
                        for (a = u[s].substring(u[s].indexOf("=") + 1, u[s].length),
                        l = a.split("&"),
                        c = 0; c < l.length; c++)
                            t == l[c].split("=")[0] && (l[c] = t + "=" + escape(n).replace(/\+/g, "%2b"),
                            d = !0);
                d || (l.length++,
                l[l.length - 1] = t + "=" + escape(n).replace(/\+/g, "%2b")),
                document.cookie = e + "=; expires=Thu, 01-Jan-70 00:00:01 GMT;path=/",
                document.cookie = e + "=" + l.join("&") + (r ? h : "") + ";path=/" + Locator.user.cookieSecurityLevel
            } else
                o = new Date,
                o.setDate(o.getDate() + 90),
                document.cookie = e + "=" + n + h + ";path=/" + Locator.user.cookieSecurityLevel
        }
        ,
        e.DropCookie = function(e, t) {
            void 0 === t && (t = ""),
            t && (t = "domain=" + t + ";"),
            document.cookie = e + "=;" + t + "expires=Thu, 01-Jan-70 00:00:01 GMT;path=/"
        }
        ,
        e.GetSessionId = function() {
            var t;
            return t = e.GetCookieValue("pstk"),
            /[A-F0-9]{38}/i.test(t) || (t = null),
            t
        }
        ,
        e.SetSessionId = function(t, n) {
            e.SetCookieValue("pstk", "", t, n)
        }
        ,
        e.SetLoginSuccess = function(t) {
            var n = 1 == t ? "1" : "0";
            e.SetCookieValue("session", "lgs", n)
        }
        ,
        e.SetKYCPage = function(t) {
            e.SetCookieValue("session", "kpd", t)
        }
        ,
        e
    }();
    e.CookieManager = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = e.TextNode
      , n = function(e) {
        function n(t) {
            return e.call(this, t) || this
        }
        return __extends(n, e),
        n.prototype.toString = function() {
            return "[Label]"
        }
        ,
        n.prototype.createChildren = function() {
            this._textNode = new t(this._text),
            this.appendChild(this._textNode)
        }
        ,
        n.prototype.commitProperties = function() {
            this._textChanged && (this._textChanged = !1,
            this._textNode.setText(this._text))
        }
        ,
        n.prototype.setText = function(e) {
            e != this._text && (this._text = e,
            this._textChanged = !0,
            this.invalidateProperties())
        }
        ,
        n.prototype.getText = function() {
            return this._text
        }
        ,
        n.prototype.getTooltip = function() {
            return this._text
        }
        ,
        n.prototype.commitText = function(e) {
            this._textNode.setText(e)
        }
        ,
        n.SInit = function() {
            n.prototype._text = null,
            n.prototype._textChanged = !1,
            n.prototype._textNode = null
        }(),
        n
    }(e.Component);
    e.Label = n
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t, n = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.prototype.stemUpdateHandler = function(e, t) {}
        ,
        t.prototype.stemDeleteHandler = function(e) {}
        ,
        t.prototype.stemInsertHandler = function(e, t) {}
        ,
        t.prototype.detatchStem = function() {}
        ,
        t.prototype.recursiveDetatchStem = function() {}
        ,
        t
    }(e.Label);
    e.LabelStemBase_Mixin = n,
    e.StemBaseMixin.call(n.prototype),
    t = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n._textChanged = !0,
            n
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[LabelStemBase]"
        }
        ,
        t.prototype.commitProperties = function() {
            this._textChanged && (this._text = this.stem.data[this.stemAttributeName] || "",
            e.prototype.commitProperties.call(this))
        }
        ,
        t.prototype.stemUpdateHandler = function(e, t) {
            this.stemAttributeName in t && (this._textChanged = !0,
            this.invalidateProperties())
        }
        ,
        t.prototype.setStem = function(e) {
            this.stem && this.stem.removeDelegate(this),
            this.stem = e,
            e && (e.addDelegate(this),
            this._textChanged = !0,
            this.invalidateProperties())
        }
        ,
        t.SInit = function() {
            t.prototype.stemAttributeName = "NA"
        }(),
        t
    }(n),
    e.LabelStemBase = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = ns_gen5_ui_accessibility.IFrameAccessibilityDelegate
      , n = function(e) {
        function n() {
            var t = e.call(this, "iframe") || this;
            return t.scrolling = !1,
            t.onloadHandler = function() {
                return t.onLoad()
            }
            ,
            t
        }
        __extends(n, e),
        i = n,
        n.prototype.createChildren = function() {
            var e = this
              , t = this.getElement();
            t.src = this.src,
            t.name = this.name,
            t.scrolling = this.scrolling ? "yes" : "no",
            t.setAttribute("allowtransparency", this.allowTransparency ? "true" : "false"),
            this.setVisible(!1),
            t.addEventListener("load", this.onloadHandler),
            t.addEventListener("unload", function() {
                return e.executeUnload()
            })
        }
        ,
        n.prototype.executeUnload = function() {}
        ,
        n.prototype.onLoad = function() {
            var e = this.getElement();
            e.removeEventListener("load", this.onloadHandler),
            this.setVisible(!0)
        }
        ,
        n.MakeAccessible = function(e) {
            t.MakeAccessible(e, e.title)
        }
        ;
        var i;
        return n = i = __decorate([AccessibilityDelegate(i)], n)
    }(e.Component);
    e.InlineFrame = n
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    function t(t, n) {
        return function(e) {
            function i() {
                var i = e.call(this) || this;
                return i.load(t, n),
                i
            }
            return __extends(i, e),
            i
        }(e.ModuleContainer)
    }
    e.SingletonModule = t
}(ns_gen5_ui || (ns_gen5_ui = {})),
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.direction = null,
            t
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ArrowButton]"
        }
        ,
        t.prototype.createChildren = function() {
            this.addStyle("g5-ArrowButton"),
            this.direction && this.addStyle(this.direction)
        }
        ,
        t.LEFT = "g5-ArrowButton_Left",
        t.RIGHT = "g5-ArrowButton_Right",
        t.UP = "g5-ArrowButton_Up",
        t.DOWN = "g5-ArrowButton_Down",
        t
    }(ns_gen5_ui.Component);
    e.ArrowButton = t
}(ns_gen5_ui_controls || (ns_gen5_ui_controls = {})),
function(e) {
    var t = ns_gen5_ui.Component
      , n = e.ArrowButton
      , i = -1
      , r = 1
      , o = function(e) {
        function o() {
            var t = e.call(this) || this;
            return t.scrollAmmountModifier = 1,
            t.ignoreButtonsForTravel = !1,
            t.fixedWidthScroll = !1,
            t._scrollContent = null,
            t._leftButton = null,
            t._rightButton = null,
            t
        }
        return __extends(o, e),
        o.prototype.toString = function() {
            return "[HorizontalScroller]"
        }
        ,
        o.prototype.createChildren = function() {
            var e, n, o = this;
            this.addStyle(this.baseStyle),
            e = this._leftButton = new this.arrowButtonType,
            e.direction = this.directions.LEFT,
            e.clickHandler = function() {
                return o._travel(r)
            }
            ,
            e.addStyle(this.baseStyle + "_Dis"),
            n = this._rightButton = new this.arrowButtonType,
            n.direction = this.directions.RIGHT,
            n.clickHandler = function() {
                return o._travel(i)
            }
            ,
            this.hScroll = new t,
            this.hScroll.addStyle(this.baseStyle + "_HScroll"),
            this.appendChild(this.hScroll),
            this.appendChild(e),
            this.appendChild(this.hScroll),
            this.hScroll.appendChild(this._scrollContent),
            this.appendChild(n)
        }
        ,
        o.prototype._travel = function(e, t) {
            var n, i, r, o;
            this._rightButton.removeStyle(this.baseStyle + "_Dis"),
            this._leftButton.removeStyle(this.baseStyle + "_Dis"),
            this.buttonWidth || (this.buttonWidth = this._rightButton.getElement().clientWidth),
            this.ignoreButtonsForTravel && (this.buttonWidth = 0),
            n = this._scrollContent.getElement(),
            i = n.clientWidth - 2 * this.buttonWidth,
            this.totalWidth || (this.totalWidth = n.scrollWidth),
            this.max_x_pos = i - this.totalWidth,
            this.max_x_pos > 0 && (this.max_x_pos = 0),
            r = n.style.left || "0px",
            r = r.slice(0, -2),
            o = t || n.scrollWidth / n.children.length * this.scrollAmmountModifier,
            this.endPos = Number(r) + o * e,
            this.endPos - this.graceSpace < this.max_x_pos && (this.endPos = this.max_x_pos,
            this._rightButton.addStyle(this.baseStyle + "_Dis")),
            this.endPos + this.graceSpace > 0 && (this.endPos = 0,
            this._leftButton.addStyle(this.baseStyle + "_Dis")),
            n.style.left = this.endPos + "px"
        }
        ,
        o.prototype.setScrollContent = function(e) {
            this._scrollContent = e,
            this._scrollContent.addStyle(this.baseStyle + "_ScrollContent")
        }
        ,
        o.SInit = function() {
            o.prototype.directions = n,
            o.prototype.arrowButtonType = n,
            o.prototype.baseStyle = "g5-HorizontalScroller",
            o.prototype.graceSpace = 60
        }(),
        o
    }(ns_gen5_ui.Component);
    e.HorizontalScroller = o
}(ns_gen5_ui_controls || (ns_gen5_ui_controls = {})),
function(e) {
    var t = 1.70158
      , n = function() {
        function e() {}
        return e.EaseIn = function(e) {
            return e * e * ((t + 1) * e - t)
        }
        ,
        e.EaseOut = function(e) {
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        ,
        e.EaseInOut = function(e) {
            return (e *= 2) < 1 ? .5 * (e * e * ((1.525 * t + 1) * e - 1.525 * t)) : .5 * ((e -= 2) * e * ((1.525 * t + 1) * e + 1.525 * t) + 2)
        }
        ,
        e
    }();
    e.Back = n
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.EaseIn = function(t) {
            return 1 - e.EaseOut(1 - t)
        }
        ,
        e.EaseOut = function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        ,
        e.EaseInOut = function(t) {
            return (t *= 2) < 1 ? .5 * e.EaseIn(t) : .5 * e.EaseOut(t - 1) + .5
        }
        ,
        e
    }();
    e.Bounce = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
function(e) {
    var t = 1
      , n = .3
      , i = n / 4
      , r = function() {
        function e() {}
        return e.EaseIn = function(e) {
            return 0 == e || 1 == e ? e : -(t * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - i) * (2 * Math.PI) / n))
        }
        ,
        e.EaseOut = function(e) {
            return 0 == e || 1 == e ? e : t * Math.pow(2, -10 * e) * Math.sin((e - i) * (2 * Math.PI) / n) + 1
        }
        ,
        e.EaseInOut = function(e) {
            return 0 == e || 1 == e ? e : (e = 2 * e - 1,
            0 > e ? -.5 * (t * Math.pow(2, 10 * e) * Math.sin((e - 1.5 * i) * (2 * Math.PI) / (1.5 * n))) : .5 * t * Math.pow(2, -10 * e) * Math.sin((e - 1.5 * i) * (2 * Math.PI) / (1.5 * n)) + 1)
        }
        ,
        e
    }();
    e.Elastic = r
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.EaseIn = function(e) {
            return 0 == e ? 0 : Math.pow(2, 10 * (e - 1))
        }
        ,
        e.EaseOut = function(e) {
            return 1 == e ? 1 : 1 - Math.pow(2, -10 * e)
        }
        ,
        e.EaseInOut = function(e) {
            return 0 == e || 1 == e ? e : 0 > (e = 2 * e - 1) ? .5 * Math.pow(2, 10 * e) : 1 - .5 * Math.pow(2, -10 * e)
        }
        ,
        e
    }();
    e.Exponential = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.EaseNone = function(e) {
            return e
        }
        ,
        e
    }();
    e.Linear = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.EaseIn = function(e) {
            return e * e * e * e
        }
        ,
        e.EaseOut = function(e) {
            return 1 - (e -= 1) * e * e * e
        }
        ,
        e.EaseInOut = function(e) {
            return .5 > e ? 8 * e * e * e * e : -8 * (e -= 1) * e * e * e + 1
        }
        ,
        e
    }();
    e.Quartic = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.EaseIn = function(e) {
            return e * e
        }
        ,
        e.EaseOut = function(e) {
            return -e * (e - 2)
        }
        ,
        e.EaseInOut = function(e) {
            return .5 > e ? 2 * e * e : -2 * e * (e - 2) - 1
        }
        ,
        e
    }();
    e.Quadratic = t
}(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})),
function(e) {
    function t() {
        var e, n, r;
        for (o = +new Date,
        e = 0,
        n = a.slice(); e < n.length; e++)
            r = n[e],
            r.update(o),
            r.getPlaying() || i(r);
        Locator.validationManager.processValidationCycleNow(),
        a.length && requestAnimationFrame(t)
    }
    function n(e) {
        a[a.length] = e,
        1 == a.length && (requestAnimationFrame(t),
        o = +new Date),
        c && (c = !1,
        Locator.validationManager.callPostValidation(function() {
            c = !0,
            t()
        }))
    }
    function i(e) {
        var t = a.indexOf(e);
        t > -1 && a.splice(t, 1)
    }
    function r(e, t) {
        var n, i, r, o, s, a, c, u = e.from;
        return e.to instanceof Array ? (o = e.to,
        n = o[0],
        s = o[1],
        "string" == typeof s ? i = s : r = s) : (n = e.to,
        i = ""),
        a = u + t * (n - u),
        e.internal_different = a !== e.internal_previous_raw,
        e.internal_previous_raw = a,
        e.internal_different ? r ? (c = r(n + u === 1 ? a : Math.round(a)),
        e.internal_different = c !== e.internal_previous_calc,
        e.internal_previous_calc = c,
        c) : i ? (c = (n + u === 1 ? a : Math.round(a)) + i,
        e.internal_different = c !== e.internal_previous_calc,
        e.internal_previous_calc = c,
        c) : a : -0
    }
    var o, s = ns_gen5_animation_easing.Linear, a = [], c = !0, u = function() {
        function e(t, n, i, r) {
            var o = this;
            this.element = t,
            this.time = n,
            this.params = i,
            this.flags = r,
            Locator.validationManager.callLater(function() {
                o.flags & e.AUTO_START_OFF || o.start()
            })
        }
        return e.prototype.start = function() {
            this.playing || (this.playing = !0,
            n(this),
            this.startTime = o)
        }
        ,
        e.prototype.pause = function() {
            this.playing ? (this.playing = !1,
            i(this)) : this.flags |= e.AUTO_START_OFF
        }
        ,
        e.prototype.end = function() {
            this.playing && (this.playing = !1,
            this.update(this.startTime + this.time + 1),
            i(this))
        }
        ,
        e.prototype.getPlaying = function() {
            return this.playing
        }
        ,
        e.prototype.getElement = function() {
            return this.element
        }
        ,
        e.prototype.then = function(t) {
            return t.flags = (t.flags || 0) | e.AUTO_START_OFF,
            this.next = t
        }
        ,
        e.prototype.onBegin = function(e) {
            return this.beginCallback = e,
            this
        }
        ,
        e.prototype.onChange = function(e) {
            return this.changeCallback = e,
            this
        }
        ,
        e.prototype.onComplete = function(e) {
            return this.completeCallback = e,
            this
        }
        ,
        e.prototype.executeVoidCallback = function(e) {
            try {
                e()
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.executeChangeCallback = function(e) {
            try {
                this.changeCallback(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }
        ,
        e.prototype.update = function(t) {
            var n, i, o, a, c, u, l;
            if (this.element) {
                if (n = (t - (this.startTime + (this.params.delay || 0))) / (this.time * e.DurationModifier) || (0 === this.time ? 1 : 0),
                n >= 1)
                    this.playing = !1,
                    n = 1;
                else if (0 > n)
                    return void (n = 0);
                if (!this.moving && this.playing && (this.moving = !0,
                this.beginCallback && this.executeVoidCallback(this.beginCallback)),
                i = (this.params.ease || s.EaseNone)(n),
                o = this.params,
                o.attribute)
                    for (a in o.attribute)
                        c = o.attribute[a],
                        u = r(c, i) + "",
                        c.internal_different && this.element.setAttribute(a, u);
                if (o.style) {
                    l = this.element.getElement().style;
                    for (a in o.style)
                        c = o.style[a],
                        u = r(c, i) + "",
                        c.internal_different && (l[a] = u)
                }
                if (o.property)
                    for (a in o.property)
                        c = o.property[a],
                        u = r(c, i),
                        c.internal_different && ("function" == typeof this.element[a] ? this.element[a](u) : this.element[a] = u);
                this.changeCallback && this.executeChangeCallback(i),
                this.playing || (this.completeCallback && this.executeVoidCallback(this.completeCallback),
                this.next && (this.next.start(),
                this.next = null))
            }
        }
        ,
        e.DurationModifier = 1,
        e.AUTO_START_OFF = 1,
        e.SInit = function() {
            e.prototype.playing = !1,
            e.prototype.moving = !1,
            e.prototype.startTime = 0,
            e.prototype.next = null,
            e.prototype.element = null,
            e.prototype.time = 0,
            e.prototype.params = null,
            e.prototype.flags = 0,
            e.prototype.beginCallback = null,
            e.prototype.changeCallback = null,
            e.prototype.completeCallback = null
        }(),
        e
    }();
    e.Tween = u
}(ns_gen5_animation || (ns_gen5_animation = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.CONNECTED = "connected",
        t.DISCONNECTED = "disconnected",
        t.CONNECTION_FAILED = "connectionFailed",
        t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession",
        t
    }(ns_gen5_events.Event365);
    e.ReaditConnectionEvent = t
}(readit || (readit = {})),
function(e) {}(readit || (readit = {})),
function(e) {
    var t = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e),
        t.CONNECTED = "connected",
        t.DISCONNECTED = "disconnected",
        t.CONNECTION_FAILED = "connectionFailed",
        t.PULL_ENABLED = "pullEnabled",
        t.PULL_DISABLED = "pullDisabled",
        t.PULL_DATA_RECEIVED = "pullDataReceived",
        t.PULL_REQUEST_FAILED = "pullRequestFailed",
        t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession",
        t
    }(ns_gen5_events.Event365);
    e.TransportConnectionEvent = t
}(readit || (readit = {})),
function(e) {
    var t = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.message = n,
            i
        }
        return __extends(t, e),
        t.prototype.toString = function() {
            return "[ReaditMessageEvent type=" + this.type + " message=" + this.message + "]"
        }
        ,
        t.MESSAGE_RECEIVED = "messageReceived",
        t
    }(ns_gen5_events.Event365);
    e.ReaditMessageEvent = t
}(readit || (readit = {})),
function(e) {
    var t = function() {
        function t(e, t, n, i) {
            this.messageType = e,
            this.topic = t,
            this.message = n,
            this.userHeaders = i
        }
        return t.prototype.toString = function() {
            return "[ReaditMessage messageType=" + this.messageType + " message=" + this.message + " topic=" + this.topic + "]"
        }
        ,
        t.prototype.getMessage = function() {
            return this.message
        }
        ,
        t.prototype.getTopic = function() {
            return this.topic
        }
        ,
        t.prototype.getBaseTopic = function() {
            return this.topic.substr(this.topic.lastIndexOf("/") + 1, this.topic.length)
        }
        ,
        t.prototype.getUserHeaders = function() {
            return this.userHeaders
        }
        ,
        t.prototype.isInitialTopicLoad = function() {
            return this.messageType === e.StandardProtocolConstants.INITIAL_TOPIC_LOAD
        }
        ,
        t
    }();
    e.ReaditMessage = t
}(readit || (readit = {})),
function(e) {
    var t;
    !function(e) {
        e[e.DISCONNECTED = 0] = "DISCONNECTED",
        e[e.PENDING = 1] = "PENDING",
        e[e.CONNECTED = 2] = "CONNECTED"
    }(t = e.ReaditConnectionStatus || (e.ReaditConnectionStatus = {})),
    e.StandardProtocolConstants = {
        RECORD_DELIM: "",
        FIELD_DELIM: "",
        HANDSHAKE_MESSAGE_DELIM: "",
        MESSAGE_DELIM: "\b",
        HANDSHAKE_MESSAGE_END_DELIM: "\x00",
        CLIENT_CONNECT: 0,
        CLIENT_POLL: 1,
        CLIENT_SEND: 2,
        CLIENT_CONNECT_FAST: 3,
        INITIAL_TOPIC_LOAD: 20,
        DELTA: 21,
        CLIENT_SUBSCRIBE: 22,
        CLIENT_UNSUBSCRIBE: 23,
        CLIENT_SWAP_SUBSCRIPTIONS: 26,
        NONE_ENCODING: 0,
        ENCRYPTED_ENCODING: 17,
        COMPRESSED_ENCODING: 18,
        BASE64_ENCODING: 19,
        SERVER_PING: 24,
        CLIENT_PING: 25,
        CLIENT_ABORT: 28,
        CLIENT_CLOSE: 29,
        ACK_ITL: 30,
        ACK_DELTA: 31,
        ACK_RESPONSE: 32,
        CLIENT_ACTION: 49
    }
}(readit || (readit = {})),
function(e) {
    var t, n = ns_gen5_util.Delegate, i = e.TransportConnectionEvent, r = e.ReaditConnectionEvent, o = e.ReaditConnectionStatus;
    e.ReadItLog = new function() {
        var e = ns_gen5_util.LogEntry;
        this._enabled = !0,
        this._log = [],
        this.getLog = function() {
            return this._log
        }
        ,
        this.Log = function(t) {
            if (this._log.push(new e(t)),
            this._enabled)
                try {
                    var n = new Date;
                    $log(n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds() + "." + n.getMilliseconds() + " -> " + t)
                } catch (i) {}
        }
        ,
        this.SetEnabled = function(e) {
            this._enabled = e
        }
    }
    ,
    e.pushConnectionStatusEnum = {
        ATTEMPTINGCONNECTION: 1,
        CONNECTED: 2,
        FIRSTATTEMPTFAILED: 3,
        ALLRETRYSFAILED: 4,
        DISCONNECTED: 5,
        DELTA: 6,
        PULL_FALLBACK_ENABLED: 7,
        PULL_FALLBACK_DISABLED: 8,
        PULL_FALLBACK_DATA_RECEIVED: 9,
        PULL_FALLBACK_REQUEST_FAILED: 10
    },
    e.ReaditFlags = {
        SEND_CLOSE: 1
    },
    t = function(t) {
        function s() {
            var e = t.call(this) || this;
            return e._connectionListStart = null,
            e._connectionListEnd = null,
            e._currentConnectionDetails = null,
            e._currentTransportMethod = null,
            e._connectionStatus = o.DISCONNECTED,
            e._connectionCycleAttempts = 0,
            e.connectionListCycles = 0,
            e.pushStatusHandler = null,
            e.storageId = null,
            e.delegate_transportConnectedHandler = new n(e,e.transportConnectedHandler),
            e.delegate_transportConnectionFailedHandler = new n(e,e.transportConnectionFailedHandler),
            e.delegate_transportDisconnectedHandler = new n(e,e.transportDisconnectedHandler),
            e.delegate_transportConnectionFailedInvalidSessionHandler = new n(e,e.transportConnectionFailedInvalidSessionHandler),
            e
        }
        return __extends(s, t),
        s.prototype.toString = function() {
            return "[ReaditClient]"
        }
        ,
        s.prototype.addConnectionAttempt = function(e) {
            this._connectionListStart ? (this._connectionListEnd.next = e,
            this._connectionListEnd = e) : this._connectionListStart = this._connectionListEnd = e
        }
        ,
        s.prototype.connect = function(e) {
            this.metricKey = e,
            this._connectionStatus == o.DISCONNECTED && (this._connectionStatus = o.PENDING,
            this._connectionCycleAttempts = 0,
            this._currentConnectionDetails = this._connectionListEnd,
            this.connectToNext())
        }
        ,
        s.prototype.close = function(e) {
            if (this._currentTransportMethod) {
                var t = this._currentTransportMethod;
                this.disposeCurrentTransportMethod(),
                t.close(e)
            }
            this._connectionStatus = o.DISCONNECTED
        }
        ,
        s.prototype.connectToNext = function() {
            if (!Locator.config.hasSessionExpired()) {
                if (!this._currentConnectionDetails || !(this._currentConnectionDetails = this._currentConnectionDetails.next)) {
                    if (this.connectionListCycles > 0 && this._connectionCycleAttempts++ == this.connectionListCycles)
                        return e.ReadItLog.Log("Transport connection cycles completed, connection failed"),
                        this.close(),
                        void this.dispatchEvent(new r(e.ReaditConnectionEvent.CONNECTION_FAILED));
                    this._currentConnectionDetails = this._connectionListStart
                }
                this.disposeCurrentTransportMethod(),
                this._currentTransportMethod = new this._currentConnectionDetails.transportMethod,
                this._currentTransportMethod.addEventListener(i.CONNECTED, this.delegate_transportConnectedHandler),
                this._currentTransportMethod.addEventListener(i.CONNECTION_FAILED, this.delegate_transportConnectionFailedHandler),
                this._currentTransportMethod.addEventListener(i.DISCONNECTED, this.delegate_transportDisconnectedHandler),
                this._currentTransportMethod.addEventListener(i.CONNECTION_FAILED_INVALID_SESSION, this.delegate_transportConnectionFailedInvalidSessionHandler),
                this._currentTransportMethod.setConnectionDetails(this._currentConnectionDetails),
                this._currentTransportMethod.setMessageDispatcher(this),
                this.logPushStatus(String(e.pushConnectionStatusEnum.ATTEMPTINGCONNECTION), this.getCurrentConnectionHost()),
                this._currentTransportMethod.storageId = this.storageId,
                this._currentTransportMethod.connect(this.metricKey)
            }
        }
        ,
        s.prototype.disposeCurrentTransportMethod = function() {
            this._currentTransportMethod && (this._currentTransportMethod.removeEventListener(i.CONNECTED, this.delegate_transportConnectedHandler),
            this._currentTransportMethod.removeEventListener(i.CONNECTION_FAILED, this.delegate_transportConnectionFailedHandler),
            this._currentTransportMethod.removeEventListener(i.DISCONNECTED, this.delegate_transportDisconnectedHandler),
            this._currentTransportMethod.removeEventListener(i.CONNECTION_FAILED_INVALID_SESSION, this.delegate_transportConnectionFailedInvalidSessionHandler),
            this._currentTransportMethod = null)
        }
        ,
        s.prototype.subscribe = function(e) {
            if (this._connectionStatus == o.CONNECTED)
                try {
                    this._currentTransportMethod.subscribe(e)
                } catch (t) {
                    ErrorReporter.Trace(this, t)
                }
        }
        ,
        s.prototype.unsubscribe = function(e) {
            if (this._connectionStatus == o.CONNECTED)
                try {
                    this._currentTransportMethod.unsubscribe(e)
                } catch (t) {
                    ErrorReporter.Trace(this, t)
                }
        }
        ,
        s.prototype.send = function(e, t) {
            this._connectionStatus == o.CONNECTED && this._currentTransportMethod.send(e, t)
        }
        ,
        s.prototype.swapSubscription = function(e, t) {
            if (this._connectionStatus == o.CONNECTED)
                try {
                    this._currentTransportMethod.swapSubscription(e, t)
                } catch (n) {
                    ErrorReporter.Trace(this, n)
                }
        }
        ,
        s.prototype.getConnectionID = function() {
            return this._connectionStatus == o.CONNECTED ? this._currentTransportMethod.getConnectionId() : null
        }
        ,
        s.prototype.getConnected = function() {
            return this._connectionStatus == o.CONNECTED
        }
        ,
        s.prototype.getConnectionStatus = function() {
            return this._connectionStatus
        }
        ,
        s.prototype.getTransportSuspended = function() {
            return this._currentTransportMethod && this._currentTransportMethod.suspended
        }
        ,
        s.prototype.getCurrentConnectionHost = function() {
            return this._currentConnectionDetails ? this._currentConnectionDetails.host : this._connectionListEnd.host
        }
        ,
        s.prototype.getCurrentConnectionDetails = function() {
            return this._currentTransportMethod.getConnectionDetails()
        }
        ,
        s.prototype.logPushStatus = function(e, t) {
            try {
                this.pushStatusHandler && this.pushStatusHandler.log(e, 0, t)
            } catch (n) {}
        }
        ,
        s.prototype.transportConnectedHandler = function() {
            this._connectionStatus = o.CONNECTED,
            this.logPushStatus(String(e.pushConnectionStatusEnum.CONNECTED), this.getCurrentConnectionHost()),
            this.dispatchEvent(new r(e.ReaditConnectionEvent.CONNECTED))
        }
        ,
        s.prototype.transportConnectionFailedHandler = function() {
            this.logPushStatus(String(e.pushConnectionStatusEnum.DISCONNECTED), this.getCurrentConnectionHost()),
            this.connectToNext()
        }
        ,
        s.prototype.transportDisconnectedHandler = function() {
            this.close(),
            this.logPushStatus(String(e.pushConnectionStatusEnum.DISCONNECTED), this.getCurrentConnectionHost()),
            this.dispatchEvent(new r(e.ReaditConnectionEvent.DISCONNECTED))
        }
        ,
        s.prototype.transportConnectionFailedInvalidSessionHandler = function() {
            this.close(),
            this.dispatchEvent(new r(e.ReaditConnectionEvent.CONNECTION_FAILED_INVALID_SESSION))
        }
        ,
        s
    }(ns_gen5_events.EventDispatcher),
    e.ReaditClient = t
}(readit || (readit = {})),
function(e) {
    var t = function() {
        function e(e, t, n, i, r, o, s, a, c) {
            this.host = e,
            this.port = t,
            this.transportMethodId = n,
            this.defaultTopic = i,
            this.uid = r,
            this.preloaded = o,
            this.preloadedOpenEvent = s,
            this.preloadedMessageEvent = a,
            this.protocol = c,
            this.next = null
        }
        return e.prototype.clone = function() {
            var t = new e(this.host,this.port,this.transportMethodId,this.defaultTopic,this.uid,this.preloaded,this.preloadedOpenEvent,this.preloadedMessageEvent,this.protocol);
            return this.preloaded = null,
            this.preloadedOpenEvent = null,
            this.preloadedMessageEvent = null,
            t
        }
        ,
        e.prototype.toString = function() {
            return "[host:" + this.host + ", port:" + this.port + ", topic:" + this.defaultTopic + "]"
        }
        ,
        e
    }();
    e.ReaditConnectionDetails = t
}(readit || (readit = {})),
function(e) {
    "use strict";
    var t = 0
      , n = 1
      , i = 3
      , r = 4
      , o = function() {
        function e() {
            var e = this;
            this.xdr = new XDomainRequest,
            this.xdr.timeout = 6e4,
            this.status = 0,
            this.readyState = t,
            this.responseText = null,
            this.contentType = null,
            this.onreadystatechange = null,
            this.progress_delegate = function() {
                return e._progress()
            }
            ,
            this.onload_delegate = function() {
                return e._onload()
            }
            ,
            this.onerror_delegate = function() {
                return e._onerror()
            }
            ,
            this.ontimeout_delegate = function() {
                return e._timeout()
            }
        }
        return e.TryCreate = function(t) {
            return "withCredentials"in t || !XDomainRequest ? t : new e
        }
        ,
        e.prototype._progress = function() {
            this.readyState = i,
            this.onreadystatechange && this.onreadystatechange.call(this)
        }
        ,
        e.prototype._timeout = function() {
            this.readyState = r,
            this.status = 0,
            this.responseText = null,
            this.contentType = null,
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}
            ,
            this.xdr = void 0,
            this.onreadystatechange && this.onreadystatechange.call(this)
        }
        ,
        e.prototype._onerror = function() {
            this.readyState = r,
            this.status = 0,
            this.responseText = null,
            this.contentType = null,
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}
            ,
            this.xdr = void 0,
            this.onreadystatechange && this.onreadystatechange.call(this)
        }
        ,
        e.prototype._onload = function() {
            this.readyState = r,
            this.status = 200,
            this.responseText = this.xdr.responseText,
            this.contentType = this.xdr.contentType,
            this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}
            ,
            this.xdr = void 0,
            this.onreadystatechange && this.onreadystatechange.call(this)
        }
        ,
        e.prototype.open = function(e, t) {
            var i = null;
            try {
                i = this.xdr.open(e, t)
            } catch (r) {
                throw {
                    name: r.name,
                    message: r.message,
                    number: r.number
                }
            }
            return this.xdr.onprogress = this.progress_delegate,
            this.xdr.ontimeout = this.ontimeout_delegate,
            this.xdr.onerror = this.onerror_delegate,
            this.xdr.onload = this.onload_delegate,
            this.readyState = n,
            this.onreadystatechange && this.onreadystatechange.call(this),
            i
        }
        ,
        e.prototype.send = function(e) {
            this.xdr.send(e)
        }
        ,
        e.prototype.abort = function() {
            return this.readyState = t,
            this.onreadystatechange = null,
            this.xdr.abort()
        }
        ,
        e
    }();
    e.XDomainXMLHttpRequest = o
}(readit || (readit = {})),
function(e) {
    var t, n, i, r, o, s = ns_gen5_util_logging.Timer, a = ns_gen5_util_user.RegisteredCountry, c = "overview_subscribe_brazil", u = "overview_subscribe", l = "socket_connection_brazil_", d = "socket_connection_";
    e.conId = "",
    t = "100",
    n = "111",
    i = "101",
    r = "102",
    o = function(o) {
        function h() {
            var e = o.call(this) || this;
            return e._messageDispatcher = null,
            e._connectionID = "",
            e._connectionTimeout = 0,
            e._url = "",
            e._transportIsSupported = e.checkWebsocketAvailable(),
            e._socket = null,
            e._socketReadyState = null,
            e._connected = !1,
            e.suspended = !1,
            e.storageId = null,
            e.subscriptionLogged = !1,
            e.socketOpenHandler = function(t) {
                e.log("Websocket: onopen: " + t.type),
                e.socketConnectCallback()
            }
            ,
            e.socketErrorHandler = function(t) {
                e.connectionFailed("connection error: " + t.type)
            }
            ,
            e.socketCloseHandler = function(t) {
                e._connected ? e.connectionClosed("Websocket: onclosed: " + t.reason) : e.connectionFailed("connection error: " + t.type + " (unable to connect error)")
            }
            ,
            e.socketMessageHandshakeHandler = function(t) {
                e.connectionTimer && (e.connectionTimer.record(),
                e.connectionTimer = null),
                e.handshakeCallback(t.data)
            }
            ,
            e.socketMessageDataHandler = function(t) {
                !e.subscriptionLogged && e.subscriptionTimer && t.data.indexOf("OVInPlay") && e.subscriptionTimer.snapshotTimestampNow(),
                e.socketDataCallback(t.data)
            }
            ,
            e
        }
        return __extends(h, o),
        h.prototype.toString = function() {
            return "[WebsocketTransportMethod]"
        }
        ,
        h.prototype.close = function() {
            if (this.getSocketConnected()) {
                var t = "";
                t += String.fromCharCode(e.StandardProtocolConstants.CLIENT_CLOSE),
                t += String.fromCharCode(0),
                this.put(t),
                this._socket.close(),
                this.setSocketReadyState()
            }
        }
        ,
        h.prototype.getConnected = function() {
            return this.getSocketConnected() && this._connected
        }
        ,
        h.prototype.getSocketConnected = function() {
            return this._transportIsSupported && this._socketReadyState == WebSocket.OPEN
        }
        ,
        h.prototype.setSocketReadyState = function() {
            this._socketReadyState = this._socket && this._socket.readyState ? this._socket.readyState : null,
            this._connected && this._socketReadyState !== WebSocket.OPEN && (this._connected = !1)
        }
        ,
        h.prototype.connect = function(e) {
            var t, n = this;
            if (Locator.user.countryId == a.Brazil ? (this.connectionMetricKey = l + e,
            this.subscriptionMetricKey = c) : (this.connectionMetricKey = d + e,
            this.subscriptionMetricKey = u),
            this._transportIsSupported || this.connectionFailed("Websocket Transport not supported."),
            null == this._socket) {
                this._connectionTimeout = window.setTimeout(function() {
                    n.connectionFailed("timeout after " + h.CONNECTION_TIMEOUT_LIMIT + "ms")
                }, h.CONNECTION_TIMEOUT_LIMIT);
                try {
                    this._url = this._connectionDetails.host + ":" + this._connectionDetails.port + h.TRAILING + "?uid=" + this._connectionDetails.uid,
                    this.connectionTimer = new s(this.connectionMetricKey),
                    $log(" PreLoaded: " + this._connectionDetails.preloaded + " "),
                    this._connectionDetails.preloaded && this._connectionDetails.preloaded.readyState != WebSocket.CLOSING && this._connectionDetails.preloaded.readyState != WebSocket.CLOSED ? (this._socket = this._connectionDetails.preloaded,
                    this._connectionDetails.preloadedOpenEvent && this.socketOpenHandler(this._connectionDetails.preloadedOpenEvent)) : (t = this._connectionDetails.protocol ? this._connectionDetails.protocol : "zap-protocol-v1",
                    this._socket = new WebSocket(this._url,t)),
                    this._socket.addEventListener("open", this.socketOpenHandler),
                    this._socket.addEventListener("error", this.socketErrorHandler),
                    this._socket.addEventListener("close", this.socketCloseHandler)
                } catch (i) {
                    this.connectionFailed("Unable to open Socket. Error: " + i)
                }
            }
        }
        ,
        h.prototype.socketConnectCallback = function() {
            this.clearConnectionTimeout(),
            this.setSocketReadyState(),
            this.getSocketConnected() ? (this.setInstanceCounter(),
            this._socket.addEventListener("message", this.socketMessageHandshakeHandler),
            this._connectionDetails.preloadedMessageEvent ? this.socketMessageHandshakeHandler(this._connectionDetails.preloadedMessageEvent) : this._connectionDetails.protocol && "zap-protocol-v1" != this._connectionDetails.protocol || this.sendHandshakeData(this.getHandshakeData())) : this.connectionFailed("not connected")
        }
        ,
        h.prototype.setInstanceCounter = function() {
            this.instanceCounter = h.Counter++
        }
        ,
        h.prototype.sendHandshakeData = function(e) {
            var t = this;
            e ? (this._socket.send(e),
            this._connectionTimeout = window.setTimeout(function() {
                t.connectionFailed("timeout after " + h.HANDSHAKE_TIMEOUT_LIMIT + "ms")
            }, h.HANDSHAKE_TIMEOUT_LIMIT)) : this.close()
        }
        ,
        h.prototype.handshakeCallback = function(r) {
            var o, s = this, a = r.split(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM), c = a[0], u = c.split(e.StandardProtocolConstants.FIELD_DELIM);
            if (this.clearConnectionTimeout(),
            u[0] == t)
                this._socket.removeEventListener("message", this.socketMessageHandshakeHandler),
                this.setSocketReadyState(),
                this._connected = !0,
                this._connectionID = u[1],
                this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTED)),
                this.log("Websocket connected as " + this._connectionID + ". " + this._connectionDetails);
            else {
                if (u[0] != i)
                    return u[0] == n ? void this.connectionFailed("connection rejected " + n) : void this.connectionFailed("connection rejected - unrecognised response");
                this._connectionID = u[1],
                e.conId = this._connectionID.substring(0, this._connectionID.indexOf(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_END_DELIM)),
                ns_gen5_net.url = "/zap",
                o = function(t) {
                    if (s.xcftToken = t.detail,
                    s.xcftToken) {
                        e.conId = "",
                        ns_gen5_net.url = "",
                        window.removeEventListener("xcft" + s.instanceCounter, o);
                        var n = s.getHandshakeData(s.xcftToken);
                        s.sendHandshakeData(n)
                    }
                }
                ,
                window.addEventListener("xcft" + this.instanceCounter, o),
                window.dispatchEvent(new CustomEvent("xcftr",{
                    detail: this.instanceCounter
                }))
            }
            this._socket.addEventListener("message", this.socketMessageDataHandler)
        }
        ,
        h.prototype.socketDataCallback = function(t) {
            var n, i, o, s, a, c, u, l, d;
            try {
                if (t) {
                    n = t.split(e.StandardProtocolConstants.MESSAGE_DELIM);
                    do
                        switch (i = n.shift(),
                        o = i.charCodeAt(0)) {
                        case e.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
                        case e.StandardProtocolConstants.DELTA:
                            s = i.split(e.StandardProtocolConstants.RECORD_DELIM),
                            a = s[0].split(e.StandardProtocolConstants.FIELD_DELIM),
                            c = a.shift(),
                            u = c.substr(1, c.length),
                            l = i.substr(s[0].length + 1),
                            !this.subscriptionLogged && this.subscriptionTimer && t.indexOf("OVInPlay") > -1 && (this.subscriptionTimer.record(),
                            this.subscriptionTimer = null,
                            this.subscriptionLogged = !0),
                            null !== this._messageDispatcher && this._messageDispatcher.dispatchEvent(new e.ReaditMessageEvent(e.ReaditMessageEvent.MESSAGE_RECEIVED,new e.ReaditMessage(String(o),u,l,a)));
                            break;
                        case e.StandardProtocolConstants.CLIENT_ABORT:
                        case e.StandardProtocolConstants.CLIENT_CLOSE:
                            this.connectionFailed("Connection close/abort message type sent from publisher. Message type: " + o);
                            break;
                        case e.StandardProtocolConstants.CLIENT_ACTION:
                            d = i.slice(0, 3),
                            d === r && this.subscribe("A_" + this.xcftToken);
                            break;
                        default:
                            this.log("Unrecognised message type sent from publisher: " + o)
                        }
                    while (n.length)
                }
            } catch (h) {
                this.log(h.toString())
            }
        }
        ,
        h.prototype.subscribe = function(t) {
            var n = "";
            n += String.fromCharCode(e.StandardProtocolConstants.CLIENT_SUBSCRIBE),
            n += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
            n += t,
            n += e.StandardProtocolConstants.RECORD_DELIM,
            this.put(n)
        }
        ,
        h.prototype.unsubscribe = function(t) {
            var n = "";
            n += String.fromCharCode(e.StandardProtocolConstants.CLIENT_UNSUBSCRIBE),
            n += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
            n += t,
            n += e.StandardProtocolConstants.RECORD_DELIM,
            this.put(n)
        }
        ,
        h.prototype.swapSubscription = function(e, t) {
            this.unsubscribe(t),
            this.subscribe(e)
        }
        ,
        h.prototype.send = function(t, n) {
            var i = "";
            i += String.fromCharCode(e.StandardProtocolConstants.CLIENT_SEND),
            i += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING),
            i += t,
            i += e.StandardProtocolConstants.RECORD_DELIM,
            i += n,
            this.put(i)
        }
        ,
        h.prototype.put = function(e) {
            try {
                if (!this.getSocketConnected())
                    throw new Error("socket not connected");
                !this.subscriptionLogged && e.indexOf("OVInPlay") > -1 && (this.subscriptionTimer = new s(this.subscriptionMetricKey)),
                this._socket.send(e)
            } catch (t) {
                this.connectionFailed("WebSocket: put:" + t)
            }
        }
        ,
        h.prototype.getHandshakeData = function(t) {
            var n, i = "";
            return i += String.fromCharCode(h.HANDSHAKE_PROTOCOL),
            i += String.fromCharCode(h.HANDSHAKE_VERSION),
            i += String.fromCharCode(h.HANDSHAKE_CONNECTION_TYPE),
            i += String.fromCharCode(h.HANDSHAKE_CAPABILITIES_FLAG),
            null != this._connectionDetails.defaultTopic && (i += this._connectionDetails.defaultTopic + ","),
            n = ns_gen5_util.CookieManager.GetSessionId(),
            null == n ? (this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)),
            null) : (i += "S_" + n,
            t && (i += ",A_" + t),
            i += String.fromCharCode(0))
        }
        ,
        h.prototype.checkWebsocketAvailable = function() {
            return "WebSocket"in window
        }
        ,
        h.prototype.getConnectionId = function() {
            return this._connectionID
        }
        ,
        h.prototype.getConnectionDetails = function() {
            return this._connectionDetails
        }
        ,
        h.prototype.setConnectionDetails = function(e) {
            this._connectionDetails = e
        }
        ,
        h.prototype.setMessageDispatcher = function(e) {
            this._messageDispatcher = e
        }
        ,
        h.prototype.log = function(t) {
            e.ReadItLog.Log(this + " -> " + t)
        }
        ,
        h.prototype.clearConnectionTimeout = function() {
            this._connectionTimeout && (clearTimeout(this._connectionTimeout),
            this._connectionTimeout = null)
        }
        ,
        h.prototype.connectionFailed = function(t) {
            return this.log("Websocket connection (" + this._connectionDetails + ") failed - " + t),
            this.clearConnectionTimeout(),
            this.getConnected() ? void this.connectionClosed("connection failed") : (this.setSocketReadyState(),
            this.dispose(),
            void this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED)))
        }
        ,
        h.prototype.connectionClosed = function(t) {
            this.log("Websocket connection (" + this._connectionDetails + ") closed - " + t),
            this.clearConnectionTimeout(),
            this.setSocketReadyState(),
            this.dispose(),
            this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.DISCONNECTED))
        }
        ,
        h.prototype.dispose = function() {
            this.close(),
            this._socket && (this._socket.removeEventListener("open", this.socketOpenHandler),
            this._socket.removeEventListener("close", this.socketCloseHandler),
            this._socket.removeEventListener("error", this.socketErrorHandler),
            this._socket.removeEventListener("message", this.socketMessageDataHandler),
            this._socket.removeEventListener("message", this.socketMessageHandshakeHandler),
            this._socket = null)
        }
        ,
        h.Counter = 5e6,
        h.TRAILING = "/zap/",
        h.CONNECTION_TIMEOUT_LIMIT = 15e3,
        h.HANDSHAKE_TIMEOUT_LIMIT = 15e3,
        h.HANDSHAKE_PROTOCOL = 35,
        h.HANDSHAKE_VERSION = 3,
        h.HANDSHAKE_CONNECTION_TYPE = 80,
        h.HANDSHAKE_CAPABILITIES_FLAG = 1,
        h
    }(ns_gen5_events.EventDispatcher),
    e.WebsocketTransportMethod = o
}(readit || (readit = {})),
function(e) {
    var t = function() {
        function e() {
            this.showUserBalance = !0
        }
        return e.SessionPreferencesGUID = "BalancePreferences",
        e
    }();
    e.BalancePreferences = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = readit.StandardProtocolConstants
      , n = ns_gen5_events.BalanceModelEvent
      , i = ns_gen5_config.PushedConfigPropertyChangeEvent
      , r = ns_gen5_data.PrivateSubscriptionManagerEvent
      , o = ns_gen5_events.EventDispatcher
      , s = e.MathUtil
      , a = ns_gen5_events.Event365
      , c = e.InfoReporter
      , u = "SPTBK"
      , l = function(o) {
        function l() {
            var t = o.call(this) || this;
            return t._subscriptionsInitializedDelegate = null,
            t._pushBalanceReceivedDelegate = null,
            t.balanceModelDelegates = [],
            t._subscriptionsInitializedDelegate = new e.Delegate(t,t.loadBalance),
            t._pushBalanceReceivedDelegate = new e.Delegate(t,t.pushBalanceReceivedHandler),
            t.isItalianDomain = ns_gen5_util_user.RegisteredCountry.IsItalyDomain,
            t
        }
        return __extends(l, o),
        l.prototype.load = function(e) {
            this._sessionToken = e,
            Locator.pushedConfig.getArePropertiesInitialised() ? this.loadBalance() : Locator.pushedConfig.addEventListener(i.PROPERTIES_INITIALISED, this._subscriptionsInitializedDelegate)
        }
        ,
        l.prototype.loadBalance = function() {
            Locator.privateSubscriptionManager.addEventListener(r.BALANCE_RECEIVED, this._pushBalanceReceivedDelegate),
            this.loadPushBalance()
        }
        ,
        l.prototype.refreshBalance = function() {
            if (this._sessionToken) {
                this.loadPushBalance();
                var e = "refresh" + t.RECORD_DELIM + this._sessionToken + t.FIELD_DELIM + u;
                Locator.privateSubscriptionManager.send("command", e)
            }
        }
        ,
        l.prototype.pushBalanceReceivedHandler = function(t) {
            c.Trace(e.InfoReporterGroups.PUSH_MESSAGE_CONNECTION_ENTRY, "Push balance received: " + t.message),
            "D" == t.message.charAt(0) ? this.loadPushBalance() : this.updateBalanceInfo(t.message)
        }
        ,
        l.prototype.loadPushBalance = function() {
            var e = "getBalance" + t.RECORD_DELIM + this._sessionToken + t.FIELD_DELIM + u;
            Locator.privateSubscriptionManager.send("command", e)
        }
        ,
        l.prototype.updateBalanceInfo = function(e) {
            var t = e.split("$")
              , i = t.length;
            i > 1 && t[1].length > 0 ? (this.totalBalance = s.StringToNumber(t[1]).toFixed(2),
            this.withdrableBalance = s.StringToNumber(t[2]).toFixed(2),
            this.bonusBalance = s.StringToNumber(t[3]).toFixed(2),
            this.stakeRollover = s.StringToNumber(t[4]).toFixed(2),
            this.stakeRolloverRequirement = s.StringToNumber(t[5]).toFixed(2),
            this.depositRollover = s.StringToNumber(t[6]).toFixed(2),
            this.depositRolloverRequirement = s.StringToNumber(t[7]).toFixed(2),
            this.italianSportsWithdrableBalance = s.StringToNumber(t[8]).toFixed(2),
            this.italianSportsNonWithdrableBalance = s.StringToNumber(t[9]).toFixed(2),
            this.poisonBalance = !1,
            this.dispatchEvent(new a(n.BALANCEMODEL_UPDATE_EVENT))) : (this.poisonBalance = !0,
            ns_gen5_util_logging.CounterLogger.QueueCounter("balance_fallback", 1),
            ns_gen5_util_logging.CounterLogger.QueueJSON("pb", {
                countryId: Locator.user.countryId,
                isApp: "" + boot.isAppRequest,
                username: Locator.user.username,
                message: e
            }))
        }
        ,
        l.prototype.registerBalanceItem = function(e) {
            this.balanceModelDelegates.push(e)
        }
        ,
        l.prototype.unregisterBalanceItem = function(e) {
            var t = this.balanceModelDelegates.indexOf(e);
            t > -1 && this.balanceModelDelegates.splice(t, 1)
        }
        ,
        l.prototype.updateBalanceItemsVisibility = function(e) {
            var t, n, i, r, o;
            if (e)
                for (t = 0,
                n = this.balanceModelDelegates; t < n.length; t++)
                    i = n[t],
                    i.hideBalanceItem();
            else
                for (r = 0,
                o = this.balanceModelDelegates; r < o.length; r++)
                    i = o[r],
                    i.showBalanceItem()
        }
        ,
        l
    }(o);
    e.BalanceModel = l
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t = ns_gen5_events.Event365
      , n = ns_gen5_util.Delegate
      , i = readit.ReaditClient
      , r = readit.WebsocketTransportMethod
      , o = readit.ReaditConnectionEvent
      , s = readit.ReaditMessageEvent
      , a = e.DataUtil
      , c = e.StreamDataProcessorEvent
      , u = ns_gen5_util.Timer
      , l = ns_gen5_util.TimerEvent
      , d = ns_gen5_events.ApplicationEvent
      , h = ns_gen5_ui.Application
      , p = ns_gen5_util.InfoReporter
      , _ = ns_gen5_util.InfoReporterGroups
      , g = {
        0: null,
        2: null,
        3: r
    }
      , f = 1e4
      , m = 9900
      , E = function(e) {
        function E() {
            var t = e.call(this) || this;
            return t._retryInterval = 0,
            t._connectedPublisher = null,
            t._reconnected = !1,
            t._idleTime = 8e4,
            t._idleTimerID = -1,
            t._reConnectTimer = null,
            t._connectionAttempts = 0,
            t._applicaitonUnloading = !1,
            t.canDebouncePVCN = !0,
            t.storageId = null,
            t._serverConnection = null,
            t._pendingConnect = !1,
            t._initialized = !1,
            t.metricKey = "public",
            t.subscriptionTimeouts = {},
            t._subscriptionQueue = [],
            t._sendQueue = [],
            t.delegate_serverConnectHandler = new n(t,t._serverConnectHandler),
            t.delegate_serverDataHandler = new n(t,t._serverDataHandler),
            t.delegate_applicationUnloadingHandler = new n(t,t._applicationUnloadingHandler),
            t.delegate_connectionFailedInvalidSessionHandler = new n(t,t._connectionFailedInvalidSessionHandler),
            t.callback_idleTimerHandler = function() {
                return t._idleTimerHandler()
            }
            ,
            t
        }
        return __extends(E, e),
        E.InstallTransportMethod = function(e, t) {
            g[e] = t
        }
        ,
        E.prototype.getConnectionDetails = function() {
            return Locator.config.getConnectionDetails()
        }
        ,
        E.prototype.connect = function() {
            var e, t, n, o, s, a, c;
            if (this._initialized || this._initialize(),
            !this._pendingConnect) {
                this.closeConnection(this._serverConnection),
                this._pendingConnect = !0;
                for (e in this.subscriptionTimeouts)
                    this.subscriptionTimeouts[e].stop(),
                    delete this.subscriptionTimeouts[e];
                for (t = this._serverConnection = new i,
                t.storageId = this.storageId,
                t.connectionListCycles = 1,
                n = (this.getCurrentTopics && this.getCurrentTopics() || []).join(","),
                o = 0,
                s = this.getConnectionDetails(); o < s.length; o++)
                    a = s[o],
                    c = a.clone(),
                    c.transportMethod = g[c.transportMethodId] || r,
                    c.defaultTopic += 0 === n.length ? "" : "," + n,
                    t.addConnectionAttempt(c);
                this.openConnection(t)
            }
        }
        ,
        E.prototype.close = function(e) {
            this.closeConnection(this._serverConnection, e)
        }
        ,
        E.prototype.openConnection = function(e) {
            e && (e.addEventListener(o.CONNECTED, this.delegate_serverConnectHandler),
            e.addEventListener(o.DISCONNECTED, this.delegate_serverConnectHandler),
            e.addEventListener(o.CONNECTION_FAILED, this.delegate_serverConnectHandler),
            e.addEventListener(o.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler),
            e.addEventListener(s.MESSAGE_RECEIVED, this.delegate_serverDataHandler),
            e.connect(this.metricKey))
        }
        ,
        E.prototype.closeConnection = function(e, t) {
            if (e) {
                e.hasEventListener(o.CONNECTED) && (e.removeEventListener(o.CONNECTED, this.delegate_serverConnectHandler),
                e.removeEventListener(o.DISCONNECTED, this.delegate_serverConnectHandler),
                e.removeEventListener(o.CONNECTION_FAILED, this.delegate_serverConnectHandler),
                e.removeEventListener(o.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler),
                e.removeEventListener(s.MESSAGE_RECEIVED, this.delegate_serverDataHandler));
                try {
                    e.close(t)
                } catch (n) {}
            }
        }
        ,
        E.prototype.subscribe = function(e) {
            var t, n, i, r;
            if (this._reConnectTimer && this._reConnectTimer.active && (this._reConnectTimer.stop(),
            this.connect()),
            this._serverConnection && this._serverConnection.getConnected()) {
                if (e)
                    if (e.length > m)
                        t = e.indexOf(",", e.length / 2),
                        this.subscribe(e.slice(0, t)),
                        this.subscribe(e.slice(t + 1));
                    else
                        for (this._serverConnection.subscribe(e),
                        n = 0,
                        i = e.split(","); n < i.length; n++)
                            r = i[n],
                            this.addSubscriptionTimeout(r)
            } else
                this._subscriptionQueue.push(e)
        }
        ,
        E.prototype.addSubscriptionTimeout = function(e) {
            var t, n, i = this;
            return e in this.subscriptionTimeouts ? void this.subscriptionTimeouts[e].reset() : (t = new u(f),
            n = e,
            e.lastIndexOf("/") > -1 && (n = e.substring(e.lastIndexOf("/") + 1)),
            t.completeDelegate = function() {
                p.Trace(_.GENERAL_ENTRY, "StreamDataProcessor timed out subscribing to " + n),
                i._subscriptionTimeoutHandler(),
                delete i.subscriptionTimeouts[n]
            }
            ,
            t.start(),
            void (this.subscriptionTimeouts[n] = t))
        }
        ,
        E.prototype.unsubscribe = function(e) {
            var t, n = this._subscriptionQueue;
            n.length && (t = n.indexOf(e)) > -1 && n.splice(t, 1),
            this._serverConnection && this._serverConnection.getConnected() && this._serverConnection.unsubscribe(e)
        }
        ,
        E.prototype.send = function(e, t) {
            this._serverConnection && this._serverConnection.getConnected() ? this._serverConnection.send(e, t) : this._sendQueue.push({
                topic: e,
                message: t
            })
        }
        ,
        E.prototype.swapSubscriptions = function(e, t) {
            var n, i, r;
            if (this._serverConnection.getConnected()) {
                if (this._serverConnection.swapSubscription(e, t),
                e)
                    for (n = 0,
                    i = e.split(","); n < i.length; n++)
                        r = i[n],
                        this.addSubscriptionTimeout(r)
            } else
                this._subscriptionQueue.push(e)
        }
        ,
        E.prototype._initialize = function() {
            h.currentApplication.addEventListener(d.UNLOADING, this.delegate_applicationUnloadingHandler),
            this._initialized = !0
        }
        ,
        E.prototype._resetIdleTimer = function() {
            clearTimeout(this._idleTimerID),
            this._idleTimerID = window.setTimeout(this.callback_idleTimerHandler, this._idleTime)
        }
        ,
        E.prototype._processSubscriptionQueue = function() {
            if (this._subscriptionQueue.length > 0)
                try {
                    this._serverConnection.subscribe(this._subscriptionQueue.join(",")),
                    this._subscriptionQueue.length = 0
                } catch (e) {
                    ErrorReporter.Trace(this, e)
                }
            for (; this._sendQueue.length > 0; )
                this.send(this._sendQueue[0].topic, this._sendQueue.shift().message)
        }
        ,
        E.prototype._connectionFailedInvalidSessionHandler = function() {
            p.Trace(_.PUSH_MESSAGE_CONNECTION_ENTRY, "Failed on invalid session"),
            this.close(),
            this.dispatchEvent(new c(c.CONNECTION_FAILED_INVALID_SESSION))
        }
        ,
        E.prototype._serverConnectHandler = function(e) {
            var t, i, r, o, s, a, d, h, p;
            if (this._pendingConnect = !1,
            this._serverConnection.getConnected()) {
                if (this._retryInterval = 0,
                this._connectedPublisher = this._serverConnection.getConnectionID(),
                this._connectedPublisher = this._connectedPublisher.substring(0, this._connectedPublisher.indexOf("-")),
                t = this._serverConnection.getCurrentConnectionDetails(),
                this.dispatchEvent(new c(c.CONNECTED,t)),
                this._reconnected ? (this._subscriptionQueue.length = 0,
                this.dispatchEvent(new c(c.SERVER_RECONNECT))) : this._reconnected = !0,
                this._resetIdleTimer(),
                this._processSubscriptionQueue(),
                !E.WebsocketConnectionEstablished && 3 === t.transportMethodId) {
                    if (E.WebsocketConnectionEstablished = !0,
                    i = Locator.config.getConnectionDetails())
                        for (r = 0,
                        o = i; r < o.length; r++)
                            s = o[r],
                            3 === s.transportMethodId && Locator.config.setConnectionDetails([s]);
                    for (a = Locator.config.getPrivateConnectionDetails(),
                    d = 0,
                    h = a; d < h.length; d++)
                        s = h[d],
                        3 === s.transportMethodId && Locator.config.setPrivateConnectionDetails([s])
                }
            } else
                this._connectedPublisher = "not connected.",
                this._serverConnection.logPushStatus(readit.pushConnectionStatusEnum.ALLRETRYSFAILED, this._serverConnection.getCurrentConnectionHost()),
                p = void 0,
                this._reconnected ? this.dispatchEvent(new c(c.RECONNECT_FAILED,this._connectionAttempts)) : (p = new c(c.CONNECTION_FAILED,this._connectionAttempts),
                this.dispatchEvent(p),
                p.retry = !0,
                p.retry || (this._subscriptionQueue.length = 0)),
                (this._reconnected || p && p.retry) && (this._applicaitonUnloading || (this._retryInterval = 5e3 + 1e4 * Math.random() | 0,
                this._reConnectTimer ? this._reConnectTimer.time = this._retryInterval : (this._reConnectTimer = new u(this._retryInterval),
                this._reConnectTimer.addEventListener(l.COMPLETE, new n(this,this._reConnectHandler))),
                this._reConnectTimer.reset(),
                this._reConnectTimer.start()),
                this._idleTimerID > -1 && clearTimeout(this._idleTimerID)),
                this._connectionAttempts++
        }
        ,
        E.prototype._applicationUnloadingHandler = function() {
            this._applicaitonUnloading = !0
        }
        ,
        E.prototype._serverDataHandler = function(e) {
            var t = this;
            ns_gen5_util_logging.ReplayLogger.RecordPushDelta({
                message: e.message,
                time: Date.now(),
                type: "public" == this.metricKey ? 1 : 2
            }),
            Locator.validationManager.callLater(function() {
                return t._serverDataHandler_later(e)
            }),
            Number(e.message.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD && this.canDebouncePVCN && (this.canDebouncePVCN = !1,
            window.setTimeout(function() {
                t.canDebouncePVCN = !0,
                Locator.validationManager.processValidationCycleNow()
            }, 1))
        }
        ,
        E.prototype._serverDataHandler_later = function(e) {
            var n, i, r, o, s, u, l, d, h, g, f, m, E, v = this;
            for (this._resetIdleTimer(),
            n = e.message,
            i = n.getMessage(),
            Number(n.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD ? (r = n.getTopic(),
            this.invalidateSubscriptionTimer(r)) : (r = n.getBaseTopic(),
            this._serverConnection && this._serverConnection.logPushStatus(readit.pushConnectionStatusEnum.DELTA, this._serverConnection.getCurrentConnectionHost())),
            o = !!Locator.treeLookup.getReference(r),
            s = Number(n.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD && o,
            u = s ? a.ParseMergeMessage(i, r) : a.ParseMessage(i, r),
            l = u.length,
            d = 0; l > d; d++)
                h = u[d],
                s && (r = h.topic),
                g = void 0,
                h.info && (f = h.info,
                m = f.TI,
                m && Locator.timeManager.setServerTime(m),
                f && r && (E = Locator.treeLookup.getReference(r),
                E && E.dispatchEvent(new c(c.INFO_UPDATED,f))),
                "EMPTY" == r && f.TO && (p.Trace(_.EMPTY_TOPIC_ENTRY, "Empty topic " + f.TO),
                r = f.TO,
                this.invalidateSubscriptionTimer(r),
                g = Locator.treeLookup.getReference(r),
                g && g.remove()),
                this.dispatchEvent(new c(c.INFO_UPDATED,f))),
                a.ProcessStemChanges(h, r, n.getTopic(), s, function(e) {
                    return v.dispatchEvent(new t(e))
                })
        }
        ,
        E.prototype.invalidateSubscriptionTimer = function(e) {
            (e in this.subscriptionTimeouts || (e = e.lastIndexOf("/") > -1 && e.substring(e.lastIndexOf("/") + 1),
            e in this.subscriptionTimeouts)) && (this.subscriptionTimeouts[e].stop(),
            delete this.subscriptionTimeouts[e])
        }
        ,
        E.prototype._idleTimerHandler = function() {
            this._serverConnection.getTransportSuspended() || (this.close(),
            this.connect())
        }
        ,
        E.prototype._reConnectHandler = function() {
            this.connect()
        }
        ,
        E.prototype._subscriptionTimeoutHandler = function() {
            this.closeConnection(this._serverConnection),
            this.connect()
        }
        ,
        E.WebsocketConnectionEstablished = !1,
        E
    }(ns_gen5_events.EventDispatcher);
    e.StreamDataProcessor = E
}(ns_gen5_data || (ns_gen5_data = {})),
function(e) {
    var t = e.StreamDataProcessor
      , n = e.PrivateStreamDataProcessorEvent
      , i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.storageId = "PrivateConnectionDetails",
            t.metricKey = "userdata",
            t
        }
        return __extends(t, e),
        t.prototype.getConnectionDetails = function() {
            return Locator.config.getPrivateConnectionDetails()
        }
        ,
        t.prototype._serverDataHandler_later = function(t) {
            var i = t.message.topic
              , r = i.substr(i.lastIndexOf("_") + 1);
            switch (r) {
            case "BAL":
                this.dispatchEvent(new n(n.BALANCE_RECEIVED,t.message));
                break;
            case "MSG":
                this.dispatchEvent(new n(n.PUSH_MESSAGE_RECEIVED,t.message));
                break;
            default:
                e.prototype._serverDataHandler_later.call(this, t)
            }
        }
        ,
        t
    }(t);
    e.PrivateStreamDataProcessor = i
}(ns_gen5_data || (ns_gen5_data = {})),
Locator = function() {
    function e() {}
    return e.treeLookup = new ns_gen5_data.TreeLookup,
    e.subscriptionManager = function() {
        var e = new ns_gen5_data.SubscriptionManager;
        return e.setStreamDataProcessor(new ns_gen5_data.StreamDataProcessor),
        e.setPullDataProcessor(new ns_gen5_data.PullDataProcessor),
        e
    }(),
    e.privateSubscriptionManager = function() {
        var e = new ns_gen5_data.PrivateSubscriptionManager;
        return e.setStreamDataProcessor(new ns_gen5_data.PrivateStreamDataProcessor),
        e
    }(),
    e.validationManager = new ns_gen5_validation.ValidationManager,
    e.timeManager = new ns_gen5_util.TimeManager,
    e.user = new ns_gen5_data.User,
    e.languageResource = new ns_gen5_language.Resource,
    e.pushedConfig = new ns_gen5_config.PushedConfigManager,
    e.inplayEvents = new ns_gen5_events.EventDispatcher,
    e.participantEvents = new ns_gen5_events.EventDispatcher,
    e.otsReport = new ns_gen5_util.OTSReport,
    e.serverPreferenceManager = new ns_gen5_util.ServerPreferenceManager,
    e.pageRender = new ns_gen5_util.PageRender,
    e.Guid = function() {
        var e, t = "";
        for (e = 0; 32 > e; e++)
            t += Math.floor(16 * Math.random()).toString(16),
            7 !== e && 11 !== e && 15 !== e && 19 !== e || (t += "-");
        return t
    }(),
    e
}(),
function(e) {
    var t = function() {
        function e() {}
        return e.ApplyCurrencyDelimiter = function(e, t) {
            var n, i, r;
            return t ? "s" == t ? t : (n = new RegExp("\\" + ("." === e ? "," : "."),"g"),
            i = t.replace(n, e),
            -1 == i.indexOf(e) ? i += e + "00" : (r = i.indexOf(e),
            r == i.length - 2 ? i += "0" : r == i.length - 1 && (i += "00")),
            i) : ""
        }
        ,
        e.ApplyGroupSeparator = function(t) {
            if (!t)
                return "";
            if (!e.GroupSeparator)
                return t;
            var n = +e.ApplyCurrencyDelimiter(".", t);
            return Math.abs(n) < e.MinSepValue ? t : (e.REMOVE_GROUP_SEPARATOR_REGEX = e.REMOVE_GROUP_SEPARATOR_REGEX || new RegExp("\\" + e.GroupSeparator,"g"),
            t = t.replace(e.REMOVE_GROUP_SEPARATOR_REGEX, ""),
            t = t.replace(e.GROUP_SEPARATOR_REGEX, "$1" + e.GroupSeparator))
        }
        ,
        e.ApplyDelimiterAndGroupSeparator = function(t) {
            var n = e.ApplyCurrencyDelimiter(Locator.user.currencyDecimalSeparator, t);
            return e.ApplyGroupSeparator(n)
        }
        ,
        e.ApplyCurrencySymbol = function(t) {
            var n = e.GetCurrencySymbol(t)
              , i = e.SpaceRequired ? e.WHITE_SPACE : "";
            return e.PrefixSymbol ? n + i + t : t + i + n
        }
        ,
        e.GetFormatRules = function(t) {
            var n, i;
            return void 0 === t && (t = ""),
            n = e.GetCurrencySymbol(t),
            i = e.SpaceRequired ? e.WHITE_SPACE : "",
            t = e.PrefixSymbol ? i + t : t + i,
            {
                formattedValue: t,
                currencySymbol: n,
                prefixSymbol: e.PrefixSymbol,
                spaceRequired: e.SpaceRequired,
                featureAvailable: !0
            }
        }
        ,
        e.ForceCorrectDecimalSeparator = function(e) {
            return e && -1 !== e.indexOf(".") ? e = e.split(".").join(Locator.user.currencyDecimalSeparator) : e
        }
        ,
        e.GetCurrencySymbol = function(t) {
            var n, i, r = e.Symbol;
            return e.PluralSymbol && (n = t,
            e.GroupSeparator && (e.REMOVE_GROUP_SEPARATOR_REGEX = e.REMOVE_GROUP_SEPARATOR_REGEX || new RegExp("\\" + e.GroupSeparator,"g"),
            n = t.replace(e.REMOVE_GROUP_SEPARATOR_REGEX, "")),
            i = +e.ApplyCurrencyDelimiter(".", n),
            1 != i && (r = e.PluralSymbol)),
            r
        }
        ,
        e.UnformatCurrencyValue = function(e) {
            var t, n, i;
            return e ? (n = e.indexOf("-") >= 0,
            i = Locator.user.currencyDecimalSeparator,
            e = e.replace(/[^\d,.]/g, ""),
            e[e.length - 3] === i ? (t = e.substring(e.length - 2),
            e = e.substring(0, e.length - 3)) : e[e.length - 2] === i && (t = e.substring(e.length - 1),
            e = e.substring(0, e.length - 2)),
            e = e.replace(/[,.]/g, ""),
            t && (e += "." + t),
            (n ? "-" : "") + e) : e
        }
        ,
        e.GROUP_SEPARATOR_REGEX = /(-?\d)(?=(\d{3})+(?!\d))/g,
        e.WHITE_SPACE = " ",
        e
    }();
    e.CurrencyFormatter = t
}(ns_gen5_util || (ns_gen5_util = {})),
function(e) {
    var t, n;
    try {
        t = JSON.parse(sessionStorage.getItem("replay") || "{}")
    } catch (i) {}
    n = function() {
        function e() {}
        return e.GetReplayData = function() {
            return this.Replaying ? t : null
        }
        ,
        e.Serialize = function() {
            var e = {
                sportsConfig: this.SportsConfig,
                streamDataProcessor: this.StreamDataProcessor,
                loader: this.Loader,
                pointerProcessor: this.PointerProcessor,
                screenSize: [ns_gen5_ui.Application.currentApplication.width, ns_gen5_ui.Application.currentApplication.height],
                cookie: document.cookie,
                localStorage: this.LocalStorage,
                sessionStorage: this.SessionStorage,
                hash: this.Hash,
                navigations: this.Navigations,
                userAgent: navigator.userAgent,
                mouseMode: this.MouseMode,
                keys: this.Keys,
                version: 1
            };
            return JSON.stringify(e)
        }
        ,
        e.BeginPlayback = function() {
            this.Replaying = !0,
            ns_gen5_net.Loader.prototype.load = function(e, n) {
                var i, r, o, s, a, c, u = this;
                for (void 0 === n && (n = {}),
                this.url = e,
                this.options = n,
                i = e.replace("/legacyproxyapi", ""),
                r = function(e) {
                    return e.URL == i && e.options.data == n.data ? {
                        value: Locator.validationManager.callLater(function() {
                            t && ($log(e),
                            u.onInternalRequestComplete(e.response),
                            t.loader.indexOf(e) > -1 && t.loader.splice(t.loader.indexOf(e), 1))
                        })
                    } : void 0
                }
                ,
                o = 0,
                s = t && t.loader; o < s.length; o++)
                    if (a = s[o],
                    c = r(a),
                    "object" == typeof c)
                        return c.value;
                return Locator.validationManager.callNewContext(function() {
                    return u.load(e, n)
                })
            }
        }
        ,
        e.RecordSportsConfig = function(e) {
            !this.Replaying && this.CanRecord && (this.SportsConfig = e)
        }
        ,
        e.RecordPushDelta = function(e) {
            !this.Replaying && this.CanRecord && this.StreamDataProcessor.push(e)
        }
        ,
        e.PlaybackPushDelta = function(e) {
            var t = new readit.ReaditMessageEvent("replay",e.message);
            1 === e.type ? Locator.subscriptionManager._streamDataProcessor._serverDataHandler(t) : Locator.privateSubscriptionManager._streamDataProcessor._serverDataHandler(t)
        }
        ,
        e.RecordPullRequest = function(e) {
            !this.Replaying && this.CanRecord && this.Loader.push(e)
        }
        ,
        e.RecordInteraction = function(e) {
            !this.Replaying && this.CanRecord && this.PointerProcessor.push(e)
        }
        ,
        e.RecordNavigation = function(e) {
            !this.Replaying && this.CanRecord && this.Navigations.push(e)
        }
        ,
        e.RecordMouseMode = function(e) {
            !this.Replaying && this.CanRecord && (this.MouseMode = e)
        }
        ,
        e.RecordKeyPress = function(e) {
            !this.Replaying && this.CanRecord && this.Keys.push(e)
        }
        ,
        e.Replaying = !1,
        e.CanRecord = !0,
        e.Hash = window.location.hash,
        e.LocalStorage = JSON.stringify(localStorage),
        e.SessionStorage = JSON.stringify(sessionStorage),
        e.SportsConfig = "",
        e.StreamDataProcessor = [],
        e.Loader = [],
        e.PointerProcessor = [],
        e.Navigations = [],
        e.Keys = [],
        e
    }(),
    e.ReplayLogger = n
}(ns_gen5_util_logging || (ns_gen5_util_logging = {})),
cache = cache || {},
function() {
    RegisterCompiledAsset = function(e, t) {
        e = e.toLowerCase(),
        cache[e] = t
    }
    ,
    GetCompiledAsset = function(e) {
        return e = e.toLowerCase(),
        cache[e]
    }
}(),
!function(e) {
    "use strict";
    function t(e, t) {
        function i(e) {
            return this && this.constructor === i ? (this._keys = [],
            this._values = [],
            this._itp = [],
            this.objectOnly = t,
            void (e && n.call(this, e))) : new i(e)
        }
        return e.constructor = i,
        i.prototype = e,
        i
    }
    function n(e) {
        this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
            this.set(e[0], e[1])
        }, this)
    }
    function i(e) {
        var t, n, i;
        if (this.has(e))
            for (this._keys.splice(m, 1),
            this._values.splice(m, 1),
            t = 0,
            n = this._itp.length; n > t; t++)
                i = this._itp[t],
                m < i[0] && i[0]--;
        return m > -1
    }
    function r(e) {
        return this.has(e) ? this._values[m] : void 0
    }
    function o(e, t) {
        if (this.objectOnly && t !== Object(t))
            throw new TypeError("Invalid value used as weak collection key");
        if (t != t || 0 === t)
            for (m = e.length; m-- && !E(e[m], t); )
                ;
        else
            m = e.indexOf(t);
        return m > -1
    }
    function s(e) {
        return o.call(this, this._values, e)
    }
    function a(e) {
        return o.call(this, this._keys, e)
    }
    function c(e, t) {
        return this.has(e) ? this._values[m] = t : this._values[this._keys.push(e) - 1] = t,
        this
    }
    function u(e) {
        return this.has(e) || this._values.push(e),
        this
    }
    function l() {
        (this._keys || 0).length = this._values.length = 0
    }
    function d() {
        return g(this._itp, this._keys)
    }
    function h() {
        return g(this._itp, this._values)
    }
    function p() {
        return g(this._itp, this._keys, this._values)
    }
    function _() {
        return g(this._itp, this._values, this._values)
    }
    function g(e, t, n) {
        var i = [0]
          , r = !1;
        return e.push(i),
        {
            next: function() {
                var o, s = i[0];
                return !r && s < t.length ? (o = n ? [t[s], n[s]] : t[s],
                i[0]++) : (r = !0,
                e.splice(e.indexOf(i), 1)),
                {
                    done: r,
                    value: o
                }
            }
        }
    }
    function f(e, t) {
        var n, i;
        for (n = this.entries(); i = n.next(),
        !i.done; )
            e.call(t, i.value[1], i.value[0], this)
    }
    var m, E = (Object.defineProperty,
    function(e, t) {
        return isNaN(e) ? isNaN(t) : e === t
    }
    );
    "undefined" == typeof WeakMap && (e.WeakMap = t({
        "delete": i,
        clear: l,
        get: r,
        has: a,
        set: c
    }, !0)),
    "undefined" != typeof Map && "function" == typeof (new Map).values && (new Map).values().next || (e.Map = t({
        "delete": i,
        has: a,
        get: r,
        set: c,
        keys: d,
        values: h,
        entries: p,
        forEach: f,
        clear: l
    })),
    "undefined" != typeof Set && "function" == typeof (new Set).values && (new Set).values().next || (e.Set = t({
        has: s,
        add: u,
        "delete": i,
        clear: l,
        keys: h,
        values: h,
        entries: _,
        forEach: f
    })),
    "undefined" == typeof WeakSet && (e.WeakSet = t({
        "delete": i,
        add: u,
        clear: l,
        has: s
    }, !0))
}("undefined" != typeof exports && "undefined" != typeof global ? global : window);
