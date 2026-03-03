import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Delete Your BookFlow Account
        </h1>
        <p className="text-gray-600 mb-6">
          If you&apos;d like to permanently delete your account, please follow
          these steps carefully.
        </p>

        <ol className="list-decimal list-inside text-left text-gray-700 space-y-3 mb-8">
          <li>
            Open the <span className="font-semibold">Jahid</span> app on your
            device.
          </li>
          <li>
            Tap the <span className="font-semibold">bottom navigation bar</span>{" "}
            and go to the <span className="font-semibold">Settings</span> page —
            it&apos;s the button on the{" "}
            <span className="font-semibold">far right</span>.
          </li>
          <li>
            Scroll down to the{" "}
            <span className="font-semibold">Account Management</span> section.
          </li>
          <li>
            Tap on <span className="font-semibold">Close Account</span>.
          </li>
          <li>
            Fill out the short form and submit your request. Once submitted,
            your account and all related data will be permanently deleted.
          </li>
        </ol>

        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-sm text-red-600">
            <strong>Note:</strong> Account deletion is permanent. You won&apos;t
            be able to recover your data or saved notes after deletion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
