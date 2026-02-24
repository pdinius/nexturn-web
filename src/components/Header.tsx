import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/n.svg"
        alt="Nexturn"
        width={150}
        height={150}
        className={styles.logo}
      />
    </header>
  );
}
