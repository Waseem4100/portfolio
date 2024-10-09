import calculator from "@/public/calculator.png"
import loginpage  from "@/public/loginpage.png"
import resumebulider  from "@/public/resumebuilder.png"
import Image from "next/image"
import Link from "next/link"

export default function Jobs() {
    
    return (
     <div className="projectContainer">
    

       <div className="projectCard">
        <div >
        <Image src={calculator} alt="calculator"  className="projectImage" />
        </div>
        <h1 className="projectTitle">SIMPLE CALCULATOR</h1>
        <p className="projectDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="projectButton">
        <Link href="https://simplecalculatorbywaseemahmed.vercel.app/"><li className="projectlink">DEMO</li></Link>
          <Link href="https://github.com/Waseem4100/SIMPLE-CALCULATOR"><li className="projectlink">GITHUB</li></Link>
          
          </ul>
      </div>

      <div className="projectCard">
        <div className="projectImage">
        <Image src={loginpage} alt="loginpage"  className="projectImage" />
        </div>
        <h1 className="projectTitle">LOGIN PAGE</h1>
        <p className="projectDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="projectButton">
          <Link href="https://loginpage-olive-gamma.vercel.app/"><li className="projectlink">DEMO</li></Link>
          <Link href="https://github.com/Waseem4100/log-in-page"><li className="projectlink">GITHUB</li></Link>
          
          </ul>
      </div>

      <div className="projectCard">
        <div className="projectImage">
        <Image src={resumebulider} alt="resumebulder"  className="projectImage" />
        
        </div>
        <h1 className="projectTitle">RESUME BUILDER</h1>
        <p className="projectDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="projectButton">  
        <Link href="https://milestone5downloadableresumebuilderbywaseemahmed.vercel.app/"><li className="projectlink">DEMO</li></Link>
        <Link href="https://github.com/Waseem4100/milestone5-Downloadable-Resume-Builder-"><li className="projectlink">GITHUB</li></Link>
          </ul>
      </div>

      <div className="projectCard">
        <div className="projectImage"></div>
        <h1 className="projectTitle">SIMPLE CALCULATOR</h1>
        <p className="projectDescription"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nobis? Facere deleniti pariatur obcaecati explicabo! Est sed, officia aliquid fuga dolore possimus fugiat officiis corporis perspiciatis odio quasi similique dolores!</p>
        <ul className="projectButton">
          <Link href={`/`}><li className="projectlink">DEMO</li></Link>
          <Link href={`/`}><li className="projectlink">GITHUB</li></Link>
          
          </ul>
      </div>
     
     
     
     </div>
     

    )}