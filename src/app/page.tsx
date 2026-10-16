import Main from "@/component/main" ;
import About from "@/app/about/page"
import Contact from "@/app/contact/page"
import Projects from "@/app/projects/page"
import Header from "@/Header"



export default function Home() {
    
  return (


    

    <div className="Home">

      <Main/>
      <About />
      <Projects/>
      <Contact />
     
      </div>
  );
}
