import Header from "./header/Header";
import Hero from "./component/Hero";
import Feature from "./component/Feature";
import Testimonials from "./component/Testimonials";
import CTA from "./component/CTA";
import Footer from "./component/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Feature />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
