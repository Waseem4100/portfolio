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

<h3 className="profession" >  I&apos;m{" "} a <span className="profession-span"></span></h3>
<p className="mainPragraph" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dolor impedit et quae ea earum quam nihil eligendi nobis doloribus fuga aspernatur deleniti quo provident, at deserunt modi? Impedit, quia.</p>





<div className="social-icon flex ml-28 mt-4 gap-2">
<Link href ="https://github.com/Waseem4100"> <Image src={github} alt="github"  loading="lazy"   id="social"/></Link>
<Link href ="https://www.linkedin.com/in/waseem-ahmed117068/"> <Image src={linkedin} alt="github"  loading="lazy"    id="social"/></Link>

</div>
</div>


</div>






    )
}



