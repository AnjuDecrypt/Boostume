import React from 'react'
import BannerDest from '../BannerDest'
import Digital from '../Digital'
import Drops from '../Drops'
import What from '../What'
import Collection from '../Collection'
export default function Home() {
  return (
    <div>
      <section className="home_page d-flex align-items-center">
        <div className="container">
          <div className="banner">
            <h2>A Next Gen Charitable Fundraising Platform & Marketplace</h2>
            <p>Enabling nonprofits to raise money in new ways through the blockchain.</p>
          </div>
        </div>
      </section>
      <BannerDest />
      <Digital />
      <Drops />
      <What />
      <Collection />
    </div>
  )
}
