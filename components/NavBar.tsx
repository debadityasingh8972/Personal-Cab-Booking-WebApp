import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="flex justify-between p-3 px-10 border-b-[4px] shadow-lg">
      <div className="flex gap-10 items-center">
        <Image src="/logo1.png" alt="logo" width={120} height={60} />
        <div className="hidden md:flex gap-5">
          <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            Home
          </h2>
          <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            History
          </h2>
          <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            Help
          </h2>
        </div>
      </div>
      <div className="mt-5">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default NavBar;
