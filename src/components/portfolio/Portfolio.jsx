import React from 'react';
import './portfolio.css';
import Menu from '../../assets/img1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio-item">
          <div className="portfolio__item-image">
            <img src={Menu} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/ayoubzouine94" className='btn' >Github</a>
            <a href="https://.com" target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio__item-image">
            <img src={Menu} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/ayoubzouine94" className='btn' >Github</a>
            <a href="https://.com" target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio__item-image">
            <img src={Menu} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/ayoubzouine94" className='btn' >Github</a>
            <a href="https://.com" target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio__item-image">
            <img src={Menu} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/ayoubzouine94" className='btn' >Github</a>
            <a href="https://.com" target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio__item-image">
            <img src={Menu} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/ayoubzouine94" className='btn' >Github</a>
            <a href="https://.com" target="_blank" className='btn btn-primary' rel="noreferrer">Live Demo</a>
          </div>
        </article>






    
       

      </div>
    </section>
  )
}

export default Portfolio