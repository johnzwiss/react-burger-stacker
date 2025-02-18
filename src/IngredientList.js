import React, {Component} from "react";
import Ingredient from "./Ingredient.js";
export default class IngredientList extends Component {
    render() {
        let allIngredients = this.props.ingredients.map((ing, index)=> (
            <li key={index} onClick={this.props.addIngs} >
                <Ingredient itemKey={index} ingredient={ing} clickFunc={this.props.add}/>
            </li>
        )


        )
        return(
            <section className="pane"> 
            <h3>Ingredients List</h3>
            <ul>    
                {allIngredients}
            </ul>
            </section>
        )
    }
}
