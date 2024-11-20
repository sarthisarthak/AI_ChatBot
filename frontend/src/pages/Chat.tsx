import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { sendChatRequest } from "../helpers/api-communicator";
// const chat_messages = [
//   { role: "user", content: "Hello! How can you assist me today?" },
//   {
//     role: "assistant",
//     content:
//       "Hi there! I can help with a variety of tasks like answering questions, providing recommendations, or assisting with coding problems. How can I help you?",
//   },
//   { role: "user", content: "Can you explain how binary search works?" },
//   {
//     role: "assistant",
//     content:
//       "Of course! Binary search is an efficient algorithm to find an item in a sorted array. It works by repeatedly dividing the search interval in half. If the target value is less than the value at the midpoint, the search continues in the left half, otherwise in the right half, until the value is found or the interval is empty.",
//   },
//   {
//     role: "user",
//     content: "That’s helpful! Can you provide a code example in Python?",
//   },
//   {
//     role: "assistant",
//     content:
//       "Sure! Here's a simple implementation:\n\n```python\n def binary_search(arr, target):\n     left, right = 0, len(arr) - 1\n     while left <= right:\n         mid = (left + right) // 2\n         if arr[mid] == target:\n             return mid\n         elif arr[mid] < target:\n             left = mid + 1\n         else:\n             right = mid - 1\n     return -1\n\n # Example usage:\n numbers = [1, 3, 5, 7, 9]\n print(binary_search(numbers, 5))  # Output: 2\n```",
//   },
//   { role: "user", content: "Thank you!" },
//   {
//     role: "assistant",
//     content: "You're welcome! Let me know if you have any more questions.",
//   },
// ];

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const handleSubmit = async () => {
    // console.log(inputRef.current?.value);
    const content = inputRef.current?.value as string;

    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);

    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name &&
              auth?.user?.name.split(" ").length > 1 &&
              auth.user.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a ChatBot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You are ask some questions related to
            Knowledge,Business,Advices,Education,etc. But avoid sharing personal
            information
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem
              role={chat.role as "user" | "assistant"}
              content={chat.content}
              key={index}
            />
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton
            onClick={handleSubmit}
            sx={{ ml: "auto", color: "white" }}
          >
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
