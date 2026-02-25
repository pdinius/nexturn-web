import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeviceStlViewerDynamic from "@/components/DeviceStlViewerDynamic";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.canvasWrapper}>
        <DeviceStlViewerDynamic />
      </div>
      <Header />
      <main className={styles.main} />
      <Footer />
    </div>
  );
}
