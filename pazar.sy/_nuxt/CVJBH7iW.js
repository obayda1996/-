import {
    _ as b
} from "./BZ64PvPr.js";
import {
    u as p
} from "./CsZ24X-G.js";
import {
    r as d,
    q as h,
    g as l,
    c as o,
    o as n,
    a,
    b as _,
    x as c,
    w,
    d as C,
    t as u,
    F as f
} from "./BHlMq76H.js";
const S = {
        class: "bg-white border-b"
    },
    k = {
        class: "container w-[90%] mx-auto px-4 py-4"
    },
    B = {
        class: "flex items-center gap-2 text-sm text-gray-500"
    },
    V = {
        key: 0,
        class: "hover:text-green-600 cursor-default"
    },
    E = {
        class: "hover:text-green-600 cursor-default"
    },
    F = {
        class: "text-gray-900 truncate w-1/3"
    },
    H = {
        __name: "HeadNav",
        props: {
            mainNav: {
                type: String,
                default: ""
            },
            subNav: {
                type: String,
                default: ""
            },
            current: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            const {
                getCategoryById: v,
                getSubCategoryById: N
            } = p(), r = s, i = d(""), g = d(""), m = async () => {
                if (r.mainNav) try {
                    const {
                        data: e,
                        error: t
                    } = await v(r.mainNav);
                    if (t) throw t;
                    e && e.category && (i.value = e.category.name)
                } catch (e) {
                    console.error("Error fetching category:", e)
                }
            }, y = async () => {
                if (r.subNav) try {
                    const {
                        data: e,
                        error: t
                    } = await N(r.subNav);
                    if (t) throw t;
                    e && e.subCategory && (g.value = e.subCategory.name)
                } catch (e) {
                    console.error("Error fetching subcategory:", e)
                }
            };
            return h(() => {
                m(), y()
            }), l(() => r.mainNav, () => {
                m()
            }, {
                immediate: !0
            }), l(() => r.subNav, () => {
                y()
            }, {
                immediate: !0
            }), (e, t) => {
                const x = b;
                return n(), o("div", S, [a("div", k, [a("div", B, [_(x, {
                    to: "/",
                    class: "hover:text-green-600"
                }, {
                    default: w(() => t[0] || (t[0] = [C(" الرئيسية ")])),
                    _: 1
                }), t[3] || (t[3] = a("span", {
                    class: "text-gray-400"
                }, "/", -1)), s.mainNav ? (n(), o("button", V, u(i.value), 1)) : c("", !0), s.subNav ? (n(), o(f, {
                    key: 1
                }, [t[1] || (t[1] = a("span", {
                    class: "text-gray-400"
                }, "/", -1)), a("button", E, u(g.value), 1)], 64)) : c("", !0), s.current ? (n(), o(f, {
                    key: 2
                }, [t[2] || (t[2] = a("span", {
                    class: "text-gray-400"
                }, "/", -1)), a("span", F, u(s.current), 1)], 64)) : c("", !0)])])])
            }
        }
    };
export {
    H as _
};