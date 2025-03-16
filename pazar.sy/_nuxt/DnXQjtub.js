import {
    m as V,
    V as o,
    p as h,
    c as a,
    o as e,
    a7 as c,
    x as H,
    a as l,
    a8 as y
} from "./BHlMq76H.js";
const w = ["width", "height", "fill", "transform"],
    f = {
        key: 0
    },
    A = l("path", {
        d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"
    }, null, -1),
    k = [A],
    M = {
        key: 1
    },
    Z = l("path", {
        d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
        opacity: "0.2"
    }, null, -1),
    B = l("path", {
        d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
    }, null, -1),
    x = [Z, B],
    S = {
        key: 2
    },
    z = l("path", {
        d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"
    }, null, -1),
    C = [z],
    N = {
        key: 3
    },
    P = l("path", {
        d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"
    }, null, -1),
    b = [P],
    $ = {
        key: 4
    },
    j = l("path", {
        d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
    }, null, -1),
    E = [j],
    q = {
        key: 5
    },
    D = l("path", {
        d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"
    }, null, -1),
    F = [D],
    I = {
        name: "PhPlus"
    },
    G = V({ ...I,
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
        setup(n) {
            const r = n,
                u = o("weight", "regular"),
                v = o("size", "1em"),
                d = o("color", "currentColor"),
                p = o("mirrored", !1),
                t = h(() => r.weight ? ? u),
                s = h(() => r.size ? ? v),
                g = h(() => r.color ? ? d),
                m = h(() => r.mirrored !== void 0 ? r.mirrored ? "scale(-1, 1)" : void 0 : p ? "scale(-1, 1)" : void 0);
            return (i, W) => (e(), a("svg", y({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: s.value,
                height: s.value,
                fill: g.value,
                transform: m.value
            }, i.$attrs), [c(i.$slots, "default"), t.value === "bold" ? (e(), a("g", f, k)) : t.value === "duotone" ? (e(), a("g", M, x)) : t.value === "fill" ? (e(), a("g", S, C)) : t.value === "light" ? (e(), a("g", N, b)) : t.value === "regular" ? (e(), a("g", $, E)) : t.value === "thin" ? (e(), a("g", q, F)) : H("", !0)], 16, w))
        }
    });
export {
    G as I
};