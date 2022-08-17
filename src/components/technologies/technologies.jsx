import './technologies.css';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';

function Technologies() {
    return (
        <div>
            <h1 className='TechTitle'><span>Technologies</span></h1>
        <div className='containers'>
                                                {/* Front End Card */}
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <span className="stars"></span>
                    <h2 className='frontend'>Front End</h2>
                    <p className="frontend">
                        <ul><li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React (current studying)</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="face face2">
                <h2>Front-End - <FaReact /></h2>
            </div>
        </div>
                                                {/* Back End Card */}
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <span className="stars"></span>
                    <h2 className='backend'>Back End</h2>
                    <p className="backend">
                        <ul>
                            <li>NodeJs</li>
                            <li>ExpressJs</li>
                            <li>API</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="face face2">
                <h2>Back-End - <FaNodeJs /></h2>
            </div>
        </div>
                                                {/* Database Card */}
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <span className="stars"></span>
                    <h2 className='database'>Databases</h2>
                    <p className="database">
                        <ul>
                            <li>SQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="face face2">
                <h2>Database - <FiDatabase /></h2> <br />
                <h2> </h2>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Technologies;