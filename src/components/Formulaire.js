import React, { Component } from 'react'

export default class Formulaire extends Component {
    state = {
        message:"",
        length: this.props.length
    }

    createMessage = () => {
        const {addMessage, pseudo, length} = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        //reset
        this.setState({message:'', length})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({message, length})        
    }

    handleKeyUp = event => {
        if(event.key === 'Enter'){
            this.createMessage()
        }
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea
                    maxLength={this.props.length}
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    required/>
                <div className='info'>
                    {this.state.length}
                </div>
                <button type="submit">Envoyer!</button>
            </form>
        )
    }
}
