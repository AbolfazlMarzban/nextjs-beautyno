import React from "react";
import profile from "@/public/images/background.png";
import Link from "next/link";
import Image from "next/image";

export default function ListGalleryItem() {
  return (
    <div className="flex flex-col w-full xl:w-1/3 lg:w-1/3 p-4">
        <Link href="/user">
        <div className="flex items-center ">
        <div className="basis-1/8">
          <div
            className="w-16 h-16 rounded-full relative"
          >
              <Image
                src={profile}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              ></Image>
          </div>
        </div>
        <div className="basis-7/8 pr-4">
          <span className="text-lg font-bold">Username</span>

          <div class="flex items-center space-x-1 mt-4">
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
      </div>
        </Link>
    
      <div className="my-4 flex flex-col justify-center border border-1 rounded-xl">
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-start gap-3 mb-2">
      <button className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="ml-1">100 likes</span>
        </button>
        <button className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
          <span className="ml-1">20 comments</span>
          </button>

     
      </div>
      <div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full relative"
            >
                <Image
                src={profile}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              ></Image>
            </div>
            <span className="font-bold">Customer</span>
          </div>
        </div>
        <p className="text-start mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          tempora nemo ... 
        </p>
      </div>
      {/* <div className="my-1">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${profile})` }}
            ></div>
            <span className="font-bold">Customer</span>
          </div>
        </div>
        <p className="text-start mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          tempora nemo dolore voluptates reprehenderit, recusandae vel numquam
          quam animi, laborum deserunt. Magnam voluptas, debitis fugit aliquid
          sequi eos facilis natus.
        </p>
      </div>
      <div className="my-1">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${profile})` }}
            ></div>
            <span className="font-bold">Customer</span>
          </div>
        </div>
        <p className="text-start mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          tempora nemo dolore voluptates reprehenderit, recusandae vel numquam
          quam animi, laborum deserunt. Magnam voluptas, debitis fugit aliquid
          sequi eos facilis natus.
        </p>
      </div> */}
      
    </div>
  );
}
