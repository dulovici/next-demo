import BookADemoSection from "./components/product-page/BookADemoSection";
import FeaturesSection from "./components/product-page/FeaturesSection";
import Hero from "./components/product-page/Hero";
import PresentationContentSection from "./components/product-page/PresentationContentSection";
import ProductPresentationSection from "./components/product-page/ProductPresentationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <div className="container pb-10 flex flex-col md:flex-row m-auto gap-6">
        <ProductPresentationSection />
        <BookADemoSection />
      </div>
      <PresentationContentSection />
    </>
  );
}
