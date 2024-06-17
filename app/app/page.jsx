"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useFind from "../../hooks/useFind";
import Link from "next/link";


function App() {
  const [pack, setPack] = useState("");
  const { data, error, isLoading, findPackage } = useFind();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting in the default way

    toast.dismiss();
    if (!pack) {
      toast.error("Please enter a package name.");
      return;
    }

    const errorMessage = await findPackage(pack);

    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      toast.success("Package found!");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-xl mx-auto p-4 space-y-4">
        {!data ? (
          <>
            <div className="pb-3">
              <h1 className="font-black text-2xl">Find packages</h1>
              <p>By searching find a package that can help you!</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="label">
                  <span className="label-text">Name of package</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setPack(e.target.value)}
                  value={pack}
                  placeholder="Express"
                  className={`input input-bordered w-full ${
                    error && "input-error"
                  }`}
                />
                {error && (
                  <label className="label -mt-1">
                    <span className="label-text text-error">
                      Invalid package name
                    </span>
                  </label>
                )}
              </div>
              <button
                type="submit"
                className="btn bg-bl/80 hover:bg-bl text-white btn-block uppercase"
              >
                {isLoading && <span className="loading loading-spinner"></span>}
                FIND package
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="pb-3 w-full">
              <div className="flex gap-3 items-end">
                <h1 className="font-extrabold text-base-content/90 text-2xl">
                  {data.name}
                </h1>
                <p className="text-base-content/80 font-medium mb-1 text-sm">
                  {data["dist-tags"].latest}
                </p>
              </div>
              <p className="md:min-w-[500px]">{data.description}</p>
            </div>
            <div className="w-full">
              <label className="label -mb-1">
                <span className="text-span">Install</span>
              </label>

              <div className="w-full p-4 bg-base-content/5 rounded-lg">
                <p>
                  <span className="font-medium mr-2 select-none">&gt;</span> npm
                  install {data.name}
                </p>
              </div>
            </div>
            <div>
              <label className="label -mb-1">
                <span className="text-span">Author</span>
              </label>
             {data.author.name && <h2 className="text-xl ml-1 font-medium">{data.author.name}</h2>}
            </div>
            <div className="flex justify-between">
            <div>
              <label className="label -mb-1">
                <span className="text-span">Links</span>
              </label>
              <div className="flex items-center gap-2">
              {data.repository.url && <Link target="blank_" href={data.repository.url && `https://github.com/${data.repository.url.substring(data.repository.url.indexOf("github.com/") + 11)}`}>
                {" "}
                <svg
                  className="w-8 h-8 mb-0.5 text-black"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 512 512"
                >
                  <path
                    d="M256 32C132.3 32 32 134.8 32 261.7c0 101.5 64.2 187.5 153.2 217.9 11.2 2.1 15.3-5 15.3-11.1 0-5.5-.2-19.9-.3-39.1-62.3 13.9-75.5-30.8-75.5-30.8-10.2-26.5-24.9-33.6-24.9-33.6-20.3-14.3 1.5-14 1.5-14 22.5 1.6 34.3 23.7 34.3 23.7 20 35.1 52.4 25 65.2 19.1 2-14.8 7.8-25 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 6.1 4 13.3 15.4 11C415.9 449.1 480 363.1 480 261.7 480 134.8 379.7 32 256 32z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#000000"
                    className="fill-000000 scale-110"
                  ></path>
                </svg>
              </Link>}
              {data.homepage &&
              <Link target="blank_" href={data.homepage}>
                <img className="w-7" src='https://www.svgrepo.com/show/522004/browser.svg' alt="homepage" />
              </Link>}
              </div>
            </div>
            </div>
            <div className="space-y-2">
            <Link href={`https://www.npmjs.com/package/${data.name}`} target="blank_" className="btn btn-block bg-bl/80 hover:bg-bl text-white">SEE MORE</Link>
            <a href='/app' className="btn btn-ghost btn-block">FIND AGAIN</a>
            </div>
          </>
        )}
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}

export default App;
