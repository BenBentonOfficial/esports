import Link from "next/link";
import styles from "../styles/landing.module.css"

export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center my-80">
        <div className={styles.title}></div>
        <div className="text-6xl font-bold">
          <h1>
            Welcome to{" "}
            <Link href="/info">
              <a className="text-blue-600 hover:text-blue-700">BCTAL Esports</a>
            </Link>
          </h1>
        </div>
        <div className="text-2xl italic">The future is now</div>
      </div>
    </>
  );
}
