import React from "react";
import Avatar from "../common/Avatar";

import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
//import { SET_VOICE_CALL,SET_VIDEO_CALL} from "@/context/constants";

function ChatHeader() {
  const [{userInfo,currentChatUser},dispatch]=useStateProvider();

  const handleVoiceCall = () => {
    dispatch({
      type:reducerCases.SET_VOICE_CALL,
      voiceCall:{
        ...currentChatUser,
        type:"out-going",
        callType: "voice",
        rooomId: Date.now(),
      },
    });
  };

  const handleVideoCall = () => {
    //alert("video");
    dispatch({
      type:reducerCases.SET_VIDEO_CALL,
      videoCall:{
        ...currentChatUser,
        type:"out-going",
        callType: "video",
        rooomId: Date.now(),
      },
    });
  };

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
        <MdCall className="text-black  cursor-pointer text-xl"
        onClick={handleVoiceCall} />
        <IoVideocam className="text-black  cursor-pointer text-xl" 
        onClick={handleVideoCall}/>
        <BiSearchAlt2 className="text-black  cursor-pointer text-xl" 
        onClick={()=>dispatch({type:reducerCases.SET_MESSAGE_SEARCH})} />
        <BsThreeDotsVertical className="text-black  cursor-pointer text-xl" />
        
        
      </div>
    </div>
  );
  
}

export default ChatHeader;
