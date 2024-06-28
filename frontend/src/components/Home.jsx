import React from 'react';
import { Link } from "react-router-dom";
import './../styles/homes.css'



const Home = () => {
  return (
    
<div>
  <meta charSet="UTF-8" />
  <title>AAC Final Project</title>
  <link rel="stylesheet" href="main.css" />
  <link rel="stylesheet" type="text/css" href="main.css" />
  <div className="pooji">
    <nav>
      <ul>
        {/* <li><a href="/mainevents">Home</a></li> */}
                          
        <li><a href="/home">Home</a></li>
                <li><a href="/spices">Spices</a></li>
                <li><a href="/rythms">Rythms</a></li>
                <li><a href="/aac">AAC</a></li>
                <li><a href="/ecell">ECell</a></li>
                {/* <li><a href="/aac">AAC</a></li> */}
                <li><a href="/spirals">Spirals</a></li>
                <li><a href="/eventsummary">Events</a></li>
                <li><a href="/event">New Event</a></li>
      </ul>
    </nav>
    <homeSlider>
      
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div className="slideshow-container">
    <slide><div className="mySlides fade">
        <img src="https://cdn.sanity.io/images/dqyhuxze/production/ae77420c9c4441df27104fa2570ab1528eef0af9-1079x573.jpg?w=1079&h=573&auto=format" style={{width: '100%', height: 600}} />
      </div>
     
      <div className="mySlides fade">
        <img src="https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1682599705.png" style={{width: '100%', height: 600}} />
      </div>
      <div className="mySlides fade">
        <img src="https://i.ytimg.com/vi/lFRShqvehuM/maxresdefault.jpg" style={{width: '100%', height: 600}} />
      </div>
     </slide>
       
    </div>
    
    </homeSlider>
    <br />
    <br /><br />
    <div style={{textAlign: 'center'}}>
      <span className="dot" /> 
      <span className="dot" /> 
      <span className="dot" /> 
    </div>
  </div>
  <h2 className="heading">Latest Posts</h2>
  <link rel="stylesheet" href="latest.css" />
  <div className="container">
    <div className="post">
      <div className="post_img">
        <img src="https://i.pinimg.com/originals/d8/fd/96/d8fd96796da5cdb79902403d6d863a1e.jpg" alt />
      </div>
      <div className="post_info">
        <div className="post_date">
          <span>02 Jul 23</span>
          <span>Spirals GRIET</span>
        </div>
        <h1 className="post_title">M Akshaya Reddy</h1>
        <p className="post_text">
          Come! Fall in love with the Spirals Carnival
          The Spirals Carnival is on 8th of July 2023. 
        </p>
        <a href="#" className="post_cta">Read More</a>
      </div>
    </div>
    <div className="post">
      <div className="post_img">
        <img src="https://i.pinimg.com/564x/a8/1b/5d/a81b5d45b7e082ae0569aac333fa402c.jpg" alt />
      </div>
      <div className="post_info">
        <div className="post_date">
          <span>02 Jul 23</span>
          <span>Team Spirals</span>
        </div>
        <h1 className="post_title">B Saketh Reddy</h1>
        <p className="post_text">
          Alvida to our General Secretary-Bharadwaj Cheruvu
          A vote of thanks to out General Secretary, Bharadwaj Cheruvu.
        </p>
        <a href="#" className="post_cta">Read More</a>
      </div>
    </div>
  </div>
</div>

    


  )
}

  
  

export default Home