import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LabLogistics from '@/components/LabLogistics';
import Services from '@/components/Services';
import TemperatureTiers from '@/components/TemperatureTiers';
import PackagingSpecs from '@/components/PackagingSpecs';
import SampleTypes from '@/components/SampleTypes';
import Process from '@/components/Process';
import WhyHocean from '@/components/WhyHocean';
import Monitoring from '@/components/Monitoring';
import Compliance from '@/components/Compliance';
import PhotoBand from '@/components/PhotoBand';
import Destinations from '@/components/Destinations';
import FlightSchedule from '@/components/FlightSchedule';
import CtaBanner from '@/components/CtaBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LabLogistics />
        <Services />
        <TemperatureTiers />
        <PackagingSpecs />
        <SampleTypes />
        <Process />
        <WhyHocean />
        <Monitoring />
        <Compliance />
        <PhotoBand />
        <Destinations />
        <FlightSchedule />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
