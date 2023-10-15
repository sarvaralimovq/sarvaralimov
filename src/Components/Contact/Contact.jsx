import React, { useRef } from 'react'
import './Contact.scss'
function Contact() {
    const ref1 = useRef(0)
    const ref2 = useRef(0)
    const ref3 = useRef(0)
    const ref4 = useRef(0)
   
    function fn (){
        if(ref1.current.value == 0){
            alert('Name kriting')
        }
        if(ref2.current.value == 0){
            alert('Last name kriting')
        }
        if(ref3.current.value == 0){
            alert('Email kriting')

        }
        
        
    }
  return (
    
    <div className='Contact'>
      <div className="companents">
        <div className="contact__inner">
            <div className="contact__top">
                <h2>
                Get in touch
                </h2>
                
            </div>
            <div className="contact__bottom">
            
                    <div className="big">
                    <input ref={ref1} type="text" placeholder='Name'  />
                    <input ref={ref2} type="text" placeholder='Last name' />
                    <input ref={ref3} type="text" placeholder='Email' />
                    <input ref={ref4} type="text" placeholder='Phone number' />
                    <span onClick={fn} className='btn'><button>Submit now</button></span>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
