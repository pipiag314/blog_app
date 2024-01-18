import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h1 className="font-bold">NOT FOUND 404</h1>
        <p>page is not found</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}
export default NotFound