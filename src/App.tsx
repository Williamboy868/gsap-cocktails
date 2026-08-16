import { useEffect, useRef } from "react"
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Contact from "./components/Contact"

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  const lenisRef = useRef<any>(null)
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
   <ReactLenis root ref={lenisRef} autoRaf={false}>
     <main>
         <Navbar/>
         <Hero/>
         <Cocktails/>
         <About/>
         <Art/>
         <Menu/>
         <Contact/>
     </main>
   </ReactLenis>
  )
}

export default App