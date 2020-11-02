import React, { Component } from 'react'
import axios from 'axios'

export class TbkMensual extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            buy_order: '',
            session_id:'',
            amount:'',
            return_url: '',
            wpm_detail: {
                service_id: '1',
                card_holder_id: '2',
                card_holder_name: '3',
                card_holder_last_name1: '',
                card_holder_last_name2: '',
                card_holder_mail: '',
                cellphone_number: '',
                expiration_date: '',
                commerce_mail: '',
                uf_flag: ''
            }
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
    
    render() {
        const {buy_order, session_id, amount, return_url, wpm_detail} = this.state
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
                {/* <section> */}
                    <div>
                        <label>Id Servicio</label>
                        <input type="text" name="wpm_detail.service_id" value={wpm_detail.service_id}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Id Usuario Tarjeta</label>
                        <input type="text" name="wpm_detail.card_holder_id" value={wpm_detail.card_holder_id}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Nombre Usuario</label>
                        <input type="text" name="wpm_detail.card_holder_name" value={wpm_detail.card_holder_name}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Primer Apellido</label>
                        <input type="text" name="wpm_detail.card_holder_last_name1" value={wpm_detail.card_holder_last_name1}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Segundo Apellido</label>
                        <input type="text" name="wpm_detail.card_holder_last_name2" value={wpm_detail.card_holder_last_name2}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Correo Usuario</label>
                        <input type="text" name="wpm_detail.card_holder_mail" value={wpm_detail.card_holder_mail}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Fono Usuario</label>
                        <input type="text" name="wpm_detail.cellphone_number" value={wpm_detail.cellphone_number}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Fecha Expiración</label>
                        <input type="text" name="wpm_detail.expiration_date" value={wpm_detail.expiration_date}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Correo Comercio</label>
                        <input type="text" name="wpm_detail.commerce_mail" value={wpm_detail.commerce_mail}
                            onChange={this.changeHandler} required />
                    </div>
                    <div>
                        <label>Monto UF?</label>
                        <select name="wpm_detail.uf_flag" onChange={
                            (e) => this.setState({ uf_flag: e.target.value })}>
                            <option value="false">No</option>
                            <option value="true">Si</option>
                        </select>
                    </div>
                {/* </section> */}
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default TbkMensual
