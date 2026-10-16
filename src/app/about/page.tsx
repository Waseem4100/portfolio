
import Image from "next/image"
import about from "@/public/about.png"


export default function About() {

  
    
    return (
      <div className="AboutSection">

     <div > <Image src={about} alt="about" loading="lazy" className="AboutPicture"  />
     </div>



     <div className="aboutTitle">
      <h2 className="aboutHeading">About Me</h2>
      <p className="aboutDescription"> I'm Waseem Ahmed, a developer in the making at the Governor Initiative for AI (GIAIC), where I'm learning TypeScript, HTML, CSS, Tailwind CSS, and Next.js.

I enjoy building modern, responsive web interfaces and applications powered by Claude, turning ideas into clean, functional products.

I'm always learning, always building, and looking for opportunities to collaborate on projects that make a real impact.</p>
     
     <div className="flex flex-row mt-8">
      <span className="skillSection">Skill

      <ul className="mt-3 hover: text-white">
        <li>HTML</li>
        <li>CSS/tailwind CSS</li>
        <li> TypeScript</li>
        <li>NEXT.js</li>
      </ul>
      
      </span>
     
      <span className="educationSection">Education
      <ul className="mt-3 hover: text-white" >
          <li>INTERMEDIATE</li>
          <li>currently enrolled in GIAIC</li>
     </ul>
      </span>

      <span className="experienceSection">Experience
        <ul className="mt-3 hover: text-white" >
          <li>FRESH</li>
        </ul>
      </span>
      

     </div>
     </div>
 
   
     
  </div>
    )}