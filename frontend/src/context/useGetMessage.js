import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  const getMessages = async () => {
    setLoading(true);
    if (selectedConversation && selectedConversation._id) {
      try {
        const res = await axios.get(`/api/message/get/${selectedConversation._id}`);
        // console.log(res);
        setMessage(res.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in getting messages", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getMessages();
  }, [selectedConversation, setMessage]);

  return { loading, messages, getMessages };
};

export default useGetMessage;
