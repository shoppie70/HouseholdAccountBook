import { j as s, L as m } from './app-BmYrGWcD.js';
import { A as r } from './AuthenticatedLayout-DOqP42i0.js';
import t from './DeleteUserForm-BzhMuXA_.js';
import i from './UpdatePasswordForm-B9BlfsLW.js';
import o from './UpdateProfileInformationForm-CwnrVGOU.js';
import './transition-C2G0t2_0.js';
import './TextInput-DFTvvFuC.js';
import './InputLabel-sNGFc5JR.js';
import './PrimaryButton-B58wIhHY.js';
function w({ mustVerifyEmail: e, status: a }) {
    return s.jsxs(r, {
        header: s.jsx('h2', {
            className: 'text-xl font-semibold leading-tight text-gray-800',
            children: 'Profile',
        }),
        children: [
            s.jsx(m, { title: 'Profile' }),
            s.jsx('div', {
                className: 'py-12',
                children: s.jsxs('div', {
                    className: 'mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8',
                    children: [
                        s.jsx('div', {
                            className:
                                'bg-white p-4 shadow sm:rounded-lg sm:p-8',
                            children: s.jsx(o, {
                                mustVerifyEmail: e,
                                status: a,
                                className: 'max-w-xl',
                            }),
                        }),
                        s.jsx('div', {
                            className:
                                'bg-white p-4 shadow sm:rounded-lg sm:p-8',
                            children: s.jsx(i, { className: 'max-w-xl' }),
                        }),
                        s.jsx('div', {
                            className:
                                'bg-white p-4 shadow sm:rounded-lg sm:p-8',
                            children: s.jsx(t, { className: 'max-w-xl' }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
export { w as default };
