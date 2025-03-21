import {
    m as v,
    V as o,
    p as i,
    c as e,
    o as a,
    a7 as w,
    x as y,
    a as l,
    a8 as H
} from "./BHlMq76H.js";
const f = ["width", "height", "fill", "transform"],
    k = {
        key: 0
    },
    A = l("path", {
        d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"
    }, null, -1),
    M = [A],
    Z = {
        key: 1
    },
    L = l("path", {
        d: "M112,56V200L40,128Z",
        opacity: "0.2"
    }, null, -1),
    V = l("path", {
        d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"
    }, null, -1),
    B = [L, V],
    x = {
        key: 2
    },
    S = l("path", {
        d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"
    }, null, -1),
    z = [S],
    C = {
        key: 3
    },
    N = l("path", {
        d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"
    }, null, -1),
    b = [N],
    P = {
        key: 4
    },
    $ = l("path", {
        d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
    }, null, -1),
    j = [$],
    E = {
        key: 5
    },
    q = l("path", {
        d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"
    }, null, -1),
    D = [q],
    G = {
        name: "PhArrowLeft"
    },
    F = v({ ...G,
        props: {
            weight: {
                type: String
            },
            size: {
                type: [String, Number]
            },
            color: {
                type: String
            },
            mirrored: {
                type: Boolean
            }
        },
        setup(u) {
            const r = u,
                d = o("weight", "regular"),
                p = o("size", "1em"),
                h = o("color", "currentColor"),
                g = o("mirrored", !1),
                t = i(() => r.weight ? ? d),
                s = i(() => r.size ? ? p),
                m = i(() => r.color ? ? h),
                c = i(() => r.mirrored !== void 0 ? r.mirrored ? "scale(-1, 1)" : void 0 : g ? "scale(-1, 1)" : void 0);
            return (n, W) => (a(), e("svg", H({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: s.value,
                height: s.value,
                fill: m.value,
                transform: c.value
            }, n.$attrs), [w(n.$slots, "default"), t.value === "bold" ? (a(), e("g", k, M)) : t.value === "duotone" ? (a(), e("g", Z, B)) : t.value === "fill" ? (a(), e("g", x, z)) : t.value === "light" ? (a(), e("g", C, b)) : t.value === "regular" ? (a(), e("g", P, j)) : t.value === "thin" ? (a(), e("g", E, D)) : y("", !0)], 16, f))
        }
    });
export {
    F as G
};