import React, { Component } from 'react'

export default (ReactComponent) =>
    class ToogleOpen extends Component {
        state = {
            isOpen: false
        }

        toogleOpen = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        render = () => (
            <ReactComponent
                {...this.props}
                isOpen={this.state.isOpen}
                handleClick={this.toogleOpen}
            />
        )
    }

