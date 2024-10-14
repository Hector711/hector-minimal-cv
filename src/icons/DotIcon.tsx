export default function DotIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons icons-stroke"
      id="dot"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M8 12a4 4 0 108 0 4 4 0 10-8 0" />
    </svg>
  )
}