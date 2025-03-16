import {
    m as v,
    V as r,
    p as i,
    c as e,
    o as a,
    a7 as A,
    x as w,
    a as l,
    a8 as y
} from "./BHlMq76H.js";
const f = ["width", "height", "fill", "transform"],
    k = {
        key: 0
    },
    Z = l("path", {
        d: "M228,128a100,100,0,1,1-22.86-63.64,12,12,0,0,1-18.51,15.28A76,76,0,1,0,203.05,140H128a12,12,0,0,1,0-24h88A12,12,0,0,1,228,128Z"
    }, null, -1),
    M = [Z],
    H = {
        key: 1
    },
    B = l("path", {
        d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",
        opacity: "0.2"
    }, null, -1),
    x = l("path", {
        d: "M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"
    }, null, -1),
    S = [B, x],
    z = {
        key: 2
    },
    C = l("path", {
        d: "M128,24A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm0,184A80,80,0,1,1,181.34,68.37a8,8,0,0,1-10.67,11.92A64,64,0,1,0,191.5,136H128a8,8,0,0,1,0-16h72a8,8,0,0,1,8,8A80.09,80.09,0,0,1,128,208Z"
    }, null, -1),
    N = [C],
    V = {
        key: 3
    },
    b = l("path", {
        d: "M222,128a94,94,0,1,1-21.49-59.82,6,6,0,1,1-9.25,7.64A82,82,0,1,0,209.78,134H128a6,6,0,0,1,0-12h88A6,6,0,0,1,222,128Z"
    }, null, -1),
    P = [b],
    $ = {
        key: 4
    },
    j = l("path", {
        d: "M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"
    }, null, -1),
    E = [j],
    G = {
        key: 5
    },
    L = l("path", {
        d: "M220,128a92,92,0,1,1-21-58.55,4,4,0,0,1-6.17,5.1A84,84,0,1,0,211.91,132H128a4,4,0,0,1,0-8h88A4,4,0,0,1,220,128Z"
    }, null, -1),
    q = [L],
    F = {
        name: "PhGoogleLogo"
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
            const o = u,
                h = r("weight", "regular"),
                d = r("size", "1em"),
                g = r("color", "currentColor"),
                p = r("mirrored", !1),
                t = i(() => o.weight ? ? h),
                n = i(() => o.size ? ? d),
                m = i(() => o.color ? ? g),
                c = i(() => o.mirrored !== void 0 ? o.mirrored ? "scale(-1, 1)" : void 0 : p ? "scale(-1, 1)" : void 0);
            return (s, W) => (a(), e("svg", y({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: n.value,
                height: n.value,
                fill: m.value,
                transform: c.value
            }, s.$attrs), [A(s.$slots, "default"), t.value === "bold" ? (a(), e("g", k, M)) : t.value === "duotone" ? (a(), e("g", H, S)) : t.value === "fill" ? (a(), e("g", z, N)) : t.value === "light" ? (a(), e("g", V, P)) : t.value === "regular" ? (a(), e("g", $, E)) : t.value === "thin" ? (a(), e("g", G, q)) : w("", !0)], 16, f))
        }
    });
export {
    D as F
};