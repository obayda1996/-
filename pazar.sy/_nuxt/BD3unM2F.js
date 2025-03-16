import {
    m,
    V as o,
    p as i,
    c as e,
    o as l,
    a7 as $,
    x as w,
    a,
    a8 as y
} from "./BHlMq76H.js";
const M = ["width", "height", "fill", "transform"],
    Z = {
        key: 0
    },
    k = a("path", {
        d: "M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"
    }, null, -1),
    L = [k],
    A = {
        key: 1
    },
    V = a("path", {
        d: "M160,48V208L80,128Z",
        opacity: "0.2"
    }, null, -1),
    B = a("path", {
        d: "M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"
    }, null, -1),
    S = [V, B],
    x = {
        key: 2
    },
    z = a("path", {
        d: "M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"
    }, null, -1),
    C = [z],
    b = {
        key: 3
    },
    N = a("path", {
        d: "M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"
    }, null, -1),
    P = [N],
    j = {
        key: 4
    },
    D = a("path", {
        d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
    }, null, -1),
    E = [D],
    R = {
        key: 5
    },
    q = a("path", {
        d: "M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"
    }, null, -1),
    G = [q],
    U = {
        name: "PhCaretLeft"
    },
    g1 = m({ ...U,
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
        setup(s) {
            const r = s,
                g = o("weight", "regular"),
                h = o("size", "1em"),
                d = o("color", "currentColor"),
                p = o("mirrored", !1),
                t = i(() => r.weight ? ? g),
                u = i(() => r.size ? ? h),
                c = i(() => r.color ? ? d),
                v = i(() => r.mirrored !== void 0 ? r.mirrored ? "scale(-1, 1)" : void 0 : p ? "scale(-1, 1)" : void 0);
            return (n, f) => (l(), e("svg", y({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: u.value,
                height: u.value,
                fill: c.value,
                transform: v.value
            }, n.$attrs), [$(n.$slots, "default"), t.value === "bold" ? (l(), e("g", Z, L)) : t.value === "duotone" ? (l(), e("g", A, S)) : t.value === "fill" ? (l(), e("g", x, C)) : t.value === "light" ? (l(), e("g", b, P)) : t.value === "regular" ? (l(), e("g", j, E)) : t.value === "thin" ? (l(), e("g", R, G)) : w("", !0)], 16, M))
        }
    }),
    W = ["width", "height", "fill", "transform"],
    _ = {
        key: 0
    },
    F = a("path", {
        d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"
    }, null, -1),
    H = [F],
    I = {
        key: 1
    },
    J = a("path", {
        d: "M176,128,96,208V48Z",
        opacity: "0.2"
    }, null, -1),
    K = a("path", {
        d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"
    }, null, -1),
    O = [J, K],
    Q = {
        key: 2
    },
    T = a("path", {
        d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"
    }, null, -1),
    X = [T],
    Y = {
        key: 3
    },
    e1 = a("path", {
        d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"
    }, null, -1),
    l1 = [e1],
    a1 = {
        key: 4
    },
    t1 = a("path", {
        d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
    }, null, -1),
    r1 = [t1],
    o1 = {
        key: 5
    },
    i1 = a("path", {
        d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"
    }, null, -1),
    u1 = [i1],
    n1 = {
        name: "PhCaretRight"
    },
    h1 = m({ ...n1,
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
        setup(s) {
            const r = s,
                g = o("weight", "regular"),
                h = o("size", "1em"),
                d = o("color", "currentColor"),
                p = o("mirrored", !1),
                t = i(() => r.weight ? ? g),
                u = i(() => r.size ? ? h),
                c = i(() => r.color ? ? d),
                v = i(() => r.mirrored !== void 0 ? r.mirrored ? "scale(-1, 1)" : void 0 : p ? "scale(-1, 1)" : void 0);
            return (n, f) => (l(), e("svg", y({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 256",
                width: u.value,
                height: u.value,
                fill: c.value,
                transform: v.value
            }, n.$attrs), [$(n.$slots, "default"), t.value === "bold" ? (l(), e("g", _, H)) : t.value === "duotone" ? (l(), e("g", I, O)) : t.value === "fill" ? (l(), e("g", Q, X)) : t.value === "light" ? (l(), e("g", Y, l1)) : t.value === "regular" ? (l(), e("g", a1, r1)) : t.value === "thin" ? (l(), e("g", o1, u1)) : w("", !0)], 16, W))
        }
    }),
    d1 = "" + new URL("car.DkUGfrf8.jpg",
        import.meta.url).href;
export {
    h1 as G, g1 as H, d1 as c
};