

import Link from "next/link"









export default function Header (){
 
    
    return(
       
        <div >

        <header id="header" > 


       <h3 className="logo">  <Link href={`/`}> WASEEM AHMED</Link> </h3>
      
       
    
     <ul className="header-button">
      <Link href={`/`}> <li className="header-btn">Home</li></Link> 
      <Link href={`/contact`}> <li className="header-btn">Contact</li></Link>
      <Link href={`/about`}> <li className="header-btn">About</li></Link>
      <Link href={`/projects`}> <li className="header-btn">Project</li></Link>
        </ul>
  
        </header>   
         
        </div>
      

    )
}