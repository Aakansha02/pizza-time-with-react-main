import React from 'react'
import SlideOne from '../../assets/images/img-one.jpeg'
import SlideTwo from '../../assets/images/carbonara.jpeg'
import SlideThree from '../../assets/images/img-three.jpeg'
import SlideFour from '../../assets/images/img-four.jpeg'


export default class AboutSectionOne extends React.Component {
  render() {
    return (
      <article className="section-one">
        <section className="section-one-content">
          <h2>About us</h2>
          <h3>More than delicious food</h3>
          <p>
            Founded in 1982 we bring pizza slice by slice to the next level! Unique branding and being in the pizza industry is the formula to out success. We do understand what people want and convert desires to unique experiences of taste. Freshness, orignality and quality is only the small part of out priorities. Affortable costs, located almost anywhere you go, amazing online operational system to order food in one click. Easy to navigate pre-order options and amazing options for corporate parties! At Pizaa Time we care about you because you are the one who makes us special!
          </p>
          <div className="section-one-glass"></div>
        </section>
        <section className="aboutus-img-grid">
          <img src={SlideOne} alt="" aria-hidden="true" />
          <img src={SlideTwo} alt="" aria-hidden="true" />
          <img src={SlideThree} alt="" aria-hidden="true" />
          <img src={SlideFour} alt="" aria-hidden="true" />
        </section>
      </article>
    )
  }
}
