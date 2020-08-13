import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Connexion extends Component {
    state = {
        pseudo:"",
        goToTchat: false
    }

    handleChange = e => {
        const pseudo = e.target.value
        this.setState({pseudo})
    }

    goToTchat = e => {
        e.preventDefault();
        this.setState({goToTchat: true})
    }

    render() {
        if(this.state.goToTchat){
        return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }

        return (
            <div className='connexionBox'>
                <form onSubmit={this.goToTchat} className='connexion'>
                    <input 
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="pseudo"
                        required />
                        
                    <button type='submit'>GO</button>
                </form>
            </div>
        )
    }
}
