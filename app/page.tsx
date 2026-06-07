import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RegistrationSteps from "@/components/RegistrationSteps";
import ImageBanner from "@/components/ImageBanner";
import InfoSection from "@/components/InfoSection";
import Features from "@/components/Features";
import GameLobbies from "@/components/GameLobbies";
import WithdrawalProcess from "@/components/WithdrawalProcess";
import Bonuses from "@/components/Bonuses";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import ResponsibleGaming from "@/components/ResponsibleGaming";
import Footer from "@/components/Footer";
import LiveExchangeSimulator from "@/components/LiveExchangeSimulator";
import ExchangeCategories from "@/components/ExchangeCategories";
import { SITE_CONFIG } from "@/config/constants";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";

const SECTION_COMPONENTS: Record<string, React.ComponentType> = {
  hero: HeroSection,
  registration: RegistrationSteps,
  features: Features,
  info: InfoSection,
  sports: GameLobbies,
  withdrawal: WithdrawalProcess,
  bonuses: Bonuses,
  comparison: ComparisonTable,
  faq: FAQSection,
  testimonials: Testimonials,
  responsible: ResponsibleGaming,
  live_exchange: LiveExchangeSimulator,
  exchange_categories: ExchangeCategories,
};

export default function Home() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <WhatsAppFloat />

      <div className="layout-body-wrapper">
        <SportsSidebar />
        <div className="layout-content-area">
          {/* Moving Marquee live ticker */}
          <div className="live-ticker-banner">
            <div className="ticker-text">
              🔥 WELCOME TO TIGER365, PLAY HERE ALL YOUR FAVORITE SPORTS BACK & LAY EXCHANGE MARKETS AND INTERNATIONAL CASINO GAMES (24*7), THANK YOU. GET YOUR INSTANT WHATSAPP ID NOW! 🔥
            </div>
          </div>

          {SITE_CONFIG.layout.sectionOrder.map((sectionId) => {
            const Component = SECTION_COMPONENTS[sectionId];
            if (!Component) return null;

            return <Component key={sectionId} />;
          })}

          <Footer />
        </div>
      </div>
    </div>
  );
}
