import React from 'react'

export default function SpainFlag(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 256 256"
      {...props}
    >
      <g strokeWidth={0} strokeMiterlimit={10} fill="none">
        <path
          d="M0 45c0 8.199 2.202 15.88 6.034 22.5h77.932A44.767 44.767 0 0090 45c0-8.199-2.202-15.88-6.034-22.5H6.034A44.767 44.767 0 000 45z"
          fill="#ffc400"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
        <path
          d="M83.966 22.5a45.903 45.903 0 00-.831-1.381C75.176 8.438 61.077 0 45 0a44.733 44.733 0 00-22.5 6.04A45.242 45.242 0 006.034 22.5h77.932zM6.034 67.5A45.251 45.251 0 0022.5 83.96 44.733 44.733 0 0045 90c16.077 0 30.176-8.438 38.135-21.12.285-.455.562-.915.831-1.38H6.034z"
          fill="#c60b1e"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        />
      </g>
    </svg>
  )
}
