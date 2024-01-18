"use client"

import Link from "next/link"
import { links } from "./navLinks"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

const Links = () => {  
  const [showMenu, setShowMenu] = useState(false);

  const pathName = usePathname();
  
  const session = true;
  const isAdmin = true;
  
  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="hidden 1024:flex gap-5">
        {links.map(link => {
          return (
            <Link className={`${link.href === pathName && "active"} link`} key={link.title} href={link.href}>{link.title}</Link>
            )
          })}
        {isAdmin && (<Link className={`${"/admin" === pathName && "active"} link`} href="/admin">Admin</Link>)}
        <button className="auth-link">{session ? "Log Out" : "Log In"}</button>
      </div>
      <button onClick={handleClick} className="block 1024:hidden">
        <Image src="/menu.png" alt="menu" width={24} height={24} />
      </button>
      {showMenu && (
        <div className="1024:hidden absolute left-0 top-20 w-full z-20 bg-red-500 h-[89%] flex items-center justify-center">
          <div className="flex flex-col gap-5">
            {links.map(link => {
              return (
                <Link onClick={() => setShowMenu(false)} className={`${link.href === pathName && "active"} link`} key={link.title} href={link.href}>{link.title}</Link>
                )
            })}
            {isAdmin && (<Link onClick={() => setShowMenu(false)} className={`${"/admin" === pathName && "active"} link`} href="/admin">Admin</Link>)}
            <button className="auth-link">{session ? "Log Out" : "Log In"}</button>
          </div>
        </div>
      )}
    </>
  )
}
export default Links