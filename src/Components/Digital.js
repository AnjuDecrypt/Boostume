import React from 'react'
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.png'
import card3 from '../img/card3.png'
export default function Digital() {
  return (
    <div>
      <section className="digital pt-2 mb-4">
    <div className="container">
      <div className="text-center">
        <h2>Digital Collectibles with Perks</h2>
        <p className="pb-4">Boosteum ensures that collectors and donors benefit more from giving.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 m-auto custom text-center">
            <div className="card position-relative">
              <div className="border_sides"></div>
              <div className="border_sides_right"></div>
          
                <img src={card1} alt="card1"></img>
              
            </div>
            <p>Unique Experiences</p>
          </div>
          <div className="col-sm-6 col-lg-4 m-auto custom text-center">
            <div className="card">
              <div className="border_sides"></div>
              
                <img src={card2} alt="card2"></img>
             
            </div>
            <p>Physical Rewards</p>
          </div>
          <div className="col-sm-6 col-lg-4 m-auto custom text-center">
            <div className="card">
              <div className="border_sides"></div>
              <div className="border_sides_right2"></div>
              <img src={card3} alt="card3"></img>
            </div>
            <p>Digital Rewards</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
