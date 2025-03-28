import { j as s, L as m } from './app-eWBFjQPB.js';
import { A as r } from './AuthenticatedLayout-COPfs3mk.js';
import t from './DeleteUserForm-BA30dJPz.js';
import i from './UpdatePasswordForm-BAusG1Cu.js';
import o from './UpdateProfileInformationForm-BHZrkKp4.js';
import './transition-KqM1QH0Y.js';
import './TextInput-BvZQDhij.js';
import './InputLabel-BZBu7zmR.js';
import './PrimaryButton-DUGeym5G.js';
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
