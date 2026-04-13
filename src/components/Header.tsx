import Image from "next/image";
import { CURVE_OFFSET, CURVE_SIZE } from "@/shared/consts";
import styles from "./Header.module.css";
import N from "./N";

export default function Header() {
  const curveWidth = 500;
  const height = 80;

  return (
    <header className={styles.header}>
      <N className={styles.logo} />
      <svg viewBox={`0 0 ${curveWidth} 100`} height="30" className={styles.logoContainer}>
        <path d={`M 0 0 H ${curveWidth - CURVE_OFFSET} c ${-CURVE_SIZE} 0 ${-120 + CURVE_SIZE} ${height} -100 ${height} H 0 Z`} fill="white" />
      </svg>
    </header>
  );
}
