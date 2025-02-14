import { list } from "postcss";
import Link from "../Link/Link";


const Navbar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/cart", name: "Cart" },
      ];
      

      
    return (
      <nav>
           <ul className="md:flex">
           {
            routes.map(route => <Link key={route.id} route={route}></Link>)
           }
           </ul>
      </nav>
    );
};

export default Navbar;