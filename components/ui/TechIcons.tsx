import { SVGProps } from "react";

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10 23 20"
      fill="none"
      {...props}
    >
      <circle r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.15">
        <ellipse rx="10.5" ry="4.2" />
        <ellipse rx="10.5" ry="4.2" transform="rotate(60)" />
        <ellipse rx="10.5" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function VueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 3h4.18L12 13.1 17.82 3H22l-10 18L2 3Z"
      />
      <path
        fill="currentColor"
        opacity="0.5"
        d="M6.35 3H9.2L12 7.8 14.8 3h2.85L12 12.8 6.35 3Z"
      />
    </svg>
  );
}

export function SpringBootIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        opacity="0.18"
        d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5s-4.25 9.5-9.5 9.5S2.5 17.25 2.5 12 6.75 2.5 12 2.5Z"
      />
      <path
        fill="currentColor"
        d="M17.1 7.6c-2.9 0-5.7 1.18-7.74 3.25-1.77 1.8-2.9 4.13-3.15 6.52-.04.35.26.66.62.62 2.4-.25 4.72-1.37 6.52-3.15 2.07-2.04 3.25-4.84 3.25-7.74 0-.28-.22-.5-.5-.5Z"
      />
      <path
        d="M8.2 15.8c2.43-.2 4.77-1.24 6.56-3.04"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12.2 10.2c1.26-.38 2.61-.42 3.89-.1"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M10.95 12.05c.3 2-.18 4.05-1.36 5.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.34 2.5 5.1 16.8a.62.62 0 0 0 .54.93h4.73L13.34 2.5Z"
      />
      <path
        fill="currentColor"
        d="m14.34 2.5 4.56 7.88-6.87 7.35h6.37c.22 0 .42-.12.54-.31l2.47-4.3a.62.62 0 0 0 0-.62L14.88 2.8a.62.62 0 0 0-.54-.3Z"
        opacity="0.92"
      />
      <path
        fill="currentColor"
        d="M10.18 17.73h9.31L14.9 9.8l-4.72 7.93Z"
        opacity="0.55"
      />
    </svg>
  );
}

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fill="currentColor" d="M3 3h18v18H3V3Z" />
      <path
        fill="#030303"
        d="M5.2 7.1h8.2v2H10.3v7.8H8.3V9.1H5.2v-2Zm10.95 3.42c0-.95.8-1.52 2-1.52 1 0 1.91.31 2.8 1.08l1.14-1.45c-1-.9-2.23-1.4-3.86-1.4-2.25 0-3.88 1.32-3.88 3.32 0 2.12 1.38 2.72 3.76 3.33 1.96.46 2.35.78 2.35 1.53 0 .9-.82 1.62-2.16 1.62-1.34 0-2.42-.48-3.47-1.35L13.5 17.3c1.2 1.08 2.8 1.63 4.67 1.63 2.39 0 4.07-1.24 4.07-3.43 0-1.9-1.25-2.66-3.64-3.24-2.05-.48-2.45-.8-2.45-1.74Z"
      />
    </svg>
  );
}

export function NodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 1.75 4 6.38v11.24l8 4.63 8-4.63V6.38L12 1.75Zm6.5 14.92L12 20.43l-6.5-3.76V7.33L12 3.57l6.5 3.76v9.34Z"
      />
      <path
        fill="currentColor"
        d="M9.06 8.27h1.86l3.15 5.45V8.27h1.87v7.46h-1.87l-3.14-5.44v5.44H9.06V8.27Z"
      />
    </svg>
  );
}
