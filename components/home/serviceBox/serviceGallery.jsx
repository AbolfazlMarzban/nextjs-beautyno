import React from "react";
import GalleryImg from "@/public/images/modern-beauty-salon-interior.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function ServiceGallery({}) {
  return (
    <>
      <div className="border border-1 p-2 mt-4 rounded-xl sm:flex max-sm:hidden">
        <div className="basis-1/4 h-80 rounded-xl mx-2 relative">
          <Image
            src={GalleryImg}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          ></Image>
        </div>
        <div className="basis-1/4 h-80 rounded-xl mx-2 relative">
          <Image
            src={GalleryImg}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          ></Image>
        </div>
        <div className="basis-1/4 h-80 rounded-xl mx-2 relative">
          <Image
            src={GalleryImg}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          ></Image>
        </div>
        <div className="basis-1/4 h-80 rounded-xl mx-2 relative">
          <Image
            src={GalleryImg}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          ></Image>
        </div>
      </div>
      <div className="border border-1 p-2 mt-4 rounded-xl sm:hidden max-sm:block">
        <Carousel>
          <div className="h-80">
            <Image
              src={GalleryImg}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            ></Image>
          </div>
          <div className="h-80">
            <Image
              src={GalleryImg}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            ></Image>
          </div>
          <div className="h-80">
            <Image
              src={GalleryImg}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            ></Image>
          </div>
          <div className="h-80">
            <Image
              src={GalleryImg}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            ></Image>
          </div>
        </Carousel>
        {/* <div
        className="basis-1/4 h-80 rounded-xl bg-cover bg-center mx-2"
        style={{ backgroundImage: `url(${GalleryImg})` }}
      ></div> */}
      </div>
    </>
  );
}
