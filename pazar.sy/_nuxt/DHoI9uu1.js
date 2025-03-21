import {
    m as v,
    V as o,
    p as i,
    c as e,
    o as l,
    a7 as w,
    x as y,
    a,
    a8 as H
} from "./BHlMq76H.js";
const A = ["width", "height", "fill", "transform"],
    L = {
        key: 0
    },
    f = a("path", {
        d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
    }, null, -1),
    k = [f],
    M = {
        key: 1
    },
    Z = a("path", {
        d: "M216,128l-72,72V56Z",
        opacity: "0.2"
    }, null, -1),
    V = a("path", {
        d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
    }, null, -1),
    B = [Z, V],
    x = {
        key: 2
    },
    S = a("path", {
        d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
    }, null, -1),
    z = [S],
    C = {
        key: 3
    },
    N = a("path", {
        d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
    }, null, -1),
    b = [N],
    P = {
        key: 4
    },
    $ = a("path", {
        d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
    }, null, -1),
    j = [$],
    E = {
        key: 5
    },
    R = a("path", {
        d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
    }, null, -1),
    q = [R],
    F = {
        name: "PhArrowRight"
    },
    D = v({ ...F,
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
                h = o("size", "1em"),
                p = o("color", "currentColor"),
                g = o("mirrored", !1),
                t = i(() => r.weight ? ? d),
                s = i(() => r.size ? ? h),
                m = i(() => r.color ? ? p),
                c = i(() => r.mirrored !== void 0 ? r.mirrored ? "scale(-1, 1)" : void 0 : g ? "scale(-1, 1)" : void 0);
            return (n, W) => (l(), e("svg", H({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: s.value,
                height: s.value,
                fill: m.value,
                transform: c.value
            }, n.$attrs), [w(n.$slots, "default"), t.value === "bold" ? (l(), e("g", L, k)) : t.value === "duotone" ? (l(), e("g", M, B)) : t.value === "fill" ? (l(), e("g", x, z)) : t.value === "light" ? (l(), e("g", C, b)) : t.value === "regular" ? (l(), e("g", P, j)) : t.value === "thin" ? (l(), e("g", E, q)) : y("", !0)], 16, A))
        }
    });
export {
    D as F
};