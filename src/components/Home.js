import React from 'react'
import './Home.css'
import Card from './Card'
import Banner from "./Banner"
function Home() {
    return (
        <div>
            <Banner />
            <div className="home_section top">
                <Card src="images/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.webp" 
                title="Unique stay"
                description="spaces that are more than places for sleep" />

               <Card src="images/15159c9c-9cf1-400e-b809-4e13f286fa38.webp" 
                title="Online experience"
                description="spaces that are more than places for sleep" />

                <Card src="images/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.webp" 
                title="Entire homes"
                description="spaces that are more than places for sleep" /> 

            </div>
            <div className="section2">
                <h1>Broadway Online Experiences</h1>
                <p>
                    Join live, interactive performances and conversations with <br/> people from Broadway and beyond. Without leaving home.
                </p>
                <div className="home_section">
                    <Card src="images/e77da774-9e72-46d6-a7fd-7d159f823046.jpg" 
                    description="Day in life of Las Vegas Dancer" />

                <Card src="images/38aeacb5-7e77-4bf6-a813-754605020922.jpg" 
                    description="Share an evening of music and healing" />

                    <Card src="images/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg" 
                    description="Night of magic and mind-reading" /> 

                </div>
            </div> 

        </div>
    )
}

export default Home
