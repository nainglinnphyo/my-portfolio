"use client"

import { ReactNode, useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function HashScroll({ children }: { children: ReactNode }) {
     const nextHash = useRef("")
     const pathname = usePathname()
     const searchParams = useSearchParams()

     useEffect(() => {

          const handleClick = (e: MouseEvent) => {
               if ((e.target as HTMLElement).tagName !== "A") return
               const el = e.target as HTMLAnchorElement
               const id = el.hash.slice(1)
               if (!id) return
               if (el.origin !== window.location.origin) return
               if (el.pathname === window.location.pathname) {
                    scrollToEl(id)
                    return
               }
               nextHash.current = id
          }
          scrollToEl(window.location.hash.slice(1))
          document.addEventListener("click", handleClick)
          return () => document.removeEventListener("click", handleClick)
     }, [])

     useEffect(() => {
          if (nextHash.current) {
               scrollToEl(nextHash.current)
               nextHash.current = ""
          }
     }, [pathname, searchParams])

     return <>{children}</>
}

function scrollToEl(id: string) {
     if (!id) return
     const el = document.getElementById(id)
     if (!el) return
     el.scrollIntoView()
}