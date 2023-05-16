import Maria from '../assets/maria.jpg'
import Cueto from '../assets/Cueto.jpg'
import Nilton from '../assets/nilton.jpg'

const Testimonials = () => {
  return (
    <div id='testimonios' className="px-6 py-12 md:px-12 bg-white text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <section className="text-neutral-700 dark:text-neutral-300">
          <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
            <h1 className="text-center text-[#7A7A7A] max-md:text-4xl my-10 xl:text-5xl font-bold">
              NUESTROS CLIENTES
            </h1>
          </div>

          <div className="grid gap-6 text-center md:grid-cols-3">
            <div>
              <div className="block rounded-lg bg-[#1D6D65] shadow-lg">
                <div className="h-28 overflow-hidden rounded-t-lg "></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                  <img src={Nilton} />
                </div>
                <div className="text-[#FDFDFD]  p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Nilton M.</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    ¡La caña destilada de Nogal es simplemente increíble! Me encanta su sabor suave y aromático. Cada vez que la pruebo, me transporta a un paraíso tropical. Definitivamente, se ha convertido en mi destilado favorito. ¡No puedo esperar para disfrutarla nuevamente en mi próxima reunión con amigos!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="block rounded-lg bg-[#C7461D] shadow-lg">
                <div className="h-28 overflow-hidden rounded-t-lg "></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                  <img src={Cueto} />
                </div>
                <div className="text-[#FDFDFD] p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Juan Daniel C.</h4>
                  <hr className="text-[#FDFDFD]" />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    He tenido la oportunidad de degustar la caña destilada de Nogal y me ha dejado asombrado. Su textura suave y el equilibrio perfecto entre dulzura y notas amaderadas la convierten en un verdadero placer para el paladar. Realmente puedo sentir la calidad en cada sorbo. ¡Recomiendo altamente probarla!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="block rounded-lg shadow-lg bg-[#5B2C25]">
                <div className="h-28 overflow-hidden rounded-t-lg "></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                  <img src={Maria} />
                </div>
                <div className="text-[#FDFDFD] p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Maria C.</h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Desde que probé la caña destilada de Nogal, se ha convertido en mi elección preferida. Su sabor exquisito y suavidad son incomparables. Lo que más me gusta es su versatilidad, ya que puedo disfrutarla sola, mezclada en cócteles o simplemente con hielo. ¡Es una delicia que siempre impresiona a mis invitados en cualquier ocasión!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
