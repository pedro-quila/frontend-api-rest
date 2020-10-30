import React, { Component } from 'react'
import TbkMall from './TbkMall.js'
import TbkMensual from './TbkMensual.js'
import TbkNormal from './TbkNormal.js'

class Inicio extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedTbk: ''
        }
    }

    render() {
        return (
            <section className="container">
                {this.renderTbkSelector()}
                <div className="render-selector">
                    {this.renderSelectedTbk(this.state.selectedTbk)}
                </div>
            </section>
        )
        
    }
    renderTbkSelector(){
        return(
            <div>
                <label className="selector-label">Seleccione Transacción Transbank</label>
                <select className="tbk-selector" onChange={
                    (e) => this.setState({selectedTbk: e.target.value})}>
                        <option>Seleccione</option>
                        <option value="TbkNormal">Webpay Normal</option>
                        <option value="TbkMensual">Webpay Mensual</option>
                        <option value="TbkMall">Webpay Mall</option>
                </select>
            </div>
        )
    }
    renderSelectedTbk(selectedTbk){
        if (!selectedTbk) {
            return <h2>Seleccione opción de transacción</h2>
        }else if (selectedTbk === "TbkNormal") {
            return <TbkNormal/>
        }else if (selectedTbk === "TbkMensual") {
            return <TbkMensual/>
        }else if (selectedTbk === "TbkMall") {
            return <TbkMall/>
        }

    }
}

export default Inicio
