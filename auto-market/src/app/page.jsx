import Link from "next/link";
import Heading from "./components/Heading";

function Home() {
  
  return (
    <>
      <Heading title="Hello World"></Heading>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptate quod quasi fugiat perferendis ducimus minus commodi accusamus. Quia dolor vitae eveniet adipisci dolore ratione soluta voluptate at, consequatur nobis.</p>
      <Link href="/about">About Page</Link>
      <Link href="/header">Header</Link>
    </>
  )
}

export default Home;