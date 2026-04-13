import Image from "next/image";
import styles from "./BlueprintsSection.module.css";
import { CURVE_HEIGHT } from "@/shared/consts";

export default function BlueprintsSection() {
  return (
    <section className={styles.section} style={{ paddingBottom: CURVE_HEIGHT }}>
      <div className={styles.stage}>
        <div className={styles.center}>
          <div className={styles.imageSlot}>
            <Image
              src="/blueprints.png"
              alt="Blueprints"
              width={1124}
              height={565}
              className={styles.image}
              sizes="(max-width: 1200px) 100vw, 1124px"
              priority
            />
          </div>
        </div>
        <div className={styles.logoBar}>
          <span className={styles.logoText}>
            NEXTURN
          </span>
        </div>
      </div>
    </section>
  );
}
