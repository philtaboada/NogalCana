import { useState, useRef, useEffect } from "react";
import Bcp from "../assets/bpc.png";
import Interbank from "../assets/interbank.png";
import Scotiabank from "../assets/scoti.png";
import Bbva from "../assets/bbva.png";
import Cj from "../assets/cj-logo.png";
import Plin from "../assets/plim.png";
import Yape from "../assets/YAPE.png";
import LogoPlin from "../assets/plinLogo.png";
import LogoYape from "../assets/yapelogo.png";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef: any = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className="rounded bg-[#0C2517] p-4" onClick={openModal}>Ver medios de pago</button>
      {isOpen && (
        <div className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none">
          <div className="modal-overlay bg-gray-300 opacity-50"></div>
          <div ref={modalRef} className="modal bg-gray-300 rounded-lg p-8 z-10">
            <button
              className="modal-close absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"/></svg>
            </button>
            <section className="mb-32 text-gray-800 text-center">
              <h2 className="text-3xl font-bold mb-32">Cuentas Bancarias</h2>

              <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
                <div className="mb-12 md:mb-0">
                  <div className="rounded-lg shadow-lg h-32 block bg-white">
                    <div className="flex justify-center">
                      <div
                        className="flex justify-center"
                        style={{ marginTop: "-75px" }}
                      >
                        <img
                          src={Bcp}
                          className="object-contain mx-auto"
                          alt=""
                          style={{ width: "150px" }}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">BCP</h5>
                      <p>Mi número de cuenta Soles</p>
                      <p className="mb-6 text-base">35570996404075</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12 max-md:mt-6 md:mb-0">
                  <div className="rounded-lg shadow-lg h-32 block bg-white">
                    <div className="flex justify-center">
                      <div
                        className="flex justify-center"
                        style={{ marginTop: "-75px" }}
                      >
                        <img
                          src={Interbank}
                          className="object-contain mx-auto"
                          alt=""
                          style={{ width: "150px" }}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">Interbank</h5>
                      <p>Mi número de cuenta Soles</p>
                      <p className="mb-6 text-base">00351301325825436492</p>
                    </div>
                  </div>
                </div>

                <div className="max-md:mt-6 md:mb-0">
                  <div className="rounded-lg shadow-lg h-32 block bg-white">
                    <div className="flex justify-center">
                      <div
                        className="flex justify-center"
                        style={{ marginTop: "-75px" }}
                      >
                        <img
                          src={Scotiabank}
                          className="object-contain mx-auto"
                          alt=""
                          style={{ width: "150px" }}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">Scotiabank</h5>
                      <p>Mi número de cuenta Soles</p>
                      <p className="mb-6 text-base">00967420674032983135</p>
                    </div>
                  </div>
                </div>

                <div className="mt-24 md:mb-0">
                  <div className="rounded-lg shadow-lg h-32 block bg-white">
                    <div className="flex justify-center">
                      <div
                        className="flex justify-center"
                        style={{ marginTop: "-75px" }}
                      >
                        <img
                          src={Bbva}
                          className="object-contain mx-auto"
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">BBVA</h5>
                      <p>Mi número de cuenta Soles</p>
                      <p className="mb-6 text-base">011-814-000228563140-10</p>
                    </div>
                  </div>
                </div>

                <div className="mt-24 md:mb-0">
                  <div className="rounded-lg shadow-lg h-32 block bg-white">
                    <div className="flex justify-center">
                      <div
                        className="flex justify-center"
                        style={{ marginTop: "-75px" }}
                      >
                        <img
                          src={Cj}
                          className="object-contain mx-auto"
                          alt=""
                          style={{ width: "150px" }}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">CAJA HUANCAYO</h5>
                      <p>Mi número de cuenta Soles</p>
                      <p className="mb-6 text-base">80800721100624954294</p>
                    </div>
                  </div>
                </div>

                <div className="mt-24 md:mb-0">
                  <div className="rounded-lg shadow-lg h-32 block bg-white">
                    <div className="flex justify-center">
                      <div
                        className="flex justify-center"
                        style={{ marginTop: "-75px" }}
                      >
                        <img
                          src={LogoPlin}
                          className="object-contain mx-auto"
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">Plin</h5>
                      <details className="relative z-50">
                        <summary className="py-2 outline-none cursor-pointer focus:underline">
                          QR - Plin
                        </summary>
                        <div className="px-4 pb-4">
                          <img src={Plin} className="z-99" alt="plin" />
                        </div>
                      </details>
                    </div>
                  </div>
                </div>

                <div className="mt-24 z-0 md:mb-0">
                  <div className="rounded-lg shadow-lg h-32 block bg-white">
                    <div className="flex justify-center">
                      <div
                        className="flex justify-center"
                        style={{ marginTop: "-75px" }}
                      >
                        <img
                          src={LogoYape}
                          className="object-contain mx-auto"
                          alt=""
                          style={{ width: "80px" }}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">Yape</h5>
                      <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">
                          QR - Yape
                        </summary>
                        <div className="px-4 pb-4">
                          <img src={Yape} alt="Yape" />
                        </div>
                      </details>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
