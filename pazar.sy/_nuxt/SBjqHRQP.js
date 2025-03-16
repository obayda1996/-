import {
    _ as K,
    r as d,
    c as n,
    x as w,
    a as l,
    b as L,
    y as g,
    t as x,
    A as k,
    I as T,
    N as R,
    B as V,
    C as y,
    D as b,
    d as C,
    F as G,
    z as H,
    o as r,
    ac as O,
    K as J
} from "./BHlMq76H.js";
import {
    u as Q
} from "./CsZ24X-G.js";
import {
    F as W
} from "./qd-5IJto.js";
import {
    l as X
} from "./CfHyb9Ak.js";
const Y = {
        key: 0,
        class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    },
    Z = {
        class: "bg-white rounded-lg p-8 max-w-md w-full mx-4"
    },
    $ = {
        class: "flex justify-end mb-4"
    },
    ee = {
        class: "flex justify-center mb-6"
    },
    te = ["src"],
    se = {
        class: "text-2xl font-bold text-center mb-8"
    },
    le = {
        class: "flex items-center"
    },
    ae = ["disabled"],
    oe = ["disabled"],
    re = {
        key: 0
    },
    ne = {
        key: 1
    },
    ue = {
        key: 2,
        class: "space-y-6"
    },
    ie = {
        class: "text-center text-gray-600 text-sm"
    },
    de = {
        class: "flex justify-center gap-4",
        dir: "ltr"
    },
    ce = ["onUpdate:modelValue", "onInput", "onKeydown"],
    ve = ["disabled"],
    pe = {
        key: 0
    },
    fe = {
        key: 1
    },
    me = ["disabled"],
    ge = ["disabled"],
    ye = ["disabled"],
    be = {
        key: 0
    },
    _e = {
        key: 1
    },
    he = {
        __name: "ForgotPassword",
        setup(we, {
            expose: q
        }) {
            const {
                forgetPassword: A,
                verifyForgetPasswordCode: D,
                resetPassword: F
            } = Q(), _ = d(!1), c = d(""), u = d(["", "", "", ""]), o = d(!1), a = d(""), p = d(""), v = d("email"), f = d(""), m = d(""), j = () => {
                _.value = !0
            }, h = () => {
                _.value = !1, B()
            }, B = () => {
                c.value = "", u.value = ["", "", "", ""], a.value = "", p.value = "", v.value = "email", f.value = "", m.value = ""
            }, P = async () => {
                if (!c.value) {
                    a.value = "الرجاء إدخال البريد الإلكتروني";
                    return
                }
                o.value = !0;
                try {
                    const {
                        error: s,
                        message: e
                    } = await A({
                        email: c.value
                    });
                    if (s) {
                        a.value = e || "حدث خطأ أثناء إرسال رمز التحقق";
                        return
                    }
                    p.value = e || "تم إرسال رمز التحقق إلى بريدك الإلكتروني", v.value = "verification"
                } catch {
                    a.value = "حدث خطأ أثناء إرسال رمز التحقق"
                } finally {
                    o.value = !1
                }
            }, M = (s, e) => {
                const t = e.target.value.replace(/[^0-9]/g, "");
                u.value[s] = t, t && s < 3 && document.querySelectorAll(".code-input")[s + 1].focus()
            }, z = (s, e) => {
                if (e.key === "Backspace")
                    if (!u.value[s] && s > 0) {
                        const t = document.querySelectorAll(".code-input");
                        u.value[s - 1] = "", t[s - 1].focus()
                    } else u.value[s] = "";
                else e.key === "ArrowRight" && s < 3 ? document.querySelectorAll(".code-input")[s + 1].focus() : e.key === "ArrowLeft" && s > 0 && document.querySelectorAll(".code-input")[s - 1].focus()
            }, E = s => {
                s.preventDefault();
                const e = s.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 4);
                if (e) {
                    const t = e.split("");
                    t.forEach((i, S) => {
                        S < 4 && (u.value[S] = i)
                    }), t.length === 4 && document.querySelectorAll(".code-input")[3].focus()
                }
            }, I = async () => {
                const s = u.value.join("");
                if (s.length !== 4) {
                    a.value = "الرجاء إدخال رمز التحقق كاملاً";
                    return
                }
                o.value = !0;
                try {
                    const {
                        error: e,
                        message: t
                    } = await D({
                        email: c.value,
                        code: s
                    });
                    if (e) {
                        a.value = t;
                        return
                    }
                    p.value = t, v.value = "password"
                } catch {
                    a.value = "حدث خطأ أثناء التحقق من الرمز"
                } finally {
                    o.value = !1
                }
            }, N = async () => {
                if (!f.value || !m.value) {
                    a.value = "الرجاء إدخال كلمة المرور وتأكيدها";
                    return
                }
                if (f.value !== m.value) {
                    a.value = "كلمتا المرور غير متطابقتين";
                    return
                }
                o.value = !0;
                try {
                    const {
                        error: s,
                        message: e
                    } = await F({
                        email: c.value,
                        code: u.value.join(""),
                        password: f.value,
                        confirmPassword: m.value
                    });
                    if (s) {
                        a.value = e;
                        return
                    }
                    p.value = e, setTimeout(() => {
                        h();
                        const t = document.querySelector("#login-modal");
                        t && t.__vueParentComponent.exposed.openModal()
                    }, 2e3)
                } catch {
                    a.value = "حدث خطأ أثناء تغيير كلمة المرور"
                } finally {
                    o.value = !1
                }
            }, U = () => {
                P()
            };
            return q({
                openModal: j,
                closeModal: h
            }), (s, e) => _.value ? (r(), n("div", Y, [l("div", Z, [l("div", $, [l("button", {
                onClick: h,
                class: "text-gray-500 hover:text-gray-700"
            }, [L(g(W), {
                size: 24
            })])]), l("div", ee, [l("img", {
                src: g(X),
                alt: "Logo",
                class: "h-12"
            }, null, 8, te)]), l("h2", se, x(v.value === "email" ? "نسيت كلمة المرور" : v.value === "verification" ? "تحقق من الرمز" : "تعيين كلمة المرور الجديدة"), 1), a.value || p.value ? (r(), n("div", {
                key: 0,
                class: k(["mb-4 p-4 rounded-lg", [a.value ? "bg-red-100" : "bg-green-100"]])
            }, [l("div", le, [(r(), T(R(a.value ? g(O) : g(J)), {
                size: 24,
                class: k([
                    [a.value ? "text-red-500" : "text-green-500"], "mr-2"
                ])
            }, null, 8, ["class"])), l("p", {
                class: k([a.value ? "text-red-700" : "text-green-700"])
            }, x(a.value || p.value), 3)])], 2)) : w("", !0), v.value === "email" ? (r(), n("form", {
                key: 1,
                onSubmit: V(P, ["prevent"]),
                class: "space-y-4"
            }, [l("div", null, [y(l("input", {
                "onUpdate:modelValue": e[0] || (e[0] = t => c.value = t),
                type: "email",
                required: "",
                disabled: o.value,
                placeholder: "البريد الإلكتروني",
                class: "w-full border rounded-lg py-3 px-4 text-right",
                dir: "rtl"
            }, null, 8, ae), [
                [b, c.value]
            ])]), l("button", {
                type: "submit",
                disabled: o.value,
                class: "w-full bg-green-600 text-white rounded-lg py-3 px-4 hover:bg-green-700 disabled:opacity-50"
            }, [o.value ? (r(), n("span", re, "جاري الإرسال...")) : (r(), n("span", ne, "إرسال رمز التحقق"))], 8, oe)], 32)) : v.value === "verification" ? (r(), n("div", ue, [l("p", ie, [e[3] || (e[3] = C(" يرجى إدخال الرمز الذي تم إرساله إلى البريد ")), e[4] || (e[4] = l("br", null, null, -1)), C(" " + x(c.value), 1)]), l("div", de, [(r(), n(G, null, H(4, t => y(l("input", {
                key: t,
                "onUpdate:modelValue": i => u.value[t - 1] = i,
                type: "text",
                inputmode: "numeric",
                maxlength: "1",
                class: "code-input w-12 h-12 border rounded-lg text-center text-xl focus:border-green-500 focus:ring-1 focus:ring-green-500",
                onInput: i => M(t - 1, i),
                onKeydown: i => z(t - 1, i),
                onPaste: E
            }, null, 40, ce), [
                [b, u.value[t - 1]]
            ])), 64))]), l("button", {
                onClick: I,
                disabled: o.value || u.value.some(t => !t),
                class: "w-full bg-green-600 text-white rounded-lg py-3 px-4 hover:bg-green-700 disabled:opacity-50"
            }, [o.value ? (r(), n("span", pe, "جاري التحقق...")) : (r(), n("span", fe, "تحقق من الرمز"))], 8, ve), l("p", {
                class: "text-center text-sm"
            }, [e[5] || (e[5] = C(" لم تستلم الرمز؟ ")), l("button", {
                onClick: U,
                class: "text-green-600 hover:text-green-700"
            }, " إعادة إرسال رمز ")])])) : v.value === "password" ? (r(), n("form", {
                key: 3,
                onSubmit: V(N, ["prevent"]),
                class: "space-y-4"
            }, [l("div", null, [y(l("input", {
                "onUpdate:modelValue": e[1] || (e[1] = t => f.value = t),
                type: "password",
                required: "",
                disabled: o.value,
                placeholder: "كلمة المرور الجديدة",
                class: "w-full border rounded-lg py-3 px-4 text-right",
                dir: "rtl"
            }, null, 8, me), [
                [b, f.value]
            ])]), l("div", null, [y(l("input", {
                "onUpdate:modelValue": e[2] || (e[2] = t => m.value = t),
                type: "password",
                required: "",
                disabled: o.value,
                placeholder: "تأكيد كلمة المرور الجديدة",
                class: "w-full border rounded-lg py-3 px-4 text-right",
                dir: "rtl"
            }, null, 8, ge), [
                [b, m.value]
            ])]), l("button", {
                type: "submit",
                disabled: o.value,
                class: "w-full bg-green-600 text-white rounded-lg py-3 px-4 hover:bg-green-700 disabled:opacity-50"
            }, [o.value ? (r(), n("span", be, "جاري الحفظ...")) : (r(), n("span", _e, "تغيير كلمة المرور"))], 8, ye)], 32)) : w("", !0)])])) : w("", !0)
        }
    },
    Se = K(he, [
        ["__scopeId", "data-v-ea4d5761"]
    ]);
export {
    Se as
    default
};