import { useState, useEffect, useRef } from "react";
import earpod from "../assets/earpod.webp";
import watch from "../assets/watch-large.webp";

const AutoSlideshow = () => {
  const slides = [
    {
      id: 1,
      number: "1 / 2",
      image: earpod,
      alt: "Nature",
      caption: "Caption Text",
    },
    {
      id: 2,
      number: "2 / 2",
      image: watch,
      alt: "Snow",
      caption: "Caption Two",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesRef = useRef(null);

  // Create extended slides for seamless loop
  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setIsAnimating(true);

    // If at the last slide (clone), instantly reset
    if (currentSlide === slides.length) {
      // Remove transition for instant reset
      slidesRef.current.classList.remove(
        "transition-transform",
        "duration-500"
      );
      setCurrentSlide(0);

      // Add transition back after reset
      setTimeout(() => {
        slidesRef.current.classList.add("transition-transform", "duration-500");
        setIsAnimating(false);
      }, 10);
    } else {
      setCurrentSlide((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTransitionEnd = () => {
    // Reset position when reaching clone slide
    if (currentSlide === slides.length) {
      slidesRef.current.classList.remove(
        "transition-transform",
        "duration-500"
      );
      setCurrentSlide(0);

      setTimeout(() => {
        slidesRef.current.classList.add("transition-transform", "duration-500");
        setIsAnimating(false);
      }, 10);
    }
  };

  return (
    <section className="overflow-hidden py-6">
      <div className="relative md:h-70 overflow-hidden rounded-2xl bg-gray-100 flex items-center md:max-h-60 max-h-30">
        <div
          ref={slidesRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${extendedSlides.length * 100}%`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rounded Dots Indicator */}
      {/* <div className="absolute md:bottom-4 bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                img-css !rounded-full transition-all duration-300 
                ${
                  index === currentSlide % slides.length
                    ? "bg-black "
                    : "bg-gray-300"
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
    </section>
  );
};

export default AutoSlideshow;
