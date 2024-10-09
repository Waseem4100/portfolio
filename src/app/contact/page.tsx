
import Image from "next/image";
import Link from "next/link";
import github from "@/public/github.png"
import linkdine from "@/public/linkdine.png" 



export default function Contact () {

  
    
    return (
        <div className="contactSection">



<div className="contactForm"> 
     <form >
            <div className="emailSection">
              <label
                htmlFor="email"
                
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
             
                placeholder="  example@gmail.com"
              />
            </div>
            <div className="subjectSection">
              <label
                htmlFor="subject"
                
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                
                placeholder="  Just saying hi"
              />
            </div>
            <div className="messagetSection">
              <label
                htmlFor="message"
               
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
              
                placeholder="  Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="submitButton"
            >
              Send Message
            </button>
          </form>
          </div>
    

<div className="conectSection">


<h5 className="conectHeading">
Let&apos;s{" "} Connect
</h5>
<p className="conectDescription">
 
  I&apos;m currently looking for new opportunities, my inbox is always
  open. Whether you have a question or just want to say hi, I&apos;ll
  try my best to get back to you!
</p>
{ <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/Waseem4100">
 <Image src={github} alt="github" id="social" />
  </Link>
  <Link href="https://www.linkedin.com/in/waseem-ahmed117068/">
    <Image src={linkdine} alt="linkedin" id="social"/>
  </Link>


</div>  }

</div> 



    
   

     </div> 
    )}