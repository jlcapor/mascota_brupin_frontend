import React from "react";
const Hero = () => {
  return (
    <>
      <div className="  m-auto px-4 py-16 mx-auto sm:max-w-xl md:max-w-full w-screen-xl md:px-24  lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">
                 
                </p>
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                <span className="inline-block text-deep-purple-accent-400">
                  Cuida de tu Mascota
                </span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna quam, eleifend venenatis tincidunt in, semper a odio. Vestibulum scelerisque ante a felis eleifend, id hendrerit urna eleifend. Phasellus eget finibus leo. Donec lobortis turpis non imperdiet aliquam. Etiam eu faucibus velit.
              </p>
            </div>
            <div className="flex items-center  space-x-3">
              <a
                href="/"
                className=" text-center block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
             
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-2/8">
              <img
                src="src\assets\img\mascotas.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
