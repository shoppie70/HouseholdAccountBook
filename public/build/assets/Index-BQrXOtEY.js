import { c as Y, g as se, j as i, r as w, L as ie } from './app-gF1KMiiZ.js';
var F = { exports: {} },
    J = F.exports,
    K;
function oe() {
    return (
        K ||
            ((K = 1),
            (function (y, g) {
                (function (f, c) {
                    y.exports = c(f);
                })(
                    typeof Y < 'u' ? Y : window || J.window || J.global,
                    function (f) {
                        var c = {},
                            o = 'iziToast';
                        document.querySelector('body');
                        var v = !!/Mobi/.test(navigator.userAgent),
                            N =
                                /Chrome/.test(navigator.userAgent) &&
                                /Google Inc/.test(navigator.vendor),
                            E = typeof InstallTrigger < 'u',
                            b = 'ontouchstart' in document.documentElement,
                            j = [
                                'bottomRight',
                                'bottomLeft',
                                'bottomCenter',
                                'topRight',
                                'topLeft',
                                'topCenter',
                                'center',
                            ],
                            I = {
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
                            O = 568,
                            T = {};
                        c.children = {};
                        var z = {
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
                            var D = function (a, n) {
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
                            (D.prototype = window.Event.prototype),
                                (window.CustomEvent = D);
                        }
                        var x = function (a, n, e) {
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
                            C = function (a, n) {
                                var e = {};
                                return (
                                    x(a, function (t, r) {
                                        e[r] = a[r];
                                    }),
                                    x(n, function (t, r) {
                                        e[r] = n[r];
                                    }),
                                    e
                                );
                            },
                            B = function (a) {
                                var n = document.createDocumentFragment(),
                                    e = document.createElement('div');
                                for (e.innerHTML = a; e.firstChild; )
                                    n.appendChild(e.firstChild);
                                return n;
                            },
                            A = function (a) {
                                var n = btoa(encodeURIComponent(a));
                                return n.replace(/=/g, '');
                            },
                            H = function (a) {
                                return (
                                    a.substring(0, 1) == '#' ||
                                    a.substring(0, 3) == 'rgb' ||
                                    a.substring(0, 3) == 'hsl'
                                );
                            },
                            q = function (a) {
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
                                                          C(e, {
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
                                                          C(e, {
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
                                                ((N || E) &&
                                                    (a.style.left = t + 'px'),
                                                (a.parentNode.style.opacity =
                                                    d),
                                                this.stopMoving(a, null)));
                                    },
                                    startMoving: function (a, n, e, t) {
                                        t = t || window.event;
                                        var r = b
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
                                            b
                                                ? (document.ontouchmove =
                                                      function (l) {
                                                          l.preventDefault(),
                                                              (l =
                                                                  l ||
                                                                  window.event);
                                                          var u =
                                                                  l.touches[0]
                                                                      .clientX,
                                                              h = u - s;
                                                          S.move(a, n, e, h);
                                                      })
                                                : (document.onmousemove =
                                                      function (l) {
                                                          l.preventDefault(),
                                                              (l =
                                                                  l ||
                                                                  window.event);
                                                          var u = l.clientX,
                                                              h = u - s;
                                                          S.move(a, n, e, h);
                                                      });
                                    },
                                    stopMoving: function (a, n) {
                                        b
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
                            (c.setSetting = function (a, n, e) {
                                c.children[a][n] = e;
                            }),
                            (c.getSetting = function (a, n) {
                                return c.children[a][n];
                            }),
                            (c.destroy = function () {
                                x(
                                    document.querySelectorAll(
                                        '.' + o + '-overlay',
                                    ),
                                    function (a, n) {
                                        a.remove();
                                    },
                                ),
                                    x(
                                        document.querySelectorAll(
                                            '.' + o + '-wrapper',
                                        ),
                                        function (a, n) {
                                            a.remove();
                                        },
                                    ),
                                    x(
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
                                    (T = {});
                            }),
                            (c.settings = function (a) {
                                c.destroy(), (T = a), (z = C(z, a || {}));
                            }),
                            x(I, function (a, n) {
                                c[n] = function (e) {
                                    var t = C(T, e || {});
                                    (t = C(a, t || {})), this.show(t);
                                };
                            }),
                            (c.progress = function (a, n, e) {
                                var t = this,
                                    r = n.getAttribute('data-iziToast-ref'),
                                    d = C(this.children[r], a || {}),
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
                                                    u =
                                                        l.getPropertyValue(
                                                            'width',
                                                        );
                                                (s.style.transition = 'none'),
                                                    (s.style.width = u);
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
                            (c.hide = function (a, n, e) {
                                typeof n != 'object' &&
                                    (n = document.querySelector(n));
                                var t = this,
                                    r = C(
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
                                            var u =
                                                l.getAttribute(
                                                    'data-iziToast-ref',
                                                );
                                            u = u.split(',');
                                            var h = u.indexOf(String(r.ref));
                                            h !== -1 && u.splice(h, 1),
                                                l.setAttribute(
                                                    'data-iziToast-ref',
                                                    u.join(),
                                                ),
                                                u.length === 0 &&
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
                                    v || window.innerWidth <= O
                                        ? r.transitionOutMobile &&
                                          n.classList.add(r.transitionOutMobile)
                                        : r.transitionOut &&
                                          n.classList.add(r.transitionOut);
                                var d = n.parentNode.offsetHeight;
                                (n.parentNode.style.height = d + 'px'),
                                    (n.style.pointerEvents = 'none'),
                                    (!v || window.innerWidth > O) &&
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
                                            } catch (u) {
                                                console.warn(u);
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
                            (c.show = function (a) {
                                var n = this,
                                    e = C(T, a || {});
                                if (
                                    ((e = C(z, e)),
                                    (e.time = {}),
                                    e.id === null &&
                                        (e.id = A(
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
                                        x(
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
                                    (c.children[e.ref] = e);
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
                                            v || window.innerWidth <= O
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
                                            x(s, function (l, u) {
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
                                                (H(e.color)
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
                                            q(e.image.replace(/ /g, ''))
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
                                            t.strong.appendChild(B(e.title)),
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
                                                t.p.appendChild(B(e.message)),
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
                                        x(e.inputs, function (s, l) {
                                            t.inputs.appendChild(B(s[0])),
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
                                                    function (u) {
                                                        var h = s[2];
                                                        return h(
                                                            n,
                                                            t.toast,
                                                            this,
                                                            u,
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
                                            x(e.buttons, function (s, l) {
                                                t.buttons.appendChild(B(s[0]));
                                                var u = t.buttons.childNodes;
                                                u[l].classList.add(
                                                    o + '-buttons-child',
                                                ),
                                                    s[2] &&
                                                        setTimeout(function () {
                                                            u[l].focus();
                                                        }, 300),
                                                    u[l].addEventListener(
                                                        'click',
                                                        function (h) {
                                                            h.preventDefault();
                                                            var W = s[1];
                                                            return W(
                                                                n,
                                                                t.toast,
                                                                this,
                                                                h,
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
                                                    u = l.marginTop;
                                                (u = u.split('px')),
                                                    (u = parseInt(u[0]));
                                                var h = l.marginBottom;
                                                (h = h.split('px')),
                                                    (h = parseInt(h[0])),
                                                    (t.toastCapsule.style.visibility =
                                                        ''),
                                                    (t.toastCapsule.style.height =
                                                        s + h + u + 'px'),
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
                                            if (j.indexOf(e.position) == -1) {
                                                console.warn(
                                                    '[' +
                                                        o +
                                                        `] Incorrect position.
It can be › ` +
                                                        j,
                                                );
                                                return;
                                            }
                                            v || window.innerWidth <= O
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
                                                        x(
                                                            t.buttons
                                                                .childNodes,
                                                            function (u, h) {
                                                                setTimeout(
                                                                    function () {
                                                                        u.classList.add(
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
                                                    x(
                                                        t.inputs.childNodes,
                                                        function (u, h) {
                                                            setTimeout(
                                                                function () {
                                                                    u.classList.add(
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
                                        (b
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
                            c
                        );
                    },
                );
            })(F)),
        F.exports
    );
}
var ae = oe();
const V = se(ae),
    re = ({
        handleSubmit: y,
        handleChange: g,
        formData: f,
        dynamicCategories: c,
        paymentTypes: o,
        handlePaymentTypeChange: v,
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
                        onSubmit: y,
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
                                        value: f.date,
                                        onChange: g,
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
                                        onChange: v,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                        children: Object.values(o).map((N, E) =>
                                            i.jsx(
                                                'option',
                                                {
                                                    value: N.id,
                                                    children: N.name,
                                                },
                                                E,
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
                                        onChange: g,
                                        value: f.category_id,
                                        className:
                                            'w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                                        children: Object.entries(c).map(
                                            ([N, E]) =>
                                                i.jsx(
                                                    'option',
                                                    { value: N, children: E },
                                                    `dynamic${N}`,
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
                                        value: f.amount,
                                        onChange: g,
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
                                        value: f.memo,
                                        onChange: g,
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
    le = ({
        householdByExpenditure: y,
        creditCardExpenditureItem: g,
        totalExpenditureItem: f,
    }) =>
        i.jsxs('div', {
            className: 'bg-white p-6 rounded-lg shadow-md',
            children: [
                i.jsx('h2', {
                    className: 'font-bold text-gray-700 mb-2 border-b pb-1',
                    children: '支出内訳',
                }),
                i.jsx('div', {
                    className: 'divide-y divide-gray-200',
                    children: Object.values(y).map((c) =>
                        i.jsxs(
                            'div',
                            {
                                className:
                                    'flex justify-between items-center py-2',
                                children: [
                                    i.jsx('span', {
                                        className:
                                            'text-gray-600 font-medium text-sm ',
                                        children: c.label,
                                    }),
                                    i.jsxs('span', {
                                        className:
                                            'text-gray-800 font-semibold text-sm',
                                        children: ['¥', c.value],
                                    }),
                                ],
                            },
                            `category_${c.label}`,
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
                            children: ['¥', f],
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
                            children: ['¥', g],
                        }),
                    ],
                }),
            ],
        }),
    de = ({ householdByIncome: y, totalIncomeItem: g }) =>
        i.jsxs('div', {
            className: 'bg-white p-6 rounded-lg shadow-md',
            children: [
                i.jsx('h2', {
                    className: 'font-bold text-gray-700 mb-2 border-b pb-1',
                    children: '収入',
                }),
                i.jsx('div', {
                    className: 'divide-y divide-gray-200',
                    children: Object.values(y).map((f) =>
                        i.jsxs(
                            'div',
                            {
                                className:
                                    'flex justify-between items-center py-2',
                                children: [
                                    i.jsx('span', {
                                        className:
                                            'text-gray-600 font-medium text-sm',
                                        children: f.label,
                                    }),
                                    i.jsxs('span', {
                                        className:
                                            'text-gray-800 font-semibold text-sm',
                                        children: ['¥', f.value],
                                    }),
                                ],
                            },
                            `category_${f.label}`,
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
                            children: ['¥', g],
                        }),
                    ],
                }),
            ],
        }),
    ce = ({ householdItems: y, deleteItem: g }) =>
        i.jsx('div', {
            className:
                'overflow-x-auto bg-white h-full rounded-lg shadow-md p-6',
            children: i.jsxs('table', {
                className:
                    'table-auto w-full lg:min-w-[600px] divide-y divide-gray-200',
                children: [
                    i.jsx('thead', {
                        className: '',
                        children: i.jsxs('tr', {
                            className: 'text-left text-gray-600',
                            children: [
                                i.jsx('th', {
                                    className:
                                        'px-4 py-2 min-w-[5rem] lg:w-[5rem]',
                                    children: '日付',
                                }),
                                i.jsx('th', {
                                    className:
                                        'px-4 py-2 min-w-[8rem] lg:w-[10rem]',
                                    children: 'カテゴリ',
                                }),
                                i.jsx('th', {
                                    className:
                                        'px-4 py-2 min-w-[8rem] lg:w-[10rem]',
                                    children: '支払い方法',
                                }),
                                i.jsx('th', {
                                    className:
                                        'px-4 py-2 min-w-[8rem] lg:w-[10rem]',
                                    children: '金額',
                                }),
                                i.jsx('th', {
                                    className:
                                        'px-4 py-2 min-w-[6rem] whitespace-nowrap',
                                    children: 'メモ',
                                }),
                                i.jsx('th', {
                                    className: 'px-4 py-2 min-w-[5rem]',
                                    children: '操作',
                                }),
                            ],
                        }),
                    }),
                    i.jsx('tbody', {
                        children: Object.entries(y).map(([f, c]) =>
                            i.jsxs(
                                'tr',
                                {
                                    className: `${c.category.is_income ? 'bg-green-100' : ''} ${c.payment_type.is_credit_card ? 'bg-sky-100' : ''} hover:bg-gray-50`,
                                    children: [
                                        i.jsx('td', {
                                            className:
                                                'px-4 py-2 text-gray-800',
                                            children: new Date(
                                                c.date,
                                            ).toLocaleDateString('ja-JP', {
                                                month: 'numeric',
                                                day: 'numeric',
                                            }),
                                        }),
                                        i.jsx('td', {
                                            className:
                                                'px-4 py-2 text-gray-800',
                                            children: c.category.name,
                                        }),
                                        i.jsx('td', {
                                            className:
                                                'px-4 py-2 text-gray-800',
                                            children: c.payment_type.name,
                                        }),
                                        i.jsxs('td', {
                                            className:
                                                'px-4 py-2 text-gray-800 font-semibold',
                                            children: [
                                                '¥',
                                                c.amount.toLocaleString(),
                                            ],
                                        }),
                                        i.jsx('td', {
                                            className:
                                                'px-4 py-2 text-gray-800 text-sm w-full whitespace-nowrap',
                                            children: c.memo,
                                        }),
                                        i.jsx('td', {
                                            className: 'px-4 py-2 min-w-[5rem]',
                                            children: i.jsx('button', {
                                                className:
                                                    'bg-red-700 hover:bg-red-900 text-white font-bold py-1 px-2 rounded text-xs',
                                                onClick: () => g(c.id),
                                                children: '削除',
                                            }),
                                        }),
                                    ],
                                },
                                f,
                            ),
                        ),
                    }),
                ],
            }),
        }),
    ue = ({ year: y, month: g, setYear: f, setMonth: c }) => {
        const [o, v] = w.useState(new Date(y, g - 1, 1));
        w.useEffect(() => {
            v(new Date(y, g - 1, 1));
        }, [y, g]);
        const N = () => {
                const b = new Date(o.getFullYear(), o.getMonth() - 1, 1);
                v(b);
                const j = b.getFullYear(),
                    I = b.getMonth() + 1;
                f(j),
                    c(I),
                    (window.location.href = `/dashboard?year=${j}&month=${I}`);
            },
            E = () => {
                const b = new Date(o.getFullYear(), o.getMonth() + 1, 1);
                v(b);
                const j = b.getFullYear(),
                    I = b.getMonth() + 1;
                f(j),
                    c(I),
                    (window.location.href = `/dashboard?year=${j}&month=${I}`);
            };
        return i.jsxs('div', {
            className: 'flex justify-between items-center mb-4',
            children: [
                i.jsx('button', {
                    onClick: N,
                    className:
                        'px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none',
                    children: '前月',
                }),
                i.jsxs('span', {
                    className: 'font-semibold text-gray-700',
                    children: [o.getFullYear(), '年 ', o.getMonth() + 1, '月'],
                }),
                i.jsx('button', {
                    onClick: E,
                    className:
                        'px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none',
                    children: '次月',
                }),
            ],
        });
    },
    fe = ({
        title: y,
        year: g,
        month: f,
        expenditureCategories: c = [],
        inComeCategories: o = [],
        paymentTypes: v = [],
        households: N = [],
        householdByExpenditure: E = [],
        householdByIncome: b = [],
        creditCardExpenditure: j = 0,
        totalExpenditure: I = 0,
        totalIncome: O = 0,
    }) => {
        const [T, z] = w.useState(g),
            [D, x] = w.useState(f),
            [C, B] = w.useState(N),
            [A, H] = w.useState(c),
            [q, S] = w.useState(E),
            [a, n] = w.useState(b),
            [e, t] = w.useState(j),
            [r, d] = w.useState(I),
            [s, l] = w.useState(O),
            [u, h] = w.useState(() => {
                const m = new Date(),
                    L =
                        parseInt(m.getUTCFullYear()) === parseInt(g) &&
                        parseInt(m.getUTCMonth() + 1) === parseInt(f)
                            ? new Date(Date.UTC(g, f - 1, m.getUTCDate()))
                            : new Date(Date.UTC(g, f - 1, 1));
                return new Intl.DateTimeFormat('ja-JP', {
                    timeZone: 'Asia/Tokyo',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                })
                    .format(L)
                    .replace(/\//g, '-');
            }),
            W = (m) => {
                const p = m.target.value,
                    L = v.find((M) => M.id === Number(p));
                L != null && L.is_income ? H(o) : H(c), U(m);
            };
        w.useEffect(() => {
            _({ ...R, category_id: Object.keys(A)[0] });
        }, [A]);
        const [R, _] = w.useState({
                date: u,
                category_id: Object.keys(A)[0],
                payment_type_id: v.length > 0 ? v[0].id : '',
                amount: 1e3,
                memo: '',
                year: T,
                month: D,
            }),
            U = (m) => {
                const { name: p, value: L } = m.target;
                _({ ...R, [p]: L });
            },
            Z = () =>
                document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            Q = (m) => ({
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': m,
            }),
            $ = async (m) => {
                const p = await m.json();
                if (!m.ok) throw new Error(p.message);
                return p;
            },
            k = (m, p, L) => {
                const M = { title: p, message: L, position: 'topRight' };
                m === 'success' ? V.success(M) : V.error(M);
            },
            X = (m) => {
                B(m.households),
                    S(m.householdByExpenditure),
                    n(m.householdByIncome),
                    t(m.creditCardExpenditure),
                    d(m.totalExpenditure),
                    l(m.totalIncome);
            },
            G = async (m, p, L) => {
                const M = Z(),
                    P = Q(M),
                    ne = await fetch(m, {
                        method: p,
                        headers: P,
                        body: JSON.stringify(L),
                    });
                return $(ne);
            },
            ee = async (m) => {
                try {
                    const p = await G(`/delete/${m}`, 'POST', R);
                    X(p), k('success', 'Success', p.message);
                } catch (p) {
                    k('error', 'エラー', p.message);
                }
            },
            te = async (m) => {
                m.preventDefault();
                try {
                    const p = await G('/post', 'POST', R);
                    X(p), k('success', 'Success', p.message);
                } catch (p) {
                    k('error', 'エラー', p.message);
                }
            };
        return i.jsxs('div', {
            className:
                'bg-orange-100 min-h-screen flex flex-wrap lg:flex-nowrap w-full',
            children: [
                i.jsx(ie, { title: y }),
                i.jsx(re, {
                    handleChange: U,
                    handleSubmit: te,
                    formData: R,
                    categories: c,
                    dynamicCategories: A,
                    paymentTypes: v,
                    handlePaymentTypeChange: W,
                }),
                i.jsx('div', {
                    className: 'flex-1 w-full',
                    children: i.jsxs('div', {
                        className: 'flex flex-wrap lg:flex-nowrap h-full gap-2',
                        children: [
                            i.jsx('div', {
                                className:
                                    'pr-4 xl:pr-0 py-4 pl-4 w-full md:w-5/12 2xl:w-3/12',
                                children: i.jsxs('div', {
                                    className: 'grid grid-cols-1 gap-4',
                                    children: [
                                        i.jsx('div', {
                                            className: '-mb-4',
                                            children: i.jsx(ue, {
                                                year: T,
                                                setYear: z,
                                                month: D,
                                                setMonth: x,
                                            }),
                                        }),
                                        i.jsx(le, {
                                            householdByExpenditure: q,
                                            creditCardExpenditureItem: e,
                                            totalExpenditureItem: r,
                                        }),
                                        i.jsx(de, {
                                            householdByIncome: a,
                                            totalIncomeItem: s,
                                        }),
                                    ],
                                }),
                            }),
                            i.jsx('div', {
                                className:
                                    'pl-4 pt-0 pb-4 xl:py-4 xl:pl-2 pr-4 w-full md:w-7/12 2xl:w-9/12 h-screen',
                                children: i.jsx(ce, {
                                    year: T,
                                    setYear: z,
                                    month: D,
                                    setMonth: x,
                                    householdItems: C,
                                    deleteItem: ee,
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    };
export { fe as default };
