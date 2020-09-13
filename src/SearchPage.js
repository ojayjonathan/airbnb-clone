import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './components/SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
              <h1>Stays Nearby</h1>
                <p>62 stays -26 august to 30 august - 2 guests
                </p>
                <Button variant="outlined">Cancelation Flexibility</Button>
                 <Button variant="outlined">Type of place</Button>
                 <Button variant="outlined">Price</Button>
                 <Button variant="outlined">Rooms and beds</Button>
                 <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
            img="images/Private_ modern studio overlooking coffee farm.jpg"
            location="Private room center of london"
            title="Stay at this prestigous Edwardian House"
            description="1 guest -1 bedroom -1 bed -1.5 shared bathroom -Wifi - Kitchen -
                      Free parking -Washing machine" 
            star={4.3} 
            price="$30 / night"
            total="$117 total" />
            <SearchResult 
            img="images/Sheerdrop _ Idyllic country home in Nakuru.jpg"
            location="Private apartment Nakuru"
            title="Stay at this prestigous Edwardian House"
            description="1 guest -1 bedroom -1 bed -1.5 shared bathroom -Wifi - Kitchen -
                      Free parking -Washing machine" 
            star={5.01} 
            price="$30 / night"
            total="$117 total" />
            <SearchResult 
            img="images/Spacious Cosy 1 BR Apartment within Naivasha Town.jpg"
            location="Private room center of london"
            title="Stay at this prestigous Edwardian House"
            description="Spacious Cosy 1 BR Apartment within Naivasha" 
            star={4.73} 
            price="$30 / night"
            total="$117 total" />
        </div>
        
    )
}

export default SearchPage