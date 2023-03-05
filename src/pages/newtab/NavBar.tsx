import "@pages/newtab/Newtab.css";
import { BsPalette2 } from "react-icons/bs";
import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import { Theme } from "./Config";

interface NavbarProps {
  username: string;
  language: string;
  theme: Theme[];
}

const Navbar = ({ username, language, theme }: NavbarProps) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
    date.toLocaleString(language, {
      ...options,
      hour12: false,
    });

  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="navbar-start">
        <div className="navbar-center">
          <p className="btn btn-ghost normal-case text-xl">
            {formatDate(dateState, {
              weekday: "long",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="navbar-center">
        <p className="normal-case text-primary-content Hello-User-Font FadeInFadeOutText">
          Hello {username}
        </p>
        <p className="text-xl FadeInFadeOutText">
          {formatDate(dateState, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}
        </p>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle">
            <BsPalette2 />
          </button>
          <div className="btn-group btn-group-vertical menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56">
            {theme.map((item) => (
              <button
                key={item.theme}
                data-set-theme={item.theme}
                className="btn"
                data-act-class="btn-active"
              >
                {`${item.emoji} ${item.name}`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
