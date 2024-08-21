import { cn } from "@/lib/utils";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Icons = {
  hotspot: ({ ...props }: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", props.className)}
    >
      <path
        d="M32.48 15.52C33.5957 16.6345 34.4808 17.9579 35.0847 19.4147C35.6886 20.8715 35.9994 22.433 35.9994 24.01C35.9994 25.587 35.6886 27.1485 35.0847 28.6053C34.4808 30.062 33.5957 31.3855 32.48 32.5M15.52 32.48C14.4043 31.3655 13.5192 30.042 12.9153 28.5853C12.3114 27.1285 12.0006 25.567 12.0006 23.99C12.0006 22.413 12.3114 20.8515 12.9153 19.3947C13.5192 17.9379 14.4043 16.6145 15.52 15.5M38.14 9.85999C41.8894 13.6105 43.9957 18.6967 43.9957 24C43.9957 29.3033 41.8894 34.3894 38.14 38.14M9.86 38.14C6.11058 34.3894 4.00427 29.3033 4.00427 24C4.00427 18.6967 6.11058 13.6105 9.86 9.85999M28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7908 21.7909 20 24 20C26.2091 20 28 21.7908 28 24Z"
        stroke="#B3B3B3"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  chip: ({ ...props }: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", props.className)}
    >
      <g clip-path="url(#clip0_2_44)">
        <path
          d="M18 2V8M30 2V8M18 40V46M30 40V46M40 18H46M40 28H46M2 18H8M2 28H8M12 8H36C38.2091 8 40 9.79086 40 12V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12C8 9.79086 9.79086 8 12 8ZM18 18H30V30H18V18Z"
          stroke="#B3B3B3"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_44">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  disk: ({ ...props }: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", props.className)}
    >
      <path
        d="M44 24H4M44 24V36C44 37.0609 43.5786 38.0783 42.8284 38.8284C42.0783 39.5786 41.0609 40 40 40H8C6.93913 40 5.92172 39.5786 5.17157 38.8284C4.42143 38.0783 4 37.0609 4 36V24M44 24L37.1 10.22C36.7688 9.55357 36.2584 8.99274 35.6259 8.60056C34.9935 8.20838 34.2642 8.00039 33.52 8H14.48C13.7358 8.00039 13.0065 8.20838 12.3741 8.60056C11.7417 8.99274 11.2312 9.55357 10.9 10.22L4 24M12 32H12.02M20 32H20.02"
        stroke="#B3B3B3"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
