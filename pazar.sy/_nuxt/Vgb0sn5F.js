import {
    m as v,
    V as o,
    p as i,
    c as e,
    o as a,
    a7 as w,
    x as y,
    a as l,
    a8 as k
} from "./BHlMq76H.js";
const f = ["width", "height", "fill", "transform"],
    M = {
        key: 0
    },
    Z = l("path", {
        d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"
    }, null, -1),
    V = [Z],
    L = {
        key: 1
    },
    B = l("path", {
        d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
        opacity: "0.2"
    }, null, -1),
    x = l("path", {
        d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"
    }, null, -1),
    A = [B, x],
    C = {
        key: 2
    },
    H = l("path", {
        d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"
    }, null, -1),
    S = [H],
    z = {
        key: 3
    },
    N = l("path", {
        d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"
    }, null, -1),
    b = [N],
    P = {
        key: 4
    },
    $ = l("path", {
        d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
    }, null, -1),
    j = [$],
    E = {
        key: 5
    },
    q = l("path", {
        d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"
    }, null, -1),
    D = [q],
    G = {
        name: "PhCheck"
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
                g = o("color", "currentColor"),
                h = o("mirrored", !1),
                t = i(() => r.weight ? ? d),
                s = i(() => r.size ? ? p),
                m = i(() => r.color ? ? g),
                c = i(() => r.mirrored !== void 0 ? r.mirrored ? "scale(-1, 1)" : void 0 : h ? "scale(-1, 1)" : void 0);
            return (n, W) => (a(), e("svg", k({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: s.value,
                height: s.value,
                fill: m.value,
                transform: c.value
            }, n.$attrs), [w(n.$slots, "default"), t.value === "bold" ? (a(), e("g", M, V)) : t.value === "duotone" ? (a(), e("g", L, A)) : t.value === "fill" ? (a(), e("g", C, S)) : t.value === "light" ? (a(), e("g", z, b)) : t.value === "regular" ? (a(), e("g", P, j)) : t.value === "thin" ? (a(), e("g", E, D)) : y("", !0)], 16, f))
        }
    });
export {
    F as G
};