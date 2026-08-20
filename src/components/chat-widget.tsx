"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FaComment } from "react-icons/fa6";

const ChatPanel = dynamic(() => import("@/components/chat-panel"));

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-widget">
      {open && <ChatPanel onClose={() => setOpen(false)} />}

      {!open && (
        <button
          type="button"
          className="chat-bubble"
          aria-label="Open chat"
          onClick={() => setOpen(true)}
        >
          <>
            <FaComment aria-hidden="true" /> Chat
          </>
        </button>
      )}
    </div>
  );
}
