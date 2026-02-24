import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const curveSize = 15;
  const curveDimension = 50;

  return (
    <footer className={styles.footer}>
      <Image
        src="/nexturn.svg"
        alt="Nexturn"
        width={150}
        height={263}
        className={styles.footerLogo}
      />
      <div className={styles.logo}>
        <div className={styles.leftLogoInner} style={{ clipPath: `path("M 0 ${curveDimension} h ${curveDimension - curveSize} a ${curveSize},${curveSize} 0,0,0 ${curveSize},-${curveSize} h 1 v ${curveSize} Z")` }}></div>
        <div className={styles.rightLogoInner} style={{ borderTopLeftRadius: curveSize }} ></div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.nexturn}>NEXTURN</div>
        <hr className={styles.separator} />
        <div className={styles.copyright}>
          <p>
            <span className="no-break">Copyright © 2026 Nexturn.</span><wbr />{` `}
            <span className="no-break">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
