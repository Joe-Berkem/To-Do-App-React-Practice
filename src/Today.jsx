import React, {Component} from 'react';

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
        this.setState({ list: [...this.state.list, this.state.input ]  });
    }
   
    render() {
        return (
            <div>
                <input  onChange={ this.handleChange }
                    className="input-today"/>

                <button onClick={ this.addToList } className="button-today">Add</button>

                <ul>
                    { this.state.list.map(index => (
                        <li key={ index }>
                            { index }
                        </li>
                    ))}        
                </ul>
              
            </div>
        );
    }
}

export default Today;