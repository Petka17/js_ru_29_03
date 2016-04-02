import React, { Component } from 'react'

export default (ReactComponent) =>
    class SetOpenId extends Component {
        state = {
            id: null
        }

        setId = (id) => () => (
            this.setState({
                id: id === this.state.id ? null : id
            })
        )

        render = () => (
            <ReactComponent
                {...this.props}
                id={this.state.id}
                setId={this.setId}
            />
        )
    }

