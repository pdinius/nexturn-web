interface NProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export default function N({ width, height, color = "#1d649f", className }: NProps) {
  return (
    <svg width={width} height={height || 75} viewBox="0 0 150 150" fill={color} className={className}>
      <path d="M0,5v140c0,2.76,2.24,5,5,5h40c2.76,0,5-2.24,5-5v-37.76c0-2.67,3.23-4.01,5.12-2.12l41.95,41.95c1.88,1.88,4.42,2.93,7.07,2.93h40.86c2.76,0,5-2.24,5-5v-40.86c0-2.65-1.05-5.2-2.93-7.07L52.93,2.93c-1.88-1.88-4.42-2.93-7.07-2.93H5C2.24,0,0,2.24,0,5Z" fill="currentColor" />
      <path d="M90.79,5.12c-1.89-1.89-.55-5.12,2.12-5.12h52.09c2.76,0,5,2.24,5,5v37.76c0,1.74-1.35,2.99-2.84,2.99h-11.59c-2.65,0-5.19-1.05-7.07-2.93L90.79,5.12Z" fill="currentColor" />
    </svg>
  );
}