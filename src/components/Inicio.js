import React, { Component } from 'react'
import Form from './Form.js'

class Inicio extends Component {

    normalHandler() {
        
    }

    render() {
        return (
            
            <div>
                <button onClick={this.normalHandler}>Webpay Normal</button><br/>
                <button>Webpay Mensual</button>
                <Form/>
            </div>
        )
    }
}

export default Inicio
