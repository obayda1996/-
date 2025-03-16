import {
    r as o,
    g as j,
    q as B,
    v as E,
    c as l,
    x as w,
    b as u,
    a as e,
    y as c,
    t as y,
    B as R,
    C as _,
    D as k,
    d as q,
    A as C,
    F as D,
    u as S,
    o as a,
    ac as U,
    K as G
} from "./BHlMq76H.js";
import {
    u as A
} from "./CsZ24X-G.js";
import {
    F as H
} from "./DmZK5evu.js";
import {
    F as K
} from "./qd-5IJto.js";
import O from "./SBjqHRQP.js";
import {
    l as $
} from "./CfHyb9Ak.js";
const I = {
        key: 0,
        class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    },
    J = {
        class: "bg-white rounded-lg p-8 max-w-md w-full mx-4"
    },
    Q = {
        class: "flex justify-end mb-4"
    },
    W = {
        class: "flex justify-center mb-6"
    },
    X = ["src"],
    Y = {
        key: 0,
        class: "text-red-500 text-sm text-center mb-4"
    },
    Z = ["disabled"],
    ee = ["disabled"],
    se = ["disabled"],
    te = {
        key: 0
    },
    oe = {
        key: 1
    },
    le = {
        class: "space-y-4"
    },
    ae = {
        class: "flex items-center"
    },
    ne = {
        key: 0
    },
    re = {
        key: 1
    },
    ge = {
        __name: "Login",
        emits: ["login-success"],
        setup(ie, {
            expose: F,
            emit: z
        }) {
            S();
            const {
                login: L
            } = A(), g = o(!1), m = o(""), v = o(""), t = o(""), r = o(!1), p = o(""), f = o(!1);
            j(() => [t.value, p.value], ([n, s]) => {
                (n || s) && (f.value = !0, setTimeout(() => {
                    f.value = !1
                }, 1500))
            }, {
                immediate: !0
            });
            const x = () => {
                    g.value = !0
                },
                i = () => {
                    g.value = !1, m.value = "", v.value = "", t.value = ""
                },
                b = z,
                M = async () => {
                    r.value = !0, t.value = "", p.value = "";
                    try {
                        const {
                            data: n,
                            error: s,
                            message: d
                        } = await L({
                            email: m.value,
                            password: v.value
                        });
                        if (s) {
                            t.value = d || "فشل تسجيل الدخول. يرجى التحقق من بياناتك.";
                            return
                        }
                        p.value = "تم تسجيل الدخول بنجاح", await new Promise(P => setTimeout(P, 1500)), b("login-success"), i(), window.location.reload()
                    } catch {
                        t.value = "حدث خطأ أثناء تسجيل الدخول"
                    } finally {
                        r.value = !1
                    }
                },
                T = () => {
                    window.location.href = "https://pazar.sy/api/auth/google"
                },
                V = () => {
                    i(), setTimeout(() => {
                        b("register-success")
                    }, 100)
                },
                h = o(null),
                N = () => {
                    i(), setTimeout(() => {
                        var n;
                        (n = h.value) == null || n.openModal()
                    }, 100)
                };
            return B(() => {
                window.addEventListener("open-login-modal", x)
            }), E(() => {
                window.removeEventListener("open-login-modal", x)
            }), F({
                openModal: x,
                closeModal: i
            }), (n, s) => (a(), l(D, null, [g.value ? (a(), l("div", I, [e("div", J, [e("div", Q, [e("button", {
                onClick: i,
                class: "text-gray-500 hover:text-gray-700"
            }, [u(c(K), {
                size: 24
            })])]), e("div", W, [e("img", {
                src: c($),
                alt: "Logo",
                class: "h-12"
            }, null, 8, X)]), s[4] || (s[4] = e("h2", {
                class: "text-2xl font-bold text-center mb-8"
            }, "تسجيل الدخول لحسابك", -1)), t.value ? (a(), l("div", Y, y(t.value), 1)) : w("", !0), e("form", {
                onSubmit: R(M, ["prevent"]),
                class: "space-y-4 mb-6"
            }, [e("div", null, [_(e("input", {
                "onUpdate:modelValue": s[0] || (s[0] = d => m.value = d),
                type: "email",
                required: "",
                disabled: r.value,
                placeholder: "البريد الإلكتروني",
                class: "w-full border rounded-lg py-3 px-4"
            }, null, 8, Z), [
                [k, m.value]
            ])]), e("div", null, [_(e("input", {
                "onUpdate:modelValue": s[1] || (s[1] = d => v.value = d),
                type: "password",
                required: "",
                disabled: r.value,
                placeholder: "كلمة المرور",
                class: "w-full border rounded-lg py-3 px-4"
            }, null, 8, ee), [
                [k, v.value]
            ])]), e("button", {
                type: "submit",
                disabled: r.value,
                class: "w-full bg-green-600 text-white rounded-lg py-3 px-4 hover:bg-green-700 disabled:opacity-50"
            }, [r.value ? (a(), l("span", te, "جاري التحميل...")) : (a(), l("span", oe, "تسجيل الدخول"))], 8, se)], 32), e("div", {
                class: "text-center mb-4"
            }, [e("button", {
                onClick: N,
                class: "text-green-600 hover:text-green-700 text-sm"
            }, " نسيت كلمة المرور؟ ")]), e("div", le, [e("button", {
                onClick: T,
                class: "w-full flex items-center justify-center gap-2 border rounded-lg py-3 px-4 hover:bg-gray-50"
            }, [u(c(H), {
                size: 20,
                class: "text-red-500",
                weight: "fill"
            }), s[2] || (s[2] = e("span", null, "تسجيل الدخول باستخدام جوجل", -1))])]), e("p", {
                class: "text-center mt-6 text-sm"
            }, [s[3] || (s[3] = q(" عضو جديد في يازار سوريا؟ ")), e("button", {
                onClick: V,
                class: "text-red-600 hover:text-red-700"
            }, " تسجيل حساب جديد ")])])])) : w("", !0), f.value ? (a(), l("div", {
                key: 1,
                class: C(["fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-md z-50", [t.value ? "bg-red-100" : "bg-green-100"]])
            }, [e("div", ae, [t.value ? (a(), l("div", ne, [u(c(U), {
                class: "w-6 h-6 mr-2 text-red-500"
            })])) : (a(), l("div", re, [u(c(G), {
                class: "w-6 h-6 mr-2 text-green-500"
            })])), e("p", {
                class: C([t.value ? "text-red-700" : "text-green-700"])
            }, y(t.value || p.value), 3)])], 2)) : w("", !0), u(O, {
                ref_key: "forgotPasswordRef",
                ref: h
            }, null, 512)], 64))
        }
    };
export {
    ge as
    default
};