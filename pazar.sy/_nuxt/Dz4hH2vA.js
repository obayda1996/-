import {
    _ as D
} from "./BZ64PvPr.js";
import {
    _ as E,
    p as h,
    r as S,
    q as $,
    I as A,
    o as p,
    w as B,
    a as e,
    c as F,
    x as N,
    A as g,
    B as P,
    b as u,
    y as m,
    t as r
} from "./BHlMq76H.js";
import {
    I as j
} from "./VZ3oj85K.js";
import {
    I as L
} from "./BN_hgBW2.js";
import {
    I as T
} from "./jvb20aaj.js";
import {
    G as U
} from "./DfkNV9S4.js";
import {
    u as V
} from "./CsZ24X-G.js";
const q = {
        class: "bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    },
    G = {
        class: "flex flex-col md:flex-row"
    },
    M = {
        class: "md:w-1/3 relative"
    },
    z = ["src", "alt"],
    O = {
        class: "md:w-2/3 p-4"
    },
    H = {
        class: "flex justify-between items-start mb-3"
    },
    J = {
        class: "text-2xl font-bold text-green-600"
    },
    K = {
        class: "text-xl font-semibold mb-3 truncate w-2/3"
    },
    Q = {
        class: "space-y-3 text-sm text-gray-600"
    },
    R = {
        class: "flex items-center gap-2"
    },
    W = {
        class: "font-medium w-2/3 line-clamp-2"
    },
    X = {
        class: "flex items-center gap-2"
    },
    Y = {
        class: "flex items-center justify-between"
    },
    Z = {
        class: "flex items-center gap-2"
    },
    tt = {
        class: "flex items-center gap-2"
    },
    et = {
        __name: "ProductCard",
        props: {
            product: {
                type: Object,
                required: !0,
                default: () => ({
                    _id: "",
                    advTitle: "",
                    advDescription: "",
                    category: "",
                    contact: "chat",
                    createdAt: "",
                    creator: {
                        name: ""
                    },
                    gallery: [],
                    location: {
                        lat: "",
                        long: "",
                        city: "",
                        region: ""
                    },
                    modifiedAt: "",
                    price: 0,
                    specialProperties: [],
                    subCategory: "",
                    __v: 0
                })
            }
        },
        emits: ["click"],
        setup(o) {
            const {
                addToFavorites: w,
                removeFromFavorites: _,
                getFavoriteAds: x
            } = V(), n = (t, s = "success") => {
                const i = new CustomEvent("show-notification", {
                    detail: {
                        message: t,
                        type: s
                    }
                });
                window.dispatchEvent(i)
            }, d = h(() => !!localStorage.getItem("session-token")), a = o, l = S(new Set), c = h(() => l.value.has(a.product._id)), y = async () => {
                if (d.value) try {
                    const {
                        data: t,
                        error: s
                    } = await x();
                    !s && t && (l.value = new Set(t.map(i => i._id)))
                } catch (t) {
                    console.error("Error fetching favorite ads:", t), n("حدث خطأ في تحميل المفضلة", "error")
                }
            };
            $(() => {
                d.value && y()
            });
            const b = async t => {
                    if (t.preventDefault(), !d.value) {
                        window.dispatchEvent(new CustomEvent("open-login-modal"));
                        return
                    }
                    try {
                        const {
                            error: s
                        } = c.value ? await _(a.product._id) : await w(a.product._id);
                        if (s) throw s;
                        c.value ? (l.value.delete(a.product._id), n("تم الإزالة من المفضلة بنجاح")) : (l.value.add(a.product._id), n("تمت الإضافة إلى المفضلة بنجاح"))
                    } catch (s) {
                        console.error("Error toggling favorite:", s), n("حدث خطأ في تحديث المفضلة", "error")
                    }
                },
                k = t => t ? new Date(t).toLocaleDateString("en-GB") : "",
                C = t => !t || !t.region || !t.city ? "" : `${t.region}, ${t.city}`,
                I = t => t ? t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
            return (t, s) => {
                const i = D;
                return p(), A(i, {
                    to: o.product._id ? `/products/${o.product._id}` : "#",
                    class: "block",
                    onClick: s[0] || (s[0] = f => t.$emit("click"))
                }, {
                    default: B(() => {
                        var f, v;
                        return [e("div", q, [e("div", G, [e("div", M, [e("img", {
                            src: ((f = o.product.gallery) == null ? void 0 : f[0]) || "https://via.placeholder.com/300",
                            alt: o.product.advTitle || "Product Image",
                            class: "w-full h-52 object-cover"
                        }, null, 8, z), d.value ? (p(), F("button", {
                            key: 0,
                            onClick: P(b, ["prevent"]),
                            class: g(["absolute top-3 right-3 p-2 flex justify-center items-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors", {
                                "text-red-500": c.value
                            }])
                        }, [u(m(L), {
                            class: g(["w-5 h-5", c.value ? "text-red-500" : "text-gray-600"]),
                            weight: c.value ? "fill" : "regular"
                        }, null, 8, ["weight", "class"])], 2)) : N("", !0)]), e("div", O, [e("div", H, [e("h3", J, r(I(o.product.price)) + " " + r(o.product.priceCurrency === "USD" ? "$" : "ل.س"), 1)]), e("h4", K, r(o.product.advTitle || "No Title"), 1), e("div", Q, [e("div", R, [e("span", W, r(o.product.advDescription || "No Description"), 1)]), e("div", X, [u(m(T), {
                            class: "w-4 h-4"
                        }), e("span", null, r(C(o.product.location) || "Location not specified"), 1)]), e("div", Y, [e("div", Z, [u(m(j), {
                            class: "w-4 h-4"
                        }), e("span", null, r(k(o.product.createdAt) || "Date not available"), 1)]), e("div", tt, [u(m(U), {
                            class: "w-4 h-4"
                        }), e("span", null, "عضو " + r(((v = o.product.creator) == null ? void 0 : v.name) || "Unknown"), 1)])])])])])])]
                    }),
                    _: 1
                }, 8, ["to"])
            }
        }
    },
    dt = E(et, [
        ["__scopeId", "data-v-b5c3e41d"]
    ]);
export {
    dt as P
};