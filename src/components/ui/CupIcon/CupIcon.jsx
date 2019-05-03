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

const BgPath = styled.path`
  fill: var(--theme-color-card-bg);
  transition-property: fill;
  transition-timing-function: var(--easing);
  transition-duration: calc(var(--animation-duration) * var(--theme-change-padding));
`

const CupIcon = () => (
  <SvgBase
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 103.711 97.838"
  >
    <FgPath
      d="M72.084,62.001H31.245c0,3.696,2.254,5.411,4.062,5.411h32.716
            C70.188,67.413,72.084,65.284,72.084,62.001L72.084,62.001z"
    />
    <FgPath
      d="M37.714,32.729v22c0,2.71,2.104,4.855,4.381,4.855h17.78
      c2.568,0,4.32-2.396,4.32-4.855v-3.671c5.068,0,8.752-4.234,8.752-9.165c0-5.034-3.611-9.165-7.809-9.165H37.714L37.714,32.729z
      "
    />
    <BgPath
      d="M69.713,41.903c0.012-1.76-1.102-5.416-4.574-5.416v-0.001l-0.943-0.002v10.772
      c3.611,0.26,5.518-2.482,5.518-5.356V41.903z"
    />
  </SvgBase>
)

export default CupIcon
