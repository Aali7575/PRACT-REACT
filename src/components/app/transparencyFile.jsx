import React from 'react'

function Transparency() {
  return (
    <div><section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div className="absolute inset-0">
      <img
        className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
        src="https://img.freepik.com/free-photo/mechanic-fixing-car-tyre_1170-1654.jpg?t=st=1714171934~exp=1714175534~hmac=14a8d3dc41c3b15821358aa4fea9cbdc3bbe9746a000c48d8f1e66e32eb4f3b4&w=996"
        alt=""
      />
    </div>
    <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />
    <div className="absolute inset-0 block bg-black/60 md:hidden" />
    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        Request Your Vehicle Service Report
        </h2>
        <p className="mt-4 text-base text-gray-200">
        To access your service report securely, please provide
         your full name, vehicle registration number and the last exact date you visited our workshop
        </p>
        </div>
        <div className="">
        <a
          href="https://wa.me/263717577997"
          title=""
          className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          role="button"
        >
          Request Report
        </a>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Transparency