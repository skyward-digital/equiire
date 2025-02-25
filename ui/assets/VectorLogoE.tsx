'use client';

export function VectorLogoE(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1423"
      height="900"
      viewBox="0 0 1423 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="var(--bg-gradient)"
        d="M418.596 727.957C349.036 797.401 256.441 835.687 157.905 835.687C86.1505 835.687 17.5041 815.493 -41.9102 777.116L583.585 151.754L528.467 96.8383C429.656 -2.02817 298.031 -56.3956 157.905 -56.3956C17.7783 -56.3956 -113.939 -2.02814 -212.84 96.7469C-396.933 280.682 -417.591 571.16 -263.754 778.852L-476 991.022H-255.893L-153.7 888.775C-67.5954 952.645 34.5972 987.916 142.823 991.022C147.941 991.114 153.06 991.205 158.179 991.205C163.298 991.205 168.508 991.205 173.627 991.022C307.811 987.002 433.861 932.634 528.467 837.88L1369.81 -3.09521L1422.7 -166L1149.78 -3.09521L418.596 727.957ZM-102.878 206.852C-33.2266 137.317 59.3683 99.0313 157.905 99.0313C229.659 99.0313 298.214 119.225 357.719 157.602L-151.964 667.102C-244.65 523.28 -225.089 329.019 -102.878 206.852Z"
      />
      <defs>
        <linearGradient
          id="LightGradient"
          x1="332"
          y1="56.4048"
          x2="168"
          y2="863"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8622" />
          <stop offset="0.523099" stopColor="#FF9E4E" />
          <stop offset="0.796034" stopColor="#FF9E4E" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient
          id="DarkGradient"
          x1="358"
          y1="34"
          x2="18"
          y2="896"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9E4E" stopOpacity="0.9" />
          <stop offset="0.453125" stopColor="#FF8622" stopOpacity="0.9" />
          <stop offset="0.945221" stopColor="#26272B" stopOpacity="0.93" />
        </linearGradient>
        <style>
          {`
            .light {
              --bg-gradient: url(#LightGradient);

            }

            .dark {
                --bg-gradient: url(#DarkGradient);
              }

          `}
        </style>
      </defs>
    </svg>
  );
}
