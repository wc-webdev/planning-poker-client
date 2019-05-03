import * as React from 'react'
import styled, { keyframes, } from 'styled-components'
import media from 'styled-media-query'

import CupIcon from './components/ui/CupIcon/CupIcon'
import MoonIcon from './components/ui/MoonIcon/MoonIcon'
import SunIcon from './components/ui/SunIcon/SunIcon'

import './assets'

const Intro = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const Outro = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const Container = styled.div`
  max-width: 100vmin;
  width: 100%;
  
  margin: 0 auto;
  padding: 1rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: -0.5rem;
`

const ButtonWrapper = styled.div`
  width: 50%;
  display: block;
  padding: 0.5rem;
  counter-increment: key;
  font-size: 4rem;
  
  ${media.greaterThan('small')`
    width: ${100 / 3}%;
    font-size: 5rem;
  `}
  
  ${media.greaterThan('medium')`
    width: ${100 / 3}%;
    font-size: 6rem;
  `}
  
  ${media.greaterThan('large')`
    width: 25%;
    font-size: 6rem;
  `}
`

const Button = styled.button`
  padding-bottom: 100%;
  vertical-align: top;
  position: relative;
  font: inherit;
  color: inherit;
  width: 100%;
  height: 100%;
  background-color: var(--theme-color-card-bg);
  background-image: linear-gradient(to bottom right, transparent, rgba(0,0,0,0.0625));
  border: 0;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 4px rgba(0,0,0,0.25),
    0 0 0 rgba(0,0,0,0.25);
  outline: 0;
  cursor: pointer;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0;
  transition-property: background-color;
  transition-duration: calc(var(--animation-duration) * var(--theme-change-padding));
  transition-timing-function: var(--easing);
  animation-name: ${props => props.cardShown ? Outro : Intro};
  animation-duration: var(--animation-duration);
  animation-fill-mode: forwards;
  animation-timing-function: var(--easing);
  letter-spacing: ${props => (props.length - 1) * -0.025}em;
  &::after {
    letter-spacing: 0;
    content: counter(key);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0.75rem;
    right: 1rem;
    font-size: 0.15em;
    width: 1.5em;
    height: 1.5em;
    border-radius: 0.125em;
    opacity: 0.25;
    color: var(--theme-color-card-bg);
    background-color: var(--theme-color-fg);
    transition-property: background-color, color;
    transition-duration: calc(var(--animation-duration) * var(--theme-change-padding));
    transition-timing-function: var(--easing);
  }
  
  ${ButtonWrapper}:nth-child(10) > &::after {
    content: '0';
  }
  
  ${ButtonWrapper}:nth-child(10) ~ ${ButtonWrapper} > &::after {
    display: none;
  }
`

const ButtonLabel = styled.span`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const CurrentCard = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 55vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-color-card-bg);
  cursor: pointer;
  transition-property: z-index, opacity, background-color;
  transition-duration: var(--animation-duration), var(--animation-duration), calc(var(--animation-duration) * var(--theme-change-padding));
  transition-timing-function: var(--easing);
  text-transform: uppercase;
  z-index: ${props => props.cardShown ? 350 : -1};
  opacity: ${props => props.cardShown ? 1 : 0};
  letter-spacing: ${props => (props.length - 1) * -0.025}em;
  ${media.greaterThan('medium')`
    font-size: 65vmin;
  `}
  ${media.greaterThan('large')`
    font-size: 75vmin;
  `}
`

const ThemeToggle = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: inherit;
  height: 2rem;
  width: 2rem;
  border: 0;
  background: none;
  outline: none;
  cursor: pointer;
  z-index: 351;
  opacity: 0.25;
  transition-property: opacity;
  transition-timing-function: var(--easing);
  transition-duration: var(--animation-duration);
  transition-delay: calc(var(--animation-duration) * 5);
  
  &:hover {
    transition-delay: 0ms;
    opacity: 1;
  }

  &:active {
    transition-duration: 0ms;
    opacity: 1;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)
    const {
      buttons,
      hasCoffeeCupButton,
    } = props
    this.state = {
      selectedCard: null,
      cardShown: false,
      themeIndex: 0,
      themes: this.loadStylesheets(),
      buttonTexts: [
        ...buttons.split(' ').map(t => ({ id: t, label: t, })),
        hasCoffeeCupButton ? { id: 'cup', label: <CupIcon />, } : null,
      ]
        .filter(t => t !== null)
    }
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { cardShown, } = this.state

    window.document.body.style.overflow = cardShown ? 'hidden' : null
    window.activeElement = window.document.documentElement
  }

  loadStylesheets = () => {
    return (
      Array
        .from(window.document.getElementsByTagName('link'))
        .filter(el => el.getAttribute('rel').split(' ').includes('stylesheet'))
        .map(el => el.getAttribute('href'))
    )
  }

  handleToggleTheme = () => {
    this.setState(
      (state) => {
        const newThemeIndex = (state.themeIndex + 1) % state.themes.length
        Array
          .from(window.document.getElementsByTagName('link'))
          .filter(el => el.getAttribute('rel').split(' ').includes('stylesheet'))
          .forEach((el, i) => {
            el.setAttribute('rel', i === newThemeIndex ? 'stylesheet' : 'alternate stylesheet')
          })
        return {
          themeIndex: newThemeIndex,
        }
      }
    )
  }

  handleCardDismiss = () => {
    this.setState({
      cardShown: false,
    })
  }

  handleCardClick = t => () => {
    this.setState({
      selectedCard: t.label,
      cardShown: true,
    })
  }

  handleKeyPress = e => {
    const { keyCode } = e

    this.setState((state) => {
      if (state.cardShown) {
        return {
          cardShown: false,
        }
      }

      if (keyCode < 48 || keyCode > 57) {
        return {}
      }

      return {
        selectedCard: state.buttonTexts[(keyCode + 1) % 10].label,
        cardShown: true,
      }
    })
  }

  render() {
    const {
      buttonTexts,
      selectedCard,
      cardShown,
      themeIndex,
    } = this.state
    return (
      <React.Fragment>
        <CurrentCard
          cardShown={cardShown}
          onClick={this.handleCardDismiss}
          length={typeof selectedCard === 'string' ? selectedCard.length : 1}
        >
          {selectedCard}
        </CurrentCard>
        <Container>
          <ButtonContainer>
            {
              buttonTexts.map((t, i) => (
                <ButtonWrapper
                  key={t.id}
                >
                  <Button
                    type="button"
                    style={{
                      animationDelay: cardShown ? '0ms' : `${i * 50}ms`,
                    }}
                    length={typeof t.label === 'string' ? t.label.length : 1}
                    onClick={this.handleCardClick(t)}
                  >
                    <ButtonLabel>
                      {t.label}
                    </ButtonLabel>
                  </Button>
                </ButtonWrapper>
              ))
            }
          </ButtonContainer>
        </Container>
        <ThemeToggle
          onClick={this.handleToggleTheme}
        >
          {
            themeIndex === 0
            && (
              <SunIcon />
            )
          }
          {
            themeIndex === 1
            && (
              <MoonIcon />
            )
          }
        </ThemeToggle>
      </React.Fragment>
    )
  }
}

export default App
