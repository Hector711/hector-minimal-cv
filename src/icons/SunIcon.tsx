export default function SunIcon(props: any) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      className='icons icons-stroke'
      {...props}
    >
      <g strokeWidth={2}>
        <circle cx={12} cy={12} r={5} />
        <path
          d='M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.223l-2.222 2.031M4.222 4.223l2.222 2.031M6.444 17.556l-2.222 2.222M19.778 19.777l-2.222-2.222'
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
}
