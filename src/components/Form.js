import React from 'react'

class Form extends React.Component {
    onFormSubmit(event) {
        event.preventDefault()
        console.log(event)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} >
                    Stat form here:
                    <input type="number" />
                </form>
            </div>
        )
    }
}

export default Form
