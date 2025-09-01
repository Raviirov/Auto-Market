import Link from "next/link";

function Home() {
  
  return (
    <>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptate quod quasi fugiat perferendis ducimus minus commodi accusamus. Quia dolor vitae eveniet adipisci dolore ratione soluta voluptate at, consequatur nobis.</p>
      <Link href="/about">About Page</Link>
    </>
  )
}

export default Home