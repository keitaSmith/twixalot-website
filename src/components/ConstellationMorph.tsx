import styles from "./ConstellationMorph.module.css";

const hatStars = [
  { x: 245, y: 52, r: 3.8 },
  { x: 332, y: 84, r: 4.2 },
  { x: 374, y: 116, r: 3.5 },
  { x: 396, y: 152, r: 4.1 },
  { x: 374, y: 210, r: 3.5 },
  { x: 400, y: 280, r: 4.5 },
  { x: 484, y: 290, r: 3.4 },
  { x: 594, y: 333, r: 3.2 },
  { x: 526, y: 336, r: 3.2 },
  { x: 596, y: 342, r: 3.1 },
  { x: 564, y: 371, r: 3.6 },
  { x: 392, y: 388, r: 3.3 },
  { x: 214, y: 417, r: 4.2 },
  { x: 216, y: 393, r: 3.2 },
  { x: 136, y: 419, r: 3.8 },
  { x: 22, y: 386, r: 3.4 },
  { x: 0, y: 362, r: 3.2 },
  { x: 25, y: 329, r: 3.2 },
  { x: 88, y: 309, r: 3.4 },
  { x: 164, y: 294, r: 4.4 },
  { x: 225, y: 184, r: 3.6 },
  { x: 308, y: 79, r: 4.2 },
];

const leoStars = [
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

const arrowStars = [
  { x: 92, y: 330, r: 3.4 },
  { x: 178, y: 330, r: 3.6 },
  { x: 264, y: 330, r: 4 },
  { x: 350, y: 330, r: 4.2 },
  { x: 436, y: 330, r: 3.8 },
  { x: 522, y: 330, r: 4.2 },
  { x: 462, y: 274, r: 3.4 },
  { x: 522, y: 330, r: 4.2 },
  { x: 462, y: 386, r: 3.4 },
];

const extraLeoTargets = [
  { x: 456, y: 204, r: 0.1 },
  { x: 392, y: 160, r: 0.1 },
  { x: 304, y: 170, r: 0.1 },
  { x: 220, y: 306, r: 0.1 },
  { x: 146, y: 370, r: 0.1 },
  { x: 146, y: 370, r: 0.1 },
  { x: 164, y: 254, r: 0.1 },
  { x: 220, y: 306, r: 0.1 },
  { x: 304, y: 170, r: 0.1 },
  { x: 392, y: 160, r: 0.1 },
  { x: 456, y: 204, r: 0.1 },
  { x: 456, y: 204, r: 0.1 },
  { x: 392, y: 160, r: 0.1 },
  { x: 304, y: 170, r: 0.1 },
  { x: 220, y: 306, r: 0.1 },
  { x: 146, y: 370, r: 0.1 },
  { x: 164, y: 254, r: 0.1 },
  { x: 270, y: 122, r: 0.1 },
  { x: 282, y: 34, r: 0.1 },
];

const morphTargets = [...leoStars, ...extraLeoTargets];

const hatLineOrder = [
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 0,
];
const leoLineOrder = [0, 1, 3, 4, 5, 6, 5, 4, 3, 7, 8, 2, 0];
const arrowLineOrder = [0, 1, 2, 3, 4, 5, 6, 5, 8];

function pointsFrom(order: number[], source: typeof hatStars) {
  return order.map((index) => `${source[index].x},${source[index].y}`).join(" ");
}

export function ConstellationMorph({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.sky} ${className}`} aria-hidden="true">
      <svg className={styles.constellation} viewBox="0 0 600 420" role="img">
        <defs>
          <filter id="constellation-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polyline data-hat-line className={`${styles.line} ${styles.hatLine}`} points={pointsFrom(hatLineOrder, hatStars)} />
        <polyline data-leo-line className={`${styles.line} ${styles.leoLine}`} points={pointsFrom(leoLineOrder, leoStars)} />
        <polyline data-arrow-line className={`${styles.line} ${styles.arrowLine}`} points={pointsFrom(arrowLineOrder, arrowStars)} />
        {hatStars.map((star, index) => {
          const target = morphTargets[index];
          const arrow = arrowStars[index] ?? arrowStars[arrowStars.length - 1];
          return (
            <circle
              key={`${star.x}-${star.y}`}
              data-morph-star
              data-extra-star={index >= leoStars.length ? "true" : undefined}
              className={styles.star}
              cx={star.x}
              cy={star.y}
              r={star.r}
              data-target-x={target.x}
              data-target-y={target.y}
              data-target-r={target.r}
              data-arrow-x={arrow.x}
              data-arrow-y={arrow.y}
              data-arrow-r={arrow.r}
            />
          );
        })}
      </svg>
    </div>
  );
}
