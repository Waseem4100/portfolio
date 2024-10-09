
import Image from "next/image"
import about from "@/public/about.jpg"


export default function About() {

  
    
    return (
      <div className="AboutSection">

     <div > <Image src={about} alt="about" loading="lazy" className="AboutPicture"  />
     </div>



     <div className="aboutTitle">
      <h2 className="aboutHeading">About Me</h2>
      <p className="aboutDescription"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse molestiae dignissimos animi facilis dolore voluptates rem laudantium non iusto, odio dolores, repellendus vero iure corporis magni pariatur suscipit! Expedita.</p>
     
     <div className="flex flex-row mt-8">
      <span className="skillSection">Skill

      <ul className="mt-3 hover: text-white">
        <li>html</li>
        <li>css</li>
        <li> typescript</li>
      </ul>
      
      </span>
     
      <span className="educationSection">Education
      <ul className="mt-3 hover: text-white" >
          <li>INTERMEDIATE</li>
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