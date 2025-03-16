import {
    _ as Y
} from "./BZ64PvPr.js";
import {
    _ as Z,
    r as f,
    u as V,
    g as ee,
    q as _,
    v as E,
    p as P,
    c as l,
    o as a,
    a as e,
    b as s,
    w as T,
    y as n,
    C as B,
    aj as H,
    B as te,
    t as L,
    A as se,
    x as N,
    F as D,
    z as A,
    T as oe,
    m as ne,
    a7 as re
} from "./BHlMq76H.js";
import {
    l as W
} from "./CfHyb9Ak.js";
import {
    G as U,
    I as le,
    c as ae,
    a as q,
    F as ie,
    b as de
} from "./C98FT5hs.js";
import {
    H as M
} from "./Brcpf7VG.js";
import {
    F as ce,
    G as ge
} from "./BoHhVV2m.js";
import {
    I as k
} from "./DnXQjtub.js";
import {
    G as ue
} from "./DfkNV9S4.js";
import {
    F as pe
} from "./qd-5IJto.js";
import {
    u as me
} from "./CsZ24X-G.js";
import fe from "./CvO6Ct1e.js";
import ve from "./D1LhxY_R.js";
import "./DmZK5evu.js";
import "./SBjqHRQP.js";
import "./FWHMQTNV.js";
import "./D4Idv_Qr.js";
const xe = "" + new URL("user.CWF7TPRP.png",
        import.meta.url).href,
    ye = {
        class: "relative lg:w-[90%] mx-auto"
    },
    we = {
        class: "flex items-center justify-between py-2.5"
    },
    be = {
        class: "flex items-center"
    },
    he = ["src"],
    ke = {
        class: "hidden lg:flex items-center gap-4"
    },
    _e = {
        class: "flex items-center gap-4"
    },
    Le = {
        key: 0,
        class: "relative"
    },
    $e = {
        class: "absolute top-full right-0 mt-2 z-50 w-48 bg-white rounded-md shadow-lg py-1"
    },
    Ce = {
        key: 1,
        class: "relative dropdown-container"
    },
    Ee = ["src"],
    Ie = {
        class: "text-gray-700"
    },
    je = {
        class: "absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
    },
    Se = {
        class: "text-right"
    },
    Re = {
        class: "font-medium"
    },
    Me = ["src"],
    De = {
        class: "py-1",
        dir: "rtl"
    },
    Fe = {
        class: "flex items-center gap-4"
    },
    ze = {
        class: "absolute top-[20px] left-0 right-0 mx-5 pb-24 bg-white border-t border-gray-100 shadow-lg z-50 max-h-[calc(100vh-61px)] overflow-y-auto p-6"
    },
    Oe = {
        class: "flex items-center justify-between gap-4 mb-6"
    },
    Ge = {
        class: "space-y-4 mb-6"
    },
    Pe = {
        class: "text-right flex-1"
    },
    Te = {
        class: "font-medium text-lg"
    },
    Be = ["src"],
    He = {
        class: "grid grid-cols-2 gap-4 mb-6"
    },
    Ne = ["onClick"],
    Ue = {
        class: "grid grid-cols-2 gap-4 border-t border-gray-100 pt-4"
    },
    qe = {
        class: "relative"
    },
    Ve = {
        key: 1,
        class: "grid grid-cols-2 gap-4"
    },
    Ae = {
        __name: "TopHeader",
        props: {
            isLoggedIn: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["open-login", "open-register"],
        setup(u, {
            emit: v
        }) {
            const p = u,
                r = v,
                d = f(!1),
                x = f(null),
                y = f(null),
                h = f(!1);
            f(null);
            const c = V(),
                m = f(!1),
                {
                    getProfile: I
                } = me(),
                w = f(null),
                b = async () => {
                    try {
                        if (!localStorage.getItem("session-token")) {
                            w.value = null;
                            return
                        }
                        const {
                            data: t,
                            error: C
                        } = await I();
                        if (C) {
                            console.error("Error fetching profile:", C);
                            return
                        }
                        w.value = t
                    } catch (o) {
                        console.error("Error in fetchProfileData:", o)
                    }
                };
            ee(() => p.isLoggedIn, o => {
                o ? b() : w.value = null
            }, {
                immediate: !0
            }), _(() => {
                localStorage.getItem("session-token") && b(), window.addEventListener("profile-updated", b), window.addEventListener("token-changed", b), window.addEventListener("load", b)
            }), E(() => {
                window.removeEventListener("profile-updated", b), window.removeEventListener("token-changed", b), window.removeEventListener("load", b)
            });
            const j = P(() => {
                    var o, t;
                    return ((t = (o = w.value) == null ? void 0 : o.user) == null ? void 0 : t.name) || "المستخدم"
                }),
                S = P(() => {
                    var o, t;
                    return (t = (o = w.value) == null ? void 0 : o.user) != null && t.avatar ? `${w.value.user.avatar}` : xe
                }),
                J = () => {
                    h.value = !h.value
                },
                $ = () => {
                    h.value = !1
                },
                F = () => {
                    r("open-login"), $()
                },
                z = () => {
                    r("open-register"), $()
                };
            _(() => {
                document.addEventListener("click", o => {
                    const t = document.querySelector(".relative");
                    t && !t.contains(o.target) && $()
                }), window.addEventListener("open-login-modal", () => {
                    r("open-login")
                })
            }), E(() => {
                document.removeEventListener("click", $), window.removeEventListener("open-login-modal", () => {
                    r("open-login")
                })
            });
            const R = () => {
                    d.value = !d.value
                },
                O = o => {
                    x.value && y.value && !x.value.contains(o.target) && !y.value.contains(o.target) && (d.value = !1)
                },
                G = async () => {
                    try {
                        localStorage.clear(), window.dispatchEvent(new CustomEvent("invalid-token")), m.value = !1, d.value = !1, c.push("/"), window.location.reload()
                    } catch (o) {
                        console.error("Error during logout:", o)
                    }
                },
                K = () => {
                    m.value = !m.value
                };
            _(() => {
                document.addEventListener("click", o => {
                    const t = document.querySelector(".dropdown-container");
                    t && !t.contains(o.target) && (m.value = !1)
                })
            }), _(() => {
                document.addEventListener("mousedown", O)
            }), E(() => {
                document.removeEventListener("mousedown", O)
            });
            const Q = [{
                    to: "/account/profile/following",
                    icon: "ph:users",
                    text: "المتابَعين"
                }, {
                    to: "/account/settings",
                    icon: "ph:gear",
                    text: "الاعدادات"
                }, {
                    to: "/account/profile/my-ads",
                    icon: "ph:megaphone",
                    text: "إعلاناتي"
                }],
                g = o => {
                    c.push(o), R()
                };
            return (o, t) => {
                const C = Y;
                return a(), l("div", ye, [e("div", we, [e("div", be, [s(C, {
                    to: "/",
                    class: "block"
                }, {
                    default: T(() => [e("img", {
                        src: n(W),
                        alt: "بازار سوريا",
                        class: "h-16 lg:h-14 w-auto transition-all duration-200"
                    }, null, 8, he)]),
                    _: 1
                })]), e("div", ke, [u.isLoggedIn ? (a(), l("button", {
                    key: 0,
                    onClick: t[0] || (t[0] = i => g("/create-ad")),
                    class: "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                }, [s(n(k), {
                    class: "w-5 h-5"
                }), t[12] || (t[12] = e("span", {
                    class: "text-sm font-medium"
                }, "أضف إعلانك", -1))])) : (a(), l("button", {
                    key: 1,
                    onClick: t[1] || (t[1] = i => r("open-login")),
                    class: "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                }, [s(n(k), {
                    class: "w-5 h-5"
                }), t[13] || (t[13] = e("span", {
                    class: "text-sm font-medium"
                }, "أضف إعلانك", -1))])), e("div", _e, [u.isLoggedIn ? (a(), l("div", Ce, [e("button", {
                    onClick: te(K, ["stop"]),
                    class: "flex items-center gap-2 hover:text-green-600 transition-colors"
                }, [e("img", {
                    src: S.value,
                    alt: "User",
                    class: "w-8 h-8 rounded-full object-cover border border-gray-200"
                }, null, 8, Ee), e("span", Ie, L(j.value), 1), s(n(U), {
                    class: se(["w-4 h-4 text-gray-500", {
                        "transform rotate-180": m.value
                    }])
                }, null, 8, ["class"])]), B(e("div", je, [e("div", {
                    onClick: t[2] || (t[2] = i => g("/account")),
                    class: "flex items-center justify-end gap-3 px-4 py-3 border-b border-gray-100 cursor-pointer"
                }, [e("div", Se, [e("p", Re, L(j.value), 1), t[14] || (t[14] = e("p", {
                    class: "text-sm text-gray-500"
                }, "عرض الملف الشخصي", -1))]), e("img", {
                    src: S.value,
                    alt: "User",
                    class: "w-10 h-10 rounded-full object-cover border border-gray-200"
                }, null, 8, Me)]), e("div", De, [e("button", {
                    onClick: t[3] || (t[3] = i => g("/account/profile/my-ads")),
                    class: "flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 w-full"
                }, [s(n(le), {
                    class: "w-5 h-5"
                }), t[15] || (t[15] = e("span", null, "اعلاناتي", -1))]), e("button", {
                    onClick: t[4] || (t[4] = i => g("/account/profile/following")),
                    class: "flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 w-full"
                }, [s(n(ae), {
                    class: "w-5 h-5"
                }), t[16] || (t[16] = e("span", null, "المتابعين", -1))]), e("button", {
                    onClick: t[5] || (t[5] = i => g("/account/chat")),
                    class: "flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 w-full"
                }, [s(n(M), {
                    class: "w-5 h-5"
                }), t[17] || (t[17] = e("span", null, "المحادثات", -1))]), e("button", {
                    onClick: t[6] || (t[6] = i => g("/account/settings")),
                    class: "flex items-center justify-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 w-full"
                }, [s(n(ce), {
                    class: "w-5 h-5"
                }), t[18] || (t[18] = e("span", null, "الاعدادات", -1))]), e("button", {
                    onClick: G,
                    class: "w-full flex items-center justify-start gap-3 px-4 py-2 text-red-600 hover:bg-gray-50 border-t border-gray-100"
                }, [s(n(q), {
                    class: "w-5 h-5"
                }), t[19] || (t[19] = e("span", null, "تسجيل الخروج", -1))])])], 512), [
                    [H, m.value]
                ])])) : (a(), l("div", Le, [e("button", {
                    onClick: J,
                    class: "flex items-center gap-2 hover:text-green-600 transition-colors"
                }, [s(n(ue), {
                    class: "w-5 h-5"
                }), s(n(U), {
                    class: "w-4 h-4"
                })]), B(e("div", $e, [e("button", {
                    onClick: F,
                    class: "block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                }, " تسجيل الدخول "), e("button", {
                    onClick: z,
                    class: "block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                }, " حساب جديد ")], 512), [
                    [H, h.value]
                ])])), e("div", Fe, [u.isLoggedIn ? (a(), l("button", {
                    key: 0,
                    onClick: t[7] || (t[7] = i => g("/account/chat")),
                    class: "flex p-1.5 rounded-full hover:bg-gray-100 transition-colors relative"
                }, [s(n(M), {
                    class: "w-5 h-5 text-gray-500"
                })])) : N("", !0)])])]), e("button", {
                    ref_key: "buttonRef",
                    ref: y,
                    class: "lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    onClick: R
                }, [s(n(ge), {
                    class: "w-6 h-6 text-gray-600"
                })], 512)]), s(oe, {
                    "enter-active-class": "transition duration-200 ease-out",
                    "enter-from-class": "transform -translate-y-full opacity-0",
                    "enter-to-class": "transform translate-y-0 opacity-100",
                    "leave-active-class": "transition duration-200 ease-in",
                    "leave-from-class": "transform translate-y-0 opacity-100",
                    "leave-to-class": "transform -translate-y-full opacity-0"
                }, {
                    default: T(() => [d.value ? (a(), l("div", {
                        key: 0,
                        ref_key: "menuRef",
                        ref: x,
                        class: "lg:hidden fixed mt-20 inset-0 bg-black bg-opacity-50 z-50"
                    }, [e("div", ze, [e("div", Oe, [t[20] || (t[20] = e("h1", {
                        class: "text-xl font-bold"
                    }, "القائمة", -1)), e("div", {
                        class: "mr-auto text-gray-600 border p-2 flex justify-center items-center rounded-full w-fit h-fit cursor-pointer hover:bg-red-600 hover:text-white hover:scale-105 ease-linear duration-150",
                        onClick: R
                    }, [s(n(pe), {
                        size: "25"
                    })])]), e("div", Ge, [u.isLoggedIn ? (a(), l("button", {
                        key: 0,
                        onClick: t[8] || (t[8] = i => g("/create-ad")),
                        class: "w-full flex items-center justify-between px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    }, [s(n(k), {
                        class: "w-5 h-5"
                    }), t[21] || (t[21] = e("span", {
                        class: "text-sm font-medium"
                    }, "+ أضف إعلانك", -1))])) : (a(), l("button", {
                        key: 1,
                        onClick: t[9] || (t[9] = i => r("open-login")),
                        class: "w-full flex items-center justify-between px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    }, [s(n(k), {
                        class: "w-5 h-5"
                    }), t[22] || (t[22] = e("span", {
                        class: "text-sm font-medium"
                    }, "+ أضف إعلانك", -1))]))]), u.isLoggedIn ? (a(), l(D, {
                        key: 0
                    }, [e("div", {
                        class: "flex items-center gap-3 px-4 mb-6 border-b border-gray-100 pb-4 cursor-pointer",
                        onClick: t[10] || (t[10] = i => g("/account"))
                    }, [e("div", Pe, [e("p", Te, L(j.value), 1), t[23] || (t[23] = e("p", {
                        class: "text-sm text-gray-500"
                    }, "أهلاً بك", -1))]), e("img", {
                        src: S.value,
                        alt: "User",
                        class: "w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                    }, null, 8, Be)]), e("div", He, [(a(), l(D, null, A(Q, (i, X) => e("button", {
                        key: X,
                        onClick: at => g(i.to),
                        class: "flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50"
                    }, [s(n(k), {
                        class: "w-5 h-5"
                    }), e("span", null, L(i.text), 1)], 8, Ne)), 64))]), e("div", Ue, [e("button", {
                        onClick: t[11] || (t[11] = i => g("/account/chat")),
                        class: "flex items-center justify-center gap-2"
                    }, [e("div", qe, [s(n(M), {
                        class: "w-6 h-6 text-gray-600"
                    })]), t[24] || (t[24] = e("span", {
                        class: "text-sm text-gray-600"
                    }, "الرسائل", -1))]), e("button", {
                        onClick: G,
                        class: "col-span-2 flex items-center gap-3 py-3 px-4 text-red-600 hover:text-red-700 rounded-lg hover:bg-red-50 border bord er-red-100"
                    }, [s(n(q), {
                        class: "w-5 h-5"
                    }), t[25] || (t[25] = e("span", null, "تسجيل الخروج", -1))])])], 64)) : (a(), l("div", Ve, [e("button", {
                        onClick: F,
                        class: "flex flex-col items-center py-3 px-4 rounded-lg hover:bg-gray-50 group"
                    }, [s(n(ie), {
                        class: "w-6 h-6 text-gray-500 group-hover:text-green-600 mb-1"
                    }), t[26] || (t[26] = e("span", {
                        class: "text-sm text-gray-500 group-hover:text-green-600"
                    }, "تسجيل الدخول", -1))]), e("button", {
                        onClick: z,
                        class: "flex flex-col items-center py-3 px-4 rounded-lg hover:bg-gray-50 group"
                    }, [s(n(de), {
                        class: "w-6 h-6 text-gray-500 group-hover:text-green-600 mb-1"
                    }), t[27] || (t[27] = e("span", {
                        class: "text-sm text-gray-500 group-hover:text-green-600"
                    }, "حساب جديد", -1))])]))])], 512)) : N("", !0)]),
                    _: 1
                })])
            }
        }
    },
    We = Z(Ae, [
        ["__scopeId", "data-v-2841194c"]
    ]),
    Je = {
        class: "bg-white shadow-sm sticky top-0 z-50"
    },
    Ke = {
        class: "container mx-auto px-2 sm:px-4"
    },
    Qe = {
        __name: "Header",
        props: {
            isLoggedIn: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["open-login", "open-register"],
        setup(u) {
            return (v, p) => (a(), l("header", Je, [e("div", Ke, [s(We, {
                onOpenLogin: p[0] || (p[0] = r => v.$emit("open-login")),
                onOpenRegister: p[1] || (p[1] = r => v.$emit("open-register")),
                isLoggedIn: u.isLoggedIn
            }, null, 8, ["isLoggedIn"])])]))
        }
    },
    Xe = {
        class: "bg-white border-t border-gray-100",
        dir: "rtl"
    },
    Ye = {
        class: "container md:w-[90%] mx-auto px-4 pt-16"
    },
    Ze = {
        class: "grid grid-cols-1 md:grid-cols-4 gap-8"
    },
    et = {
        class: "md:col-span-3 flex flex-col justify-start items-start gap-4"
    },
    tt = {
        class: "flex flex-col items-start"
    },
    st = ["src"],
    ot = {
        class: "flex flex-col items-start justify-start"
    },
    nt = {
        class: "space-y-2"
    },
    rt = {
        href: "#",
        class: "text-gray-600 hover:text-green-600 transition-colors text-sm"
    },
    lt = ne({
        __name: "Footer",
        setup(u) {
            const v = ["بيع السيارات", "بيع الاجهزة الالكتروني", "ادوات المنازل", "مستلزمات شخصية", "خدمات اخري"];
            return (p, r) => (a(), l("footer", Xe, [e("div", Ye, [e("div", Ze, [e("div", et, [e("div", tt, [e("img", {
                src: n(W),
                alt: "يلا سوريا",
                class: "h-24 w-auto"
            }, null, 8, st), r[0] || (r[0] = e("p", {
                class: "text-gray-600 text-sm leading-relaxed text-right w-2/3"
            }, " منصة بازار سوريا لبيع جميع الخدمات المستعملة بسهولة من خلال موقعنا من اي مكان و في اي وقت ممكن . ", -1))])]), e("div", ot, [e("ul", nt, [r[1] || (r[1] = e("h1", {
                class: "text-gray-600 text-xl font-extrabold mb-2"
            }, "الخدمات", -1)), (a(), l(D, null, A(v, d => e("li", {
                key: d
            }, [e("a", rt, L(d), 1)])), 64))])])])]), r[2] || (r[2] = e("div", {
                class: "flex flex-row gap-4 justify-center items-center mt-8 bg-black text-white text-center"
            }, [e("p", {
                class: "text-sm leading-relaxed text-right"
            }, "جميع الحقوق محفوظة"), e("p", {
                class: "text-sm leading-relaxed text-right"
            }, "2025")], -1))]))
        }
    }),
    Lt = {
        __name: "default",
        setup(u) {
            const v = V(),
                p = f(null),
                r = f(null),
                d = f(!1);
            _(() => {
                (() => {
                    d.value = !!localStorage.getItem("session-token")
                })();
                const m = () => {
                    d.value = !1, localStorage.removeItem("session-token"), v.push("/")
                };
                window.addEventListener("invalid-token", m), window.addEventListener("open-login-modal", x), window.addEventListener("open-register-modal", y), E(() => {
                    window.removeEventListener("invalid-token", m), window.removeEventListener("open-login-modal", x), window.removeEventListener("open-register-modal", y)
                })
            });
            const x = () => {
                    var c;
                    (c = p.value) == null || c.openModal()
                },
                y = () => {
                    var c;
                    (c = r.value) == null || c.openModal()
                },
                h = () => {
                    d.value = !0
                };
            return (c, m) => {
                const I = Qe,
                    w = lt;
                return a(), l("div", null, [s(I, {
                    onOpenLogin: x,
                    onOpenRegister: y,
                    isLoggedIn: n(d)
                }, null, 8, ["isLoggedIn"]), re(c.$slots, "default"), s(w), s(fe, {
                    ref_key: "loginModal",
                    ref: p,
                    onLoginSuccess: h,
                    onRegisterSuccess: y
                }, null, 512), s(ve, {
                    ref_key: "registerModal",
                    ref: r,
                    onRegisterSuccess: x
                }, null, 512)])
            }
        }
    };
export {
    Lt as
    default
};