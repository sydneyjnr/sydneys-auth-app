import React from "react";

interface UserProfileProps {
  params: Promise<{ id: string }>;
}

const UserProfile = async ({ params }: UserProfileProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Profile Details</h1>
      <hr className="my-4 w-full border-gray-300" />
      <p className="text-2xl">
        Profile Page: <span className="p-2 ml-2 rounded text-black bg-amber-300 font-mono">{(await params).id}</span>
      </p>
    </div>
  );
};

export default UserProfile;
