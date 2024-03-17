import React, { useEffect } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function login() {
  const router = useRouter();
  const [{ userInfo, newUser }, dispatch] = useStateProvider();
  useEffect(() => {
    if (userInfo?.id && !newUser) router.push("/");
  }, [userInfo, newUser]);
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoUrl: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);
    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });

        if (!data.status) {
          dispatch({
            type: reducerCases.SET_NEW_USER,
            newUser: true,
          });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profileImage,
              status: "",
            },
          });
          router.push("/onboarding");
        } else {
          const {
            id,
            name,
            email,
            profilePicture: profileImage,
            status,
          } = data.data;
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              id,
              name,
              email,
              profileImage,
              status,
            },
          });
          router.push("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative flex justify-center">
      <div className="bg-chat-background flex justify-center items-center bg-slate-300 h-screen w-screen flex-col gap-6 absolute blur-[2px]"></div>
      <div className="z-10 pt-[25vh] flex flex-col justify-center items-center absolute ">
        <div className="flex flex-row items-center justify-center gap-2 text-white">
          <Image
            priority
            src="/favicon.png"
            alt="Vartalap"
            height={300}
            width={300}
          />
          <span className="text-black font-semibold blur-[1px] text-7xl mb-10">
            Vartalap
          </span>
        </div>
        <button
          className="flex bg-black items-center justify-center gap-7 border-black border-[2.5px] p-5 rounded-[15px] hover:opacity-100 blur-[1px]"
          onClick={handleLogin}
        >
          <FcGoogle className="text-4xl" />
          <span className="text-white font-semibold text-4xl ">Login with Google </span>
        </button>
      </div>
    </div>
  );
}

export default login;
