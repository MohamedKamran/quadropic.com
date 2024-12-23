"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../components/ui/featured";

export function GServices() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Explore Syntheo
      </h1>
      <p className="mb-4 mr-2 ml-2 font-normal text-2m text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        See what Syntheo can do for you.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
          <div
            className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-200">
                Coming Soon.
              </span>
              <br />
              <br />
                This section has not been implemented yet. Please check back later.
            </p>
          </div>
    </>
  );
};

const data = [
  {
    category: "Quickly overview the Code base",
    title: "RepoVision",
    src: "https://i.postimg.cc/ZK2F5k5Q/Repo-Vision.webp",
    content: <DummyContent />,
  },
  {
    category: "Make Fast Ship Fast",
    title: "Fast & Ready",
    src: "https://i.postimg.cc/j5c4xLD6/Fast.webp",
    content: <DummyContent />,
  },
  {
    title: "Hybrid Cloud",
    category: "Power of the cloud, with Local Flexibility",
    src: "https://i.postimg.cc/3rLFz05Y/Hybrid-Cloud.webp",
    content: <DummyContent />,
  },
  {
    title: "Fix Bugs",
    category: "Find & Fix Bugs in a moment",
    src: "https://i.postimg.cc/j2k6fmQL/FixBugs.webp",
    content: <DummyContent />,
  },
  {
    title: "Make Apps",
    category: "Make Apps or add features, in a snap",
    src: "https://i.postimg.cc/HnL4VdMq/MakeApps.webp",
    content: <DummyContent />,
  },
  {
    category: "Made using the trusted LLM Providers",
    title: "Powered by LLM",
    src: "https://i.postimg.cc/sDv4zfsS/LLM.webp",
    content: <DummyContent />,
  },
];
