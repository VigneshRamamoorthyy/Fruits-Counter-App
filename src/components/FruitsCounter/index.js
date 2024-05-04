import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoEaten: 0,
    bananaEaten: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({
      mangoEaten: prevState.mangoEaten + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananaEaten: prevState.bananaEaten + 1,
    }))
  }

  render() {
    const {mangoEaten, bananaEaten} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="title">
            Bob ate {mangoEaten} mangoes {bananaEaten} bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="mango"
              />
              <button
                className="eat-fruit-btn"
                onClick={this.eatMango}
                type="button"
              >
                Eat Mango
              </button>
            </div>

            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="banana"
              />
              <button
                className="eat-fruit-btn"
                onClick={this.eatBanana}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
