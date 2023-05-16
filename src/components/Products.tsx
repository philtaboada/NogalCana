import Amiel from "../assets/aMiel.png";
import Asuave from "../assets/asuave.png";
import Oxapampino from "../assets/oxapampino.png";

const Products = () => {
  return (
    <div id="productos" className="px-6 py-12 md:px-12 bg-white text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <h1 className="text-center text-[#7A7A7A] max-md:text-4xl mb-10 xl:text-5xl font-bold">
          NUESTROS PRODUCTOS
        </h1>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
          >
            <div className="border border-solid border-[#CBCBCB] max-w-xs p-6 shadow-md bg-[#ECECEC] text-gray-50">
              <img src={Asuave} alt="" className="m-auto object-cover h-72" />
              <div className="mt-6 mb-2">
                <hr className="border-t-4 border-[#CBCBCB w-full" />
                <h2 className="text-xl font-semibold text-black tracking-wide">
                ANCASHINO SUAVE
                </h2>
              </div>
              <p className="text-black leading-4 h-16 text-xs">
              Contiene los siguientes ingredientes: Uña de gato, Chuchuhuasi, Matico, Eucalipto, Borrajas, Manzanilla, Miel de abeja y Caña pura en su segunda destilación.
              </p>
            </div>
          </a>
 
          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
          >
            <div className="border border-solid border-[#CBCBCB] max-w-xs p-6 shadow-md bg-[#ECECEC] text-gray-50">
              <img src={Amiel} alt="" className="m-auto object-cover h-72" />
              <div className="mt-6 mb-2">
                <hr className="border-t-4 border-[#CBCBCB w-full" />
                <h2 className="text-xl font-semibold text-black tracking-wide">
                ANCASHINO MIEL
                </h2>
              </div>
              <p className="text-black leading-4 h-16 text-xs">
              Contiene los siguientes ingredientes: Jugo de caña, miel de abeja, polen, Uña de gato, chuchuhuasi, eucalipto y flor de cítricos.
              </p>
            </div>
          </a>

          <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
          >
            <div className="border border-solid border-[#CBCBCB] max-w-xs p-6 shadow-md bg-[#ECECEC] text-gray-50">
              <img src={Oxapampino} alt="" className="m-auto object-cover h-72" />
              <div className="mt-6 mb-2">
                <hr className="border-t-4 border-[#CBCBCB w-full" />
                <h2 className="text-xl font-semibold text-black tracking-wide">
                OXAMPAMPINO
                </h2>
              </div>
              <p className="text-black leading-4 h-16 text-xs">
              Contiene los siguientes ingredientes: Caña pura (suave y ligeramente dulce).              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
