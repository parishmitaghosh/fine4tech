import React from "react";
import Pagenav from "../components/Pagenav";
import "../css/contact.css"
function Contact() {
  return (
    <>
      <Pagenav />
      <section className="contact">
        <h1>Hello.</h1>
        <p>
          Need a beautiful, well-structured website that you can own and
          maintain yourself? Get in touch
        </p>
        <p>
         Email: <a href="mailto:ghoshparishmita19@gmail.com">ghoshparishmita19@gmail.com</a><br/>
         On the internet: <a href="https://www.instagram.com/fine4tech?igsh=MTZnNmN5NHY4N3Q1NA==">Intagram</a>||<a href="https://www.linkedin.com/in/seemanta-dutta-a83237195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Linkdin</a>||<a href="https://www.behance.net/fine4tech?fbclid=PAAaar0DgLDkLRkgvRt6BwQigDklDqCEJPWCDLG9n9wiRe3M8vi8_Cgepz3Us_aem_AWllMDw2kfDmfNHS1qyMj11s3-_wWCJwlrc-uz8gbWyxvCyWK7hB-DiGshqFHmzk3BQ">Behance</a>
        </p>
      </section>
    </>
  );
}

export default Contact;
