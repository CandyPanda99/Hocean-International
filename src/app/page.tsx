import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BioLogistics from '@/components/BioLogistics';
import QMSFeatures from '@/components/QMSFeatures';
import Insights from '@/components/Insights';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BioLogistics />
        <QMSFeatures />
        <Insights />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
