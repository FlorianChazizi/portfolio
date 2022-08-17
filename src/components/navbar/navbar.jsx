import './navbar.css';

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsArrowDownCircle } from 'react-icons/bs';

function Navbar(){
    return(
    <div className="navigation">
        <a href="#home">
            <AiOutlineHome className='icon active-nav' />
            
        </a>
        <a href="https://github.com/FlorianChazizi" className='contact github'>
             <AiOutlineGithub className='icon'/>
        </a>
                
        <a href="https://www.linkedin.com/in/florian-chazizi-191b00175/" className='contact linkedin'>
            <AiOutlineLinkedin className='icon'/>
        </a>

        <a href="https://www.instagram.com/giannisxazizi/" className='contact instagram'>
            <AiOutlineInstagram className='icon'/>
        </a>
        <a href="#footer">
            <BsArrowDownCircle className='icon' />
        </a>
    </div>
    )
}

let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach((icon) => {
    changeactive();
    icon.classList.add('active-nav');
});

function changeactive() {
    Icons.forEach(icon => {
        icon.classList.remove('active-nav')
    })
}

export default Navbar;
