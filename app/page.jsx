"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="space-y-8 md:space-y-36 flex flex-col">
        <div className="max-w-6xl mx-auto p-4 md:flex md:items-center md:space-y-0 md:gap-12 md:pt-24 space-y-16">
          <div className="basis-1/2 space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl font-black tracking tight">
              Discover Package by Searching
            </h1>
            <p className="text-md md:text-lg text-base-content/80">
              FindPack is an innovative app that helps you Package by Searching for your project.
            </p>
            <div className="flex gap-2">
              <Link
                href="/app"
                className="btn bg-bl/80 text-white hover:bg-bl rounded-md"
              >
                FIND NOW
              </Link>
              <Link
                href="https://github.com/scriptsorcery4"
                target="_blank"
                className="btn btn-outline rounded-md hover:bg-base-content/10 hover:text-base-content"
              >
                <svg
                  className="w-4 mb-0.5 text-base-content"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 512 512"
                >
                  <path
                    d="M256 32C132.3 32 32 134.8 32 261.7c0 101.5 64.2 187.5 153.2 217.9 11.2 2.1 15.3-5 15.3-11.1 0-5.5-.2-19.9-.3-39.1-62.3 13.9-75.5-30.8-75.5-30.8-10.2-26.5-24.9-33.6-24.9-33.6-20.3-14.3 1.5-14 1.5-14 22.5 1.6 34.3 23.7 34.3 23.7 20 35.1 52.4 25 65.2 19.1 2-14.8 7.8-25 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 6.1 4 13.3 15.4 11C415.9 449.1 480 363.1 480 261.7 480 134.8 379.7 32 256 32z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#283618"
                    className="fill-000000 scale-110"
                  ></path>
                </svg>
                SEE MORE
              </Link>
            </div>
          </div>
          <div className="basis-1/2">
            <video
              autoPlay
              loop
              muted
              className="video w-full h-full shadow-xl rounded-lg overflow-hidden"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex-grow"></div>
      </div>
    </>
  );
}
