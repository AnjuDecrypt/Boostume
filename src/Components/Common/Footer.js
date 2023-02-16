import React from 'react'
import logo1 from '../../img/logo1.png'
import { FaInstagram, FaFacebookF,  FaTwitter, FaLinkedinIn } from "react-icons/fa/";
export default function Footer() {
  return (
    <div>
      <section className="footer p-4">
        <div className="container">
          <div className="row">
            <div data-test="col" className="col-sm-12 col-lg-3 last_order">
              <a href="/">
                <img src={logo1} alt="logo1" class="footer-logo align-top"></img></a>
              <p className="footer-para">Boosteum enables nonprofits to launch engaging fundraising campaigns to reach new
                audiences by bringing
                together Web3 Technologies and an Ecommerce Platform that is supported with Full Service Marketing
                Capabilities.</p>
              <div className="social-icon d-flex">
              <ul className="d-flex ps-0">
              <li className="">
                            <a href="/"> <FaInstagram /> </a>
                        </li>
                        <li className="">
                            <a href="/"> <FaFacebookF /> </a>
                        </li>
                        <li className="">
                            <a href="/"> <FaTwitter /> </a>
                        </li>
                        <li className="">
                            <a href="/"> <FaInstagram /> </a>
                        </li>
                        <li className="">
                            <a href="/"> <FaLinkedinIn /> </a>
                        </li>
                        </ul>
              </div>
            </div>
            <div data-test="col" className="col-sm-4 col-lg-2">
              <ul className="footer-ul-list ps-0">
                <li className="list-unstyled list-height">
                  <a href="/artist-enquiry">I am an Artist</a>
                </li>
                <li className="list-unstyled list-height">
                  <a href="/non-profit-enquiry">I am Fundraising</a>
                </li>
                <li className="list-unstyled list-height"><a href="/">Resources</a>
                </li>
                <li className="list-unstyled list-height">
                  <a href="/non-profit-blockchain-fundraising-platform">About</a>
                </li>
              </ul>
            </div>
            <div data-test="col" className="col-sm-4 col-lg-2">
              <ul className="footer-ul-list ps-0">
                <li className="list-unstyled list-height"><a href="/blogs/help-center">How to buy an NFT</a></li>
                <li className="list-unstyled list-height">
                  <a href="/blogs/help-center">FAQ</a>
                </li>
                <li className="list-unstyled list-height">
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>
            </div>
            <div data-test="col" className="col-sm-4 col-lg-2">
              <ul className="footer-ul-list ps-0">
                <li className="list-unstyled list-height">
                  <a href="/terms-and-conditions">Terms of Use</a>
                </li>
                <li className="list-unstyled list-height">
                  <a href="/privacy-policy">Privacy</a>
                </li>
              </ul>
            </div>
            <div data-test="col" className="col-sm-12 col-lg-3 newsletter_col">
              <div id="om-zdoqxmk7fjzey9faxdtb-holder">
              </div>
            </div>
          </div>
          <div data-test="row" className="row custom_footer_row">
            <div data-test="col" className="col-sm-12 col-lg-12 last_order text-center mt-4">
              <p className="footer_copyright">© Copyright 2022 - Boosteum&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Powered by
                <a className="poweredBy" href="https://blockchainaustralia.com.au/" target="_blank" rel="noreferrer">Blockchain
                  Australia</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
