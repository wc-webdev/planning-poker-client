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

const SunIcon = () => (
  <SvgBase
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M0 0h24v24H0z"
      fill="none"
    />
    <FgPath
      d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
    />
  </SvgBase>
)

export default SunIcon
