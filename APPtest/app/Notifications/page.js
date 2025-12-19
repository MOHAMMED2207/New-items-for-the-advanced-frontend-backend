"use client";

import { useEffect, useState } from "react";
import pusher from "../lib/pusherClient";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const channel = pusher.subscribe("notifications");

    channel.bind("new-message", (data) => {
      // يظهر الاشعار فورًا
      toast(data.message, {
        duration: 5000,
        style: {
          background: "#333",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        },
      });
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  const sendNotification = async () => {
    if (!message) return;

    await fetch("/Notifications/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    setMessage("");
  };

  return (
    <div className="p-8">
      <div className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={sendNotification}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>

      {/* Toaster container */}
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}
