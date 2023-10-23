import React from 'react'
import './Know.scss'

function Know() {
  return (
    <div className='Know'>
      <div className="container">
        <div id='2' className="know__inner">
          <div className="know__top">
            <h2>
              What i do
            </h2>
          </div>
          <div className="know__bottom">
            <ul className='know__list'>
              <li className='know__item'>
                <span className='know__span'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-RDFfx8lNFj1YBveyklHwoyjHv59lnExRrMz6670vcOkYKay0H2NCxV4he2VK61xHOI&usqp=CAU" alt="img" /></span>
                <h3>Html</h3>
              </li>
              <li className='know__item'>
                <span className='know__span'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwg4gs1NStkYti6exgaxkAbw11zj9Z3mbAi8LzW62gsy3BmWNDusrjQ_vb25xnvhgpXs&usqp=CAU" alt="img" /></span>
                <h3>sass</h3>
              </li>
              <li className='know__item'>
                <span className='know__span'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuA3rfXk2RKmvDkgBGOUxIkeW4pG7B5V_JBnMNkVWhhVbmh4zlgw-YVgT7qjddadH6CDo&usqp=CAU" alt="img" /></span>
                <h3>
                react js
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Know
