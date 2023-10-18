import * as React from "react";
import { getBoxToBoxArrow } from "perfect-arrows";

function Arrows() {
  const p1 = { x: 200, y: 200, w: 64, h: 64 };
  const p2 = { x: 320, y: 100, w: 64, h: 64 };

  const arrow = getBoxToBoxArrow(
    p1.x,
    p1.y,
    p1.w,
    p1.h,
    p2.x,
    p2.y,
    p2.w,
    p2.h,
    { padStart: 0, padEnd: 0 }
  );

  const [sx, sy, cx, cy, ex, ey, ae, as, ec] = arrow;

  const endAngleAsDegrees = ae * (180 / Math.PI);

  return (
    <svg
      viewBox="0 0 1280 720"
      style={{ width: 1280, height: 720 }}
      stroke="#000"
      fill="#000"
      strokeWidth={3}
    >
      <path
        d={`M${sx},${sy} Q${cx},${cy} ${ex},${ey}`}
        strokeDasharray="5,5"
        fill="none"
      />
      <rect x={p1.x} y={p1.y} width={p1.w} height={p1.h} fill="none" />
      <rect x={p2.x} y={p2.y} width={p2.w} height={p2.h} fill="none" />
    </svg>
  );
}

export default Arrows;
