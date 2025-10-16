import Image from "next/image";
import React from "react";

export const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 max-w-[1248px]">
      <div className="grid grid-cols-2 bg-[#edf7ff] rounded-3xl">
        <Image
          src="/assets/images/ContactForm/banner-contact-form.png"
          alt="Contact Form"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <div className="relative">
          <Image
            src="/assets/images/ContactForm/left-corner-geometric-contact-form.png"
            width={80}
            height={89}
            alt="left-corner-geometric-contact-form"
            className="absolute top-0 left-0"
          />
          <Image
            src="/assets/images/ContactForm/right-corner-geometric-contact-form.png"
            width={200}
            height={200}
            alt="right-corner-geometric-contact-form"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};
