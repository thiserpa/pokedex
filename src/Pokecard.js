import React, {Component} from "react";
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component{
    render(){
        let idPrefix = "";
        let id = this.props.id;
        if(id < 10){
            idPrefix = "00"
        } else if(id < 100){
            idPrefix = "0"
        }
        let imgSrc = `${POKE_API}${idPrefix}${this.props.id}.png`
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-name">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;