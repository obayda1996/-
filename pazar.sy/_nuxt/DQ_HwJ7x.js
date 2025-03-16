import {
    Y as ye,
    Z as Oe,
    $ as ue,
    a0 as re,
    a1 as We,
    a2 as de,
    a3 as Be,
    a4 as _e,
    a5 as Re,
    p as z,
    m as ee,
    a6 as Te,
    r as _,
    q as te,
    c as d,
    a7 as xe,
    o as c,
    a8 as ge,
    y as O,
    a9 as De,
    _ as ae,
    h as He,
    a,
    F as L,
    z as V,
    A as B,
    b as E,
    aa as Ge,
    g as Z,
    x as N,
    t as U,
    J as Je,
    H as Ze,
    I as Q,
    w as H,
    C as K,
    D as Xe,
    G as ve,
    ab as Ye,
    s as Qe
} from "./BHlMq76H.js";
import {
    H as Ke,
    G as et,
    c as pe
} from "./BD3unM2F.js";
import {
    u as tt,
    a as st
} from "./CsZ24X-G.js";
import be from "./ydZ9caxh.js";
import {
    P as rt
} from "./Dz4hH2vA.js";
import {
    G as at
} from "./Vgb0sn5F.js";
import "./BZ64PvPr.js";
import "./VZ3oj85K.js";
import "./BN_hgBW2.js";
import "./jvb20aaj.js";
import "./DfkNV9S4.js";
async function ot(e, t) {
    return await lt(t).catch(s => (console.error("Failed to get image meta for " + t, s + ""), {
        width: 0,
        height: 0,
        ratio: 0
    }))
}
async function lt(e) {
    if (typeof Image > "u") throw new TypeError("Image not supported");
    return new Promise((t, r) => {
        const s = new Image;
        s.onload = () => {
            const l = {
                width: s.width,
                height: s.height,
                ratio: s.width / s.height
            };
            t(l)
        }, s.onerror = l => r(l), s.src = e
    })
}

function fe(e) {
    return t => t ? e[t] || t : e.missingValue
}

function nt({
    formatter: e,
    keyMap: t,
    joinWith: r = "/",
    valueMap: s
} = {}) {
    e || (e = (g, p) => `${g}=${p}`), t && typeof t != "function" && (t = fe(t));
    const l = s || {};
    return Object.keys(l).forEach(g => {
        typeof l[g] != "function" && (l[g] = fe(l[g]))
    }), (g = {}) => Object.entries(g).filter(([f, h]) => typeof h < "u").map(([f, h]) => {
        const x = l[f];
        return typeof x == "function" && (h = x(g[f])), f = typeof t == "function" ? t(f) : f, e(f, h)
    }).join(r)
}

function R(e = "") {
    if (typeof e == "number") return e;
    if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g)) return Number.parseInt(e, 10)
}

function it(e = "") {
    if (e === void 0 || !e.length) return [];
    const t = new Set;
    for (const r of e.split(" ")) {
        const s = Number.parseInt(r.replace("x", ""));
        s && t.add(s)
    }
    return Array.from(t)
}

function ct(e) {
    if (e.length === 0) throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")
}

function ut(e) {
    const t = {};
    if (typeof e == "string")
        for (const r of e.split(/[\s,]+/).filter(s => s)) {
            const s = r.split(":");
            s.length !== 2 ? t["1px"] = s[0].trim() : t[s[0].trim()] = s[1].trim()
        } else Object.assign(t, e);
    return t
}

function dt(e) {
    const t = {
            options: e
        },
        r = (l, g = {}) => we(t, l, g),
        s = (l, g = {}, p = {}) => r(l, { ...p,
            modifiers: ye(g, p.modifiers || {})
        }).url;
    for (const l in e.presets) s[l] = (g, p, f) => s(g, p, { ...e.presets[l],
        ...f
    });
    return s.options = e, s.getImage = r, s.getMeta = (l, g) => gt(t, l, g), s.getSizes = (l, g) => ft(t, l, g), t.$img = s, s
}
async function gt(e, t, r) {
    const s = we(e, t, { ...r
    });
    return typeof s.getMeta == "function" ? await s.getMeta() : await ot(e, s.url)
}

function we(e, t, r) {
    var x, v;
    if (t && typeof t != "string") throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
    if (!t || t.startsWith("data:")) return {
        url: t
    };
    const {
        provider: s,
        defaults: l
    } = vt(e, r.provider || e.options.provider), g = pt(e, r.preset);
    if (t = ue(t) ? t : Oe(t), !s.supportsAlias) {
        for (const w in e.options.alias)
            if (t.startsWith(w)) {
                const b = e.options.alias[w];
                b && (t = re(b, t.slice(w.length)))
            }
    }
    if (s.validateDomains && ue(t)) {
        const w = We(t).host;
        if (!e.options.domains.find(b => b === w)) return {
            url: t
        }
    }
    const p = ye(r, g, l);
    p.modifiers = { ...p.modifiers
    };
    const f = p.modifiers.format;
    (x = p.modifiers) != null && x.width && (p.modifiers.width = R(p.modifiers.width)), (v = p.modifiers) != null && v.height && (p.modifiers.height = R(p.modifiers.height));
    const h = s.getImage(t, p, e);
    return h.format = h.format || f || "", h
}

function vt(e, t) {
    const r = e.options.providers[t];
    if (!r) throw new Error("Unknown provider: " + t);
    return r
}

function pt(e, t) {
    if (!t) return {};
    if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
    return e.options.presets[t]
}

function ft(e, t, r) {
    var $, A, j, u, C;
    const s = R(($ = r.modifiers) == null ? void 0 : $.width),
        l = R((A = r.modifiers) == null ? void 0 : A.height),
        g = ut(r.sizes),
        p = (j = r.densities) != null && j.trim() ? it(r.densities.trim()) : e.options.densities;
    ct(p);
    const f = s && l ? l / s : 0,
        h = [],
        x = [];
    if (Object.keys(g).length >= 1) {
        for (const m in g) {
            const k = he(m, String(g[m]), l, f, e);
            if (k !== void 0) {
                h.push({
                    size: k.size,
                    screenMaxWidth: k.screenMaxWidth,
                    media: `(max-width: ${k.screenMaxWidth}px)`
                });
                for (const F of p) x.push({
                    width: k._cWidth * F,
                    src: me(e, t, r, k, F)
                })
            }
        }
        ht(h)
    } else
        for (const m of p) {
            const k = Object.keys(g)[0];
            let F = k ? he(k, String(g[k]), l, f, e) : void 0;
            F === void 0 && (F = {
                size: "",
                screenMaxWidth: 0,
                _cWidth: (u = r.modifiers) == null ? void 0 : u.width,
                _cHeight: (C = r.modifiers) == null ? void 0 : C.height
            }), x.push({
                width: m,
                src: me(e, t, r, F, m)
            })
        }
    mt(x);
    const v = x[x.length - 1],
        w = h.length ? h.map(m => `${m.media?m.media+" ":""}${m.size}`).join(", ") : void 0,
        b = w ? "w" : "x",
        S = x.map(m => `${m.src} ${m.width}${b}`).join(", ");
    return {
        sizes: w,
        srcset: S,
        src: v == null ? void 0 : v.src
    }
}

function he(e, t, r, s, l) {
    const g = l.options.screens && l.options.screens[e] || Number.parseInt(e),
        p = t.endsWith("vw");
    if (!p && /^\d+$/.test(t) && (t = t + "px"), !p && !t.endsWith("px")) return;
    let f = Number.parseInt(t);
    if (!g || !f) return;
    p && (f = Math.round(f / 100 * g));
    const h = s ? Math.round(f * s) : r;
    return {
        size: t,
        screenMaxWidth: g,
        _cWidth: f,
        _cHeight: h
    }
}

function me(e, t, r, s, l) {
    return e.$img(t, { ...r.modifiers,
        width: s._cWidth ? s._cWidth * l : void 0,
        height: s._cHeight ? s._cHeight * l : void 0
    }, r)
}

function ht(e) {
    var r;
    e.sort((s, l) => s.screenMaxWidth - l.screenMaxWidth);
    let t = null;
    for (let s = e.length - 1; s >= 0; s--) {
        const l = e[s];
        l.media === t && e.splice(s, 1), t = l.media
    }
    for (let s = 0; s < e.length; s++) e[s].media = ((r = e[s + 1]) == null ? void 0 : r.media) || ""
}

function mt(e) {
    e.sort((r, s) => r.width - s.width);
    let t = null;
    for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        s.width === t && e.splice(r, 1), t = s.width
    }
}
const yt = nt({
        keyMap: {
            format: "f",
            fit: "fit",
            width: "w",
            height: "h",
            resize: "s",
            quality: "q",
            background: "b"
        },
        joinWith: "&",
        formatter: (e, t) => de(e) + "_" + de(t)
    }),
    _t = (e, {
        modifiers: t = {},
        baseURL: r
    } = {}, s) => {
        t.width && t.height && (t.resize = `${t.width}x${t.height}`, delete t.width, delete t.height);
        const l = yt(t) || "_";
        return r || (r = re(s.options.nuxt.baseURL, "/_ipx")), {
            url: re(r, l, Be(e))
        }
    },
    xt = !0,
    bt = !0,
    wt = Object.freeze(Object.defineProperty({
        __proto__: null,
        getImage: _t,
        supportsAlias: bt,
        validateDomains: xt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ce = {
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            "2xl": 1536
        },
        presets: {},
        provider: "ipx",
        domains: [],
        alias: {},
        densities: [1, 2],
        format: ["webp", "jpeg", "png", "webp"],
        quality: 80
    };
Ce.providers = {
    ipx: {
        provider: wt,
        defaults: {}
    }
};
const Se = () => {
    const e = Re(),
        t = _e();
    return t.$img || t._img || (t._img = dt({ ...Ce,
        nuxt: {
            baseURL: e.app.baseURL
        },
        runtimeConfig: e
    }))
};

function Ct(e) {
    var t;
    (t = performance == null ? void 0 : performance.mark) == null || t.call(performance, "mark_feature_usage", {
        detail: {
            feature: e
        }
    })
}
const St = {
        src: {
            type: String,
            required: !1
        },
        format: {
            type: String,
            required: !1
        },
        quality: {
            type: [Number, String],
            required: !1
        },
        background: {
            type: String,
            required: !1
        },
        fit: {
            type: String,
            required: !1
        },
        modifiers: {
            type: Object,
            required: !1
        },
        preset: {
            type: String,
            required: !1
        },
        provider: {
            type: String,
            required: !1
        },
        sizes: {
            type: [Object, String],
            required: !1
        },
        densities: {
            type: String,
            required: !1
        },
        preload: {
            type: [Boolean, Object],
            required: !1
        },
        width: {
            type: [String, Number],
            required: !1
        },
        height: {
            type: [String, Number],
            required: !1
        },
        alt: {
            type: String,
            required: !1
        },
        referrerpolicy: {
            type: String,
            required: !1
        },
        usemap: {
            type: String,
            required: !1
        },
        longdesc: {
            type: String,
            required: !1
        },
        ismap: {
            type: Boolean,
            required: !1
        },
        loading: {
            type: String,
            required: !1,
            validator: e => ["lazy", "eager"].includes(e)
        },
        crossorigin: {
            type: [Boolean, String],
            required: !1,
            validator: e => ["anonymous", "use-credentials", "", !0, !1].includes(e)
        },
        decoding: {
            type: String,
            required: !1,
            validator: e => ["async", "auto", "sync"].includes(e)
        },
        nonce: {
            type: [String],
            required: !1
        }
    },
    $t = e => {
        const t = z(() => ({
                provider: e.provider,
                preset: e.preset
            })),
            r = z(() => ({
                width: R(e.width),
                height: R(e.height),
                alt: e.alt,
                referrerpolicy: e.referrerpolicy,
                usemap: e.usemap,
                longdesc: e.longdesc,
                ismap: e.ismap,
                crossorigin: e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
                loading: e.loading,
                decoding: e.decoding,
                nonce: e.nonce
            })),
            s = Se(),
            l = z(() => ({ ...e.modifiers,
                width: R(e.width),
                height: R(e.height),
                format: e.format,
                quality: e.quality || s.options.quality,
                background: e.background,
                fit: e.fit
            }));
        return {
            options: t,
            attrs: r,
            modifiers: l
        }
    },
    kt = { ...St,
        placeholder: {
            type: [Boolean, String, Number, Array],
            required: !1
        },
        placeholderClass: {
            type: String,
            required: !1
        },
        custom: {
            type: Boolean,
            required: !1
        }
    },
    Pt = ["src"],
    qt = ee({
        __name: "NuxtImg",
        props: kt,
        emits: ["load", "error"],
        setup(e, {
            emit: t
        }) {
            const r = e,
                s = Te(),
                l = t,
                g = !1,
                p = Se(),
                f = $t(r),
                h = _(!1),
                x = _(),
                v = z(() => p.getSizes(r.src, { ...f.options.value,
                    sizes: r.sizes,
                    densities: r.densities,
                    modifiers: { ...f.modifiers.value,
                        width: R(r.width),
                        height: R(r.height)
                    }
                })),
                w = z(() => {
                    const u = { ...f.attrs.value,
                        "data-nuxt-img": ""
                    };
                    return (!r.placeholder || h.value) && (u.sizes = v.value.sizes, u.srcset = v.value.srcset), u
                }),
                b = z(() => {
                    let u = r.placeholder;
                    if (u === "" && (u = !0), !u || h.value) return !1;
                    if (typeof u == "string") return u;
                    const C = Array.isArray(u) ? u : typeof u == "number" ? [u, u] : [10, 10];
                    return p(r.src, { ...f.modifiers.value,
                        width: C[0],
                        height: C[1],
                        quality: C[2] || 50,
                        blur: C[3] || 3
                    }, f.options.value)
                }),
                S = z(() => r.sizes ? v.value.src : p(r.src, f.modifiers.value, f.options.value)),
                $ = z(() => b.value ? b.value : S.value),
                j = _e().isHydrating;
            return te(() => {
                if (b.value || r.custom) {
                    const u = new Image;
                    S.value && (u.src = S.value), r.sizes && (u.sizes = v.value.sizes || "", u.srcset = v.value.srcset), u.onload = C => {
                        h.value = !0, l("load", C)
                    }, u.onerror = C => {
                        l("error", C)
                    }, Ct("nuxt-image");
                    return
                }
                x.value && (x.value.complete && j && (x.value.getAttribute("data-error") ? l("error", new Event("error")) : l("load", new Event("load"))), x.value.onload = u => {
                    l("load", u)
                }, x.value.onerror = u => {
                    l("error", u)
                })
            }), (u, C) => u.custom ? xe(u.$slots, "default", De(ge({
                key: 1
            }, { ...O(g) ? {
                    onerror: "this.setAttribute('data-error', 1)"
                } : {},
                imgAttrs: { ...w.value,
                    ...O(s)
                },
                isLoaded: h.value,
                src: $.value
            }))) : (c(), d("img", ge({
                key: 0,
                ref_key: "imgEl",
                ref: x,
                class: r.placeholder && !h.value ? r.placeholderClass : void 0
            }, { ...O(g) ? {
                    onerror: "this.setAttribute('data-error', 1)"
                } : {},
                ...w.value,
                ...O(s)
            }, {
                src: $.value
            }), null, 16, Pt))
        }
    }),
    jt = "" + new URL("car2.CNlLSpwm.jpg",
        import.meta.url).href,
    It = window.setInterval,
    zt = {
        class: "relative h-[300px] sm:h-[400px] md:h-screen mb-10"
    },
    At = {
        key: 0,
        class: "relative h-full overflow-hidden"
    },
    Ft = {
        class: "absolute inset-0 flex flex-col md:flex-row"
    },
    Ut = {
        class: "w-full h-[300px] sm:h-[400px] md:h-screen relative"
    },
    Et = {
        class: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
    },
    Lt = ["onClick"],
    Mt = {
        key: 1,
        class: "h-full flex items-center justify-center bg-gray-100"
    },
    Vt = {
        key: 2,
        class: "h-full"
    },
    Nt = {
        __name: "Hero",
        setup(e) {
            const {
                getSlides: t
            } = tt(), r = _([]), s = _(0), l = _(!0), g = _(null), p = async () => {
                try {
                    l.value = !0;
                    const b = await t();
                    if (!b || b.length === 0) {
                        r.value = f();
                        return
                    }
                    r.value = b.data
                } catch (b) {
                    console.error("Error fetching slides:", b), r.value = f()
                } finally {
                    l.value = !1
                }
            }, f = () => [{
                _id: "fallback-1",
                title: "عروض حصرية",
                description: "احصل على أفضل العروض والخصومات",
                discount: 50,
                website: "www.example.com",
                image: pe
            }, {
                _id: "fallback-2",
                title: "تخفيضات كبرى",
                description: "وفر أكثر مع عروضنا المميزة",
                discount: 70,
                website: "www.example.com",
                image: jt
            }], h = () => {
                s.value = (s.value + 1) % r.value.length, w()
            }, x = () => {
                s.value = s.value === 0 ? r.value.length - 1 : s.value - 1, w()
            }, v = () => {
                g.value = It(() => {
                    h()
                }, 5e3)
            }, w = () => {
                g.value && (clearInterval(g.value), v())
            };
            return te(async () => {
                await p(), r.value.length && v()
            }), He(() => {
                g.value && clearInterval(g.value)
            }), (b, S) => {
                const $ = qt;
                return c(), d("div", zt, [r.value.length ? (c(), d("div", At, [(c(!0), d(L, null, V(r.value, (A, j) => (c(), d("div", {
                    key: A._id,
                    class: B(["absolute inset-0 transition-opacity duration-500", {
                        "opacity-0": s.value !== j
                    }])
                }, [a("div", Ft, [a("div", Ut, [E($, {
                    src: A.image,
                    alt: A.title,
                    class: "w-full h-full object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    loading: "lazy",
                    placeholder: "",
                    sizes: "sm:100vw md:100vw lg:100vw",
                    format: "webp",
                    quality: "80",
                    preload: ""
                }, null, 8, ["src", "alt"])])])], 2))), 128)), a("button", {
                    onClick: x,
                    class: "absolute left-4 top-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
                }, [E(O(Ke), {
                    class: "w-6 h-6 text-green-600",
                    weight: "bold"
                })]), a("button", {
                    onClick: h,
                    class: "absolute right-4 top-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
                }, [E(O(et), {
                    class: "w-6 h-6 text-green-600",
                    weight: "bold"
                })]), a("div", Et, [(c(!0), d(L, null, V(r.value, (A, j) => (c(), d("button", {
                    key: j,
                    onClick: u => s.value = j,
                    class: B(["w-3 h-3 rounded-full transition-colors", s.value === j ? "bg-white" : "bg-white/60 hover:bg-white"])
                }, null, 10, Lt))), 128))])])) : l.value ? (c(), d("div", Mt, S[0] || (S[0] = [a("p", {
                    class: "text-gray-500"
                }, "جاري التحميل...", -1)]))) : (c(), d("div", Vt, S[1] || (S[1] = [a("div", {
                    class: "absolute inset-0 flex flex-col md:flex-row"
                }, [a("div", {
                    class: "w-full md:w-1/2 h-2/3 md:h-full bg-green-600 flex items-center justify-center pb-5 pt-2"
                }, [a("div", {
                    class: "text-center text-white p-4"
                }, [a("h2", {
                    class: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4"
                }, " 50% "), a("h3", {
                    class: "text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2"
                }, " عروض حصرية "), a("p", {
                    class: "text-xl sm:text-2xl md:text-3xl"
                }, " احصل على أفضل العروض والخصومات "), a("div", {
                    class: "mt-4 md:mt-8 text-xs sm:text-sm"
                }, "www.example.com")])]), a("div", {
                    class: "w-full md:w-1/2 h-1/2 md:h-full"
                }, [a("img", {
                    src: pe,
                    alt: "عروض حصرية",
                    class: "w-full h-full object-cover",
                    onerror: "this.src='https://via.placeholder.com/800x600?text=عروض+حصرية'"
                })])], -1)])))])
            }
        }
    },
    Ot = ae(Nt, [
        ["__scopeId", "data-v-f01337c8"]
    ]),
    Wt = {
        class: "sticky top-[80px] lg:top-[70px] z-10 bg-white"
    },
    Bt = {
        class: "bg-gray-50 border-b border-gray-100"
    },
    Rt = {
        class: "container mx-auto px-4"
    },
    Tt = {
        class: "overflow-x-auto",
        dir: "rtl"
    },
    Dt = {
        class: "flex space-x-reverse space-x-1 py-2 min-w-max"
    },
    Ht = ["onClick"],
    Gt = {
        key: 0,
        class: "p-4 text-center text-gray-500"
    },
    Jt = {
        key: 1,
        class: "p-4 text-center text-red-500"
    },
    Zt = {
        class: "bg-white border-b"
    },
    Xt = {
        class: "container mx-auto px-4"
    },
    Yt = {
        class: "flex items-center gap-6 overflow-x-auto py-4"
    },
    Qt = ["onClick"],
    Kt = {
        key: 0,
        class: "flex items-center gap-4 overflow-x-auto py-3 border-t"
    },
    es = ["onClick"],
    ts = {
        __name: "CategoryFilters",
        props: {
            activeCategory: {
                type: String,
                default: "all"
            },
            activeSubcategory: {
                type: String,
                default: ""
            },
            selectedSecondary: {
                type: String,
                default: ""
            },
            subCategories: {
                type: Array,
                required: !0
            }
        },
        emits: ["update:category", "update:subcategory", "update:secondary"],
        async setup(e, {
            emit: t
        }) {
            let r, s;
            const l = e,
                g = t,
                {
                    data: p
                } = ([r, s] = Ge(() => st("https://pazar.sy/api/category/all", "$4V7gyvZUT1")), r = await r, s(), r),
                f = z(() => {
                    var u;
                    return ((u = p.value) == null ? void 0 : u.categories) || []
                }),
                h = _([]),
                x = _(!1),
                v = _(null),
                w = async () => {
                    if (l.activeCategory === "all") {
                        h.value = [];
                        return
                    }
                    x.value = !0, v.value = null;
                    try {
                        const C = await (await fetch(`https://pazar.sy/api/subCategory/${l.activeCategory}/subCategories`)).json();
                        console.log("Fetched subcategories:", C), C && C.subCategories && (h.value = C.subCategories)
                    } catch (u) {
                        console.error("Error fetching subcategories:", u), v.value = "فشل في تحميل التصنيفات الفرعية"
                    } finally {
                        x.value = !1
                    }
                },
                b = z(() => h.value.filter(u => !u.parentSubCategoryId)),
                S = z(() => l.activeSubcategory ? h.value.filter(u => u.parentSubCategoryId === l.activeSubcategory) : []);
            Z(() => l.activeCategory, () => {
                l.activeCategory !== "all" ? w() : h.value = []
            }), z(() => h.value ? h.value : []);
            const $ = u => {
                    g("update:category", u._id), g("update:subcategory", ""), g("update:secondary", "")
                },
                A = u => {
                    g("update:subcategory", u._id), g("update:secondary", "")
                },
                j = u => {
                    g("update:secondary", u._id)
                };
            return te(() => {
                l.activeCategory !== "all" && w()
            }), (u, C) => (c(), d("div", Wt, [a("div", Bt, [a("div", Rt, [a("div", Tt, [a("div", Dt, [a("button", {
                onClick: C[0] || (C[0] = m => $({
                    _id: "all"
                })),
                class: B(["px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors", e.activeCategory === "all" ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"])
            }, " كل التصنيفات ", 2), (c(!0), d(L, null, V(f.value, m => (c(), d("button", {
                key: m._id,
                onClick: k => $(m),
                class: B(["px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors", m._id === e.activeCategory ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"])
            }, U(m.name), 11, Ht))), 128))])])])]), x.value ? (c(), d("div", Gt, " جاري التحميل... ")) : v.value ? (c(), d("div", Jt, U(v.value), 1)) : N("", !0), a("div", Zt, [a("div", Xt, [a("div", Yt, [(c(!0), d(L, null, V(b.value, m => (c(), d("button", {
                key: m._id,
                onClick: k => A(m),
                class: B(["whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-200", [e.activeSubcategory === m._id ? "bg-green-500 text-white" : "hover:bg-gray-100"]])
            }, U(m.name), 11, Qt))), 128))]), e.activeSubcategory && S.value.length > 0 ? (c(), d("div", Kt, [(c(!0), d(L, null, V(S.value, m => (c(), d("button", {
                key: m._id,
                onClick: k => j(m),
                class: B(["whitespace-nowrap px-3 py-1.5 rounded-lg text-sm transition-all duration-200", [e.selectedSecondary === m._id ? "bg-green-100 text-green-700" : "hover:bg-gray-50"]])
            }, U(m.name), 11, es))), 128))])) : N("", !0)])])]))
        }
    },
    ss = ae(ts, [
        ["__scopeId", "data-v-bb2b40c7"]
    ]),
    rs = {
        key: 0,
        class: "bg-white rounded-lg p-4 shadow-sm space-y-4 mb-4"
    },
    as = {
        class: "font-semibold text-lg"
    },
    G = ee({
        __name: "FilterSection",
        props: {
            title: {},
            property: {}
        },
        setup(e) {
            return (t, r) => t.property !== "text" ? (c(), d("div", rs, [a("h3", as, U(t.title), 1), xe(t.$slots, "default")])) : N("", !0)
        }
    }),
    os = {
        class: "grid grid-cols-2 gap-2"
    },
    ls = ["value"],
    ns = ["value"],
    is = ee({
        __name: "PriceRangeFilter",
        props: {
            modelValue: {}
        },
        emits: ["update:modelValue"],
        setup(e) {
            return (t, r) => (c(), d("div", os, [a("div", null, [a("input", {
                type: "text",
                placeholder: "السعر من",
                class: "w-full px-3 py-2 border border-gray-200 rounded-lg text-right",
                value: t.modelValue.min,
                onInput: r[0] || (r[0] = s => t.$emit("update:modelValue", { ...t.modelValue,
                    min: s.target.value
                }))
            }, null, 40, ls)]), a("div", null, [a("input", {
                type: "text",
                placeholder: "السعر إلى",
                class: "w-full px-3 py-2 border border-gray-200 rounded-lg text-right",
                value: t.modelValue.max,
                onInput: r[1] || (r[1] = s => t.$emit("update:modelValue", { ...t.modelValue,
                    max: s.target.value
                }))
            }, null, 40, ns)])]))
        }
    }),
    se = {
        mobileConditions: ["جديد", "مستعمل", "كالجديد"],
        mobileStorage: ["64GB", "128GB", "256GB", "512GB", "1TB"],
        mobileBrands: ["Apple", "Samsung", "Huawei", "Xiaomi", "Oppo", "Realme"],
        jobTypes: ["دوام كامل", "دوام جزئي", "عن بعد", "متدرب", "مؤقت"],
        jobFields: ["تقنية المعلومات", "تسويق", "مبيعات", "إدارة", "تعليم", "طب"],
        jobExperience: ["0-1 سنة", "2-3 سنوات", "4-5 سنوات", "6+ سنوات"],
        electronicsCategories: ["لابتوب", "تابلت", "شاشات", "طابعات", "كاميرات", "ألعاب"],
        electronicsConditions: ["جديد", "مستعمل", "تجديد المصنع"],
        electronicsWarranty: ["بدون ضمان", "6 أشهر", "سنة", "سنتين"]
    },
    cs = {
        class: "bg-gray-100",
        dir: "rtl"
    },
    us = {
        class: "container md:w-[90%] mx-auto px-4 py-6"
    },
    ds = {
        class: "flex flex-col lg:flex-row gap-6"
    },
    gs = {
        class: "lg:w-1/4"
    },
    vs = {
        class: "relative"
    },
    ps = {
        class: "space-y-2"
    },
    fs = ["checked", "onChange"],
    hs = {
        class: "space-y-2"
    },
    ms = ["checked", "onChange"],
    ys = {
        class: "space-y-2"
    },
    _s = ["checked", "onChange"],
    xs = {
        key: 0,
        class: "space-y-2"
    },
    bs = ["onUpdate:modelValue", "onChange"],
    ws = {
        value: "",
        selected: "",
        class: "text-gray-600"
    },
    Cs = ["value"],
    Ss = {
        key: 1,
        class: "space-y-2"
    },
    $s = ["name", "value", "onUpdate:modelValue", "onChange"],
    ks = {
        class: "overflow-x-auto"
    },
    Ps = {
        class: "flex w-[500px] gap-3 py-2"
    },
    qs = ["onClick"],
    js = {
        class: "p-3 flex flex-col items-center space-y-2"
    },
    Is = ["src", "alt"],
    zs = {
        class: "text-sm text-gray-700 text-center"
    },
    As = {
        key: 0,
        class: "absolute top-2 right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
    },
    Fs = {
        class: "relative"
    },
    Us = ["value"],
    Es = {
        class: "absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
    },
    Ls = {
        class: "lg:w-3/4"
    },
    Ms = {
        key: 0,
        class: "text-center py-4"
    },
    Vs = {
        key: 1,
        class: "text-red-500 text-center py-4"
    },
    Ns = {
        key: 2
    },
    Os = {
        key: 0,
        class: "text-center py-8"
    },
    Ws = {
        class: "flex flex-col items-center justify-center space-y-4"
    },
    Bs = {
        key: 1,
        class: "space-y-4"
    },
    Rs = {
        key: 2,
        class: "flex justify-center items-center gap-2 mt-6 mb-8"
    },
    Ts = ["disabled"],
    Ds = {
        class: "flex gap-1"
    },
    Hs = ["onClick"],
    Gs = ["disabled"],
    Js = {
        key: 0,
        class: "bg-gray-50 p-3 rounded-lg mb-4"
    },
    Zs = {
        class: "flex items-center justify-between"
    },
    Xs = {
        class: "text-sm text-gray-600"
    },
    Ys = {
        __name: "ProductFilter",
        setup(e) {
            const t = Je(),
                r = Ze(),
                s = _(parseInt(r.query.page) || 1),
                l = _(8),
                g = _(0),
                p = _(1),
                f = _(!1),
                h = _(null),
                x = _(null),
                v = _(r.query.category || "all"),
                w = _(r.query.subcategory || ""),
                b = _(r.query.secondary || ""),
                S = _(r.query.search || ""),
                $ = _({
                    min: r.query.minPrice || "",
                    max: r.query.maxPrice || ""
                });
            _([]), _([]);
            const A = _([]),
                j = _([]),
                u = _([]),
                C = _(null),
                m = _([]);
            z(() => {
                var o, i;
                return v.value === "all" ? [] : ((i = (o = C.value) == null ? void 0 : o.category) == null ? void 0 : i.tradeMarks) || []
            });
            const k = _({}),
                F = _(r.query.tradeMarks ? r.query.tradeMarks.split(",") : []),
                J = _(r.query.colors ? r.query.colors.split(",") : []),
                oe = _(0),
                $e = () => {
                    oe.value = window.scrollY, sessionStorage.setItem("lastScrollPosition", oe.value.toString())
                },
                ke = () => {
                    const o = sessionStorage.getItem("lastScrollPosition");
                    o && Qe(() => {
                        window.scrollTo({
                            top: parseInt(o),
                            behavior: "smooth"
                        }), sessionStorage.removeItem("lastScrollPosition")
                    })
                },
                W = _(r.query.city || ""),
                Pe = ["دمشق", "ريف دمشق", "حلب", "حمص", "حماة", "اللاذقية", "طرطوس", "الرقة", "دير الزور", "الحسكة", "القامشلي", "درعا", "السويداء", "القنيطرة", "إدلب"],
                le = () => {
                    const o = { ...r.query,
                        page: s.value,
                        category: v.value !== "all" ? v.value : void 0,
                        subcategory: w.value || void 0,
                        secondary: b.value || void 0,
                        city: W.value || void 0,
                        search: S.value || void 0,
                        minPrice: $.value.min || void 0,
                        maxPrice: $.value.max || void 0
                    };
                    Object.keys(o).forEach(i => {
                        o[i] || delete o[i]
                    }), t.push({
                        query: o
                    })
                },
                qe = o => {
                    w.value = o, b.value = ""
                },
                je = o => {
                    b.value = o
                },
                ne = () => {
                    const o = v.value,
                        i = w.value,
                        y = b.value;
                    F.value = [], J.value = [], k.value = {}, $.value = {
                        min: "",
                        max: ""
                    }, S.value = "", A.value = [], j.value = [], u.value = [], W.value = "", t.push({
                        query: {
                            category: o !== "all" ? o : void 0,
                            subcategory: i || void 0,
                            secondary: y || void 0
                        }
                    })
                },
                Ie = o => {
                    S.value = o.target.value
                },
                ze = o => {
                    const i = A.value.indexOf(o);
                    i === -1 ? A.value.push(o) : A.value.splice(i, 1)
                },
                Ae = o => {
                    const i = j.value.indexOf(o);
                    i === -1 ? j.value.push(o) : j.value.splice(i, 1)
                },
                Fe = o => {
                    const i = u.value.indexOf(o);
                    i === -1 ? u.value.push(o) : u.value.splice(i, 1)
                },
                ie = (o, i) => {
                    k.value[o.property] = i
                },
                Ue = o => {
                    const i = F.value.indexOf(o);
                    i === -1 ? F.value.push(o) : F.value.splice(i, 1)
                },
                Ee = o => {
                    o.target.src = ""
                };
            Z([s, v, w, b, W, S, $], () => {
                le(), X()
            }, {
                deep: !0
            });
            const Le = () => {
                    $e()
                },
                Me = z(() => {
                    const i = s.value * l.value;
                    return D.value.slice(0, i)
                });
            z(() => Me.value.length < D.value.length), Z(s, () => {
                X(), window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }), Z([v, w, S, $, F, J, k], () => {
                s.value = 1
            }, {
                deep: !0
            }), z(() => {
                if (!x.value) return [];
                const o = new Set;
                return x.value.forEach(i => {
                    var y;
                    (y = i.location) != null && y.city && o.add(i.location.city)
                }), Array.from(o)
            });
            const X = async () => {
                var o;
                f.value = !0, h.value = null;
                try {
                    let i;
                    if (v.value !== "all") {
                        const I = await fetch(`https://pazar.sy/api/category/${v.value}`);
                        C.value = await I.json(), m.value = ((o = C.value.category) == null ? void 0 : o.specialProperties) || []
                    } else C.value = null, m.value = [];
                    const y = new URLSearchParams({
                        page: s.value.toString(),
                        limit: l.value.toString(),
                        ...S.value && {
                            advTitle: S.value
                        }
                    });
                    if (v.value === "all") i = await fetch(`https://pazar.sy/api/advertisement/all?${y}`);
                    else {
                        let I = `https://pazar.sy/api/advertisement/certain/categories?${y}&category=${v.value}`;
                        w.value && !b.value && (I += `&subCategory=${w.value}`), b.value && w.value && (I += `&subCategory=${b.value}`), i = await fetch(I)
                    }
                    const q = await i.json();
                    q && (x.value = q.data, g.value = q.totalItems || 0, p.value = q.totalPages || 1, l.value = q.perPage || 10)
                } catch (i) {
                    console.error("Error fetching products:", i), h.value = "حدث خطأ أثناء جلب المنتجات"
                } finally {
                    f.value = !1
                }
            };
            Z([v, w, b, s], () => {
                X()
            }, {
                immediate: !0
            }), te(() => {
                const {
                    category: o,
                    subcategory: i,
                    secondary: y,
                    search: q,
                    minPrice: I,
                    maxPrice: M,
                    tradeMarks: n,
                    colors: P,
                    properties: T,
                    city: ce
                } = r.query;
                if (o && (v.value = o), i && (w.value = i), y && (b.value = y), q && (S.value = q), (I || M) && ($.value = {
                        min: I || "",
                        max: M || ""
                    }), n && (F.value = n.split(",")), P && (J.value = P.split(",")), T) try {
                    k.value = JSON.parse(decodeURIComponent(T))
                } catch (Ne) {
                    console.error("Error parsing properties from URL:", Ne)
                }
                ce && (W.value = ce), X().then(() => {
                    ke()
                })
            });
            const D = z(() => {
                    if (!x.value) return [];
                    let o = x.value.filter(y => y.approved === !0);
                    return ($.value.min || $.value.max) && (o = o.filter(y => {
                        const q = Number(y.price),
                            I = Number($.value.min) || 0,
                            M = Number($.value.max) || 1 / 0;
                        return q >= I && q <= M
                    })), F.value.length > 0 && (o = o.filter(y => F.value.includes(y.tradeMark))), J.value.length > 0 && (o = o.filter(y => {
                        var I;
                        const q = (I = y.specialProperties) == null ? void 0 : I.find(M => M.property.toLowerCase() === "اللون" || M.property.toLowerCase() === "color");
                        return q && J.value.includes(q.value)
                    })), Object.entries(k.value).forEach(([y, q]) => {
                        q && m.value.find(M => M.property === y && M.filterProperty !== !1) && (o = o.filter(M => {
                            var n;
                            return (n = M.specialProperties) == null ? void 0 : n.some(P => {
                                var T;
                                return P.property === y && ((T = P.value) == null ? void 0 : T.toString().toLowerCase()) === q.toString().toLowerCase()
                            })
                        }))
                    }), v.value === "jobs" && A.value.length > 0 && (o = o.filter(y => A.value.includes(y.jobType))), v.value === "jobs" && j.value.length > 0 && (o = o.filter(y => j.value.includes(y.field))), v.value === "electronics" && u.value.length > 0 && (o = o.filter(y => u.value.includes(y.electronicsCategory))), W.value && (o = o.filter(y => {
                        var q, I;
                        return ((I = (q = y.location) == null ? void 0 : q.city) == null ? void 0 : I.toLowerCase()) === W.value.toLowerCase()
                    })), o
                }),
                Y = z(() => {
                    var o;
                    return {
                        total: ((o = x.value) == null ? void 0 : o.length) || 0,
                        filtered: D.value.length,
                        activeFilters: [F.value.length > 0 ? "الماركات" : null, J.value.length > 0 ? "الألوان" : null, Object.keys(k.value).length > 0 ? "الخصائص" : null, $.value.min || $.value.max ? "السعر" : null, S.value ? "البحث" : null, W.value ? "المدينة" : null].filter(Boolean)
                    }
                });
            Z([s, v, w, b, W, S, $], () => {
                le(), X()
            }, {
                deep: !0
            });
            const Ve = z(() => m.value.filter(o => o.filterProperty !== !1));
            return (o, i) => {
                var q, I, M;
                const y = be;
                return c(), d("div", null, [E(ss, {
                    "active-category": v.value,
                    "active-subcategory": w.value,
                    "selected-secondary": b.value,
                    "onUpdate:category": i[0] || (i[0] = n => v.value = n),
                    "onUpdate:subcategory": qe,
                    "onUpdate:secondary": je
                }, null, 8, ["active-category", "active-subcategory", "selected-secondary"]), a("div", null, [a("div", cs, [a("div", us, [a("div", ds, [a("div", gs, [D.value.length === 0 ? (c(), d("button", {
                    key: 0,
                    onClick: ne,
                    class: "text-sm hover:text-red-700 hover:bg-white duration-150 ease-linear mb-4 mr-auto w-full bg-red-500 text-white px-4 py-2 rounded-lg"
                }, " إعادة تعيين الفلاتر ")) : N("", !0), E(G, {
                    title: "البحث"
                }, {
                    default: H(() => [a("div", vs, [K(a("input", {
                        "onUpdate:modelValue": i[1] || (i[1] = n => S.value = n),
                        type: "text",
                        placeholder: "البحث عن...",
                        class: "w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg text-right",
                        onInput: Ie
                    }, null, 544), [
                        [Xe, S.value]
                    ]), E(y, {
                        name: "ph:magnifying-glass",
                        class: "w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                    })])]),
                    _: 1
                }), E(G, {
                    title: "نطاق السعر"
                }, {
                    default: H(() => [E(is, {
                        modelValue: $.value,
                        "onUpdate:modelValue": i[2] || (i[2] = n => $.value = n)
                    }, null, 8, ["modelValue"])]),
                    _: 1
                }), v.value === "jobs" ? (c(), d(L, {
                    key: 1
                }, [E(G, {
                    title: "نوع الوظيفة"
                }, {
                    default: H(() => [a("div", ps, [(c(!0), d(L, null, V(O(se).jobTypes, n => (c(), d("label", {
                        key: n,
                        class: "flex items-center space-x-reverse space-x-2"
                    }, [a("input", {
                        type: "checkbox",
                        checked: A.value.includes(n),
                        onChange: P => ze(n),
                        class: "rounded text-green-600"
                    }, null, 40, fs), a("span", null, U(n), 1)]))), 128))])]),
                    _: 1
                }), E(G, {
                    title: "المجال"
                }, {
                    default: H(() => [a("div", hs, [(c(!0), d(L, null, V(O(se).jobFields, n => (c(), d("label", {
                        key: n,
                        class: "flex items-center space-x-reverse space-x-2"
                    }, [a("input", {
                        type: "checkbox",
                        checked: j.value.includes(n),
                        onChange: P => Ae(n),
                        class: "rounded text-green-600"
                    }, null, 40, ms), a("span", null, U(n), 1)]))), 128))])]),
                    _: 1
                })], 64)) : N("", !0), v.value === "electronics" ? (c(), Q(G, {
                    key: 2,
                    title: "الفئة"
                }, {
                    default: H(() => [a("div", ys, [(c(!0), d(L, null, V(O(se).electronicsCategories, n => (c(), d("label", {
                        key: n,
                        class: "flex items-center space-x-reverse space-x-2"
                    }, [a("input", {
                        type: "checkbox",
                        checked: u.value.includes(n),
                        onChange: P => Fe(n),
                        class: "rounded text-green-600"
                    }, null, 40, _s), a("span", null, U(n), 1)]))), 128))])]),
                    _: 1
                })) : N("", !0), m.value.length > 0 && D.value.length > 0 ? (c(!0), d(L, {
                    key: 3
                }, V(Ve.value, n => (c(), Q(G, {
                    key: n.property,
                    title: n.property,
                    property: n.type
                }, {
                    default: H(() => [n.type === "dropdown" ? (c(), d("div", xs, [K(a("select", {
                        "onUpdate:modelValue": P => k.value[n.property] = P,
                        class: "w-full px-3 py-2 border border-gray-200 rounded-lg text-right",
                        onChange: P => ie(n, P.target.value)
                    }, [a("option", ws, " اختر " + U(n.property), 1), (c(!0), d(L, null, V(n.values, P => (c(), d("option", {
                        key: P,
                        value: P
                    }, U(P), 9, Cs))), 128))], 40, bs), [
                        [ve, k.value[n.property]]
                    ])])) : N("", !0), n.type === "radio" ? (c(), d("div", Ss, [(c(!0), d(L, null, V(n.values, P => (c(), d("label", {
                        key: P,
                        class: "flex items-center space-x-reverse space-x-2"
                    }, [K(a("input", {
                        type: "radio",
                        name: n.property,
                        value: P,
                        "onUpdate:modelValue": T => k.value[n.property] = T,
                        onChange: T => ie(n, P),
                        class: "text-green-600"
                    }, null, 40, $s), [
                        [Ye, k.value[n.property]]
                    ]), a("span", null, U(P), 1)]))), 128))])) : N("", !0)]),
                    _: 2
                }, 1032, ["title", "property"]))), 128)) : N("", !0), v.value !== "all" && ((M = (I = (q = C.value) == null ? void 0 : q.category) == null ? void 0 : I.tradeMarks) == null ? void 0 : M.length) > 0 ? (c(), Q(G, {
                    key: 4,
                    title: "الماركة"
                }, {
                    default: H(() => [a("div", ks, [a("div", Ps, [(c(!0), d(L, null, V(C.value.category.tradeMarks, (n, P) => (c(), d("div", {
                        key: P,
                        onClick: T => Ue(n),
                        class: B(["relative cursor-pointer rounded-lg border-2 transition-all duration-200 flex-none w-1/4", [F.value.includes(n) ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-green-200"]])
                    }, [a("div", js, [a("img", {
                        src: n.icon,
                        alt: n,
                        class: "w-12 h-12 object-contain",
                        onError: Ee
                    }, null, 40, Is), a("span", zs, U(n.mark), 1), F.value.includes(n) ? (c(), d("div", As, [E(O(at), {
                        class: "w-4 h-4 text-white",
                        weight: "bold"
                    })])) : N("", !0)])], 10, qs))), 128))])])]),
                    _: 1
                })) : N("", !0), E(G, {
                    title: "المدينة"
                }, {
                    default: H(() => [a("div", Fs, [K(a("select", {
                        "onUpdate:modelValue": i[3] || (i[3] = n => W.value = n),
                        onChange: i[4] || (i[4] = (...n) => o.handleCityChange && o.handleCityChange(...n)),
                        class: "w-full px-3 py-2 border border-gray-200 rounded-lg text-right appearance-none"
                    }, [i[7] || (i[7] = a("option", {
                        value: ""
                    }, "كل المدن", -1)), (c(), d(L, null, V(Pe, n => a("option", {
                        key: n,
                        value: n
                    }, U(n), 9, Us)), 64))], 544), [
                        [ve, W.value]
                    ]), a("div", Es, [E(y, {
                        name: "ph:caret-down",
                        class: "w-5 h-5 text-gray-400"
                    })])])]),
                    _: 1
                })]), a("div", Ls, [f.value ? (c(), d("div", Ms, " جاري التحميل... ")) : h.value ? (c(), d("div", Vs, U(h.value), 1)) : (c(), d("div", Ns, [D.value.length === 0 ? (c(), d("div", Os, [a("div", Ws, [E(y, {
                    name: "ph:warning-circle",
                    class: "w-16 h-16 text-gray-400"
                }), i[8] || (i[8] = a("h3", {
                    class: "text-xl font-medium text-gray-600"
                }, " لا يوجد إعلانات ", -1)), i[9] || (i[9] = a("p", {
                    class: "text-gray-500"
                }, " لم يتم العثور على أي إعلانات تطابق معايير البحث المحددة ", -1)), a("button", {
                    onClick: ne,
                    class: "px-4 py-2 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600"
                }, " إعادة تعيين الفلاتر ")])])) : (c(), d("div", Bs, [(c(!0), d(L, null, V(D.value, n => (c(), Q(rt, {
                    key: n._id,
                    product: n,
                    onClick: Le
                }, null, 8, ["product"]))), 128))])), D.value.length > 0 ? (c(), d("div", Rs, [a("button", {
                    onClick: i[5] || (i[5] = n => s.value > 1 ? s.value-- : null),
                    disabled: s.value === 1,
                    class: B(["px-4 py-2 rounded-lg border", s.value === 1 ? "bg-gray-100 text-gray-400" : "bg-white hover:bg-gray-50"])
                }, " السابق ", 10, Ts), a("div", Ds, [(c(!0), d(L, null, V(p.value, n => (c(), d("button", {
                    key: n,
                    onClick: P => s.value = n,
                    class: B(["px-4 py-2 rounded-lg border", s.value === n ? "bg-green-500 text-white border-green-500" : "bg-white hover:bg-gray-50"])
                }, U(n), 11, Hs))), 128))]), a("button", {
                    onClick: i[6] || (i[6] = n => s.value < p.value ? s.value++ : null),
                    disabled: s.value === p.value,
                    class: B(["px-4 py-2 rounded-lg border", s.value === p.value ? "bg-gray-100 text-gray-400" : "bg-white hover:bg-gray-50"])
                }, " التالي ", 10, Gs)])) : N("", !0)]))])])])]), Y.value.activeFilters.length > 0 ? (c(), d("div", Js, [a("div", Zs, [a("div", Xs, [a("span", null, "تم العثور على " + U(Y.value.filtered) + " من " + U(Y.value.total), 1), i[10] || (i[10] = a("span", {
                    class: "mx-2"
                }, "|", -1)), a("span", null, "الفلاتر النشطة: " + U(Y.value.activeFilters.join("، ")), 1)])])])) : N("", !0)])])
            }
        }
    },
    Qs = ae(Ys, [
        ["__scopeId", "data-v-3962b280"]
    ]),
    Ks = "" + new URL("phone.BPi2DAZ7.png",
        import.meta.url).href,
    er = {
        class: "bg-[#0C9547] text-white py-12"
    },
    tr = {
        class: "container md:w-[90%] mx-auto px-4"
    },
    sr = {
        class: "flex flex-col md:flex-row items-center justify-between gap-8",
        dir: "rtl"
    },
    rr = {
        class: "md:w-1/2 space-y-4"
    },
    ar = {
        class: "flex items-center gap-2"
    },
    or = {
        class: "md:w-1/2 flex justify-center"
    },
    lr = {
        class: "relative w-64 h-[450px]"
    },
    nr = ["src"],
    ir = ee({
        __name: "AppPromo",
        setup(e) {
            return (t, r) => {
                const s = be;
                return c(), d("div", er, [a("div", tr, [a("div", sr, [a("div", rr, [a("div", ar, [r[0] || (r[0] = a("h2", {
                    class: "text-3xl md:text-4xl font-bold"
                }, "تطبيقنا قريبًا بين إيديك!", -1)), E(s, {
                    name: "emojione:rocket",
                    class: "w-8 h-8"
                })]), r[1] || (r[1] = a("p", {
                    class: "text-lg md:text-xl opacity-90"
                }, " قريباً رح تنزل تطبيقنا اللي بيخليك تبيع وتشتري المستعمل بكل سهولة وراحة ", -1)), r[2] || (r[2] = a("p", {
                    class: "text-lg opacity-80"
                }, " تابعونا واستنوا المفاجآت، لأنو التجربة معنا رح تكون غير ", -1))]), a("div", or, [a("div", lr, [a("img", {
                    src: O(Ks),
                    alt: "Mobile App Preview",
                    class: "w-full h-full object-cover rounded-[40px]"
                }, null, 8, nr)])])])])])
            }
        }
    }),
    cr = {
        class: "container mx-auto"
    },
    br = {
        __name: "index",
        setup(e) {
            return (t, r) => {
                const s = Ot,
                    l = Qs,
                    g = ir;
                return c(), d("div", cr, [E(s), E(l), E(g)])
            }
        }
    };
export {
    br as
    default
};