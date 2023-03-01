import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { useStore } from "effector-react";
import { chatModel } from "../entities/chat";

const AuthPage = lazy(() => import("./auth"));
const ChatPage = lazy(() => import("./chat"));

export const Routing = () => {
  const connected = useStore(chatModel.$connected);
  return (
    <Routes>
      <Route path="/" element={connected ? <Navigate to="/chat" /> : <AuthPage />} />
      <Route path="/chat" element={connected ? <ChatPage /> : <Navigate to="/" />} />
    </Routes>
  );
};
