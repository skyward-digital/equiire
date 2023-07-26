export function PiggyBankIcon(props: React.SVGProps<SVGSVGElement>) {
  const stroke = props.className?.includes('stroke-');

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      {...props}
    >
      <path
        d="M3.83199 8.66667C3.83199 9.76559 4.27514 10.761 4.99248 11.484C5.06166 11.5537 5.09625 11.5886 5.11667 11.6221C5.13616 11.6541 5.1475 11.6816 5.1562 11.718C5.16532 11.7562 5.16532 11.7997 5.16532 11.8866V13.4667C5.16532 13.6534 5.16532 13.7467 5.20165 13.818C5.23361 13.8807 5.2846 13.9317 5.34732 13.9637C5.41863 14 5.51197 14 5.69865 14H6.96532C7.152 14 7.24535 14 7.31665 13.9637C7.37937 13.9317 7.43036 13.8807 7.46232 13.818C7.49865 13.7467 7.49865 13.6534 7.49865 13.4667V13.2C7.49865 13.0133 7.49865 12.92 7.53498 12.8487C7.56694 12.7859 7.61793 12.735 7.68066 12.703C7.75196 12.6667 7.8453 12.6667 8.03199 12.6667H8.96532C9.152 12.6667 9.24535 12.6667 9.31665 12.703C9.37937 12.735 9.43036 12.7859 9.46232 12.8487C9.49865 12.92 9.49865 13.0133 9.49865 13.2V13.4667C9.49865 13.6534 9.49865 13.7467 9.53498 13.818C9.56694 13.8807 9.61793 13.9317 9.68066 13.9637C9.75196 14 9.8453 14 10.032 14H11.2987C11.4854 14 11.5787 14 11.65 13.9637C11.7128 13.9317 11.7637 13.8807 11.7957 13.818C11.832 13.7467 11.832 13.6534 11.832 13.4667V12.8162C11.832 12.6815 11.832 12.6142 11.8512 12.5601C11.8696 12.5083 11.8927 12.472 11.932 12.4335C11.973 12.3933 12.0424 12.3611 12.1812 12.2967C12.836 11.9927 13.3947 11.5167 13.7994 10.9268C13.8706 10.823 13.9062 10.7712 13.9442 10.7405C13.9805 10.7112 14.0131 10.6941 14.0579 10.6807C14.1046 10.6667 14.1601 10.6667 14.2712 10.6667H14.632C14.8187 10.6667 14.9121 10.6667 14.9834 10.6303C15.0461 10.5984 15.0971 10.5474 15.129 10.4847C15.1654 10.4134 15.1654 10.32 15.1654 10.1333V7.85717C15.1654 7.67944 15.1654 7.59058 15.1323 7.52202C15.0996 7.454 15.0447 7.39911 14.9767 7.36635C14.9081 7.33333 14.8193 7.33333 14.6415 7.33333C14.5129 7.33333 14.4486 7.33333 14.3968 7.31587C14.3409 7.29704 14.3017 7.27199 14.2612 7.22918C14.2236 7.18948 14.1929 7.12309 14.1315 6.99032C13.9346 6.56415 13.6648 6.17852 13.3382 5.84936C13.269 5.77964 13.2344 5.74478 13.214 5.71125C13.1945 5.67926 13.1832 5.65172 13.1745 5.61529C13.1654 5.57711 13.1654 5.53367 13.1654 5.44678V4.70705C13.1654 4.46702 13.1654 4.34701 13.1154 4.26634C13.0716 4.19567 13.003 4.14392 12.923 4.12123C12.8317 4.09533 12.7163 4.1283 12.4855 4.19424L10.9038 4.64615C10.8769 4.65383 10.8635 4.65767 10.8498 4.66036C10.8377 4.66276 10.8254 4.66447 10.8131 4.66551C10.7992 4.66667 10.7852 4.66667 10.7573 4.66667H10.4714M3.83199 8.66667C3.83199 7.13062 4.69779 5.7968 5.96801 5.1266M3.83199 8.66667H3.16536C2.42898 8.66667 1.83203 8.06971 1.83203 7.33333C1.83203 6.83981 2.10016 6.40892 2.4987 6.17838M10.4987 4.33333C10.4987 5.622 9.45403 6.66667 8.16537 6.66667C6.8767 6.66667 5.83203 5.622 5.83203 4.33333C5.83203 3.04467 6.8767 2 8.16537 2C9.45403 2 10.4987 3.04467 10.4987 4.33333Z"
        stroke={!stroke ? '#475467' : undefined}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
