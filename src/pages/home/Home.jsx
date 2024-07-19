import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Destinations from "../../components/Destinations";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

const Home = () => {  
  return (
    <main className="w-full relative flex justify-center">
      <div className="w-[80%] h-auto mb-0">
        <section>
          <Navbar />
        </section>
        <section className="px-8 py-6">
          <Hero />
        </section>
        <section className="my-8 px-8 py-6">
          <Destinations />
        </section>
        <section className="my-8 px-8 py-6">
          <Reviews />
        </section>
        <section className="mt-8 mb-0 px-8 py-6">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
