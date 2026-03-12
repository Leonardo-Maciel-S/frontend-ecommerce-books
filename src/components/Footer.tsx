import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white mt-10 p-10">
      <div className="container mx-auto px-10 overflow-hidden flex justify-between ">
        <p>© 2025 BookStore Editions. All rights reserved.</p>

        <p className="flex gap-2">
          Desenvolvido por{" "}
          <a
            href="https://github.com/Leonardo-Maciel-S"
            className="flex gap-2 items-center hover:underline "
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
