"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { FaCircleXmark, FaX } from "react-icons/fa6";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { StarsBackground } from "./star-back";
import { IconX } from "@tabler/icons-react";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode; // Keep existing content
  detailedDescription: string; // Add this line
  keyFeatures: string[]; // Add this line
  useCases: string[]; // Add this line
  demoLink: string; // Add this line
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
  onCardHover: (index: number) => void;
  onCardTouch: (index: number) => void;
  navigateToIndex: (index: number) => void;
}>({
  onCardClose: () => {},
  currentIndex: 0,
  onCardHover: () => {},
  onCardTouch: () => {},
  navigateToIndex: () => {},
});

const CarouselIndicator: React.FC<{ length: number; activeIndex: number }> = ({
  length,
  activeIndex,
}) => {
  const { navigateToIndex } = useContext(CarouselContext);

  return (
    <div className="flex items-center justify-center gap-2 mt-4 w-fit p-4 bg-white bg-opacity-10 rounded-full mx-auto">
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === activeIndex
              ? "bg-white opacity-55 w-8"
              : "bg-white opacity-40"
          } transition-all duration-300 cursor-pointer`}
          onClick={() => navigateToIndex(index)}
        />
      ))}
    </div>
  );
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
  initialScroll = 0,
}) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      navigateToIndex((currentIndex + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      setCurrentIndex(index);
    }
  };

  const handleCardHover = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCardTouch = (index: number) => {
    setCurrentIndex(index);
  };

  const navigateToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: handleCardClose,
        currentIndex,
        onCardHover: handleCardHover,
        onCardTouch: handleCardTouch,
        navigateToIndex,
      }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                onMouseEnter={() => handleCardHover(index)}
                onTouchStart={() => handleCardTouch(index)}
                onClick={() => handleCardTouch(index)}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <CarouselIndicator length={items.length} activeIndex={currentIndex} />
      </div>
    </CarouselContext.Provider>
  );
};

export const Card: React.FC<{ card: Card; index: number; layout?: boolean }> = ({
  card,
  index,
  layout = false,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, onCardHover, onCardTouch } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-70% z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-white/20  rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-white/20" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold mt-4 text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
              {card.detailedDescription && (
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Details
                  </h4>
                  <p className="text-neutral-400 text-base">
                    {card.detailedDescription}
                  </p>
                </div>
              )}
              {card.keyFeatures && card.keyFeatures.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-neutral-400 text-base">
                    {card.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {card.useCases && card.useCases.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Use Cases
                  </h4>
                  <ul className="list-disc list-inside text-neutral-400 text-base">
                    {card.useCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              )}
              {card.demoLink && card.demoLink !== "#" && (
                <div className="mt-6 text-center">
                  <a
                    href={card.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        onMouseEnter={() => onCardHover(index)}
        onTouchStart={() => onCardTouch(index)}
        className="rounded-3xl bg-neutral-900 h-80 w-56 md:h-[30rem] lg:h-[32rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        {/* Base Star background */}
        <StarsBackground />

        {/* Image layer */}
        <div className="w-full h-full">
          <div className="absolute inset-0 z-20 aspect-square p-10 lg:p-[80px] md:p-[80px]">
            <BlurImage
              src={card.src}
              alt={card.title}
              width={30}
              height={30}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Content */}
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage: React.FC<ImageProps> = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};