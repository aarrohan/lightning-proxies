import HeroSection from "./HeroSection";
import ClientsSection from "./ClientsSection";
import ProductsSection from "./ProductsSection";
import FeaturesSection from "./FeaturesSection";
import UseCasesSection from "./UseCasesSection";
import DashboardSection from "./DashboardSection";
import ExtensionSection from "./ExtensionSection";
import BlogSection from "./BlogSection";
import UpcomingSection from "./UpcomingSection";
import FollowUpSection from "./FollowUpSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <ProductsSection />
      <FeaturesSection />
      <UseCasesSection />
      <DashboardSection />
      <ExtensionSection />
      <BlogSection />
      <UpcomingSection />
      <FollowUpSection />
    </main>
  );
}
