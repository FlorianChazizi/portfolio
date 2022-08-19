import './home.css';
import img from '../../img/tri.png';
import {BsMouse} from 'react-icons/bs';
import Navbar from '../navbar/navbar';


function Home() {
    return(
        
        <div id="home" className='container home-container'>
            <Navbar />
            <div className="Logo">
                
                <img src={img} alt="Triquetra" />
            </div>

            <a href="#footer" className='scroll-down'>
                <hr />
                <BsMouse className='scroll' />
                <hr />
            </a>
            <h2><span className='AboutTitle'>About me </span>
            <p className='IntroAboutMe'>Hello,
              I'm <i> Florian Chazizi</i> a Junior Web Developer.
              <br />                                          
            </p>
            <hr className='lego' />                                   
            <p className='BodyAboutMe'>I’m a software engineer undergraduate student specializing
                 in designing and building web applications.
             </p>
             <hr className='lego' />    
            <p className='BodyAboutMe'> This period I'm studying ReactJS with wich this portfolio is made.                       
            </p><hr className='lego' /> 
            <p className='BodyAboutMe'> In my free time I like to read books, learn new things about the technologies that I use, going for walks and coffee with friends :)

            </p>
            </h2>

            

        </div>

    );
}


export default Home;