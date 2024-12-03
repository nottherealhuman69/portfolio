import { Link } from "react-scroll";

const Links = () => {
  const items = ["Home", "About", "Technologies", "Projects"];

  return (
    <div className="links">
      {items.map(item => (
        <Link
          key={item}
          to={item} // ID of the target component section
          smooth={true} // Smooth scrolling
          duration={500} // Duration of scroll in ms
          offset={-70} // Offset for fixed navbar (if necessary)
          className="cursor-pointer hover:text-blue-500 transition"
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Links;
