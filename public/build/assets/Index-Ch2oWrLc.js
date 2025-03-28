import { c as W, g as J, j as i, r as x, L as K } from './app-eWBFjQPB.js';
var k = { exports: {} },
    X = k.exports,
    G;
function V() {
    return (
        G ||
            ((G = 1),
            (function (C, p) {
                (function (m, u) {
                    C.exports = u(m);
                })(
                    typeof W < 'u' ? W : window || X.window || X.global,
                    function (m) {
                        var u = {},
                            o = 'iziToast';
                        document.querySelector('body');
                        var g = !!/Mobi/.test(navigator.userAgent),
                            b =
                                /Chrome/.test(navigator.userAgent) &&
                                /Google Inc/.test(navigator.vendor),
                            j = typeof InstallTrigger < 'u',
                            T = 'ontouchstart' in document.documentElement,
                            y = [
                                'bottomRight',
                                'bottomLeft',
                                'bottomCenter',
                                'topRight',
                                'topLeft',
                                'topCenter',
                                'center',
                            ],
                            h = {
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
                            w = 568,
                            O = {};
                        u.children = {};
                        var B = {
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
                            var R = function (a, n) {
                                n = n || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: void 0,
                                };
                                var e = document.createEvent('CustomEvent');
                                return (
                                    e.initCustomEvent(
                                        a,
                                        n.bubbles,
                                        n.cancelable,
                                        n.detail,
                                    ),
                                    e
                                );
                            };
                            (R.prototype = window.Event.prototype),
                                (window.CustomEvent = R);
                        }
                        var v = function (a, n, e) {
                                if (
                                    Object.prototype.toString.call(a) ===
                                    '[object Object]'
                                )
                                    for (var t in a)
                                        Object.prototype.hasOwnProperty.call(
                                            a,
                                            t,
                                        ) && n.call(e, a[t], t, a);
                                else if (a)
                                    for (var r = 0, d = a.length; r < d; r++)
                                        n.call(e, a[r], r, a);
                            },
                            N = function (a, n) {
                                var e = {};
                                return (
                                    v(a, function (t, r) {
                                        e[r] = a[r];
                                    }),
                                    v(n, function (t, r) {
                                        e[r] = n[r];
                                    }),
                                    e
                                );
                            },
                            z = function (a) {
                                var n = document.createDocumentFragment(),
                                    e = document.createElement('div');
                                for (e.innerHTML = a; e.firstChild; )
                                    n.appendChild(e.firstChild);
                                return n;
                            },
                            D = function (a) {
                                var n = btoa(encodeURIComponent(a));
                                return n.replace(/=/g, '');
                            },
                            A = function (a) {
                                return (
                                    a.substring(0, 1) == '#' ||
                                    a.substring(0, 3) == 'rgb' ||
                                    a.substring(0, 3) == 'hsl'
                                );
                            },
                            F = function (a) {
                                try {
                                    return btoa(atob(a)) == a;
                                } catch {
                                    return !1;
                                }
                            },
                            S = (function () {
                                return {
                                    move: function (a, n, e, t) {
                                        var r,
                                            d = 0.3,
                                            s = 180;
                                        t !== 0 &&
                                            (a.classList.add(o + '-dragged'),
                                            (a.style.transform =
                                                'translateX(' + t + 'px)'),
                                            t > 0
                                                ? ((r = (s - t) / s),
                                                  r < d &&
                                                      n.hide(
                                                          N(e, {
                                                              transitionOut:
                                                                  'fadeOutRight',
                                                              transitionOutMobile:
                                                                  'fadeOutRight',
                                                          }),
                                                          a,
                                                          'drag',
                                                      ))
                                                : ((r = (s + t) / s),
                                                  r < d &&
                                                      n.hide(
                                                          N(e, {
                                                              transitionOut:
                                                                  'fadeOutLeft',
                                                              transitionOutMobile:
                                                                  'fadeOutLeft',
                                                          }),
                                                          a,
                                                          'drag',
                                                      )),
                                            (a.style.opacity = r),
                                            r < d &&
                                                ((b || j) &&
                                                    (a.style.left = t + 'px'),
                                                (a.parentNode.style.opacity =
                                                    d),
                                                this.stopMoving(a, null)));
                                    },
                                    startMoving: function (a, n, e, t) {
                                        t = t || window.event;
                                        var r = T
                                                ? t.touches[0].clientX
                                                : t.clientX,
                                            d = a.style.transform.replace(
                                                'px)',
                                                '',
                                            );
                                        d = d.replace('translateX(', '');
                                        var s = r - d;
                                        e.transitionIn &&
                                            a.classList.remove(e.transitionIn),
                                            e.transitionInMobile &&
                                                a.classList.remove(
                                                    e.transitionInMobile,
                                                ),
                                            (a.style.transition = ''),
                                            T
                                                ? (document.ontouchmove =
                                                      function (l) {
                                                          l.preventDefault(),
                                                              (l =
                                                                  l ||
                                                                  window.event);
                                                          var c =
                                                                  l.touches[0]
                                                                      .clientX,
                                                              f = c - s;
                                                          S.move(a, n, e, f);
                                                      })
                                                : (document.onmousemove =
                                                      function (l) {
                                                          l.preventDefault(),
                                                              (l =
                                                                  l ||
                                                                  window.event);
                                                          var c = l.clientX,
                                                              f = c - s;
                                                          S.move(a, n, e, f);
                                                      });
                                    },
                                    stopMoving: function (a, n) {
                                        T
                                            ? (document.ontouchmove =
                                                  function () {})
                                            : (document.onmousemove =
                                                  function () {}),
                                            (a.style.opacity = ''),
                                            (a.style.transform = ''),
                                            a.classList.contains(
                                                o + '-dragged',
                                            ) &&
                                                (a.classList.remove(
                                                    o + '-dragged',
                                                ),
                                                (a.style.transition =
                                                    'transform 0.4s ease, opacity 0.4s ease'),
                                                setTimeout(function () {
                                                    a.style.transition = '';
                                                }, 400));
                                    },
                                };
                            })();
                        return (
                            (u.setSetting = function (a, n, e) {
                                u.children[a][n] = e;
                            }),
                            (u.getSetting = function (a, n) {
                                return u.children[a][n];
                            }),
                            (u.destroy = function () {
                                v(
                                    document.querySelectorAll(
                                        '.' + o + '-overlay',
                                    ),
                                    function (a, n) {
                                        a.remove();
                                    },
                                ),
                                    v(
                                        document.querySelectorAll(
                                            '.' + o + '-wrapper',
                                        ),
                                        function (a, n) {
                                            a.remove();
                                        },
                                    ),
                                    v(
                                        document.querySelectorAll('.' + o),
                                        function (a, n) {
                                            a.remove();
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
                                    (O = {});
                            }),
                            (u.settings = function (a) {
                                u.destroy(), (O = a), (B = N(B, a || {}));
                            }),
                            v(h, function (a, n) {
                                u[n] = function (e) {
                                    var t = N(O, e || {});
                                    (t = N(a, t || {})), this.show(t);
                                };
                            }),
                            (u.progress = function (a, n, e) {
                                var t = this,
                                    r = n.getAttribute('data-iziToast-ref'),
                                    d = N(this.children[r], a || {}),
                                    s = n.querySelector(
                                        '.' + o + '-progressbar div',
                                    );
                                return {
                                    start: function () {
                                        typeof d.time.REMAINING > 'u' &&
                                            (n.classList.remove(o + '-reseted'),
                                            s !== null &&
                                                ((s.style.transition =
                                                    'width ' +
                                                    d.timeout +
                                                    'ms ' +
                                                    d.progressBarEasing),
                                                (s.style.width = '0%')),
                                            (d.time.START =
                                                new Date().getTime()),
                                            (d.time.END =
                                                d.time.START + d.timeout),
                                            (d.time.TIMER = setTimeout(
                                                function () {
                                                    clearTimeout(d.time.TIMER),
                                                        n.classList.contains(
                                                            o + '-closing',
                                                        ) ||
                                                            (t.hide(
                                                                d,
                                                                n,
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
                                            !n.classList.contains(
                                                o + '-paused',
                                            ) &&
                                            !n.classList.contains(
                                                o + '-reseted',
                                            )
                                        ) {
                                            if (
                                                (n.classList.add(o + '-paused'),
                                                (d.time.REMAINING =
                                                    d.time.END -
                                                    new Date().getTime()),
                                                clearTimeout(d.time.TIMER),
                                                t.setSetting(r, 'time', d.time),
                                                s !== null)
                                            ) {
                                                var l =
                                                        window.getComputedStyle(
                                                            s,
                                                        ),
                                                    c =
                                                        l.getPropertyValue(
                                                            'width',
                                                        );
                                                (s.style.transition = 'none'),
                                                    (s.style.width = c);
                                            }
                                            typeof e == 'function' &&
                                                setTimeout(function () {
                                                    e.apply(t);
                                                }, 10);
                                        }
                                    },
                                    resume: function () {
                                        typeof d.time.REMAINING < 'u'
                                            ? (n.classList.remove(
                                                  o + '-paused',
                                              ),
                                              s !== null &&
                                                  ((s.style.transition =
                                                      'width ' +
                                                      d.time.REMAINING +
                                                      'ms ' +
                                                      d.progressBarEasing),
                                                  (s.style.width = '0%')),
                                              (d.time.END =
                                                  new Date().getTime() +
                                                  d.time.REMAINING),
                                              (d.time.TIMER = setTimeout(
                                                  function () {
                                                      clearTimeout(
                                                          d.time.TIMER,
                                                      ),
                                                          n.classList.contains(
                                                              o + '-closing',
                                                          ) ||
                                                              (t.hide(
                                                                  d,
                                                                  n,
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
                                            n.classList.add(o + '-reseted'),
                                            n.classList.remove(o + '-paused'),
                                            s !== null &&
                                                ((s.style.transition = 'none'),
                                                (s.style.width = '100%')),
                                            typeof e == 'function' &&
                                                setTimeout(function () {
                                                    e.apply(t);
                                                }, 10);
                                    },
                                };
                            }),
                            (u.hide = function (a, n, e) {
                                typeof n != 'object' &&
                                    (n = document.querySelector(n));
                                var t = this,
                                    r = N(
                                        this.children[
                                            n.getAttribute('data-iziToast-ref')
                                        ],
                                        a || {},
                                    );
                                (r.closedBy = e || null),
                                    delete r.time.REMAINING,
                                    n.classList.add(o + '-closing'),
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
                                        n.classList.remove(r.transitionIn),
                                    r.transitionInMobile &&
                                        n.classList.remove(
                                            r.transitionInMobile,
                                        ),
                                    g || window.innerWidth <= w
                                        ? r.transitionOutMobile &&
                                          n.classList.add(r.transitionOutMobile)
                                        : r.transitionOut &&
                                          n.classList.add(r.transitionOut);
                                var d = n.parentNode.offsetHeight;
                                (n.parentNode.style.height = d + 'px'),
                                    (n.style.pointerEvents = 'none'),
                                    (!g || window.innerWidth > w) &&
                                        (n.parentNode.style.transitionDelay =
                                            '0.2s');
                                try {
                                    var s = new CustomEvent(o + '-closing', {
                                        detail: r,
                                        bubbles: !0,
                                        cancelable: !0,
                                    });
                                    document.dispatchEvent(s);
                                } catch (l) {
                                    console.warn(l);
                                }
                                setTimeout(function () {
                                    (n.parentNode.style.height = '0px'),
                                        (n.parentNode.style.overflow = ''),
                                        setTimeout(function () {
                                            delete t.children[r.ref],
                                                n.parentNode.remove();
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
                                                    n,
                                                    e,
                                                ]);
                                        }, 1e3);
                                }, 200),
                                    typeof r.onClosing < 'u' &&
                                        r.onClosing.apply(null, [r, n, e]);
                            }),
                            (u.show = function (a) {
                                var n = this,
                                    e = N(O, a || {});
                                if (
                                    ((e = N(B, e)),
                                    (e.time = {}),
                                    e.id === null &&
                                        (e.id = D(
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
                                        v(
                                            document.querySelectorAll(
                                                '.' + o + '#' + e.id,
                                            ),
                                            function (s, l) {
                                                n.hide(e, s, 'replaced');
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
                                    (u.children[e.ref] = e);
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
                                            g || window.innerWidth <= w
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
                                            var s = e.class.split(' ');
                                            v(s, function (l, c) {
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
                                                (A(e.color)
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
                                            F(e.image.replace(/ /g, ''))
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
                                                  function (s) {
                                                      s.target,
                                                          n.hide(
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
                                                        function (s) {
                                                            n.progress(
                                                                e,
                                                                t.toast,
                                                            ).pause();
                                                        },
                                                    ),
                                                    t.toast.addEventListener(
                                                        'mouseleave',
                                                        function (s) {
                                                            n.progress(
                                                                e,
                                                                t.toast,
                                                            ).resume();
                                                        },
                                                    )),
                                                e.resetOnHover &&
                                                    (t.toast.addEventListener(
                                                        'mouseenter',
                                                        function (s) {
                                                            n.progress(
                                                                e,
                                                                t.toast,
                                                            ).reset();
                                                        },
                                                    ),
                                                    t.toast.addEventListener(
                                                        'mouseleave',
                                                        function (s) {
                                                            n.progress(
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
                                            t.strong.appendChild(z(e.title)),
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
                                                t.p.appendChild(z(e.message)),
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
                                        v(e.inputs, function (s, l) {
                                            t.inputs.appendChild(z(s[0])),
                                                (r = t.inputs.childNodes),
                                                r[l].classList.add(
                                                    o + '-inputs-child',
                                                ),
                                                s[3] &&
                                                    setTimeout(function () {
                                                        r[l].focus();
                                                    }, 300),
                                                r[l].addEventListener(
                                                    s[1],
                                                    function (c) {
                                                        var f = s[2];
                                                        return f(
                                                            n,
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
                                            v(e.buttons, function (s, l) {
                                                t.buttons.appendChild(z(s[0]));
                                                var c = t.buttons.childNodes;
                                                c[l].classList.add(
                                                    o + '-buttons-child',
                                                ),
                                                    s[2] &&
                                                        setTimeout(function () {
                                                            c[l].focus();
                                                        }, 300),
                                                    c[l].addEventListener(
                                                        'click',
                                                        function (f) {
                                                            f.preventDefault();
                                                            var q = s[1];
                                                            return q(
                                                                n,
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
                                                var s = t.toast.offsetHeight,
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
                                                        s + f + c + 'px'),
                                                    setTimeout(function () {
                                                        (t.toastCapsule.style.height =
                                                            'auto'),
                                                            e.target &&
                                                                (t.toastCapsule.style.overflow =
                                                                    'visible');
                                                    }, 500),
                                                    e.timeout &&
                                                        n
                                                            .progress(
                                                                e,
                                                                t.toast,
                                                            )
                                                            .start();
                                            }, 100);
                                    })(),
                                    (function () {
                                        var s = e.position;
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
                                            if (y.indexOf(e.position) == -1) {
                                                console.warn(
                                                    '[' +
                                                        o +
                                                        `] Incorrect position.
It can be › ` +
                                                        y,
                                                );
                                                return;
                                            }
                                            g || window.innerWidth <= w
                                                ? e.position == 'bottomLeft' ||
                                                  e.position == 'bottomRight' ||
                                                  e.position == 'bottomCenter'
                                                    ? (s =
                                                          o +
                                                          '-wrapper-bottomCenter')
                                                    : e.position == 'topLeft' ||
                                                        e.position ==
                                                            'topRight' ||
                                                        e.position ==
                                                            'topCenter'
                                                      ? (s =
                                                            o +
                                                            '-wrapper-topCenter')
                                                      : (s =
                                                            o +
                                                            '-wrapper-center')
                                                : (s = o + '-wrapper-' + s),
                                                (t.wrapper =
                                                    document.querySelector(
                                                        '.' +
                                                            o +
                                                            '-wrapper.' +
                                                            s,
                                                    )),
                                                t.wrapper ||
                                                    ((t.wrapper =
                                                        document.createElement(
                                                            'div',
                                                        )),
                                                    t.wrapper.classList.add(
                                                        o + '-wrapper',
                                                    ),
                                                    t.wrapper.classList.add(s),
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
                                                      function (s) {
                                                          n.hide(
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
                                            var s = [200, 100, 300];
                                            (e.transitionIn == 'bounceInLeft' ||
                                                e.transitionIn ==
                                                    'bounceInRight') &&
                                                (s = [400, 200, 400]),
                                                e.title.length > 0 &&
                                                    setTimeout(function () {
                                                        t.strong.classList.add(
                                                            'slideIn',
                                                        );
                                                    }, s[0]),
                                                e.message.length > 0 &&
                                                    setTimeout(function () {
                                                        t.p.classList.add(
                                                            'slideIn',
                                                        );
                                                    }, s[1]),
                                                (e.icon || e.iconUrl) &&
                                                    setTimeout(function () {
                                                        t.icon.classList.add(
                                                            'revealIn',
                                                        );
                                                    }, s[2]);
                                            var l = 150;
                                            e.buttons.length > 0 &&
                                                t.buttons &&
                                                setTimeout(
                                                    function () {
                                                        v(
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
                                                    v(
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
                                } catch (s) {
                                    console.warn(s);
                                }
                                setTimeout(function () {
                                    t.toast.classList.remove(o + '-opening'),
                                        t.toast.classList.add(o + '-opened');
                                    try {
                                        var s = new CustomEvent(o + '-opened', {
                                            detail: e,
                                            bubbles: !0,
                                            cancelable: !0,
                                        });
                                        document.dispatchEvent(s);
                                    } catch (l) {
                                        console.warn(l);
                                    }
                                    e.onOpened.apply(null, [e, t.toast]);
                                }, 1e3),
                                    e.drag &&
                                        (T
                                            ? (t.toast.addEventListener(
                                                  'touchstart',
                                                  function (s) {
                                                      S.startMoving(
                                                          this,
                                                          n,
                                                          e,
                                                          s,
                                                      );
                                                  },
                                                  !1,
                                              ),
                                              t.toast.addEventListener(
                                                  'touchend',
                                                  function (s) {
                                                      S.stopMoving(this, s);
                                                  },
                                                  !1,
                                              ))
                                            : (t.toast.addEventListener(
                                                  'mousedown',
                                                  function (s) {
                                                      s.preventDefault(),
                                                          S.startMoving(
                                                              this,
                                                              n,
                                                              e,
                                                              s,
                                                          );
                                                  },
                                                  !1,
                                              ),
                                              t.toast.addEventListener(
                                                  'mouseup',
                                                  function (s) {
                                                      s.preventDefault(),
                                                          S.stopMoving(this, s);
                                                  },
                                                  !1,
                                              ))),
                                    e.closeOnEscape &&
                                        document.addEventListener(
                                            'keyup',
                                            function (s) {
                                                (s = s || window.event),
                                                    s.keyCode == 27 &&
                                                        n.hide(
                                                            e,
                                                            t.toast,
                                                            'esc',
                                                        );
                                            },
                                        ),
                                    e.closeOnClick &&
                                        t.toast.addEventListener(
                                            'click',
                                            function (s) {
                                                n.hide(e, t.toast, 'toast');
                                            },
                                        ),
                                    (n.toast = t.toast);
                            }),
                            u
                        );
                    },
                );
            })(k)),
        k.exports
    );
}
var Z = V();
const P = J(Z),
    Q = ({
        handleSubmit: C,
        handleChange: p,
        formData: m,
        dynamicCategories: u,
        paymentTypes: o,
        handlePaymentTypeChange: g,
    }) =>
        i.jsx('div', {
            className:
                'bg-white p-8 xl:max-w-md w-full h-svh flex items-center',
            children: i.jsxs('div', {
                className: 'w-full',
                children: [
                    i.jsx('h2', {
                        className:
                            'text-2xl font-bold text-center text-gray-700 mb-6',
                        children: '家計簿の入力',
                    }),
                    i.jsxs('form', {
                        id: 'dataForm',
                        className: 'space-y-4',
                        onSubmit: C,
                        children: [
                            i.jsxs('div', {
                                children: [
                                    i.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'date',
                                        children: '日付',
                                    }),
                                    i.jsx('input', {
                                        type: 'date',
                                        name: 'date',
                                        id: 'date',
                                        value: m.date,
                                        onChange: p,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                    }),
                                ],
                            }),
                            i.jsxs('div', {
                                children: [
                                    i.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'item',
                                        children: '項目',
                                    }),
                                    i.jsx('select', {
                                        name: 'payment_type_id',
                                        id: 'item',
                                        onChange: g,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                        children: Object.values(o).map((b, j) =>
                                            i.jsx(
                                                'option',
                                                {
                                                    value: b.id,
                                                    children: b.name,
                                                },
                                                j,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            i.jsxs('div', {
                                children: [
                                    i.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'category',
                                        children: 'カテゴリ',
                                    }),
                                    i.jsx('select', {
                                        name: 'category_id',
                                        id: 'category',
                                        onChange: p,
                                        value: m.category_id,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                        children: Object.entries(u).map(
                                            ([b, j]) =>
                                                i.jsx(
                                                    'option',
                                                    { value: b, children: j },
                                                    `dynamic${b}`,
                                                ),
                                        ),
                                    }),
                                ],
                            }),
                            i.jsxs('div', {
                                children: [
                                    i.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'amount',
                                        children: '金額',
                                    }),
                                    i.jsx('input', {
                                        type: 'number',
                                        name: 'amount',
                                        id: 'amount',
                                        value: m.amount,
                                        onChange: p,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                    }),
                                ],
                            }),
                            i.jsxs('div', {
                                children: [
                                    i.jsx('label', {
                                        className:
                                            'block text-gray-600 text-sm font-medium mb-2',
                                        htmlFor: 'memo',
                                        children: 'メモ',
                                    }),
                                    i.jsx('textarea', {
                                        name: 'memo',
                                        id: 'memo',
                                        value: m.memo,
                                        onChange: p,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                    }),
                                ],
                            }),
                            i.jsx('div', {
                                children: i.jsx('button', {
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
    $ = ({
        householdByExpenditure: C,
        creditCardExpenditureItem: p,
        totalExpenditureItem: m,
    }) =>
        i.jsxs('div', {
            className: 'bg-white p-6 rounded-lg shadow-md',
            children: [
                i.jsx('h2', {
                    className:
                        'text-xl font-bold text-gray-700 mb-4 border-b pb-2',
                    children: '支出内訳',
                }),
                i.jsx('div', {
                    className: 'divide-y divide-gray-200',
                    children: Object.values(C).map((u) =>
                        i.jsxs(
                            'div',
                            {
                                className:
                                    'flex justify-between items-center py-2',
                                children: [
                                    i.jsx('span', {
                                        className: 'text-gray-600 font-medium',
                                        children: u.label,
                                    }),
                                    i.jsxs('span', {
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
                i.jsxs('div', {
                    className: 'mt-6 flex items-center justify-between',
                    children: [
                        i.jsx('span', {
                            className: 'text-gray-600 text-sm',
                            children: '支出合計',
                        }),
                        i.jsxs('span', {
                            className: 'text-gray-800 font-semibold',
                            children: ['¥', m],
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: 'mt-2 flex items-center justify-between',
                    children: [
                        i.jsx('span', {
                            className: 'text-gray-600 text-sm',
                            children: 'うちクレジットカード決済',
                        }),
                        i.jsxs('span', {
                            className: 'text-gray-800 font-semibold',
                            children: ['¥', p],
                        }),
                    ],
                }),
            ],
        }),
    ee = ({ householdByIncome: C, totalIncomeItem: p }) =>
        i.jsxs('div', {
            className: 'bg-white p-6 rounded-lg shadow-md',
            children: [
                i.jsx('h2', {
                    className:
                        'text-xl font-bold text-gray-700 mb-2 border-b pb-2',
                    children: '収入',
                }),
                i.jsx('div', {
                    className: 'divide-y divide-gray-200',
                    children: Object.values(C).map((m) =>
                        i.jsxs(
                            'div',
                            {
                                className:
                                    'flex justify-between items-center py-2',
                                children: [
                                    i.jsx('span', {
                                        className: 'text-gray-600 font-medium',
                                        children: m.label,
                                    }),
                                    i.jsxs('span', {
                                        className:
                                            'text-gray-800 font-semibold',
                                        children: ['¥', m.value],
                                    }),
                                ],
                            },
                            `category_${m.label}`,
                        ),
                    ),
                }),
                i.jsxs('div', {
                    className: 'mt-4 flex items-center justify-between',
                    children: [
                        i.jsx('span', {
                            className: 'text-gray-600 text-sm',
                            children: '収入合計',
                        }),
                        i.jsxs('span', {
                            className: 'text-gray-800 font-semibold',
                            children: ['¥', p],
                        }),
                    ],
                }),
            ],
        }),
    te = ({
        householdItems: C,
        year: p,
        month: m,
        setYear: u,
        setMonth: o,
    }) => {
        const [g, b] = x.useState(new Date(p, m - 1, 1));
        x.useEffect(() => {
            b(new Date(p, m - 1, 1));
        }, [p, m]);
        const j = () => {
                const y = new Date(g.getFullYear(), g.getMonth() - 1, 1);
                b(y);
                const h = y.getFullYear(),
                    w = y.getMonth() + 1;
                u(h),
                    o(w),
                    (window.location.href = `/dashboard?year=${h}&month=${w}`);
            },
            T = () => {
                const y = new Date(g.getFullYear(), g.getMonth() + 1, 1);
                b(y);
                const h = y.getFullYear(),
                    w = y.getMonth() + 1;
                u(h),
                    o(w),
                    (window.location.href = `/dashboard?year=${h}&month=${w}`);
            };
        return i.jsxs('div', {
            className:
                'overflow-x-auto bg-white h-full rounded-lg shadow-md p-6',
            children: [
                i.jsxs('div', {
                    className: 'flex justify-between items-center mb-4',
                    children: [
                        i.jsx('button', {
                            onClick: j,
                            className:
                                'px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none',
                            children: '前月',
                        }),
                        i.jsxs('span', {
                            className: 'font-semibold text-gray-700',
                            children: [
                                g.getFullYear(),
                                '年 ',
                                g.getMonth() + 1,
                                '月',
                            ],
                        }),
                        i.jsx('button', {
                            onClick: T,
                            className:
                                'px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none',
                            children: '次月',
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: 'min-w-[600px] divide-y divide-gray-200',
                    children: [
                        i.jsxs('div', {
                            className:
                                'flex py-2 font-medium text-gray-500 border-b',
                            children: [
                                i.jsx('span', {
                                    className: 'w-[5rem]',
                                    children: '日付',
                                }),
                                i.jsx('span', {
                                    className: 'w-[10rem]',
                                    children: 'カテゴリ',
                                }),
                                i.jsx('span', {
                                    className: 'w-[10rem]',
                                    children: '支払い方法',
                                }),
                                i.jsx('span', {
                                    className: 'w-[10rem]',
                                    children: '金額',
                                }),
                                i.jsx('span', {
                                    className: 'flex-1',
                                    children: 'メモ',
                                }),
                            ],
                        }),
                        i.jsx('ul', {
                            children: Object.entries(C).map(([y, h]) =>
                                i.jsxs(
                                    'li',
                                    {
                                        className: `flex p-2 border-b items-center
                  ${h.category.is_income ? 'bg-green-100' : ''}
                  ${h.payment_type.is_credit_card ? 'bg-sky-100' : ''}`,
                                        children: [
                                            i.jsx('p', {
                                                className:
                                                    'w-[5rem] text-gray-800',
                                                children: new Date(
                                                    h.date,
                                                ).toLocaleDateString('ja-JP', {
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                }),
                                            }),
                                            i.jsx('p', {
                                                className:
                                                    'w-[10rem] text-gray-800',
                                                children: h.category.name,
                                            }),
                                            i.jsx('p', {
                                                className:
                                                    'w-[10rem] text-gray-800',
                                                children: h.payment_type.name,
                                            }),
                                            i.jsxs('p', {
                                                className:
                                                    'w-[10rem] text-gray-800 font-semibold',
                                                children: [
                                                    '¥',
                                                    h.amount.toLocaleString(),
                                                ],
                                            }),
                                            i.jsx('p', {
                                                className:
                                                    'flex-1 text-gray-800',
                                                children: h.memo,
                                            }),
                                        ],
                                    },
                                    y,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        });
    },
    ie = ({
        title: C,
        year: p,
        month: m,
        expenditureCategories: u = [],
        inComeCategories: o = [],
        paymentTypes: g = [],
        households: b = [],
        householdByExpenditure: j = [],
        householdByIncome: T = [],
        creditCardExpenditure: y = 0,
        totalExpenditure: h = 0,
        totalIncome: w = 0,
    }) => {
        const [O, B] = x.useState(p),
            [R, v] = x.useState(m),
            [N, z] = x.useState(b),
            [D, A] = x.useState(u),
            [F, S] = x.useState(j),
            [a, n] = x.useState(T),
            [e, t] = x.useState(y),
            [r, d] = x.useState(h),
            [s, l] = x.useState(w),
            [c, f] = x.useState(() => {
                const E = new Date(),
                    I =
                        parseInt(E.getUTCFullYear()) === parseInt(p) &&
                        parseInt(E.getUTCMonth() + 1) === parseInt(m)
                            ? new Date(Date.UTC(p, m - 1, E.getUTCDate()))
                            : new Date(Date.UTC(p, m - 1, 1));
                return new Intl.DateTimeFormat('ja-JP', {
                    timeZone: 'Asia/Tokyo',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                })
                    .format(I)
                    .replace(/\//g, '-');
            }),
            q = (E) => {
                const M = E.target.value,
                    I = g.find((L) => L.id === Number(M));
                I != null && I.is_income ? A(o) : A(u), U(E);
            };
        x.useEffect(() => {
            _({ ...H, category_id: Object.keys(D)[0] });
        }, [D]);
        const [H, _] = x.useState({
                date: c,
                category_id: Object.keys(D)[0],
                payment_type_id: g.length > 0 ? g[0].id : '',
                amount: 1e3,
                memo: '',
                year: O,
                month: R,
            }),
            U = (E) => {
                const { name: M, value: I } = E.target;
                _({ ...H, [M]: I });
            },
            Y = async (E) => {
                E.preventDefault();
                try {
                    const M = document
                            .querySelector('meta[name="csrf-token"]')
                            .getAttribute('content'),
                        I = await fetch('/post', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': M,
                            },
                            body: JSON.stringify(H),
                        }),
                        L = await I.json();
                    if (!I.ok) throw new Error(L.message);
                    z(L.households),
                        S(L.householdByExpenditure),
                        n(L.householdByIncome),
                        t(L.creditCardExpenditure),
                        d(L.totalExpenditure),
                        l(L.totalIncome),
                        P.success({
                            title: 'Success',
                            message: L.message,
                            position: 'topRight',
                        });
                } catch (M) {
                    P.error({
                        title: 'エラー',
                        message: M.message,
                        position: 'topRight',
                    });
                }
            };
        return i.jsxs('div', {
            className:
                'bg-orange-100 min-h-screen flex flex-wrap lg:flex-nowrap w-full',
            children: [
                i.jsx(K, { title: C }),
                i.jsx(Q, {
                    handleChange: U,
                    handleSubmit: Y,
                    formData: H,
                    categories: u,
                    dynamicCategories: D,
                    paymentTypes: g,
                    handlePaymentTypeChange: q,
                }),
                i.jsx('div', {
                    className: 'flex-1 w-full',
                    children: i.jsxs('div', {
                        className:
                            'flex flex-wrap 2xl:flex-nowrap h-full gap-2',
                        children: [
                            i.jsx('div', {
                                className:
                                    'pr-4 xl:pr-0 py-4 pl-4 w-full 2xl:w-3/12',
                                children: i.jsxs('div', {
                                    className: 'grid grid-cols-1 gap-4',
                                    children: [
                                        i.jsx($, {
                                            householdByExpenditure: F,
                                            creditCardExpenditureItem: e,
                                            totalExpenditureItem: r,
                                        }),
                                        i.jsx(ee, {
                                            householdByIncome: a,
                                            totalIncomeItem: s,
                                        }),
                                    ],
                                }),
                            }),
                            i.jsx('div', {
                                className:
                                    'pl-4 pt-0 pb-4 xl:py-4 xl:pl-2 pr-4 w-full 2xl:w-9/12 h-screen',
                                children: i.jsx(te, {
                                    year: O,
                                    setYear: B,
                                    month: R,
                                    setMonth: v,
                                    householdItems: N,
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    };
export { ie as default };
