import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMangoCount = () => {
    this.setState(prevState => {
      console.log('onMangoCount clicked....')
      return {count1: prevState.count1 + 1}
    })
  }

  onBananaCount = () => {
    this.setState(prevState => {
      console.log('onBananaCount clicked....')
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="container">
        <div className="fruitsCounterCon">
          <h1 className="heading">
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div className="buttonImgContainer">
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                onClick={this.onMangoCount}
                type="button"
                className="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                onClick={this.onBananaCount}
                type="button"
                className="button"
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
