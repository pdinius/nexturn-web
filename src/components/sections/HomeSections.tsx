import BlueprintsSection from "./BlueprintsSection";
import WaveBandSection from "./WaveBandSection";
import styles from "./HomeSections.module.css";

export default function HomeSections() {
  return (
    <>
      <BlueprintsSection />

      <WaveBandSection backgroundColor="#ffd63a">
        <div className={`${styles.bandInner} ${styles.prose} ${styles.gold}`}>
          <p>
            NexTurn is your board game life made easier. Turn order tracking made easier. Picking the right game based on
            how much time you have made easier. Managing an entire RPG session made easier.
          </p>
          <p>
            NexTurn is a sleek, semi-transparent device with 9 embedded LED lights. Multi-functional, NexTurn is also
            designed to be a coaster, so no extra table space is needed. NexTurn will light up during your turn, so you
            and your group can focus on what matters—playing games together.
          </p>
          <p>
            NexTurn is also an app that stores color palettes for your favorite colors, has numerous turn-order modes,
            can display your game night seating arrangement, and enables device mode functionality. The NexTurn app can
            be completely standalone: if you don&apos;t yet have devices, you can manage turn order solely on the app.
          </p>
        </div>
      </WaveBandSection>

      <WaveBandSection backgroundColor="#ff6271" reverse>
        <div className={`${styles.bandInner} ${styles.prose} ${styles.coral}`}>
          <h2 className={styles.h2AlignRight}>App features</h2>

          <h3>Customize your game experience</h3>
          <p>
            Custom player color, seating arrangement, table configuration, long turn reminder mode, and more.
          </p>

          <h3>Turn order modes for all your favorite games</h3>
          <ul>
            <li>Clockwise / counter-clockwise</li>
            <li>
              <strong>Manual:</strong> Pick a specific turn order. Can be updated between rounds.
            </li>
            <li>
              <strong>Race:</strong> Players race to be first to end their turn.
            </li>
            <li>
              <strong>Random:</strong> After a turn is finished, the next player chosen will be random.
            </li>
            <li>
              <strong>Steal:</strong>
              <ul className={styles.subList}>
                <li>
                  <strong>Any mode + Steal:</strong> Have a copy of <em>Glory to Rome</em>? Play mahjong? Steal mode can
                  be combined with any turn-order mode to accommodate games with steal or follow actions.
                </li>
              </ul>
            </li>
          </ul>

          <h3>RPG mode</h3>
          <p>
            A DM can specify any number of players, enemies, NPCs and/or environments, and a custom view allows easy
            drop-in play and combat round tracking.
          </p>

          <ul>
            <li>Push sessions to your BGG profile</li>
            <li>Device mode or play on phone</li>
            <li>Detailed game session filtering</li>
            <li>Player count statistics</li>
            <li>Shared game palettes and game setup</li>
          </ul>
        </div>
      </WaveBandSection>

      <WaveBandSection backgroundColor="#1d649f">
        <div className={`${styles.bandInner} ${styles.prose} ${styles.blue}`}>
          <h2 className={styles.h2AlignRight}>Products</h2>
          <div className={styles.productCard}>
            <h3>NexTurn 1.0</h3>
            <p className={styles.productMeta}>Placeholder — 5.5&quot; × 5.5&quot; × 0.75&quot; wireless coaster</p>
            <ul>
              <li>Semi-transparent silicone covering</li>
              <li>9 embedded RGB LEDs for full device coverage</li>
              <li>10 hour battery life</li>
            </ul>
          </div>
        </div>
      </WaveBandSection>

      <WaveBandSection backgroundColor="#ffd63a" bottomPadding="2.5rem">
        <div className={`${styles.bandInner} ${styles.prose} ${styles.gold}`}>
          <h2 className={styles.h2AlignLeft}>What&apos;s next</h2>
          <p>
            Stay tuned for more product launches in the near future. Please submit feedback through the app to request
            new features that would improve your experience.
          </p>
        </div>
      </WaveBandSection>
    </>
  );
}
