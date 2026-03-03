import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import CtaSection from "@/components/sections/cta";
import FaqSection from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <iframe
        src="http://localhost:3000/test/book-value?api_key=1c1z-n74KtQNmyLDOq6__eMXCAfLDrP9D-OIZ7htbVo"
        width="50%"
        height="1400"
        frameBorder="0"
        style={{ border: "1px solid #e5e7eb", borderRadius: "8px" }}
      /> */}
      <HeroSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
