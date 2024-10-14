"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import github from "@/public/github.png"
import linkdine from "@/public/linkdine.png" 



export default function Contact () {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data  = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };




  
    
    return (
        <div className="contactSection">



<div className="contactForm">  {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
       
           <form  onSubmit={handleSubmit}  >

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
             )}
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