import React from 'react'
import homepage from '../img/homepage.png'
import what from '../img/what.png'
export default function What() {
  return (
    <div>
        <section className="what mt-5 pt-5">
    <div className="row g-4">
    <div className="col-lg-6 order-lg-2">
        <div className="what-img">
          <img src={homepage} alt="homepage"/>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="nft">
          <h3 className="pt-5">What is an NFT?</h3>
          <p>A non-fungible token (NFT) is a digital certificate of ownership built on blockchain technology, that
            contains
            the origin, the history, and all activities surrounding a digital asset. They can be viewed by the public
            and
            cannot be forged.</p>
          <p>NFTs are digital collectables that can take the form of an image, video or song. In addition, they may have
            built in utilities or perks.</p>
          <a className="more" href="#">
            <button className="btn btn-secondary">Learn More</button></a>
        </div>
      </div>
      </div>
      <div className="row g-4">
      <div className="col-lg-6">
        <div className="about-img">
          <img src={what} alt="What"/>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about pt-5 mt-5">
          <h3>What's unique about Boosteum?</h3>
          <p>We are the first NFT platform specifically for nonprofit fundraising.</p>
          <p>
          <ul className="text-left">
            <li>Partners with forward looking nonprofits and businesses to create fundraising campaigns
              with no upfront costs</li>
            <li>Develops custom tailored fundraising campaigns that includes everything from artist selection to
              campaign
              design and marketing</li>
            <li>Offers low gas and transaction fees for buying and selling NFTs</li>
            <li>Creates and validates NFT perks and utilities such as tickets to special events, exclusive memberships
              and more...</li>
            <li>Distributes profits among multiple wallet addresses</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
