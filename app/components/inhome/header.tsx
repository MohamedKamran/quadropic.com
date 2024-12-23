"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = () => {
  let Links = [
    { name: "Syntheo", link: "#syntheo" },
    { name: "Values", link: "#values" },
    { name: "Vision", link: "#vision" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <header
      //Desktop and Tablet Menu
      className={`fixed w-full md:flex items-center justify-between z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md py-4 transition-all duration-500 ease-in ${
        open ? "h-full" : ""
      }`}
      style={{
        borderBottom: "1.5px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 bg-transparent">
        {/* Logo  SVG*/}
        <div className="h-12 w-12 px-2">
          <svg
            viewBox="0 0 387 505"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M172.292 5.97421C184.257 -1.94009 199.779 -1.99528 211.8 5.83371L370.647 109.288C380.848 115.931 387 127.28 387 139.454V378.913C387 391.903 380.002 403.886 368.688 410.268L355.999 417.426C355.997 417.427 355.996 417.431 355.997 417.434C355.999 417.436 355.998 417.44 355.995 417.441L329.561 432.367C324.975 434.957 322.868 440.433 324.536 445.428L334.397 474.973C339.153 489.22 328.549 503.938 313.529 503.938L292.731 503.938C283.495 503.938 275.242 498.169 272.07 489.495L269.045 481.225C266.713 474.849 259.218 472.087 253.306 475.425L240.029 482.922C240.013 482.931 239.993 482.925 239.985 482.908C239.982 482.901 239.975 482.895 239.968 482.892C239.96 482.889 239.95 482.89 239.942 482.894L209.825 499.883C198.772 506.118 185.253 506.073 174.242 499.764L18.1039 410.31C16.0122 409.112 14.0702 407.722 12.295 406.169C3.83465 398.767 10.3839 386.747 21.2537 383.884L51.1967 375.994C55.1277 374.959 59.2298 376.292 62.4899 378.72C63.3489 379.36 64.2406 379.965 65.1635 380.531L172.839 446.643C184.319 453.692 198.773 453.742 210.3 446.772L213.591 444.783C215.086 443.879 216 442.259 216 440.512V437.516C216 434.946 213.192 433.362 210.992 434.692C199.464 441.661 185.01 441.611 173.531 434.563L74.8256 373.959C64.1611 367.411 57.6622 355.794 57.6622 343.28V171.726C57.6622 160.054 63.3208 149.107 72.8428 142.357L171.563 72.3757C183.956 63.5904 200.53 63.53 212.987 72.2246C214.257 73.1112 216 72.2023 216 70.6533V63.6112C216 61.9773 215.202 60.4464 213.862 59.5112L212.296 58.418C199.839 49.7234 183.265 49.7839 170.872 58.5691L63.1806 134.909C53.6586 141.659 48 152.607 48 164.279V349.853C48 350.679 48.0283 351.502 48.0844 352.319C48.5523 359.147 45.2518 366.561 38.6339 368.304L25.0956 371.871C12.4125 375.213 0 365.647 0 352.531V139.289C0 127.206 6.06151 115.929 16.1392 109.263L172.292 5.97421ZM348.067 403.483C348.049 403.493 348.028 403.487 348.018 403.469C348.008 403.452 347.986 403.446 347.969 403.456L328.089 414.692C322.066 418.097 314.433 415.162 312.242 408.599L301.371 376.03C298.206 366.548 289.046 360.392 279.071 361.042L265.551 361.924C256.234 362.532 248.315 368.954 245.798 377.946L241.412 393.61C240.169 398.05 240.352 402.768 241.935 407.098L255.79 444.982C257.639 450.038 255.558 455.688 250.872 458.337L237.887 465.676C237.616 465.802 237.347 465.94 237.081 466.09L209.085 481.883C198.032 488.118 184.512 488.073 173.501 481.764L92.5144 435.366C90.9593 434.475 90 432.82 90 431.027V428.06C90 424.219 94.1523 421.812 97.4856 423.722L174.36 467.764C185.371 474.073 198.89 474.118 209.943 467.883L238.708 451.657C243.672 448.857 245.982 442.95 244.233 437.525L237.92 417.931C234.12 406.137 220.457 400.795 209.665 406.883C198.612 413.118 185.093 413.073 174.081 406.764L91.104 359.225C79.907 352.81 73 340.893 73 327.989V194.896C73 182.813 79.0615 171.536 89.1392 164.87L172.132 109.974C184.097 102.06 199.618 102.005 211.639 109.834L296.183 164.895C306.383 171.539 312.536 182.888 312.536 195.061V327.828C312.536 332.686 311.557 337.402 309.74 341.738C306.383 349.75 303.748 358.731 306.795 366.867L316.216 392.026C318.799 398.925 326.933 401.889 333.35 398.269L343.535 392.524C354.849 386.142 361.847 374.159 361.847 361.169V157.996C361.847 145.822 355.695 134.473 345.494 127.829L211.918 40.8337C199.897 33.0047 184.375 33.0599 172.41 40.9742L97.7585 90.3533C94.4345 92.552 90 90.1684 90 86.1831V81.6047C90 79.9265 90.8419 78.3603 92.2416 77.4345L171.551 24.9742C183.516 17.0599 199.038 17.0047 211.059 24.8337L355.95 119.199C366.151 125.843 372.304 137.192 372.304 149.365V368.786C372.304 381.776 365.305 393.759 353.991 400.141L348.067 403.483Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      {/* Menu icon */}
      <div
        onClick={() => {
          setOpen(!open);
          if (open) {
            enableBodyScroll(document.body);
          } else {
            disableBodyScroll(document.body);
          }
        }}
        className="absolute right-6 top-6 cursor-pointer md:hidden w-12 h-12"
      >
        {open ? (
          <AiOutlineClose className="h-9" />
        ) : (
          <AiOutlineMenu className="h-9" />
        )}
      </div>
      {/* link items */}
      <ul
        className={`md:flex z-50 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 pr-9 transition-opacity duration-3000 ease-in-out ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        }`}
      >
        {Links.map((link) => (
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
        <a
          href={link.link}
          className="text-white duration-500"
          onClick={() => {
            setOpen(false);
            enableBodyScroll(document.body);
          }}
        >
          {link.name}
        </a>
          </li>
        ))}
      </ul>
      {/* button */}
    </header>
  );
};

export default Header;
