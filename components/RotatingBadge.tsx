import { useId } from "react";

interface RotatingBadgeProps {
  text?: string;
  className?: string;
}

export default function RotatingBadge({
  text = "NICE TO MEET YOU",
  className = "",
}: RotatingBadgeProps) {
  const pathId = `badge-circle-${useId()}`;
  const repeated = `${text} • `.repeat(3);

  return (
    <div aria-hidden="true" className={`relative h-28 w-28 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
        <circle cx="50" cy="50" r="48" fill="#C6F24E" />
        <path id={pathId} d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
        <text fontSize="9" fontWeight="700" letterSpacing="0.5" fill="#10173B">
          <textPath href={`#${pathId}`} startOffset="0%">
            {repeated}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-2xl text-navy">
        ✦
    </span>
    </div>
  );
}