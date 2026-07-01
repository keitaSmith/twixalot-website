import styles from "./Constellation.module.css";

const stars = [
  { x: 146, y: 370, r: 3.2 },
  { x: 164, y: 254, r: 4.8 },
  { x: 220, y: 306, r: 6 },
  { x: 304, y: 170, r: 5.8 },
  { x: 270, y: 122, r: 3.8 },
  { x: 282, y: 34, r: 4.8 },
  { x: 360, y: 34, r: 3.4 },
  { x: 392, y: 160, r: 4.6 },
  { x: 456, y: 204, r: 3.6 },
];

export function LeoConstellation() {
  const linePoints = [stars[0], stars[1], stars[3], stars[4], stars[5], stars[6], stars[5], stars[4], stars[3], stars[7], stars[8], stars[2], stars[0]]
    .map((star) => `${star.x},${star.y}`)
    .join(" ");

  return (
    <div className={styles.sky} aria-hidden="true">
      <svg className={styles.leo} viewBox="0 0 600 420" role="img">
        <polyline className={styles.line} points={linePoints} />
        {stars.map((star, index) => (
          <g key={`${star.x}-${star.y}`}>
            <circle className={styles.halo} cx={star.x} cy={star.y} r={star.r * 5.8} style={{ animationDelay: `${index * -0.62}s` }} />
            <circle className={styles.star} cx={star.x} cy={star.y} r={star.r} />
          </g>
        ))}
      </svg>
    </div>
  );
}
