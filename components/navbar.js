import Link from "next/link";
import styles from "../styles/navbar.module.css"

export default function Navbar() {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10">
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold">BCTAL Esports</span>
        </div>
        <div class="flex-none hidden px-2 mx-2 md:flex">
          <div className="flex items-stretch">
            <Link href="/">
              <a className="btn btn-ghost btn rounded-btn">Teams</a>
            </Link>
            <Link href="/">
              <a className="btn btn-ghost btn rounded-btn">Info</a>
            </Link>
            <Link href="/">
              <a className="btn btn-ghost btn rounded-btn">Media</a>
            </Link>
          </div>
        </div>
        <div className="flex-none md:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex="0" className="btn btn-ghost">
              Dropdown
            </div>
            <ul
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">
                  <a>Teams</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Info</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Media</a>
                </Link>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="btn btn-ghost"></div>
        </div>
      </div>
    </>
  );
}
