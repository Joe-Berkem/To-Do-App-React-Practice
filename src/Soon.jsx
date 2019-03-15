import React, {Component} from 'react';
import ListItem from './ListItem';

class Soon extends Component {
    
    constructor(props) {

        super(props);
      
        this.state = { 
            list: [] ,
            input: "", 
            themeColour: "#2d3e52"
        };  

        this.addToList = this.addToList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    addToList() {
        this.setState({ list: [...this.state.list, this.state.input ] });
    }

    onSubmit (event) {
        event.preventDefault();
    }
   
    render() {
        return (
            <section>
                <form onSubmit={this.onSubmit}>
                    <input 
                        placeholder="These things need doing, but not today!" 
                        onChange={ this.handleChange }
                        className="input-today" 
                        style={ {borderColor: this.state.themeColour} }
                    />

                    <button 
                        onClick={ this.addToList } 
                        type="submit" 
                        className="button-today" 
                        style={ {backgroundColor: this.state.themeColour} }
                    >ADD
                    </button>
                </form>

                <ul className="listItemUl">
                    { this.state.list.map(index => (
                        <li className="listItem" style={ {backgroundColor: this.state.themeColour} }>
                            <p className="listItemText" style={ {color: 'white'} }>{ index } </p>
                        </li>
                    ))}        
                </ul>
              
            </section>
        );
    }
}

export default Soon;