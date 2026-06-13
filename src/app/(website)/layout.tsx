import Footer from "@/reusable/Footer";
import Navbar from "@/reusable/Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#00091E]">
      <Navbar />
      <main className="min-h-screen bg-[#00091E]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;