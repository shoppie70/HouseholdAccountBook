import { c as A, g as F, j as a, r as L } from './app-Bstz2_0k.js';
var R = { exports: {} },
    H = R.exports,
    D;
function _() {
    return (
        D ||
            ((D = 1),
            (function (h, p) {
                (function (u, m) {
                    h.exports = m(u);
                })(
                    typeof A < 'u' ? A : window || H.window || H.global,
                    function (u) {
                        var m = {},
                            o = 'iziToast';
                        document.querySelector('body');
                        var b = !!/Mobi/.test(navigator.userAgent),
                            v =
                                /Chrome/.test(navigator.userAgent) &&
                                /Google Inc/.test(navigator.vendor),
                            w = typeof InstallTrigger < 'u',
                            N = 'ontouchstart' in document.documentElement,
                            C = [
                                'bottomRight',
                                'bottomLeft',
                                'bottomCenter',
                                'topRight',
                                'topLeft',
                                'topCenter',
                                'center',
                            ],
                            O = {
                                info: { color: 'blue', icon: 'ico-info' },
                                success: {
                                    color: 'green',
                                    icon: 'ico-success',
                                },
                                warning: {
                                    color: 'orange',
                                    icon: 'ico-warning',
                                },
                                error: { color: 'red', icon: 'ico-error' },
                                question: {
                                    color: 'yellow',
                                    icon: 'ico-question',
                                },
                            },
                            E = 568,
                            I = {};
                        m.children = {};
                        var S = {
                            id: null,
                            class: '',
                            title: '',
                            titleColor: '',
                            titleSize: '',
                            titleLineHeight: '',
                            message: '',
                            messageColor: '',
                            messageSize: '',
                            messageLineHeight: '',
                            backgroundColor: '',
                            theme: 'light',
                            color: '',
                            icon: '',
                            iconText: '',
                            iconColor: '',
                            iconUrl: null,
                            image: '',
                            imageWidth: 50,
                            maxWidth: null,
                            zindex: null,
                            layout: 1,
                            balloon: !1,
                            close: !0,
                            closeOnEscape: !1,
                            closeOnClick: !1,
                            displayMode: 0,
                            position: 'bottomRight',
                            target: '',
                            targetFirst: !0,
                            timeout: 5e3,
                            rtl: !1,
                            animateInside: !0,
                            drag: !0,
                            pauseOnHover: !0,
                            resetOnHover: !1,
                            progressBar: !0,
                            progressBarColor: '',
                            progressBarEasing: 'linear',
                            overlay: !1,
                            overlayClose: !1,
                            overlayColor: 'rgba(0, 0, 0, 0.6)',
                            transitionIn: 'fadeInUp',
                            transitionOut: 'fadeOut',
                            transitionInMobile: 'fadeInUp',
                            transitionOutMobile: 'fadeOutDown',
                            buttons: {},
                            inputs: {},
                            onOpening: function () {},
                            onOpened: function () {},
                            onClosing: function () {},
                            onClosed: function () {},
                        };
                        if (
                            ('remove' in Element.prototype ||
                                (Element.prototype.remove = function () {
                                    this.parentNode &&
                                        this.parentNode.removeChild(this);
                                }),
                            typeof window.CustomEvent != 'function')
                        ) {
                            var M = function (s, i) {
                                i = i || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: void 0,
                                };
                                var e = document.createEvent('CustomEvent');
                                return (
                                    e.initCustomEvent(
                                        s,
                                        i.bubbles,
                                        i.cancelable,
                                        i.detail,
                                    ),
                                    e
                                );
                            };
                            (M.prototype = window.Event.prototype),
                                (window.CustomEvent = M);
                        }
                        var g = function (s, i, e) {
                                if (
                                    Object.prototype.toString.call(s) ===
                                    '[object Object]'
                                )
                                    for (var t in s)
                                        Object.prototype.hasOwnProperty.call(
                                            s,
                                            t,
                                        ) && i.call(e, s[t], t, s);
                                else if (s)
                                    for (var r = 0, d = s.length; r < d; r++)
                                        i.call(e, s[r], r, s);
                            },
                            y = function (s, i) {
                                var e = {};
                                return (
                                    g(s, function (t, r) {
                                        e[r] = s[r];
                                    }),
                                    g(i, function (t, r) {
                                        e[r] = i[r];
                                    }),
                                    e
                                );
                            },
                            j = function (s) {
                                var i = document.createDocumentFragment(),
                                    e = document.createElement('div');
                                for (e.innerHTML = s; e.firstChild; )
                                    i.appendChild(e.firstChild);
                                return i;
                            },
                            T = function (s) {
                                var i = btoa(encodeURIComponent(s));
                                return i.replace(/=/g, '');
                            },
                            z = function (s) {
                                return (
                                    s.substring(0, 1) == '#' ||
                                    s.substring(0, 3) == 'rgb' ||
                                    s.substring(0, 3) == 'hsl'
                                );
                            },
                            B = function (s) {
                                try {
                                    return btoa(atob(s)) == s;
                                } catch {
                                    return !1;
                                }
                            },
                            x = (function () {
                                return {
                                    move: function (s, i, e, t) {
                                        var r,
                                            d = 0.3,
                                            n = 180;
                                        t !== 0 &&
                                            (s.classList.add(o + '-dragged'),
                                            (s.style.transform =
                                                'translateX(' + t + 'px)'),
                                            t > 0
                                                ? ((r = (n - t) / n),
                                                  r < d &&
                                                      i.hide(
                                                          y(e, {
                                                              transitionOut:
                                                                  'fadeOutRight',
                                                              transitionOutMobile:
                                                                  'fadeOutRight',
                                                          }),
                                                          s,
                                                          'drag',
                                                      ))
                                                : ((r = (n + t) / n),
                                                  r < d &&
                                                      i.hide(
                                                          y(e, {
                                                              transitionOut:
                                                                  'fadeOutLeft',
                                                              transitionOutMobile:
                                                                  'fadeOutLeft',
                                                          }),
                                                          s,
                                                          'drag',
                                                      )),
                                            (s.style.opacity = r),
                                            r < d &&
                                                ((v || w) &&
                                                    (s.style.left = t + 'px'),
                                                (s.parentNode.style.opacity =
                                                    d),
                                                this.stopMoving(s, null)));
                                    },
                                    startMoving: function (s, i, e, t) {
                                        t = t || window.event;
                                        var r = N
                                                ? t.touches[0].clientX
                                                : t.clientX,
                                            d = s.style.transform.replace(
                                                'px)',
                                                '',
                                            );
                                        d = d.replace('translateX(', '');
                                        var n = r - d;
                                        e.transitionIn &&
                                            s.classList.remove(e.transitionIn),
                                            e.transitionInMobile &&
                                                s.classList.remove(
                                                    e.transitionInMobile,
                                                ),
                                            (s.style.transition = ''),
                                            N
                                                ? (document.ontouchmove =
                                                      function (l) {
                                                          l.preventDefault(),
                                                              (l =
                                                                  l ||
                                                                  window.event);
                                                          var c =
                                                                  l.touches[0]
                                                                      .clientX,
                                                              f = c - n;
                                                          x.move(s, i, e, f);
                                                      })
                                                : (document.onmousemove =
                                                      function (l) {
                                                          l.preventDefault(),
                                                              (l =
                                                                  l ||
                                                                  window.event);
                                                          var c = l.clientX,
                                                              f = c - n;
                                                          x.move(s, i, e, f);
                                                      });
                                    },
                                    stopMoving: function (s, i) {
                                        N
                                            ? (document.ontouchmove =
                                                  function () {})
                                            : (document.onmousemove =
                                                  function () {}),
                                            (s.style.opacity = ''),
                                            (s.style.transform = ''),
                                            s.classList.contains(
                                                o + '-dragged',
                                            ) &&
                                                (s.classList.remove(
                                                    o + '-dragged',
                                                ),
                                                (s.style.transition =
                                                    'transform 0.4s ease, opacity 0.4s ease'),
                                                setTimeout(function () {
                                                    s.style.transition = '';
                                                }, 400));
                                    },
                                };
                            })();
                        return (
                            (m.setSetting = function (s, i, e) {
                                m.children[s][i] = e;
                            }),
                            (m.getSetting = function (s, i) {
                                return m.children[s][i];
                            }),
                            (m.destroy = function () {
                                g(
                                    document.querySelectorAll(
                                        '.' + o + '-overlay',
                                    ),
                                    function (s, i) {
                                        s.remove();
                                    },
                                ),
                                    g(
                                        document.querySelectorAll(
                                            '.' + o + '-wrapper',
                                        ),
                                        function (s, i) {
                                            s.remove();
                                        },
                                    ),
                                    g(
                                        document.querySelectorAll('.' + o),
                                        function (s, i) {
                                            s.remove();
                                        },
                                    ),
                                    (this.children = {}),
                                    document.removeEventListener(
                                        o + '-opened',
                                        {},
                                        !1,
                                    ),
                                    document.removeEventListener(
                                        o + '-opening',
                                        {},
                                        !1,
                                    ),
                                    document.removeEventListener(
                                        o + '-closing',
                                        {},
                                        !1,
                                    ),
                                    document.removeEventListener(
                                        o + '-closed',
                                        {},
                                        !1,
                                    ),
                                    document.removeEventListener(
                                        'keyup',
                                        {},
                                        !1,
                                    ),
                                    (I = {});
                            }),
                            (m.settings = function (s) {
                                m.destroy(), (I = s), (S = y(S, s || {}));
                            }),
                            g(O, function (s, i) {
                                m[i] = function (e) {
                                    var t = y(I, e || {});
                                    (t = y(s, t || {})), this.show(t);
                                };
                            }),
                            (m.progress = function (s, i, e) {
                                var t = this,
                                    r = i.getAttribute('data-iziToast-ref'),
                                    d = y(this.children[r], s || {}),
                                    n = i.querySelector(
                                        '.' + o + '-progressbar div',
                                    );
                                return {
                                    start: function () {
                                        typeof d.time.REMAINING > 'u' &&
                                            (i.classList.remove(o + '-reseted'),
                                            n !== null &&
                                                ((n.style.transition =
                                                    'width ' +
                                                    d.timeout +
                                                    'ms ' +
                                                    d.progressBarEasing),
                                                (n.style.width = '0%')),
                                            (d.time.START =
                                                new Date().getTime()),
                                            (d.time.END =
                                                d.time.START + d.timeout),
                                            (d.time.TIMER = setTimeout(
                                                function () {
                                                    clearTimeout(d.time.TIMER),
                                                        i.classList.contains(
                                                            o + '-closing',
                                                        ) ||
                                                            (t.hide(
                                                                d,
                                                                i,
                                                                'timeout',
                                                            ),
                                                            typeof e ==
                                                                'function' &&
                                                                e.apply(t));
                                                },
                                                d.timeout,
                                            )),
                                            t.setSetting(r, 'time', d.time));
                                    },
                                    pause: function () {
                                        if (
                                            typeof d.time.START < 'u' &&
                                            !i.classList.contains(
                                                o + '-paused',
                                            ) &&
                                            !i.classList.contains(
                                                o + '-reseted',
                                            )
                                        ) {
                                            if (
                                                (i.classList.add(o + '-paused'),
                                                (d.time.REMAINING =
                                                    d.time.END -
                                                    new Date().getTime()),
                                                clearTimeout(d.time.TIMER),
                                                t.setSetting(r, 'time', d.time),
                                                n !== null)
                                            ) {
                                                var l =
                                                        window.getComputedStyle(
                                                            n,
                                                        ),
                                                    c =
                                                        l.getPropertyValue(
                                                            'width',
                                                        );
                                                (n.style.transition = 'none'),
                                                    (n.style.width = c);
                                            }
                                            typeof e == 'function' &&
                                                setTimeout(function () {
                                                    e.apply(t);
                                                }, 10);
                                        }
                                    },
                                    resume: function () {
                                        typeof d.time.REMAINING < 'u'
                                            ? (i.classList.remove(
                                                  o + '-paused',
                                              ),
                                              n !== null &&
                                                  ((n.style.transition =
                                                      'width ' +
                                                      d.time.REMAINING +
                                                      'ms ' +
                                                      d.progressBarEasing),
                                                  (n.style.width = '0%')),
                                              (d.time.END =
                                                  new Date().getTime() +
                                                  d.time.REMAINING),
                                              (d.time.TIMER = setTimeout(
                                                  function () {
                                                      clearTimeout(
                                                          d.time.TIMER,
                                                      ),
                                                          i.classList.contains(
                                                              o + '-closing',
                                                          ) ||
                                                              (t.hide(
                                                                  d,
                                                                  i,
                                                                  'timeout',
                                                              ),
                                                              typeof e ==
                                                                  'function' &&
                                                                  e.apply(t));
                                                  },
                                                  d.time.REMAINING,
                                              )),
                                              t.setSetting(r, 'time', d.time))
                                            : this.start();
                                    },
                                    reset: function () {
                                        clearTimeout(d.time.TIMER),
                                            delete d.time.REMAINING,
                                            t.setSetting(r, 'time', d.time),
                                            i.classList.add(o + '-reseted'),
                                            i.classList.remove(o + '-paused'),
                                            n !== null &&
                                                ((n.style.transition = 'none'),
                                                (n.style.width = '100%')),
                                            typeof e == 'function' &&
                                                setTimeout(function () {
                                                    e.apply(t);
                                                }, 10);
                                    },
                                };
                            }),
                            (m.hide = function (s, i, e) {
                                typeof i != 'object' &&
                                    (i = document.querySelector(i));
                                var t = this,
                                    r = y(
                                        this.children[
                                            i.getAttribute('data-iziToast-ref')
                                        ],
                                        s || {},
                                    );
                                (r.closedBy = e || null),
                                    delete r.time.REMAINING,
                                    i.classList.add(o + '-closing'),
                                    (function () {
                                        var l = document.querySelector(
                                            '.' + o + '-overlay',
                                        );
                                        if (l !== null) {
                                            var c =
                                                l.getAttribute(
                                                    'data-iziToast-ref',
                                                );
                                            c = c.split(',');
                                            var f = c.indexOf(String(r.ref));
                                            f !== -1 && c.splice(f, 1),
                                                l.setAttribute(
                                                    'data-iziToast-ref',
                                                    c.join(),
                                                ),
                                                c.length === 0 &&
                                                    (l.classList.remove(
                                                        'fadeIn',
                                                    ),
                                                    l.classList.add('fadeOut'),
                                                    setTimeout(function () {
                                                        l.remove();
                                                    }, 700));
                                        }
                                    })(),
                                    r.transitionIn &&
                                        i.classList.remove(r.transitionIn),
                                    r.transitionInMobile &&
                                        i.classList.remove(
                                            r.transitionInMobile,
                                        ),
                                    b || window.innerWidth <= E
                                        ? r.transitionOutMobile &&
                                          i.classList.add(r.transitionOutMobile)
                                        : r.transitionOut &&
                                          i.classList.add(r.transitionOut);
                                var d = i.parentNode.offsetHeight;
                                (i.parentNode.style.height = d + 'px'),
                                    (i.style.pointerEvents = 'none'),
                                    (!b || window.innerWidth > E) &&
                                        (i.parentNode.style.transitionDelay =
                                            '0.2s');
                                try {
                                    var n = new CustomEvent(o + '-closing', {
                                        detail: r,
                                        bubbles: !0,
                                        cancelable: !0,
                                    });
                                    document.dispatchEvent(n);
                                } catch (l) {
                                    console.warn(l);
                                }
                                setTimeout(function () {
                                    (i.parentNode.style.height = '0px'),
                                        (i.parentNode.style.overflow = ''),
                                        setTimeout(function () {
                                            delete t.children[r.ref],
                                                i.parentNode.remove();
                                            try {
                                                var l = new CustomEvent(
                                                    o + '-closed',
                                                    {
                                                        detail: r,
                                                        bubbles: !0,
                                                        cancelable: !0,
                                                    },
                                                );
                                                document.dispatchEvent(l);
                                            } catch (c) {
                                                console.warn(c);
                                            }
                                            typeof r.onClosed < 'u' &&
                                                r.onClosed.apply(null, [
                                                    r,
                                                    i,
                                                    e,
                                                ]);
                                        }, 1e3);
                                }, 200),
                                    typeof r.onClosing < 'u' &&
                                        r.onClosing.apply(null, [r, i, e]);
                            }),
                            (m.show = function (s) {
                                var i = this,
                                    e = y(I, s || {});
                                if (
                                    ((e = y(S, e)),
                                    (e.time = {}),
                                    e.id === null &&
                                        (e.id = T(
                                            e.title + e.message + e.color,
                                        )),
                                    e.displayMode === 1 ||
                                        e.displayMode == 'once')
                                )
                                    try {
                                        if (
                                            document.querySelectorAll(
                                                '.' + o + '#' + e.id,
                                            ).length > 0
                                        )
                                            return !1;
                                    } catch {
                                        console.warn(
                                            '[' +
                                                o +
                                                '] Could not find an element with this selector: #' +
                                                e.id +
                                                '. Try to set an valid id.',
                                        );
                                    }
                                if (
                                    e.displayMode === 2 ||
                                    e.displayMode == 'replace'
                                )
                                    try {
                                        g(
                                            document.querySelectorAll(
                                                '.' + o + '#' + e.id,
                                            ),
                                            function (n, l) {
                                                i.hide(e, n, 'replaced');
                                            },
                                        );
                                    } catch {
                                        console.warn(
                                            '[' +
                                                o +
                                                '] Could not find an element with this selector: #' +
                                                e.id +
                                                '. Try to set an valid id.',
                                        );
                                    }
                                (e.ref =
                                    new Date().getTime() +
                                    Math.floor(Math.random() * 1e7 + 1)),
                                    (m.children[e.ref] = e);
                                var t = {
                                    body: document.querySelector('body'),
                                    overlay: document.createElement('div'),
                                    toast: document.createElement('div'),
                                    toastBody: document.createElement('div'),
                                    toastTexts: document.createElement('div'),
                                    toastCapsule: document.createElement('div'),
                                    cover: document.createElement('div'),
                                    buttons: document.createElement('div'),
                                    inputs: document.createElement('div'),
                                    icon: e.iconUrl
                                        ? document.createElement('img')
                                        : document.createElement('i'),
                                    wrapper: null,
                                };
                                t.toast.setAttribute(
                                    'data-iziToast-ref',
                                    e.ref,
                                ),
                                    t.toast.appendChild(t.toastBody),
                                    t.toastCapsule.appendChild(t.toast),
                                    (function () {
                                        if (
                                            (t.toast.classList.add(o),
                                            t.toast.classList.add(
                                                o + '-opening',
                                            ),
                                            t.toastCapsule.classList.add(
                                                o + '-capsule',
                                            ),
                                            t.toastBody.classList.add(
                                                o + '-body',
                                            ),
                                            t.toastTexts.classList.add(
                                                o + '-texts',
                                            ),
                                            b || window.innerWidth <= E
                                                ? e.transitionInMobile &&
                                                  t.toast.classList.add(
                                                      e.transitionInMobile,
                                                  )
                                                : e.transitionIn &&
                                                  t.toast.classList.add(
                                                      e.transitionIn,
                                                  ),
                                            e.class)
                                        ) {
                                            var n = e.class.split(' ');
                                            g(n, function (l, c) {
                                                t.toast.classList.add(l);
                                            });
                                        }
                                        e.id && (t.toast.id = e.id),
                                            e.rtl &&
                                                (t.toast.classList.add(
                                                    o + '-rtl',
                                                ),
                                                t.toast.setAttribute(
                                                    'dir',
                                                    'rtl',
                                                )),
                                            e.layout > 1 &&
                                                t.toast.classList.add(
                                                    o + '-layout' + e.layout,
                                                ),
                                            e.balloon &&
                                                t.toast.classList.add(
                                                    o + '-balloon',
                                                ),
                                            e.maxWidth &&
                                                (isNaN(e.maxWidth)
                                                    ? (t.toast.style.maxWidth =
                                                          e.maxWidth)
                                                    : (t.toast.style.maxWidth =
                                                          e.maxWidth + 'px')),
                                            (e.theme !== '' ||
                                                e.theme !== 'light') &&
                                                t.toast.classList.add(
                                                    o + '-theme-' + e.theme,
                                                ),
                                            e.color &&
                                                (z(e.color)
                                                    ? (t.toast.style.background =
                                                          e.color)
                                                    : t.toast.classList.add(
                                                          o +
                                                              '-color-' +
                                                              e.color,
                                                      )),
                                            e.backgroundColor &&
                                                ((t.toast.style.background =
                                                    e.backgroundColor),
                                                e.balloon &&
                                                    (t.toast.style.borderColor =
                                                        e.backgroundColor));
                                    })(),
                                    (function () {
                                        e.image &&
                                            (t.cover.classList.add(
                                                o + '-cover',
                                            ),
                                            (t.cover.style.width =
                                                e.imageWidth + 'px'),
                                            B(e.image.replace(/ /g, ''))
                                                ? (t.cover.style.backgroundImage =
                                                      'url(data:image/png;base64,' +
                                                      e.image.replace(
                                                          / /g,
                                                          '',
                                                      ) +
                                                      ')')
                                                : (t.cover.style.backgroundImage =
                                                      'url(' + e.image + ')'),
                                            e.rtl
                                                ? (t.toastBody.style.marginRight =
                                                      e.imageWidth + 10 + 'px')
                                                : (t.toastBody.style.marginLeft =
                                                      e.imageWidth + 10 + 'px'),
                                            t.toast.appendChild(t.cover));
                                    })(),
                                    (function () {
                                        e.close
                                            ? ((t.buttonClose =
                                                  document.createElement(
                                                      'button',
                                                  )),
                                              (t.buttonClose.type = 'button'),
                                              t.buttonClose.classList.add(
                                                  o + '-close',
                                              ),
                                              t.buttonClose.addEventListener(
                                                  'click',
                                                  function (n) {
                                                      n.target,
                                                          i.hide(
                                                              e,
                                                              t.toast,
                                                              'button',
                                                          );
                                                  },
                                              ),
                                              t.toast.appendChild(
                                                  t.buttonClose,
                                              ))
                                            : e.rtl
                                              ? (t.toast.style.paddingLeft =
                                                    '18px')
                                              : (t.toast.style.paddingRight =
                                                    '18px');
                                    })(),
                                    (function () {
                                        e.progressBar &&
                                            ((t.progressBar =
                                                document.createElement('div')),
                                            (t.progressBarDiv =
                                                document.createElement('div')),
                                            t.progressBar.classList.add(
                                                o + '-progressbar',
                                            ),
                                            (t.progressBarDiv.style.background =
                                                e.progressBarColor),
                                            t.progressBar.appendChild(
                                                t.progressBarDiv,
                                            ),
                                            t.toast.appendChild(t.progressBar)),
                                            e.timeout &&
                                                (e.pauseOnHover &&
                                                    !e.resetOnHover &&
                                                    (t.toast.addEventListener(
                                                        'mouseenter',
                                                        function (n) {
                                                            i.progress(
                                                                e,
                                                                t.toast,
                                                            ).pause();
                                                        },
                                                    ),
                                                    t.toast.addEventListener(
                                                        'mouseleave',
                                                        function (n) {
                                                            i.progress(
                                                                e,
                                                                t.toast,
                                                            ).resume();
                                                        },
                                                    )),
                                                e.resetOnHover &&
                                                    (t.toast.addEventListener(
                                                        'mouseenter',
                                                        function (n) {
                                                            i.progress(
                                                                e,
                                                                t.toast,
                                                            ).reset();
                                                        },
                                                    ),
                                                    t.toast.addEventListener(
                                                        'mouseleave',
                                                        function (n) {
                                                            i.progress(
                                                                e,
                                                                t.toast,
                                                            ).start();
                                                        },
                                                    )));
                                    })(),
                                    (function () {
                                        e.iconUrl
                                            ? (t.icon.setAttribute(
                                                  'class',
                                                  o + '-icon',
                                              ),
                                              t.icon.setAttribute(
                                                  'src',
                                                  e.iconUrl,
                                              ))
                                            : e.icon &&
                                              (t.icon.setAttribute(
                                                  'class',
                                                  o + '-icon ' + e.icon,
                                              ),
                                              e.iconText &&
                                                  t.icon.appendChild(
                                                      document.createTextNode(
                                                          e.iconText,
                                                      ),
                                                  ),
                                              e.iconColor &&
                                                  (t.icon.style.color =
                                                      e.iconColor)),
                                            (e.icon || e.iconUrl) &&
                                                (e.rtl
                                                    ? (t.toastBody.style.paddingRight =
                                                          '33px')
                                                    : (t.toastBody.style.paddingLeft =
                                                          '33px'),
                                                t.toastBody.appendChild(
                                                    t.icon,
                                                ));
                                    })(),
                                    (function () {
                                        e.title.length > 0 &&
                                            ((t.strong =
                                                document.createElement(
                                                    'strong',
                                                )),
                                            t.strong.classList.add(
                                                o + '-title',
                                            ),
                                            t.strong.appendChild(j(e.title)),
                                            t.toastTexts.appendChild(t.strong),
                                            e.titleColor &&
                                                (t.strong.style.color =
                                                    e.titleColor),
                                            e.titleSize &&
                                                (isNaN(e.titleSize)
                                                    ? (t.strong.style.fontSize =
                                                          e.titleSize)
                                                    : (t.strong.style.fontSize =
                                                          e.titleSize + 'px')),
                                            e.titleLineHeight &&
                                                (isNaN(e.titleSize)
                                                    ? (t.strong.style.lineHeight =
                                                          e.titleLineHeight)
                                                    : (t.strong.style.lineHeight =
                                                          e.titleLineHeight +
                                                          'px'))),
                                            e.message.length > 0 &&
                                                ((t.p =
                                                    document.createElement(
                                                        'p',
                                                    )),
                                                t.p.classList.add(
                                                    o + '-message',
                                                ),
                                                t.p.appendChild(j(e.message)),
                                                t.toastTexts.appendChild(t.p),
                                                e.messageColor &&
                                                    (t.p.style.color =
                                                        e.messageColor),
                                                e.messageSize &&
                                                    (isNaN(e.titleSize)
                                                        ? (t.p.style.fontSize =
                                                              e.messageSize)
                                                        : (t.p.style.fontSize =
                                                              e.messageSize +
                                                              'px')),
                                                e.messageLineHeight &&
                                                    (isNaN(e.titleSize)
                                                        ? (t.p.style.lineHeight =
                                                              e.messageLineHeight)
                                                        : (t.p.style.lineHeight =
                                                              e.messageLineHeight +
                                                              'px'))),
                                            e.title.length > 0 &&
                                                e.message.length > 0 &&
                                                (e.rtl
                                                    ? (t.strong.style.marginLeft =
                                                          '10px')
                                                    : e.layout !== 2 &&
                                                      !e.rtl &&
                                                      (t.strong.style.marginRight =
                                                          '10px'));
                                    })(),
                                    t.toastBody.appendChild(t.toastTexts);
                                var r;
                                (function () {
                                    e.inputs.length > 0 &&
                                        (t.inputs.classList.add(o + '-inputs'),
                                        g(e.inputs, function (n, l) {
                                            t.inputs.appendChild(j(n[0])),
                                                (r = t.inputs.childNodes),
                                                r[l].classList.add(
                                                    o + '-inputs-child',
                                                ),
                                                n[3] &&
                                                    setTimeout(function () {
                                                        r[l].focus();
                                                    }, 300),
                                                r[l].addEventListener(
                                                    n[1],
                                                    function (c) {
                                                        var f = n[2];
                                                        return f(
                                                            i,
                                                            t.toast,
                                                            this,
                                                            c,
                                                        );
                                                    },
                                                );
                                        }),
                                        t.toastBody.appendChild(t.inputs));
                                })(),
                                    (function () {
                                        e.buttons.length > 0 &&
                                            (t.buttons.classList.add(
                                                o + '-buttons',
                                            ),
                                            g(e.buttons, function (n, l) {
                                                t.buttons.appendChild(j(n[0]));
                                                var c = t.buttons.childNodes;
                                                c[l].classList.add(
                                                    o + '-buttons-child',
                                                ),
                                                    n[2] &&
                                                        setTimeout(function () {
                                                            c[l].focus();
                                                        }, 300),
                                                    c[l].addEventListener(
                                                        'click',
                                                        function (f) {
                                                            f.preventDefault();
                                                            var q = n[1];
                                                            return q(
                                                                i,
                                                                t.toast,
                                                                this,
                                                                f,
                                                                r,
                                                            );
                                                        },
                                                    );
                                            })),
                                            t.toastBody.appendChild(t.buttons);
                                    })(),
                                    e.message.length > 0 &&
                                        (e.inputs.length > 0 ||
                                            e.buttons.length > 0) &&
                                        (t.p.style.marginBottom = '0'),
                                    (e.inputs.length > 0 ||
                                        e.buttons.length > 0) &&
                                        (e.rtl
                                            ? (t.toastTexts.style.marginLeft =
                                                  '10px')
                                            : (t.toastTexts.style.marginRight =
                                                  '10px'),
                                        e.inputs.length > 0 &&
                                            e.buttons.length > 0 &&
                                            (e.rtl
                                                ? (t.inputs.style.marginLeft =
                                                      '8px')
                                                : (t.inputs.style.marginRight =
                                                      '8px'))),
                                    (function () {
                                        (t.toastCapsule.style.visibility =
                                            'hidden'),
                                            setTimeout(function () {
                                                var n = t.toast.offsetHeight,
                                                    l =
                                                        t.toast.currentStyle ||
                                                        window.getComputedStyle(
                                                            t.toast,
                                                        ),
                                                    c = l.marginTop;
                                                (c = c.split('px')),
                                                    (c = parseInt(c[0]));
                                                var f = l.marginBottom;
                                                (f = f.split('px')),
                                                    (f = parseInt(f[0])),
                                                    (t.toastCapsule.style.visibility =
                                                        ''),
                                                    (t.toastCapsule.style.height =
                                                        n + f + c + 'px'),
                                                    setTimeout(function () {
                                                        (t.toastCapsule.style.height =
                                                            'auto'),
                                                            e.target &&
                                                                (t.toastCapsule.style.overflow =
                                                                    'visible');
                                                    }, 500),
                                                    e.timeout &&
                                                        i
                                                            .progress(
                                                                e,
                                                                t.toast,
                                                            )
                                                            .start();
                                            }, 100);
                                    })(),
                                    (function () {
                                        var n = e.position;
                                        if (e.target)
                                            (t.wrapper = document.querySelector(
                                                e.target,
                                            )),
                                                t.wrapper.classList.add(
                                                    o + '-target',
                                                ),
                                                e.targetFirst
                                                    ? t.wrapper.insertBefore(
                                                          t.toastCapsule,
                                                          t.wrapper.firstChild,
                                                      )
                                                    : t.wrapper.appendChild(
                                                          t.toastCapsule,
                                                      );
                                        else {
                                            if (C.indexOf(e.position) == -1) {
                                                console.warn(
                                                    '[' +
                                                        o +
                                                        `] Incorrect position.
It can be › ` +
                                                        C,
                                                );
                                                return;
                                            }
                                            b || window.innerWidth <= E
                                                ? e.position == 'bottomLeft' ||
                                                  e.position == 'bottomRight' ||
                                                  e.position == 'bottomCenter'
                                                    ? (n =
                                                          o +
                                                          '-wrapper-bottomCenter')
                                                    : e.position == 'topLeft' ||
                                                        e.position ==
                                                            'topRight' ||
                                                        e.position ==
                                                            'topCenter'
                                                      ? (n =
                                                            o +
                                                            '-wrapper-topCenter')
                                                      : (n =
                                                            o +
                                                            '-wrapper-center')
                                                : (n = o + '-wrapper-' + n),
                                                (t.wrapper =
                                                    document.querySelector(
                                                        '.' +
                                                            o +
                                                            '-wrapper.' +
                                                            n,
                                                    )),
                                                t.wrapper ||
                                                    ((t.wrapper =
                                                        document.createElement(
                                                            'div',
                                                        )),
                                                    t.wrapper.classList.add(
                                                        o + '-wrapper',
                                                    ),
                                                    t.wrapper.classList.add(n),
                                                    document.body.appendChild(
                                                        t.wrapper,
                                                    )),
                                                e.position == 'topLeft' ||
                                                e.position == 'topCenter' ||
                                                e.position == 'topRight'
                                                    ? t.wrapper.insertBefore(
                                                          t.toastCapsule,
                                                          t.wrapper.firstChild,
                                                      )
                                                    : t.wrapper.appendChild(
                                                          t.toastCapsule,
                                                      );
                                        }
                                        isNaN(e.zindex)
                                            ? console.warn(
                                                  '[' + o + '] Invalid zIndex.',
                                              )
                                            : (t.wrapper.style.zIndex =
                                                  e.zindex);
                                    })(),
                                    (function () {
                                        e.overlay &&
                                            (document.querySelector(
                                                '.' + o + '-overlay.fadeIn',
                                            ) !== null
                                                ? ((t.overlay =
                                                      document.querySelector(
                                                          '.' + o + '-overlay',
                                                      )),
                                                  t.overlay.setAttribute(
                                                      'data-iziToast-ref',
                                                      t.overlay.getAttribute(
                                                          'data-iziToast-ref',
                                                      ) +
                                                          ',' +
                                                          e.ref,
                                                  ),
                                                  !isNaN(e.zindex) &&
                                                      e.zindex !== null &&
                                                      (t.overlay.style.zIndex =
                                                          e.zindex - 1))
                                                : (t.overlay.classList.add(
                                                      o + '-overlay',
                                                  ),
                                                  t.overlay.classList.add(
                                                      'fadeIn',
                                                  ),
                                                  (t.overlay.style.background =
                                                      e.overlayColor),
                                                  t.overlay.setAttribute(
                                                      'data-iziToast-ref',
                                                      e.ref,
                                                  ),
                                                  !isNaN(e.zindex) &&
                                                      e.zindex !== null &&
                                                      (t.overlay.style.zIndex =
                                                          e.zindex - 1),
                                                  document
                                                      .querySelector('body')
                                                      .appendChild(t.overlay)),
                                            e.overlayClose
                                                ? (t.overlay.removeEventListener(
                                                      'click',
                                                      {},
                                                  ),
                                                  t.overlay.addEventListener(
                                                      'click',
                                                      function (n) {
                                                          i.hide(
                                                              e,
                                                              t.toast,
                                                              'overlay',
                                                          );
                                                      },
                                                  ))
                                                : t.overlay.removeEventListener(
                                                      'click',
                                                      {},
                                                  ));
                                    })(),
                                    (function () {
                                        if (e.animateInside) {
                                            t.toast.classList.add(
                                                o + '-animateInside',
                                            );
                                            var n = [200, 100, 300];
                                            (e.transitionIn == 'bounceInLeft' ||
                                                e.transitionIn ==
                                                    'bounceInRight') &&
                                                (n = [400, 200, 400]),
                                                e.title.length > 0 &&
                                                    setTimeout(function () {
                                                        t.strong.classList.add(
                                                            'slideIn',
                                                        );
                                                    }, n[0]),
                                                e.message.length > 0 &&
                                                    setTimeout(function () {
                                                        t.p.classList.add(
                                                            'slideIn',
                                                        );
                                                    }, n[1]),
                                                (e.icon || e.iconUrl) &&
                                                    setTimeout(function () {
                                                        t.icon.classList.add(
                                                            'revealIn',
                                                        );
                                                    }, n[2]);
                                            var l = 150;
                                            e.buttons.length > 0 &&
                                                t.buttons &&
                                                setTimeout(
                                                    function () {
                                                        g(
                                                            t.buttons
                                                                .childNodes,
                                                            function (c, f) {
                                                                setTimeout(
                                                                    function () {
                                                                        c.classList.add(
                                                                            'revealIn',
                                                                        );
                                                                    },
                                                                    l,
                                                                ),
                                                                    (l =
                                                                        l +
                                                                        150);
                                                            },
                                                        );
                                                    },
                                                    e.inputs.length > 0
                                                        ? 150
                                                        : 0,
                                                ),
                                                e.inputs.length > 0 &&
                                                    t.inputs &&
                                                    ((l = 150),
                                                    g(
                                                        t.inputs.childNodes,
                                                        function (c, f) {
                                                            setTimeout(
                                                                function () {
                                                                    c.classList.add(
                                                                        'revealIn',
                                                                    );
                                                                },
                                                                l,
                                                            ),
                                                                (l = l + 150);
                                                        },
                                                    ));
                                        }
                                    })(),
                                    e.onOpening.apply(null, [e, t.toast]);
                                try {
                                    var d = new CustomEvent(o + '-opening', {
                                        detail: e,
                                        bubbles: !0,
                                        cancelable: !0,
                                    });
                                    document.dispatchEvent(d);
                                } catch (n) {
                                    console.warn(n);
                                }
                                setTimeout(function () {
                                    t.toast.classList.remove(o + '-opening'),
                                        t.toast.classList.add(o + '-opened');
                                    try {
                                        var n = new CustomEvent(o + '-opened', {
                                            detail: e,
                                            bubbles: !0,
                                            cancelable: !0,
                                        });
                                        document.dispatchEvent(n);
                                    } catch (l) {
                                        console.warn(l);
                                    }
                                    e.onOpened.apply(null, [e, t.toast]);
                                }, 1e3),
                                    e.drag &&
                                        (N
                                            ? (t.toast.addEventListener(
                                                  'touchstart',
                                                  function (n) {
                                                      x.startMoving(
                                                          this,
                                                          i,
                                                          e,
                                                          n,
                                                      );
                                                  },
                                                  !1,
                                              ),
                                              t.toast.addEventListener(
                                                  'touchend',
                                                  function (n) {
                                                      x.stopMoving(this, n);
                                                  },
                                                  !1,
                                              ))
                                            : (t.toast.addEventListener(
                                                  'mousedown',
                                                  function (n) {
                                                      n.preventDefault(),
                                                          x.startMoving(
                                                              this,
                                                              i,
                                                              e,
                                                              n,
                                                          );
                                                  },
                                                  !1,
                                              ),
                                              t.toast.addEventListener(
                                                  'mouseup',
                                                  function (n) {
                                                      n.preventDefault(),
                                                          x.stopMoving(this, n);
                                                  },
                                                  !1,
                                              ))),
                                    e.closeOnEscape &&
                                        document.addEventListener(
                                            'keyup',
                                            function (n) {
                                                (n = n || window.event),
                                                    n.keyCode == 27 &&
                                                        i.hide(
                                                            e,
                                                            t.toast,
                                                            'esc',
                                                        );
                                            },
                                        ),
                                    e.closeOnClick &&
                                        t.toast.addEventListener(
                                            'click',
                                            function (n) {
                                                i.hide(e, t.toast, 'toast');
                                            },
                                        ),
                                    (i.toast = t.toast);
                            }),
                            m
                        );
                    },
                );
            })(R)),
        R.exports
    );
}
var W = _();
const k = F(W),
    X = ({
        handleSubmit: h,
        handleChange: p,
        formData: u,
        dynamicCategories: m,
        paymentTypes: o,
        handlePaymentTypeChange: b,
    }) =>
        a.jsx('div', {
            className:
                'bg-white p-8 xl:max-w-md w-full h-screen flex items-center',
            children: a.jsxs('div', {
                className: 'w-full',
                children: [
                    a.jsx('h2', {
                        className:
                            'text-2xl font-bold text-center text-gray-700 mb-6',
                        children: '家計簿の入力',
                    }),
                    a.jsxs('form', {
                        id: 'dataForm',
                        className: 'space-y-4',
                        onSubmit: h,
                        children: [
                            a.jsxs('div', {
                                children: [
                                    a.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'date',
                                        children: '日付',
                                    }),
                                    a.jsx('input', {
                                        type: 'date',
                                        name: 'date',
                                        id: 'date',
                                        value: u.date,
                                        onChange: p,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                children: [
                                    a.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'item',
                                        children: '項目',
                                    }),
                                    a.jsx('select', {
                                        name: 'payment_type_id',
                                        id: 'item',
                                        onChange: b,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                        children: Object.values(o).map((v, w) =>
                                            a.jsx(
                                                'option',
                                                {
                                                    value: v.id,
                                                    children: v.name,
                                                },
                                                w,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                children: [
                                    a.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'category',
                                        children: 'カテゴリ',
                                    }),
                                    a.jsx('select', {
                                        name: 'category_id',
                                        id: 'category',
                                        onChange: p,
                                        value: u.category_id,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                        children: Object.entries(m).map(
                                            ([v, w]) =>
                                                a.jsx(
                                                    'option',
                                                    { value: v, children: w },
                                                    `dynamic${v}`,
                                                ),
                                        ),
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                children: [
                                    a.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'amount',
                                        children: '金額',
                                    }),
                                    a.jsx('input', {
                                        type: 'number',
                                        name: 'amount',
                                        id: 'amount',
                                        value: u.amount,
                                        onChange: p,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                children: [
                                    a.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'memo',
                                        children: 'メモ',
                                    }),
                                    a.jsx('textarea', {
                                        name: 'memo',
                                        id: 'memo',
                                        value: u.memo,
                                        onChange: p,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                    }),
                                ],
                            }),
                            a.jsx('div', {
                                children: a.jsx('button', {
                                    type: 'submit',
                                    className:
                                        'w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                                    children: '送信',
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    G = ({ householdByExpenditure: h, creditCardExpenditureItem: p }) =>
        a.jsxs('div', {
            className: 'bg-white p-6 rounded-lg shadow-md',
            children: [
                a.jsx('h2', {
                    className:
                        'text-xl font-bold text-gray-700 mb-6 border-b pb-2',
                    children: '支出内訳',
                }),
                a.jsx('div', {
                    className: 'divide-y divide-gray-200',
                    children: Object.values(h).map((u) =>
                        a.jsxs(
                            'div',
                            {
                                className:
                                    'flex justify-between items-center py-2',
                                children: [
                                    a.jsx('span', {
                                        className: 'text-gray-600 font-medium',
                                        children: u.label,
                                    }),
                                    a.jsxs('span', {
                                        className:
                                            'text-gray-800 font-semibold',
                                        children: ['¥', u.value],
                                    }),
                                ],
                            },
                            `category_${u.label}`,
                        ),
                    ),
                }),
                a.jsxs('div', {
                    className: 'mt-6 flex items-center justify-between',
                    children: [
                        a.jsx('span', {
                            className: 'text-gray-600 text-sm',
                            children: 'うちクレジットカード決済',
                        }),
                        a.jsxs('span', {
                            className: 'text-gray-800 font-semibold',
                            children: ['¥', p],
                        }),
                    ],
                }),
            ],
        }),
    U = ({ householdByIncome: h }) =>
        a.jsxs('div', {
            className: 'bg-white p-6 rounded-lg shadow-md',
            children: [
                a.jsx('h2', {
                    className:
                        'text-xl font-bold text-gray-700 mb-6 border-b pb-2',
                    children: '収入',
                }),
                a.jsx('div', {
                    className: 'divide-y divide-gray-200',
                    children: Object.values(h).map((p) =>
                        a.jsxs(
                            'div',
                            {
                                className:
                                    'flex justify-between items-center py-2',
                                children: [
                                    a.jsx('span', {
                                        className: 'text-gray-600 font-medium',
                                        children: p.label,
                                    }),
                                    a.jsxs('span', {
                                        className:
                                            'text-gray-800 font-semibold',
                                        children: ['¥', p.value],
                                    }),
                                ],
                            },
                            `category_${p.label}`,
                        ),
                    ),
                }),
            ],
        }),
    P = ({ householdItems: h }) =>
        a.jsx('div', {
            className:
                'overflow-x-auto bg-white h-full rounded-lg shadow-md p-6',
            children: a.jsxs('div', {
                className: 'min-w-[600px] divide-y divide-gray-200',
                children: [
                    a.jsxs('div', {
                        className:
                            'flex py-2 font-medium text-gray-500 border-b',
                        children: [
                            a.jsx('span', {
                                className: 'w-[5rem]',
                                children: '日付',
                            }),
                            a.jsx('span', {
                                className: 'w-[10rem]',
                                children: 'カテゴリ',
                            }),
                            a.jsx('span', {
                                className: 'w-[10rem]',
                                children: '支払い方法',
                            }),
                            a.jsx('span', {
                                className: 'w-[10rem]',
                                children: '金額',
                            }),
                            a.jsx('span', {
                                className: 'flex-1',
                                children: 'メモ',
                            }),
                        ],
                    }),
                    a.jsx('ul', {
                        children: Object.entries(h).map(([p, u]) =>
                            a.jsxs(
                                'li',
                                {
                                    className: `flex p-2 border-b items-center
                  ${u.category.is_income ? 'bg-green-100' : ''}
                  ${u.payment_type.is_credit_card ? 'bg-sky-100' : ''}`,
                                    children: [
                                        a.jsx('span', {
                                            className: 'w-[5rem] text-gray-800',
                                            children: new Date(
                                                u.date,
                                            ).toLocaleDateString('ja-JP', {
                                                month: 'numeric',
                                                day: 'numeric',
                                            }),
                                        }),
                                        a.jsx('span', {
                                            className:
                                                'w-[10rem] text-gray-800',
                                            children: u.category.name,
                                        }),
                                        a.jsx('span', {
                                            className:
                                                'w-[10rem] text-gray-800',
                                            children: u.payment_type.name,
                                        }),
                                        a.jsxs('span', {
                                            className:
                                                'w-[10rem] text-gray-800 font-semibold',
                                            children: [
                                                '¥',
                                                u.amount.toLocaleString(),
                                            ],
                                        }),
                                        a.jsx('span', {
                                            className: 'flex-1 text-gray-800',
                                            children: u.memo,
                                        }),
                                    ],
                                },
                                p,
                            ),
                        ),
                    }),
                ],
            }),
        }),
    K = ({
        expenditureCategories: h = [],
        inComeCategories: p = [],
        paymentTypes: u = [],
        households: m = [],
        householdByExpenditure: o = [],
        householdByIncome: b = [],
        creditCardExpenditure: v = 0,
    }) => {
        const [w, N] = L.useState(m),
            [C, O] = L.useState(h),
            [E, I] = L.useState(o),
            [S, M] = L.useState(b),
            [g, y] = L.useState(v),
            j = (s) => {
                const i = s.target.value,
                    e = u.find((t) => t.id === Number(i));
                e != null && e.is_income ? O(p) : O(h), B(s);
            };
        L.useEffect(() => {
            z({ ...T, category_id: Object.keys(C)[0] });
        }, [C]);
        const [T, z] = L.useState({
                date: new Date().toISOString().split('T')[0],
                category_id: Object.keys(C)[0],
                payment_type_id: u.length > 0 ? u[0].id : '',
                amount: 1e3,
                memo: '',
            }),
            B = (s) => {
                const { name: i, value: e } = s.target;
                z({ ...T, [i]: e });
            },
            x = async (s) => {
                s.preventDefault();
                try {
                    const i = document
                            .querySelector('meta[name="csrf-token"]')
                            .getAttribute('content'),
                        e = await fetch('/post', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': i,
                            },
                            body: JSON.stringify(T),
                        }),
                        t = await e.json();
                    if (!e.ok) throw new Error(t.message);
                    N(t.households),
                        I(t.householdByExpenditure),
                        M(t.householdByIncome),
                        y(t.creditCardExpenditure),
                        k.success({
                            title: 'Success',
                            message: t.message,
                            position: 'topRight',
                        });
                } catch (i) {
                    k.error({
                        title: 'エラー',
                        message: i.message,
                        position: 'topRight',
                    });
                }
            };
        return a.jsxs('div', {
            className:
                'bg-orange-100 min-h-screen flex flex-wrap xl:flex-nowrap w-full',
            children: [
                a.jsx(X, {
                    handleChange: B,
                    handleSubmit: x,
                    formData: T,
                    categories: h,
                    dynamicCategories: C,
                    paymentTypes: u,
                    handlePaymentTypeChange: j,
                }),
                a.jsx('div', {
                    className: 'flex-1 w-full',
                    children: a.jsxs('div', {
                        className: 'flex flex-wrap xl:flex-nowrap h-full gap-2',
                        children: [
                            a.jsx('div', {
                                className:
                                    'pr-4 xl:pr-0 py-4 pl-4 w-full xl:w-3/12',
                                children: a.jsxs('div', {
                                    className: 'grid grid-cols-1 gap-4',
                                    children: [
                                        a.jsx(G, {
                                            householdByExpenditure: E,
                                            creditCardExpenditureItem: g,
                                        }),
                                        a.jsx(U, { householdByIncome: S }),
                                    ],
                                }),
                            }),
                            a.jsx('div', {
                                className:
                                    'pl-4 pt-0 pb-4 xl:py-4 xl:pl-2 pr-4 w-full xl:w-9/12',
                                children: a.jsx(P, { householdItems: w }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    };
export { K as default };
