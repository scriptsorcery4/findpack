"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="max-w-6xl mx-auto p-4 flex justify-between items-center h-20">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/icon.png"
          alt="logo"
          width={48}
          height={48}
          priority={true}
        />
        <h1 className="text-xl font-black text-base-content">FindPack</h1>
      </Link>
      <div className="flex gap-2">
        <Link href="https://www.youtube.com/@scriptsorcery4" target="_blank">
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-gray-700"
            width={32}
            height={32}
          >
            <path
              d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0Zm153.315 178.978c-3.68-13.769-14.522-24.61-28.29-28.29C356.067 144 256 144 256 144s-100.067 0-125.025 6.688c-13.765 3.68-24.61 14.521-28.29 28.29C96 203.933 96 256.002 96 256.002s0 52.067 6.685 77.02c3.68 13.769 14.525 24.614 28.29 28.293C155.933 368 256 368 256 368s100.067 0 125.025-6.685c13.768-3.679 24.61-14.524 28.29-28.293C416 308.069 416 256.002 416 256.002s0-52.069-6.685-77.024ZM223.999 304.003v-96.002l83.137 48.001-83.137 48.001Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        <Link href="https://www.instagram.com/scriptsorcery4" target="_blank">
          <svg
            data-name="Layer 1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-gray-700"
            width={32}
            height={32}
          >
            <path
              d="M314.757 147.525H197.243a49.717 49.717 0 0 0-49.718 49.718v117.514a49.718 49.718 0 0 0 49.718 49.718h117.514a49.718 49.718 0 0 0 49.717-49.718V197.243a49.717 49.717 0 0 0-49.717-49.718ZM256 324.391A68.391 68.391 0 1 1 324.391 256 68.391 68.391 0 0 1 256 324.391Zm71.242-122.811a16.271 16.271 0 1 1 16.27-16.271 16.271 16.271 0 0 1-16.27 16.271Z"
              fill="currentColor"
            ></path>
            <path
              d="M256 211.545A44.455 44.455 0 1 0 300.455 256 44.455 44.455 0 0 0 256 211.545Z"
              fill="currentColor"
            ></path>
            <path
              d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0Zm133.333 312.5a76.836 76.836 0 0 1-76.833 76.833h-113a76.837 76.837 0 0 1-76.834-76.833v-113a76.836 76.836 0 0 1 76.834-76.833h113a76.836 76.836 0 0 1 76.833 76.833Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        <Link href="https://www.tiktok.com/@scriptsorcery4" target="_blank">
          <svg
            data-name="Layer 1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-gray-700"
            width={32}
            height={32}
          >
            <path
              d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0Zm129.62 232.382c-27.184 0-53.634-8.822-74-23.75l-.162 101.5a92.457 92.457 0 1 1-80.178-91.721v49.845a43.657 43.657 0 1 0 31.288 41.876V109.333h51.275a71.773 71.773 0 0 0 71.774 71.773Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
