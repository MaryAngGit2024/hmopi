import React from "react";
import Image from "next/image";
import PosiflexPhoto from "@/images/Posiflex-with-screen-final.gif";
import { Building } from "lucide-react";

export const Posiflex = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 ">
      <div className="flex justify-center px-[5rem] py-[5rem] gap-[4rem]">
        <Image
          src={PosiflexPhoto}
          alt={""}
          width={350}
          height={250}
          className="rounded-xl"
        />
        <div className="w-full p-none mt-[1rem]">
          <h1
            className="text-[3rem] font-bold text-[#ED1B22]"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            POSIFLEX {""}
            <span className="text-[2rem]">High Quality and Passion</span>
          </h1>
          <p className="text-xl mb-2 text-black font-semibold">
            POSIFLEX, a symbol of quality in the POS industry for its very
            durable cash drawers has brought the same passion for the birth of a
            wide range of quality POS hardware products. This includes
            integrated Touch-base POS terminals with biometric sensors &
            magnetic stripe readers and related peripherals: touch monitors,
            cash drawers, customer displays, programmable keyboards, bar-code
            scanners, thermal receipt printers and readers.
          </p>
          <div className=" mt-7 w-[9rem]">
            <a
              className="hover:underline underline-offset-4 font-semibold rounded-full bg-[#ED1B22] hover:bg-[#de4348] text-white px-4 py-3 justify-between flex items-center"
              href="#"
            >
              <Building />
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
