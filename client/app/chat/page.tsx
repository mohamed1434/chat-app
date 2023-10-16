import Messages from "@/components/chat-threads/Messages";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="bg-blue-500 min-h-screen">
      <div className="mx-auto flex">
        <Sidebar />
        <Messages />
      </div>
    </div>
  );
};

export default page;
