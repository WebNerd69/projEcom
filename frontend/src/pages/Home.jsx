import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import OurPolicies from '../components/OurPolicies'
import Newsletter from '../components/Newsletter'

const Home = () => {
     return (
          <div>
               <Hero />
               <LatestCollection />
               <BestSellers/>
               <OurPolicies/>
               <Newsletter/>
          </div>
     )
}

export default Home;
