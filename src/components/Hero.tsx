import "./hero.css";
import Bottles from "../assets/botles.png";

const Hero = () => {
  return (
    <section className="text-gray-100 hero">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="flex flex-col justify-center px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
          <div>
            <h2
              className="text-5xl md:text-6xl m-0 xl:text-7xl text-white font-bold tracking-tight leading-tight"
              style={{ fontFamily: "Rasa" }}
            >
              DESTILADOS <br />
              <span>NOGAL</span>
            </h2>
            <p className="text-lg m-0">
              El sabor auténtico de la caña <br /> de azúcar en cada botella.
            </p>
            <a
            href="#contactanos"
              type="button"
              className="inline-block my-4 rounded bg-[white] px-6 py-2 text-xs font-medium uppercase leading-normal text-[#363636] transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            >
              Conócenos más
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-3/5 ">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img src={Bottles} alt="" className="sm:min-h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
