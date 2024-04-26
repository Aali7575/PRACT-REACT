
"use client";

import { Carousel } from "flowbite-react";

export function Home() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://www.freepik.com/free-photo/thoughtful-mechanic-working-laptop_1005675.htm#fromView=search&page=1&position=26&uuid=3952f757-57b4-4b19-8e8a-e333a26b4ca2" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}

export default Home
