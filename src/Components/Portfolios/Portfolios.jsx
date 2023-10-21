import React from 'react'
import { dataPortfolios } from '../../lib/data'
import './Portfolios.scss'
function Portfolios() {
    return (
        <div className='Portfolios'>
            <div className="container">
                <div className="portfolios__inner">
                    <div className="portfolios__top">
                        <h2>
                            Portfolio Alimov Sarvarbek
                        </h2>

                    </div>
                    <ul className='portfolios__list'>
                        {
                            dataPortfolios?.map((item, index) => (
                                <li className='portfolios__item' key={index}>
                                    <a href={item.info}>
                                    <img src={item.img} alt="img" />
                                        <h3>{item.name}</h3>
                                        <span className='portfolios__span'>
                                            <a href={item.info}>{item.info}</a>
                                        </span>
                                    </a>
                                       
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Portfolios
