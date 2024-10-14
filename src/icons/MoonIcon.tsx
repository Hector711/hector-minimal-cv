export default function MoonIcon(props: any) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icons icons-stroke'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M12 3h.393a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z' />
    </svg>
  );
}
