import "./globals.scss";
import Animation from "./components/Animation/animation";
import Header from "./components/Header/page";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Animation>
          <Header />
          {children}
          <Footer />
        </Animation>
      </body>
    </html>  
  );
}
