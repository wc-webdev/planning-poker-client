import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  React.createElement(
    App,
    {
      buttons: '0 ½ 1 2 3 5 8 13 ?',
      //buttons: 'XXS XS S M L XL XXL ?',
      hasCoffeeCupButton: true,
    }
  ),
  document.getElementById('root')
)
