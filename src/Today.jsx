import React, {Component} from 'react';
import ListItem from './ListItem';

class Today extends Component {
    
    constructor(props) {

        super(props);
      
        this.state = { 
            list: [] ,
            input: ""
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
            <div>
                <form onSubmit={this.onSubmit}>
                    <input  onChange={ this.handleChange }
                        className="input-today"/>

                    <button onClick={ this.addToList } className="button-today">ADD</button>
                </form>

                <ul className="listItemUl">
                    { this.state.list.map(index => (
                        <ListItem key={ index }>
                            { index }
                        </ListItem>
                    ))}        
                </ul>
              
            </div>
        );
    }
}

export default Today;