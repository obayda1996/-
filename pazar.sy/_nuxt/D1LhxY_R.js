import {
    _ as H,
    J as L,
    r as n,
    c as f,
    x as w,
    y as e,
    b as d,
    a as t,
    w as M,
    T as S,
    A as g,
    B as V,
    t as k,
    I as $,
    N as I,
    o as u,
    K as A
} from "./BHlMq76H.js";
import {
    G as j,
    H as J,
    a as K,
    b as O
} from "./FWHMQTNV.js";
import {
    F as P
} from "./DmZK5evu.js";
import {
    G as B
} from "./DfkNV9S4.js";
import {
    F as Q
} from "./qd-5IJto.js";
import {
    G as U
} from "./D4Idv_Qr.js";
import {
    l as W
} from "./CfHyb9Ak.js";
import {
    u as X
} from "./CsZ24X-G.js";
const Y = {
        key: 0,
        class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    },
    Z = {
        class: "bg-white rounded-lg w-full max-w-md max-h-[90vh] flex flex-col"
    },
    ee = {
        class: "p-6 border-b"
    },
    te = {
        class: "flex justify-end"
    },
    se = {
        class: "flex justify-center mb-4"
    },
    ae = ["src"],
    le = {
        class: "overflow-y-auto p-6 flex-1"
    },
    re = {
        class: "flex justify-center gap-4 mb-8"
    },
    oe = {
        key: 0,
        class: "text-red-500 text-sm text-center"
    },
    ne = {
        class: "block text-sm font-medium text-gray-700 mb-1"
    },
    ie = {
        class: "relative"
    },
    de = ["value", "disabled", "placeholder"],
    ue = {
        class: "relative"
    },
    ce = ["value", "disabled"],
    pe = {
        class: "relative"
    },
    ve = ["value", "disabled"],
    me = {
        class: "relative"
    },
    be = ["value", "disabled"],
    fe = {
        class: "p-6 border-t"
    },
    ge = ["disabled"],
    xe = {
        key: 0
    },
    ye = {
        key: 1
    },
    he = {
        __name: "Register",
        emits: ["register-success"],
        setup(_e, {
            expose: F,
            emit: N
        }) {
            L();
            const {
                register: R
            } = X(), _ = n(!1), o = n("شخصي"), c = n(""), p = n(""), v = n(""), m = n(""), b = n(""), l = n(""), i = n(!1), r = n(!1), T = () => {
                _.value = !0
            }, x = () => {
                _.value = !1, q()
            }, q = () => {
                c.value = "", p.value = "", v.value = "", m.value = "", b.value = "", l.value = "", o.value = "شخصي"
            }, z = N, C = async () => {
                i.value = !0, l.value = "", r.value = !1;
                try {
                    if (!c.value && !p.value) {
                        l.value = "الرجاء إدخال الاسم", r.value = !0;
                        return
                    }
                    if (!v.value) {
                        l.value = "الرجاء إدخال رقم الهاتف", r.value = !0;
                        return
                    }
                    if (!m.value) {
                        l.value = "الرجاء إدخال البريد الإلكتروني", r.value = !0;
                        return
                    }
                    if (!b.value) {
                        l.value = "الرجاء إدخال كلمة المرور", r.value = !0;
                        return
                    }
                    const a = new FormData;
                    o.value === "شخصي" ? (a.append("name", c.value), a.append("role", "user")) : (a.append("name", p.value), a.append("role", "company")), a.append("phone", v.value), a.append("email", m.value), a.append("password", b.value), a.append("avatar", null);
                    const {
                        success: s,
                        error: h,
                        message: G,
                        data: we
                    } = await R(a);
                    if (!s || h) {
                        l.value = G, r.value = !0;
                        return
                    }
                    l.value = G, r.value = !1, setTimeout(() => {
                        x(), z("register-success")
                    }, 2e3)
                } catch (a) {
                    l.value = "حدث خطأ أثناء التسجيل", r.value = !0, console.error("Registration error:", a)
                } finally {
                    i.value = !1
                }
            }, D = () => {
                x(), setTimeout(() => {
                    z("register-success")
                }, 100)
            }, y = a => {
                const {
                    value: s
                } = a.target;
                switch (a.target.placeholder) {
                    case "ادخل اسمك بالكامل":
                    case "ادخل اسم المؤسسة":
                        o.value === "شخصي" ? c.value = s : p.value = s;
                        break;
                    case "ادخل رقم التلفون":
                        v.value = s;
                        break;
                    case "البريد الالكتروني":
                        m.value = s;
                        break;
                    case "كلمة المرور":
                        b.value = s;
                        break
                }
            }, E = () => {
                window.location.href = "https://pazar.sy/api/auth/google"
            };
            return F({
                openModal: T,
                closeModal: x
            }), (a, s) => e(_) ? (u(), f("div", Y, [d(S, {
                "enter-active-class": "transform ease-out duration-300",
                "enter-from-class": "translate-y-2 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition ease-in duration-200",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
            }, {
                default: M(() => [e(l) ? (u(), f("div", {
                    key: 0,
                    class: g(["fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-md z-50 flex items-center gap-2", [e(r) ? "bg-red-100" : "bg-green-100"]])
                }, [(u(), $(I(e(r) ? e(U) : e(A)), {
                    size: 24,
                    class: g([e(r) ? "text-red-500" : "text-green-500"])
                }, null, 8, ["class"])), t("p", {
                    class: g([
                        [e(r) ? "text-red-700" : "text-green-700"], "text-sm font-medium"
                    ])
                }, k(e(l)), 3)], 2)) : w("", !0)]),
                _: 1
            }), t("div", Z, [t("div", ee, [t("div", te, [t("button", {
                onClick: x,
                class: "text-gray-500 hover:text-gray-700"
            }, [d(e(Q), {
                size: 24
            })])]), t("div", se, [t("img", {
                src: e(W),
                alt: "Logo",
                class: "h-12"
            }, null, 8, ae)]), s[2] || (s[2] = t("h2", {
                class: "text-2xl font-bold text-center"
            }, "إنشاء حساب جديد", -1))]), t("div", le, [t("div", re, [t("button", {
                onClick: s[0] || (s[0] = h => o.value = "تجاري"),
                class: g(["flex flex-col items-center p-4 rounded-lg border-2 transition-colors w-32", e(o) === "تجاري" ? "border-green-500" : "border-gray-200"])
            }, [d(e(j), {
                size: 32,
                class: "mb-2"
            }), s[3] || (s[3] = t("span", null, "تجاري", -1))], 2), t("button", {
                onClick: s[1] || (s[1] = h => o.value = "شخصي"),
                class: g(["flex flex-col items-center p-4 rounded-lg border-2 transition-colors w-32", e(o) === "شخصي" ? "border-green-500" : "border-gray-200"])
            }, [d(e(B), {
                size: 32,
                class: "mb-2"
            }), s[4] || (s[4] = t("span", null, "شخصي", -1))], 2)]), t("form", {
                onSubmit: V(C, ["prevent"]),
                class: "space-y-4"
            }, [e(l) ? (u(), f("div", oe, k(e(l)), 1)) : w("", !0), t("div", null, [t("label", ne, k(e(o) === "شخصي" ? "الاسم كامل" : "اسم المؤسسة"), 1), t("div", ie, [t("input", {
                value: e(o) === "شخصي" ? e(c) : e(p),
                type: "text",
                required: "",
                disabled: e(i),
                placeholder: e(o) === "شخصي" ? "ادخل اسمك بالكامل" : "ادخل اسم المؤسسة",
                class: "w-full border rounded-lg py-3 px-4 pr-10",
                dir: "rtl",
                onInput: y
            }, null, 40, de), (u(), $(I(e(o) === "شخصي" ? e(B) : e(j)), {
                size: 20,
                class: "absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
            }))])]), t("div", null, [s[5] || (s[5] = t("label", {
                class: "block text-sm font-medium text-gray-700 mb-1"
            }, " رقم التلفون ", -1)), t("div", ue, [t("input", {
                value: e(v),
                type: "tel",
                required: "",
                disabled: e(i),
                placeholder: "ادخل رقم التلفون",
                class: "w-full border rounded-lg py-3 px-4 pr-10",
                dir: "rtl",
                onInput: y
            }, null, 40, ce), d(e(J), {
                size: 20,
                class: "absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
            })])]), t("div", null, [s[6] || (s[6] = t("label", {
                class: "block text-sm font-medium text-gray-700 mb-1"
            }, " البريد الالكتروني ", -1)), t("div", pe, [t("input", {
                value: e(m),
                type: "email",
                required: "",
                disabled: e(i),
                placeholder: "البريد الالكتروني",
                class: "w-full border rounded-lg py-3 px-4 pr-10",
                dir: "rtl",
                onInput: y
            }, null, 40, ve), d(e(K), {
                size: 20,
                class: "absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
            })])]), t("div", null, [s[7] || (s[7] = t("label", {
                class: "block text-sm font-medium text-gray-700 mb-1"
            }, " كلمة المرور ", -1)), t("div", me, [t("input", {
                value: e(b),
                type: "password",
                required: "",
                disabled: e(i),
                placeholder: "كلمة المرور",
                class: "w-full border rounded-lg py-3 px-4 pr-10",
                dir: "rtl",
                onInput: y
            }, null, 40, be), d(e(O), {
                size: 20,
                class: "absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
            })])])], 32)]), t("div", fe, [t("button", {
                onClick: C,
                type: "button",
                disabled: e(i),
                class: "w-full bg-green-600 text-white rounded-lg py-3 px-4 hover:bg-green-700 disabled:opacity-50 font-medium mb-4"
            }, [e(i) ? (u(), f("span", xe, "جاري التحميل...")) : (u(), f("span", ye, "إنشاء حساب"))], 8, ge), t("button", {
                onClick: E,
                type: "button",
                class: "w-full border border-gray-300 bg-white text-gray-700 rounded-lg py-3 px-4 hover:bg-gray-50 font-medium mb-4 flex items-center justify-center gap-2"
            }, [d(e(P), {
                size: 20,
                class: "text-red-500",
                weight: "fill"
            }), s[8] || (s[8] = t("span", null, "تسجيل الدخول باستخدام جوجل", -1))]), t("p", {
                class: "text-center text-sm"
            }, [s[9] || (s[9] = t("span", {
                class: "text-gray-600"
            }, "عضو جديد في بازار سوريا؟", -1)), t("button", {
                onClick: D,
                class: "text-red-600 hover:text-red-700 font-medium mr-1"
            }, " قم بتسجيل الدخول الآن ")])])])])) : w("", !0)
        }
    },
    Fe = H(he, [
        ["__scopeId", "data-v-c1cc89a1"]
    ]);
export {
    Fe as
    default
};