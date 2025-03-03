import React, { Fragment, Component } from 'react';

class Sushi extends Component {

  state={
    eaten: false
  }

  eatSushi = () => {
      if (this.props.wallet >= this.props.sushi.price) {
        this.setState({
          eaten: true
        }, () => {
        this.props.addPlate(this.props.sushi)
        this.props.buyOneSushi(this.props.sushi.price)
      })
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" onClick={this.state.eaten ? null : this.eatSushi} >
          { this.state.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi
