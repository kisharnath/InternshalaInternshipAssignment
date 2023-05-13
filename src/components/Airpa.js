import React from 'react'

export default function Airpa(props) {
  return (
    <div className='first'>
      <br />
      <div className="Main">
        <div className="heading">
          <span className='heads'>{props.heading}</span><br /><br />
          <span className='secondpara'>{props.para2}</span>
        </div>
        <img className='img' src={props.img} alt="" />
       
        </div>

      <div className='para'>
        {props.para}
      </div>
      <div className='footer'>
      <a href="">{props.alink}</a> <span className='arrow'>&rarr;</span>

      </div>
    </div>
  )
}
