import { openingHours, socials } from "../constants"

const Contact = () => {
  return (
   <footer id="contact">
<img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf"/>
<img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf"/>  
   
   <div className="content">
     <h2>Where to Find Us</h2>

     <div>
        <h3>
            Visit Our Bar
        </h3>
        <p>Bosomtwe Lake Road</p>
     </div>

     <div>
        <h3>Contact Us</h3>
        <p>+233 556 732 796</p>
        <p>hello@jsmocktail.com</p>
     </div>
    
    <div>
        <h3>Open Every Day</h3>
        {
            openingHours.map(time=>(
                <p key={time.day}>
                  {time.day}:{time.time}  
                </p>
            ))
        }
    </div>
    <div>
        <h3>Socials</h3>
        <div className="flex-center gap-5">
         {socials.map(social=>(
            <a key={social.name}
             href={social.url}
             rel="noopener noreferrer" 
             aria-label={social.name}
             target="_blank">

            <img src={social.icon}/>
             </a>
         ))}
        </div>
    </div>

   </div>
   
   
   </footer>
  )
}

export default Contact