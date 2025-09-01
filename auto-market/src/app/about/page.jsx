import Link from "next/link";
import "./style.scss";

function About() {
  return (
    <div className="about-page-container">
      <h1>About Page</h1>
      <p>This is the about page of the Auto Market application.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

export default About;