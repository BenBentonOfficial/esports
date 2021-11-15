import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div class="rounded-lg bg-base-100 drawer">
        <input
          id="nav-drawer"
          type="checkbox"
          className="drawer-toggle"
        ></input>
        <div className="flex flex-col drawer-content">
          <div className="w-full navbar bg-base-200">
            <div className="flex-none lg:hidden">
              <label for="nav-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <span>
                BCTAL ESports
              </span>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu horizontal">
                <li>
                  <Link href="/teams">
                    <a className="rounded-btn">Teams</a>
                  </Link>
                </li>
                <li>
                  <Link href="/info">
                    <a className="rounded-btn">Info</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="rounded-btn">Media</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label for="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200">
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Info</a>
            </li>
            <li>
              <a>Media</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
