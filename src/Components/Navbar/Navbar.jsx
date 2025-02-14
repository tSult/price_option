import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [open,setOpen]= useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/cart", name: "Cart" },
      ];
      

      
    return (
      <nav className="text-black p-6 bg-yellow-200">
           <div className="text-2xl md:hidden" onClick={()=>setOpen(!open)}>
            {
                open === true ? 
                <AiOutlineClose></AiOutlineClose> 
                : <AiOutlineMenu className=""></AiOutlineMenu>
            }
          
           </div>
           <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-12':'-top-60'} bg-yellow-200 px-6 `}>
           {
            routes.map(route => <Link key={route.id} route={route}></Link>)
           }
           </ul>
      </nav>
    );
};

export default Navbar;