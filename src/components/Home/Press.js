import React, {Component} from 'react';

import et from './img/et.png';
import yourstory from './img/yourstory.png';
import toi from './img/toi.png';
import inc42 from './img/inc42.png';

const press = [
  {
    name: 'Economic Times',
    link: 'https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/anand-mahindra-invests-1-mln-in-gurugram-based-startup-hapramp/articleshow/76297705.cms',
    pic: et
  },
  {
    name: 'Yourstory',
    link: 'https://yourstory.com/2020/06/anand-mahindra-invests-gurugram-startup-hapramp',
    pic: yourstory
  },
  {
    name: 'Times of India',
    link: 'https://timesofindia.indiatimes.com/business/india-business/mahindra-bets-on-social-networking-co-hapramp/articleshow/76310782.cms',
    pic: toi
  },
  {
    name: 'Inc 42',
    link: 'https://inc42.com/features/30-startups-to-watch-the-startups-that-caught-our-eye-in-july-2020/',
    pic: inc42
  } 
]

export default class Press extends Component {
  render() {
    return (
      <section className="mt-24 md:mt-32 px-4 sm:px-8 md:px-10 mb-16 md:mb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl uppercase font-bold">In Press</h2>
        <div className="flex flex-wrap items-center justify-start mt-10 sm:mt-12 md:mt-16">
          {press.map(pr => {
            return (
              <a key={pr.link} href={pr.link}  target="_blank" className="mr-8 mt-5 sm:mt-0 mb-8">
                <img src={pr.pic} alt={pr.name}/>
              </a>
            )
          })
}
        </div>
      </div>
    </section>
    )
  }
}
