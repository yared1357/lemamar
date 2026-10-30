import Navbar from '@/components/Navbar';
import MobileHeader from '@/components/MobileHeader';
import BottomNav from '@/components/BottomNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Training from '@/components/Training';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-jaguar-cream text-jaguar-ink">
      <Navbar />
      <MobileHeader />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <About />
        <Training />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      <FloatingButtons />
    </div>
  );
}

export default App;
