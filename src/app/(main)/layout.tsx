import Chatbot from "@/components/chat/Chatbot";
import React, { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
}