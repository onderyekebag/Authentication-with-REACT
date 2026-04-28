import UserLayout from "../layouts/user-layout.tsx";
import {useSelector} from "react-redux";

const ProfilePage = () => {

    const {account} = useSelector(state => state.account);

    const fullName = [account.firstName, account.lastName].filter(Boolean).join(' ') || account.login || '—';
    const initials = [account.firstName?.[0], account.lastName?.[0]].filter(Boolean).join('').toUpperCase() || '?';

    return (
        <UserLayout>
            <div className="bg-gray-100 min-h-screen">

                <div className="bg-gray-200 h-40" />

                <div className="container mx-auto px-6 -mt-12 pb-16">
                    <div className="flex items-end gap-5 mb-6">
                        {account.imageUrl ? (
                            <img
                                src={account.imageUrl}
                                alt={fullName}
                                className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
                            />
                        ) : (
                            <div className="w-28 h-28 rounded-full border-4 border-white bg-indigo-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                                {initials}
                            </div>
                        )}
                        <div className="mb-2">
                            <h1 className="text-2xl font-bold text-gray-900">{fullName}</h1>
                            {account.login && (
                                <p className="text-sm text-gray-500">@{account.login}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Account Information</h2>
                            <dl className="space-y-4">
                                {account.email && (
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-gray-500">Email</dt>
                                        <dd className="text-sm font-medium text-gray-900">{account.email}</dd>
                                    </div>
                                )}
                                {account.login && (
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-gray-500">Username</dt>
                                        <dd className="text-sm font-medium text-gray-900">{account.login}</dd>
                                    </div>
                                )}
                                {account.countryCode && (
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-gray-500">Country</dt>
                                        <dd className="text-sm font-medium text-gray-900">{account.countryCode}</dd>
                                    </div>
                                )}
                                {account.langCode && (
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-gray-500">Language</dt>
                                        <dd className="text-sm font-medium text-gray-900">{account.langCode}</dd>
                                    </div>
                                )}
                                {account.createdDate && (
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-gray-500">Member since</dt>
                                        <dd className="text-sm font-medium text-gray-900">
                                            {new Date(account.createdDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </dd>
                                    </div>
                                )}
                            </dl>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Status</h2>
                            <div className="flex items-center gap-2">
                                <span className={`w-2.5 h-2.5 rounded-full ${account.activated ? 'bg-green-500' : 'bg-gray-300'}`} />
                                <span className="text-sm text-gray-700">{account.activated ? 'Active account' : 'Inactive account'}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default ProfilePage;