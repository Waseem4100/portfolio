import Image from "next/image";
import Link from "next/link";
import SS from "@/public/SS.png";
import github from "@/public/github.png";
import linkedin from "@/public/linkdine.png";



export default function Main(){
    return(
    
        <div className="Main">
  
 

 <div>  <Image src={SS} alt="profilePicture"  loading="lazy"  className="picture"  />
  
</div>

    

      
<div className="intro">

<h1 className="name" >Hi,Im <span >Waseem </span></h1>


<p className="mainPragraph" > a developer in the making at the Governor Initiative for AI (GIAIC), where I'm learning TypeScript, HTML, CSS, Tailwind CSS, and Next.js.

I enjoy building modern, responsive web interfaces and applications powered by Claude, turning ideas into clean, functional products.

I'm always learning, always building, and looking for opportunities to collaborate on projects that make a real impact


</p>


<div className="social-icon flex ml-28 mt-4 gap-2">
<Link href ="https://github.com/Waseem4100"> <Image src={github} alt="github"  loading="lazy"   id="social"/></Link>
<Link href ="https://www.linkedin.com/in/waseem-ahmed117068/"> <Image src={linkedin} alt="github"  loading="lazy"    id="social"/></Link>

</div>
</div>


</div>






    )
}



