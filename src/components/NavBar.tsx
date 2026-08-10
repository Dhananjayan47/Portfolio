// import { log } from "node:console";
import React, { useState } from "react";
// import { useFormState } from "react-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavItem {
  label: string;
  href: string;
}
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScroll =
    (href: string) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();

      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if(element){
        
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        console.log(elementPosition)
       

        window.scrollTo({
          top:elementPosition,
          behavior:'smooth'
        });
      }

      setIsOpen(false);
    };
  return (
    <nav className="sticky top-0 left-0 right-0  text-white bg-white/10 backdrop-blur-xl border border-white/20 w-full px-6 py-4 z-50 ">
   

      <div className=" mx-auto flex items-center justify-between">
        <a href="#home" onClick={handleScroll("#home")} className=" text-2xl font-bold tracking-wide hover:text-slate-200 transition-colors">Dhananjayan</a>

        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {NAV_ITEMS.map((items)=>(
            <li key={items.label} className="cursor-pointer hover:bg-linear-to-br from-green-400 to-blue-500  rounded-md">
              <button onClick={handleScroll(items.href)} className="cursor-pointer focus:cursor-pointer focus:outline-none px-3 py-2">{items.label}</button>
            </li>
          ))}
        </ul>

        <button onClick={()=> setIsOpen((prev)=>!prev)} className="md:hidden text-2xl text-slate-300 hover:text-white focus:outline-none">
          {isOpen? <AiOutlineClose/> :<AiOutlineMenu/>}
        </button>
      </div>
     {isOpen&&(
      <div className="md:hidden border-white/10 pt-4 bg-slate-900/95 rounded-b-xl absolute top-full left-0 w-full backdrop-blur-lg shadow-lg pb-4 pl-5">
          <ul className="flex flex-col space-y-4 px-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleScroll( item.href)}
                  className="block text-slate-300 hover:text-white text-base font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
     )} 
    </nav>
  );
};

export default NavBar;
