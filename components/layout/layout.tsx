import React from "react";
import Footer from "../footer";
import Header from "../header/header";
import PreviewWarning from "../previewWarning/previewWarning";

interface LayoutProps {
  preview: boolean;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ preview, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      {preview && <PreviewWarning />}
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
