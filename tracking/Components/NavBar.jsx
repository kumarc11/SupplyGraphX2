import { useEffect, useState, useContext } from "react";

import { TrackingContext } from "../Conetxt/TrackingContext";
import { Nav1, Nav2, Nav3 } from "../Components/index";

export default () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext(TrackingContext);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/Services1" },
    { title: "About Us", path: "/AboutUs" },
    { title: "Testnets", path: "/Polygon" },
  ];

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav
      className={`bg-white pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:flex md:px-8 items-center gap-x-10">
        
        <div className="flex items-center justify-between py-5 md:block">
          <a href="/">
            <img
              src="https://iili.io/3ZXLAYP.jpg"
              width={120}
              height={50}
              alt="SupplyGraphX logo"
              className="object-contain"
            />
          </a>
          <div className="md:hidden">
            <button
              className="menu-btn text-indigo-600 hover:text-indigo-800 focus:outline-none"
              onClick={() => setState(!state)}
              aria-label="Toggle Menu"
            >
              {state ? <Nav1 /> : <Nav2 />}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-4 md:items-center md:justify-start text-left">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.path}
                  className="block text-gray-700 hover:text-indigo-600 font-semibold transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 md:mt-0 md:ml-auto flex items-center gap-x-4">
            {currentUser ? (
              <button
                onClick={() => navigator.clipboard.writeText(currentUser)}
                title="Click to copy address"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-full transition"
              >
                {currentUser.slice(0, 25)}.. 📋
              </button>
            ) : (
              <button
                onClick={() => connectWallet()}
                className="flex items-center gap-x-1 py-2 px-4 text-white font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-full transition"
              >
                Connect Wallet
                <Nav3 />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
