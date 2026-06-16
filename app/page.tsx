import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Enterprises } from '@/components/Enterprises'
import { WhyVisit } from '@/components/WhyVisit'
import { Training } from '@/components/Training'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Enterprises />
      <WhyVisit />
      <Training />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}