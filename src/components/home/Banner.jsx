import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/XZffcNK9/image-7378ffaf.png')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl container mx-auto">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-green-800/50 flex items-center ">
        <div className="max-w-7xl px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl animate__animated animate__backInLeft">
            The Smartest Way to Book Your Qurbani.
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
           QurbaniHat connects you with premium livestock for your Eid-ul-Adha. Select, book, and relax—we handle the rest.
          </p>

          <div className="flex gap-4">
            <Link href="#Featured">
              <Button variant="primary" className="bg-orange-500">
                Book Now
              </Button>
            </Link>

            <Link href="/animals">
              <Button variant="outline" className="text-white">
                See All Animals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;