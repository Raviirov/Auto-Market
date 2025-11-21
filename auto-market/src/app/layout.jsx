import "./globals.scss";
import Animation from "./components/Animation/animation";
import Header from "./components/Header/page";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Animation>
          <Header />
          {children}
        </Animation>
      </body>
    </html>  
  );
}
