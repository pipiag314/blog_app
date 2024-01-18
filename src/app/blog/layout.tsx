import Link from "next/link"
import { ReactNode } from "react"

const BlogLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col gap-5">
        <Link href="/blog">All Blogs </Link>
        {children}
    </div>
  )
}
export default BlogLayout