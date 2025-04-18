import { j as e, m as p, L as j } from './app-gF1KMiiZ.js';
import { T as l, I as i } from './TextInput-BwfOZkDf.js';
import { I as n } from './InputLabel-D8neASes.js';
import { P as h } from './PrimaryButton-BiXBADeU.js';
import { G as f } from './GuestLayout-6icV9UWk.js';
function g({ className: a = '', ...m }) {
    return e.jsx('input', {
        ...m,
        type: 'checkbox',
        className:
            'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
            a,
    });
}
function k({ status: a, canResetPassword: m }) {
    const {
            data: r,
            setData: t,
            post: c,
            processing: d,
            errors: o,
            reset: u,
        } = p({ email: '', password: '', remember: !1 }),
        x = (s) => {
            s.preventDefault(),
                c(route('login'), { onFinish: () => u('password') });
        };
    return e.jsxs(f, {
        children: [
            e.jsx(j, { title: 'ログイン' }),
            a &&
                e.jsx('div', {
                    className: 'mb-4 text-sm font-medium text-green-600',
                    children: a,
                }),
            e.jsxs('form', {
                onSubmit: x,
                children: [
                    e.jsxs('div', {
                        children: [
                            e.jsx(n, {
                                htmlFor: 'email',
                                value: 'メールアドレス',
                            }),
                            e.jsx(l, {
                                id: 'email',
                                type: 'email',
                                name: 'email',
                                value: r.email,
                                className: 'mt-1 block w-full',
                                autoComplete: 'username',
                                isFocused: !0,
                                onChange: (s) => t('email', s.target.value),
                            }),
                            e.jsx(i, { message: o.email, className: 'mt-2' }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mt-4',
                        children: [
                            e.jsx(n, {
                                htmlFor: 'password',
                                value: 'パスワード',
                            }),
                            e.jsx(l, {
                                id: 'password',
                                type: 'password',
                                name: 'password',
                                value: r.password,
                                className: 'mt-1 block w-full',
                                autoComplete: 'current-password',
                                onChange: (s) => t('password', s.target.value),
                            }),
                            e.jsx(i, {
                                message: o.password,
                                className: 'mt-2',
                            }),
                        ],
                    }),
                    e.jsx('div', {
                        className: 'mt-4 block',
                        children: e.jsxs('label', {
                            className: 'flex items-center',
                            children: [
                                e.jsx(g, {
                                    name: 'remember',
                                    checked: r.remember,
                                    onChange: (s) =>
                                        t('remember', s.target.checked),
                                }),
                                e.jsx('span', {
                                    className: 'ms-2 text-sm text-gray-600',
                                    children: 'このデバイスを記憶',
                                }),
                            ],
                        }),
                    }),
                    e.jsx('div', {
                        className: 'mt-4 flex items-center justify-end',
                        children: e.jsx(h, {
                            className: 'ms-4',
                            disabled: d,
                            children: 'ログイン',
                        }),
                    }),
                ],
            }),
        ],
    });
}
export { k as default };
