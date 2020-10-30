import React, { Component } from 'react'
import axios from 'axios'

class TbkNormal extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             buy_order: '',
             session_id:'',
             amount:'',
             return_url: ''
        }
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8081/normal-transaction/init', this.state)
        .then(response => {
            console.log(response)
            console.log(response.data)
            //intento 1
            // this.browserPost(response.data.url, response.data.token)
            //intento 2
            window.location.href = response.data.url+'?token_ws='+response.data.token;
            //seguir respuesta
        })
        .catch(error => {
            console.log(error)
        })
    }

    // browserPost(url, token_ws){
    //     axios.post(url, '?token_ws='+token_ws)
    //     .then(response =>{
    //         console.log(response)
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // }

    render() {
        const {buy_order, session_id, amount, return_url} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Orden de Compra</label>
                    <input type="text" name="buy_order" value={buy_order} 
                    onChange={this.changeHandler} required/>
                </div>
                <div>
                    <label>Id Sesión</label>
                    <input type="text" name="session_id" value={session_id} 
                    onChange={this.changeHandler} required/>
                </div>
                <div>
                    <label>Monto</label>
                    <input type="number" name="amount" value={amount} 
                    onChange={this.changeHandler} required/>
                </div>
                <div>
                    <label>Url Retorno</label>
                    <input type="text" name="return_url" value={return_url} 
                    onChange={this.changeHandler} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default TbkNormal