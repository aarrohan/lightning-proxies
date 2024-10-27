import HeroSection from "./HeroSection";
import ClientsSection from "./ClientsSection";
import ProductsSection from "./ProductsSection";
import FeaturesSection from "./FeaturesSection";
import UseCasesSection from "./UseCasesSection";
import DashboardSection from "./DashboardSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <ProductsSection />
      <FeaturesSection />
      <UseCasesSection />
      <DashboardSection />
    </main>
  );
}
