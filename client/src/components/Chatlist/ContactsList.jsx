import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { GET_ALL_CONTACTS } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import ChatListItem from "./ChatLIstItem.jsx";

function ContactsList() {
  const [allContacts, setAllContacts] = useState([]);
  const [{}, dispatch] = useStateProvider();
  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
    const getContacts = async () => {
      const {
        data: { users },
      } = await axios.get(GET_ALL_CONTACTS);
      setAllContacts(users);
    };
    getContacts();
  }, []);
  return (
    <div className="h-full flex flex-col">
      <div className="bg-slate-200 h-14 flex-items-end px-3 py-4 ">
        <div className="flex items-center gap-12 text-black">
          <BiArrowBack
            className=" cursor-pointer text-xl"
            onClick={() =>
              dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE })
            }
          />
          <span className="font-semibold">New Chat</span>
        </div>
      </div>
      <div className="bg-slate-200 h-full flex-auto overflow-auto custom-scrollbar">
        <div className="bg-slate-200 flex py-3 items-center gap-3 h-14">
          <div className="bg-slate-200 border-black border-2 flex items-center gap-5 px-3 py-1 rounded-lg flex-grow mx-4">
            <div>
              <BiSearchAlt2 className="text-black cursor-pointer text-lg" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search Contacts"
                className="bg-transparent text-sm focus:outline-none text-white w-full"
              />
            </div>
          </div>
        </div>
        {Object.entries(allContacts).map(([initialLetter, userList]) => {
          return (
            <div key={Date.now() + initialLetter}>
              <div className="text-black pl-10 py-3 border-b-2 border-slate-300  font-semibold">{initialLetter}</div>
              {userList.map((contact) => {
                return <ChatListItem data={contact} isContactPage={true}  key={contact.id}/>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactsList;
