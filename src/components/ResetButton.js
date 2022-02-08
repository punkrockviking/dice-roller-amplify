import React from 'react'
import Button from "./Button"

class ResetButton extends React.Component {

    onButtonClick = (event) => {
        event.preventDefault()
        this.props.reset && this.props.reset()
        this.props.resetQty && this.props.resetQty()
    }

    render() {
        return (
            <Button onClick={this.onButtonClick} backgroundColor='red' hoverColor='lightRed' >{this.props.text}</Button>
        )
    }
}

export default ResetButton
