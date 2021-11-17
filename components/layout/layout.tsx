import React from "react";
import Footer from "../footer";
import Header from "../header/header";
import PreviewWarning from "../previewWarning/previewWarning";

interface LayoutProps {
  preview: boolean;
}

const Layout: React.FC<LayoutProps> = ({ preview, children }) => {
  return (
    <>
      <div className="min-w-screen">
        {preview && <PreviewWarning />}
        <Header />
      </div>
      <div className="min-h-screen w-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
