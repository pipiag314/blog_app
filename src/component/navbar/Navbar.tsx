import Link from "next/link"
import Links from "./Links"

const Navbar = () => {

  
  return (
    <header className="flex items-center justify-between border-b-2 border-white">
        <Link href="/" className="logo">Logo</Link>
        <div>
            <Links />
        </div>
    </header>
  )
}
export default Navbar