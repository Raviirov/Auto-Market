import "../globals.scss";
import Animation from "../components/Animation/animation";
import Header from "../components/Header/page";
import Footer from "../components/Footer";

export default function SiteLayout({ children }) {
  return (
    <Animation>
      <Header />
      {children}
      <Footer />
    </Animation>
  );
}
