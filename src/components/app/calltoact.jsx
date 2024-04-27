import React from 'react'

function CallToAction() {
  return (
    <div>
        <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-32">
  <div className="absolute inset-0">
    <img
      className="object-cover w-full h-full"
      src="https://img.freepik.com/premium-photo/car-service-repair-maintenance-people-concept-auto-mechanic-man-with-lamp-working-workshop_380164-159935.jpg?w=996"
      alt=""
    />
  </div>
  <div className="absolute inset-0 bg-gray-900/50" />
  <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
      Keep your Mazda Skyactiv in top shape
      </h2>
      <p className="mt-4 text-base font-normal leading-7 text-white sm:mt-6">
      We are the ultimate solution for your MAZDA CX-5,CX-3,ATENZA, DEMIO & AXELA, providing technical services.
      </p>
      <div className="mt-8 sm:mt-10">
        <a
          href="/services"
          title=""
          className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          role="button"
        >
          Our services
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default CallToAction