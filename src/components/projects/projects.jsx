import './projects.css';
import Yelp from '../../img/yelp.png';
import Quote from '../../img/quote.png';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

function Projects(){
    return(
        <div>
            <h1 className='ProjectTitle'><span>Projects</span></h1>

            <div className='Project-Container'>
                <div className='Project-card'>
                    <div className='card-header'>
                    <img src={Yelp} alt="YelpCamp" />
                    </div>
                    <div className='Project-body'>
                        <span> Yelp-Camp </span>
                        <p>  <u>YelpCamp</u> is an application where you can search and create campgrounds around the world.
                            You can view camps, see the photos, rate and comment one once you're logged in.
                        </p>
                        <p>
                            Buit with:
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS(Bootstrap)</li>
                                    <li>JavaScript</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>ExpressJS</li>
                                </ul>
                            Includes:
                                <ul>
                                    <li>Authentication</li>
                                    <li>Authorization</li>
                                    <li>Cookies & Sessions</li>
                                    <li>Geocoding & Maps</li>
                                </ul>
                        </p>
                        <a href="https://github.com/FlorianChazizi/YelpCamp"><AiOutlineGithub /></a>
                        <a href="https://morning-atoll-77658.herokuapp.com"><AiOutlineLink /></a>
                    </div>

                </div>

                <div className='Project-card'>
                    <div className='card-header'>
                    <img src={Quote} alt="Quote" />
                    </div>
                    <div className='Project-body'>
                        <span> Get a Quote! </span>
                        <p>  <u>Quote App</u> is an simple application where you can request a life Quote through an API. 
                        </p>
                        
                        <p>
                            Buit with:
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS(Bootstrap)</li>
                                    <li>JavaScript</li>
                                    <li>REACT</li>                            
                                </ul>
                            Includes:
                                <ul>
                                    <li>API</li>
                                </ul>
                        </p>
                        <a href="https://github.com/FlorianChazizi/QuoteApp"><AiOutlineGithub /></a>
                    </div>

                </div>

                
                

                





            </div>

            
                
            

        </div>
    )
}

export default Projects;