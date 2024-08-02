import Destination from './Components/Destination'
import Features from './Components/Features'
import Hero from './Components/Hero'
import Newsletter from './Components/Newsletter'
import Services from "./Components/Services"
import Sponsor from './Components/Sponsor'
import Testimonials from './Components/Testimonials'
import TravelPoint from './Components/TravelPoint'

export default function Home() {
  return (
    <>
       <Hero />
      <Sponsor />
      <Services />
      <Destination />
      <TravelPoint />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  
  )
}