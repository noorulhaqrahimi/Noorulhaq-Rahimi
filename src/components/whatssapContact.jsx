import { motion } from "framer-motion";
import whatssapContact from '../assets/logos/whatssap.png';

const WhatssapContact = () => {
  return (
    <>
        <motion.a
      href="https://wa.me/93748906077?text=سلام،%20وقت%20شما%20بخیر.%20من%20از%20طریق%20وبسایت%20شما%20با%20خدمات‌تان%20آشنا%20شدم%20و%20علاقه‌مند%20هستم%20در%20مورد%20همکاری%20یا%20دریافت%20خدمات%20بیشتر%20معلومات%20بگیرم.%20لطفاً%20در%20صورت%20امکان%20راهنمایی%20بفرمایید.%20سپاس"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 lg:right-12 lg:bottom-12 right-8 z-50 rounded-full shadow-xl"
      
      animate={{
        scale: [1, 1.5, 1],  
      }}
      transition={{
        duration: 1.5,     
        repeat: Infinity,     
        ease: "easeInOut",
      }}
    >
      <img
        src={whatssapContact}
        alt="whatsapp"
        className="lg:w-[40px] w-[36px]"
      />
    </motion.a>

    </>
  );
};

export default WhatssapContact;
