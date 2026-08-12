// import Chatbot from "@/components/chat/Chatbot";
// import React, { ReactNode } from "react";

// type MainLayoutProps = {
//   children: ReactNode;
// };

// export default async function MainLayout({ children }: MainLayoutProps) {
//   return (
//     <>
//       {children}
//       <Chatbot />
//     </>
//   );
// }


// import Chatbot from "@/src/components/chat/Chatbot";
import Chatbot from "@/components/chat/Chatbot";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-full flex flex-col font-public-sans bg-green-50 agritech">
        <main className="relative z-10 bg-background">
          <Navbar />
          {children}
        </main>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}
