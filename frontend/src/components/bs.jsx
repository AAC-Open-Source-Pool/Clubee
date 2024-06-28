import React from 'react'
import HeroSlider, {Slide} from 'hero-slider'


const bogliasco = "https://cdn.sanity.io/images/dqyhuxze/production/ae77420c9c4441df27104fa2570ab1528eef0af9-1079x573.jpg?w=1079&h=573&auto=format" /*style={{width: '100%', height: 600}}*/
const countryClare = "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1682599705.png"/* style={{width: '100%', height: 600}} />*/




const Bs = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/ecell')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }



    return (
//         <HeroSlider
//             slidingAnimation="left_to_right"
//             orientation="horizontal"
//             initialSlide={1}
//             onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange",previousSlide,nextSlide)}>
//             onchange={nextSlide => console.log("onChange",nextSlide)}
//             onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
//             {/* style={{
//                 backgroundColor: "rgba"
//             }} */}
//             settings={{
//                  slidingDuration: 250,
//                  slidingDelay: 100,
//                  shouldAutoplay:true,
//                  shouldDisplayButtons:true,
//                  autoplayduration: 5000,
//                  height: "100vh"
//             }}
//             <Slide>
//                 background={{
//                     backgraoundImage:bogliasco,
//                     backgroundAttachment:"fixed",
                   

//                 }}
//             </Slide>
//             <Slide>
//                 background={{
//                     backgraoundImage:countryClare ,
//                     backgroundAttachment:"fixed"
//                 }}
//             </Slide>
//             <Slide>
//                 background={{
//                     backgraoundImage:bogliasco,
//                     backgroundAttachment:"fixed"
//                 }}
//             </Slide>
//             <Slide>
//                 background={{
//                     backgraoundImage:bogliasco,
//                     backgroundAttachment:"fixed"
//                 }}
//             </Slide>
//             <Slide>
//                 background={{
//                     backgraoundImage:bogliasco,
//                     backgroundAttachment:"fixed"
//                 }}
//             </Slide>

//         </HeroSlider>



<div>
  <link rel="stylesheet" href="privacy.css" />
  <link rel="stylesheet" type="text/css" href="privacy.css" />
  <div className="pooji">
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="spirals.html">Spirals</a></li>
        <li><a href="rhythms.html">Rhythms</a></li>
        <li><a href="aac.html">AAC</a></li>
        <li><a href="ecell.html">ECELL</a></li>
        <li><a href="spices.html">Spices</a></li>
      </ul>
    </nav>
    <div className="privacy">
      <br /><br />
      <h2>Privacy Policy</h2>
      <p className="textz">
        We may record the Internet Protocol (IP) address of the computer you are using, information about your internet browser and operating system, date and time of access and the source page that directed you to our website. The use of this information is limited to analysis for improving our website and to generate aggregate statistical reports and such like purposes.
        The information collected by this website is not shared or disclosed to third parties but may be disclosed in limited circumstances as and if required by law, order, statutory bodies, court, rules &amp; regulations.<br /><br />
        Information collected through Login: <br /><br />
        ◉ We may ask you to fill out your name and email/Phone No if you register on our website or fill out a form on this site. The information you share might be used by us to send you emails, while we will not share your name, email or any other information you share with us through forms with any third parties. <br /><br />
        ◉ As a club, by choosing to post anything, you agree to disclose your name publicly. We cannot be held responsible if any third party uses the information you shared in your comment on any of our blog posts. <br /><br />
        This website may contain links to websites within our network and to other websites that are outside our domain which are not monitored by us and are not covered by this privacy policy. We are not responsible for the privacy practices or security of such websites.
        While we are committed to ensuring that the privacy of the users is protected, however, we do ensure or warrant the security of any information you transmit to us, and you do so at your own risk.
        This privacy policy can be revised/modified/amended at any point of time at the sole discretion of the owners of this website.
        <br /><br />
        <br /><br />
        <br /><br />
      </p>
    </div>
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="#"><i className="fa fa-facebook" /></a>
        <a href="#"><i className="fa fa-twitter" /></a>
        <a href="#"><i className="fa fa-linkedin" /></a>
        <a href="#"><i className="fa fa-github" /></a>
      </div>
      <div className="footer-left">
        <p className="footer-links">
          <link rel="stylesheet" href="footer.css" />
          <a className="link-1" href="index.html">  Home </a>
          <a href="privacy.html">  Privacy Policy</a>
          <a href="disclaimer.html">  Disclaimer </a>
          <a href="about.html">  About </a>
          <a href="contactus.html">  Contact Us </a>
        </p>
        <p>©2023 Clubee Website. All rights reserved.</p>
      </div>
    </footer>
  </div></div>





    )
}
 export default  Bs