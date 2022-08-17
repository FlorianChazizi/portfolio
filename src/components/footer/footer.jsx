import './footer.css';

import { BsMouse } from 'react-icons/bs';
import img from '../../img/tri.png';

function Footer() {
    return (
        <div id='footer' className="container footer-container">
            <h1> 
                <a href="#home">
                    <h2>
                        <BsMouse />- Scroll up-
                    </h2>
                </a>
                <p className='footer-text'>&copy; 2022</p> 
           <p className='footer-text'>Created By: Chazizi Florian</p>
           <hr />
           <img className='footer-img' src={img} alt="" />
            </h1>
          
        </div>
    )
}

export default Footer;