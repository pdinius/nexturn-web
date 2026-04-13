import { useId, useMemo, type CSSProperties, type ReactNode } from "react";
import styles from "./WaveBandSection.module.css";
import { CURVE_HEIGHT } from "@/shared/consts";

const TILE_WIDTH_U = 2505;
const VIEWBOX_H = 174;

const CURVE_A_VIEWBOX = `0 0 ${TILE_WIDTH_U} ${VIEWBOX_H}`;

const CURVE_A_PATH_D =
  "M2505.01,92.951V174.01H0.014V93.041C68.75,118.774,167.1,151.589,290.139,109c182-63,261-59,411-6s347.421,112.93,449,24c107.19-93.843,207.64-200.339,413-57,139.25,97.195,280.48,95.7,428,50,64.05-19.845,143.13-54.006,222.93-65.844C2322.18,38.119,2428.06,65.215,2505.01,92.951Z";

function hashToPercent(key: string): number {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % 100;
}

export type WaveBandSectionProps = {
  backgroundColor: string;
  reverse?: boolean;
  bottomPadding?: string;
  children?: ReactNode;
};

export default function WaveBandSection({
  backgroundColor,
  reverse,
  bottomPadding,
  children,
}: WaveBandSectionProps) {
  const instanceId = useId();
  const offsetPercent = useMemo(
    () => hashToPercent(`${instanceId}|${backgroundColor}|${reverse ?? false}`),
    [instanceId, backgroundColor, reverse],
  );

  const groupTx = -(offsetPercent / 100) * TILE_WIDTH_U;

  const cssVars = {
    "--band-bg": backgroundColor,
    "--curve-height": CURVE_HEIGHT,
    ...(bottomPadding != null ? { "--section-padding-bottom": bottomPadding } : {}),
  } as CSSProperties;

  return (
    <section className={styles.section} style={cssVars}>
      <svg
        className={[styles.wave, reverse && styles.waveReverse].filter(Boolean).join(" ")}
        viewBox={CURVE_A_VIEWBOX}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g transform={`translate(${groupTx}, 0)`}>
          <path className={styles.wavePath} fillRule="evenodd" d={CURVE_A_PATH_D} />
          <path
            className={styles.wavePath}
            fillRule="evenodd"
            d={CURVE_A_PATH_D}
            transform={`translate(${TILE_WIDTH_U}, 0)`}
          />
        </g>
      </svg>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
