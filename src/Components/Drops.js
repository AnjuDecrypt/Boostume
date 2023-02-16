import React from 'react'
import drop from "../img/MicrosoftTeam.png"
import Profile from "../img/Profile.png"
import Polygon from "../img/Polygon.png"
import Pluse from "../img/Pluse.png"
import clock from "../img/clock.png"

export default function Drops() {
  return (
    <div>
       <section class="live mt-5 pt-3">
    <div class="container">
      <div class="row">
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 m-auto">
          <div class="drop text-center">
            <h2>Live Drops</h2>
            <button class="buyNowBTN mb-4">Buy Now </button>
          </div>
          <div class="drop-card">
            <div class="card-img">
            <img src={drop} alt="MicrosoftTeam"></img>
            </div>
            <div class="card-date">
              <h2>29</h2>
              <p>Nov</p>
            </div>
            <div class="mic-img">
             <img src={Profile} alt="Profile" className='img-fluid'></img>
            </div>
            <div class="card-contact text-left p-3">
              <div class="card-title mb-4">
                <h2>GHF First Edition</h2>
              </div>
              <div class="btc-items d-flex">
                <div class="card-items align-items-center d-flex justify-content-center me-3">
                  <img src={Polygon} class="item-img" alt="Polygon"></img>
                  <p>50 USDC($50 USD)</p>
                </div>
                <div class="btc d-flex justify-content-center me-3 align-items-center">
                  <div class="img-box">
                    <img src={Pluse} class="me-2" alt="Pluse"></img>
                  </div>
                  <p>500 items</p>
                </div>
              </div>
              <div class="time">
                <img src={clock} class="me-2" alt="clock"/>
                <p>
                  <span>07:00:00 Eastern Time</span>
                </p>
              </div>
            </div>
          </div>
          <div class="view d-flex justify-content-center align-items-center mt-4">
            <a href="/non-profit-nft-drops">View All</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
