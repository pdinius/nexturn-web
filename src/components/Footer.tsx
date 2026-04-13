import Image from "next/image";
import { CURVE_OFFSET, CURVE_SIZE } from "@/shared/consts";
import styles from "./Footer.module.css";
import NexTurnLogo from "./NexTurnLogo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <NexTurnLogo className={styles.footerLogo} />
      <svg viewBox="0 0 300 100" height="50" className={styles.logoContainer}>
        <path d={`M ${CURVE_OFFSET} 100 c ${CURVE_SIZE} 0 ${100 - CURVE_SIZE} -100 100 -100 H 300 v 100 Z`} fill="white" />
      </svg>
      <div className={styles.footerContent}>
        <div className={styles.nexturn}>NEXTURN</div>
        <hr className={styles.separator} />
        <div className={styles.copyright}>
          <p>
            <span className="no-break">Copyright © 2026 Nexturn.</span>
            <wbr />
            {` `}
            <span className="no-break">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
