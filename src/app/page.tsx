import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSections from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <HomeSections />
        </div>
        <div className={styles.mainChrome}>
          <Footer />
        </div>
      </main>
    </div>
  );
}
