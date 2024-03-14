import Image from "next/image";
import React from "react";

function Empty() {
  return (
    <div className="border-conversation-border border-l w-full bg-panel-header-background flex flex-col items-center h-[100vh] border-b border-b-icon-green justify-center">
      <Image src="/whatsapp.gif" alt="Whatsapp" height={300} width={300} />
    </div>
  );
}

export default Empty;
