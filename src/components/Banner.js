import React ,{useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'
import {useHistory} from 'react-router-dom'

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <h3><Search /></h3>}
                <Button variant="outlined" className="banner__searchButton" onClick={() =>setShowSearch(!showSearch)}>
                    Search Dates</Button>
            </div>
           <div className="banner__info">
                <h1>Get out and strech your imagination</h1>
                <h5>Plan a different kind of getaways to uncover the hidden gems near you</h5>
                <Button variant='outlined' onClick={() =>history.push('/search')}>Explore Nearby</Button>
            </div> 
        </div>
    )
}

export default Banner
