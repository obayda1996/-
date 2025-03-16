import {
    m as c,
    V as r,
    p as m,
    c as e,
    o as a,
    a7 as Z,
    x as A,
    a as l,
    a8 as y
} from "./BHlMq76H.js";
const w = ["width", "height", "fill", "transform"],
    f = {
        key: 0
    },
    k = l("path", {
        d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"
    }, null, -1),
    V = [k],
    M = {
        key: 1
    },
    H = l("path", {
        d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
        opacity: "0.2"
    }, null, -1),
    B = l("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
    }, null, -1),
    x = [H, B],
    C = {
        key: 2
    },
    S = l("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"
    }, null, -1),
    z = [S],
    N = {
        key: 3
    },
    b = l("path", {
        d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"
    }, null, -1),
    P = [b],
    $ = {
        key: 4
    },
    j = l("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
    }, null, -1),
    E = [j],
    q = {
        key: 5
    },
    D = l("path", {
        d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"
    }, null, -1),
    F = [D],
    I = {
        name: "PhClock"
    },
    G = c({ ...I,
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
            const o = n,
                u = r("weight", "regular"),
                h = r("size", "1em"),
                d = r("color", "currentColor"),
                p = r("mirrored", !1),
                t = m(() => o.weight ? ? u),
                i = m(() => o.size ? ? h),
                v = m(() => o.color ? ? d),
                g = m(() => o.mirrored !== void 0 ? o.mirrored ? "scale(-1, 1)" : void 0 : p ? "scale(-1, 1)" : void 0);
            return (s, W) => (a(), e("svg", y({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: i.value,
                height: i.value,
                fill: v.value,
                transform: g.value
            }, s.$attrs), [Z(s.$slots, "default"), t.value === "bold" ? (a(), e("g", f, V)) : t.value === "duotone" ? (a(), e("g", M, x)) : t.value === "fill" ? (a(), e("g", C, z)) : t.value === "light" ? (a(), e("g", N, P)) : t.value === "regular" ? (a(), e("g", $, E)) : t.value === "thin" ? (a(), e("g", q, F)) : A("", !0)], 16, w))
        }
    });
export {
    G as I
};