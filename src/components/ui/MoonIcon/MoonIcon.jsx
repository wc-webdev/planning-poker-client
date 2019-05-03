import * as React from 'react'
import styled from 'styled-components'

const SvgBase = styled.svg`
  height: 1.5em;
`

const FgPath = styled.path`
  fill: var(--theme-color-fg);
  transition-property: fill;
  transition-timing-function: var(--easing);
  transition-duration: calc(var(--animation-duration) * var(--theme-change-padding));
`

const MoonIcon = () => (
  <SvgBase
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <FgPath
      d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"
    />
    <path
      d="M0 0h24v24H0z"
      fill="none"
    />
  </SvgBase>
)

export default MoonIcon
