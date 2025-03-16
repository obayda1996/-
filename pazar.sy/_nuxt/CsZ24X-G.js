import {
    a4 as Y,
    at as L,
    r as M,
    au as Q,
    av as ee,
    l as re,
    aw as te,
    v as ae,
    g as se,
    ax as H,
    ay as oe,
    az as ne,
    y as ie,
    p as ce,
    aA as U,
    R as le,
    aB as ue
} from "./BHlMq76H.js";
const W = Object.freeze({
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
    excludeKeys: void 0,
    excludeValues: void 0,
    replacer: void 0
});

function de(s, i) {
    i ? i = { ...W,
        ...i
    } : i = W;
    const n = q(i);
    return n.dispatch(s), n.toString()
}
const he = Object.freeze(["prototype", "__proto__", "constructor"]);

function q(s) {
    let i = "",
        n = new Map;
    const t = r => {
        i += r
    };
    return {
        toString() {
            return i
        },
        getContext() {
            return n
        },
        dispatch(r) {
            return s.replacer && (r = s.replacer(r)), this[r === null ? "null" : typeof r](r)
        },
        object(r) {
            if (r && typeof r.toJSON == "function") return this.object(r.toJSON());
            const c = Object.prototype.toString.call(r);
            let d = "";
            const E = c.length;
            E < 10 ? d = "unknown:[" + c + "]" : d = c.slice(8, E - 1), d = d.toLowerCase();
            let p = null;
            if ((p = n.get(r)) === void 0) n.set(r, n.size);
            else return this.dispatch("[CIRCULAR:" + p + "]");
            if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(r)) return t("buffer:"), t(r.toString("utf8"));
            if (d !== "object" && d !== "function" && d !== "asyncfunction") this[d] ? this[d](r) : s.ignoreUnknown || this.unkown(r, d);
            else {
                let S = Object.keys(r);
                s.unorderedObjects && (S = S.sort());
                let P = [];
                s.respectType !== !1 && !K(r) && (P = he), s.excludeKeys && (S = S.filter(y => !s.excludeKeys(y)), P = P.filter(y => !s.excludeKeys(y))), t("object:" + (S.length + P.length) + ":");
                const g = y => {
                    this.dispatch(y), t(":"), s.excludeValues || this.dispatch(r[y]), t(",")
                };
                for (const y of S) g(y);
                for (const y of P) g(y)
            }
        },
        array(r, c) {
            if (c = c === void 0 ? s.unorderedArrays !== !1 : c, t("array:" + r.length + ":"), !c || r.length <= 1) {
                for (const p of r) this.dispatch(p);
                return
            }
            const d = new Map,
                E = r.map(p => {
                    const S = q(s);
                    S.dispatch(p);
                    for (const [P, g] of S.getContext()) d.set(P, g);
                    return S.toString()
                });
            return n = d, E.sort(), this.array(E, !1)
        },
        date(r) {
            return t("date:" + r.toJSON())
        },
        symbol(r) {
            return t("symbol:" + r.toString())
        },
        unkown(r, c) {
            if (t(c), !!r && (t(":"), r && typeof r.entries == "function")) return this.array(Array.from(r.entries()), !0)
        },
        error(r) {
            return t("error:" + r.toString())
        },
        boolean(r) {
            return t("bool:" + r)
        },
        string(r) {
            t("string:" + r.length + ":"), t(r)
        },
        function(r) {
            t("fn:"), K(r) ? this.dispatch("[native]") : this.dispatch(r.toString()), s.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(r.name)), s.respectFunctionProperties && this.object(r)
        },
        number(r) {
            return t("number:" + r)
        },
        xml(r) {
            return t("xml:" + r.toString())
        },
        null() {
            return t("Null")
        },
        undefined() {
            return t("Undefined")
        },
        regexp(r) {
            return t("regex:" + r.toString())
        },
        uint8array(r) {
            return t("uint8array:"), this.dispatch(Array.prototype.slice.call(r))
        },
        uint8clampedarray(r) {
            return t("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(r))
        },
        int8array(r) {
            return t("int8array:"), this.dispatch(Array.prototype.slice.call(r))
        },
        uint16array(r) {
            return t("uint16array:"), this.dispatch(Array.prototype.slice.call(r))
        },
        int16array(r) {
            return t("int16array:"), this.dispatch(Array.prototype.slice.call(r))
        },
        uint32array(r) {
            return t("uint32array:"), this.dispatch(Array.prototype.slice.call(r))
        },
        int32array(r) {
            return t("int32array:"), this.dispatch(Array.prototype.slice.call(r))
        },
        float32array(r) {
            return t("float32array:"), this.dispatch(Array.prototype.slice.call(r))
        },
        float64array(r) {
            return t("float64array:"), this.dispatch(Array.prototype.slice.call(r))
        },
        arraybuffer(r) {
            return t("arraybuffer:"), this.dispatch(new Uint8Array(r))
        },
        url(r) {
            return t("url:" + r.toString())
        },
        map(r) {
            t("map:");
            const c = [...r];
            return this.array(c, s.unorderedSets !== !1)
        },
        set(r) {
            t("set:");
            const c = [...r];
            return this.array(c, s.unorderedSets !== !1)
        },
        file(r) {
            return t("file:"), this.dispatch([r.name, r.size, r.type, r.lastModfied])
        },
        blob() {
            if (s.ignoreUnknown) return t("[blob]");
            throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
        },
        domwindow() {
            return t("domwindow")
        },
        bigint(r) {
            return t("bigint:" + r.toString())
        },
        process() {
            return t("process")
        },
        timer() {
            return t("timer")
        },
        pipe() {
            return t("pipe")
        },
        tcp() {
            return t("tcp")
        },
        udp() {
            return t("udp")
        },
        tty() {
            return t("tty")
        },
        statwatcher() {
            return t("statwatcher")
        },
        securecontext() {
            return t("securecontext")
        },
        connection() {
            return t("connection")
        },
        zlib() {
            return t("zlib")
        },
        context() {
            return t("context")
        },
        nodescript() {
            return t("nodescript")
        },
        httpparser() {
            return t("httpparser")
        },
        dataview() {
            return t("dataview")
        },
        signal() {
            return t("signal")
        },
        fsevent() {
            return t("fsevent")
        },
        tlswrap() {
            return t("tlswrap")
        }
    }
}
const J = "[native code] }",
    fe = J.length;

function K(s) {
    return typeof s != "function" ? !1 : Function.prototype.toString.call(s).slice(-fe) === J
}
var ge = Object.defineProperty,
    ye = (s, i, n) => i in s ? ge(s, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : s[i] = n,
    x = (s, i, n) => (ye(s, typeof i != "symbol" ? i + "" : i, n), n);
class T {
    constructor(i, n) {
        x(this, "words"), x(this, "sigBytes"), i = this.words = i || [], this.sigBytes = n === void 0 ? i.length * 4 : n
    }
    toString(i) {
        return (i || pe).stringify(this)
    }
    concat(i) {
        if (this.clamp(), this.sigBytes % 4)
            for (let n = 0; n < i.sigBytes; n++) {
                const t = i.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                this.words[this.sigBytes + n >>> 2] |= t << 24 - (this.sigBytes + n) % 4 * 8
            } else
                for (let n = 0; n < i.sigBytes; n += 4) this.words[this.sigBytes + n >>> 2] = i.words[n >>> 2];
        return this.sigBytes += i.sigBytes, this
    }
    clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4)
    }
    clone() {
        return new T([...this.words])
    }
}
const pe = {
        stringify(s) {
            const i = [];
            for (let n = 0; n < s.sigBytes; n++) {
                const t = s.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                i.push((t >>> 4).toString(16), (t & 15).toString(16))
            }
            return i.join("")
        }
    },
    me = {
        stringify(s) {
            const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                n = [];
            for (let t = 0; t < s.sigBytes; t += 3) {
                const r = s.words[t >>> 2] >>> 24 - t % 4 * 8 & 255,
                    c = s.words[t + 1 >>> 2] >>> 24 - (t + 1) % 4 * 8 & 255,
                    d = s.words[t + 2 >>> 2] >>> 24 - (t + 2) % 4 * 8 & 255,
                    E = r << 16 | c << 8 | d;
                for (let p = 0; p < 4 && t * 8 + p * 6 < s.sigBytes * 8; p++) n.push(i.charAt(E >>> 6 * (3 - p) & 63))
            }
            return n.join("")
        }
    },
    ve = {
        parse(s) {
            const i = s.length,
                n = [];
            for (let t = 0; t < i; t++) n[t >>> 2] |= (s.charCodeAt(t) & 255) << 24 - t % 4 * 8;
            return new T(n, i)
        }
    },
    we = {
        parse(s) {
            return ve.parse(unescape(encodeURIComponent(s)))
        }
    };
class $e {
    constructor() {
        x(this, "_data", new T), x(this, "_nDataBytes", 0), x(this, "_minBufferSize", 0), x(this, "blockSize", 512 / 32)
    }
    reset() {
        this._data = new T, this._nDataBytes = 0
    }
    _append(i) {
        typeof i == "string" && (i = we.parse(i)), this._data.concat(i), this._nDataBytes += i.sigBytes
    }
    _doProcessBlock(i, n) {}
    _process(i) {
        let n, t = this._data.sigBytes / (this.blockSize * 4);
        i ? t = Math.ceil(t) : t = Math.max((t | 0) - this._minBufferSize, 0);
        const r = t * this.blockSize,
            c = Math.min(r * 4, this._data.sigBytes);
        if (r) {
            for (let d = 0; d < r; d += this.blockSize) this._doProcessBlock(this._data.words, d);
            n = this._data.words.splice(0, r), this._data.sigBytes -= c
        }
        return new T(n, c)
    }
}
class Se extends $e {
    update(i) {
        return this._append(i), this._process(), this
    }
    finalize(i) {
        i && this._append(i)
    }
}
var _e = Object.defineProperty,
    be = (s, i, n) => i in s ? _e(s, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : s[i] = n,
    Ee = (s, i, n) => (be(s, i + "", n), n);
const V = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
    Pe = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998],
    R = [];
class Ce extends Se {
    constructor() {
        super(...arguments), Ee(this, "_hash", new T([...V]))
    }
    reset() {
        super.reset(), this._hash = new T([...V])
    }
    _doProcessBlock(i, n) {
        const t = this._hash.words;
        let r = t[0],
            c = t[1],
            d = t[2],
            E = t[3],
            p = t[4],
            S = t[5],
            P = t[6],
            g = t[7];
        for (let y = 0; y < 64; y++) {
            if (y < 16) R[y] = i[n + y] | 0;
            else {
                const m = R[y - 15],
                    B = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3,
                    O = R[y - 2],
                    k = (O << 15 | O >>> 17) ^ (O << 13 | O >>> 19) ^ O >>> 10;
                R[y] = B + R[y - 7] + k + R[y - 16]
            }
            const D = p & S ^ ~p & P,
                A = r & c ^ r & d ^ c & d,
                F = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                _ = (p << 26 | p >>> 6) ^ (p << 21 | p >>> 11) ^ (p << 7 | p >>> 25),
                I = g + _ + D + Pe[y] + R[y],
                C = F + A;
            g = P, P = S, S = p, p = E + I | 0, E = d, d = c, c = r, r = I + C | 0
        }
        t[0] = t[0] + r | 0, t[1] = t[1] + c | 0, t[2] = t[2] + d | 0, t[3] = t[3] + E | 0, t[4] = t[4] + p | 0, t[5] = t[5] + S | 0, t[6] = t[6] + P | 0, t[7] = t[7] + g | 0
    }
    finalize(i) {
        super.finalize(i);
        const n = this._nDataBytes * 8,
            t = this._data.sigBytes * 8;
        return this._data.words[t >>> 5] |= 128 << 24 - t % 32, this._data.words[(t + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), this._data.words[(t + 64 >>> 9 << 4) + 15] = n, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash
    }
}

function Oe(s) {
    return new Ce().finalize(s).toString(me)
}

function Ie(s, i = {}) {
    const n = typeof s == "string" ? s : de(s, i);
    return Oe(n).slice(0, 10)
}
const u = "https://pazar.sy/api",
    $ = {
        LOGIN: "/auth/login",
        REGISTER: "/user",
        PROFILE: "/auth/profile",
        UPDATE_PROFILE: "/user",
        FOLLOWERS: "/user/profile/followers",
        FOLLOWING: "/user/profile/followings",
        FOLLOW: "/user",
        UNFOLLOW: "/user",
        AD: "/advertisement",
        USER_ADS: "/advertisement/my/ads",
        TOGGLE_AD: "/advertisement/toggle",
        CATEGORIES: "/category/all",
        CATEGORY: "/category",
        SUBCATEGORIES: "/subCategory",
        CITIES: "/cities",
        REGIONS: "/regions",
        CHAT: "/chat",
        VERIFICATION: "/verification",
        SLIDES: "/landing/banners/list"
    },
    v = () => {
        {
            const s = localStorage.getItem("session-token");
            return {
                Authorization: s ? `Bearer ${s}` : ""
            }
        }
    },
    De = s => s === "defer" || s === !1;

function Be(...s) {
    var F;
    const i = typeof s[s.length - 1] == "string" ? s.pop() : void 0;
    typeof s[0] != "string" && s.unshift(i);
    let [n, t, r = {}] = s;
    if (typeof n != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof t != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    const c = Y(),
        d = t,
        E = () => L.value,
        p = () => c.isHydrating ? c.payload.data[n] : c.static.data[n];
    r.server = r.server ? ? !0, r.default = r.default ? ? E, r.getCachedData = r.getCachedData ? ? p, r.lazy = r.lazy ? ? !1, r.immediate = r.immediate ? ? !0, r.deep = r.deep ? ? L.deep, r.dedupe = r.dedupe ? ? "cancel";
    const S = r.getCachedData(n, c),
        P = S != null;
    if (!c._asyncData[n] || !r.immediate) {
        (F = c.payload._errors)[n] ? ? (F[n] = L.errorValue);
        const _ = r.deep ? M : Q;
        c._asyncData[n] = {
            data: _(P ? S : r.default()),
            pending: M(!P),
            error: ee(c.payload._errors, n),
            status: M("idle"),
            _default: r.default
        }
    }
    const g = { ...c._asyncData[n]
    };
    delete g._default, g.refresh = g.execute = (_ = {}) => {
        if (c._asyncDataPromises[n]) {
            if (De(_.dedupe ? ? r.dedupe)) return c._asyncDataPromises[n];
            c._asyncDataPromises[n].cancelled = !0
        }
        if (_._initial || c.isHydrating && _._initial !== !1) {
            const C = _._initial ? S : r.getCachedData(n, c);
            if (C != null) return Promise.resolve(C)
        }
        g.pending.value = !0, g.status.value = "pending";
        const I = new Promise((C, m) => {
            try {
                C(d(c))
            } catch (B) {
                m(B)
            }
        }).then(async C => {
            if (I.cancelled) return c._asyncDataPromises[n];
            let m = C;
            r.transform && (m = await r.transform(C)), r.pick && (m = Ae(m, r.pick)), c.payload.data[n] = m, g.data.value = m, g.error.value = L.errorValue, g.status.value = "success"
        }).catch(C => {
            if (I.cancelled) return c._asyncDataPromises[n];
            g.error.value = ne(C), g.data.value = ie(r.default()), g.status.value = "error"
        }).finally(() => {
            I.cancelled || (g.pending.value = !1, delete c._asyncDataPromises[n])
        });
        return c._asyncDataPromises[n] = I, c._asyncDataPromises[n]
    }, g.clear = () => Te(c, n);
    const y = () => g.refresh({
            _initial: !0
        }),
        D = r.server !== !1 && c.payload.serverRendered; {
        const _ = re();
        if (_ && D && r.immediate && !_.sp && (_.sp = []), _ && !_._nuxtOnBeforeMountCbs) {
            _._nuxtOnBeforeMountCbs = [];
            const m = _._nuxtOnBeforeMountCbs;
            te(() => {
                m.forEach(B => {
                    B()
                }), m.splice(0, m.length)
            }), ae(() => m.splice(0, m.length))
        }
        D && c.isHydrating && (g.error.value || S != null) ? (g.pending.value = !1, g.status.value = g.error.value ? "error" : "success") : _ && (c.payload.serverRendered && c.isHydrating || r.lazy) && r.immediate ? _._nuxtOnBeforeMountCbs.push(y) : r.immediate && y();
        const I = oe();
        if (r.watch) {
            const m = se(r.watch, () => g.refresh());
            I && H(m)
        }
        const C = c.hook("app:data:refresh", async m => {
            (!m || m.includes(n)) && await g.refresh()
        });
        I && H(C)
    }
    const A = Promise.resolve(c._asyncDataPromises[n]).then(() => g);
    return Object.assign(A, g), A
}

function Te(s, i) {
    i in s.payload.data && (s.payload.data[i] = void 0), i in s.payload._errors && (s.payload._errors[i] = L.errorValue), s._asyncData[i] && (s._asyncData[i].data.value = void 0, s._asyncData[i].error.value = L.errorValue, s._asyncData[i].pending.value = !1, s._asyncData[i].status.value = "idle"), i in s._asyncDataPromises && (s._asyncDataPromises[i] && (s._asyncDataPromises[i].cancelled = !0), s._asyncDataPromises[i] = void 0)
}

function Ae(s, i) {
    const n = {};
    for (const t of i) n[t] = s[t];
    return n
}

function f(s, i, n) {
    const [t = {}, r] = typeof i == "string" ? [{}, i] : [i, n], c = ce(() => U(s)), d = t.key || Ie([r, typeof c.value == "string" ? c.value : "", ...Fe(t)]);
    if (!d || typeof d != "string") throw new TypeError("[nuxt] [useFetch] key must be a string: " + d);
    if (!s) throw new Error("[nuxt] [useFetch] request is missing.");
    const E = d === r ? "$f" + d : d;
    if (!t.baseURL && typeof c.value == "string" && c.value[0] === "/" && c.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const {
        server: p,
        lazy: S,
        default: P,
        transform: g,
        pick: y,
        watch: D,
        immediate: A,
        getCachedData: F,
        deep: _,
        dedupe: I,
        ...C
    } = t, m = le({ ...ue,
        ...C,
        cache: typeof t.cache == "boolean" ? void 0 : t.cache
    }), B = {
        server: p,
        lazy: S,
        default: P,
        transform: g,
        pick: y,
        immediate: A,
        getCachedData: F,
        deep: _,
        dedupe: I,
        watch: D === !1 ? [] : [m, c, ...D || []]
    };
    let O;
    return Be(E, () => {
        var j;
        (j = O == null ? void 0 : O.abort) == null || j.call(O, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError")), O = typeof AbortController < "u" ? new AbortController : {};
        const N = U(t.timeout);
        let z;
        return N && (z = setTimeout(() => O.abort(new DOMException("Request aborted due to timeout.", "AbortError")), N), O.signal.onabort = () => clearTimeout(z)), (t.$fetch || globalThis.$fetch)(c.value, {
            signal: O.signal,
            ...m
        }).finally(() => {
            clearTimeout(z)
        })
    }, B)
}

function Fe(s) {
    var n;
    const i = [((n = U(s.method)) == null ? void 0 : n.toUpperCase()) || "GET", U(s.baseURL)];
    for (const t of [s.params || s.query]) {
        const r = U(t);
        if (!r) continue;
        const c = {};
        for (const [d, E] of Object.entries(r)) c[U(d)] = U(E);
        i.push(c)
    }
    return i
}
const Je = () => {
    const s = M(!1);
    return {
        isLoggedIn: s,
        login: async a => {
            var e, o, l;
            try {
                const {
                    data: h,
                    error: w
                } = await f(`${u}${$.LOGIN}`, {
                    method: "POST",
                    body: a,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }, "$LfouuFwMEP");
                if (w.value) {
                    const b = ((o = (e = w.value) == null ? void 0 : e.data) == null ? void 0 : o.message) || "Login failed";
                    return console.error("Login error:", b), {
                        data: null,
                        error: w.value,
                        message: b
                    }
                }
                return (l = h.value) != null && l.token && (localStorage.setItem("session-token", h.value.token), localStorage.setItem("userId", h.value.id), s.value = !0), {
                    data: h.value,
                    error: null,
                    message: h.value.message
                }
            } catch (h) {
                return console.error("Login error:", h), {
                    data: null,
                    error: h,
                    message: "An unexpected error occurred"
                }
            }
        },
        register: async a => {
            var e, o, l;
            try {
                const {
                    data: h,
                    error: w
                } = await f(`${u}${$.REGISTER}`, {
                    method: "POST",
                    body: a
                }, "$mTUJx6sBsg");
                return w.value ? {
                    success: !1,
                    error: !0,
                    message: ((o = (e = w.value) == null ? void 0 : e.data) == null ? void 0 : o.message) || "فشل التسجيل"
                } : {
                    success: !0,
                    error: !1,
                    message: ((l = h.value) == null ? void 0 : l.message) || "تم التسجيل بنجاح",
                    data: h.value
                }
            } catch (h) {
                return console.error("Register error:", h), {
                    success: !1,
                    error: !0,
                    message: "حدث خطأ أثناء التسجيل"
                }
            }
        },
        logout: () => {
            localStorage.removeItem("session-token"), localStorage.clear(), s.value = !1
        },
        checkAuthStatus: () => {
            const a = localStorage.getItem("session-token");
            return s.value = !!a, s.value
        },
        getProfile: async () => {
            try {
                const a = await $fetch(`${u}${$.PROFILE}`, {
                    headers: v()
                });
                return localStorage.getItem("userId") || localStorage.setItem("userId", a.user._id), {
                    data: a,
                    error: null
                }
            } catch (a) {
                return console.error("Error fetching profile:", a), {
                    data: null,
                    error: a
                }
            }
        },
        getFollowers: async () => {
            try {
                const {
                    data: a,
                    error: e
                } = await f(`${u}${$.FOLLOWERS}`, {
                    headers: v()
                }, "$3mZIUGzykU");
                if (e.value) throw e.value;
                return {
                    data: a.value,
                    error: null
                }
            } catch (a) {
                return console.error("Error fetching followers:", a), {
                    data: null,
                    error: a
                }
            }
        },
        getFollowing: async () => {
            try {
                const {
                    data: a,
                    error: e
                } = await f(`${u}${$.FOLLOWING}`, {
                    headers: v()
                }, "$lwCxIaVuST");
                if (e.value) throw e.value;
                return {
                    data: a.value,
                    error: null
                }
            } catch (a) {
                return console.error("Error fetching following:", a), {
                    data: null,
                    error: a
                }
            }
        },
        followUser: async a => {
            try {
                const {
                    error: e
                } = await f(`${u}${$.FOLLOW}/${a}/follow`, {
                    method: "POST",
                    headers: v()
                }, "$9vW3M5lxWf");
                if (e.value) throw e.value;
                return {
                    error: null
                }
            } catch (e) {
                return console.error("Error following user:", e), {
                    error: e
                }
            }
        },
        unfollowUser: async a => {
            try {
                const {
                    error: e
                } = await f(`${u}${$.UNFOLLOW}/${a}/unfollow`, {
                    method: "POST",
                    headers: v()
                }, "$cSpRD9T4Uy");
                if (e.value) throw e.value;
                return {
                    error: null
                }
            } catch (e) {
                return console.error("Error unfollowing user:", e), {
                    error: e
                }
            }
        },
        updateIdentity: async a => {
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}${$.VERIFICATION}/verify-request`, {
                    method: "POST",
                    body: a,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("session-token")}`
                    }
                }, "$7jQxbRztjq");
                if (o.value) throw o.value;
                return {
                    data: e.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error updating identity:", e), {
                    data: null,
                    error: e
                }
            }
        },
        updateProfile: async a => {
            try {
                const e = a.get("id"),
                    o = new FormData;
                for (const [w, b] of a.entries()) b != null && b !== "" && o.append(w, b);
                const {
                    data: l,
                    error: h
                } = await f(`${u}${$.UPDATE_PROFILE}/${e}/update`, {
                    method: "PATCH",
                    body: o,
                    headers: { ...v()
                    }
                }, "$NXNznSXlro");
                if (h.value) throw h.value;
                return {
                    data: l.value,
                    error: null,
                    message: "تم تحديث الملف الشخصي بنجاح"
                }
            } catch (e) {
                return console.error("Error updating profile:", e), {
                    data: null,
                    error: e,
                    message: "حدث خطأ أثناء تحديث الملف الشخصي"
                }
            }
        },
        fetchUserAds: async () => {
            var a;
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}${$.USER_ADS}`, {
                    headers: v()
                }, "$9TJeVJLAdS");
                if (o.value) throw o.value;
                return {
                    data: ((a = e._value) == null ? void 0 : a.data) || [],
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching user ads:", e), {
                    data: [],
                    error: e
                }
            }
        },
        createAd: async a => {
            try {
                const e = new FormData;
                e.append("priceCurrency", a.priceCurrency || "SYP");
                for (const [h, w] of Object.entries(a)) w != null && w !== "" && e.append(h, w);
                const {
                    data: o,
                    error: l
                } = await f(`${u}${$.AD}`, {
                    method: "POST",
                    body: a,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("session-token")}`
                    }
                }, "$X9f1VKKRSj");
                if (l.value) throw l.value;
                return {
                    data: o.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error creating ad:", e), {
                    data: null,
                    error: e
                }
            }
        },
        updateAd: async (a, e) => {
            try {
                const {
                    data: o,
                    error: l
                } = await f(`${u}${$.AD}/${a}`, {
                    method: "PATCH",
                    body: e,
                    headers: v()
                }, "$oBcF1rAc9n");
                if (l.value) throw l.value;
                return {
                    data: o.value,
                    error: null
                }
            } catch (o) {
                return console.error("Error updating ad:", o), {
                    data: null,
                    error: o
                }
            }
        },
        deleteAd: async a => {
            try {
                const {
                    error: e
                } = await f(`${u}${$.AD}/${a}`, {
                    method: "DELETE",
                    headers: v()
                }, "$OCzsRgfj1u");
                if (e.value) throw e.value;
                return {
                    error: null
                }
            } catch (e) {
                return console.error("Error deleting ad:", e), {
                    error: e
                }
            }
        },
        toggleAdStatus: async a => {
            try {
                const {
                    error: e
                } = await f(`${u}${$.TOGGLE_AD}/${a}`, {
                    method: "PUT",
                    headers: v()
                }, "$4jvXC6ypnE");
                if (e.value) throw e.value;
                return {
                    error: null
                }
            } catch (e) {
                return console.error("Error toggling ad status:", e), {
                    error: e
                }
            }
        },
        getProducts: async () => {
            var a;
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}${$.PRODUCTS}`, {
                    headers: v()
                }, "$e45itvbsrO");
                if (o.value) throw o.value;
                return {
                    data: ((a = e.value) == null ? void 0 : a.products) || [],
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching products:", e), {
                    data: [],
                    error: e
                }
            }
        },
        getAdById: async a => {
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}${$.AD}/${a}`, {
                    headers: v()
                }, "$a5MQ9unhzk");
                if (console.log(e), o.value) throw o.value;
                return {
                    data: e.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching ad:", e), {
                    data: null,
                    error: e
                }
            }
        },
        getCategories: async () => {
            var a;
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}${$.CATEGORIES}`, "$vxKpXFa5XZ");
                if (o.value) throw o.value;
                return {
                    data: ((a = e.value) == null ? void 0 : a.categories) || [],
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching categories:", e), {
                    data: [],
                    error: e
                }
            }
        },
        getCategoryById: async a => {
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}${$.CATEGORY}/${a}`, {
                    headers: v()
                }, "$vM3S8iGpo5");
                if (o.value) throw o.value;
                return {
                    data: e.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching category:", e), {
                    data: null,
                    error: e
                }
            }
        },
        getSubCategoryById: async a => {
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}${$.SUBCATEGORIES}/${a}`, {
                    headers: v()
                }, "$TaRpU16WZj");
                if (o.value) throw o.value;
                return {
                    data: e.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching subcategory:", e), {
                    data: null,
                    error: e
                }
            }
        },
        getSubCategories: async a => {
            var e;
            try {
                const {
                    data: o,
                    error: l
                } = await f(`${u}${$.SUBCATEGORIES}/${a}/subcategories`, {
                    headers: v()
                }, "$wiMNkCu4M3");
                if (l.value) throw l.value;
                return {
                    data: ((e = o.value) == null ? void 0 : e.subCategories) || [],
                    error: null
                }
            } catch (o) {
                return console.error("Error fetching subcategories:", o), {
                    data: [],
                    error: o
                }
            }
        },
        getCities: async () => {
            var a;
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}${$.CITIES}`, "$MSIzbjmpOS");
                if (o.value) throw o.value;
                return {
                    data: ((a = e.value) == null ? void 0 : a.cities) || [],
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching cities:", e), {
                    data: [],
                    error: e
                }
            }
        },
        getRegions: async a => {
            var e;
            try {
                const {
                    data: o,
                    error: l
                } = await f(`${u}${$.REGIONS}/${a}/regions`, "$IhzRAdX2Lz");
                if (l.value) throw l.value;
                return {
                    data: ((e = o.value) == null ? void 0 : e.regions) || [],
                    error: null
                }
            } catch (o) {
                return console.error("Error fetching regions:", o), {
                    data: [],
                    error: o
                }
            }
        },
        createChatRoom: async a => {
            var e;
            try {
                return {
                    data: await $fetch(`${u}${$.CHAT}`, {
                        method: "POST",
                        body: a,
                        headers: { ...v(),
                            "Content-Type": "application/json"
                        }
                    }),
                    error: null
                }
            } catch (o) {
                return ((e = o.response) == null ? void 0 : e.status) === 400 ? {
                    data: null,
                    error: {
                        message: "A chat with these users already exists."
                    }
                } : (console.error("Create chat room error:", o), {
                    data: null,
                    error: o
                })
            }
        },
        getUserChats: async () => {
            try {
                const {
                    data: a,
                    error: e
                } = await f(`${u}${$.CHAT}`, {
                    headers: v()
                }, "$JgBdvnVm9C");
                if (e.value) throw e.value;
                return {
                    data: a.value,
                    error: null
                }
            } catch (a) {
                return console.error("Error fetching user chats:", a), {
                    data: null,
                    error: a
                }
            }
        },
        getChatMessages: async a => {
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}/chat/messages/${a}`, {
                    headers: v()
                }, "$lItxfgCHkl");
                if (o.value) throw o.value;
                return {
                    data: e.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching chat messages:", e), {
                    data: null,
                    error: e
                }
            }
        },
        sendMessage: async (a, e) => {
            try {
                const {
                    data: o,
                    error: l
                } = await f(`${u}/chat/messages`, {
                    method: "POST",
                    body: JSON.stringify({
                        chatId: a,
                        content: e,
                        sender: localStorage.getItem("userId")
                    }),
                    headers: { ...v(),
                        "Content-Type": "application/json"
                    }
                }, "$kjpEjgq73u");
                if (l.value) throw console.error("Send Message Error:", l.value), l.value;
                return {
                    data: o.value,
                    error: null
                }
            } catch (o) {
                return console.error("Error sending message:", o), {
                    data: null,
                    error: o
                }
            }
        },
        getUserById: async a => {
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}/user/${a}`, {
                    headers: v()
                }, "$rktfcZKcVN");
                if (o.value) throw o.value;
                return {
                    data: e.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error fetching user:", e), {
                    data: null,
                    error: e
                }
            }
        },
        getUserProfile: async a => {
            var e;
            try {
                const {
                    data: o,
                    error: l
                } = await f(`${u}/user/${a}`, {
                    headers: v()
                }, "$ojwrh1ne23");
                if (l.value) throw l.value;
                return {
                    data: { ...o.value,
                        advertisements: ((e = o.value) == null ? void 0 : e.advertisements) || []
                    },
                    error: null
                }
            } catch (o) {
                return console.error("Error fetching user profile:", o), {
                    data: null,
                    error: o
                }
            }
        },
        reportUser: async a => {
            try {
                const e = new FormData;
                e.append("reportedUser", a.reportedUser), e.append("reason", a.reason), a.attachment && e.append("attachment", a.attachment);
                const {
                    data: o,
                    error: l
                } = await f(`${u}/reports/create`, {
                    method: "POST",
                    body: e,
                    headers: v()
                }, "$hJCj0WPMzo");
                if (l.value) throw l.value;
                return {
                    data: o.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error reporting user:", e), {
                    data: null,
                    error: e
                }
            }
        },
        getSlides: async () => {
            try {
                return {
                    data: (await $fetch(`${u}${$.SLIDES}`, {
                        headers: v()
                    })).banners || []
                }
            } catch (a) {
                return console.error("Error fetching slides:", a), {
                    data: [],
                    error: a
                }
            }
        },
        addToFavorites: async a => {
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}/advertisement/${a}/addToFavorites`, {
                    method: "POST",
                    headers: v()
                }, "$vXCRFlGeFW");
                if (o.value) throw o.value;
                return {
                    data: e.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error adding to favorites:", e), {
                    data: null,
                    error: e
                }
            }
        },
        removeFromFavorites: async a => {
            try {
                const {
                    data: e,
                    error: o
                } = await f(`${u}/advertisement/${a}/removeFromFavorites`, {
                    method: "POST",
                    headers: v()
                }, "$valp4uvU61");
                if (o.value) throw o.value;
                return {
                    data: e.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error removing from favorites:", e), {
                    data: null,
                    error: e
                }
            }
        },
        getFavoriteAds: async (a = 1) => {
            var e, o, l, h, w;
            try {
                const {
                    data: b,
                    error: G
                } = await f(`${u}/advertisement/my/favAds?page=${a}&limit=10`, {
                    headers: v()
                }, "$AtXzacQYFP");
                if (G.value) throw G.value;
                const Z = {
                    currentPage: ((e = b.value) == null ? void 0 : e.currentPage) || 1,
                    totalPages: ((o = b.value) == null ? void 0 : o.totalPages) || 1,
                    totalItems: ((l = b.value) == null ? void 0 : l.totalItems) || 0,
                    perPage: ((h = b.value) == null ? void 0 : h.perPage) || 10
                };
                return {
                    data: ((w = b.value) == null ? void 0 : w.data) || [],
                    pagination: Z,
                    error: null
                }
            } catch (b) {
                return console.error("Error fetching favorite ads:", b), {
                    data: [],
                    pagination: null,
                    error: b
                }
            }
        },
        forgetPassword: async a => {
            var e, o, l;
            try {
                const {
                    data: h,
                    error: w
                } = await f(`${u}/auth/password/forget`, {
                    method: "POST",
                    body: {
                        email: a.email
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }, "$US5ZtdZgz4");
                return w.value ? {
                    error: !0,
                    message: ((o = (e = w.value) == null ? void 0 : e.data) == null ? void 0 : o.message) || "حدث خطأ"
                } : {
                    error: !1,
                    message: ((l = h.value) == null ? void 0 : l.message) || "تم إرسال رمز التحقق إلى بريدك الإلكتروني"
                }
            } catch (h) {
                return console.error("Forget password error:", h), {
                    error: !0,
                    message: "حدث خطأ غير متوقع"
                }
            }
        },
        verifyForgetPasswordCode: async a => {
            var e, o;
            try {
                const {
                    data: l,
                    error: h
                } = await f(`${u}/auth/password/reset/${a.code}`, {
                    method: "POST",
                    body: {
                        email: a.email
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }, "$8u8eBSsxFs");
                return h.value ? {
                    error: !0,
                    message: ((o = (e = h.value) == null ? void 0 : e.data) == null ? void 0 : o.message) || "رمز التحقق غير صحيح"
                } : {
                    error: !1,
                    message: "تم التحقق من الرمز بنجاح"
                }
            } catch (l) {
                return console.error("Verify code error:", l), {
                    error: !0,
                    message: "حدث خطأ غير متوقع"
                }
            }
        },
        resetPassword: async a => {
            var e, o, l;
            try {
                if (!a.password || !a.confirmPassword) return {
                    error: !0,
                    message: "الرجاء إدخال كلمة المرور وتأكيدها"
                };
                const {
                    data: h,
                    error: w
                } = await f(`${u}/auth/password/reset/${a.code}`, {
                    method: "POST",
                    body: {
                        email: a.email,
                        password: a.password,
                        confirmPassword: a.confirmPassword
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }, "$ih2c8DLdRb");
                return w.value ? {
                    error: !0,
                    message: (o = (e = w.value) == null ? void 0 : e.data) == null ? void 0 : o.message
                } : {
                    error: !1,
                    message: ((l = h.value) == null ? void 0 : l.message) || "تم تغيير كلمة المرور بنجاح"
                }
            } catch (h) {
                return console.error("Reset password error:", h), {
                    error: !0,
                    message: "حدث خطأ غير متوقع"
                }
            }
        },
        updateSettings: async a => {
            try {
                const e = localStorage.getItem("userId"),
                    {
                        data: o,
                        error: l
                    } = await f(`${u}/user/${e}/update`, {
                        method: "PATCH",
                        body: a,
                        headers: { ...v(),
                            "Content-Type": "application/json"
                        }
                    }, "$bWEK9iS97W");
                if (l.value) throw l.value;
                return {
                    data: o.value,
                    error: null
                }
            } catch (e) {
                return console.error("Error updating settings:", e), {
                    data: null,
                    error: e
                }
            }
        },
        changePhoneNumber: async a => {
            var e, o, l;
            try {
                const {
                    data: h,
                    error: w
                } = await f(`${u}/phone-change/request-phone-change`, {
                    method: "POST",
                    body: {
                        newPhone: a
                    },
                    headers: { ...v(),
                        "Content-Type": "application/json"
                    }
                }, "$9ql4OzVo8N");
                return w.value ? {
                    success: !1,
                    error: !0,
                    message: ((o = (e = w.value) == null ? void 0 : e.data) == null ? void 0 : o.message) || "فشل تغيير رقم الهاتف"
                } : {
                    success: !0,
                    error: !1,
                    message: ((l = h.value) == null ? void 0 : l.message) || "تم تغيير رقم الهاتف بنجاح"
                }
            } catch (h) {
                return console.error("Change phone error:", h), {
                    success: !1,
                    error: !0,
                    message: "حدث خطأ أثناء تغيير رقم الهاتف"
                }
            }
        }
    }
};
export {
    u as A, f as a, v as g, Je as u
};