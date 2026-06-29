import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Container from "../Container";
import useProducts from "../../hooks/products";
import Button from "../Button";
const NavLinks = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact", link: "/contact" },
];

export default function ButtonHeader() {
  const { allCategories, getCategories } = useProducts();
  const location = useLocation();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    setCategoryOpen(false);
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    getCategories();
  }, []);

  const categoriesList = allCategories.map((category) => {
    return (
      <Link
        key={category.slug}
        to={"category/" + category.slug}
        style={{ height: "100%", color: "var(--main-color)" }}
      >
        {category.name}{" "}
      </Link>
    );
  });
  const linksList = NavLinks.map((link) => {
    return (
      <li
        key={link.title}
        className={location.pathname === link.link ? "active " : ""}
      >
        <Link to={link.link} className="">
          {link.title}
        </Link>
      </li>
    );
  });

  const linksListMobile = NavLinks.map((link, index) => {
    return (
      <li
        key={link.title}
        className={location.pathname === link.link ? "active " : ""}
      >
        {index == NavLinks.length - 1 ? (
          <Link to={link.link} className=" hover:bg-violet-500">
            {link.title}
          </Link>
        ) : (
          <Link
            to={link.link}
            className="border-b border-b-gray-200 hover:bg-violet-500"
          >
            {link.title}
          </Link>
        )}
      </li>
    );
  });

  return (
    <>
      <div className="bg-(--main-color) text-white w-full">
        <Container className="flex items-center justify-between w-full">
          <nav className="flex items-center justify-between gap-4 w-full">
            <div className=" relative h-full  w-55">
              <div
                className="flex cursor-pointer items-center py-1"
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                <p className="font-bold">browse category</p>
                <ArrowDropDownIcon />
              </div>
              <div
                className={`category-nav-list ${categoryOpen} `}
                style={{ zIndex: "100" }}
              >
                {categoriesList}
              </div>
            </div>

            <div className="hidden md:flex nav-links ">
              {linksList}
              <div className="cursor-pointer">
                <Link to={"/login"}>
                  <LoginIcon />
                </Link>
              </div>
            </div>

            <button
              className="md:hidden p-2 rounded-lg transition hover:bg-white/15"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <MenuIcon />
            </button>
          </nav>

          <div className={`nav-links-mobile ${mobileOpen ? "open" : ""}`}>
            {linksListMobile}
            <button className="flex justify-center bg-white gap-2 p-1 rounded-lg text-(--main-color) mt-1 cursor-pointer">
              <Link to="/login">
                Login <LoginIcon />
              </Link>
            </button>
          </div>
        </Container>
      </div>
    </>
  );
}
