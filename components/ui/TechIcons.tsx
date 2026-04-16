import { SVGProps } from "react";

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10.5 -9.45 21 18.9"
      fill="currentColor"
      {...props}
    >
      <circle r="2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function VueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
    </svg>
  );
}

export function SpringBootIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M11.98,1.48C6.21,1.48,1.48,6.21,1.48,12S6.21,22.52,12,22.52,22.52,17.79,22.52,12,17.79,1.48,12,1.48Zm0,19.54c-4.4,0-7.98-3.58-7.98-7.98S7.58,5.06,12,5.06,19.98,8.64,19.98,13,16.4,21.02,12,21.02Z" />
      <path d="M12,5.06c3.73,0,6.77,3.04,6.77,6.77s-3.04,6.77-6.77,6.77S5.23,15.56,5.23,11.83,8.27,5.06,12,5.06Zm0,12.09c2.94,0,5.32-2.38,5.32-5.32s-2.38-5.32-5.32-5.32S6.68,8.89,6.68,11.83,9.06,17.15,12,17.15Z" />
    </svg>
  );
}

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z" />
    </svg>
  );
}

export function NodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.09,10.09L16.5,8.5C16.25,8.25,16,8,15.75,8H12.5V6H11V8H7.75C7.5,8,7.25,8.25,7,8.5L5.41,10.09C5.16,10.34,5,10.66,5,11V13C5,13.34,5.16,13.66,5.41,13.91L7,15.5C7.25,15.75,7.5,16,7.75,16H11V18H12.5V16H15.75C16,16,16.25,15.75,16.5,15.5L18.09,13.91C18.34,13.66,18.5,13.34,18.5,13V11C18.5,10.66,18.34,10.34,18.09,10.09ZM17,13L15.5,14.5H12.5V14H11V14.5H8.5L7,13V11L8.5,9.5H11V10H12.5V9.5H15.5L17,11V13Z" />
    </svg>
  );
}