import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1>Next JS - pre-rendering</h1>
      <Link href={`/users`}>users</Link>
      <Link href={`/posts`}>posts</Link>
    </div>
  )
}

export default Home