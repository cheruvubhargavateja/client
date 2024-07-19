import Destinations from "../../components/Destinations";
import Navbar from "../../components/Navbar";

const DestinationsPage = () => {

  return (
    <main className='"w-full relative flex justify-center"'>
      <div className="w-[80%] h-auto mb-0 mx-auto">
        <section>
          <Navbar />
        </section>
        <section className="my-8 px-8 py-6">
          <Destinations />
        </section>
      </div>
    </main>
  );
};

export default DestinationsPage;
