import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Audience from './components/Audience'
import { Why, Process } from './components/WhyProcess'
import Team from './components/Team'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Seo from './components/Seo'

export default function App() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Hero /><About /><Services /><Audience /><Why /><Process /><Team /><Contact /><CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
