import React from 'react'
import './Aboutmore.scss'
function Aboutmore() {
    return (
        <div className='Aboutmore'>
            <div className="container">
                <div id='about__more' className="aboutmore__inner">
                    <div className="aboutmore__info">
                        <span>
                            <h2>About</h2>
                        </span>
                        <span className='aboutmore__info-span2'>
                            <p>Hello my name is Alim Sarazbek Azbekovich I was born in Uzbekistan I am now studying at the front I have already graduated from the pound and the plane remains after that and then I will be a programmer This is my first</p>
                        </span>

                    </div>
                    <ul className='aboutmore__list'>
                        <li className='aboutmore__item'>
                            <a className='aboutmore__link' href="#/">
                                <div className="aboutmore__inner">
                                    <span className='aboutmore__inner1'></span>
                                </div>
                                <span className='aboutmore__link-span'>
                                    <h4>Full Name</h4>
                                    <p>Alimov Sarvar Azizbekovich</p>
                                </span>
                            </a>
                        </li>
                        <li className='aboutmore__item'>
                            <a className='aboutmore__link'  href="https://mail.google.com/mail/u/0/#inbox">
                                <div className="aboutmore__inner">
                                    <span className='aboutmore__inner1'></span>
                                </div>
                                <span className='aboutmore__link-span'>
                                    <h4>Email Address</h4>
                                    <p><a href="https://mail.google.com/mail/u/0/#inbox">alimovsarvar@gmail.com</a></p>
                                </span>
                            </a>
                        </li>
                        <li className='aboutmore__item'>
                            <a className='aboutmore__link' href="#/">
                                <div className="aboutmore__inner">
                                    <span className='aboutmore__inner1'></span>
                                </div>
                                <span  className='aboutmore__link-span3'>
                                    <h4>Git Hub</h4>
                                    <p><a href="https://github.com/sarvaralimovq/sarvaralimov"></a>sarvaralimovq</p>
                                </span>
                            </a>
                        </li>
                        <li className='aboutmore__item'>
                            <a className='aboutmore__link' href="tel:998973394343">
                                <div className="aboutmore__inner">
                                    <span className='aboutmore__inner1'></span>
                                </div>
                                <span className='aboutmore__link-span4'>
                                    <h4>Phone</h4>
                                    <p><a href="tel:998973394343">998973394343</a></p>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Aboutmore
