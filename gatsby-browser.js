import "url-polyfill";

// :focus-within polyfil
function focusWithin(e, t) {
  var n = Object(t).className,
    r = Object(t).attr || "focus-within",
    a = Object(t).force,
    c = [];
  try {
    if ((e.querySelector(":focus-within"), !a)) return i;
  } catch (e) {
    /* */
  }
  function s() {
    for (var t; (t = c.pop()); )
      r && t.removeAttribute(r), n && t.classList.remove(n);
    var a = e.activeElement;
    if (!/^(#document|HTML|BODY)$/.test(Object(a).nodeName))
      for (; a && 1 === a.nodeType; )
        r && a.setAttribute(r, ""),
          n && a.classList.add(n),
          c.push(a),
          (a = a.parentNode);
  }
  function i() {
    e.addEventListener("focus", s, !0), e.addEventListener("blur", s, !0);
  }
  return (
    (function t() {
      /m/.test(e.readyState)
        ? (e.removeEventListener("readystatechange", t), i())
        : e.addEventListener("readystatechange", t);
    })(),
    i
  );
}

focusWithin(document);
