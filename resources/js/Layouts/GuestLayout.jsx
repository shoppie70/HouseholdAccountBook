import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-orange-50 sm:justify-center px-4 lg:px-4">
            <div className="w-full overflow-hidden bg-white pt-8 px-6 py-4 shadow-md sm:max-w-md rounded-lg">
                {children}
            </div>
        </div>
    );
}
