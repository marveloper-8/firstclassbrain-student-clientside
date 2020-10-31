import React, { Component } from 'react'
import './css/Slides.scss'

let classNames = require('classnames')

export class Slides extends Component {
  constructor(props) {
    super(props);
    
    this.IMAGE_PARTS = 4;
    
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;
    
    this.state = { 
      activeSlide: -1, 
      prevSlide: -1, 
      sliderReady: false,
      slides: [
        {
          city: 'FIRST CLASS BRAIN APP ensures that our students don’t just go to school but understand in clear terms what is being taught in school.',
          img: 'https://extras.firstclassbrain.com/one.png',
        },
        {
          city: 'FIRST CLASS BRAIN give students access to teaching materials dictated by the school curriculum to support teachers and ensure student proactiveness.',
          img: 'https://extras.firstclassbrain.com/two.png',
        },
        {
          city: 'Conventional Classroom Teaching, Illustrative Teaching, Text Notes, Tests, Opportunity to chat with Teachers/Career Guide',
          img: 'https://extras.firstclassbrain.com/three.png',
        },
      ]
    };
  }
  
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  
  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.state.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  
  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
      <div className="background-slide-overlay"></div>
        {/* <p className="slider__top-heading">Travelers</p> */}
        <div className="slider__slides">
          {this.state.slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
              key={slide.city}
              >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading title">{slide.city}</h3>
                {/* <p className="slider__slide-readmore">read more</p> */}
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
  }
}

export default Slides
