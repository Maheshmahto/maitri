import Header from '../components/Header'
import HeroSection from '../components/Herosection'
import FutureSection from '../components/FutureSection'
import CommitmentSection from '../components/CommitmentSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FutureSection />
      <CommitmentSection />
      <Footer/>
    </main>
  )
}