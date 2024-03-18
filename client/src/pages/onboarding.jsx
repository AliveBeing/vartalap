import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import { useStateProvider } from "@/context/StateContext";
import { ONBOARD_USER_ROUTE,SET_NEW_USER,SET_USER_INFO } from "@/utils/ApiRoutes";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { reducerCases } from "@/context/constants";



function onboarding() {
  const router = useRouter();
  const [{ userInfo, newUser },dispatch] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.jpg");
  

  useEffect(() => {
    if (!newUser && !userInfo?.email) router.push("/login");
    else if (!newUser && userInfo?.email) router.push("/");
  }, [newUser, userInfo, router]);

  

  const onboardUserHandler = async (req, res) => {
    if (validateDetails()) {
      const email = userInfo.email;
      try {
        const { data } = await axios.post(ONBOARD_USER_ROUTE, {
          email,
          name,
          about,
          image,
        });
        if (data.status) {
          dispatch({
            type: reducerCases.SET_NEW_USER,
            newUser: false,
          });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              id: data.user.id,
              name,
              email,
              profileImage: image,
              status: about,
            },
          });
          router.push("/");
          
        }
      } catch (err) {
        console.log(err);
      }
    }
    
  };
  const validateDetails = () => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };
  return (
    <div className="relative flex justify-center">
      <div className="bg-chat-background flex justify-center items-center bg-slate-300 h-screen w-screen flex-col gap-6 absolute blur-[2px]"></div>
      <div className="z-5p-[20px] text-white flex flex-col items-center justify-center absolute mt-[2vh]">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/favicon.png"
            alt="vartalap"
            priority
            height={300}
            width={300}
          />
          <span className="text-7xl mb-10 text-black font-semibold blur-[1px]">
            Vartalap
          </span>
        </div>
        <h2 className="text-4xl font-semibold text-black blur-[1px]">
          Create your Profile
        </h2>
        <div className="flex gap-6 mt-6">
          <div className="flex flex-col items-center justify-center mt-5 gap-6">
            <Input name="Display Name" state={name} setState={setName} label />
            <Input name="About" state={about} setState={setAbout} label />
          </div>
          <div>
            <Avatar type="xl" image={image} setImage={setImage} />
          </div>
        </div>
        <div className=" flex items-center justify-center mt-[4vh]">
          <button
            className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg text-[20px] font-semibold blur-[0.25px] hover:blur-[0px]"
            onClick={onboardUserHandler}
          >
            Create Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default onboarding;
