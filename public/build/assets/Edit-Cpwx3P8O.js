import { j as s, L as m } from './app-Bstz2_0k.js';
import { A as r } from './AuthenticatedLayout-BQVf9_04.js';
import t from './DeleteUserForm-BLLpBfvB.js';
import i from './UpdatePasswordForm-BUx8Q3IG.js';
import o from './UpdateProfileInformationForm-H_k9zWG9.js';
import './ApplicationLogo-DCTVc6dP.js';
import './transition-D9klZmhV.js';
import './TextInput-COjrn2Mc.js';
import './InputLabel-B1IC8u2c.js';
import './PrimaryButton-CxUSJb9f.js';
function g({ mustVerifyEmail: e, status: a }) {
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
export { g as default };
