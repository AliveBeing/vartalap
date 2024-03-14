import React, { useEffect, useState } from "react";
import ChatList from "./Chatlist/ChatList.jsx";
import Empty from "./Empty";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig.js";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function Main() {
  const router = useRouter();
  const [{ userInfo }, dispatch] = useStateProvider();
  const [redirectLogin, setRedirectLogin] = useState(false);
  useEffect(() => {
    if (redirectLogin) router.push("/login");
  }, [redirectLogin]);
  onAuthStateChanged(firebaseAuth, async (currentUser) => {
    if (!currentUser) {
      setRedirectLogin(true);
    }
    if (!userInfo && currentUser?.email) {
      const { data } = await axios.post(CHECK_USER_ROUTE, {
        email: currentUser.email,
      });
      if (!data.status) {
        router.push("/login");
      }
      if(data?.data){

        const {id,name, email, profilePicture: profileImage, status } = data.data;
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
      }
      }
    });
  return (
    <>
      <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-screen">
        <ChatList/>
        <Empty />
      </div>
    </>
  );
}

export default Main;
