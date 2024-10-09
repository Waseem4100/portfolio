import Link from "next/link";
export default function Footer(){
  return  (
        <footer >
          <div className="footerContainer">
          <h3 className="footerLogo">  <Link href={`/`}> WASEEM AHMED</Link> </h3>
            <p className="footerParagraph">All rights reserved.</p>
          </div>
        </footer>
      );
}