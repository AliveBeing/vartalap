import React from "react";
import Avatar from "../common/Avatar";

import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { useStateProvider } from "@/context/StateContext";

function ChatHeader() {
  const [{userInfo,currentChatUser},dispatch]=useStateProvider();
  return (
    <div className="n-16 px-4 py-2.5 flex justify-between items-center bg-slate-300 z-10">
      <div className="flex items-center justify-center gap-6 ">
        <Avatar type="sm" image={currentChatUser?.profilePicture}/>
        <div className="flex flex-col">
          <span className="text-black ">{currentChatUser?.name}</span>
          <span className="text-slate-500 text-sm">Online/Offline</span>
        </div>
      </div>
      <div className="flex gap-6">
        <MdCall className="text-black  cursor-pointer text-xl" />
        <IoVideocam className="text-black  cursor-pointer text-xl" />
        <BiSearchAlt2 className="text-black  cursor-pointer text-xl" />
        <BsThreeDotsVertical className="text-black  cursor-pointer text-xl" />
        
        
      </div>
    </div>
  );
  
}

export default ChatHeader;
