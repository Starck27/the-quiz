var w2 = Object.defineProperty;
var x2 = (e, u, r) =>
  u in e
    ? w2(e, u, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[u] = r);
var de = (e, u, r) => x2(e, typeof u != "symbol" ? u + "" : u, r);
(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) t(n);
  new MutationObserver((n) => {
    for (const l of n)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && t(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
    const l = {};
    return (
      n.integrity && (l.integrity = n.integrity),
      n.referrerPolicy && (l.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function t(n) {
    if (n.ep) return;
    n.ep = !0;
    const l = r(n);
    fetch(n.href, l);
  }
})();
var Nn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function la(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var oa = { exports: {} },
  pn = {},
  ia = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ut = Symbol.for("react.element"),
  B2 = Symbol.for("react.portal"),
  k2 = Symbol.for("react.fragment"),
  F2 = Symbol.for("react.strict_mode"),
  S2 = Symbol.for("react.profiler"),
  q2 = Symbol.for("react.provider"),
  L2 = Symbol.for("react.context"),
  N2 = Symbol.for("react.forward_ref"),
  T2 = Symbol.for("react.suspense"),
  R2 = Symbol.for("react.memo"),
  z2 = Symbol.for("react.lazy"),
  Yo = Symbol.iterator;
function P2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yo && e[Yo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var aa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sa = Object.assign,
  ca = {};
function dr(e, u, r) {
  (this.props = e),
    (this.context = u),
    (this.refs = ca),
    (this.updater = r || aa);
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function (e, u) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, u, "setState");
};
dr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fa() {}
fa.prototype = dr.prototype;
function Kl(e, u, r) {
  (this.props = e),
    (this.context = u),
    (this.refs = ca),
    (this.updater = r || aa);
}
var Zl = (Kl.prototype = new fa());
Zl.constructor = Kl;
sa(Zl, dr.prototype);
Zl.isPureReactComponent = !0;
var Ko = Array.isArray,
  da = Object.prototype.hasOwnProperty,
  Jl = { current: null },
  pa = { key: !0, ref: !0, __self: !0, __source: !0 };
function ma(e, u, r) {
  var t,
    n = {},
    l = null,
    o = null;
  if (u != null)
    for (t in (u.ref !== void 0 && (o = u.ref),
    u.key !== void 0 && (l = "" + u.key),
    u))
      da.call(u, t) && !pa.hasOwnProperty(t) && (n[t] = u[t]);
  var i = arguments.length - 2;
  if (i === 1) n.children = r;
  else if (1 < i) {
    for (var a = Array(i), c = 0; c < i; c++) a[c] = arguments[c + 2];
    n.children = a;
  }
  if (e && e.defaultProps)
    for (t in ((i = e.defaultProps), i)) n[t] === void 0 && (n[t] = i[t]);
  return {
    $$typeof: ut,
    type: e,
    key: l,
    ref: o,
    props: n,
    _owner: Jl.current,
  };
}
function _2(e, u) {
  return {
    $$typeof: ut,
    type: e.type,
    key: u,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ut;
}
function U2(e) {
  var u = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return u[r];
    })
  );
}
var Zo = /\/+/g;
function Tn(e, u) {
  return typeof e == "object" && e !== null && e.key != null
    ? U2("" + e.key)
    : u.toString(36);
}
function St(e, u, r, t, n) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ut:
          case B2:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (n = n(o)),
      (e = t === "" ? "." + Tn(o, 0) : t),
      Ko(n)
        ? ((r = ""),
          e != null && (r = e.replace(Zo, "$&/") + "/"),
          St(n, u, r, "", function (c) {
            return c;
          }))
        : n != null &&
          (Xl(n) &&
            (n = _2(
              n,
              r +
                (!n.key || (o && o.key === n.key)
                  ? ""
                  : ("" + n.key).replace(Zo, "$&/") + "/") +
                e
            )),
          u.push(n)),
      1
    );
  if (((o = 0), (t = t === "" ? "." : t + ":"), Ko(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var a = t + Tn(l, i);
      o += St(l, u, r, a, n);
    }
  else if (((a = P2(e)), typeof a == "function"))
    for (e = a.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (a = t + Tn(l, i++)), (o += St(l, u, r, a, n));
  else if (l === "object")
    throw (
      ((u = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (u === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : u) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ft(e, u, r) {
  if (e == null) return e;
  var t = [],
    n = 0;
  return (
    St(e, t, "", "", function (l) {
      return u.call(r, l, n++);
    }),
    t
  );
}
function I2(e) {
  if (e._status === -1) {
    var u = e._result;
    (u = u()),
      u.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = u));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  qt = { transition: null },
  j2 = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: qt,
    ReactCurrentOwner: Jl,
  };
function ha() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: ft,
  forEach: function (e, u, r) {
    ft(
      e,
      function () {
        u.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var u = 0;
    return (
      ft(e, function () {
        u++;
      }),
      u
    );
  },
  toArray: function (e) {
    return (
      ft(e, function (u) {
        return u;
      }) || []
    );
  },
  only: function (e) {
    if (!Xl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = dr;
T.Fragment = k2;
T.Profiler = S2;
T.PureComponent = Kl;
T.StrictMode = F2;
T.Suspense = T2;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j2;
T.act = ha;
T.cloneElement = function (e, u, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var t = sa({}, e.props),
    n = e.key,
    l = e.ref,
    o = e._owner;
  if (u != null) {
    if (
      (u.ref !== void 0 && ((l = u.ref), (o = Jl.current)),
      u.key !== void 0 && (n = "" + u.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (a in u)
      da.call(u, a) &&
        !pa.hasOwnProperty(a) &&
        (t[a] = u[a] === void 0 && i !== void 0 ? i[a] : u[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) t.children = r;
  else if (1 < a) {
    i = Array(a);
    for (var c = 0; c < a; c++) i[c] = arguments[c + 2];
    t.children = i;
  }
  return { $$typeof: ut, type: e.type, key: n, ref: l, props: t, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: L2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: q2, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ma;
T.createFactory = function (e) {
  var u = ma.bind(null, e);
  return (u.type = e), u;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: N2, render: e };
};
T.isValidElement = Xl;
T.lazy = function (e) {
  return { $$typeof: z2, _payload: { _status: -1, _result: e }, _init: I2 };
};
T.memo = function (e, u) {
  return { $$typeof: R2, type: e, compare: u === void 0 ? null : u };
};
T.startTransition = function (e) {
  var u = qt.transition;
  qt.transition = {};
  try {
    e();
  } finally {
    qt.transition = u;
  }
};
T.unstable_act = ha;
T.useCallback = function (e, u) {
  return se.current.useCallback(e, u);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, u) {
  return se.current.useEffect(e, u);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, u, r) {
  return se.current.useImperativeHandle(e, u, r);
};
T.useInsertionEffect = function (e, u) {
  return se.current.useInsertionEffect(e, u);
};
T.useLayoutEffect = function (e, u) {
  return se.current.useLayoutEffect(e, u);
};
T.useMemo = function (e, u) {
  return se.current.useMemo(e, u);
};
T.useReducer = function (e, u, r) {
  return se.current.useReducer(e, u, r);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, u, r) {
  return se.current.useSyncExternalStore(e, u, r);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.3.1";
ia.exports = T;
var eo = ia.exports;
const mn = la(eo);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O2 = eo,
  b2 = Symbol.for("react.element"),
  V2 = Symbol.for("react.fragment"),
  M2 = Object.prototype.hasOwnProperty,
  H2 = O2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  G2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ga(e, u, r) {
  var t,
    n = {},
    l = null,
    o = null;
  r !== void 0 && (l = "" + r),
    u.key !== void 0 && (l = "" + u.key),
    u.ref !== void 0 && (o = u.ref);
  for (t in u) M2.call(u, t) && !G2.hasOwnProperty(t) && (n[t] = u[t]);
  if (e && e.defaultProps)
    for (t in ((u = e.defaultProps), u)) n[t] === void 0 && (n[t] = u[t]);
  return {
    $$typeof: b2,
    type: e,
    key: l,
    ref: o,
    props: n,
    _owner: H2.current,
  };
}
pn.Fragment = V2;
pn.jsx = ga;
pn.jsxs = ga;
oa.exports = pn;
var y = oa.exports,
  Da = { exports: {} },
  xe = {},
  va = { exports: {} },
  ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function u(w, v) {
    var k = w.length;
    w.push(v);
    e: for (; 0 < k; ) {
      var L = (k - 1) >>> 1,
        z = w[L];
      if (0 < n(z, v)) (w[L] = v), (w[k] = z), (k = L);
      else break e;
    }
  }
  function r(w) {
    return w.length === 0 ? null : w[0];
  }
  function t(w) {
    if (w.length === 0) return null;
    var v = w[0],
      k = w.pop();
    if (k !== v) {
      w[0] = k;
      e: for (var L = 0, z = w.length, ke = z >>> 1; L < ke; ) {
        var ye = 2 * (L + 1) - 1,
          ru = w[ye],
          fe = ye + 1,
          Q = w[fe];
        if (0 > n(ru, k))
          fe < z && 0 > n(Q, ru)
            ? ((w[L] = Q), (w[fe] = k), (L = fe))
            : ((w[L] = ru), (w[ye] = k), (L = ye));
        else if (fe < z && 0 > n(Q, k)) (w[L] = Q), (w[fe] = k), (L = fe);
        else break e;
      }
    }
    return v;
  }
  function n(w, v) {
    var k = w.sortIndex - v.sortIndex;
    return k !== 0 ? k : w.id - v.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      i = o.now();
    e.unstable_now = function () {
      return o.now() - i;
    };
  }
  var a = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    A = !1,
    E = !1,
    C = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(w) {
    for (var v = r(c); v !== null; ) {
      if (v.callback === null) t(c);
      else if (v.startTime <= w)
        t(c), (v.sortIndex = v.expirationTime), u(a, v);
      else break;
      v = r(c);
    }
  }
  function g(w) {
    if (((C = !1), d(w), !E))
      if (r(a) !== null) (E = !0), hr(x);
      else {
        var v = r(c);
        v !== null && Ge(g, v.startTime - w);
      }
  }
  function x(w, v) {
    (E = !1), C && ((C = !1), f(q), (q = -1)), (A = !0);
    var k = p;
    try {
      for (
        d(v), m = r(a);
        m !== null && (!(m.expirationTime > v) || (w && !ve()));

      ) {
        var L = m.callback;
        if (typeof L == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var z = L(m.expirationTime <= v);
          (v = e.unstable_now()),
            typeof z == "function" ? (m.callback = z) : m === r(a) && t(a),
            d(v);
        } else t(a);
        m = r(a);
      }
      if (m !== null) var ke = !0;
      else {
        var ye = r(c);
        ye !== null && Ge(g, ye.startTime - v), (ke = !1);
      }
      return ke;
    } finally {
      (m = null), (p = k), (A = !1);
    }
  }
  var S = !1,
    F = null,
    q = -1,
    O = 5,
    N = -1;
  function ve() {
    return !(e.unstable_now() - N < O);
  }
  function wu() {
    if (F !== null) {
      var w = e.unstable_now();
      N = w;
      var v = !0;
      try {
        v = F(!0, w);
      } finally {
        v ? re() : ((S = !1), (F = null));
      }
    } else S = !1;
  }
  var re;
  if (typeof s == "function")
    re = function () {
      s(wu);
    };
  else if (typeof MessageChannel < "u") {
    var Iu = new MessageChannel(),
      ju = Iu.port2;
    (Iu.port1.onmessage = wu),
      (re = function () {
        ju.postMessage(null);
      });
  } else
    re = function () {
      _(wu, 0);
    };
  function hr(w) {
    (F = w), S || ((S = !0), re());
  }
  function Ge(w, v) {
    q = _(function () {
      w(e.unstable_now());
    }, v);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (w) {
      w.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || A || ((E = !0), hr(x));
    }),
    (e.unstable_forceFrameRate = function (w) {
      0 > w || 125 < w
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < w ? Math.floor(1e3 / w) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(a);
    }),
    (e.unstable_next = function (w) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var v = 3;
          break;
        default:
          v = p;
      }
      var k = p;
      p = v;
      try {
        return w();
      } finally {
        p = k;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (w, v) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var k = p;
      p = w;
      try {
        return v();
      } finally {
        p = k;
      }
    }),
    (e.unstable_scheduleCallback = function (w, v, k) {
      var L = e.unstable_now();
      switch (
        (typeof k == "object" && k !== null
          ? ((k = k.delay), (k = typeof k == "number" && 0 < k ? L + k : L))
          : (k = L),
        w)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = k + z),
        (w = {
          id: h++,
          callback: v,
          priorityLevel: w,
          startTime: k,
          expirationTime: z,
          sortIndex: -1,
        }),
        k > L
          ? ((w.sortIndex = k),
            u(c, w),
            r(a) === null &&
              w === r(c) &&
              (C ? (f(q), (q = -1)) : (C = !0), Ge(g, k - L)))
          : ((w.sortIndex = z), u(a, w), E || A || ((E = !0), hr(x))),
        w
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (w) {
      var v = p;
      return function () {
        var k = p;
        p = v;
        try {
          return w.apply(this, arguments);
        } finally {
          p = k;
        }
      };
    });
})(ya);
va.exports = ya;
var Q2 = va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $2 = eo,
  we = Q2;
function D(e) {
  for (
    var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    u += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    u +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Aa = new Set(),
  Ir = {};
function _u(e, u) {
  lr(e, u), lr(e + "Capture", u);
}
function lr(e, u) {
  for (Ir[e] = u, e = 0; e < u.length; e++) Aa.add(u[e]);
}
var Ze = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  nl = Object.prototype.hasOwnProperty,
  W2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Jo = {},
  Xo = {};
function Y2(e) {
  return nl.call(Xo, e)
    ? !0
    : nl.call(Jo, e)
    ? !1
    : W2.test(e)
    ? (Xo[e] = !0)
    : ((Jo[e] = !0), !1);
}
function K2(e, u, r, t) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof u) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return t
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Z2(e, u, r, t) {
  if (u === null || typeof u > "u" || K2(e, u, r, t)) return !0;
  if (t) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !u;
      case 4:
        return u === !1;
      case 5:
        return isNaN(u);
      case 6:
        return isNaN(u) || 1 > u;
    }
  return !1;
}
function ce(e, u, r, t, n, l, o) {
  (this.acceptsBooleans = u === 2 || u === 3 || u === 4),
    (this.attributeName = t),
    (this.attributeNamespace = n),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = u),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var u = e[0];
  ue[u] = new ce(u, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uo = /[\-:]([a-z])/g;
function ro(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var u = e.replace(uo, ro);
    ue[u] = new ce(u, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var u = e.replace(uo, ro);
    ue[u] = new ce(u, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var u = e.replace(uo, ro);
  ue[u] = new ce(u, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function to(e, u, r, t) {
  var n = ue.hasOwnProperty(u) ? ue[u] : null;
  (n !== null
    ? n.type !== 0
    : t ||
      !(2 < u.length) ||
      (u[0] !== "o" && u[0] !== "O") ||
      (u[1] !== "n" && u[1] !== "N")) &&
    (Z2(u, r, n, t) && (r = null),
    t || n === null
      ? Y2(u) && (r === null ? e.removeAttribute(u) : e.setAttribute(u, "" + r))
      : n.mustUseProperty
      ? (e[n.propertyName] = r === null ? (n.type === 3 ? !1 : "") : r)
      : ((u = n.attributeName),
        (t = n.attributeNamespace),
        r === null
          ? e.removeAttribute(u)
          : ((n = n.type),
            (r = n === 3 || (n === 4 && r === !0) ? "" : "" + r),
            t ? e.setAttributeNS(t, u, r) : e.setAttribute(u, r))));
}
var uu = $2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dt = Symbol.for("react.element"),
  bu = Symbol.for("react.portal"),
  Vu = Symbol.for("react.fragment"),
  no = Symbol.for("react.strict_mode"),
  ll = Symbol.for("react.profiler"),
  Ea = Symbol.for("react.provider"),
  Ca = Symbol.for("react.context"),
  lo = Symbol.for("react.forward_ref"),
  ol = Symbol.for("react.suspense"),
  il = Symbol.for("react.suspense_list"),
  oo = Symbol.for("react.memo"),
  nu = Symbol.for("react.lazy"),
  wa = Symbol.for("react.offscreen"),
  ei = Symbol.iterator;
function gr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ei && e[ei]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Rn;
function xr(e) {
  if (Rn === void 0)
    try {
      throw Error();
    } catch (r) {
      var u = r.stack.trim().match(/\n( *(at )?)/);
      Rn = (u && u[1]) || "";
    }
  return (
    `
` +
    Rn +
    e
  );
}
var zn = !1;
function Pn(e, u) {
  if (!e || zn) return "";
  zn = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (u)
      if (
        ((u = function () {
          throw Error();
        }),
        Object.defineProperty(u.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(u, []);
        } catch (c) {
          var t = c;
        }
        Reflect.construct(e, [], u);
      } else {
        try {
          u.call();
        } catch (c) {
          t = c;
        }
        e.call(u.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        t = c;
      }
      e();
    }
  } catch (c) {
    if (c && t && typeof c.stack == "string") {
      for (
        var n = c.stack.split(`
`),
          l = t.stack.split(`
`),
          o = n.length - 1,
          i = l.length - 1;
        1 <= o && 0 <= i && n[o] !== l[i];

      )
        i--;
      for (; 1 <= o && 0 <= i; o--, i--)
        if (n[o] !== l[i]) {
          if (o !== 1 || i !== 1)
            do
              if ((o--, i--, 0 > i || n[o] !== l[i])) {
                var a =
                  `
` + n[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= i);
          break;
        }
    }
  } finally {
    (zn = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? xr(e) : "";
}
function J2(e) {
  switch (e.tag) {
    case 5:
      return xr(e.type);
    case 16:
      return xr("Lazy");
    case 13:
      return xr("Suspense");
    case 19:
      return xr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Pn(e.type, !1)), e;
    case 11:
      return (e = Pn(e.type.render, !1)), e;
    case 1:
      return (e = Pn(e.type, !0)), e;
    default:
      return "";
  }
}
function al(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vu:
      return "Fragment";
    case bu:
      return "Portal";
    case ll:
      return "Profiler";
    case no:
      return "StrictMode";
    case ol:
      return "Suspense";
    case il:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ca:
        return (e.displayName || "Context") + ".Consumer";
      case Ea:
        return (e._context.displayName || "Context") + ".Provider";
      case lo:
        var u = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = u.displayName || u.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case oo:
        return (
          (u = e.displayName || null), u !== null ? u : al(e.type) || "Memo"
        );
      case nu:
        (u = e._payload), (e = e._init);
        try {
          return al(e(u));
        } catch {}
    }
  return null;
}
function X2(e) {
  var u = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (u.displayName || "Context") + ".Consumer";
    case 10:
      return (u._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = u.render),
        (e = e.displayName || e.name || ""),
        u.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return u;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return al(u);
    case 8:
      return u === no ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof u == "function") return u.displayName || u.name || null;
      if (typeof u == "string") return u;
  }
  return null;
}
function vu(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function xa(e) {
  var u = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (u === "checkbox" || u === "radio")
  );
}
function ec(e) {
  var u = xa(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, u),
    t = "" + e[u];
  if (
    !e.hasOwnProperty(u) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var n = r.get,
      l = r.set;
    return (
      Object.defineProperty(e, u, {
        configurable: !0,
        get: function () {
          return n.call(this);
        },
        set: function (o) {
          (t = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, u, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return t;
        },
        setValue: function (o) {
          t = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[u];
        },
      }
    );
  }
}
function pt(e) {
  e._valueTracker || (e._valueTracker = ec(e));
}
function Ba(e) {
  if (!e) return !1;
  var u = e._valueTracker;
  if (!u) return !0;
  var r = u.getValue(),
    t = "";
  return (
    e && (t = xa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = t),
    e !== r ? (u.setValue(e), !0) : !1
  );
}
function Ot(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sl(e, u) {
  var r = u.checked;
  return H({}, u, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function ui(e, u) {
  var r = u.defaultValue == null ? "" : u.defaultValue,
    t = u.checked != null ? u.checked : u.defaultChecked;
  (r = vu(u.value != null ? u.value : r)),
    (e._wrapperState = {
      initialChecked: t,
      initialValue: r,
      controlled:
        u.type === "checkbox" || u.type === "radio"
          ? u.checked != null
          : u.value != null,
    });
}
function ka(e, u) {
  (u = u.checked), u != null && to(e, "checked", u, !1);
}
function cl(e, u) {
  ka(e, u);
  var r = vu(u.value),
    t = u.type;
  if (r != null)
    t === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (t === "submit" || t === "reset") {
    e.removeAttribute("value");
    return;
  }
  u.hasOwnProperty("value")
    ? fl(e, u.type, r)
    : u.hasOwnProperty("defaultValue") && fl(e, u.type, vu(u.defaultValue)),
    u.checked == null &&
      u.defaultChecked != null &&
      (e.defaultChecked = !!u.defaultChecked);
}
function ri(e, u, r) {
  if (u.hasOwnProperty("value") || u.hasOwnProperty("defaultValue")) {
    var t = u.type;
    if (
      !(
        (t !== "submit" && t !== "reset") ||
        (u.value !== void 0 && u.value !== null)
      )
    )
      return;
    (u = "" + e._wrapperState.initialValue),
      r || u === e.value || (e.value = u),
      (e.defaultValue = u);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function fl(e, u, r) {
  (u !== "number" || Ot(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Br = Array.isArray;
function Xu(e, u, r, t) {
  if (((e = e.options), u)) {
    u = {};
    for (var n = 0; n < r.length; n++) u["$" + r[n]] = !0;
    for (r = 0; r < e.length; r++)
      (n = u.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== n && (e[r].selected = n),
        n && t && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + vu(r), u = null, n = 0; n < e.length; n++) {
      if (e[n].value === r) {
        (e[n].selected = !0), t && (e[n].defaultSelected = !0);
        return;
      }
      u !== null || e[n].disabled || (u = e[n]);
    }
    u !== null && (u.selected = !0);
  }
}
function dl(e, u) {
  if (u.dangerouslySetInnerHTML != null) throw Error(D(91));
  return H({}, u, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ti(e, u) {
  var r = u.value;
  if (r == null) {
    if (((r = u.children), (u = u.defaultValue), r != null)) {
      if (u != null) throw Error(D(92));
      if (Br(r)) {
        if (1 < r.length) throw Error(D(93));
        r = r[0];
      }
      u = r;
    }
    u == null && (u = ""), (r = u);
  }
  e._wrapperState = { initialValue: vu(r) };
}
function Fa(e, u) {
  var r = vu(u.value),
    t = vu(u.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    u.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    t != null && (e.defaultValue = "" + t);
}
function ni(e) {
  var u = e.textContent;
  u === e._wrapperState.initialValue && u !== "" && u !== null && (e.value = u);
}
function Sa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pl(e, u) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sa(u)
    : e === "http://www.w3.org/2000/svg" && u === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mt,
  qa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (u, r, t, n) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(u, r, t, n);
          });
        }
      : e;
  })(function (e, u) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = u;
    else {
      for (
        mt = mt || document.createElement("div"),
          mt.innerHTML = "<svg>" + u.valueOf().toString() + "</svg>",
          u = mt.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; u.firstChild; ) e.appendChild(u.firstChild);
    }
  });
function jr(e, u) {
  if (u) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = u;
      return;
    }
  }
  e.textContent = u;
}
var qr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  uc = ["Webkit", "ms", "Moz", "O"];
Object.keys(qr).forEach(function (e) {
  uc.forEach(function (u) {
    (u = u + e.charAt(0).toUpperCase() + e.substring(1)), (qr[u] = qr[e]);
  });
});
function La(e, u, r) {
  return u == null || typeof u == "boolean" || u === ""
    ? ""
    : r || typeof u != "number" || u === 0 || (qr.hasOwnProperty(e) && qr[e])
    ? ("" + u).trim()
    : u + "px";
}
function Na(e, u) {
  e = e.style;
  for (var r in u)
    if (u.hasOwnProperty(r)) {
      var t = r.indexOf("--") === 0,
        n = La(r, u[r], t);
      r === "float" && (r = "cssFloat"), t ? e.setProperty(r, n) : (e[r] = n);
    }
}
var rc = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ml(e, u) {
  if (u) {
    if (rc[e] && (u.children != null || u.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (u.dangerouslySetInnerHTML != null) {
      if (u.children != null) throw Error(D(60));
      if (
        typeof u.dangerouslySetInnerHTML != "object" ||
        !("__html" in u.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (u.style != null && typeof u.style != "object") throw Error(D(62));
  }
}
function hl(e, u) {
  if (e.indexOf("-") === -1) return typeof u.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gl = null;
function io(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Dl = null,
  er = null,
  ur = null;
function li(e) {
  if ((e = nt(e))) {
    if (typeof Dl != "function") throw Error(D(280));
    var u = e.stateNode;
    u && ((u = yn(u)), Dl(e.stateNode, e.type, u));
  }
}
function Ta(e) {
  er ? (ur ? ur.push(e) : (ur = [e])) : (er = e);
}
function Ra() {
  if (er) {
    var e = er,
      u = ur;
    if (((ur = er = null), li(e), u)) for (e = 0; e < u.length; e++) li(u[e]);
  }
}
function za(e, u) {
  return e(u);
}
function Pa() {}
var _n = !1;
function _a(e, u, r) {
  if (_n) return e(u, r);
  _n = !0;
  try {
    return za(e, u, r);
  } finally {
    (_n = !1), (er !== null || ur !== null) && (Pa(), Ra());
  }
}
function Or(e, u) {
  var r = e.stateNode;
  if (r === null) return null;
  var t = yn(r);
  if (t === null) return null;
  r = t[u];
  e: switch (u) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (t = !t.disabled) ||
        ((e = e.type),
        (t = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !t);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(D(231, u, typeof r));
  return r;
}
var vl = !1;
if (Ze)
  try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", {
      get: function () {
        vl = !0;
      },
    }),
      window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr);
  } catch {
    vl = !1;
  }
function tc(e, u, r, t, n, l, o, i, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    u.apply(r, c);
  } catch (h) {
    this.onError(h);
  }
}
var Lr = !1,
  bt = null,
  Vt = !1,
  yl = null,
  nc = {
    onError: function (e) {
      (Lr = !0), (bt = e);
    },
  };
function lc(e, u, r, t, n, l, o, i, a) {
  (Lr = !1), (bt = null), tc.apply(nc, arguments);
}
function oc(e, u, r, t, n, l, o, i, a) {
  if ((lc.apply(this, arguments), Lr)) {
    if (Lr) {
      var c = bt;
      (Lr = !1), (bt = null);
    } else throw Error(D(198));
    Vt || ((Vt = !0), (yl = c));
  }
}
function Uu(e) {
  var u = e,
    r = e;
  if (e.alternate) for (; u.return; ) u = u.return;
  else {
    e = u;
    do (u = e), u.flags & 4098 && (r = u.return), (e = u.return);
    while (e);
  }
  return u.tag === 3 ? r : null;
}
function Ua(e) {
  if (e.tag === 13) {
    var u = e.memoizedState;
    if (
      (u === null && ((e = e.alternate), e !== null && (u = e.memoizedState)),
      u !== null)
    )
      return u.dehydrated;
  }
  return null;
}
function oi(e) {
  if (Uu(e) !== e) throw Error(D(188));
}
function ic(e) {
  var u = e.alternate;
  if (!u) {
    if (((u = Uu(e)), u === null)) throw Error(D(188));
    return u !== e ? null : e;
  }
  for (var r = e, t = u; ; ) {
    var n = r.return;
    if (n === null) break;
    var l = n.alternate;
    if (l === null) {
      if (((t = n.return), t !== null)) {
        r = t;
        continue;
      }
      break;
    }
    if (n.child === l.child) {
      for (l = n.child; l; ) {
        if (l === r) return oi(n), e;
        if (l === t) return oi(n), u;
        l = l.sibling;
      }
      throw Error(D(188));
    }
    if (r.return !== t.return) (r = n), (t = l);
    else {
      for (var o = !1, i = n.child; i; ) {
        if (i === r) {
          (o = !0), (r = n), (t = l);
          break;
        }
        if (i === t) {
          (o = !0), (t = n), (r = l);
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = l.child; i; ) {
          if (i === r) {
            (o = !0), (r = l), (t = n);
            break;
          }
          if (i === t) {
            (o = !0), (t = l), (r = n);
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(D(189));
      }
    }
    if (r.alternate !== t) throw Error(D(190));
  }
  if (r.tag !== 3) throw Error(D(188));
  return r.stateNode.current === r ? e : u;
}
function Ia(e) {
  return (e = ic(e)), e !== null ? ja(e) : null;
}
function ja(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var u = ja(e);
    if (u !== null) return u;
    e = e.sibling;
  }
  return null;
}
var Oa = we.unstable_scheduleCallback,
  ii = we.unstable_cancelCallback,
  ac = we.unstable_shouldYield,
  sc = we.unstable_requestPaint,
  $ = we.unstable_now,
  cc = we.unstable_getCurrentPriorityLevel,
  ao = we.unstable_ImmediatePriority,
  ba = we.unstable_UserBlockingPriority,
  Mt = we.unstable_NormalPriority,
  fc = we.unstable_LowPriority,
  Va = we.unstable_IdlePriority,
  hn = null,
  Me = null;
function dc(e) {
  if (Me && typeof Me.onCommitFiberRoot == "function")
    try {
      Me.onCommitFiberRoot(hn, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : hc,
  pc = Math.log,
  mc = Math.LN2;
function hc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pc(e) / mc) | 0)) | 0;
}
var ht = 64,
  gt = 4194304;
function kr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ht(e, u) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var t = 0,
    n = e.suspendedLanes,
    l = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var i = o & ~n;
    i !== 0 ? (t = kr(i)) : ((l &= o), l !== 0 && (t = kr(l)));
  } else (o = r & ~n), o !== 0 ? (t = kr(o)) : l !== 0 && (t = kr(l));
  if (t === 0) return 0;
  if (
    u !== 0 &&
    u !== t &&
    !(u & n) &&
    ((n = t & -t), (l = u & -u), n >= l || (n === 16 && (l & 4194240) !== 0))
  )
    return u;
  if ((t & 4 && (t |= r & 16), (u = e.entangledLanes), u !== 0))
    for (e = e.entanglements, u &= t; 0 < u; )
      (r = 31 - Ue(u)), (n = 1 << r), (t |= e[r]), (u &= ~n);
  return t;
}
function gc(e, u) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return u + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return u + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Dc(e, u) {
  for (
    var r = e.suspendedLanes,
      t = e.pingedLanes,
      n = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - Ue(l),
      i = 1 << o,
      a = n[o];
    a === -1
      ? (!(i & r) || i & t) && (n[o] = gc(i, u))
      : a <= u && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Al(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ma() {
  var e = ht;
  return (ht <<= 1), !(ht & 4194240) && (ht = 64), e;
}
function Un(e) {
  for (var u = [], r = 0; 31 > r; r++) u.push(e);
  return u;
}
function rt(e, u, r) {
  (e.pendingLanes |= u),
    u !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (u = 31 - Ue(u)),
    (e[u] = r);
}
function vc(e, u) {
  var r = e.pendingLanes & ~u;
  (e.pendingLanes = u),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= u),
    (e.mutableReadLanes &= u),
    (e.entangledLanes &= u),
    (u = e.entanglements);
  var t = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var n = 31 - Ue(r),
      l = 1 << n;
    (u[n] = 0), (t[n] = -1), (e[n] = -1), (r &= ~l);
  }
}
function so(e, u) {
  var r = (e.entangledLanes |= u);
  for (e = e.entanglements; r; ) {
    var t = 31 - Ue(r),
      n = 1 << t;
    (n & u) | (e[t] & u) && (e[t] |= u), (r &= ~n);
  }
}
var P = 0;
function Ha(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ga,
  co,
  Qa,
  $a,
  Wa,
  El = !1,
  Dt = [],
  cu = null,
  fu = null,
  du = null,
  br = new Map(),
  Vr = new Map(),
  ou = [],
  yc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ai(e, u) {
  switch (e) {
    case "focusin":
    case "focusout":
      cu = null;
      break;
    case "dragenter":
    case "dragleave":
      fu = null;
      break;
    case "mouseover":
    case "mouseout":
      du = null;
      break;
    case "pointerover":
    case "pointerout":
      br.delete(u.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(u.pointerId);
  }
}
function vr(e, u, r, t, n, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: u,
        domEventName: r,
        eventSystemFlags: t,
        nativeEvent: l,
        targetContainers: [n],
      }),
      u !== null && ((u = nt(u)), u !== null && co(u)),
      e)
    : ((e.eventSystemFlags |= t),
      (u = e.targetContainers),
      n !== null && u.indexOf(n) === -1 && u.push(n),
      e);
}
function Ac(e, u, r, t, n) {
  switch (u) {
    case "focusin":
      return (cu = vr(cu, e, u, r, t, n)), !0;
    case "dragenter":
      return (fu = vr(fu, e, u, r, t, n)), !0;
    case "mouseover":
      return (du = vr(du, e, u, r, t, n)), !0;
    case "pointerover":
      var l = n.pointerId;
      return br.set(l, vr(br.get(l) || null, e, u, r, t, n)), !0;
    case "gotpointercapture":
      return (
        (l = n.pointerId), Vr.set(l, vr(Vr.get(l) || null, e, u, r, t, n)), !0
      );
  }
  return !1;
}
function Ya(e) {
  var u = ku(e.target);
  if (u !== null) {
    var r = Uu(u);
    if (r !== null) {
      if (((u = r.tag), u === 13)) {
        if (((u = Ua(r)), u !== null)) {
          (e.blockedOn = u),
            Wa(e.priority, function () {
              Qa(r);
            });
          return;
        }
      } else if (u === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Lt(e) {
  if (e.blockedOn !== null) return !1;
  for (var u = e.targetContainers; 0 < u.length; ) {
    var r = Cl(e.domEventName, e.eventSystemFlags, u[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var t = new r.constructor(r.type, r);
      (gl = t), r.target.dispatchEvent(t), (gl = null);
    } else return (u = nt(r)), u !== null && co(u), (e.blockedOn = r), !1;
    u.shift();
  }
  return !0;
}
function si(e, u, r) {
  Lt(e) && r.delete(u);
}
function Ec() {
  (El = !1),
    cu !== null && Lt(cu) && (cu = null),
    fu !== null && Lt(fu) && (fu = null),
    du !== null && Lt(du) && (du = null),
    br.forEach(si),
    Vr.forEach(si);
}
function yr(e, u) {
  e.blockedOn === u &&
    ((e.blockedOn = null),
    El ||
      ((El = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Ec)));
}
function Mr(e) {
  function u(n) {
    return yr(n, e);
  }
  if (0 < Dt.length) {
    yr(Dt[0], e);
    for (var r = 1; r < Dt.length; r++) {
      var t = Dt[r];
      t.blockedOn === e && (t.blockedOn = null);
    }
  }
  for (
    cu !== null && yr(cu, e),
      fu !== null && yr(fu, e),
      du !== null && yr(du, e),
      br.forEach(u),
      Vr.forEach(u),
      r = 0;
    r < ou.length;
    r++
  )
    (t = ou[r]), t.blockedOn === e && (t.blockedOn = null);
  for (; 0 < ou.length && ((r = ou[0]), r.blockedOn === null); )
    Ya(r), r.blockedOn === null && ou.shift();
}
var rr = uu.ReactCurrentBatchConfig,
  Gt = !0;
function Cc(e, u, r, t) {
  var n = P,
    l = rr.transition;
  rr.transition = null;
  try {
    (P = 1), fo(e, u, r, t);
  } finally {
    (P = n), (rr.transition = l);
  }
}
function wc(e, u, r, t) {
  var n = P,
    l = rr.transition;
  rr.transition = null;
  try {
    (P = 4), fo(e, u, r, t);
  } finally {
    (P = n), (rr.transition = l);
  }
}
function fo(e, u, r, t) {
  if (Gt) {
    var n = Cl(e, u, r, t);
    if (n === null) $n(e, u, t, Qt, r), ai(e, t);
    else if (Ac(n, e, u, r, t)) t.stopPropagation();
    else if ((ai(e, t), u & 4 && -1 < yc.indexOf(e))) {
      for (; n !== null; ) {
        var l = nt(n);
        if (
          (l !== null && Ga(l),
          (l = Cl(e, u, r, t)),
          l === null && $n(e, u, t, Qt, r),
          l === n)
        )
          break;
        n = l;
      }
      n !== null && t.stopPropagation();
    } else $n(e, u, t, null, r);
  }
}
var Qt = null;
function Cl(e, u, r, t) {
  if (((Qt = null), (e = io(t)), (e = ku(e)), e !== null))
    if (((u = Uu(e)), u === null)) e = null;
    else if (((r = u.tag), r === 13)) {
      if (((e = Ua(u)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (u.stateNode.current.memoizedState.isDehydrated)
        return u.tag === 3 ? u.stateNode.containerInfo : null;
      e = null;
    } else u !== e && (e = null);
  return (Qt = e), null;
}
function Ka(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (cc()) {
        case ao:
          return 1;
        case ba:
          return 4;
        case Mt:
        case fc:
          return 16;
        case Va:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var au = null,
  po = null,
  Nt = null;
function Za() {
  if (Nt) return Nt;
  var e,
    u = po,
    r = u.length,
    t,
    n = "value" in au ? au.value : au.textContent,
    l = n.length;
  for (e = 0; e < r && u[e] === n[e]; e++);
  var o = r - e;
  for (t = 1; t <= o && u[r - t] === n[l - t]; t++);
  return (Nt = n.slice(e, 1 < t ? 1 - t : void 0));
}
function Tt(e) {
  var u = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && u === 13 && (e = 13))
      : (e = u),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vt() {
  return !0;
}
function ci() {
  return !1;
}
function Be(e) {
  function u(r, t, n, l, o) {
    (this._reactName = r),
      (this._targetInst = n),
      (this.type = t),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((r = e[i]), (this[i] = r ? r(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? vt
        : ci),
      (this.isPropagationStopped = ci),
      this
    );
  }
  return (
    H(u.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = vt));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = vt));
      },
      persist: function () {},
      isPersistent: vt,
    }),
    u
  );
}
var pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mo = Be(pr),
  tt = H({}, pr, { view: 0, detail: 0 }),
  xc = Be(tt),
  In,
  jn,
  Ar,
  gn = H({}, tt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ho,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ar &&
            (Ar && e.type === "mousemove"
              ? ((In = e.screenX - Ar.screenX), (jn = e.screenY - Ar.screenY))
              : (jn = In = 0),
            (Ar = e)),
          In);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jn;
    },
  }),
  fi = Be(gn),
  Bc = H({}, gn, { dataTransfer: 0 }),
  kc = Be(Bc),
  Fc = H({}, tt, { relatedTarget: 0 }),
  On = Be(Fc),
  Sc = H({}, pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qc = Be(Sc),
  Lc = H({}, pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nc = Be(Lc),
  Tc = H({}, pr, { data: 0 }),
  di = Be(Tc),
  Rc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Pc = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _c(e) {
  var u = this.nativeEvent;
  return u.getModifierState ? u.getModifierState(e) : (e = Pc[e]) ? !!u[e] : !1;
}
function ho() {
  return _c;
}
var Uc = H({}, tt, {
    key: function (e) {
      if (e.key) {
        var u = Rc[e.key] || e.key;
        if (u !== "Unidentified") return u;
      }
      return e.type === "keypress"
        ? ((e = Tt(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zc[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ho,
    charCode: function (e) {
      return e.type === "keypress" ? Tt(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Tt(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ic = Be(Uc),
  jc = H({}, gn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  pi = Be(jc),
  Oc = H({}, tt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ho,
  }),
  bc = Be(Oc),
  Vc = H({}, pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mc = Be(Vc),
  Hc = H({}, gn, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Gc = Be(Hc),
  Qc = [9, 13, 27, 32],
  go = Ze && "CompositionEvent" in window,
  Nr = null;
Ze && "documentMode" in document && (Nr = document.documentMode);
var $c = Ze && "TextEvent" in window && !Nr,
  Ja = Ze && (!go || (Nr && 8 < Nr && 11 >= Nr)),
  mi = " ",
  hi = !1;
function Xa(e, u) {
  switch (e) {
    case "keyup":
      return Qc.indexOf(u.keyCode) !== -1;
    case "keydown":
      return u.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function es(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mu = !1;
function Wc(e, u) {
  switch (e) {
    case "compositionend":
      return es(u);
    case "keypress":
      return u.which !== 32 ? null : ((hi = !0), mi);
    case "textInput":
      return (e = u.data), e === mi && hi ? null : e;
    default:
      return null;
  }
}
function Yc(e, u) {
  if (Mu)
    return e === "compositionend" || (!go && Xa(e, u))
      ? ((e = Za()), (Nt = po = au = null), (Mu = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(u.ctrlKey || u.altKey || u.metaKey) || (u.ctrlKey && u.altKey)) {
        if (u.char && 1 < u.char.length) return u.char;
        if (u.which) return String.fromCharCode(u.which);
      }
      return null;
    case "compositionend":
      return Ja && u.locale !== "ko" ? null : u.data;
    default:
      return null;
  }
}
var Kc = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function gi(e) {
  var u = e && e.nodeName && e.nodeName.toLowerCase();
  return u === "input" ? !!Kc[e.type] : u === "textarea";
}
function us(e, u, r, t) {
  Ta(t),
    (u = $t(u, "onChange")),
    0 < u.length &&
      ((r = new mo("onChange", "change", null, r, t)),
      e.push({ event: r, listeners: u }));
}
var Tr = null,
  Hr = null;
function Zc(e) {
  ds(e, 0);
}
function Dn(e) {
  var u = Qu(e);
  if (Ba(u)) return e;
}
function Jc(e, u) {
  if (e === "change") return u;
}
var rs = !1;
if (Ze) {
  var bn;
  if (Ze) {
    var Vn = "oninput" in document;
    if (!Vn) {
      var Di = document.createElement("div");
      Di.setAttribute("oninput", "return;"),
        (Vn = typeof Di.oninput == "function");
    }
    bn = Vn;
  } else bn = !1;
  rs = bn && (!document.documentMode || 9 < document.documentMode);
}
function vi() {
  Tr && (Tr.detachEvent("onpropertychange", ts), (Hr = Tr = null));
}
function ts(e) {
  if (e.propertyName === "value" && Dn(Hr)) {
    var u = [];
    us(u, Hr, e, io(e)), _a(Zc, u);
  }
}
function Xc(e, u, r) {
  e === "focusin"
    ? (vi(), (Tr = u), (Hr = r), Tr.attachEvent("onpropertychange", ts))
    : e === "focusout" && vi();
}
function ef(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Dn(Hr);
}
function uf(e, u) {
  if (e === "click") return Dn(u);
}
function rf(e, u) {
  if (e === "input" || e === "change") return Dn(u);
}
function tf(e, u) {
  return (e === u && (e !== 0 || 1 / e === 1 / u)) || (e !== e && u !== u);
}
var je = typeof Object.is == "function" ? Object.is : tf;
function Gr(e, u) {
  if (je(e, u)) return !0;
  if (typeof e != "object" || e === null || typeof u != "object" || u === null)
    return !1;
  var r = Object.keys(e),
    t = Object.keys(u);
  if (r.length !== t.length) return !1;
  for (t = 0; t < r.length; t++) {
    var n = r[t];
    if (!nl.call(u, n) || !je(e[n], u[n])) return !1;
  }
  return !0;
}
function yi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ai(e, u) {
  var r = yi(e);
  e = 0;
  for (var t; r; ) {
    if (r.nodeType === 3) {
      if (((t = e + r.textContent.length), e <= u && t >= u))
        return { node: r, offset: u - e };
      e = t;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = yi(r);
  }
}
function ns(e, u) {
  return e && u
    ? e === u
      ? !0
      : e && e.nodeType === 3
      ? !1
      : u && u.nodeType === 3
      ? ns(e, u.parentNode)
      : "contains" in e
      ? e.contains(u)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(u) & 16)
      : !1
    : !1;
}
function ls() {
  for (var e = window, u = Ot(); u instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof u.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = u.contentWindow;
    else break;
    u = Ot(e.document);
  }
  return u;
}
function Do(e) {
  var u = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    u &&
    ((u === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      u === "textarea" ||
      e.contentEditable === "true")
  );
}
function nf(e) {
  var u = ls(),
    r = e.focusedElem,
    t = e.selectionRange;
  if (
    u !== r &&
    r &&
    r.ownerDocument &&
    ns(r.ownerDocument.documentElement, r)
  ) {
    if (t !== null && Do(r)) {
      if (
        ((u = t.start),
        (e = t.end),
        e === void 0 && (e = u),
        "selectionStart" in r)
      )
        (r.selectionStart = u), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((u = r.ownerDocument || document) && u.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var n = r.textContent.length,
          l = Math.min(t.start, n);
        (t = t.end === void 0 ? l : Math.min(t.end, n)),
          !e.extend && l > t && ((n = t), (t = l), (l = n)),
          (n = Ai(r, l));
        var o = Ai(r, t);
        n &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== n.node ||
            e.anchorOffset !== n.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((u = u.createRange()),
          u.setStart(n.node, n.offset),
          e.removeAllRanges(),
          l > t
            ? (e.addRange(u), e.extend(o.node, o.offset))
            : (u.setEnd(o.node, o.offset), e.addRange(u)));
      }
    }
    for (u = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        u.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < u.length; r++)
      (e = u[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var lf = Ze && "documentMode" in document && 11 >= document.documentMode,
  Hu = null,
  wl = null,
  Rr = null,
  xl = !1;
function Ei(e, u, r) {
  var t = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  xl ||
    Hu == null ||
    Hu !== Ot(t) ||
    ((t = Hu),
    "selectionStart" in t && Do(t)
      ? (t = { start: t.selectionStart, end: t.selectionEnd })
      : ((t = (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (t = {
          anchorNode: t.anchorNode,
          anchorOffset: t.anchorOffset,
          focusNode: t.focusNode,
          focusOffset: t.focusOffset,
        })),
    (Rr && Gr(Rr, t)) ||
      ((Rr = t),
      (t = $t(wl, "onSelect")),
      0 < t.length &&
        ((u = new mo("onSelect", "select", null, u, r)),
        e.push({ event: u, listeners: t }),
        (u.target = Hu))));
}
function yt(e, u) {
  var r = {};
  return (
    (r[e.toLowerCase()] = u.toLowerCase()),
    (r["Webkit" + e] = "webkit" + u),
    (r["Moz" + e] = "moz" + u),
    r
  );
}
var Gu = {
    animationend: yt("Animation", "AnimationEnd"),
    animationiteration: yt("Animation", "AnimationIteration"),
    animationstart: yt("Animation", "AnimationStart"),
    transitionend: yt("Transition", "TransitionEnd"),
  },
  Mn = {},
  os = {};
Ze &&
  ((os = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gu.animationend.animation,
    delete Gu.animationiteration.animation,
    delete Gu.animationstart.animation),
  "TransitionEvent" in window || delete Gu.transitionend.transition);
function vn(e) {
  if (Mn[e]) return Mn[e];
  if (!Gu[e]) return e;
  var u = Gu[e],
    r;
  for (r in u) if (u.hasOwnProperty(r) && r in os) return (Mn[e] = u[r]);
  return e;
}
var is = vn("animationend"),
  as = vn("animationiteration"),
  ss = vn("animationstart"),
  cs = vn("transitionend"),
  fs = new Map(),
  Ci =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Au(e, u) {
  fs.set(e, u), _u(u, [e]);
}
for (var Hn = 0; Hn < Ci.length; Hn++) {
  var Gn = Ci[Hn],
    of = Gn.toLowerCase(),
    af = Gn[0].toUpperCase() + Gn.slice(1);
  Au(of, "on" + af);
}
Au(is, "onAnimationEnd");
Au(as, "onAnimationIteration");
Au(ss, "onAnimationStart");
Au("dblclick", "onDoubleClick");
Au("focusin", "onFocus");
Au("focusout", "onBlur");
Au(cs, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
_u(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
_u(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
_u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_u(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
_u(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
_u(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
function wi(e, u, r) {
  var t = e.type || "unknown-event";
  (e.currentTarget = r), oc(t, u, void 0, e), (e.currentTarget = null);
}
function ds(e, u) {
  u = (u & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var t = e[r],
      n = t.event;
    t = t.listeners;
    e: {
      var l = void 0;
      if (u)
        for (var o = t.length - 1; 0 <= o; o--) {
          var i = t[o],
            a = i.instance,
            c = i.currentTarget;
          if (((i = i.listener), a !== l && n.isPropagationStopped())) break e;
          wi(n, i, c), (l = a);
        }
      else
        for (o = 0; o < t.length; o++) {
          if (
            ((i = t[o]),
            (a = i.instance),
            (c = i.currentTarget),
            (i = i.listener),
            a !== l && n.isPropagationStopped())
          )
            break e;
          wi(n, i, c), (l = a);
        }
    }
  }
  if (Vt) throw ((e = yl), (Vt = !1), (yl = null), e);
}
function I(e, u) {
  var r = u[ql];
  r === void 0 && (r = u[ql] = new Set());
  var t = e + "__bubble";
  r.has(t) || (ps(u, e, 2, !1), r.add(t));
}
function Qn(e, u, r) {
  var t = 0;
  u && (t |= 4), ps(r, e, t, u);
}
var At = "_reactListening" + Math.random().toString(36).slice(2);
function Qr(e) {
  if (!e[At]) {
    (e[At] = !0),
      Aa.forEach(function (r) {
        r !== "selectionchange" && (sf.has(r) || Qn(r, !1, e), Qn(r, !0, e));
      });
    var u = e.nodeType === 9 ? e : e.ownerDocument;
    u === null || u[At] || ((u[At] = !0), Qn("selectionchange", !1, u));
  }
}
function ps(e, u, r, t) {
  switch (Ka(u)) {
    case 1:
      var n = Cc;
      break;
    case 4:
      n = wc;
      break;
    default:
      n = fo;
  }
  (r = n.bind(null, u, r, e)),
    (n = void 0),
    !vl ||
      (u !== "touchstart" && u !== "touchmove" && u !== "wheel") ||
      (n = !0),
    t
      ? n !== void 0
        ? e.addEventListener(u, r, { capture: !0, passive: n })
        : e.addEventListener(u, r, !0)
      : n !== void 0
      ? e.addEventListener(u, r, { passive: n })
      : e.addEventListener(u, r, !1);
}
function $n(e, u, r, t, n) {
  var l = t;
  if (!(u & 1) && !(u & 2) && t !== null)
    e: for (;;) {
      if (t === null) return;
      var o = t.tag;
      if (o === 3 || o === 4) {
        var i = t.stateNode.containerInfo;
        if (i === n || (i.nodeType === 8 && i.parentNode === n)) break;
        if (o === 4)
          for (o = t.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === n || (a.nodeType === 8 && a.parentNode === n))
            )
              return;
            o = o.return;
          }
        for (; i !== null; ) {
          if (((o = ku(i)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            t = l = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      t = t.return;
    }
  _a(function () {
    var c = l,
      h = io(r),
      m = [];
    e: {
      var p = fs.get(e);
      if (p !== void 0) {
        var A = mo,
          E = e;
        switch (e) {
          case "keypress":
            if (Tt(r) === 0) break e;
          case "keydown":
          case "keyup":
            A = Ic;
            break;
          case "focusin":
            (E = "focus"), (A = On);
            break;
          case "focusout":
            (E = "blur"), (A = On);
            break;
          case "beforeblur":
          case "afterblur":
            A = On;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            A = fi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            A = kc;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            A = bc;
            break;
          case is:
          case as:
          case ss:
            A = qc;
            break;
          case cs:
            A = Mc;
            break;
          case "scroll":
            A = xc;
            break;
          case "wheel":
            A = Gc;
            break;
          case "copy":
          case "cut":
          case "paste":
            A = Nc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            A = pi;
        }
        var C = (u & 4) !== 0,
          _ = !C && e === "scroll",
          f = C ? (p !== null ? p + "Capture" : null) : p;
        C = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = Or(s, f)), g != null && C.push($r(s, g, d)))),
            _)
          )
            break;
          s = s.return;
        }
        0 < C.length &&
          ((p = new A(p, E, null, r, h)), m.push({ event: p, listeners: C }));
      }
    }
    if (!(u & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (A = e === "mouseout" || e === "pointerout"),
          p &&
            r !== gl &&
            (E = r.relatedTarget || r.fromElement) &&
            (ku(E) || E[Je]))
        )
          break e;
        if (
          (A || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          A
            ? ((E = r.relatedTarget || r.toElement),
              (A = c),
              (E = E ? ku(E) : null),
              E !== null &&
                ((_ = Uu(E)), E !== _ || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((A = null), (E = c)),
          A !== E)
        ) {
          if (
            ((C = fi),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (s = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((C = pi),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (s = "pointer")),
            (_ = A == null ? p : Qu(A)),
            (d = E == null ? p : Qu(E)),
            (p = new C(g, s + "leave", A, r, h)),
            (p.target = _),
            (p.relatedTarget = d),
            (g = null),
            ku(h) === c &&
              ((C = new C(f, s + "enter", E, r, h)),
              (C.target = d),
              (C.relatedTarget = _),
              (g = C)),
            (_ = g),
            A && E)
          )
            u: {
              for (C = A, f = E, s = 0, d = C; d; d = Ou(d)) s++;
              for (d = 0, g = f; g; g = Ou(g)) d++;
              for (; 0 < s - d; ) (C = Ou(C)), s--;
              for (; 0 < d - s; ) (f = Ou(f)), d--;
              for (; s--; ) {
                if (C === f || (f !== null && C === f.alternate)) break u;
                (C = Ou(C)), (f = Ou(f));
              }
              C = null;
            }
          else C = null;
          A !== null && xi(m, p, A, C, !1),
            E !== null && _ !== null && xi(m, _, E, C, !0);
        }
      }
      e: {
        if (
          ((p = c ? Qu(c) : window),
          (A = p.nodeName && p.nodeName.toLowerCase()),
          A === "select" || (A === "input" && p.type === "file"))
        )
          var x = Jc;
        else if (gi(p))
          if (rs) x = rf;
          else {
            x = ef;
            var S = Xc;
          }
        else
          (A = p.nodeName) &&
            A.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (x = uf);
        if (x && (x = x(e, c))) {
          us(m, x, r, h);
          break e;
        }
        S && S(e, p, c),
          e === "focusout" &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === "number" &&
            fl(p, "number", p.value);
      }
      switch (((S = c ? Qu(c) : window), e)) {
        case "focusin":
          (gi(S) || S.contentEditable === "true") &&
            ((Hu = S), (wl = c), (Rr = null));
          break;
        case "focusout":
          Rr = wl = Hu = null;
          break;
        case "mousedown":
          xl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xl = !1), Ei(m, r, h);
          break;
        case "selectionchange":
          if (lf) break;
        case "keydown":
        case "keyup":
          Ei(m, r, h);
      }
      var F;
      if (go)
        e: {
          switch (e) {
            case "compositionstart":
              var q = "onCompositionStart";
              break e;
            case "compositionend":
              q = "onCompositionEnd";
              break e;
            case "compositionupdate":
              q = "onCompositionUpdate";
              break e;
          }
          q = void 0;
        }
      else
        Mu
          ? Xa(e, r) && (q = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (q = "onCompositionStart");
      q &&
        (Ja &&
          r.locale !== "ko" &&
          (Mu || q !== "onCompositionStart"
            ? q === "onCompositionEnd" && Mu && (F = Za())
            : ((au = h),
              (po = "value" in au ? au.value : au.textContent),
              (Mu = !0))),
        (S = $t(c, q)),
        0 < S.length &&
          ((q = new di(q, e, null, r, h)),
          m.push({ event: q, listeners: S }),
          F ? (q.data = F) : ((F = es(r)), F !== null && (q.data = F)))),
        (F = $c ? Wc(e, r) : Yc(e, r)) &&
          ((c = $t(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new di("onBeforeInput", "beforeinput", null, r, h)),
            m.push({ event: h, listeners: c }),
            (h.data = F)));
    }
    ds(m, u);
  });
}
function $r(e, u, r) {
  return { instance: e, listener: u, currentTarget: r };
}
function $t(e, u) {
  for (var r = u + "Capture", t = []; e !== null; ) {
    var n = e,
      l = n.stateNode;
    n.tag === 5 &&
      l !== null &&
      ((n = l),
      (l = Or(e, r)),
      l != null && t.unshift($r(e, l, n)),
      (l = Or(e, u)),
      l != null && t.push($r(e, l, n))),
      (e = e.return);
  }
  return t;
}
function Ou(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xi(e, u, r, t, n) {
  for (var l = u._reactName, o = []; r !== null && r !== t; ) {
    var i = r,
      a = i.alternate,
      c = i.stateNode;
    if (a !== null && a === t) break;
    i.tag === 5 &&
      c !== null &&
      ((i = c),
      n
        ? ((a = Or(r, l)), a != null && o.unshift($r(r, a, i)))
        : n || ((a = Or(r, l)), a != null && o.push($r(r, a, i)))),
      (r = r.return);
  }
  o.length !== 0 && e.push({ event: u, listeners: o });
}
var cf = /\r\n?/g,
  ff = /\u0000|\uFFFD/g;
function Bi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cf,
      `
`
    )
    .replace(ff, "");
}
function Et(e, u, r) {
  if (((u = Bi(u)), Bi(e) !== u && r)) throw Error(D(425));
}
function Wt() {}
var Bl = null,
  kl = null;
function Fl(e, u) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof u.children == "string" ||
    typeof u.children == "number" ||
    (typeof u.dangerouslySetInnerHTML == "object" &&
      u.dangerouslySetInnerHTML !== null &&
      u.dangerouslySetInnerHTML.__html != null)
  );
}
var Sl = typeof setTimeout == "function" ? setTimeout : void 0,
  df = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ki = typeof Promise == "function" ? Promise : void 0,
  pf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ki < "u"
      ? function (e) {
          return ki.resolve(null).then(e).catch(mf);
        }
      : Sl;
function mf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wn(e, u) {
  var r = u,
    t = 0;
  do {
    var n = r.nextSibling;
    if ((e.removeChild(r), n && n.nodeType === 8))
      if (((r = n.data), r === "/$")) {
        if (t === 0) {
          e.removeChild(n), Mr(u);
          return;
        }
        t--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || t++;
    r = n;
  } while (r);
  Mr(u);
}
function pu(e) {
  for (; e != null; e = e.nextSibling) {
    var u = e.nodeType;
    if (u === 1 || u === 3) break;
    if (u === 8) {
      if (((u = e.data), u === "$" || u === "$!" || u === "$?")) break;
      if (u === "/$") return null;
    }
  }
  return e;
}
function Fi(e) {
  e = e.previousSibling;
  for (var u = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (u === 0) return e;
        u--;
      } else r === "/$" && u++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mr = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + mr,
  Wr = "__reactProps$" + mr,
  Je = "__reactContainer$" + mr,
  ql = "__reactEvents$" + mr,
  hf = "__reactListeners$" + mr,
  gf = "__reactHandles$" + mr;
function ku(e) {
  var u = e[Ve];
  if (u) return u;
  for (var r = e.parentNode; r; ) {
    if ((u = r[Je] || r[Ve])) {
      if (
        ((r = u.alternate),
        u.child !== null || (r !== null && r.child !== null))
      )
        for (e = Fi(e); e !== null; ) {
          if ((r = e[Ve])) return r;
          e = Fi(e);
        }
      return u;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function nt(e) {
  return (
    (e = e[Ve] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qu(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function yn(e) {
  return e[Wr] || null;
}
var Ll = [],
  $u = -1;
function Eu(e) {
  return { current: e };
}
function j(e) {
  0 > $u || ((e.current = Ll[$u]), (Ll[$u] = null), $u--);
}
function U(e, u) {
  $u++, (Ll[$u] = e.current), (e.current = u);
}
var yu = {},
  oe = Eu(yu),
  he = Eu(!1),
  Nu = yu;
function or(e, u) {
  var r = e.type.contextTypes;
  if (!r) return yu;
  var t = e.stateNode;
  if (t && t.__reactInternalMemoizedUnmaskedChildContext === u)
    return t.__reactInternalMemoizedMaskedChildContext;
  var n = {},
    l;
  for (l in r) n[l] = u[l];
  return (
    t &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = u),
      (e.__reactInternalMemoizedMaskedChildContext = n)),
    n
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function Yt() {
  j(he), j(oe);
}
function Si(e, u, r) {
  if (oe.current !== yu) throw Error(D(168));
  U(oe, u), U(he, r);
}
function ms(e, u, r) {
  var t = e.stateNode;
  if (((u = u.childContextTypes), typeof t.getChildContext != "function"))
    return r;
  t = t.getChildContext();
  for (var n in t) if (!(n in u)) throw Error(D(108, X2(e) || "Unknown", n));
  return H({}, r, t);
}
function Kt(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yu),
    (Nu = oe.current),
    U(oe, e),
    U(he, he.current),
    !0
  );
}
function qi(e, u, r) {
  var t = e.stateNode;
  if (!t) throw Error(D(169));
  r
    ? ((e = ms(e, u, Nu)),
      (t.__reactInternalMemoizedMergedChildContext = e),
      j(he),
      j(oe),
      U(oe, e))
    : j(he),
    U(he, r);
}
var $e = null,
  An = !1,
  Yn = !1;
function hs(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function Df(e) {
  (An = !0), hs(e);
}
function Cu() {
  if (!Yn && $e !== null) {
    Yn = !0;
    var e = 0,
      u = P;
    try {
      var r = $e;
      for (P = 1; e < r.length; e++) {
        var t = r[e];
        do t = t(!0);
        while (t !== null);
      }
      ($e = null), (An = !1);
    } catch (n) {
      throw ($e !== null && ($e = $e.slice(e + 1)), Oa(ao, Cu), n);
    } finally {
      (P = u), (Yn = !1);
    }
  }
  return null;
}
var Wu = [],
  Yu = 0,
  Zt = null,
  Jt = 0,
  Fe = [],
  Se = 0,
  Tu = null,
  We = 1,
  Ye = "";
function xu(e, u) {
  (Wu[Yu++] = Jt), (Wu[Yu++] = Zt), (Zt = e), (Jt = u);
}
function gs(e, u, r) {
  (Fe[Se++] = We), (Fe[Se++] = Ye), (Fe[Se++] = Tu), (Tu = e);
  var t = We;
  e = Ye;
  var n = 32 - Ue(t) - 1;
  (t &= ~(1 << n)), (r += 1);
  var l = 32 - Ue(u) + n;
  if (30 < l) {
    var o = n - (n % 5);
    (l = (t & ((1 << o) - 1)).toString(32)),
      (t >>= o),
      (n -= o),
      (We = (1 << (32 - Ue(u) + n)) | (r << n) | t),
      (Ye = l + e);
  } else (We = (1 << l) | (r << n) | t), (Ye = e);
}
function vo(e) {
  e.return !== null && (xu(e, 1), gs(e, 1, 0));
}
function yo(e) {
  for (; e === Zt; )
    (Zt = Wu[--Yu]), (Wu[Yu] = null), (Jt = Wu[--Yu]), (Wu[Yu] = null);
  for (; e === Tu; )
    (Tu = Fe[--Se]),
      (Fe[Se] = null),
      (Ye = Fe[--Se]),
      (Fe[Se] = null),
      (We = Fe[--Se]),
      (Fe[Se] = null);
}
var Ce = null,
  Ee = null,
  b = !1,
  _e = null;
function Ds(e, u) {
  var r = qe(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = u),
    (r.return = e),
    (u = e.deletions),
    u === null ? ((e.deletions = [r]), (e.flags |= 16)) : u.push(r);
}
function Li(e, u) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (u =
          u.nodeType !== 1 || r.toLowerCase() !== u.nodeName.toLowerCase()
            ? null
            : u),
        u !== null
          ? ((e.stateNode = u), (Ce = e), (Ee = pu(u.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (u = e.pendingProps === "" || u.nodeType !== 3 ? null : u),
        u !== null ? ((e.stateNode = u), (Ce = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (u = u.nodeType !== 8 ? null : u),
        u !== null
          ? ((r = Tu !== null ? { id: We, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: u,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = qe(18, null, null, 0)),
            (r.stateNode = u),
            (r.return = e),
            (e.child = r),
            (Ce = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tl(e) {
  if (b) {
    var u = Ee;
    if (u) {
      var r = u;
      if (!Li(e, u)) {
        if (Nl(e)) throw Error(D(418));
        u = pu(r.nextSibling);
        var t = Ce;
        u && Li(e, u)
          ? Ds(t, r)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (Ce = e));
      }
    } else {
      if (Nl(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (b = !1), (Ce = e);
    }
  }
}
function Ni(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function Ct(e) {
  if (e !== Ce) return !1;
  if (!b) return Ni(e), (b = !0), !1;
  var u;
  if (
    ((u = e.tag !== 3) &&
      !(u = e.tag !== 5) &&
      ((u = e.type),
      (u = u !== "head" && u !== "body" && !Fl(e.type, e.memoizedProps))),
    u && (u = Ee))
  ) {
    if (Nl(e)) throw (vs(), Error(D(418)));
    for (; u; ) Ds(e, u), (u = pu(u.nextSibling));
  }
  if ((Ni(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, u = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (u === 0) {
              Ee = pu(e.nextSibling);
              break e;
            }
            u--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || u++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? pu(e.stateNode.nextSibling) : null;
  return !0;
}
function vs() {
  for (var e = Ee; e; ) e = pu(e.nextSibling);
}
function ir() {
  (Ee = Ce = null), (b = !1);
}
function Ao(e) {
  _e === null ? (_e = [e]) : _e.push(e);
}
var vf = uu.ReactCurrentBatchConfig;
function Er(e, u, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(D(309));
        var t = r.stateNode;
      }
      if (!t) throw Error(D(147, e));
      var n = t,
        l = "" + e;
      return u !== null &&
        u.ref !== null &&
        typeof u.ref == "function" &&
        u.ref._stringRef === l
        ? u.ref
        : ((u = function (o) {
            var i = n.refs;
            o === null ? delete i[l] : (i[l] = o);
          }),
          (u._stringRef = l),
          u);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!r._owner) throw Error(D(290, e));
  }
  return e;
}
function wt(e, u) {
  throw (
    ((e = Object.prototype.toString.call(u)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(u).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ti(e) {
  var u = e._init;
  return u(e._payload);
}
function ys(e) {
  function u(f, s) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [s]), (f.flags |= 16)) : d.push(s);
    }
  }
  function r(f, s) {
    if (!e) return null;
    for (; s !== null; ) u(f, s), (s = s.sibling);
    return null;
  }
  function t(f, s) {
    for (f = new Map(); s !== null; )
      s.key !== null ? f.set(s.key, s) : f.set(s.index, s), (s = s.sibling);
    return f;
  }
  function n(f, s) {
    return (f = Du(f, s)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, s, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < s ? ((f.flags |= 2), s) : d)
            : ((f.flags |= 2), s))
        : ((f.flags |= 1048576), s)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, s, d, g) {
    return s === null || s.tag !== 6
      ? ((s = rl(d, f.mode, g)), (s.return = f), s)
      : ((s = n(s, d)), (s.return = f), s);
  }
  function a(f, s, d, g) {
    var x = d.type;
    return x === Vu
      ? h(f, s, d.props.children, g, d.key)
      : s !== null &&
        (s.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === nu &&
            Ti(x) === s.type))
      ? ((g = n(s, d.props)), (g.ref = Er(f, s, d)), (g.return = f), g)
      : ((g = jt(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = Er(f, s, d)),
        (g.return = f),
        g);
  }
  function c(f, s, d, g) {
    return s === null ||
      s.tag !== 4 ||
      s.stateNode.containerInfo !== d.containerInfo ||
      s.stateNode.implementation !== d.implementation
      ? ((s = tl(d, f.mode, g)), (s.return = f), s)
      : ((s = n(s, d.children || [])), (s.return = f), s);
  }
  function h(f, s, d, g, x) {
    return s === null || s.tag !== 7
      ? ((s = Lu(d, f.mode, g, x)), (s.return = f), s)
      : ((s = n(s, d)), (s.return = f), s);
  }
  function m(f, s, d) {
    if ((typeof s == "string" && s !== "") || typeof s == "number")
      return (s = rl("" + s, f.mode, d)), (s.return = f), s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case dt:
          return (
            (d = jt(s.type, s.key, s.props, null, f.mode, d)),
            (d.ref = Er(f, null, s)),
            (d.return = f),
            d
          );
        case bu:
          return (s = tl(s, f.mode, d)), (s.return = f), s;
        case nu:
          var g = s._init;
          return m(f, g(s._payload), d);
      }
      if (Br(s) || gr(s))
        return (s = Lu(s, f.mode, d, null)), (s.return = f), s;
      wt(f, s);
    }
    return null;
  }
  function p(f, s, d, g) {
    var x = s !== null ? s.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return x !== null ? null : i(f, s, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dt:
          return d.key === x ? a(f, s, d, g) : null;
        case bu:
          return d.key === x ? c(f, s, d, g) : null;
        case nu:
          return (x = d._init), p(f, s, x(d._payload), g);
      }
      if (Br(d) || gr(d)) return x !== null ? null : h(f, s, d, g, null);
      wt(f, d);
    }
    return null;
  }
  function A(f, s, d, g, x) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), i(s, f, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case dt:
          return (f = f.get(g.key === null ? d : g.key) || null), a(s, f, g, x);
        case bu:
          return (f = f.get(g.key === null ? d : g.key) || null), c(s, f, g, x);
        case nu:
          var S = g._init;
          return A(f, s, d, S(g._payload), x);
      }
      if (Br(g) || gr(g)) return (f = f.get(d) || null), h(s, f, g, x, null);
      wt(s, g);
    }
    return null;
  }
  function E(f, s, d, g) {
    for (
      var x = null, S = null, F = s, q = (s = 0), O = null;
      F !== null && q < d.length;
      q++
    ) {
      F.index > q ? ((O = F), (F = null)) : (O = F.sibling);
      var N = p(f, F, d[q], g);
      if (N === null) {
        F === null && (F = O);
        break;
      }
      e && F && N.alternate === null && u(f, F),
        (s = l(N, s, q)),
        S === null ? (x = N) : (S.sibling = N),
        (S = N),
        (F = O);
    }
    if (q === d.length) return r(f, F), b && xu(f, q), x;
    if (F === null) {
      for (; q < d.length; q++)
        (F = m(f, d[q], g)),
          F !== null &&
            ((s = l(F, s, q)), S === null ? (x = F) : (S.sibling = F), (S = F));
      return b && xu(f, q), x;
    }
    for (F = t(f, F); q < d.length; q++)
      (O = A(F, f, q, d[q], g)),
        O !== null &&
          (e && O.alternate !== null && F.delete(O.key === null ? q : O.key),
          (s = l(O, s, q)),
          S === null ? (x = O) : (S.sibling = O),
          (S = O));
    return (
      e &&
        F.forEach(function (ve) {
          return u(f, ve);
        }),
      b && xu(f, q),
      x
    );
  }
  function C(f, s, d, g) {
    var x = gr(d);
    if (typeof x != "function") throw Error(D(150));
    if (((d = x.call(d)), d == null)) throw Error(D(151));
    for (
      var S = (x = null), F = s, q = (s = 0), O = null, N = d.next();
      F !== null && !N.done;
      q++, N = d.next()
    ) {
      F.index > q ? ((O = F), (F = null)) : (O = F.sibling);
      var ve = p(f, F, N.value, g);
      if (ve === null) {
        F === null && (F = O);
        break;
      }
      e && F && ve.alternate === null && u(f, F),
        (s = l(ve, s, q)),
        S === null ? (x = ve) : (S.sibling = ve),
        (S = ve),
        (F = O);
    }
    if (N.done) return r(f, F), b && xu(f, q), x;
    if (F === null) {
      for (; !N.done; q++, N = d.next())
        (N = m(f, N.value, g)),
          N !== null &&
            ((s = l(N, s, q)), S === null ? (x = N) : (S.sibling = N), (S = N));
      return b && xu(f, q), x;
    }
    for (F = t(f, F); !N.done; q++, N = d.next())
      (N = A(F, f, q, N.value, g)),
        N !== null &&
          (e && N.alternate !== null && F.delete(N.key === null ? q : N.key),
          (s = l(N, s, q)),
          S === null ? (x = N) : (S.sibling = N),
          (S = N));
    return (
      e &&
        F.forEach(function (wu) {
          return u(f, wu);
        }),
      b && xu(f, q),
      x
    );
  }
  function _(f, s, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Vu &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case dt:
          e: {
            for (var x = d.key, S = s; S !== null; ) {
              if (S.key === x) {
                if (((x = d.type), x === Vu)) {
                  if (S.tag === 7) {
                    r(f, S.sibling),
                      (s = n(S, d.props.children)),
                      (s.return = f),
                      (f = s);
                    break e;
                  }
                } else if (
                  S.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === nu &&
                    Ti(x) === S.type)
                ) {
                  r(f, S.sibling),
                    (s = n(S, d.props)),
                    (s.ref = Er(f, S, d)),
                    (s.return = f),
                    (f = s);
                  break e;
                }
                r(f, S);
                break;
              } else u(f, S);
              S = S.sibling;
            }
            d.type === Vu
              ? ((s = Lu(d.props.children, f.mode, g, d.key)),
                (s.return = f),
                (f = s))
              : ((g = jt(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = Er(f, s, d)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case bu:
          e: {
            for (S = d.key; s !== null; ) {
              if (s.key === S)
                if (
                  s.tag === 4 &&
                  s.stateNode.containerInfo === d.containerInfo &&
                  s.stateNode.implementation === d.implementation
                ) {
                  r(f, s.sibling),
                    (s = n(s, d.children || [])),
                    (s.return = f),
                    (f = s);
                  break e;
                } else {
                  r(f, s);
                  break;
                }
              else u(f, s);
              s = s.sibling;
            }
            (s = tl(d, f.mode, g)), (s.return = f), (f = s);
          }
          return o(f);
        case nu:
          return (S = d._init), _(f, s, S(d._payload), g);
      }
      if (Br(d)) return E(f, s, d, g);
      if (gr(d)) return C(f, s, d, g);
      wt(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        s !== null && s.tag === 6
          ? (r(f, s.sibling), (s = n(s, d)), (s.return = f), (f = s))
          : (r(f, s), (s = rl(d, f.mode, g)), (s.return = f), (f = s)),
        o(f))
      : r(f, s);
  }
  return _;
}
var ar = ys(!0),
  As = ys(!1),
  Xt = Eu(null),
  en = null,
  Ku = null,
  Eo = null;
function Co() {
  Eo = Ku = en = null;
}
function wo(e) {
  var u = Xt.current;
  j(Xt), (e._currentValue = u);
}
function Rl(e, u, r) {
  for (; e !== null; ) {
    var t = e.alternate;
    if (
      ((e.childLanes & u) !== u
        ? ((e.childLanes |= u), t !== null && (t.childLanes |= u))
        : t !== null && (t.childLanes & u) !== u && (t.childLanes |= u),
      e === r)
    )
      break;
    e = e.return;
  }
}
function tr(e, u) {
  (en = e),
    (Eo = Ku = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & u && (me = !0), (e.firstContext = null));
}
function Ne(e) {
  var u = e._currentValue;
  if (Eo !== e)
    if (((e = { context: e, memoizedValue: u, next: null }), Ku === null)) {
      if (en === null) throw Error(D(308));
      (Ku = e), (en.dependencies = { lanes: 0, firstContext: e });
    } else Ku = Ku.next = e;
  return u;
}
var Fu = null;
function xo(e) {
  Fu === null ? (Fu = [e]) : Fu.push(e);
}
function Es(e, u, r, t) {
  var n = u.interleaved;
  return (
    n === null ? ((r.next = r), xo(u)) : ((r.next = n.next), (n.next = r)),
    (u.interleaved = r),
    Xe(e, t)
  );
}
function Xe(e, u) {
  e.lanes |= u;
  var r = e.alternate;
  for (r !== null && (r.lanes |= u), r = e, e = e.return; e !== null; )
    (e.childLanes |= u),
      (r = e.alternate),
      r !== null && (r.childLanes |= u),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var lu = !1;
function Bo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cs(e, u) {
  (e = e.updateQueue),
    u.updateQueue === e &&
      (u.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, u) {
  return {
    eventTime: e,
    lane: u,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mu(e, u, r) {
  var t = e.updateQueue;
  if (t === null) return null;
  if (((t = t.shared), R & 2)) {
    var n = t.pending;
    return (
      n === null ? (u.next = u) : ((u.next = n.next), (n.next = u)),
      (t.pending = u),
      Xe(e, r)
    );
  }
  return (
    (n = t.interleaved),
    n === null ? ((u.next = u), xo(t)) : ((u.next = n.next), (n.next = u)),
    (t.interleaved = u),
    Xe(e, r)
  );
}
function Rt(e, u, r) {
  if (
    ((u = u.updateQueue), u !== null && ((u = u.shared), (r & 4194240) !== 0))
  ) {
    var t = u.lanes;
    (t &= e.pendingLanes), (r |= t), (u.lanes = r), so(e, r);
  }
}
function Ri(e, u) {
  var r = e.updateQueue,
    t = e.alternate;
  if (t !== null && ((t = t.updateQueue), r === t)) {
    var n = null,
      l = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        l === null ? (n = l = o) : (l = l.next = o), (r = r.next);
      } while (r !== null);
      l === null ? (n = l = u) : (l = l.next = u);
    } else n = l = u;
    (r = {
      baseState: t.baseState,
      firstBaseUpdate: n,
      lastBaseUpdate: l,
      shared: t.shared,
      effects: t.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = u) : (e.next = u),
    (r.lastBaseUpdate = u);
}
function un(e, u, r, t) {
  var n = e.updateQueue;
  lu = !1;
  var l = n.firstBaseUpdate,
    o = n.lastBaseUpdate,
    i = n.shared.pending;
  if (i !== null) {
    n.shared.pending = null;
    var a = i,
      c = a.next;
    (a.next = null), o === null ? (l = c) : (o.next = c), (o = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (i = h.lastBaseUpdate),
      i !== o &&
        (i === null ? (h.firstBaseUpdate = c) : (i.next = c),
        (h.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var m = n.baseState;
    (o = 0), (h = c = a = null), (i = l);
    do {
      var p = i.lane,
        A = i.eventTime;
      if ((t & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: A,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var E = e,
            C = i;
          switch (((p = u), (A = r), C.tag)) {
            case 1:
              if (((E = C.payload), typeof E == "function")) {
                m = E.call(A, m, p);
                break e;
              }
              m = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = C.payload),
                (p = typeof E == "function" ? E.call(A, m, p) : E),
                p == null)
              )
                break e;
              m = H({}, m, p);
              break e;
            case 2:
              lu = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = n.effects),
          p === null ? (n.effects = [i]) : p.push(i));
      } else
        (A = {
          eventTime: A,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          h === null ? ((c = h = A), (a = m)) : (h = h.next = A),
          (o |= p);
      if (((i = i.next), i === null)) {
        if (((i = n.shared.pending), i === null)) break;
        (p = i),
          (i = p.next),
          (p.next = null),
          (n.lastBaseUpdate = p),
          (n.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (a = m),
      (n.baseState = a),
      (n.firstBaseUpdate = c),
      (n.lastBaseUpdate = h),
      (u = n.shared.interleaved),
      u !== null)
    ) {
      n = u;
      do (o |= n.lane), (n = n.next);
      while (n !== u);
    } else l === null && (n.shared.lanes = 0);
    (zu |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function zi(e, u, r) {
  if (((e = u.effects), (u.effects = null), e !== null))
    for (u = 0; u < e.length; u++) {
      var t = e[u],
        n = t.callback;
      if (n !== null) {
        if (((t.callback = null), (t = r), typeof n != "function"))
          throw Error(D(191, n));
        n.call(t);
      }
    }
}
var lt = {},
  He = Eu(lt),
  Yr = Eu(lt),
  Kr = Eu(lt);
function Su(e) {
  if (e === lt) throw Error(D(174));
  return e;
}
function ko(e, u) {
  switch ((U(Kr, u), U(Yr, e), U(He, lt), (e = u.nodeType), e)) {
    case 9:
    case 11:
      u = (u = u.documentElement) ? u.namespaceURI : pl(null, "");
      break;
    default:
      (e = e === 8 ? u.parentNode : u),
        (u = e.namespaceURI || null),
        (e = e.tagName),
        (u = pl(u, e));
  }
  j(He), U(He, u);
}
function sr() {
  j(He), j(Yr), j(Kr);
}
function ws(e) {
  Su(Kr.current);
  var u = Su(He.current),
    r = pl(u, e.type);
  u !== r && (U(Yr, e), U(He, r));
}
function Fo(e) {
  Yr.current === e && (j(He), j(Yr));
}
var V = Eu(0);
function rn(e) {
  for (var u = e; u !== null; ) {
    if (u.tag === 13) {
      var r = u.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return u;
    } else if (u.tag === 19 && u.memoizedProps.revealOrder !== void 0) {
      if (u.flags & 128) return u;
    } else if (u.child !== null) {
      (u.child.return = u), (u = u.child);
      continue;
    }
    if (u === e) break;
    for (; u.sibling === null; ) {
      if (u.return === null || u.return === e) return null;
      u = u.return;
    }
    (u.sibling.return = u.return), (u = u.sibling);
  }
  return null;
}
var Kn = [];
function So() {
  for (var e = 0; e < Kn.length; e++)
    Kn[e]._workInProgressVersionPrimary = null;
  Kn.length = 0;
}
var zt = uu.ReactCurrentDispatcher,
  Zn = uu.ReactCurrentBatchConfig,
  Ru = 0,
  M = null,
  Y = null,
  Z = null,
  tn = !1,
  zr = !1,
  Zr = 0,
  yf = 0;
function te() {
  throw Error(D(321));
}
function qo(e, u) {
  if (u === null) return !1;
  for (var r = 0; r < u.length && r < e.length; r++)
    if (!je(e[r], u[r])) return !1;
  return !0;
}
function Lo(e, u, r, t, n, l) {
  if (
    ((Ru = l),
    (M = u),
    (u.memoizedState = null),
    (u.updateQueue = null),
    (u.lanes = 0),
    (zt.current = e === null || e.memoizedState === null ? wf : xf),
    (e = r(t, n)),
    zr)
  ) {
    l = 0;
    do {
      if (((zr = !1), (Zr = 0), 25 <= l)) throw Error(D(301));
      (l += 1),
        (Z = Y = null),
        (u.updateQueue = null),
        (zt.current = Bf),
        (e = r(t, n));
    } while (zr);
  }
  if (
    ((zt.current = nn),
    (u = Y !== null && Y.next !== null),
    (Ru = 0),
    (Z = Y = M = null),
    (tn = !1),
    u)
  )
    throw Error(D(300));
  return e;
}
function No() {
  var e = Zr !== 0;
  return (Zr = 0), e;
}
function be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (M.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Te() {
  if (Y === null) {
    var e = M.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var u = Z === null ? M.memoizedState : Z.next;
  if (u !== null) (Z = u), (Y = e);
  else {
    if (e === null) throw Error(D(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (M.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Jr(e, u) {
  return typeof u == "function" ? u(e) : u;
}
function Jn(e) {
  var u = Te(),
    r = u.queue;
  if (r === null) throw Error(D(311));
  r.lastRenderedReducer = e;
  var t = Y,
    n = t.baseQueue,
    l = r.pending;
  if (l !== null) {
    if (n !== null) {
      var o = n.next;
      (n.next = l.next), (l.next = o);
    }
    (t.baseQueue = n = l), (r.pending = null);
  }
  if (n !== null) {
    (l = n.next), (t = t.baseState);
    var i = (o = null),
      a = null,
      c = l;
    do {
      var h = c.lane;
      if ((Ru & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (t = c.hasEagerState ? c.eagerState : e(t, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((i = a = m), (o = t)) : (a = a.next = m),
          (M.lanes |= h),
          (zu |= h);
      }
      c = c.next;
    } while (c !== null && c !== l);
    a === null ? (o = t) : (a.next = i),
      je(t, u.memoizedState) || (me = !0),
      (u.memoizedState = t),
      (u.baseState = o),
      (u.baseQueue = a),
      (r.lastRenderedState = t);
  }
  if (((e = r.interleaved), e !== null)) {
    n = e;
    do (l = n.lane), (M.lanes |= l), (zu |= l), (n = n.next);
    while (n !== e);
  } else n === null && (r.lanes = 0);
  return [u.memoizedState, r.dispatch];
}
function Xn(e) {
  var u = Te(),
    r = u.queue;
  if (r === null) throw Error(D(311));
  r.lastRenderedReducer = e;
  var t = r.dispatch,
    n = r.pending,
    l = u.memoizedState;
  if (n !== null) {
    r.pending = null;
    var o = (n = n.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== n);
    je(l, u.memoizedState) || (me = !0),
      (u.memoizedState = l),
      u.baseQueue === null && (u.baseState = l),
      (r.lastRenderedState = l);
  }
  return [l, t];
}
function xs() {}
function Bs(e, u) {
  var r = M,
    t = Te(),
    n = u(),
    l = !je(t.memoizedState, n);
  if (
    (l && ((t.memoizedState = n), (me = !0)),
    (t = t.queue),
    To(Ss.bind(null, r, t, e), [e]),
    t.getSnapshot !== u || l || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Xr(9, Fs.bind(null, r, t, n, u), void 0, null),
      J === null)
    )
      throw Error(D(349));
    Ru & 30 || ks(r, u, n);
  }
  return n;
}
function ks(e, u, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: u, value: r }),
    (u = M.updateQueue),
    u === null
      ? ((u = { lastEffect: null, stores: null }),
        (M.updateQueue = u),
        (u.stores = [e]))
      : ((r = u.stores), r === null ? (u.stores = [e]) : r.push(e));
}
function Fs(e, u, r, t) {
  (u.value = r), (u.getSnapshot = t), qs(u) && Ls(e);
}
function Ss(e, u, r) {
  return r(function () {
    qs(u) && Ls(e);
  });
}
function qs(e) {
  var u = e.getSnapshot;
  e = e.value;
  try {
    var r = u();
    return !je(e, r);
  } catch {
    return !0;
  }
}
function Ls(e) {
  var u = Xe(e, 1);
  u !== null && Ie(u, e, 1, -1);
}
function Pi(e) {
  var u = be();
  return (
    typeof e == "function" && (e = e()),
    (u.memoizedState = u.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jr,
      lastRenderedState: e,
    }),
    (u.queue = e),
    (e = e.dispatch = Cf.bind(null, M, e)),
    [u.memoizedState, e]
  );
}
function Xr(e, u, r, t) {
  return (
    (e = { tag: e, create: u, destroy: r, deps: t, next: null }),
    (u = M.updateQueue),
    u === null
      ? ((u = { lastEffect: null, stores: null }),
        (M.updateQueue = u),
        (u.lastEffect = e.next = e))
      : ((r = u.lastEffect),
        r === null
          ? (u.lastEffect = e.next = e)
          : ((t = r.next), (r.next = e), (e.next = t), (u.lastEffect = e))),
    e
  );
}
function Ns() {
  return Te().memoizedState;
}
function Pt(e, u, r, t) {
  var n = be();
  (M.flags |= e),
    (n.memoizedState = Xr(1 | u, r, void 0, t === void 0 ? null : t));
}
function En(e, u, r, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var l = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((l = o.destroy), t !== null && qo(t, o.deps))) {
      n.memoizedState = Xr(u, r, l, t);
      return;
    }
  }
  (M.flags |= e), (n.memoizedState = Xr(1 | u, r, l, t));
}
function _i(e, u) {
  return Pt(8390656, 8, e, u);
}
function To(e, u) {
  return En(2048, 8, e, u);
}
function Ts(e, u) {
  return En(4, 2, e, u);
}
function Rs(e, u) {
  return En(4, 4, e, u);
}
function zs(e, u) {
  if (typeof u == "function")
    return (
      (e = e()),
      u(e),
      function () {
        u(null);
      }
    );
  if (u != null)
    return (
      (e = e()),
      (u.current = e),
      function () {
        u.current = null;
      }
    );
}
function Ps(e, u, r) {
  return (
    (r = r != null ? r.concat([e]) : null), En(4, 4, zs.bind(null, u, e), r)
  );
}
function Ro() {}
function _s(e, u) {
  var r = Te();
  u = u === void 0 ? null : u;
  var t = r.memoizedState;
  return t !== null && u !== null && qo(u, t[1])
    ? t[0]
    : ((r.memoizedState = [e, u]), e);
}
function Us(e, u) {
  var r = Te();
  u = u === void 0 ? null : u;
  var t = r.memoizedState;
  return t !== null && u !== null && qo(u, t[1])
    ? t[0]
    : ((e = e()), (r.memoizedState = [e, u]), e);
}
function Is(e, u, r) {
  return Ru & 21
    ? (je(r, u) || ((r = Ma()), (M.lanes |= r), (zu |= r), (e.baseState = !0)),
      u)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = r));
}
function Af(e, u) {
  var r = P;
  (P = r !== 0 && 4 > r ? r : 4), e(!0);
  var t = Zn.transition;
  Zn.transition = {};
  try {
    e(!1), u();
  } finally {
    (P = r), (Zn.transition = t);
  }
}
function js() {
  return Te().memoizedState;
}
function Ef(e, u, r) {
  var t = gu(e);
  if (
    ((r = {
      lane: t,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Os(e))
  )
    bs(u, r);
  else if (((r = Es(e, u, r, t)), r !== null)) {
    var n = ae();
    Ie(r, e, t, n), Vs(r, u, t);
  }
}
function Cf(e, u, r) {
  var t = gu(e),
    n = { lane: t, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Os(e)) bs(u, n);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = u.lastRenderedReducer), l !== null)
    )
      try {
        var o = u.lastRenderedState,
          i = l(o, r);
        if (((n.hasEagerState = !0), (n.eagerState = i), je(i, o))) {
          var a = u.interleaved;
          a === null
            ? ((n.next = n), xo(u))
            : ((n.next = a.next), (a.next = n)),
            (u.interleaved = n);
          return;
        }
      } catch {
      } finally {
      }
    (r = Es(e, u, n, t)),
      r !== null && ((n = ae()), Ie(r, e, t, n), Vs(r, u, t));
  }
}
function Os(e) {
  var u = e.alternate;
  return e === M || (u !== null && u === M);
}
function bs(e, u) {
  zr = tn = !0;
  var r = e.pending;
  r === null ? (u.next = u) : ((u.next = r.next), (r.next = u)),
    (e.pending = u);
}
function Vs(e, u, r) {
  if (r & 4194240) {
    var t = u.lanes;
    (t &= e.pendingLanes), (r |= t), (u.lanes = r), so(e, r);
  }
}
var nn = {
    readContext: Ne,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  wf = {
    readContext: Ne,
    useCallback: function (e, u) {
      return (be().memoizedState = [e, u === void 0 ? null : u]), e;
    },
    useContext: Ne,
    useEffect: _i,
    useImperativeHandle: function (e, u, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Pt(4194308, 4, zs.bind(null, u, e), r)
      );
    },
    useLayoutEffect: function (e, u) {
      return Pt(4194308, 4, e, u);
    },
    useInsertionEffect: function (e, u) {
      return Pt(4, 2, e, u);
    },
    useMemo: function (e, u) {
      var r = be();
      return (
        (u = u === void 0 ? null : u), (e = e()), (r.memoizedState = [e, u]), e
      );
    },
    useReducer: function (e, u, r) {
      var t = be();
      return (
        (u = r !== void 0 ? r(u) : u),
        (t.memoizedState = t.baseState = u),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: u,
        }),
        (t.queue = e),
        (e = e.dispatch = Ef.bind(null, M, e)),
        [t.memoizedState, e]
      );
    },
    useRef: function (e) {
      var u = be();
      return (e = { current: e }), (u.memoizedState = e);
    },
    useState: Pi,
    useDebugValue: Ro,
    useDeferredValue: function (e) {
      return (be().memoizedState = e);
    },
    useTransition: function () {
      var e = Pi(!1),
        u = e[0];
      return (e = Af.bind(null, e[1])), (be().memoizedState = e), [u, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, u, r) {
      var t = M,
        n = be();
      if (b) {
        if (r === void 0) throw Error(D(407));
        r = r();
      } else {
        if (((r = u()), J === null)) throw Error(D(349));
        Ru & 30 || ks(t, u, r);
      }
      n.memoizedState = r;
      var l = { value: r, getSnapshot: u };
      return (
        (n.queue = l),
        _i(Ss.bind(null, t, l, e), [e]),
        (t.flags |= 2048),
        Xr(9, Fs.bind(null, t, l, r, u), void 0, null),
        r
      );
    },
    useId: function () {
      var e = be(),
        u = J.identifierPrefix;
      if (b) {
        var r = Ye,
          t = We;
        (r = (t & ~(1 << (32 - Ue(t) - 1))).toString(32) + r),
          (u = ":" + u + "R" + r),
          (r = Zr++),
          0 < r && (u += "H" + r.toString(32)),
          (u += ":");
      } else (r = yf++), (u = ":" + u + "r" + r.toString(32) + ":");
      return (e.memoizedState = u);
    },
    unstable_isNewReconciler: !1,
  },
  xf = {
    readContext: Ne,
    useCallback: _s,
    useContext: Ne,
    useEffect: To,
    useImperativeHandle: Ps,
    useInsertionEffect: Ts,
    useLayoutEffect: Rs,
    useMemo: Us,
    useReducer: Jn,
    useRef: Ns,
    useState: function () {
      return Jn(Jr);
    },
    useDebugValue: Ro,
    useDeferredValue: function (e) {
      var u = Te();
      return Is(u, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Jn(Jr)[0],
        u = Te().memoizedState;
      return [e, u];
    },
    useMutableSource: xs,
    useSyncExternalStore: Bs,
    useId: js,
    unstable_isNewReconciler: !1,
  },
  Bf = {
    readContext: Ne,
    useCallback: _s,
    useContext: Ne,
    useEffect: To,
    useImperativeHandle: Ps,
    useInsertionEffect: Ts,
    useLayoutEffect: Rs,
    useMemo: Us,
    useReducer: Xn,
    useRef: Ns,
    useState: function () {
      return Xn(Jr);
    },
    useDebugValue: Ro,
    useDeferredValue: function (e) {
      var u = Te();
      return Y === null ? (u.memoizedState = e) : Is(u, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Xn(Jr)[0],
        u = Te().memoizedState;
      return [e, u];
    },
    useMutableSource: xs,
    useSyncExternalStore: Bs,
    useId: js,
    unstable_isNewReconciler: !1,
  };
function ze(e, u) {
  if (e && e.defaultProps) {
    (u = H({}, u)), (e = e.defaultProps);
    for (var r in e) u[r] === void 0 && (u[r] = e[r]);
    return u;
  }
  return u;
}
function zl(e, u, r, t) {
  (u = e.memoizedState),
    (r = r(t, u)),
    (r = r == null ? u : H({}, u, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Cn = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Uu(e) === e : !1;
  },
  enqueueSetState: function (e, u, r) {
    e = e._reactInternals;
    var t = ae(),
      n = gu(e),
      l = Ke(t, n);
    (l.payload = u),
      r != null && (l.callback = r),
      (u = mu(e, l, n)),
      u !== null && (Ie(u, e, n, t), Rt(u, e, n));
  },
  enqueueReplaceState: function (e, u, r) {
    e = e._reactInternals;
    var t = ae(),
      n = gu(e),
      l = Ke(t, n);
    (l.tag = 1),
      (l.payload = u),
      r != null && (l.callback = r),
      (u = mu(e, l, n)),
      u !== null && (Ie(u, e, n, t), Rt(u, e, n));
  },
  enqueueForceUpdate: function (e, u) {
    e = e._reactInternals;
    var r = ae(),
      t = gu(e),
      n = Ke(r, t);
    (n.tag = 2),
      u != null && (n.callback = u),
      (u = mu(e, n, t)),
      u !== null && (Ie(u, e, t, r), Rt(u, e, t));
  },
};
function Ui(e, u, r, t, n, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(t, l, o)
      : u.prototype && u.prototype.isPureReactComponent
      ? !Gr(r, t) || !Gr(n, l)
      : !0
  );
}
function Ms(e, u, r) {
  var t = !1,
    n = yu,
    l = u.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ne(l))
      : ((n = ge(u) ? Nu : oe.current),
        (t = u.contextTypes),
        (l = (t = t != null) ? or(e, n) : yu)),
    (u = new u(r, l)),
    (e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
    (u.updater = Cn),
    (e.stateNode = u),
    (u._reactInternals = e),
    t &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    u
  );
}
function Ii(e, u, r, t) {
  (e = u.state),
    typeof u.componentWillReceiveProps == "function" &&
      u.componentWillReceiveProps(r, t),
    typeof u.UNSAFE_componentWillReceiveProps == "function" &&
      u.UNSAFE_componentWillReceiveProps(r, t),
    u.state !== e && Cn.enqueueReplaceState(u, u.state, null);
}
function Pl(e, u, r, t) {
  var n = e.stateNode;
  (n.props = r), (n.state = e.memoizedState), (n.refs = {}), Bo(e);
  var l = u.contextType;
  typeof l == "object" && l !== null
    ? (n.context = Ne(l))
    : ((l = ge(u) ? Nu : oe.current), (n.context = or(e, l))),
    (n.state = e.memoizedState),
    (l = u.getDerivedStateFromProps),
    typeof l == "function" && (zl(e, u, l, r), (n.state = e.memoizedState)),
    typeof u.getDerivedStateFromProps == "function" ||
      typeof n.getSnapshotBeforeUpdate == "function" ||
      (typeof n.UNSAFE_componentWillMount != "function" &&
        typeof n.componentWillMount != "function") ||
      ((u = n.state),
      typeof n.componentWillMount == "function" && n.componentWillMount(),
      typeof n.UNSAFE_componentWillMount == "function" &&
        n.UNSAFE_componentWillMount(),
      u !== n.state && Cn.enqueueReplaceState(n, n.state, null),
      un(e, r, n, t),
      (n.state = e.memoizedState)),
    typeof n.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, u) {
  try {
    var r = "",
      t = u;
    do (r += J2(t)), (t = t.return);
    while (t);
    var n = r;
  } catch (l) {
    n =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: u, stack: n, digest: null };
}
function el(e, u, r) {
  return { value: e, source: null, stack: r ?? null, digest: u ?? null };
}
function _l(e, u) {
  try {
    console.error(u.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var kf = typeof WeakMap == "function" ? WeakMap : Map;
function Hs(e, u, r) {
  (r = Ke(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var t = u.value;
  return (
    (r.callback = function () {
      on || ((on = !0), (Ql = t)), _l(e, u);
    }),
    r
  );
}
function Gs(e, u, r) {
  (r = Ke(-1, r)), (r.tag = 3);
  var t = e.type.getDerivedStateFromError;
  if (typeof t == "function") {
    var n = u.value;
    (r.payload = function () {
      return t(n);
    }),
      (r.callback = function () {
        _l(e, u);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (r.callback = function () {
        _l(e, u),
          typeof t != "function" &&
            (hu === null ? (hu = new Set([this])) : hu.add(this));
        var o = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function ji(e, u, r) {
  var t = e.pingCache;
  if (t === null) {
    t = e.pingCache = new kf();
    var n = new Set();
    t.set(u, n);
  } else (n = t.get(u)), n === void 0 && ((n = new Set()), t.set(u, n));
  n.has(r) || (n.add(r), (e = Of.bind(null, e, u, r)), u.then(e, e));
}
function Oi(e) {
  do {
    var u;
    if (
      ((u = e.tag === 13) &&
        ((u = e.memoizedState), (u = u !== null ? u.dehydrated !== null : !0)),
      u)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bi(e, u, r, t, n) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = n), e)
    : (e === u
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((u = Ke(-1, 1)), (u.tag = 2), mu(r, u, 1))),
          (r.lanes |= 1)),
      e);
}
var Ff = uu.ReactCurrentOwner,
  me = !1;
function ie(e, u, r, t) {
  u.child = e === null ? As(u, null, r, t) : ar(u, e.child, r, t);
}
function Vi(e, u, r, t, n) {
  r = r.render;
  var l = u.ref;
  return (
    tr(u, n),
    (t = Lo(e, u, r, t, l, n)),
    (r = No()),
    e !== null && !me
      ? ((u.updateQueue = e.updateQueue),
        (u.flags &= -2053),
        (e.lanes &= ~n),
        eu(e, u, n))
      : (b && r && vo(u), (u.flags |= 1), ie(e, u, t, n), u.child)
  );
}
function Mi(e, u, r, t, n) {
  if (e === null) {
    var l = r.type;
    return typeof l == "function" &&
      !bo(l) &&
      l.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((u.tag = 15), (u.type = l), Qs(e, u, l, t, n))
      : ((e = jt(r.type, null, t, u, u.mode, n)),
        (e.ref = u.ref),
        (e.return = u),
        (u.child = e));
  }
  if (((l = e.child), !(e.lanes & n))) {
    var o = l.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Gr), r(o, t) && e.ref === u.ref)
    )
      return eu(e, u, n);
  }
  return (
    (u.flags |= 1),
    (e = Du(l, t)),
    (e.ref = u.ref),
    (e.return = u),
    (u.child = e)
  );
}
function Qs(e, u, r, t, n) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Gr(l, t) && e.ref === u.ref)
      if (((me = !1), (u.pendingProps = t = l), (e.lanes & n) !== 0))
        e.flags & 131072 && (me = !0);
      else return (u.lanes = e.lanes), eu(e, u, n);
  }
  return Ul(e, u, r, t, n);
}
function $s(e, u, r) {
  var t = u.pendingProps,
    n = t.children,
    l = e !== null ? e.memoizedState : null;
  if (t.mode === "hidden")
    if (!(u.mode & 1))
      (u.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Ju, Ae),
        (Ae |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | r : r),
          (u.lanes = u.childLanes = 1073741824),
          (u.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (u.updateQueue = null),
          U(Ju, Ae),
          (Ae |= e),
          null
        );
      (u.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (t = l !== null ? l.baseLanes : r),
        U(Ju, Ae),
        (Ae |= t);
    }
  else
    l !== null ? ((t = l.baseLanes | r), (u.memoizedState = null)) : (t = r),
      U(Ju, Ae),
      (Ae |= t);
  return ie(e, u, n, r), u.child;
}
function Ws(e, u) {
  var r = u.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((u.flags |= 512), (u.flags |= 2097152));
}
function Ul(e, u, r, t, n) {
  var l = ge(r) ? Nu : oe.current;
  return (
    (l = or(u, l)),
    tr(u, n),
    (r = Lo(e, u, r, t, l, n)),
    (t = No()),
    e !== null && !me
      ? ((u.updateQueue = e.updateQueue),
        (u.flags &= -2053),
        (e.lanes &= ~n),
        eu(e, u, n))
      : (b && t && vo(u), (u.flags |= 1), ie(e, u, r, n), u.child)
  );
}
function Hi(e, u, r, t, n) {
  if (ge(r)) {
    var l = !0;
    Kt(u);
  } else l = !1;
  if ((tr(u, n), u.stateNode === null))
    _t(e, u), Ms(u, r, t), Pl(u, r, t, n), (t = !0);
  else if (e === null) {
    var o = u.stateNode,
      i = u.memoizedProps;
    o.props = i;
    var a = o.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = ge(r) ? Nu : oe.current), (c = or(u, c)));
    var h = r.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((i !== t || a !== c) && Ii(u, o, t, c)),
      (lu = !1);
    var p = u.memoizedState;
    (o.state = p),
      un(u, t, o, n),
      (a = u.memoizedState),
      i !== t || p !== a || he.current || lu
        ? (typeof h == "function" && (zl(u, r, h, t), (a = u.memoizedState)),
          (i = lu || Ui(u, r, i, t, p, a, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (u.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (u.flags |= 4194308),
              (u.memoizedProps = t),
              (u.memoizedState = a)),
          (o.props = t),
          (o.state = a),
          (o.context = c),
          (t = i))
        : (typeof o.componentDidMount == "function" && (u.flags |= 4194308),
          (t = !1));
  } else {
    (o = u.stateNode),
      Cs(e, u),
      (i = u.memoizedProps),
      (c = u.type === u.elementType ? i : ze(u.type, i)),
      (o.props = c),
      (m = u.pendingProps),
      (p = o.context),
      (a = r.contextType),
      typeof a == "object" && a !== null
        ? (a = Ne(a))
        : ((a = ge(r) ? Nu : oe.current), (a = or(u, a)));
    var A = r.getDerivedStateFromProps;
    (h =
      typeof A == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((i !== m || p !== a) && Ii(u, o, t, a)),
      (lu = !1),
      (p = u.memoizedState),
      (o.state = p),
      un(u, t, o, n);
    var E = u.memoizedState;
    i !== m || p !== E || he.current || lu
      ? (typeof A == "function" && (zl(u, r, A, t), (E = u.memoizedState)),
        (c = lu || Ui(u, r, c, t, p, E, a) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(t, E, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(t, E, a)),
            typeof o.componentDidUpdate == "function" && (u.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (u.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (u.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (u.flags |= 1024),
            (u.memoizedProps = t),
            (u.memoizedState = E)),
        (o.props = t),
        (o.state = E),
        (o.context = a),
        (t = c))
      : (typeof o.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (u.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (u.flags |= 1024),
        (t = !1));
  }
  return Il(e, u, r, t, l, n);
}
function Il(e, u, r, t, n, l) {
  Ws(e, u);
  var o = (u.flags & 128) !== 0;
  if (!t && !o) return n && qi(u, r, !1), eu(e, u, l);
  (t = u.stateNode), (Ff.current = u);
  var i =
    o && typeof r.getDerivedStateFromError != "function" ? null : t.render();
  return (
    (u.flags |= 1),
    e !== null && o
      ? ((u.child = ar(u, e.child, null, l)), (u.child = ar(u, null, i, l)))
      : ie(e, u, i, l),
    (u.memoizedState = t.state),
    n && qi(u, r, !0),
    u.child
  );
}
function Ys(e) {
  var u = e.stateNode;
  u.pendingContext
    ? Si(e, u.pendingContext, u.pendingContext !== u.context)
    : u.context && Si(e, u.context, !1),
    ko(e, u.containerInfo);
}
function Gi(e, u, r, t, n) {
  return ir(), Ao(n), (u.flags |= 256), ie(e, u, r, t), u.child;
}
var jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ol(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ks(e, u, r) {
  var t = u.pendingProps,
    n = V.current,
    l = !1,
    o = (u.flags & 128) !== 0,
    i;
  if (
    ((i = o) ||
      (i = e !== null && e.memoizedState === null ? !1 : (n & 2) !== 0),
    i
      ? ((l = !0), (u.flags &= -129))
      : (e === null || e.memoizedState !== null) && (n |= 1),
    U(V, n & 1),
    e === null)
  )
    return (
      Tl(u),
      (e = u.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (u.mode & 1
            ? e.data === "$!"
              ? (u.lanes = 8)
              : (u.lanes = 1073741824)
            : (u.lanes = 1),
          null)
        : ((o = t.children),
          (e = t.fallback),
          l
            ? ((t = u.mode),
              (l = u.child),
              (o = { mode: "hidden", children: o }),
              !(t & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = Bn(o, t, 0, null)),
              (e = Lu(e, t, r, null)),
              (l.return = u),
              (e.return = u),
              (l.sibling = e),
              (u.child = l),
              (u.child.memoizedState = Ol(r)),
              (u.memoizedState = jl),
              e)
            : zo(u, o))
    );
  if (((n = e.memoizedState), n !== null && ((i = n.dehydrated), i !== null)))
    return Sf(e, u, o, t, i, n, r);
  if (l) {
    (l = t.fallback), (o = u.mode), (n = e.child), (i = n.sibling);
    var a = { mode: "hidden", children: t.children };
    return (
      !(o & 1) && u.child !== n
        ? ((t = u.child),
          (t.childLanes = 0),
          (t.pendingProps = a),
          (u.deletions = null))
        : ((t = Du(n, a)), (t.subtreeFlags = n.subtreeFlags & 14680064)),
      i !== null ? (l = Du(i, l)) : ((l = Lu(l, o, r, null)), (l.flags |= 2)),
      (l.return = u),
      (t.return = u),
      (t.sibling = l),
      (u.child = t),
      (t = l),
      (l = u.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ol(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~r),
      (u.memoizedState = jl),
      t
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (t = Du(l, { mode: "visible", children: t.children })),
    !(u.mode & 1) && (t.lanes = r),
    (t.return = u),
    (t.sibling = null),
    e !== null &&
      ((r = u.deletions),
      r === null ? ((u.deletions = [e]), (u.flags |= 16)) : r.push(e)),
    (u.child = t),
    (u.memoizedState = null),
    t
  );
}
function zo(e, u) {
  return (
    (u = Bn({ mode: "visible", children: u }, e.mode, 0, null)),
    (u.return = e),
    (e.child = u)
  );
}
function xt(e, u, r, t) {
  return (
    t !== null && Ao(t),
    ar(u, e.child, null, r),
    (e = zo(u, u.pendingProps.children)),
    (e.flags |= 2),
    (u.memoizedState = null),
    e
  );
}
function Sf(e, u, r, t, n, l, o) {
  if (r)
    return u.flags & 256
      ? ((u.flags &= -257), (t = el(Error(D(422)))), xt(e, u, o, t))
      : u.memoizedState !== null
      ? ((u.child = e.child), (u.flags |= 128), null)
      : ((l = t.fallback),
        (n = u.mode),
        (t = Bn({ mode: "visible", children: t.children }, n, 0, null)),
        (l = Lu(l, n, o, null)),
        (l.flags |= 2),
        (t.return = u),
        (l.return = u),
        (t.sibling = l),
        (u.child = t),
        u.mode & 1 && ar(u, e.child, null, o),
        (u.child.memoizedState = Ol(o)),
        (u.memoizedState = jl),
        l);
  if (!(u.mode & 1)) return xt(e, u, o, null);
  if (n.data === "$!") {
    if (((t = n.nextSibling && n.nextSibling.dataset), t)) var i = t.dgst;
    return (t = i), (l = Error(D(419))), (t = el(l, t, void 0)), xt(e, u, o, t);
  }
  if (((i = (o & e.childLanes) !== 0), me || i)) {
    if (((t = J), t !== null)) {
      switch (o & -o) {
        case 4:
          n = 2;
          break;
        case 16:
          n = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          n = 32;
          break;
        case 536870912:
          n = 268435456;
          break;
        default:
          n = 0;
      }
      (n = n & (t.suspendedLanes | o) ? 0 : n),
        n !== 0 &&
          n !== l.retryLane &&
          ((l.retryLane = n), Xe(e, n), Ie(t, e, n, -1));
    }
    return Oo(), (t = el(Error(D(421)))), xt(e, u, o, t);
  }
  return n.data === "$?"
    ? ((u.flags |= 128),
      (u.child = e.child),
      (u = bf.bind(null, e)),
      (n._reactRetry = u),
      null)
    : ((e = l.treeContext),
      (Ee = pu(n.nextSibling)),
      (Ce = u),
      (b = !0),
      (_e = null),
      e !== null &&
        ((Fe[Se++] = We),
        (Fe[Se++] = Ye),
        (Fe[Se++] = Tu),
        (We = e.id),
        (Ye = e.overflow),
        (Tu = u)),
      (u = zo(u, t.children)),
      (u.flags |= 4096),
      u);
}
function Qi(e, u, r) {
  e.lanes |= u;
  var t = e.alternate;
  t !== null && (t.lanes |= u), Rl(e.return, u, r);
}
function ul(e, u, r, t, n) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: u,
        rendering: null,
        renderingStartTime: 0,
        last: t,
        tail: r,
        tailMode: n,
      })
    : ((l.isBackwards = u),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = t),
      (l.tail = r),
      (l.tailMode = n));
}
function Zs(e, u, r) {
  var t = u.pendingProps,
    n = t.revealOrder,
    l = t.tail;
  if ((ie(e, u, t.children, r), (t = V.current), t & 2))
    (t = (t & 1) | 2), (u.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = u.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qi(e, r, u);
        else if (e.tag === 19) Qi(e, r, u);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === u) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === u) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    t &= 1;
  }
  if ((U(V, t), !(u.mode & 1))) u.memoizedState = null;
  else
    switch (n) {
      case "forwards":
        for (r = u.child, n = null; r !== null; )
          (e = r.alternate),
            e !== null && rn(e) === null && (n = r),
            (r = r.sibling);
        (r = n),
          r === null
            ? ((n = u.child), (u.child = null))
            : ((n = r.sibling), (r.sibling = null)),
          ul(u, !1, n, r, l);
        break;
      case "backwards":
        for (r = null, n = u.child, u.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && rn(e) === null)) {
            u.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = r), (r = n), (n = e);
        }
        ul(u, !0, r, null, l);
        break;
      case "together":
        ul(u, !1, null, null, void 0);
        break;
      default:
        u.memoizedState = null;
    }
  return u.child;
}
function _t(e, u) {
  !(u.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (u.alternate = null), (u.flags |= 2));
}
function eu(e, u, r) {
  if (
    (e !== null && (u.dependencies = e.dependencies),
    (zu |= u.lanes),
    !(r & u.childLanes))
  )
    return null;
  if (e !== null && u.child !== e.child) throw Error(D(153));
  if (u.child !== null) {
    for (
      e = u.child, r = Du(e, e.pendingProps), u.child = r, r.return = u;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Du(e, e.pendingProps)), (r.return = u);
    r.sibling = null;
  }
  return u.child;
}
function qf(e, u, r) {
  switch (u.tag) {
    case 3:
      Ys(u), ir();
      break;
    case 5:
      ws(u);
      break;
    case 1:
      ge(u.type) && Kt(u);
      break;
    case 4:
      ko(u, u.stateNode.containerInfo);
      break;
    case 10:
      var t = u.type._context,
        n = u.memoizedProps.value;
      U(Xt, t._currentValue), (t._currentValue = n);
      break;
    case 13:
      if (((t = u.memoizedState), t !== null))
        return t.dehydrated !== null
          ? (U(V, V.current & 1), (u.flags |= 128), null)
          : r & u.child.childLanes
          ? Ks(e, u, r)
          : (U(V, V.current & 1),
            (e = eu(e, u, r)),
            e !== null ? e.sibling : null);
      U(V, V.current & 1);
      break;
    case 19:
      if (((t = (r & u.childLanes) !== 0), e.flags & 128)) {
        if (t) return Zs(e, u, r);
        u.flags |= 128;
      }
      if (
        ((n = u.memoizedState),
        n !== null &&
          ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
        U(V, V.current),
        t)
      )
        break;
      return null;
    case 22:
    case 23:
      return (u.lanes = 0), $s(e, u, r);
  }
  return eu(e, u, r);
}
var Js, bl, Xs, e2;
Js = function (e, u) {
  for (var r = u.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === u) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === u) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
bl = function () {};
Xs = function (e, u, r, t) {
  var n = e.memoizedProps;
  if (n !== t) {
    (e = u.stateNode), Su(He.current);
    var l = null;
    switch (r) {
      case "input":
        (n = sl(e, n)), (t = sl(e, t)), (l = []);
        break;
      case "select":
        (n = H({}, n, { value: void 0 })),
          (t = H({}, t, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (n = dl(e, n)), (t = dl(e, t)), (l = []);
        break;
      default:
        typeof n.onClick != "function" &&
          typeof t.onClick == "function" &&
          (e.onclick = Wt);
    }
    ml(r, t);
    var o;
    r = null;
    for (c in n)
      if (!t.hasOwnProperty(c) && n.hasOwnProperty(c) && n[c] != null)
        if (c === "style") {
          var i = n[c];
          for (o in i) i.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ir.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in t) {
      var a = t[c];
      if (
        ((i = n != null ? n[c] : void 0),
        t.hasOwnProperty(c) && a !== i && (a != null || i != null))
      )
        if (c === "style")
          if (i) {
            for (o in i)
              !i.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                i[o] !== a[o] &&
                (r || (r = {}), (r[o] = a[o]));
          } else r || (l || (l = []), l.push(c, r)), (r = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (i = i ? i.__html : void 0),
              a != null && i !== a && (l = l || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ir.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && I("scroll", e),
                  l || i === a || (l = []))
                : (l = l || []).push(c, a));
    }
    r && (l = l || []).push("style", r);
    var c = l;
    (u.updateQueue = c) && (u.flags |= 4);
  }
};
e2 = function (e, u, r, t) {
  r !== t && (u.flags |= 4);
};
function Cr(e, u) {
  if (!b)
    switch (e.tailMode) {
      case "hidden":
        u = e.tail;
        for (var r = null; u !== null; )
          u.alternate !== null && (r = u), (u = u.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var t = null; r !== null; )
          r.alternate !== null && (t = r), (r = r.sibling);
        t === null
          ? u || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (t.sibling = null);
    }
}
function ne(e) {
  var u = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    t = 0;
  if (u)
    for (var n = e.child; n !== null; )
      (r |= n.lanes | n.childLanes),
        (t |= n.subtreeFlags & 14680064),
        (t |= n.flags & 14680064),
        (n.return = e),
        (n = n.sibling);
  else
    for (n = e.child; n !== null; )
      (r |= n.lanes | n.childLanes),
        (t |= n.subtreeFlags),
        (t |= n.flags),
        (n.return = e),
        (n = n.sibling);
  return (e.subtreeFlags |= t), (e.childLanes = r), u;
}
function Lf(e, u, r) {
  var t = u.pendingProps;
  switch ((yo(u), u.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(u), null;
    case 1:
      return ge(u.type) && Yt(), ne(u), null;
    case 3:
      return (
        (t = u.stateNode),
        sr(),
        j(he),
        j(oe),
        So(),
        t.pendingContext &&
          ((t.context = t.pendingContext), (t.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ct(u)
            ? (u.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(u.flags & 256)) ||
              ((u.flags |= 1024), _e !== null && (Yl(_e), (_e = null)))),
        bl(e, u),
        ne(u),
        null
      );
    case 5:
      Fo(u);
      var n = Su(Kr.current);
      if (((r = u.type), e !== null && u.stateNode != null))
        Xs(e, u, r, t, n),
          e.ref !== u.ref && ((u.flags |= 512), (u.flags |= 2097152));
      else {
        if (!t) {
          if (u.stateNode === null) throw Error(D(166));
          return ne(u), null;
        }
        if (((e = Su(He.current)), Ct(u))) {
          (t = u.stateNode), (r = u.type);
          var l = u.memoizedProps;
          switch (((t[Ve] = u), (t[Wr] = l), (e = (u.mode & 1) !== 0), r)) {
            case "dialog":
              I("cancel", t), I("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Fr.length; n++) I(Fr[n], t);
              break;
            case "source":
              I("error", t);
              break;
            case "img":
            case "image":
            case "link":
              I("error", t), I("load", t);
              break;
            case "details":
              I("toggle", t);
              break;
            case "input":
              ui(t, l), I("invalid", t);
              break;
            case "select":
              (t._wrapperState = { wasMultiple: !!l.multiple }),
                I("invalid", t);
              break;
            case "textarea":
              ti(t, l), I("invalid", t);
          }
          ml(r, l), (n = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var i = l[o];
              o === "children"
                ? typeof i == "string"
                  ? t.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Et(t.textContent, i, e),
                    (n = ["children", i]))
                  : typeof i == "number" &&
                    t.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Et(t.textContent, i, e),
                    (n = ["children", "" + i]))
                : Ir.hasOwnProperty(o) &&
                  i != null &&
                  o === "onScroll" &&
                  I("scroll", t);
            }
          switch (r) {
            case "input":
              pt(t), ri(t, l, !0);
              break;
            case "textarea":
              pt(t), ni(t);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (t.onclick = Wt);
          }
          (t = n), (u.updateQueue = t), t !== null && (u.flags |= 4);
        } else {
          (o = n.nodeType === 9 ? n : n.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sa(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof t.is == "string"
                ? (e = o.createElement(r, { is: t.is }))
                : ((e = o.createElement(r)),
                  r === "select" &&
                    ((o = e),
                    t.multiple
                      ? (o.multiple = !0)
                      : t.size && (o.size = t.size)))
              : (e = o.createElementNS(e, r)),
            (e[Ve] = u),
            (e[Wr] = t),
            Js(e, u, !1, !1),
            (u.stateNode = e);
          e: {
            switch (((o = hl(r, t)), r)) {
              case "dialog":
                I("cancel", e), I("close", e), (n = t);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (n = t);
                break;
              case "video":
              case "audio":
                for (n = 0; n < Fr.length; n++) I(Fr[n], e);
                n = t;
                break;
              case "source":
                I("error", e), (n = t);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (n = t);
                break;
              case "details":
                I("toggle", e), (n = t);
                break;
              case "input":
                ui(e, t), (n = sl(e, t)), I("invalid", e);
                break;
              case "option":
                n = t;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!t.multiple }),
                  (n = H({}, t, { value: void 0 })),
                  I("invalid", e);
                break;
              case "textarea":
                ti(e, t), (n = dl(e, t)), I("invalid", e);
                break;
              default:
                n = t;
            }
            ml(r, n), (i = n);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var a = i[l];
                l === "style"
                  ? Na(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && qa(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (r !== "textarea" || a !== "") && jr(e, a)
                    : typeof a == "number" && jr(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Ir.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && I("scroll", e)
                      : a != null && to(e, l, a, o));
              }
            switch (r) {
              case "input":
                pt(e), ri(e, t, !1);
                break;
              case "textarea":
                pt(e), ni(e);
                break;
              case "option":
                t.value != null && e.setAttribute("value", "" + vu(t.value));
                break;
              case "select":
                (e.multiple = !!t.multiple),
                  (l = t.value),
                  l != null
                    ? Xu(e, !!t.multiple, l, !1)
                    : t.defaultValue != null &&
                      Xu(e, !!t.multiple, t.defaultValue, !0);
                break;
              default:
                typeof n.onClick == "function" && (e.onclick = Wt);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!t.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
          }
          t && (u.flags |= 4);
        }
        u.ref !== null && ((u.flags |= 512), (u.flags |= 2097152));
      }
      return ne(u), null;
    case 6:
      if (e && u.stateNode != null) e2(e, u, e.memoizedProps, t);
      else {
        if (typeof t != "string" && u.stateNode === null) throw Error(D(166));
        if (((r = Su(Kr.current)), Su(He.current), Ct(u))) {
          if (
            ((t = u.stateNode),
            (r = u.memoizedProps),
            (t[Ve] = u),
            (l = t.nodeValue !== r) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Et(t.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Et(t.nodeValue, r, (e.mode & 1) !== 0);
            }
          l && (u.flags |= 4);
        } else
          (t = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(t)),
            (t[Ve] = u),
            (u.stateNode = t);
      }
      return ne(u), null;
    case 13:
      if (
        (j(V),
        (t = u.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && Ee !== null && u.mode & 1 && !(u.flags & 128))
          vs(), ir(), (u.flags |= 98560), (l = !1);
        else if (((l = Ct(u)), t !== null && t.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(D(318));
            if (
              ((l = u.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(D(317));
            l[Ve] = u;
          } else
            ir(), !(u.flags & 128) && (u.memoizedState = null), (u.flags |= 4);
          ne(u), (l = !1);
        } else _e !== null && (Yl(_e), (_e = null)), (l = !0);
        if (!l) return u.flags & 65536 ? u : null;
      }
      return u.flags & 128
        ? ((u.lanes = r), u)
        : ((t = t !== null),
          t !== (e !== null && e.memoizedState !== null) &&
            t &&
            ((u.child.flags |= 8192),
            u.mode & 1 &&
              (e === null || V.current & 1 ? K === 0 && (K = 3) : Oo())),
          u.updateQueue !== null && (u.flags |= 4),
          ne(u),
          null);
    case 4:
      return (
        sr(), bl(e, u), e === null && Qr(u.stateNode.containerInfo), ne(u), null
      );
    case 10:
      return wo(u.type._context), ne(u), null;
    case 17:
      return ge(u.type) && Yt(), ne(u), null;
    case 19:
      if ((j(V), (l = u.memoizedState), l === null)) return ne(u), null;
      if (((t = (u.flags & 128) !== 0), (o = l.rendering), o === null))
        if (t) Cr(l, !1);
        else {
          if (K !== 0 || (e !== null && e.flags & 128))
            for (e = u.child; e !== null; ) {
              if (((o = rn(e)), o !== null)) {
                for (
                  u.flags |= 128,
                    Cr(l, !1),
                    t = o.updateQueue,
                    t !== null && ((u.updateQueue = t), (u.flags |= 4)),
                    u.subtreeFlags = 0,
                    t = r,
                    r = u.child;
                  r !== null;

                )
                  (l = r),
                    (e = t),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return U(V, (V.current & 1) | 2), u.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            $() > fr &&
            ((u.flags |= 128), (t = !0), Cr(l, !1), (u.lanes = 4194304));
        }
      else {
        if (!t)
          if (((e = rn(o)), e !== null)) {
            if (
              ((u.flags |= 128),
              (t = !0),
              (r = e.updateQueue),
              r !== null && ((u.updateQueue = r), (u.flags |= 4)),
              Cr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !b)
            )
              return ne(u), null;
          } else
            2 * $() - l.renderingStartTime > fr &&
              r !== 1073741824 &&
              ((u.flags |= 128), (t = !0), Cr(l, !1), (u.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = u.child), (u.child = o))
          : ((r = l.last),
            r !== null ? (r.sibling = o) : (u.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((u = l.tail),
          (l.rendering = u),
          (l.tail = u.sibling),
          (l.renderingStartTime = $()),
          (u.sibling = null),
          (r = V.current),
          U(V, t ? (r & 1) | 2 : r & 1),
          u)
        : (ne(u), null);
    case 22:
    case 23:
      return (
        jo(),
        (t = u.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== t && (u.flags |= 8192),
        t && u.mode & 1
          ? Ae & 1073741824 && (ne(u), u.subtreeFlags & 6 && (u.flags |= 8192))
          : ne(u),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, u.tag));
}
function Nf(e, u) {
  switch ((yo(u), u.tag)) {
    case 1:
      return (
        ge(u.type) && Yt(),
        (e = u.flags),
        e & 65536 ? ((u.flags = (e & -65537) | 128), u) : null
      );
    case 3:
      return (
        sr(),
        j(he),
        j(oe),
        So(),
        (e = u.flags),
        e & 65536 && !(e & 128) ? ((u.flags = (e & -65537) | 128), u) : null
      );
    case 5:
      return Fo(u), null;
    case 13:
      if ((j(V), (e = u.memoizedState), e !== null && e.dehydrated !== null)) {
        if (u.alternate === null) throw Error(D(340));
        ir();
      }
      return (
        (e = u.flags), e & 65536 ? ((u.flags = (e & -65537) | 128), u) : null
      );
    case 19:
      return j(V), null;
    case 4:
      return sr(), null;
    case 10:
      return wo(u.type._context), null;
    case 22:
    case 23:
      return jo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bt = !1,
  le = !1,
  Tf = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function Zu(e, u) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (t) {
        G(e, u, t);
      }
    else r.current = null;
}
function Vl(e, u, r) {
  try {
    r();
  } catch (t) {
    G(e, u, t);
  }
}
var $i = !1;
function Rf(e, u) {
  if (((Bl = Gt), (e = ls()), Do(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var t = r.getSelection && r.getSelection();
        if (t && t.rangeCount !== 0) {
          r = t.anchorNode;
          var n = t.anchorOffset,
            l = t.focusNode;
          t = t.focusOffset;
          try {
            r.nodeType, l.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            i = -1,
            a = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          u: for (;;) {
            for (
              var A;
              m !== r || (n !== 0 && m.nodeType !== 3) || (i = o + n),
                m !== l || (t !== 0 && m.nodeType !== 3) || (a = o + t),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (A = m.firstChild) !== null;

            )
              (p = m), (m = A);
            for (;;) {
              if (m === e) break u;
              if (
                (p === r && ++c === n && (i = o),
                p === l && ++h === t && (a = o),
                (A = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = A;
          }
          r = i === -1 || a === -1 ? null : { start: i, end: a };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (kl = { focusedElem: e, selectionRange: r }, Gt = !1, B = u; B !== null; )
    if (((u = B), (e = u.child), (u.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = u), (B = e);
    else
      for (; B !== null; ) {
        u = B;
        try {
          var E = u.alternate;
          if (u.flags & 1024)
            switch (u.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var C = E.memoizedProps,
                    _ = E.memoizedState,
                    f = u.stateNode,
                    s = f.getSnapshotBeforeUpdate(
                      u.elementType === u.type ? C : ze(u.type, C),
                      _
                    );
                  f.__reactInternalSnapshotBeforeUpdate = s;
                }
                break;
              case 3:
                var d = u.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (g) {
          G(u, u.return, g);
        }
        if (((e = u.sibling), e !== null)) {
          (e.return = u.return), (B = e);
          break;
        }
        B = u.return;
      }
  return (E = $i), ($i = !1), E;
}
function Pr(e, u, r) {
  var t = u.updateQueue;
  if (((t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var l = n.destroy;
        (n.destroy = void 0), l !== void 0 && Vl(u, r, l);
      }
      n = n.next;
    } while (n !== t);
  }
}
function wn(e, u) {
  if (
    ((u = u.updateQueue), (u = u !== null ? u.lastEffect : null), u !== null)
  ) {
    var r = (u = u.next);
    do {
      if ((r.tag & e) === e) {
        var t = r.create;
        r.destroy = t();
      }
      r = r.next;
    } while (r !== u);
  }
}
function Ml(e) {
  var u = e.ref;
  if (u !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof u == "function" ? u(e) : (u.current = e);
  }
}
function u2(e) {
  var u = e.alternate;
  u !== null && ((e.alternate = null), u2(u)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((u = e.stateNode),
      u !== null &&
        (delete u[Ve], delete u[Wr], delete u[ql], delete u[hf], delete u[gf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function r2(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || r2(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hl(e, u, r) {
  var t = e.tag;
  if (t === 5 || t === 6)
    (e = e.stateNode),
      u
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, u)
          : r.insertBefore(e, u)
        : (r.nodeType === 8
            ? ((u = r.parentNode), u.insertBefore(e, r))
            : ((u = r), u.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || u.onclick !== null || (u.onclick = Wt));
  else if (t !== 4 && ((e = e.child), e !== null))
    for (Hl(e, u, r), e = e.sibling; e !== null; ) Hl(e, u, r), (e = e.sibling);
}
function Gl(e, u, r) {
  var t = e.tag;
  if (t === 5 || t === 6)
    (e = e.stateNode), u ? r.insertBefore(e, u) : r.appendChild(e);
  else if (t !== 4 && ((e = e.child), e !== null))
    for (Gl(e, u, r), e = e.sibling; e !== null; ) Gl(e, u, r), (e = e.sibling);
}
var X = null,
  Pe = !1;
function tu(e, u, r) {
  for (r = r.child; r !== null; ) t2(e, u, r), (r = r.sibling);
}
function t2(e, u, r) {
  if (Me && typeof Me.onCommitFiberUnmount == "function")
    try {
      Me.onCommitFiberUnmount(hn, r);
    } catch {}
  switch (r.tag) {
    case 5:
      le || Zu(r, u);
    case 6:
      var t = X,
        n = Pe;
      (X = null),
        tu(e, u, r),
        (X = t),
        (Pe = n),
        X !== null &&
          (Pe
            ? ((e = X),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : X.removeChild(r.stateNode));
      break;
    case 18:
      X !== null &&
        (Pe
          ? ((e = X),
            (r = r.stateNode),
            e.nodeType === 8
              ? Wn(e.parentNode, r)
              : e.nodeType === 1 && Wn(e, r),
            Mr(e))
          : Wn(X, r.stateNode));
      break;
    case 4:
      (t = X),
        (n = Pe),
        (X = r.stateNode.containerInfo),
        (Pe = !0),
        tu(e, u, r),
        (X = t),
        (Pe = n);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((t = r.updateQueue), t !== null && ((t = t.lastEffect), t !== null))
      ) {
        n = t = t.next;
        do {
          var l = n,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && Vl(r, u, o),
            (n = n.next);
        } while (n !== t);
      }
      tu(e, u, r);
      break;
    case 1:
      if (
        !le &&
        (Zu(r, u),
        (t = r.stateNode),
        typeof t.componentWillUnmount == "function")
      )
        try {
          (t.props = r.memoizedProps),
            (t.state = r.memoizedState),
            t.componentWillUnmount();
        } catch (i) {
          G(r, u, i);
        }
      tu(e, u, r);
      break;
    case 21:
      tu(e, u, r);
      break;
    case 22:
      r.mode & 1
        ? ((le = (t = le) || r.memoizedState !== null), tu(e, u, r), (le = t))
        : tu(e, u, r);
      break;
    default:
      tu(e, u, r);
  }
}
function Yi(e) {
  var u = e.updateQueue;
  if (u !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Tf()),
      u.forEach(function (t) {
        var n = Vf.bind(null, e, t);
        r.has(t) || (r.add(t), t.then(n, n));
      });
  }
}
function Re(e, u) {
  var r = u.deletions;
  if (r !== null)
    for (var t = 0; t < r.length; t++) {
      var n = r[t];
      try {
        var l = e,
          o = u,
          i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (X = i.stateNode), (Pe = !1);
              break e;
            case 3:
              (X = i.stateNode.containerInfo), (Pe = !0);
              break e;
            case 4:
              (X = i.stateNode.containerInfo), (Pe = !0);
              break e;
          }
          i = i.return;
        }
        if (X === null) throw Error(D(160));
        t2(l, o, n), (X = null), (Pe = !1);
        var a = n.alternate;
        a !== null && (a.return = null), (n.return = null);
      } catch (c) {
        G(n, u, c);
      }
    }
  if (u.subtreeFlags & 12854)
    for (u = u.child; u !== null; ) n2(u, e), (u = u.sibling);
}
function n2(e, u) {
  var r = e.alternate,
    t = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(u, e), Oe(e), t & 4)) {
        try {
          Pr(3, e, e.return), wn(3, e);
        } catch (C) {
          G(e, e.return, C);
        }
        try {
          Pr(5, e, e.return);
        } catch (C) {
          G(e, e.return, C);
        }
      }
      break;
    case 1:
      Re(u, e), Oe(e), t & 512 && r !== null && Zu(r, r.return);
      break;
    case 5:
      if (
        (Re(u, e),
        Oe(e),
        t & 512 && r !== null && Zu(r, r.return),
        e.flags & 32)
      ) {
        var n = e.stateNode;
        try {
          jr(n, "");
        } catch (C) {
          G(e, e.return, C);
        }
      }
      if (t & 4 && ((n = e.stateNode), n != null)) {
        var l = e.memoizedProps,
          o = r !== null ? r.memoizedProps : l,
          i = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && ka(n, l),
              hl(i, o);
            var c = hl(i, l);
            for (o = 0; o < a.length; o += 2) {
              var h = a[o],
                m = a[o + 1];
              h === "style"
                ? Na(n, m)
                : h === "dangerouslySetInnerHTML"
                ? qa(n, m)
                : h === "children"
                ? jr(n, m)
                : to(n, h, m, c);
            }
            switch (i) {
              case "input":
                cl(n, l);
                break;
              case "textarea":
                Fa(n, l);
                break;
              case "select":
                var p = n._wrapperState.wasMultiple;
                n._wrapperState.wasMultiple = !!l.multiple;
                var A = l.value;
                A != null
                  ? Xu(n, !!l.multiple, A, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Xu(n, !!l.multiple, l.defaultValue, !0)
                      : Xu(n, !!l.multiple, l.multiple ? [] : "", !1));
            }
            n[Wr] = l;
          } catch (C) {
            G(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((Re(u, e), Oe(e), t & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (n = e.stateNode), (l = e.memoizedProps);
        try {
          n.nodeValue = l;
        } catch (C) {
          G(e, e.return, C);
        }
      }
      break;
    case 3:
      if (
        (Re(u, e), Oe(e), t & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Mr(u.containerInfo);
        } catch (C) {
          G(e, e.return, C);
        }
      break;
    case 4:
      Re(u, e), Oe(e);
      break;
    case 13:
      Re(u, e),
        Oe(e),
        (n = e.child),
        n.flags & 8192 &&
          ((l = n.memoizedState !== null),
          (n.stateNode.isHidden = l),
          !l ||
            (n.alternate !== null && n.alternate.memoizedState !== null) ||
            (Uo = $())),
        t & 4 && Yi(e);
      break;
    case 22:
      if (
        ((h = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || h), Re(u, e), (le = c)) : Re(u, e),
        Oe(e),
        t & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (B = e, h = e.child; h !== null; ) {
            for (m = B = h; B !== null; ) {
              switch (((p = B), (A = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, p, p.return);
                  break;
                case 1:
                  Zu(p, p.return);
                  var E = p.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (t = p), (r = p.return);
                    try {
                      (u = t),
                        (E.props = u.memoizedProps),
                        (E.state = u.memoizedState),
                        E.componentWillUnmount();
                    } catch (C) {
                      G(t, r, C);
                    }
                  }
                  break;
                case 5:
                  Zu(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Zi(m);
                    continue;
                  }
              }
              A !== null ? ((A.return = p), (B = A)) : Zi(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (n = m.stateNode),
                  c
                    ? ((l = n.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = m.stateNode),
                      (a = m.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (i.style.display = La("display", o)));
              } catch (C) {
                G(e, e.return, C);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (C) {
                G(e, e.return, C);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Re(u, e), Oe(e), t & 4 && Yi(e);
      break;
    case 21:
      break;
    default:
      Re(u, e), Oe(e);
  }
}
function Oe(e) {
  var u = e.flags;
  if (u & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (r2(r)) {
            var t = r;
            break e;
          }
          r = r.return;
        }
        throw Error(D(160));
      }
      switch (t.tag) {
        case 5:
          var n = t.stateNode;
          t.flags & 32 && (jr(n, ""), (t.flags &= -33));
          var l = Wi(e);
          Gl(e, l, n);
          break;
        case 3:
        case 4:
          var o = t.stateNode.containerInfo,
            i = Wi(e);
          Hl(e, i, o);
          break;
        default:
          throw Error(D(161));
      }
    } catch (a) {
      G(e, e.return, a);
    }
    e.flags &= -3;
  }
  u & 4096 && (e.flags &= -4097);
}
function zf(e, u, r) {
  (B = e), l2(e);
}
function l2(e, u, r) {
  for (var t = (e.mode & 1) !== 0; B !== null; ) {
    var n = B,
      l = n.child;
    if (n.tag === 22 && t) {
      var o = n.memoizedState !== null || Bt;
      if (!o) {
        var i = n.alternate,
          a = (i !== null && i.memoizedState !== null) || le;
        i = Bt;
        var c = le;
        if (((Bt = o), (le = a) && !c))
          for (B = n; B !== null; )
            (o = B),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ji(n)
                : a !== null
                ? ((a.return = o), (B = a))
                : Ji(n);
        for (; l !== null; ) (B = l), l2(l), (l = l.sibling);
        (B = n), (Bt = i), (le = c);
      }
      Ki(e);
    } else
      n.subtreeFlags & 8772 && l !== null ? ((l.return = n), (B = l)) : Ki(e);
  }
}
function Ki(e) {
  for (; B !== null; ) {
    var u = B;
    if (u.flags & 8772) {
      var r = u.alternate;
      try {
        if (u.flags & 8772)
          switch (u.tag) {
            case 0:
            case 11:
            case 15:
              le || wn(5, u);
              break;
            case 1:
              var t = u.stateNode;
              if (u.flags & 4 && !le)
                if (r === null) t.componentDidMount();
                else {
                  var n =
                    u.elementType === u.type
                      ? r.memoizedProps
                      : ze(u.type, r.memoizedProps);
                  t.componentDidUpdate(
                    n,
                    r.memoizedState,
                    t.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = u.updateQueue;
              l !== null && zi(u, l, t);
              break;
            case 3:
              var o = u.updateQueue;
              if (o !== null) {
                if (((r = null), u.child !== null))
                  switch (u.child.tag) {
                    case 5:
                      r = u.child.stateNode;
                      break;
                    case 1:
                      r = u.child.stateNode;
                  }
                zi(u, o, r);
              }
              break;
            case 5:
              var i = u.stateNode;
              if (r === null && u.flags & 4) {
                r = i;
                var a = u.memoizedProps;
                switch (u.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && r.focus();
                    break;
                  case "img":
                    a.src && (r.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (u.memoizedState === null) {
                var c = u.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Mr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        le || (u.flags & 512 && Ml(u));
      } catch (p) {
        G(u, u.return, p);
      }
    }
    if (u === e) {
      B = null;
      break;
    }
    if (((r = u.sibling), r !== null)) {
      (r.return = u.return), (B = r);
      break;
    }
    B = u.return;
  }
}
function Zi(e) {
  for (; B !== null; ) {
    var u = B;
    if (u === e) {
      B = null;
      break;
    }
    var r = u.sibling;
    if (r !== null) {
      (r.return = u.return), (B = r);
      break;
    }
    B = u.return;
  }
}
function Ji(e) {
  for (; B !== null; ) {
    var u = B;
    try {
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          var r = u.return;
          try {
            wn(4, u);
          } catch (a) {
            G(u, r, a);
          }
          break;
        case 1:
          var t = u.stateNode;
          if (typeof t.componentDidMount == "function") {
            var n = u.return;
            try {
              t.componentDidMount();
            } catch (a) {
              G(u, n, a);
            }
          }
          var l = u.return;
          try {
            Ml(u);
          } catch (a) {
            G(u, l, a);
          }
          break;
        case 5:
          var o = u.return;
          try {
            Ml(u);
          } catch (a) {
            G(u, o, a);
          }
      }
    } catch (a) {
      G(u, u.return, a);
    }
    if (u === e) {
      B = null;
      break;
    }
    var i = u.sibling;
    if (i !== null) {
      (i.return = u.return), (B = i);
      break;
    }
    B = u.return;
  }
}
var Pf = Math.ceil,
  ln = uu.ReactCurrentDispatcher,
  Po = uu.ReactCurrentOwner,
  Le = uu.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  W = null,
  ee = 0,
  Ae = 0,
  Ju = Eu(0),
  K = 0,
  et = null,
  zu = 0,
  xn = 0,
  _o = 0,
  _r = null,
  pe = null,
  Uo = 0,
  fr = 1 / 0,
  Qe = null,
  on = !1,
  Ql = null,
  hu = null,
  kt = !1,
  su = null,
  an = 0,
  Ur = 0,
  $l = null,
  Ut = -1,
  It = 0;
function ae() {
  return R & 6 ? $() : Ut !== -1 ? Ut : (Ut = $());
}
function gu(e) {
  return e.mode & 1
    ? R & 2 && ee !== 0
      ? ee & -ee
      : vf.transition !== null
      ? (It === 0 && (It = Ma()), It)
      : ((e = P),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ka(e.type))),
        e)
    : 1;
}
function Ie(e, u, r, t) {
  if (50 < Ur) throw ((Ur = 0), ($l = null), Error(D(185)));
  rt(e, r, t),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (xn |= r), K === 4 && iu(e, ee)),
      De(e, t),
      r === 1 && R === 0 && !(u.mode & 1) && ((fr = $() + 500), An && Cu()));
}
function De(e, u) {
  var r = e.callbackNode;
  Dc(e, u);
  var t = Ht(e, e === J ? ee : 0);
  if (t === 0)
    r !== null && ii(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((u = t & -t), e.callbackPriority !== u)) {
    if ((r != null && ii(r), u === 1))
      e.tag === 0 ? Df(Xi.bind(null, e)) : hs(Xi.bind(null, e)),
        pf(function () {
          !(R & 6) && Cu();
        }),
        (r = null);
    else {
      switch (Ha(t)) {
        case 1:
          r = ao;
          break;
        case 4:
          r = ba;
          break;
        case 16:
          r = Mt;
          break;
        case 536870912:
          r = Va;
          break;
        default:
          r = Mt;
      }
      r = p2(r, o2.bind(null, e));
    }
    (e.callbackPriority = u), (e.callbackNode = r);
  }
}
function o2(e, u) {
  if (((Ut = -1), (It = 0), R & 6)) throw Error(D(327));
  var r = e.callbackNode;
  if (nr() && e.callbackNode !== r) return null;
  var t = Ht(e, e === J ? ee : 0);
  if (t === 0) return null;
  if (t & 30 || t & e.expiredLanes || u) u = sn(e, t);
  else {
    u = t;
    var n = R;
    R |= 2;
    var l = a2();
    (J !== e || ee !== u) && ((Qe = null), (fr = $() + 500), qu(e, u));
    do
      try {
        If();
        break;
      } catch (i) {
        i2(e, i);
      }
    while (!0);
    Co(),
      (ln.current = l),
      (R = n),
      W !== null ? (u = 0) : ((J = null), (ee = 0), (u = K));
  }
  if (u !== 0) {
    if (
      (u === 2 && ((n = Al(e)), n !== 0 && ((t = n), (u = Wl(e, n)))), u === 1)
    )
      throw ((r = et), qu(e, 0), iu(e, t), De(e, $()), r);
    if (u === 6) iu(e, t);
    else {
      if (
        ((n = e.current.alternate),
        !(t & 30) &&
          !_f(n) &&
          ((u = sn(e, t)),
          u === 2 && ((l = Al(e)), l !== 0 && ((t = l), (u = Wl(e, l)))),
          u === 1))
      )
        throw ((r = et), qu(e, 0), iu(e, t), De(e, $()), r);
      switch (((e.finishedWork = n), (e.finishedLanes = t), u)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Bu(e, pe, Qe);
          break;
        case 3:
          if (
            (iu(e, t), (t & 130023424) === t && ((u = Uo + 500 - $()), 10 < u))
          ) {
            if (Ht(e, 0) !== 0) break;
            if (((n = e.suspendedLanes), (n & t) !== t)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & n);
              break;
            }
            e.timeoutHandle = Sl(Bu.bind(null, e, pe, Qe), u);
            break;
          }
          Bu(e, pe, Qe);
          break;
        case 4:
          if ((iu(e, t), (t & 4194240) === t)) break;
          for (u = e.eventTimes, n = -1; 0 < t; ) {
            var o = 31 - Ue(t);
            (l = 1 << o), (o = u[o]), o > n && (n = o), (t &= ~l);
          }
          if (
            ((t = n),
            (t = $() - t),
            (t =
              (120 > t
                ? 120
                : 480 > t
                ? 480
                : 1080 > t
                ? 1080
                : 1920 > t
                ? 1920
                : 3e3 > t
                ? 3e3
                : 4320 > t
                ? 4320
                : 1960 * Pf(t / 1960)) - t),
            10 < t)
          ) {
            e.timeoutHandle = Sl(Bu.bind(null, e, pe, Qe), t);
            break;
          }
          Bu(e, pe, Qe);
          break;
        case 5:
          Bu(e, pe, Qe);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return De(e, $()), e.callbackNode === r ? o2.bind(null, e) : null;
}
function Wl(e, u) {
  var r = _r;
  return (
    e.current.memoizedState.isDehydrated && (qu(e, u).flags |= 256),
    (e = sn(e, u)),
    e !== 2 && ((u = pe), (pe = r), u !== null && Yl(u)),
    e
  );
}
function Yl(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function _f(e) {
  for (var u = e; ; ) {
    if (u.flags & 16384) {
      var r = u.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var t = 0; t < r.length; t++) {
          var n = r[t],
            l = n.getSnapshot;
          n = n.value;
          try {
            if (!je(l(), n)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = u.child), u.subtreeFlags & 16384 && r !== null))
      (r.return = u), (u = r);
    else {
      if (u === e) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === e) return !0;
        u = u.return;
      }
      (u.sibling.return = u.return), (u = u.sibling);
    }
  }
  return !0;
}
function iu(e, u) {
  for (
    u &= ~_o,
      u &= ~xn,
      e.suspendedLanes |= u,
      e.pingedLanes &= ~u,
      e = e.expirationTimes;
    0 < u;

  ) {
    var r = 31 - Ue(u),
      t = 1 << r;
    (e[r] = -1), (u &= ~t);
  }
}
function Xi(e) {
  if (R & 6) throw Error(D(327));
  nr();
  var u = Ht(e, 0);
  if (!(u & 1)) return De(e, $()), null;
  var r = sn(e, u);
  if (e.tag !== 0 && r === 2) {
    var t = Al(e);
    t !== 0 && ((u = t), (r = Wl(e, t)));
  }
  if (r === 1) throw ((r = et), qu(e, 0), iu(e, u), De(e, $()), r);
  if (r === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = u),
    Bu(e, pe, Qe),
    De(e, $()),
    null
  );
}
function Io(e, u) {
  var r = R;
  R |= 1;
  try {
    return e(u);
  } finally {
    (R = r), R === 0 && ((fr = $() + 500), An && Cu());
  }
}
function Pu(e) {
  su !== null && su.tag === 0 && !(R & 6) && nr();
  var u = R;
  R |= 1;
  var r = Le.transition,
    t = P;
  try {
    if (((Le.transition = null), (P = 1), e)) return e();
  } finally {
    (P = t), (Le.transition = r), (R = u), !(R & 6) && Cu();
  }
}
function jo() {
  (Ae = Ju.current), j(Ju);
}
function qu(e, u) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), df(r)), W !== null))
    for (r = W.return; r !== null; ) {
      var t = r;
      switch ((yo(t), t.tag)) {
        case 1:
          (t = t.type.childContextTypes), t != null && Yt();
          break;
        case 3:
          sr(), j(he), j(oe), So();
          break;
        case 5:
          Fo(t);
          break;
        case 4:
          sr();
          break;
        case 13:
          j(V);
          break;
        case 19:
          j(V);
          break;
        case 10:
          wo(t.type._context);
          break;
        case 22:
        case 23:
          jo();
      }
      r = r.return;
    }
  if (
    ((J = e),
    (W = e = Du(e.current, null)),
    (ee = Ae = u),
    (K = 0),
    (et = null),
    (_o = xn = zu = 0),
    (pe = _r = null),
    Fu !== null)
  ) {
    for (u = 0; u < Fu.length; u++)
      if (((r = Fu[u]), (t = r.interleaved), t !== null)) {
        r.interleaved = null;
        var n = t.next,
          l = r.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = n), (t.next = o);
        }
        r.pending = t;
      }
    Fu = null;
  }
  return e;
}
function i2(e, u) {
  do {
    var r = W;
    try {
      if ((Co(), (zt.current = nn), tn)) {
        for (var t = M.memoizedState; t !== null; ) {
          var n = t.queue;
          n !== null && (n.pending = null), (t = t.next);
        }
        tn = !1;
      }
      if (
        ((Ru = 0),
        (Z = Y = M = null),
        (zr = !1),
        (Zr = 0),
        (Po.current = null),
        r === null || r.return === null)
      ) {
        (K = 1), (et = u), (W = null);
        break;
      }
      e: {
        var l = e,
          o = r.return,
          i = r,
          a = u;
        if (
          ((u = ee),
          (i.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            h = i,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var A = Oi(o);
          if (A !== null) {
            (A.flags &= -257),
              bi(A, o, i, l, u),
              A.mode & 1 && ji(l, c, u),
              (u = A),
              (a = c);
            var E = u.updateQueue;
            if (E === null) {
              var C = new Set();
              C.add(a), (u.updateQueue = C);
            } else E.add(a);
            break e;
          } else {
            if (!(u & 1)) {
              ji(l, c, u), Oo();
              break e;
            }
            a = Error(D(426));
          }
        } else if (b && i.mode & 1) {
          var _ = Oi(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              bi(_, o, i, l, u),
              Ao(cr(a, i));
            break e;
          }
        }
        (l = a = cr(a, i)),
          K !== 4 && (K = 2),
          _r === null ? (_r = [l]) : _r.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (u &= -u), (l.lanes |= u);
              var f = Hs(l, a, u);
              Ri(l, f);
              break e;
            case 1:
              i = a;
              var s = l.type,
                d = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof s.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (hu === null || !hu.has(d))))
              ) {
                (l.flags |= 65536), (u &= -u), (l.lanes |= u);
                var g = Gs(l, i, u);
                Ri(l, g);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      c2(r);
    } catch (x) {
      (u = x), W === r && r !== null && (W = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function a2() {
  var e = ln.current;
  return (ln.current = nn), e === null ? nn : e;
}
function Oo() {
  (K === 0 || K === 3 || K === 2) && (K = 4),
    J === null || (!(zu & 268435455) && !(xn & 268435455)) || iu(J, ee);
}
function sn(e, u) {
  var r = R;
  R |= 2;
  var t = a2();
  (J !== e || ee !== u) && ((Qe = null), qu(e, u));
  do
    try {
      Uf();
      break;
    } catch (n) {
      i2(e, n);
    }
  while (!0);
  if ((Co(), (R = r), (ln.current = t), W !== null)) throw Error(D(261));
  return (J = null), (ee = 0), K;
}
function Uf() {
  for (; W !== null; ) s2(W);
}
function If() {
  for (; W !== null && !ac(); ) s2(W);
}
function s2(e) {
  var u = d2(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    u === null ? c2(e) : (W = u),
    (Po.current = null);
}
function c2(e) {
  var u = e;
  do {
    var r = u.alternate;
    if (((e = u.return), u.flags & 32768)) {
      if (((r = Nf(r, u)), r !== null)) {
        (r.flags &= 32767), (W = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (K = 6), (W = null);
        return;
      }
    } else if (((r = Lf(r, u, Ae)), r !== null)) {
      W = r;
      return;
    }
    if (((u = u.sibling), u !== null)) {
      W = u;
      return;
    }
    W = u = e;
  } while (u !== null);
  K === 0 && (K = 5);
}
function Bu(e, u, r) {
  var t = P,
    n = Le.transition;
  try {
    (Le.transition = null), (P = 1), jf(e, u, r, t);
  } finally {
    (Le.transition = n), (P = t);
  }
  return null;
}
function jf(e, u, r, t) {
  do nr();
  while (su !== null);
  if (R & 6) throw Error(D(327));
  r = e.finishedWork;
  var n = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = r.lanes | r.childLanes;
  if (
    (vc(e, l),
    e === J && ((W = J = null), (ee = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      kt ||
      ((kt = !0),
      p2(Mt, function () {
        return nr(), null;
      })),
    (l = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || l)
  ) {
    (l = Le.transition), (Le.transition = null);
    var o = P;
    P = 1;
    var i = R;
    (R |= 4),
      (Po.current = null),
      Rf(e, r),
      n2(r, e),
      nf(kl),
      (Gt = !!Bl),
      (kl = Bl = null),
      (e.current = r),
      zf(r),
      sc(),
      (R = i),
      (P = o),
      (Le.transition = l);
  } else e.current = r;
  if (
    (kt && ((kt = !1), (su = e), (an = n)),
    (l = e.pendingLanes),
    l === 0 && (hu = null),
    dc(r.stateNode),
    De(e, $()),
    u !== null)
  )
    for (t = e.onRecoverableError, r = 0; r < u.length; r++)
      (n = u[r]), t(n.value, { componentStack: n.stack, digest: n.digest });
  if (on) throw ((on = !1), (e = Ql), (Ql = null), e);
  return (
    an & 1 && e.tag !== 0 && nr(),
    (l = e.pendingLanes),
    l & 1 ? (e === $l ? Ur++ : ((Ur = 0), ($l = e))) : (Ur = 0),
    Cu(),
    null
  );
}
function nr() {
  if (su !== null) {
    var e = Ha(an),
      u = Le.transition,
      r = P;
    try {
      if (((Le.transition = null), (P = 16 > e ? 16 : e), su === null))
        var t = !1;
      else {
        if (((e = su), (su = null), (an = 0), R & 6)) throw Error(D(331));
        var n = R;
        for (R |= 4, B = e.current; B !== null; ) {
          var l = B,
            o = l.child;
          if (B.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var a = 0; a < i.length; a++) {
                var c = i[a];
                for (B = c; B !== null; ) {
                  var h = B;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, h, l);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (B = m);
                  else
                    for (; B !== null; ) {
                      h = B;
                      var p = h.sibling,
                        A = h.return;
                      if ((u2(h), h === c)) {
                        B = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = A), (B = p);
                        break;
                      }
                      B = A;
                    }
                }
              }
              var E = l.alternate;
              if (E !== null) {
                var C = E.child;
                if (C !== null) {
                  E.child = null;
                  do {
                    var _ = C.sibling;
                    (C.sibling = null), (C = _);
                  } while (C !== null);
                }
              }
              B = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (B = o);
          else
            e: for (; B !== null; ) {
              if (((l = B), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (B = f);
                break e;
              }
              B = l.return;
            }
        }
        var s = e.current;
        for (B = s; B !== null; ) {
          o = B;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (B = d);
          else
            e: for (o = s; B !== null; ) {
              if (((i = B), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wn(9, i);
                  }
                } catch (x) {
                  G(i, i.return, x);
                }
              if (i === o) {
                B = null;
                break e;
              }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (B = g);
                break e;
              }
              B = i.return;
            }
        }
        if (
          ((R = n), Cu(), Me && typeof Me.onPostCommitFiberRoot == "function")
        )
          try {
            Me.onPostCommitFiberRoot(hn, e);
          } catch {}
        t = !0;
      }
      return t;
    } finally {
      (P = r), (Le.transition = u);
    }
  }
  return !1;
}
function ea(e, u, r) {
  (u = cr(r, u)),
    (u = Hs(e, u, 1)),
    (e = mu(e, u, 1)),
    (u = ae()),
    e !== null && (rt(e, 1, u), De(e, u));
}
function G(e, u, r) {
  if (e.tag === 3) ea(e, e, r);
  else
    for (; u !== null; ) {
      if (u.tag === 3) {
        ea(u, e, r);
        break;
      } else if (u.tag === 1) {
        var t = u.stateNode;
        if (
          typeof u.type.getDerivedStateFromError == "function" ||
          (typeof t.componentDidCatch == "function" &&
            (hu === null || !hu.has(t)))
        ) {
          (e = cr(r, e)),
            (e = Gs(u, e, 1)),
            (u = mu(u, e, 1)),
            (e = ae()),
            u !== null && (rt(u, 1, e), De(u, e));
          break;
        }
      }
      u = u.return;
    }
}
function Of(e, u, r) {
  var t = e.pingCache;
  t !== null && t.delete(u),
    (u = ae()),
    (e.pingedLanes |= e.suspendedLanes & r),
    J === e &&
      (ee & r) === r &&
      (K === 4 || (K === 3 && (ee & 130023424) === ee && 500 > $() - Uo)
        ? qu(e, 0)
        : (_o |= r)),
    De(e, u);
}
function f2(e, u) {
  u === 0 &&
    (e.mode & 1
      ? ((u = gt), (gt <<= 1), !(gt & 130023424) && (gt = 4194304))
      : (u = 1));
  var r = ae();
  (e = Xe(e, u)), e !== null && (rt(e, u, r), De(e, r));
}
function bf(e) {
  var u = e.memoizedState,
    r = 0;
  u !== null && (r = u.retryLane), f2(e, r);
}
function Vf(e, u) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var t = e.stateNode,
        n = e.memoizedState;
      n !== null && (r = n.retryLane);
      break;
    case 19:
      t = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  t !== null && t.delete(u), f2(e, r);
}
var d2;
d2 = function (e, u, r) {
  if (e !== null)
    if (e.memoizedProps !== u.pendingProps || he.current) me = !0;
    else {
      if (!(e.lanes & r) && !(u.flags & 128)) return (me = !1), qf(e, u, r);
      me = !!(e.flags & 131072);
    }
  else (me = !1), b && u.flags & 1048576 && gs(u, Jt, u.index);
  switch (((u.lanes = 0), u.tag)) {
    case 2:
      var t = u.type;
      _t(e, u), (e = u.pendingProps);
      var n = or(u, oe.current);
      tr(u, r), (n = Lo(null, u, t, e, n, r));
      var l = No();
      return (
        (u.flags |= 1),
        typeof n == "object" &&
        n !== null &&
        typeof n.render == "function" &&
        n.$$typeof === void 0
          ? ((u.tag = 1),
            (u.memoizedState = null),
            (u.updateQueue = null),
            ge(t) ? ((l = !0), Kt(u)) : (l = !1),
            (u.memoizedState =
              n.state !== null && n.state !== void 0 ? n.state : null),
            Bo(u),
            (n.updater = Cn),
            (u.stateNode = n),
            (n._reactInternals = u),
            Pl(u, t, e, r),
            (u = Il(null, u, t, !0, l, r)))
          : ((u.tag = 0), b && l && vo(u), ie(null, u, n, r), (u = u.child)),
        u
      );
    case 16:
      t = u.elementType;
      e: {
        switch (
          (_t(e, u),
          (e = u.pendingProps),
          (n = t._init),
          (t = n(t._payload)),
          (u.type = t),
          (n = u.tag = Hf(t)),
          (e = ze(t, e)),
          n)
        ) {
          case 0:
            u = Ul(null, u, t, e, r);
            break e;
          case 1:
            u = Hi(null, u, t, e, r);
            break e;
          case 11:
            u = Vi(null, u, t, e, r);
            break e;
          case 14:
            u = Mi(null, u, t, ze(t.type, e), r);
            break e;
        }
        throw Error(D(306, t, ""));
      }
      return u;
    case 0:
      return (
        (t = u.type),
        (n = u.pendingProps),
        (n = u.elementType === t ? n : ze(t, n)),
        Ul(e, u, t, n, r)
      );
    case 1:
      return (
        (t = u.type),
        (n = u.pendingProps),
        (n = u.elementType === t ? n : ze(t, n)),
        Hi(e, u, t, n, r)
      );
    case 3:
      e: {
        if ((Ys(u), e === null)) throw Error(D(387));
        (t = u.pendingProps),
          (l = u.memoizedState),
          (n = l.element),
          Cs(e, u),
          un(u, t, null, r);
        var o = u.memoizedState;
        if (((t = o.element), l.isDehydrated))
          if (
            ((l = {
              element: t,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (u.updateQueue.baseState = l),
            (u.memoizedState = l),
            u.flags & 256)
          ) {
            (n = cr(Error(D(423)), u)), (u = Gi(e, u, t, r, n));
            break e;
          } else if (t !== n) {
            (n = cr(Error(D(424)), u)), (u = Gi(e, u, t, r, n));
            break e;
          } else
            for (
              Ee = pu(u.stateNode.containerInfo.firstChild),
                Ce = u,
                b = !0,
                _e = null,
                r = As(u, null, t, r),
                u.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((ir(), t === n)) {
            u = eu(e, u, r);
            break e;
          }
          ie(e, u, t, r);
        }
        u = u.child;
      }
      return u;
    case 5:
      return (
        ws(u),
        e === null && Tl(u),
        (t = u.type),
        (n = u.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = n.children),
        Fl(t, n) ? (o = null) : l !== null && Fl(t, l) && (u.flags |= 32),
        Ws(e, u),
        ie(e, u, o, r),
        u.child
      );
    case 6:
      return e === null && Tl(u), null;
    case 13:
      return Ks(e, u, r);
    case 4:
      return (
        ko(u, u.stateNode.containerInfo),
        (t = u.pendingProps),
        e === null ? (u.child = ar(u, null, t, r)) : ie(e, u, t, r),
        u.child
      );
    case 11:
      return (
        (t = u.type),
        (n = u.pendingProps),
        (n = u.elementType === t ? n : ze(t, n)),
        Vi(e, u, t, n, r)
      );
    case 7:
      return ie(e, u, u.pendingProps, r), u.child;
    case 8:
      return ie(e, u, u.pendingProps.children, r), u.child;
    case 12:
      return ie(e, u, u.pendingProps.children, r), u.child;
    case 10:
      e: {
        if (
          ((t = u.type._context),
          (n = u.pendingProps),
          (l = u.memoizedProps),
          (o = n.value),
          U(Xt, t._currentValue),
          (t._currentValue = o),
          l !== null)
        )
          if (je(l.value, o)) {
            if (l.children === n.children && !he.current) {
              u = eu(e, u, r);
              break e;
            }
          } else
            for (l = u.child, l !== null && (l.return = u); l !== null; ) {
              var i = l.dependencies;
              if (i !== null) {
                o = l.child;
                for (var a = i.firstContext; a !== null; ) {
                  if (a.context === t) {
                    if (l.tag === 1) {
                      (a = Ke(-1, r & -r)), (a.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (c.pending = a);
                      }
                    }
                    (l.lanes |= r),
                      (a = l.alternate),
                      a !== null && (a.lanes |= r),
                      Rl(l.return, r, u),
                      (i.lanes |= r);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) o = l.type === u.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(D(341));
                (o.lanes |= r),
                  (i = o.alternate),
                  i !== null && (i.lanes |= r),
                  Rl(o, r, u),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === u) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        ie(e, u, n.children, r), (u = u.child);
      }
      return u;
    case 9:
      return (
        (n = u.type),
        (t = u.pendingProps.children),
        tr(u, r),
        (n = Ne(n)),
        (t = t(n)),
        (u.flags |= 1),
        ie(e, u, t, r),
        u.child
      );
    case 14:
      return (
        (t = u.type),
        (n = ze(t, u.pendingProps)),
        (n = ze(t.type, n)),
        Mi(e, u, t, n, r)
      );
    case 15:
      return Qs(e, u, u.type, u.pendingProps, r);
    case 17:
      return (
        (t = u.type),
        (n = u.pendingProps),
        (n = u.elementType === t ? n : ze(t, n)),
        _t(e, u),
        (u.tag = 1),
        ge(t) ? ((e = !0), Kt(u)) : (e = !1),
        tr(u, r),
        Ms(u, t, n),
        Pl(u, t, n, r),
        Il(null, u, t, !0, e, r)
      );
    case 19:
      return Zs(e, u, r);
    case 22:
      return $s(e, u, r);
  }
  throw Error(D(156, u.tag));
};
function p2(e, u) {
  return Oa(e, u);
}
function Mf(e, u, r, t) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = u),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = t),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function qe(e, u, r, t) {
  return new Mf(e, u, r, t);
}
function bo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hf(e) {
  if (typeof e == "function") return bo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lo)) return 11;
    if (e === oo) return 14;
  }
  return 2;
}
function Du(e, u) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = qe(e.tag, u, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = u),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (u = e.dependencies),
    (r.dependencies =
      u === null ? null : { lanes: u.lanes, firstContext: u.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function jt(e, u, r, t, n, l) {
  var o = 2;
  if (((t = e), typeof e == "function")) bo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Vu:
        return Lu(r.children, n, l, u);
      case no:
        (o = 8), (n |= 8);
        break;
      case ll:
        return (
          (e = qe(12, r, u, n | 2)), (e.elementType = ll), (e.lanes = l), e
        );
      case ol:
        return (e = qe(13, r, u, n)), (e.elementType = ol), (e.lanes = l), e;
      case il:
        return (e = qe(19, r, u, n)), (e.elementType = il), (e.lanes = l), e;
      case wa:
        return Bn(r, n, l, u);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ea:
              o = 10;
              break e;
            case Ca:
              o = 9;
              break e;
            case lo:
              o = 11;
              break e;
            case oo:
              o = 14;
              break e;
            case nu:
              (o = 16), (t = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (u = qe(o, r, u, n)), (u.elementType = e), (u.type = t), (u.lanes = l), u
  );
}
function Lu(e, u, r, t) {
  return (e = qe(7, e, t, u)), (e.lanes = r), e;
}
function Bn(e, u, r, t) {
  return (
    (e = qe(22, e, t, u)),
    (e.elementType = wa),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function rl(e, u, r) {
  return (e = qe(6, e, null, u)), (e.lanes = r), e;
}
function tl(e, u, r) {
  return (
    (u = qe(4, e.children !== null ? e.children : [], e.key, u)),
    (u.lanes = r),
    (u.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    u
  );
}
function Gf(e, u, r, t, n) {
  (this.tag = u),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Un(0)),
    (this.expirationTimes = Un(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Un(0)),
    (this.identifierPrefix = t),
    (this.onRecoverableError = n),
    (this.mutableSourceEagerHydrationData = null);
}
function Vo(e, u, r, t, n, l, o, i, a) {
  return (
    (e = new Gf(e, u, r, i, a)),
    u === 1 ? ((u = 1), l === !0 && (u |= 8)) : (u = 0),
    (l = qe(3, null, null, u)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: t,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bo(l),
    e
  );
}
function Qf(e, u, r) {
  var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bu,
    key: t == null ? null : "" + t,
    children: e,
    containerInfo: u,
    implementation: r,
  };
}
function m2(e) {
  if (!e) return yu;
  e = e._reactInternals;
  e: {
    if (Uu(e) !== e || e.tag !== 1) throw Error(D(170));
    var u = e;
    do {
      switch (u.tag) {
        case 3:
          u = u.stateNode.context;
          break e;
        case 1:
          if (ge(u.type)) {
            u = u.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      u = u.return;
    } while (u !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (ge(r)) return ms(e, r, u);
  }
  return u;
}
function h2(e, u, r, t, n, l, o, i, a) {
  return (
    (e = Vo(r, t, !0, e, n, l, o, i, a)),
    (e.context = m2(null)),
    (r = e.current),
    (t = ae()),
    (n = gu(r)),
    (l = Ke(t, n)),
    (l.callback = u ?? null),
    mu(r, l, n),
    (e.current.lanes = n),
    rt(e, n, t),
    De(e, t),
    e
  );
}
function kn(e, u, r, t) {
  var n = u.current,
    l = ae(),
    o = gu(n);
  return (
    (r = m2(r)),
    u.context === null ? (u.context = r) : (u.pendingContext = r),
    (u = Ke(l, o)),
    (u.payload = { element: e }),
    (t = t === void 0 ? null : t),
    t !== null && (u.callback = t),
    (e = mu(n, u, o)),
    e !== null && (Ie(e, n, o, l), Rt(e, n, o)),
    o
  );
}
function cn(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ua(e, u) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < u ? r : u;
  }
}
function Mo(e, u) {
  ua(e, u), (e = e.alternate) && ua(e, u);
}
function $f() {
  return null;
}
var g2 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ho(e) {
  this._internalRoot = e;
}
Fn.prototype.render = Ho.prototype.render = function (e) {
  var u = this._internalRoot;
  if (u === null) throw Error(D(409));
  kn(e, u, null, null);
};
Fn.prototype.unmount = Ho.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var u = e.containerInfo;
    Pu(function () {
      kn(null, e, null, null);
    }),
      (u[Je] = null);
  }
};
function Fn(e) {
  this._internalRoot = e;
}
Fn.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var u = $a();
    e = { blockedOn: null, target: e, priority: u };
    for (var r = 0; r < ou.length && u !== 0 && u < ou[r].priority; r++);
    ou.splice(r, 0, e), r === 0 && Ya(e);
  }
};
function Go(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sn(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ra() {}
function Wf(e, u, r, t, n) {
  if (n) {
    if (typeof t == "function") {
      var l = t;
      t = function () {
        var c = cn(o);
        l.call(c);
      };
    }
    var o = h2(u, t, e, 0, null, !1, !1, "", ra);
    return (
      (e._reactRootContainer = o),
      (e[Je] = o.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      Pu(),
      o
    );
  }
  for (; (n = e.lastChild); ) e.removeChild(n);
  if (typeof t == "function") {
    var i = t;
    t = function () {
      var c = cn(a);
      i.call(c);
    };
  }
  var a = Vo(e, 0, !1, null, null, !1, !1, "", ra);
  return (
    (e._reactRootContainer = a),
    (e[Je] = a.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    Pu(function () {
      kn(u, a, r, t);
    }),
    a
  );
}
function qn(e, u, r, t, n) {
  var l = r._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var a = cn(o);
        i.call(a);
      };
    }
    kn(u, o, e, n);
  } else o = Wf(r, u, e, n, t);
  return cn(o);
}
Ga = function (e) {
  switch (e.tag) {
    case 3:
      var u = e.stateNode;
      if (u.current.memoizedState.isDehydrated) {
        var r = kr(u.pendingLanes);
        r !== 0 &&
          (so(u, r | 1), De(u, $()), !(R & 6) && ((fr = $() + 500), Cu()));
      }
      break;
    case 13:
      Pu(function () {
        var t = Xe(e, 1);
        if (t !== null) {
          var n = ae();
          Ie(t, e, 1, n);
        }
      }),
        Mo(e, 1);
  }
};
co = function (e) {
  if (e.tag === 13) {
    var u = Xe(e, 134217728);
    if (u !== null) {
      var r = ae();
      Ie(u, e, 134217728, r);
    }
    Mo(e, 134217728);
  }
};
Qa = function (e) {
  if (e.tag === 13) {
    var u = gu(e),
      r = Xe(e, u);
    if (r !== null) {
      var t = ae();
      Ie(r, e, u, t);
    }
    Mo(e, u);
  }
};
$a = function () {
  return P;
};
Wa = function (e, u) {
  var r = P;
  try {
    return (P = e), u();
  } finally {
    P = r;
  }
};
Dl = function (e, u, r) {
  switch (u) {
    case "input":
      if ((cl(e, r), (u = r.name), r.type === "radio" && u != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + u) + '][type="radio"]'
          ),
            u = 0;
          u < r.length;
          u++
        ) {
          var t = r[u];
          if (t !== e && t.form === e.form) {
            var n = yn(t);
            if (!n) throw Error(D(90));
            Ba(t), cl(t, n);
          }
        }
      }
      break;
    case "textarea":
      Fa(e, r);
      break;
    case "select":
      (u = r.value), u != null && Xu(e, !!r.multiple, u, !1);
  }
};
za = Io;
Pa = Pu;
var Yf = { usingClientEntryPoint: !1, Events: [nt, Qu, yn, Ta, Ra, Io] },
  wr = {
    findFiberByHostInstance: ku,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Kf = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: uu.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ia(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || $f,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ft = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ft.isDisabled && Ft.supportsFiber)
    try {
      (hn = Ft.inject(Kf)), (Me = Ft);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yf;
xe.createPortal = function (e, u) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Go(u)) throw Error(D(200));
  return Qf(e, u, null, r);
};
xe.createRoot = function (e, u) {
  if (!Go(e)) throw Error(D(299));
  var r = !1,
    t = "",
    n = g2;
  return (
    u != null &&
      (u.unstable_strictMode === !0 && (r = !0),
      u.identifierPrefix !== void 0 && (t = u.identifierPrefix),
      u.onRecoverableError !== void 0 && (n = u.onRecoverableError)),
    (u = Vo(e, 1, !1, null, null, r, !1, t, n)),
    (e[Je] = u.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    new Ho(u)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var u = e._reactInternals;
  if (u === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return (e = Ia(u)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return Pu(e);
};
xe.hydrate = function (e, u, r) {
  if (!Sn(u)) throw Error(D(200));
  return qn(null, e, u, !0, r);
};
xe.hydrateRoot = function (e, u, r) {
  if (!Go(e)) throw Error(D(405));
  var t = (r != null && r.hydratedSources) || null,
    n = !1,
    l = "",
    o = g2;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (n = !0),
      r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (u = h2(u, null, e, 1, r ?? null, n, !1, l, o)),
    (e[Je] = u.current),
    Qr(e),
    t)
  )
    for (e = 0; e < t.length; e++)
      (r = t[e]),
        (n = r._getVersion),
        (n = n(r._source)),
        u.mutableSourceEagerHydrationData == null
          ? (u.mutableSourceEagerHydrationData = [r, n])
          : u.mutableSourceEagerHydrationData.push(r, n);
  return new Fn(u);
};
xe.render = function (e, u, r) {
  if (!Sn(u)) throw Error(D(200));
  return qn(null, e, u, !1, r);
};
xe.unmountComponentAtNode = function (e) {
  if (!Sn(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (Pu(function () {
        qn(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Je] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = Io;
xe.unstable_renderSubtreeIntoContainer = function (e, u, r, t) {
  if (!Sn(r)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return qn(e, u, r, !1, t);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function D2() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D2);
    } catch (e) {
      console.error(e);
    }
}
D2(), (Da.exports = xe);
var Zf = Da.exports,
  v2,
  ta = Zf;
(v2 = ta.createRoot), ta.hydrateRoot;
class Jf extends mn.Component {
  constructor(r) {
    super(r);
    de(this, "onNameChangeEventHandler", (r) => {
      this.setState({ name: r.target.value });
    });
    de(this, "onSubmitEventHandler", (r) => {
      r.preventDefault(),
        this.state.name.trim() !== "" &&
          this.props.onLogin(this.state.name.toUpperCase());
    });
    this.state = { name: "" };
  }
  render() {
    return this.props.isLoggedIn
      ? null
      : y.jsx("form", {
          action: "",
          className: "login-container",
          onSubmit: this.onSubmitEventHandler,
          children: y.jsxs("fieldset", {
            children: [
              y.jsx("legend", { children: "The-Quizz...!" }),
              y.jsx("h2", { children: "Enter Your Name" }),
              y.jsx("input", {
                type: "text",
                value: this.state.name,
                onChange: this.onNameChangeEventHandler,
              }),
              y.jsx("button", {
                type: "submit",
                disabled: this.state.name.trim() === "",
                children: "Login",
              }),
            ],
          }),
        });
  }
}
var fn = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */ fn.exports;
(function (e, u) {
  (function (r) {
    var t = u,
      n = e && e.exports == t && e,
      l = typeof Nn == "object" && Nn;
    (l.global === l || l.window === l) && (r = l);
    var o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      i = /[\x01-\x7F]/g,
      a = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
      c =
        /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
      h = {
        "­": "shy",
        "‌": "zwnj",
        "‍": "zwj",
        "‎": "lrm",
        "⁣": "ic",
        "⁢": "it",
        "⁡": "af",
        "‏": "rlm",
        "​": "ZeroWidthSpace",
        "⁠": "NoBreak",
        "̑": "DownBreve",
        "⃛": "tdot",
        "⃜": "DotDot",
        "	": "Tab",
        "\n": "NewLine",
        " ": "puncsp",
        " ": "MediumSpace",
        " ": "thinsp",
        " ": "hairsp",
        " ": "emsp13",
        " ": "ensp",
        " ": "emsp14",
        " ": "emsp",
        " ": "numsp",
        " ": "nbsp",
        "  ": "ThickSpace",
        "‾": "oline",
        _: "lowbar",
        "‐": "dash",
        "–": "ndash",
        "—": "mdash",
        "―": "horbar",
        ",": "comma",
        ";": "semi",
        "⁏": "bsemi",
        ":": "colon",
        "⩴": "Colone",
        "!": "excl",
        "¡": "iexcl",
        "?": "quest",
        "¿": "iquest",
        ".": "period",
        "‥": "nldr",
        "…": "mldr",
        "·": "middot",
        "'": "apos",
        "‘": "lsquo",
        "’": "rsquo",
        "‚": "sbquo",
        "‹": "lsaquo",
        "›": "rsaquo",
        '"': "quot",
        "“": "ldquo",
        "”": "rdquo",
        "„": "bdquo",
        "«": "laquo",
        "»": "raquo",
        "(": "lpar",
        ")": "rpar",
        "[": "lsqb",
        "]": "rsqb",
        "{": "lcub",
        "}": "rcub",
        "⌈": "lceil",
        "⌉": "rceil",
        "⌊": "lfloor",
        "⌋": "rfloor",
        "⦅": "lopar",
        "⦆": "ropar",
        "⦋": "lbrke",
        "⦌": "rbrke",
        "⦍": "lbrkslu",
        "⦎": "rbrksld",
        "⦏": "lbrksld",
        "⦐": "rbrkslu",
        "⦑": "langd",
        "⦒": "rangd",
        "⦓": "lparlt",
        "⦔": "rpargt",
        "⦕": "gtlPar",
        "⦖": "ltrPar",
        "⟦": "lobrk",
        "⟧": "robrk",
        "⟨": "lang",
        "⟩": "rang",
        "⟪": "Lang",
        "⟫": "Rang",
        "⟬": "loang",
        "⟭": "roang",
        "❲": "lbbrk",
        "❳": "rbbrk",
        "‖": "Vert",
        "§": "sect",
        "¶": "para",
        "@": "commat",
        "*": "ast",
        "/": "sol",
        undefined: null,
        "&": "amp",
        "#": "num",
        "%": "percnt",
        "‰": "permil",
        "‱": "pertenk",
        "†": "dagger",
        "‡": "Dagger",
        "•": "bull",
        "⁃": "hybull",
        "′": "prime",
        "″": "Prime",
        "‴": "tprime",
        "⁗": "qprime",
        "‵": "bprime",
        "⁁": "caret",
        "`": "grave",
        "´": "acute",
        "˜": "tilde",
        "^": "Hat",
        "¯": "macr",
        "˘": "breve",
        "˙": "dot",
        "¨": "die",
        "˚": "ring",
        "˝": "dblac",
        "¸": "cedil",
        "˛": "ogon",
        ˆ: "circ",
        ˇ: "caron",
        "°": "deg",
        "©": "copy",
        "®": "reg",
        "℗": "copysr",
        "℘": "wp",
        "℞": "rx",
        "℧": "mho",
        "℩": "iiota",
        "←": "larr",
        "↚": "nlarr",
        "→": "rarr",
        "↛": "nrarr",
        "↑": "uarr",
        "↓": "darr",
        "↔": "harr",
        "↮": "nharr",
        "↕": "varr",
        "↖": "nwarr",
        "↗": "nearr",
        "↘": "searr",
        "↙": "swarr",
        "↝": "rarrw",
        "↝̸": "nrarrw",
        "↞": "Larr",
        "↟": "Uarr",
        "↠": "Rarr",
        "↡": "Darr",
        "↢": "larrtl",
        "↣": "rarrtl",
        "↤": "mapstoleft",
        "↥": "mapstoup",
        "↦": "map",
        "↧": "mapstodown",
        "↩": "larrhk",
        "↪": "rarrhk",
        "↫": "larrlp",
        "↬": "rarrlp",
        "↭": "harrw",
        "↰": "lsh",
        "↱": "rsh",
        "↲": "ldsh",
        "↳": "rdsh",
        "↵": "crarr",
        "↶": "cularr",
        "↷": "curarr",
        "↺": "olarr",
        "↻": "orarr",
        "↼": "lharu",
        "↽": "lhard",
        "↾": "uharr",
        "↿": "uharl",
        "⇀": "rharu",
        "⇁": "rhard",
        "⇂": "dharr",
        "⇃": "dharl",
        "⇄": "rlarr",
        "⇅": "udarr",
        "⇆": "lrarr",
        "⇇": "llarr",
        "⇈": "uuarr",
        "⇉": "rrarr",
        "⇊": "ddarr",
        "⇋": "lrhar",
        "⇌": "rlhar",
        "⇐": "lArr",
        "⇍": "nlArr",
        "⇑": "uArr",
        "⇒": "rArr",
        "⇏": "nrArr",
        "⇓": "dArr",
        "⇔": "iff",
        "⇎": "nhArr",
        "⇕": "vArr",
        "⇖": "nwArr",
        "⇗": "neArr",
        "⇘": "seArr",
        "⇙": "swArr",
        "⇚": "lAarr",
        "⇛": "rAarr",
        "⇝": "zigrarr",
        "⇤": "larrb",
        "⇥": "rarrb",
        "⇵": "duarr",
        "⇽": "loarr",
        "⇾": "roarr",
        "⇿": "hoarr",
        "∀": "forall",
        "∁": "comp",
        "∂": "part",
        "∂̸": "npart",
        "∃": "exist",
        "∄": "nexist",
        "∅": "empty",
        "∇": "Del",
        "∈": "in",
        "∉": "notin",
        "∋": "ni",
        "∌": "notni",
        "϶": "bepsi",
        "∏": "prod",
        "∐": "coprod",
        "∑": "sum",
        "+": "plus",
        "±": "pm",
        "÷": "div",
        "×": "times",
        "<": "lt",
        "≮": "nlt",
        "<⃒": "nvlt",
        "=": "equals",
        "≠": "ne",
        "=⃥": "bne",
        "⩵": "Equal",
        ">": "gt",
        "≯": "ngt",
        ">⃒": "nvgt",
        "¬": "not",
        "|": "vert",
        "¦": "brvbar",
        "−": "minus",
        "∓": "mp",
        "∔": "plusdo",
        "⁄": "frasl",
        "∖": "setmn",
        "∗": "lowast",
        "∘": "compfn",
        "√": "Sqrt",
        "∝": "prop",
        "∞": "infin",
        "∟": "angrt",
        "∠": "ang",
        "∠⃒": "nang",
        "∡": "angmsd",
        "∢": "angsph",
        "∣": "mid",
        "∤": "nmid",
        "∥": "par",
        "∦": "npar",
        "∧": "and",
        "∨": "or",
        "∩": "cap",
        "∩︀": "caps",
        "∪": "cup",
        "∪︀": "cups",
        "∫": "int",
        "∬": "Int",
        "∭": "tint",
        "⨌": "qint",
        "∮": "oint",
        "∯": "Conint",
        "∰": "Cconint",
        "∱": "cwint",
        "∲": "cwconint",
        "∳": "awconint",
        "∴": "there4",
        "∵": "becaus",
        "∶": "ratio",
        "∷": "Colon",
        "∸": "minusd",
        "∺": "mDDot",
        "∻": "homtht",
        "∼": "sim",
        "≁": "nsim",
        "∼⃒": "nvsim",
        "∽": "bsim",
        "∽̱": "race",
        "∾": "ac",
        "∾̳": "acE",
        "∿": "acd",
        "≀": "wr",
        "≂": "esim",
        "≂̸": "nesim",
        "≃": "sime",
        "≄": "nsime",
        "≅": "cong",
        "≇": "ncong",
        "≆": "simne",
        "≈": "ap",
        "≉": "nap",
        "≊": "ape",
        "≋": "apid",
        "≋̸": "napid",
        "≌": "bcong",
        "≍": "CupCap",
        "≭": "NotCupCap",
        "≍⃒": "nvap",
        "≎": "bump",
        "≎̸": "nbump",
        "≏": "bumpe",
        "≏̸": "nbumpe",
        "≐": "doteq",
        "≐̸": "nedot",
        "≑": "eDot",
        "≒": "efDot",
        "≓": "erDot",
        "≔": "colone",
        "≕": "ecolon",
        "≖": "ecir",
        "≗": "cire",
        "≙": "wedgeq",
        "≚": "veeeq",
        "≜": "trie",
        "≟": "equest",
        "≡": "equiv",
        "≢": "nequiv",
        "≡⃥": "bnequiv",
        "≤": "le",
        "≰": "nle",
        "≤⃒": "nvle",
        "≥": "ge",
        "≱": "nge",
        "≥⃒": "nvge",
        "≦": "lE",
        "≦̸": "nlE",
        "≧": "gE",
        "≧̸": "ngE",
        "≨︀": "lvnE",
        "≨": "lnE",
        "≩": "gnE",
        "≩︀": "gvnE",
        "≪": "ll",
        "≪̸": "nLtv",
        "≪⃒": "nLt",
        "≫": "gg",
        "≫̸": "nGtv",
        "≫⃒": "nGt",
        "≬": "twixt",
        "≲": "lsim",
        "≴": "nlsim",
        "≳": "gsim",
        "≵": "ngsim",
        "≶": "lg",
        "≸": "ntlg",
        "≷": "gl",
        "≹": "ntgl",
        "≺": "pr",
        "⊀": "npr",
        "≻": "sc",
        "⊁": "nsc",
        "≼": "prcue",
        "⋠": "nprcue",
        "≽": "sccue",
        "⋡": "nsccue",
        "≾": "prsim",
        "≿": "scsim",
        "≿̸": "NotSucceedsTilde",
        "⊂": "sub",
        "⊄": "nsub",
        "⊂⃒": "vnsub",
        "⊃": "sup",
        "⊅": "nsup",
        "⊃⃒": "vnsup",
        "⊆": "sube",
        "⊈": "nsube",
        "⊇": "supe",
        "⊉": "nsupe",
        "⊊︀": "vsubne",
        "⊊": "subne",
        "⊋︀": "vsupne",
        "⊋": "supne",
        "⊍": "cupdot",
        "⊎": "uplus",
        "⊏": "sqsub",
        "⊏̸": "NotSquareSubset",
        "⊐": "sqsup",
        "⊐̸": "NotSquareSuperset",
        "⊑": "sqsube",
        "⋢": "nsqsube",
        "⊒": "sqsupe",
        "⋣": "nsqsupe",
        "⊓": "sqcap",
        "⊓︀": "sqcaps",
        "⊔": "sqcup",
        "⊔︀": "sqcups",
        "⊕": "oplus",
        "⊖": "ominus",
        "⊗": "otimes",
        "⊘": "osol",
        "⊙": "odot",
        "⊚": "ocir",
        "⊛": "oast",
        "⊝": "odash",
        "⊞": "plusb",
        "⊟": "minusb",
        "⊠": "timesb",
        "⊡": "sdotb",
        "⊢": "vdash",
        "⊬": "nvdash",
        "⊣": "dashv",
        "⊤": "top",
        "⊥": "bot",
        "⊧": "models",
        "⊨": "vDash",
        "⊭": "nvDash",
        "⊩": "Vdash",
        "⊮": "nVdash",
        "⊪": "Vvdash",
        "⊫": "VDash",
        "⊯": "nVDash",
        "⊰": "prurel",
        "⊲": "vltri",
        "⋪": "nltri",
        "⊳": "vrtri",
        "⋫": "nrtri",
        "⊴": "ltrie",
        "⋬": "nltrie",
        "⊴⃒": "nvltrie",
        "⊵": "rtrie",
        "⋭": "nrtrie",
        "⊵⃒": "nvrtrie",
        "⊶": "origof",
        "⊷": "imof",
        "⊸": "mumap",
        "⊹": "hercon",
        "⊺": "intcal",
        "⊻": "veebar",
        "⊽": "barvee",
        "⊾": "angrtvb",
        "⊿": "lrtri",
        "⋀": "Wedge",
        "⋁": "Vee",
        "⋂": "xcap",
        "⋃": "xcup",
        "⋄": "diam",
        "⋅": "sdot",
        "⋆": "Star",
        "⋇": "divonx",
        "⋈": "bowtie",
        "⋉": "ltimes",
        "⋊": "rtimes",
        "⋋": "lthree",
        "⋌": "rthree",
        "⋍": "bsime",
        "⋎": "cuvee",
        "⋏": "cuwed",
        "⋐": "Sub",
        "⋑": "Sup",
        "⋒": "Cap",
        "⋓": "Cup",
        "⋔": "fork",
        "⋕": "epar",
        "⋖": "ltdot",
        "⋗": "gtdot",
        "⋘": "Ll",
        "⋘̸": "nLl",
        "⋙": "Gg",
        "⋙̸": "nGg",
        "⋚︀": "lesg",
        "⋚": "leg",
        "⋛": "gel",
        "⋛︀": "gesl",
        "⋞": "cuepr",
        "⋟": "cuesc",
        "⋦": "lnsim",
        "⋧": "gnsim",
        "⋨": "prnsim",
        "⋩": "scnsim",
        "⋮": "vellip",
        "⋯": "ctdot",
        "⋰": "utdot",
        "⋱": "dtdot",
        "⋲": "disin",
        "⋳": "isinsv",
        "⋴": "isins",
        "⋵": "isindot",
        "⋵̸": "notindot",
        "⋶": "notinvc",
        "⋷": "notinvb",
        "⋹": "isinE",
        "⋹̸": "notinE",
        "⋺": "nisd",
        "⋻": "xnis",
        "⋼": "nis",
        "⋽": "notnivc",
        "⋾": "notnivb",
        "⌅": "barwed",
        "⌆": "Barwed",
        "⌌": "drcrop",
        "⌍": "dlcrop",
        "⌎": "urcrop",
        "⌏": "ulcrop",
        "⌐": "bnot",
        "⌒": "profline",
        "⌓": "profsurf",
        "⌕": "telrec",
        "⌖": "target",
        "⌜": "ulcorn",
        "⌝": "urcorn",
        "⌞": "dlcorn",
        "⌟": "drcorn",
        "⌢": "frown",
        "⌣": "smile",
        "⌭": "cylcty",
        "⌮": "profalar",
        "⌶": "topbot",
        "⌽": "ovbar",
        "⌿": "solbar",
        "⍼": "angzarr",
        "⎰": "lmoust",
        "⎱": "rmoust",
        "⎴": "tbrk",
        "⎵": "bbrk",
        "⎶": "bbrktbrk",
        "⏜": "OverParenthesis",
        "⏝": "UnderParenthesis",
        "⏞": "OverBrace",
        "⏟": "UnderBrace",
        "⏢": "trpezium",
        "⏧": "elinters",
        "␣": "blank",
        "─": "boxh",
        "│": "boxv",
        "┌": "boxdr",
        "┐": "boxdl",
        "└": "boxur",
        "┘": "boxul",
        "├": "boxvr",
        "┤": "boxvl",
        "┬": "boxhd",
        "┴": "boxhu",
        "┼": "boxvh",
        "═": "boxH",
        "║": "boxV",
        "╒": "boxdR",
        "╓": "boxDr",
        "╔": "boxDR",
        "╕": "boxdL",
        "╖": "boxDl",
        "╗": "boxDL",
        "╘": "boxuR",
        "╙": "boxUr",
        "╚": "boxUR",
        "╛": "boxuL",
        "╜": "boxUl",
        "╝": "boxUL",
        "╞": "boxvR",
        "╟": "boxVr",
        "╠": "boxVR",
        "╡": "boxvL",
        "╢": "boxVl",
        "╣": "boxVL",
        "╤": "boxHd",
        "╥": "boxhD",
        "╦": "boxHD",
        "╧": "boxHu",
        "╨": "boxhU",
        "╩": "boxHU",
        "╪": "boxvH",
        "╫": "boxVh",
        "╬": "boxVH",
        "▀": "uhblk",
        "▄": "lhblk",
        "█": "block",
        "░": "blk14",
        "▒": "blk12",
        "▓": "blk34",
        "□": "squ",
        "▪": "squf",
        "▫": "EmptyVerySmallSquare",
        "▭": "rect",
        "▮": "marker",
        "▱": "fltns",
        "△": "xutri",
        "▴": "utrif",
        "▵": "utri",
        "▸": "rtrif",
        "▹": "rtri",
        "▽": "xdtri",
        "▾": "dtrif",
        "▿": "dtri",
        "◂": "ltrif",
        "◃": "ltri",
        "◊": "loz",
        "○": "cir",
        "◬": "tridot",
        "◯": "xcirc",
        "◸": "ultri",
        "◹": "urtri",
        "◺": "lltri",
        "◻": "EmptySmallSquare",
        "◼": "FilledSmallSquare",
        "★": "starf",
        "☆": "star",
        "☎": "phone",
        "♀": "female",
        "♂": "male",
        "♠": "spades",
        "♣": "clubs",
        "♥": "hearts",
        "♦": "diams",
        "♪": "sung",
        "✓": "check",
        "✗": "cross",
        "✠": "malt",
        "✶": "sext",
        "❘": "VerticalSeparator",
        "⟈": "bsolhsub",
        "⟉": "suphsol",
        "⟵": "xlarr",
        "⟶": "xrarr",
        "⟷": "xharr",
        "⟸": "xlArr",
        "⟹": "xrArr",
        "⟺": "xhArr",
        "⟼": "xmap",
        "⟿": "dzigrarr",
        "⤂": "nvlArr",
        "⤃": "nvrArr",
        "⤄": "nvHarr",
        "⤅": "Map",
        "⤌": "lbarr",
        "⤍": "rbarr",
        "⤎": "lBarr",
        "⤏": "rBarr",
        "⤐": "RBarr",
        "⤑": "DDotrahd",
        "⤒": "UpArrowBar",
        "⤓": "DownArrowBar",
        "⤖": "Rarrtl",
        "⤙": "latail",
        "⤚": "ratail",
        "⤛": "lAtail",
        "⤜": "rAtail",
        "⤝": "larrfs",
        "⤞": "rarrfs",
        "⤟": "larrbfs",
        "⤠": "rarrbfs",
        "⤣": "nwarhk",
        "⤤": "nearhk",
        "⤥": "searhk",
        "⤦": "swarhk",
        "⤧": "nwnear",
        "⤨": "toea",
        "⤩": "tosa",
        "⤪": "swnwar",
        "⤳": "rarrc",
        "⤳̸": "nrarrc",
        "⤵": "cudarrr",
        "⤶": "ldca",
        "⤷": "rdca",
        "⤸": "cudarrl",
        "⤹": "larrpl",
        "⤼": "curarrm",
        "⤽": "cularrp",
        "⥅": "rarrpl",
        "⥈": "harrcir",
        "⥉": "Uarrocir",
        "⥊": "lurdshar",
        "⥋": "ldrushar",
        "⥎": "LeftRightVector",
        "⥏": "RightUpDownVector",
        "⥐": "DownLeftRightVector",
        "⥑": "LeftUpDownVector",
        "⥒": "LeftVectorBar",
        "⥓": "RightVectorBar",
        "⥔": "RightUpVectorBar",
        "⥕": "RightDownVectorBar",
        "⥖": "DownLeftVectorBar",
        "⥗": "DownRightVectorBar",
        "⥘": "LeftUpVectorBar",
        "⥙": "LeftDownVectorBar",
        "⥚": "LeftTeeVector",
        "⥛": "RightTeeVector",
        "⥜": "RightUpTeeVector",
        "⥝": "RightDownTeeVector",
        "⥞": "DownLeftTeeVector",
        "⥟": "DownRightTeeVector",
        "⥠": "LeftUpTeeVector",
        "⥡": "LeftDownTeeVector",
        "⥢": "lHar",
        "⥣": "uHar",
        "⥤": "rHar",
        "⥥": "dHar",
        "⥦": "luruhar",
        "⥧": "ldrdhar",
        "⥨": "ruluhar",
        "⥩": "rdldhar",
        "⥪": "lharul",
        "⥫": "llhard",
        "⥬": "rharul",
        "⥭": "lrhard",
        "⥮": "udhar",
        "⥯": "duhar",
        "⥰": "RoundImplies",
        "⥱": "erarr",
        "⥲": "simrarr",
        "⥳": "larrsim",
        "⥴": "rarrsim",
        "⥵": "rarrap",
        "⥶": "ltlarr",
        "⥸": "gtrarr",
        "⥹": "subrarr",
        "⥻": "suplarr",
        "⥼": "lfisht",
        "⥽": "rfisht",
        "⥾": "ufisht",
        "⥿": "dfisht",
        "⦚": "vzigzag",
        "⦜": "vangrt",
        "⦝": "angrtvbd",
        "⦤": "ange",
        "⦥": "range",
        "⦦": "dwangle",
        "⦧": "uwangle",
        "⦨": "angmsdaa",
        "⦩": "angmsdab",
        "⦪": "angmsdac",
        "⦫": "angmsdad",
        "⦬": "angmsdae",
        "⦭": "angmsdaf",
        "⦮": "angmsdag",
        "⦯": "angmsdah",
        "⦰": "bemptyv",
        "⦱": "demptyv",
        "⦲": "cemptyv",
        "⦳": "raemptyv",
        "⦴": "laemptyv",
        "⦵": "ohbar",
        "⦶": "omid",
        "⦷": "opar",
        "⦹": "operp",
        "⦻": "olcross",
        "⦼": "odsold",
        "⦾": "olcir",
        "⦿": "ofcir",
        "⧀": "olt",
        "⧁": "ogt",
        "⧂": "cirscir",
        "⧃": "cirE",
        "⧄": "solb",
        "⧅": "bsolb",
        "⧉": "boxbox",
        "⧍": "trisb",
        "⧎": "rtriltri",
        "⧏": "LeftTriangleBar",
        "⧏̸": "NotLeftTriangleBar",
        "⧐": "RightTriangleBar",
        "⧐̸": "NotRightTriangleBar",
        "⧜": "iinfin",
        "⧝": "infintie",
        "⧞": "nvinfin",
        "⧣": "eparsl",
        "⧤": "smeparsl",
        "⧥": "eqvparsl",
        "⧫": "lozf",
        "⧴": "RuleDelayed",
        "⧶": "dsol",
        "⨀": "xodot",
        "⨁": "xoplus",
        "⨂": "xotime",
        "⨄": "xuplus",
        "⨆": "xsqcup",
        "⨍": "fpartint",
        "⨐": "cirfnint",
        "⨑": "awint",
        "⨒": "rppolint",
        "⨓": "scpolint",
        "⨔": "npolint",
        "⨕": "pointint",
        "⨖": "quatint",
        "⨗": "intlarhk",
        "⨢": "pluscir",
        "⨣": "plusacir",
        "⨤": "simplus",
        "⨥": "plusdu",
        "⨦": "plussim",
        "⨧": "plustwo",
        "⨩": "mcomma",
        "⨪": "minusdu",
        "⨭": "loplus",
        "⨮": "roplus",
        "⨯": "Cross",
        "⨰": "timesd",
        "⨱": "timesbar",
        "⨳": "smashp",
        "⨴": "lotimes",
        "⨵": "rotimes",
        "⨶": "otimesas",
        "⨷": "Otimes",
        "⨸": "odiv",
        "⨹": "triplus",
        "⨺": "triminus",
        "⨻": "tritime",
        "⨼": "iprod",
        "⨿": "amalg",
        "⩀": "capdot",
        "⩂": "ncup",
        "⩃": "ncap",
        "⩄": "capand",
        "⩅": "cupor",
        "⩆": "cupcap",
        "⩇": "capcup",
        "⩈": "cupbrcap",
        "⩉": "capbrcup",
        "⩊": "cupcup",
        "⩋": "capcap",
        "⩌": "ccups",
        "⩍": "ccaps",
        "⩐": "ccupssm",
        "⩓": "And",
        "⩔": "Or",
        "⩕": "andand",
        "⩖": "oror",
        "⩗": "orslope",
        "⩘": "andslope",
        "⩚": "andv",
        "⩛": "orv",
        "⩜": "andd",
        "⩝": "ord",
        "⩟": "wedbar",
        "⩦": "sdote",
        "⩪": "simdot",
        "⩭": "congdot",
        "⩭̸": "ncongdot",
        "⩮": "easter",
        "⩯": "apacir",
        "⩰": "apE",
        "⩰̸": "napE",
        "⩱": "eplus",
        "⩲": "pluse",
        "⩳": "Esim",
        "⩷": "eDDot",
        "⩸": "equivDD",
        "⩹": "ltcir",
        "⩺": "gtcir",
        "⩻": "ltquest",
        "⩼": "gtquest",
        "⩽": "les",
        "⩽̸": "nles",
        "⩾": "ges",
        "⩾̸": "nges",
        "⩿": "lesdot",
        "⪀": "gesdot",
        "⪁": "lesdoto",
        "⪂": "gesdoto",
        "⪃": "lesdotor",
        "⪄": "gesdotol",
        "⪅": "lap",
        "⪆": "gap",
        "⪇": "lne",
        "⪈": "gne",
        "⪉": "lnap",
        "⪊": "gnap",
        "⪋": "lEg",
        "⪌": "gEl",
        "⪍": "lsime",
        "⪎": "gsime",
        "⪏": "lsimg",
        "⪐": "gsiml",
        "⪑": "lgE",
        "⪒": "glE",
        "⪓": "lesges",
        "⪔": "gesles",
        "⪕": "els",
        "⪖": "egs",
        "⪗": "elsdot",
        "⪘": "egsdot",
        "⪙": "el",
        "⪚": "eg",
        "⪝": "siml",
        "⪞": "simg",
        "⪟": "simlE",
        "⪠": "simgE",
        "⪡": "LessLess",
        "⪡̸": "NotNestedLessLess",
        "⪢": "GreaterGreater",
        "⪢̸": "NotNestedGreaterGreater",
        "⪤": "glj",
        "⪥": "gla",
        "⪦": "ltcc",
        "⪧": "gtcc",
        "⪨": "lescc",
        "⪩": "gescc",
        "⪪": "smt",
        "⪫": "lat",
        "⪬": "smte",
        "⪬︀": "smtes",
        "⪭": "late",
        "⪭︀": "lates",
        "⪮": "bumpE",
        "⪯": "pre",
        "⪯̸": "npre",
        "⪰": "sce",
        "⪰̸": "nsce",
        "⪳": "prE",
        "⪴": "scE",
        "⪵": "prnE",
        "⪶": "scnE",
        "⪷": "prap",
        "⪸": "scap",
        "⪹": "prnap",
        "⪺": "scnap",
        "⪻": "Pr",
        "⪼": "Sc",
        "⪽": "subdot",
        "⪾": "supdot",
        "⪿": "subplus",
        "⫀": "supplus",
        "⫁": "submult",
        "⫂": "supmult",
        "⫃": "subedot",
        "⫄": "supedot",
        "⫅": "subE",
        "⫅̸": "nsubE",
        "⫆": "supE",
        "⫆̸": "nsupE",
        "⫇": "subsim",
        "⫈": "supsim",
        "⫋︀": "vsubnE",
        "⫋": "subnE",
        "⫌︀": "vsupnE",
        "⫌": "supnE",
        "⫏": "csub",
        "⫐": "csup",
        "⫑": "csube",
        "⫒": "csupe",
        "⫓": "subsup",
        "⫔": "supsub",
        "⫕": "subsub",
        "⫖": "supsup",
        "⫗": "suphsub",
        "⫘": "supdsub",
        "⫙": "forkv",
        "⫚": "topfork",
        "⫛": "mlcp",
        "⫤": "Dashv",
        "⫦": "Vdashl",
        "⫧": "Barv",
        "⫨": "vBar",
        "⫩": "vBarv",
        "⫫": "Vbar",
        "⫬": "Not",
        "⫭": "bNot",
        "⫮": "rnmid",
        "⫯": "cirmid",
        "⫰": "midcir",
        "⫱": "topcir",
        "⫲": "nhpar",
        "⫳": "parsim",
        "⫽": "parsl",
        "⫽⃥": "nparsl",
        "♭": "flat",
        "♮": "natur",
        "♯": "sharp",
        "¤": "curren",
        "¢": "cent",
        $: "dollar",
        "£": "pound",
        "¥": "yen",
        "€": "euro",
        "¹": "sup1",
        "½": "half",
        "⅓": "frac13",
        "¼": "frac14",
        "⅕": "frac15",
        "⅙": "frac16",
        "⅛": "frac18",
        "²": "sup2",
        "⅔": "frac23",
        "⅖": "frac25",
        "³": "sup3",
        "¾": "frac34",
        "⅗": "frac35",
        "⅜": "frac38",
        "⅘": "frac45",
        "⅚": "frac56",
        "⅝": "frac58",
        "⅞": "frac78",
        "𝒶": "ascr",
        "𝕒": "aopf",
        "𝔞": "afr",
        "𝔸": "Aopf",
        "𝔄": "Afr",
        "𝒜": "Ascr",
        ª: "ordf",
        á: "aacute",
        Á: "Aacute",
        à: "agrave",
        À: "Agrave",
        ă: "abreve",
        Ă: "Abreve",
        â: "acirc",
        Â: "Acirc",
        å: "aring",
        Å: "angst",
        ä: "auml",
        Ä: "Auml",
        ã: "atilde",
        Ã: "Atilde",
        ą: "aogon",
        Ą: "Aogon",
        ā: "amacr",
        Ā: "Amacr",
        æ: "aelig",
        Æ: "AElig",
        "𝒷": "bscr",
        "𝕓": "bopf",
        "𝔟": "bfr",
        "𝔹": "Bopf",
        ℬ: "Bscr",
        "𝔅": "Bfr",
        "𝔠": "cfr",
        "𝒸": "cscr",
        "𝕔": "copf",
        ℭ: "Cfr",
        "𝒞": "Cscr",
        ℂ: "Copf",
        ć: "cacute",
        Ć: "Cacute",
        ĉ: "ccirc",
        Ĉ: "Ccirc",
        č: "ccaron",
        Č: "Ccaron",
        ċ: "cdot",
        Ċ: "Cdot",
        ç: "ccedil",
        Ç: "Ccedil",
        "℅": "incare",
        "𝔡": "dfr",
        ⅆ: "dd",
        "𝕕": "dopf",
        "𝒹": "dscr",
        "𝒟": "Dscr",
        "𝔇": "Dfr",
        ⅅ: "DD",
        "𝔻": "Dopf",
        ď: "dcaron",
        Ď: "Dcaron",
        đ: "dstrok",
        Đ: "Dstrok",
        ð: "eth",
        Ð: "ETH",
        ⅇ: "ee",
        ℯ: "escr",
        "𝔢": "efr",
        "𝕖": "eopf",
        ℰ: "Escr",
        "𝔈": "Efr",
        "𝔼": "Eopf",
        é: "eacute",
        É: "Eacute",
        è: "egrave",
        È: "Egrave",
        ê: "ecirc",
        Ê: "Ecirc",
        ě: "ecaron",
        Ě: "Ecaron",
        ë: "euml",
        Ë: "Euml",
        ė: "edot",
        Ė: "Edot",
        ę: "eogon",
        Ę: "Eogon",
        ē: "emacr",
        Ē: "Emacr",
        "𝔣": "ffr",
        "𝕗": "fopf",
        "𝒻": "fscr",
        "𝔉": "Ffr",
        "𝔽": "Fopf",
        ℱ: "Fscr",
        ﬀ: "fflig",
        ﬃ: "ffilig",
        ﬄ: "ffllig",
        ﬁ: "filig",
        fj: "fjlig",
        ﬂ: "fllig",
        ƒ: "fnof",
        ℊ: "gscr",
        "𝕘": "gopf",
        "𝔤": "gfr",
        "𝒢": "Gscr",
        "𝔾": "Gopf",
        "𝔊": "Gfr",
        ǵ: "gacute",
        ğ: "gbreve",
        Ğ: "Gbreve",
        ĝ: "gcirc",
        Ĝ: "Gcirc",
        ġ: "gdot",
        Ġ: "Gdot",
        Ģ: "Gcedil",
        "𝔥": "hfr",
        ℎ: "planckh",
        "𝒽": "hscr",
        "𝕙": "hopf",
        ℋ: "Hscr",
        ℌ: "Hfr",
        ℍ: "Hopf",
        ĥ: "hcirc",
        Ĥ: "Hcirc",
        ℏ: "hbar",
        ħ: "hstrok",
        Ħ: "Hstrok",
        "𝕚": "iopf",
        "𝔦": "ifr",
        "𝒾": "iscr",
        ⅈ: "ii",
        "𝕀": "Iopf",
        ℐ: "Iscr",
        ℑ: "Im",
        í: "iacute",
        Í: "Iacute",
        ì: "igrave",
        Ì: "Igrave",
        î: "icirc",
        Î: "Icirc",
        ï: "iuml",
        Ï: "Iuml",
        ĩ: "itilde",
        Ĩ: "Itilde",
        İ: "Idot",
        į: "iogon",
        Į: "Iogon",
        ī: "imacr",
        Ī: "Imacr",
        ĳ: "ijlig",
        Ĳ: "IJlig",
        ı: "imath",
        "𝒿": "jscr",
        "𝕛": "jopf",
        "𝔧": "jfr",
        "𝒥": "Jscr",
        "𝔍": "Jfr",
        "𝕁": "Jopf",
        ĵ: "jcirc",
        Ĵ: "Jcirc",
        ȷ: "jmath",
        "𝕜": "kopf",
        "𝓀": "kscr",
        "𝔨": "kfr",
        "𝒦": "Kscr",
        "𝕂": "Kopf",
        "𝔎": "Kfr",
        ķ: "kcedil",
        Ķ: "Kcedil",
        "𝔩": "lfr",
        "𝓁": "lscr",
        ℓ: "ell",
        "𝕝": "lopf",
        ℒ: "Lscr",
        "𝔏": "Lfr",
        "𝕃": "Lopf",
        ĺ: "lacute",
        Ĺ: "Lacute",
        ľ: "lcaron",
        Ľ: "Lcaron",
        ļ: "lcedil",
        Ļ: "Lcedil",
        ł: "lstrok",
        Ł: "Lstrok",
        ŀ: "lmidot",
        Ŀ: "Lmidot",
        "𝔪": "mfr",
        "𝕞": "mopf",
        "𝓂": "mscr",
        "𝔐": "Mfr",
        "𝕄": "Mopf",
        ℳ: "Mscr",
        "𝔫": "nfr",
        "𝕟": "nopf",
        "𝓃": "nscr",
        ℕ: "Nopf",
        "𝒩": "Nscr",
        "𝔑": "Nfr",
        ń: "nacute",
        Ń: "Nacute",
        ň: "ncaron",
        Ň: "Ncaron",
        ñ: "ntilde",
        Ñ: "Ntilde",
        ņ: "ncedil",
        Ņ: "Ncedil",
        "№": "numero",
        ŋ: "eng",
        Ŋ: "ENG",
        "𝕠": "oopf",
        "𝔬": "ofr",
        ℴ: "oscr",
        "𝒪": "Oscr",
        "𝔒": "Ofr",
        "𝕆": "Oopf",
        º: "ordm",
        ó: "oacute",
        Ó: "Oacute",
        ò: "ograve",
        Ò: "Ograve",
        ô: "ocirc",
        Ô: "Ocirc",
        ö: "ouml",
        Ö: "Ouml",
        ő: "odblac",
        Ő: "Odblac",
        õ: "otilde",
        Õ: "Otilde",
        ø: "oslash",
        Ø: "Oslash",
        ō: "omacr",
        Ō: "Omacr",
        œ: "oelig",
        Œ: "OElig",
        "𝔭": "pfr",
        "𝓅": "pscr",
        "𝕡": "popf",
        ℙ: "Popf",
        "𝔓": "Pfr",
        "𝒫": "Pscr",
        "𝕢": "qopf",
        "𝔮": "qfr",
        "𝓆": "qscr",
        "𝒬": "Qscr",
        "𝔔": "Qfr",
        ℚ: "Qopf",
        ĸ: "kgreen",
        "𝔯": "rfr",
        "𝕣": "ropf",
        "𝓇": "rscr",
        ℛ: "Rscr",
        ℜ: "Re",
        ℝ: "Ropf",
        ŕ: "racute",
        Ŕ: "Racute",
        ř: "rcaron",
        Ř: "Rcaron",
        ŗ: "rcedil",
        Ŗ: "Rcedil",
        "𝕤": "sopf",
        "𝓈": "sscr",
        "𝔰": "sfr",
        "𝕊": "Sopf",
        "𝔖": "Sfr",
        "𝒮": "Sscr",
        "Ⓢ": "oS",
        ś: "sacute",
        Ś: "Sacute",
        ŝ: "scirc",
        Ŝ: "Scirc",
        š: "scaron",
        Š: "Scaron",
        ş: "scedil",
        Ş: "Scedil",
        ß: "szlig",
        "𝔱": "tfr",
        "𝓉": "tscr",
        "𝕥": "topf",
        "𝒯": "Tscr",
        "𝔗": "Tfr",
        "𝕋": "Topf",
        ť: "tcaron",
        Ť: "Tcaron",
        ţ: "tcedil",
        Ţ: "Tcedil",
        "™": "trade",
        ŧ: "tstrok",
        Ŧ: "Tstrok",
        "𝓊": "uscr",
        "𝕦": "uopf",
        "𝔲": "ufr",
        "𝕌": "Uopf",
        "𝔘": "Ufr",
        "𝒰": "Uscr",
        ú: "uacute",
        Ú: "Uacute",
        ù: "ugrave",
        Ù: "Ugrave",
        ŭ: "ubreve",
        Ŭ: "Ubreve",
        û: "ucirc",
        Û: "Ucirc",
        ů: "uring",
        Ů: "Uring",
        ü: "uuml",
        Ü: "Uuml",
        ű: "udblac",
        Ű: "Udblac",
        ũ: "utilde",
        Ũ: "Utilde",
        ų: "uogon",
        Ų: "Uogon",
        ū: "umacr",
        Ū: "Umacr",
        "𝔳": "vfr",
        "𝕧": "vopf",
        "𝓋": "vscr",
        "𝔙": "Vfr",
        "𝕍": "Vopf",
        "𝒱": "Vscr",
        "𝕨": "wopf",
        "𝓌": "wscr",
        "𝔴": "wfr",
        "𝒲": "Wscr",
        "𝕎": "Wopf",
        "𝔚": "Wfr",
        ŵ: "wcirc",
        Ŵ: "Wcirc",
        "𝔵": "xfr",
        "𝓍": "xscr",
        "𝕩": "xopf",
        "𝕏": "Xopf",
        "𝔛": "Xfr",
        "𝒳": "Xscr",
        "𝔶": "yfr",
        "𝓎": "yscr",
        "𝕪": "yopf",
        "𝒴": "Yscr",
        "𝔜": "Yfr",
        "𝕐": "Yopf",
        ý: "yacute",
        Ý: "Yacute",
        ŷ: "ycirc",
        Ŷ: "Ycirc",
        ÿ: "yuml",
        Ÿ: "Yuml",
        "𝓏": "zscr",
        "𝔷": "zfr",
        "𝕫": "zopf",
        ℨ: "Zfr",
        ℤ: "Zopf",
        "𝒵": "Zscr",
        ź: "zacute",
        Ź: "Zacute",
        ž: "zcaron",
        Ž: "Zcaron",
        ż: "zdot",
        Ż: "Zdot",
        Ƶ: "imped",
        þ: "thorn",
        Þ: "THORN",
        ŉ: "napos",
        α: "alpha",
        Α: "Alpha",
        β: "beta",
        Β: "Beta",
        γ: "gamma",
        Γ: "Gamma",
        δ: "delta",
        Δ: "Delta",
        ε: "epsi",
        ϵ: "epsiv",
        Ε: "Epsilon",
        ϝ: "gammad",
        Ϝ: "Gammad",
        ζ: "zeta",
        Ζ: "Zeta",
        η: "eta",
        Η: "Eta",
        θ: "theta",
        ϑ: "thetav",
        Θ: "Theta",
        ι: "iota",
        Ι: "Iota",
        κ: "kappa",
        ϰ: "kappav",
        Κ: "Kappa",
        λ: "lambda",
        Λ: "Lambda",
        μ: "mu",
        µ: "micro",
        Μ: "Mu",
        ν: "nu",
        Ν: "Nu",
        ξ: "xi",
        Ξ: "Xi",
        ο: "omicron",
        Ο: "Omicron",
        π: "pi",
        ϖ: "piv",
        Π: "Pi",
        ρ: "rho",
        ϱ: "rhov",
        Ρ: "Rho",
        σ: "sigma",
        Σ: "Sigma",
        ς: "sigmaf",
        τ: "tau",
        Τ: "Tau",
        υ: "upsi",
        Υ: "Upsilon",
        ϒ: "Upsi",
        φ: "phi",
        ϕ: "phiv",
        Φ: "Phi",
        χ: "chi",
        Χ: "Chi",
        ψ: "psi",
        Ψ: "Psi",
        ω: "omega",
        Ω: "ohm",
        а: "acy",
        А: "Acy",
        б: "bcy",
        Б: "Bcy",
        в: "vcy",
        В: "Vcy",
        г: "gcy",
        Г: "Gcy",
        ѓ: "gjcy",
        Ѓ: "GJcy",
        д: "dcy",
        Д: "Dcy",
        ђ: "djcy",
        Ђ: "DJcy",
        е: "iecy",
        Е: "IEcy",
        ё: "iocy",
        Ё: "IOcy",
        є: "jukcy",
        Є: "Jukcy",
        ж: "zhcy",
        Ж: "ZHcy",
        з: "zcy",
        З: "Zcy",
        ѕ: "dscy",
        Ѕ: "DScy",
        и: "icy",
        И: "Icy",
        і: "iukcy",
        І: "Iukcy",
        ї: "yicy",
        Ї: "YIcy",
        й: "jcy",
        Й: "Jcy",
        ј: "jsercy",
        Ј: "Jsercy",
        к: "kcy",
        К: "Kcy",
        ќ: "kjcy",
        Ќ: "KJcy",
        л: "lcy",
        Л: "Lcy",
        љ: "ljcy",
        Љ: "LJcy",
        м: "mcy",
        М: "Mcy",
        н: "ncy",
        Н: "Ncy",
        њ: "njcy",
        Њ: "NJcy",
        о: "ocy",
        О: "Ocy",
        п: "pcy",
        П: "Pcy",
        р: "rcy",
        Р: "Rcy",
        с: "scy",
        С: "Scy",
        т: "tcy",
        Т: "Tcy",
        ћ: "tshcy",
        Ћ: "TSHcy",
        у: "ucy",
        У: "Ucy",
        ў: "ubrcy",
        Ў: "Ubrcy",
        ф: "fcy",
        Ф: "Fcy",
        х: "khcy",
        Х: "KHcy",
        ц: "tscy",
        Ц: "TScy",
        ч: "chcy",
        Ч: "CHcy",
        џ: "dzcy",
        Џ: "DZcy",
        ш: "shcy",
        Ш: "SHcy",
        щ: "shchcy",
        Щ: "SHCHcy",
        ъ: "hardcy",
        Ъ: "HARDcy",
        ы: "ycy",
        Ы: "Ycy",
        ь: "softcy",
        Ь: "SOFTcy",
        э: "ecy",
        Э: "Ecy",
        ю: "yucy",
        Ю: "YUcy",
        я: "yacy",
        Я: "YAcy",
        ℵ: "aleph",
        ℶ: "beth",
        ℷ: "gimel",
        ℸ: "daleth",
      },
      m = /["&'<>`]/g,
      p = {
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#x27;",
        "<": "&lt;",
        ">": "&gt;",
        "`": "&#x60;",
      },
      A = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
      E =
        /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
      C =
        /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
      _ = {
        aacute: "á",
        Aacute: "Á",
        abreve: "ă",
        Abreve: "Ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        acirc: "â",
        Acirc: "Â",
        acute: "´",
        acy: "а",
        Acy: "А",
        aelig: "æ",
        AElig: "Æ",
        af: "⁡",
        afr: "𝔞",
        Afr: "𝔄",
        agrave: "à",
        Agrave: "À",
        alefsym: "ℵ",
        aleph: "ℵ",
        alpha: "α",
        Alpha: "Α",
        amacr: "ā",
        Amacr: "Ā",
        amalg: "⨿",
        amp: "&",
        AMP: "&",
        and: "∧",
        And: "⩓",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        aogon: "ą",
        Aogon: "Ą",
        aopf: "𝕒",
        Aopf: "𝔸",
        ap: "≈",
        apacir: "⩯",
        ape: "≊",
        apE: "⩰",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        aring: "å",
        Aring: "Å",
        ascr: "𝒶",
        Ascr: "𝒜",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        atilde: "ã",
        Atilde: "Ã",
        auml: "ä",
        Auml: "Ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        barwed: "⌅",
        Barwed: "⌆",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        bcy: "б",
        Bcy: "Б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        Because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        beta: "β",
        Beta: "Β",
        beth: "ℶ",
        between: "≬",
        bfr: "𝔟",
        Bfr: "𝔅",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bnot: "⌐",
        bNot: "⫭",
        bopf: "𝕓",
        Bopf: "𝔹",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxdl: "┐",
        boxdL: "╕",
        boxDl: "╖",
        boxDL: "╗",
        boxdr: "┌",
        boxdR: "╒",
        boxDr: "╓",
        boxDR: "╔",
        boxh: "─",
        boxH: "═",
        boxhd: "┬",
        boxhD: "╥",
        boxHd: "╤",
        boxHD: "╦",
        boxhu: "┴",
        boxhU: "╨",
        boxHu: "╧",
        boxHU: "╩",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxul: "┘",
        boxuL: "╛",
        boxUl: "╜",
        boxUL: "╝",
        boxur: "└",
        boxuR: "╘",
        boxUr: "╙",
        boxUR: "╚",
        boxv: "│",
        boxV: "║",
        boxvh: "┼",
        boxvH: "╪",
        boxVh: "╫",
        boxVH: "╬",
        boxvl: "┤",
        boxvL: "╡",
        boxVl: "╢",
        boxVL: "╣",
        boxvr: "├",
        boxvR: "╞",
        boxVr: "╟",
        boxVR: "╠",
        bprime: "‵",
        breve: "˘",
        Breve: "˘",
        brvbar: "¦",
        bscr: "𝒷",
        Bscr: "ℬ",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpe: "≏",
        bumpE: "⪮",
        bumpeq: "≏",
        Bumpeq: "≎",
        cacute: "ć",
        Cacute: "Ć",
        cap: "∩",
        Cap: "⋒",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        ccaron: "č",
        Ccaron: "Č",
        ccedil: "ç",
        Ccedil: "Ç",
        ccirc: "ĉ",
        Ccirc: "Ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        cdot: "ċ",
        Cdot: "Ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        centerdot: "·",
        CenterDot: "·",
        cfr: "𝔠",
        Cfr: "ℭ",
        chcy: "ч",
        CHcy: "Ч",
        check: "✓",
        checkmark: "✓",
        chi: "χ",
        Chi: "Χ",
        cir: "○",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cire: "≗",
        cirE: "⧃",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        Colon: "∷",
        colone: "≔",
        Colone: "⩴",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        conint: "∮",
        Conint: "∯",
        ContourIntegral: "∮",
        copf: "𝕔",
        Copf: "ℂ",
        coprod: "∐",
        Coproduct: "∐",
        copy: "©",
        COPY: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        cross: "✗",
        Cross: "⨯",
        cscr: "𝒸",
        Cscr: "𝒞",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cup: "∪",
        Cup: "⋓",
        cupbrcap: "⩈",
        cupcap: "⩆",
        CupCap: "≍",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dagger: "†",
        Dagger: "‡",
        daleth: "ℸ",
        darr: "↓",
        dArr: "⇓",
        Darr: "↡",
        dash: "‐",
        dashv: "⊣",
        Dashv: "⫤",
        dbkarow: "⤏",
        dblac: "˝",
        dcaron: "ď",
        Dcaron: "Ď",
        dcy: "д",
        Dcy: "Д",
        dd: "ⅆ",
        DD: "ⅅ",
        ddagger: "‡",
        ddarr: "⇊",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        delta: "δ",
        Delta: "Δ",
        demptyv: "⦱",
        dfisht: "⥿",
        dfr: "𝔡",
        Dfr: "𝔇",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        diamond: "⋄",
        Diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        djcy: "ђ",
        DJcy: "Ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        dopf: "𝕕",
        Dopf: "𝔻",
        dot: "˙",
        Dot: "¨",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        downarrow: "↓",
        Downarrow: "⇓",
        DownArrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        dscr: "𝒹",
        Dscr: "𝒟",
        dscy: "ѕ",
        DScy: "Ѕ",
        dsol: "⧶",
        dstrok: "đ",
        Dstrok: "Đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        dzcy: "џ",
        DZcy: "Џ",
        dzigrarr: "⟿",
        eacute: "é",
        Eacute: "É",
        easter: "⩮",
        ecaron: "ě",
        Ecaron: "Ě",
        ecir: "≖",
        ecirc: "ê",
        Ecirc: "Ê",
        ecolon: "≕",
        ecy: "э",
        Ecy: "Э",
        eDDot: "⩷",
        edot: "ė",
        eDot: "≑",
        Edot: "Ė",
        ee: "ⅇ",
        efDot: "≒",
        efr: "𝔢",
        Efr: "𝔈",
        eg: "⪚",
        egrave: "è",
        Egrave: "È",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        emacr: "ē",
        Emacr: "Ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp: " ",
        emsp13: " ",
        emsp14: " ",
        eng: "ŋ",
        ENG: "Ŋ",
        ensp: " ",
        eogon: "ę",
        Eogon: "Ę",
        eopf: "𝕖",
        Eopf: "𝔼",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        epsilon: "ε",
        Epsilon: "Ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        escr: "ℯ",
        Escr: "ℰ",
        esdot: "≐",
        esim: "≂",
        Esim: "⩳",
        eta: "η",
        Eta: "Η",
        eth: "ð",
        ETH: "Ð",
        euml: "ë",
        Euml: "Ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        ExponentialE: "ⅇ",
        fallingdotseq: "≒",
        fcy: "ф",
        Fcy: "Ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        ffr: "𝔣",
        Ffr: "𝔉",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        fopf: "𝕗",
        Fopf: "𝔽",
        forall: "∀",
        ForAll: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        Fscr: "ℱ",
        gacute: "ǵ",
        gamma: "γ",
        Gamma: "Γ",
        gammad: "ϝ",
        Gammad: "Ϝ",
        gap: "⪆",
        gbreve: "ğ",
        Gbreve: "Ğ",
        Gcedil: "Ģ",
        gcirc: "ĝ",
        Gcirc: "Ĝ",
        gcy: "г",
        Gcy: "Г",
        gdot: "ġ",
        Gdot: "Ġ",
        ge: "≥",
        gE: "≧",
        gel: "⋛",
        gEl: "⪌",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        gfr: "𝔤",
        Gfr: "𝔊",
        gg: "≫",
        Gg: "⋙",
        ggg: "⋙",
        gimel: "ℷ",
        gjcy: "ѓ",
        GJcy: "Ѓ",
        gl: "≷",
        gla: "⪥",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gnE: "≩",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        gopf: "𝕘",
        Gopf: "𝔾",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        gscr: "ℊ",
        Gscr: "𝒢",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        gt: ">",
        Gt: "≫",
        GT: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        hardcy: "ъ",
        HARDcy: "Ъ",
        harr: "↔",
        hArr: "⇔",
        harrcir: "⥈",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        hcirc: "ĥ",
        Hcirc: "Ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        Hopf: "ℍ",
        horbar: "―",
        HorizontalLine: "─",
        hscr: "𝒽",
        Hscr: "ℋ",
        hslash: "ℏ",
        hstrok: "ħ",
        Hstrok: "Ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        iacute: "í",
        Iacute: "Í",
        ic: "⁣",
        icirc: "î",
        Icirc: "Î",
        icy: "и",
        Icy: "И",
        Idot: "İ",
        iecy: "е",
        IEcy: "Е",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        Ifr: "ℑ",
        igrave: "ì",
        Igrave: "Ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        ijlig: "ĳ",
        IJlig: "Ĳ",
        Im: "ℑ",
        imacr: "ī",
        Imacr: "Ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        in: "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        int: "∫",
        Int: "∬",
        intcal: "⊺",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        iocy: "ё",
        IOcy: "Ё",
        iogon: "į",
        Iogon: "Į",
        iopf: "𝕚",
        Iopf: "𝕀",
        iota: "ι",
        Iota: "Ι",
        iprod: "⨼",
        iquest: "¿",
        iscr: "𝒾",
        Iscr: "ℐ",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        itilde: "ĩ",
        Itilde: "Ĩ",
        iukcy: "і",
        Iukcy: "І",
        iuml: "ï",
        Iuml: "Ï",
        jcirc: "ĵ",
        Jcirc: "Ĵ",
        jcy: "й",
        Jcy: "Й",
        jfr: "𝔧",
        Jfr: "𝔍",
        jmath: "ȷ",
        jopf: "𝕛",
        Jopf: "𝕁",
        jscr: "𝒿",
        Jscr: "𝒥",
        jsercy: "ј",
        Jsercy: "Ј",
        jukcy: "є",
        Jukcy: "Є",
        kappa: "κ",
        Kappa: "Κ",
        kappav: "ϰ",
        kcedil: "ķ",
        Kcedil: "Ķ",
        kcy: "к",
        Kcy: "К",
        kfr: "𝔨",
        Kfr: "𝔎",
        kgreen: "ĸ",
        khcy: "х",
        KHcy: "Х",
        kjcy: "ќ",
        KJcy: "Ќ",
        kopf: "𝕜",
        Kopf: "𝕂",
        kscr: "𝓀",
        Kscr: "𝒦",
        lAarr: "⇚",
        lacute: "ĺ",
        Lacute: "Ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        lambda: "λ",
        Lambda: "Λ",
        lang: "⟨",
        Lang: "⟪",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        larr: "←",
        lArr: "⇐",
        Larr: "↞",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        latail: "⤙",
        lAtail: "⤛",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lBarr: "⤎",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        lcaron: "ľ",
        Lcaron: "Ľ",
        lcedil: "ļ",
        Lcedil: "Ļ",
        lceil: "⌈",
        lcub: "{",
        lcy: "л",
        Lcy: "Л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        lE: "≦",
        LeftAngleBracket: "⟨",
        leftarrow: "←",
        Leftarrow: "⇐",
        LeftArrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        Leftrightarrow: "⇔",
        LeftRightArrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        leg: "⋚",
        lEg: "⪋",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        lfr: "𝔩",
        Lfr: "𝔏",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        ljcy: "љ",
        LJcy: "Љ",
        ll: "≪",
        Ll: "⋘",
        llarr: "⇇",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        lmidot: "ŀ",
        Lmidot: "Ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lnE: "≨",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        Longleftarrow: "⟸",
        LongLeftArrow: "⟵",
        longleftrightarrow: "⟷",
        Longleftrightarrow: "⟺",
        LongLeftRightArrow: "⟷",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        Longrightarrow: "⟹",
        LongRightArrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        lopf: "𝕝",
        Lopf: "𝕃",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        Lscr: "ℒ",
        lsh: "↰",
        Lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        lstrok: "ł",
        Lstrok: "Ł",
        lt: "<",
        Lt: "≪",
        LT: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        map: "↦",
        Map: "⤅",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        mcy: "м",
        Mcy: "М",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        mfr: "𝔪",
        Mfr: "𝔐",
        mho: "℧",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        mopf: "𝕞",
        Mopf: "𝕄",
        mp: "∓",
        mscr: "𝓂",
        Mscr: "ℳ",
        mstpos: "∾",
        mu: "μ",
        Mu: "Μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        nacute: "ń",
        Nacute: "Ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        ncaron: "ň",
        Ncaron: "Ň",
        ncedil: "ņ",
        Ncedil: "Ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        ncy: "н",
        Ncy: "Н",
        ndash: "–",
        ne: "≠",
        nearhk: "⤤",
        nearr: "↗",
        neArr: "⇗",
        nearrow: "↗",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: `
`,
        nexist: "∄",
        nexists: "∄",
        nfr: "𝔫",
        Nfr: "𝔑",
        nge: "≱",
        ngE: "≧̸",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        ngt: "≯",
        nGt: "≫⃒",
        ngtr: "≯",
        nGtv: "≫̸",
        nharr: "↮",
        nhArr: "⇎",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        njcy: "њ",
        NJcy: "Њ",
        nlarr: "↚",
        nlArr: "⇍",
        nldr: "‥",
        nle: "≰",
        nlE: "≦̸",
        nleftarrow: "↚",
        nLeftarrow: "⇍",
        nleftrightarrow: "↮",
        nLeftrightarrow: "⇎",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nlt: "≮",
        nLt: "≪⃒",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        nopf: "𝕟",
        Nopf: "ℕ",
        not: "¬",
        Not: "⫬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrarr: "↛",
        nrArr: "⇏",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nRightarrow: "⇏",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        nscr: "𝓃",
        Nscr: "𝒩",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsube: "⊈",
        nsubE: "⫅̸",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupe: "⊉",
        nsupE: "⫆̸",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        ntilde: "ñ",
        Ntilde: "Ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        nu: "ν",
        Nu: "Ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvDash: "⊭",
        nVdash: "⊮",
        nVDash: "⊯",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwarr: "↖",
        nwArr: "⇖",
        nwarrow: "↖",
        nwnear: "⤧",
        oacute: "ó",
        Oacute: "Ó",
        oast: "⊛",
        ocir: "⊚",
        ocirc: "ô",
        Ocirc: "Ô",
        ocy: "о",
        Ocy: "О",
        odash: "⊝",
        odblac: "ő",
        Odblac: "Ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        oelig: "œ",
        OElig: "Œ",
        ofcir: "⦿",
        ofr: "𝔬",
        Ofr: "𝔒",
        ogon: "˛",
        ograve: "ò",
        Ograve: "Ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        omacr: "ō",
        Omacr: "Ō",
        omega: "ω",
        Omega: "Ω",
        omicron: "ο",
        Omicron: "Ο",
        omid: "⦶",
        ominus: "⊖",
        oopf: "𝕠",
        Oopf: "𝕆",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        or: "∨",
        Or: "⩔",
        orarr: "↻",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        oscr: "ℴ",
        Oscr: "𝒪",
        oslash: "ø",
        Oslash: "Ø",
        osol: "⊘",
        otilde: "õ",
        Otilde: "Õ",
        otimes: "⊗",
        Otimes: "⨷",
        otimesas: "⨶",
        ouml: "ö",
        Ouml: "Ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        par: "∥",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        pcy: "п",
        Pcy: "П",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        pfr: "𝔭",
        Pfr: "𝔓",
        phi: "φ",
        Phi: "Φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        pi: "π",
        Pi: "Π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        popf: "𝕡",
        Popf: "ℙ",
        pound: "£",
        pr: "≺",
        Pr: "⪻",
        prap: "⪷",
        prcue: "≼",
        pre: "⪯",
        prE: "⪳",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        prime: "′",
        Prime: "″",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportion: "∷",
        Proportional: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        pscr: "𝓅",
        Pscr: "𝒫",
        psi: "ψ",
        Psi: "Ψ",
        puncsp: " ",
        qfr: "𝔮",
        Qfr: "𝔔",
        qint: "⨌",
        qopf: "𝕢",
        Qopf: "ℚ",
        qprime: "⁗",
        qscr: "𝓆",
        Qscr: "𝒬",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quot: '"',
        QUOT: '"',
        rAarr: "⇛",
        race: "∽̱",
        racute: "ŕ",
        Racute: "Ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        Rang: "⟫",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        rarr: "→",
        rArr: "⇒",
        Rarr: "↠",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        rarrtl: "↣",
        Rarrtl: "⤖",
        rarrw: "↝",
        ratail: "⤚",
        rAtail: "⤜",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rBarr: "⤏",
        RBarr: "⤐",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        rcaron: "ř",
        Rcaron: "Ř",
        rcedil: "ŗ",
        Rcedil: "Ŗ",
        rceil: "⌉",
        rcub: "}",
        rcy: "р",
        Rcy: "Р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        Re: "ℜ",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        reg: "®",
        REG: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        Rfr: "ℜ",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        rho: "ρ",
        Rho: "Ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        rightarrow: "→",
        Rightarrow: "⇒",
        RightArrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        Ropf: "ℝ",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        rscr: "𝓇",
        Rscr: "ℛ",
        rsh: "↱",
        Rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        sacute: "ś",
        Sacute: "Ś",
        sbquo: "‚",
        sc: "≻",
        Sc: "⪼",
        scap: "⪸",
        scaron: "š",
        Scaron: "Š",
        sccue: "≽",
        sce: "⪰",
        scE: "⪴",
        scedil: "ş",
        Scedil: "Ş",
        scirc: "ŝ",
        Scirc: "Ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        scy: "с",
        Scy: "С",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        searhk: "⤥",
        searr: "↘",
        seArr: "⇘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        sfr: "𝔰",
        Sfr: "𝔖",
        sfrown: "⌢",
        sharp: "♯",
        shchcy: "щ",
        SHCHcy: "Щ",
        shcy: "ш",
        SHcy: "Ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        sigma: "σ",
        Sigma: "Σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        softcy: "ь",
        SOFTcy: "Ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        sopf: "𝕤",
        Sopf: "𝕊",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        square: "□",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        sscr: "𝓈",
        Sscr: "𝒮",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        star: "☆",
        Star: "⋆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        Sub: "⋐",
        subdot: "⪽",
        sube: "⊆",
        subE: "⫅",
        subedot: "⫃",
        submult: "⫁",
        subne: "⊊",
        subnE: "⫋",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        Subset: "⋐",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        sum: "∑",
        Sum: "∑",
        sung: "♪",
        sup: "⊃",
        Sup: "⋑",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        supdot: "⪾",
        supdsub: "⫘",
        supe: "⊇",
        supE: "⫆",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supne: "⊋",
        supnE: "⫌",
        supplus: "⫀",
        supset: "⊃",
        Supset: "⋑",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swarr: "↙",
        swArr: "⇙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: "	",
        target: "⌖",
        tau: "τ",
        Tau: "Τ",
        tbrk: "⎴",
        tcaron: "ť",
        Tcaron: "Ť",
        tcedil: "ţ",
        Tcedil: "Ţ",
        tcy: "т",
        Tcy: "Т",
        tdot: "⃛",
        telrec: "⌕",
        tfr: "𝔱",
        Tfr: "𝔗",
        there4: "∴",
        therefore: "∴",
        Therefore: "∴",
        theta: "θ",
        Theta: "Θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        thinsp: " ",
        ThinSpace: " ",
        thkap: "≈",
        thksim: "∼",
        thorn: "þ",
        THORN: "Þ",
        tilde: "˜",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        topf: "𝕥",
        Topf: "𝕋",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        TRADE: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        tscr: "𝓉",
        Tscr: "𝒯",
        tscy: "ц",
        TScy: "Ц",
        tshcy: "ћ",
        TSHcy: "Ћ",
        tstrok: "ŧ",
        Tstrok: "Ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        uacute: "ú",
        Uacute: "Ú",
        uarr: "↑",
        uArr: "⇑",
        Uarr: "↟",
        Uarrocir: "⥉",
        ubrcy: "ў",
        Ubrcy: "Ў",
        ubreve: "ŭ",
        Ubreve: "Ŭ",
        ucirc: "û",
        Ucirc: "Û",
        ucy: "у",
        Ucy: "У",
        udarr: "⇅",
        udblac: "ű",
        Udblac: "Ű",
        udhar: "⥮",
        ufisht: "⥾",
        ufr: "𝔲",
        Ufr: "𝔘",
        ugrave: "ù",
        Ugrave: "Ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        umacr: "ū",
        Umacr: "Ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        uogon: "ų",
        Uogon: "Ų",
        uopf: "𝕦",
        Uopf: "𝕌",
        uparrow: "↑",
        Uparrow: "⇑",
        UpArrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        updownarrow: "↕",
        Updownarrow: "⇕",
        UpDownArrow: "↕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        upsi: "υ",
        Upsi: "ϒ",
        upsih: "ϒ",
        upsilon: "υ",
        Upsilon: "Υ",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        uring: "ů",
        Uring: "Ů",
        urtri: "◹",
        uscr: "𝓊",
        Uscr: "𝒰",
        utdot: "⋰",
        utilde: "ũ",
        Utilde: "Ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        uuml: "ü",
        Uuml: "Ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        vArr: "⇕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vBar: "⫨",
        Vbar: "⫫",
        vBarv: "⫩",
        vcy: "в",
        Vcy: "В",
        vdash: "⊢",
        vDash: "⊨",
        Vdash: "⊩",
        VDash: "⊫",
        Vdashl: "⫦",
        vee: "∨",
        Vee: "⋁",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        Verbar: "‖",
        vert: "|",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        vfr: "𝔳",
        Vfr: "𝔙",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        vopf: "𝕧",
        Vopf: "𝕍",
        vprop: "∝",
        vrtri: "⊳",
        vscr: "𝓋",
        Vscr: "𝒱",
        vsubne: "⊊︀",
        vsubnE: "⫋︀",
        vsupne: "⊋︀",
        vsupnE: "⫌︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        wcirc: "ŵ",
        Wcirc: "Ŵ",
        wedbar: "⩟",
        wedge: "∧",
        Wedge: "⋀",
        wedgeq: "≙",
        weierp: "℘",
        wfr: "𝔴",
        Wfr: "𝔚",
        wopf: "𝕨",
        Wopf: "𝕎",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        wscr: "𝓌",
        Wscr: "𝒲",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        xfr: "𝔵",
        Xfr: "𝔛",
        xharr: "⟷",
        xhArr: "⟺",
        xi: "ξ",
        Xi: "Ξ",
        xlarr: "⟵",
        xlArr: "⟸",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        xopf: "𝕩",
        Xopf: "𝕏",
        xoplus: "⨁",
        xotime: "⨂",
        xrarr: "⟶",
        xrArr: "⟹",
        xscr: "𝓍",
        Xscr: "𝒳",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        yacute: "ý",
        Yacute: "Ý",
        yacy: "я",
        YAcy: "Я",
        ycirc: "ŷ",
        Ycirc: "Ŷ",
        ycy: "ы",
        Ycy: "Ы",
        yen: "¥",
        yfr: "𝔶",
        Yfr: "𝔜",
        yicy: "ї",
        YIcy: "Ї",
        yopf: "𝕪",
        Yopf: "𝕐",
        yscr: "𝓎",
        Yscr: "𝒴",
        yucy: "ю",
        YUcy: "Ю",
        yuml: "ÿ",
        Yuml: "Ÿ",
        zacute: "ź",
        Zacute: "Ź",
        zcaron: "ž",
        Zcaron: "Ž",
        zcy: "з",
        Zcy: "З",
        zdot: "ż",
        Zdot: "Ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        zeta: "ζ",
        Zeta: "Ζ",
        zfr: "𝔷",
        Zfr: "ℨ",
        zhcy: "ж",
        ZHcy: "Ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        Zopf: "ℤ",
        zscr: "𝓏",
        Zscr: "𝒵",
        zwj: "‍",
        zwnj: "‌",
      },
      f = {
        aacute: "á",
        Aacute: "Á",
        acirc: "â",
        Acirc: "Â",
        acute: "´",
        aelig: "æ",
        AElig: "Æ",
        agrave: "à",
        Agrave: "À",
        amp: "&",
        AMP: "&",
        aring: "å",
        Aring: "Å",
        atilde: "ã",
        Atilde: "Ã",
        auml: "ä",
        Auml: "Ä",
        brvbar: "¦",
        ccedil: "ç",
        Ccedil: "Ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        COPY: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        eacute: "é",
        Eacute: "É",
        ecirc: "ê",
        Ecirc: "Ê",
        egrave: "è",
        Egrave: "È",
        eth: "ð",
        ETH: "Ð",
        euml: "ë",
        Euml: "Ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        GT: ">",
        iacute: "í",
        Iacute: "Í",
        icirc: "î",
        Icirc: "Î",
        iexcl: "¡",
        igrave: "ì",
        Igrave: "Ì",
        iquest: "¿",
        iuml: "ï",
        Iuml: "Ï",
        laquo: "«",
        lt: "<",
        LT: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        ntilde: "ñ",
        Ntilde: "Ñ",
        oacute: "ó",
        Oacute: "Ó",
        ocirc: "ô",
        Ocirc: "Ô",
        ograve: "ò",
        Ograve: "Ò",
        ordf: "ª",
        ordm: "º",
        oslash: "ø",
        Oslash: "Ø",
        otilde: "õ",
        Otilde: "Õ",
        ouml: "ö",
        Ouml: "Ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        QUOT: '"',
        raquo: "»",
        reg: "®",
        REG: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        thorn: "þ",
        THORN: "Þ",
        times: "×",
        uacute: "ú",
        Uacute: "Ú",
        ucirc: "û",
        Ucirc: "Û",
        ugrave: "ù",
        Ugrave: "Ù",
        uml: "¨",
        uuml: "ü",
        Uuml: "Ü",
        yacute: "ý",
        Yacute: "Ý",
        yen: "¥",
        yuml: "ÿ",
      },
      s = {
        0: "�",
        128: "€",
        130: "‚",
        131: "ƒ",
        132: "„",
        133: "…",
        134: "†",
        135: "‡",
        136: "ˆ",
        137: "‰",
        138: "Š",
        139: "‹",
        140: "Œ",
        142: "Ž",
        145: "‘",
        146: "’",
        147: "“",
        148: "”",
        149: "•",
        150: "–",
        151: "—",
        152: "˜",
        153: "™",
        154: "š",
        155: "›",
        156: "œ",
        158: "ž",
        159: "Ÿ",
      },
      d = [
        1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134,
        135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
        149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977,
        64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987,
        64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997,
        64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007,
        65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
        327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
        655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
        917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
      ],
      g = String.fromCharCode,
      x = {},
      S = x.hasOwnProperty,
      F = function (v, k) {
        return S.call(v, k);
      },
      q = function (v, k) {
        for (var L = -1, z = v.length; ++L < z; ) if (v[L] == k) return !0;
        return !1;
      },
      O = function (v, k) {
        if (!v) return k;
        var L = {},
          z;
        for (z in k) L[z] = F(v, z) ? v[z] : k[z];
        return L;
      },
      N = function (v, k) {
        var L = "";
        return (v >= 55296 && v <= 57343) || v > 1114111
          ? (k &&
              re("character reference outside the permissible Unicode range"),
            "�")
          : F(s, v)
          ? (k && re("disallowed character reference"), s[v])
          : (k && q(d, v) && re("disallowed character reference"),
            v > 65535 &&
              ((v -= 65536),
              (L += g(((v >>> 10) & 1023) | 55296)),
              (v = 56320 | (v & 1023))),
            (L += g(v)),
            L);
      },
      ve = function (v) {
        return "&#x" + v.toString(16).toUpperCase() + ";";
      },
      wu = function (v) {
        return "&#" + v + ";";
      },
      re = function (v) {
        throw Error("Parse error: " + v);
      },
      Iu = function (v, k) {
        k = O(k, Iu.options);
        var L = k.strict;
        L && E.test(v) && re("forbidden code point");
        var z = k.encodeEverything,
          ke = k.useNamedReferences,
          ye = k.allowUnsafeSymbols,
          ru = k.decimal ? wu : ve,
          fe = function (Q) {
            return ru(Q.charCodeAt(0));
          };
        return (
          z
            ? ((v = v.replace(i, function (Q) {
                return ke && F(h, Q) ? "&" + h[Q] + ";" : fe(Q);
              })),
              ke &&
                (v = v
                  .replace(/&gt;\u20D2/g, "&nvgt;")
                  .replace(/&lt;\u20D2/g, "&nvlt;")
                  .replace(/&#x66;&#x6A;/g, "&fjlig;")),
              ke &&
                (v = v.replace(c, function (Q) {
                  return "&" + h[Q] + ";";
                })))
            : ke
            ? (ye ||
                (v = v.replace(m, function (Q) {
                  return "&" + h[Q] + ";";
                })),
              (v = v
                .replace(/&gt;\u20D2/g, "&nvgt;")
                .replace(/&lt;\u20D2/g, "&nvlt;")),
              (v = v.replace(c, function (Q) {
                return "&" + h[Q] + ";";
              })))
            : ye || (v = v.replace(m, fe)),
          v
            .replace(o, function (Q) {
              var ot = Q.charCodeAt(0),
                Ln = Q.charCodeAt(1),
                Qo = (ot - 55296) * 1024 + Ln - 56320 + 65536;
              return ru(Qo);
            })
            .replace(a, fe)
        );
      };
    Iu.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1,
    };
    var ju = function (v, k) {
      k = O(k, ju.options);
      var L = k.strict;
      return (
        L && A.test(v) && re("malformed character reference"),
        v.replace(C, function (z, ke, ye, ru, fe, Q, ot, Ln, Qo) {
          var it, at, $o, Wo, st, ct;
          return ke
            ? ((st = ke), _[st])
            : ye
            ? ((st = ye),
              (ct = ru),
              ct && k.isAttributeValue
                ? (L &&
                    ct == "=" &&
                    re("`&` did not start a character reference"),
                  z)
                : (L &&
                    re(
                      "named character reference was not terminated by a semicolon"
                    ),
                  f[st] + (ct || "")))
            : fe
            ? (($o = fe),
              (at = Q),
              L &&
                !at &&
                re("character reference was not terminated by a semicolon"),
              (it = parseInt($o, 10)),
              N(it, L))
            : ot
            ? ((Wo = ot),
              (at = Ln),
              L &&
                !at &&
                re("character reference was not terminated by a semicolon"),
              (it = parseInt(Wo, 16)),
              N(it, L))
            : (L &&
                re(
                  "named character reference was not terminated by a semicolon"
                ),
              z);
        })
      );
    };
    ju.options = { isAttributeValue: !1, strict: !1 };
    var hr = function (v) {
        return v.replace(m, function (k) {
          return p[k];
        });
      },
      Ge = {
        version: "1.2.0",
        encode: Iu,
        decode: ju,
        escape: hr,
        unescape: ju,
      };
    if (t && !t.nodeType)
      if (n) n.exports = Ge;
      else for (var w in Ge) F(Ge, w) && (t[w] = Ge[w]);
    else r.he = Ge;
  })(Nn);
})(fn, fn.exports);
var Xf = fn.exports;
const dn = la(Xf);
function ed({ name: e, category: u }) {
  const r = dn.decode(u);
  return y.jsxs("div", {
    className: "quiz-header-information",
    children: [
      y.jsxs("h3", { children: ["Player Name: ", e] }),
      y.jsxs("h3", { children: ["Category: ", r] }),
    ],
  });
}
function ud({ correct: e, incorrect: u }) {
  return y.jsxs("div", {
    className: "total-score",
    children: [
      y.jsx("div", {
        className: "score-counter",
        children: y.jsxs("p", {
          children: ["Correct: ", y.jsx("span", { children: e })],
        }),
      }),
      y.jsx("div", {
        className: "score-counter",
        children: y.jsxs("p", {
          children: ["Incorrect: ", y.jsx("span", { children: u })],
        }),
      }),
    ],
  });
}
function rd({ name: e, category: u, correct: r, incorrect: t }) {
  return y.jsxs("div", {
    className: "quiz-page-header",
    children: [
      y.jsx(ed, { name: e, category: u }),
      y.jsx(ud, { correct: r, incorrect: t }),
    ],
  });
}
class td extends mn.Component {
  constructor(u) {
    super(u),
      (this.state = { time: this.props.time }),
      (this.intervalId = null);
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  startTimer() {
    this.intervalId = setInterval(() => {
      this.setState((u) =>
        u.time <= 0
          ? (clearInterval(this.intervalId),
            this.props.onTimeUp && this.props.onTimeUp(),
            { time: 0 })
          : { time: u.time - 1 }
      );
    }, 1e3);
  }
  render() {
    return y.jsx("div", {
      className: "timer",
      children: y.jsx("h1", { className: "timer", children: this.state.time }),
    });
  }
}
function nd({ question: e, onAnswerSelected: u }) {
  const r = dn.decode(e.correct_answer),
    t = e.incorrect_answers.map(dn.decode);
  return (
    t.splice(Math.floor(Math.random() * (t.length + 1)), 0, r),
    y.jsx("div", {
      className: "answer-choices",
      children: t.map((n, l) =>
        y.jsx("button", { onClick: () => u(n === r), children: n }, l)
      ),
    })
  );
}
function ld({ questions: e, currentQuestionIndex: u, onAnswerSelected: r }) {
  if (!e || e.length === 0 || u >= e.length) return null;
  const t = e[u],
    n = dn.decode(t.question);
  return y.jsxs("div", {
    className: "quiz-main-section",
    children: [
      y.jsx("h2", { className: "quiz-question", children: n }),
      y.jsx(nd, { question: t, onAnswerSelected: r }),
      ";",
    ],
  });
}
function od({
  time: e,
  onTimeUp: u,
  questions: r,
  currentQuestionIndex: t,
  questionsLength: n,
  onAnswerSelected: l,
}) {
  return y.jsxs("div", {
    className: "quiz-page-body",
    children: [
      y.jsx(td, { time: e, onTimeUp: u }),
      y.jsx(ld, { questions: r, currentQuestionIndex: t, onAnswerSelected: l }),
      y.jsxs("p", {
        className: "quiz-page-number",
        children: ["Question: ", t + 1, " / ", n],
      }),
    ],
  });
}
function id({
  name: e,
  score: u,
  correct: r,
  incorrect: t,
  unanswered: n,
  onRefresh: l,
}) {
  return y.jsx("div", {
    className: "quiz-result",
    children: y.jsxs("div", {
      className: "result-modal",
      children: [
        y.jsx("h1", { children: "Quiz Finished" }),
        y.jsx("img", {
          src: "/the-quiz/stars_24dp_FDF3D0_FILL0_wght400_GRAD0_opsz24.svg",
          alt: "star",
          className: "quiz-result-icon",
        }),
        y.jsxs("h3", { children: ["Player Name: ", e] }),
        y.jsxs("h2", { children: ["Score: ", u] }),
        y.jsxs("div", {
          className: "quiz-score",
          children: [
            y.jsx("div", {
              className: "final-score",
              children: y.jsxs("p", {
                children: ["Correct: ", y.jsx("span", { children: r })],
              }),
            }),
            y.jsx("div", {
              className: "final-score",
              children: y.jsxs("p", {
                children: ["Unanswered: ", y.jsx("span", { children: n })],
              }),
            }),
            y.jsx("div", {
              className: "final-score",
              children: y.jsxs("p", {
                children: ["Incorrect: ", y.jsx("span", { children: t })],
              }),
            }),
          ],
        }),
        y.jsx("button", {
          className: "result-button",
          onClick: l,
          children: "Retry",
        }),
      ],
    }),
  });
}
function ad({
  isLoggedIn: e,
  name: u,
  category: r,
  correct: t,
  incorrect: n,
  time: l,
  onTimeUp: o,
  questions: i,
  questionsLength: a,
  currentQuestionIndex: c,
  onAnswerSelected: h,
}) {
  return e
    ? y.jsxs("div", {
        className: "quiz-page",
        children: [
          y.jsx(rd, { name: u, category: r, correct: t, incorrect: n }),
          y.jsx(od, {
            time: l,
            onTimeUp: o,
            questions: i,
            questionsLength: a,
            currentQuestionIndex: c,
            onAnswerSelected: h,
          }),
        ],
      })
    : null;
}
let y2 = 0,
  A2 = "",
  Sr = [];
async function E2() {
  try {
    const r = {
      token: (
        await (
          await fetch("https://opentdb.com/api_token.php?command=request")
        ).json()
      ).token,
      timeStamp: Date.now(),
    };
    return localStorage.setItem("triviaToken", JSON.stringify(r)), r.token;
  } catch (e) {
    return console.log("Error fetching token:", e), null;
  }
}
async function sd() {
  const e = localStorage.getItem("triviaToken");
  if (e) {
    const u = JSON.parse(e),
      r = Date.now(),
      t = 6 * 60 * 60 * 1e3;
    if (r - u.timeStamp < t) return u.token;
  }
  return await E2();
}
async function C2(e, u) {
  y2 = 0;
  const r = await sd();
  if (!r)
    return console.error("Cannot fetch quiz questions without a token"), null;
  const t = `https://opentdb.com/api.php?amount=10&type=multiple&category=${e}&difficulty=${u}&token=${r}`;
  try {
    const l = await (await fetch(t)).json();
    return l.response_code === 3 || l.response_code === 4
      ? (await E2())
        ? await C2()
        : (console.error("Failed to fetch new token"), null)
      : ((Sr = l.results), (A2 = Sr.length > 0 ? Sr[0].category : ""), Sr);
  } catch (n) {
    return console.error("Error fetching quiz questions:", n), null;
  }
}
const na = () => [...Sr];
function cd() {
  return y.jsxs("div", {
    className: "loading-indicator",
    children: [
      y.jsx("span", { children: "Loading..." }),
      y.jsx("div", { className: "spinner" }),
    ],
  });
}
class fd extends mn.Component {
  constructor(r) {
    super(r);
    de(this, "onCategoryChangeEventHandler", (r) => {
      this.setState({ categoryId: Number(r.target.value) });
    });
    de(this, "onDifficultyChangeEventHandler", (r) => {
      this.setState({ difficulty: r.target.value });
    });
    de(this, "onSubmitEventHandler", (r) => {
      r.preventDefault();
      const { categoryId: t, difficulty: n } = this.state;
      t > 0 && this.props.onSubmitConfig({ categoryId: t, difficulty: n });
    });
    this.state = { categoryId: 0, difficulty: "" };
  }
  render() {
    const { categoryId: r, difficulty: t } = this.state,
      n = r === 0 || !t;
    return this.props.isLoggedIn
      ? y.jsxs("form", {
          action: "",
          className: "question-configuration",
          onSubmit: this.onSubmitEventHandler,
          children: [
            y.jsxs("label", {
              htmlFor: "category",
              children: [
                "Select Category",
                y.jsxs("select", {
                  id: "category",
                  onChange: this.onCategoryChangeEventHandler,
                  value: r,
                  children: [
                    y.jsx("option", {
                      value: "0",
                      disabled: !0,
                      children: "Select Category",
                    }),
                    y.jsx("option", {
                      value: "9",
                      children: "General Knowledge",
                    }),
                    y.jsx("option", {
                      value: "11",
                      children: "Entertainment: Film",
                    }),
                    y.jsx("option", {
                      value: "12",
                      children: "Entertainment: Music",
                    }),
                    y.jsx("option", {
                      value: "14",
                      children: "Entertainment: Television",
                    }),
                    y.jsx("option", {
                      value: "15",
                      children: "Entertainment: Video Game",
                    }),
                    y.jsx("option", {
                      value: "31",
                      children: "Entertainment: Japanese Anime & Manga",
                    }),
                    y.jsx("option", {
                      value: "17",
                      children: "Science & Nature",
                    }),
                    y.jsx("option", {
                      value: "18",
                      children: "Science: Computers",
                    }),
                    y.jsx("option", { value: "21", children: "Sports" }),
                    y.jsx("option", { value: "22", children: "Geography" }),
                    y.jsx("option", { value: "23", children: "History" }),
                  ],
                }),
              ],
            }),
            y.jsxs("label", {
              htmlFor: "difficulty",
              children: [
                "Select Difficulty",
                y.jsxs("select", {
                  id: "difficulty",
                  onChange: this.onDifficultyChangeEventHandler,
                  value: t,
                  children: [
                    y.jsx("option", {
                      value: "",
                      disabled: !0,
                      children: "Select Difficulty",
                    }),
                    y.jsx("option", { value: "easy", children: "Easy" }),
                    y.jsx("option", { value: "medium", children: "Medium" }),
                    y.jsx("option", { value: "hard", children: "Hard" }),
                  ],
                }),
              ],
            }),
            y.jsx("button", { type: "submit", disabled: n, children: "Play" }),
          ],
        })
      : null;
  }
}
class dd extends mn.Component {
  constructor(r) {
    super(r);
    de(this, "setDefaultLoading", () => {
      this.setState({ loading: !0 });
    });
    de(this, "fetchQuizQuestions", async (r, t) => {
      this.setState({ error: !1, loading: !0 });
      try {
        await C2(r, t),
          this.setState({
            questions: na(),
            questionsLength: na().length,
            category: A2,
            currentQuestionIndex: 0,
            loading: !1,
            enterSession: !0,
          });
      } catch (n) {
        console.log("Failed to fetch quiz questions", n),
          this.setState({ error: !0 }),
          setTimeout(() => {
            this.fetchQuizQuestions(r, t);
          }, 2e3);
      }
    });
    de(this, "OnLoginHandler", (r) => {
      this.setState({ name: r, isLoggedIn: !0 });
    });
    de(this, "OnConfigSubmit", ({ categoryId: r, difficulty: t }) => {
      this.setState(
        { categoryId: r, difficulty: t, isCategoryAndDifficultySelected: !0 },
        () => {
          this.setDefaultLoading(), this.fetchQuizQuestions(r, t);
        }
      );
    });
    de(this, "onHandleAnswer", (r) => {
      this.setState(
        (t) => ({
          correct: r ? t.correct + 1 : t.correct,
          incorrect: r ? t.incorrect : t.incorrect + 1,
          currentQuestionIndex: t.currentQuestionIndex + 1,
        }),
        this.checkQuizEnd
      );
    });
    de(this, "checkQuizEnd", () => {
      const {
        currentQuestionIndex: r,
        questionsLength: t,
        time: n,
        correct: l,
        incorrect: o,
      } = this.state;
      (r >= t || n === 0) && this.setState({ unanswered: t - (l + o) });
    });
    de(this, "onTimeUp", () => {
      this.setState({ time: 0 }, this.checkQuizEnd);
    });
    de(this, "onRefreshHandler", () => {
      this.setState({
        questions: [],
        name: "",
        isLoggedIn: !1,
        category: "",
        questionsLength: 0,
        currentQuestionIndex: 0,
        isCategoryAndDifficultySelected: !1,
        enterSession: !1,
        loading: !1,
        error: !1,
        time: 120,
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        score: 0,
      });
    });
    this.state = {
      questions: [],
      name: "",
      isLoggedIn: !1,
      isCategoryAndDifficultySelected: !1,
      categoryId: 0,
      difficulty: "",
      questionsLength: 0,
      currentQuestionIndex: y2,
      loading: !1,
      error: !1,
      enterSession: !1,
      time: 120,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      score: 0,
    };
  }
  render() {
    const {
      isLoggedIn: r,
      loading: t,
      currentQuestionIndex: n,
      questionsLength: l,
      enterSession: o,
      time: i,
      correct: a,
      incorrect: c,
      unanswered: h,
      name: m,
      category: p,
      questions: A,
    } = this.state;
    return y.jsxs("div", {
      className: "quiz-app",
      children: [
        y.jsx(Jf, { isLoggedIn: r, onLogin: this.OnLoginHandler }),
        r &&
          !t &&
          !o &&
          y.jsx(fd, { isLoggedIn: r, onSubmitConfig: this.OnConfigSubmit }),
        t && y.jsx(cd, {}),
        !t &&
          r &&
          o &&
          l > 0 &&
          n < l &&
          i > 0 &&
          y.jsx(ad, {
            isLoggedIn: r,
            name: m,
            category: p,
            correct: a,
            incorrect: c,
            time: i,
            onTimeUp: this.onTimeUp,
            questions: A,
            questionsLength: l,
            currentQuestionIndex: n,
            onAnswerSelected: this.onHandleAnswer,
            score: a * 10,
            unanswered: h,
            onRefresh: this.onRefreshHandler,
          }),
        !t &&
          r &&
          l > 0 &&
          (n >= l || i === 0) &&
          y.jsx(id, {
            name: m,
            score: a * 10,
            correct: a,
            incorrect: c,
            unanswered: h,
            onRefresh: this.onRefreshHandler,
          }),
      ],
    });
  }
}
v2(document.getElementById("root")).render(y.jsx(dd, {}));
