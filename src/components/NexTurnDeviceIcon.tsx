import React from 'react';

interface Props {
  size?: number;
  color?: string;
  glowColor?: string;
}

export default function NexTurnDeviceIcon({
  size = 32,
  color = '#766656',
  glowColor = '#be8c41'
}: Props) {
  const scale = size / 32;

  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      {/* Device body - rounded square */}
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"

        ry="6"
        fill={color}
        opacity={0.2}
      />
      <rect
        x="3"
        y="3"
        width="26"
        height="26"
        rx="5"
        ry="5"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* Inner glow ring */}
      <circle
        cx="16"
        cy="14"
        r="9"
        fill={glowColor}
        opacity={0.15}
      />

      {/* Central light circle */}
      <circle
        cx="16"
        cy="14"
        r="7"
        fill="none"
        stroke={glowColor}
        strokeWidth="2"
      />

      {/* Inner glow */}
      <circle
        cx="16"
        cy="14"
        r="4"
        fill={glowColor}
        opacity={0.4}
      />

      {/* Single button on right side */}
      <circle
        cx="24"
        cy="24"
        r="2.5"
        fill={color}
        opacity={0.6}
      />
    </svg>
  );
}
