import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-center gap-20">
      <div className="flex-1">
        <h1 className="text-2xl font-bold font-montserrat">
          Hey there let's
          <span className="text-coral-red"> Travel & Enjoy!</span>
        </h1>
        <p className="text-slate-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          distinctio, exercitationem facere numquam, voluptates totam a veniam
          doloribus nihil, cum velit. Obcaecati minus placeat non similique
          temporibus harum ea! Nobis.
        </p>
        <p className="text-slate-600 font-extralight text-lg my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          distinctio, exercitationem facere numquam, voluptates totam a veniam
          doloribus nihil, cum velit. Obcaecati minus placeat non similique
          temporibus harum ea! Nobis.
        </p>
      </div>
      <div className="flex-1">
        <img className="max-w-full float-right" src={heroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
