import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white px-10 py-8">
      <div className="container mx-auto md:px-10 overflow-hidden flex justify-between flex-wrap md:flex-nowrap gap-4">
        <p className="text-sm md:text-base text-zinc-300">
          © 2025 BookStore Editions. All rights reserved.
        </p>

        <p className="flex gap-2 md:justify-end items-baseline flex-wrap text-zinc-300 text-sm">
          Desenvolvido por{" "}
          <a
            href="https://github.com/Leonardo-Maciel-S"
            className="flex gap-2 items-center hover:underline text-white text-base font-bold"
            target="_blank"
          >
            <span>@Leonardo-Maciel-S</span>
            <Github />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
