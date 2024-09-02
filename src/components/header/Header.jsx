import { Link } from "react-router-dom";
import { Email, Linkedin, SelfPortrait } from "../../assets/image";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content grid items-center">
                    <div className="header-intro">
                        <div className="flex items-end header-intro-wrapper">
                            <img src={SelfPortrait} alt="avatar" className="avater" />
                        </div>
                        <p className="header-text text text white">
                            My name is Jesse Carnahan and I would like to showcase for you my
                            own experiences and let you get to know me a little bit better.
                            I have found the software developer world fascinating and rewarding,
                            I'll be it a bit challenging. Being able to create and build
                            my own projects has me wanting to do more bigger and better things.
                        </p>
                    </div>
                    <div className="header-contact">
                        <h1 className="header-name text-white">
                            Jesse Carnahan, <br /> Java Developer
                        </h1>
                        <ul className="contact-info-list grid text-white">
                            <li className="grid items0start info-item">
                                <span className="info-item-icon">
                                    <FaEnvelope size={13} />
                                </span>
                                <p className="info-item-text">
                                    Email: <span className="text">carnahanjesse97@gmail.com</span>
                                </p>
                            </li>
                            <li className="grid items0start info-item">
                                <span className="info-item-icon">
                                    <FaPhone size={13} />
                                </span>
                                <p className="info-item-text">
                                    Phone: <span className="text">+1 (479) 234-8315</span>
                                </p>
                            </li>
                            <li className="grid items0start info-item">
                                <span className="info-item-icon">
                                    <FaLocationDot size={13} />
                                </span>
                                <p className="info-item-text">
                                    Address: <span className="text">Conway, Ar</span>
                                </p>
                            </li>
                            <li className="grid items0start info-item">
                                <span className="info-item-icon">
                                    <FaLink size={13} />
                                </span>
                                <p className="info-item-text">
                                    Website: <span className="text">https://github.com/JesseCarnahan</span>
                                </p>
                            </li>
                        </ul>

                        <ul className="contact-social-list flex items-center">
                            <li className="social-item">
                                <Link to="/">
                                    <img src={Linkedin} />
                                    <span className="tooltip text">Linkdin</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="contact-social-list flex items-center">
                            <li className="social-item">
                                <Link to="/">
                                    <img src={Email} />
                                    <span className="tooltip text">Email</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header