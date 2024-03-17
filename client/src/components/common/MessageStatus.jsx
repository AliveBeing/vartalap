import React from "react";
import { BsCheck, BsCheckAll } from "react-icons/bs";

function MessageStatus({messageStatus}) {
  return (
    <>
      {messageStatus==="sent" && <BsCheck className="text-lg text-white" />}
      {messageStatus === "delievered" && (
        <BsCheckAll className="text-lg text-white" />
      )}
      {messageStatus === "read" && (
        <BsCheckAll className="text-lg text-icon-ack" />
      )}
    </>
  );
}

export default MessageStatus;
