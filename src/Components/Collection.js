import React from 'react'
import FACE1 from '../img/FACE1.png'
import FACE2 from '../img/FACE2.png'
import FACE3 from '../img/FACE3.png'
import Acquire from '../img/Acquire.png'
import show from '../img/show.png'
import grow from '../img/grow.png'

export default function Collection() {
  return (
    <div>
       <section className="collection text-center">
    <div className="container">
      <div className="collection-card">
        <div className="main">
          <div className="main-img d-flex justify-content-center">
            <a>
              <img src={FACE1} className="face-img me-4" alt="FACE1"/>
            </a>
            <a>
              <img src={FACE2} className="face-img me-4" alt="FACE2"/>
            </a>
            <a>
              <img src={FACE3} className="face-img" alt="FACE3"/>
            </a>
          </div>
          <div className="start">
            <h2 className="text-center position-relative">Start your collection for good</h2>
          </div>
          <div className="start-card pt-5 pb-3">
            <div className="item">
              <div className="card-upper align-items-center
              d-flex justify-content-flex-start">
                <div className="left">
                  <img src={Acquire} alt="Acquire" className="me-4"/>
                </div>
                <div className="right">
                  <h3>Acquire</h3>
                </div>
              </div>
              <div className="contact mt-3">
                <p>Invest in a cause & unique works from popular emerging artists. With the ability to sell them on any
                  digital marketplace.</p>
              </div>
            </div>
            <div className="item">
              <div className="card-upper align-items-center
              d-flex justify-content-flex-star">
                <div className="left">
                  <img src={show} alt="show" className="me-4"/>
                </div>
                <div className="right">
                  <h3>Show Off</h3>
                </div>
              </div>
              <div className="contact mt-3">
                <p>Spread the word of your charitable support by displaying your NFT collection to friends and the
                  community.</p>
              </div>
            </div>
            <div className="item">
              <div className="card-upper align-items-center
              d-flex justify-content-flex-star">
                <div className="left">
                  <img src={grow} alt="grow" className="me-4"/>
                </div>
                <div className="right">
                  <h3>Grow</h3>
                </div>
              </div>
              <div className="contact mt-3">
                <p>Build your NFT collection and Boosteum Perks while also helping your favorite nonprofits increase
                  their footprint in the community.</p>
              </div>
            </div>
          </div>
          <a href="#">
            <button className="btn btn-secondary">View Drops</button>
          </a>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
