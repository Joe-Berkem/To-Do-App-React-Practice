import React, {Component} from 'react';
import signup from './assets/images/signup.svg'
import note from './assets/images/note.svg'
import save from './assets/images/save.svg'

class Today extends Component {

    constructor(props) {
        super(props);
        this.state = {  
        };  
    }
   
    render() {
        return (
            <section>
                <h2>Get more things done!</h2>    
                <div className="home-content">
                    <div className="content-div">
                        <img className="icon" src={signup} alt="sign up icon"/>
                        <p>Register for an account so you can access your to do list wherever you are.</p>
                    </div>
                    <div className="content-div">
                        <img className="icon" src={note} alt="sign up icon"/>
                        <p>Add and remove list items with ease so you can keep on top of all the things in your life that need DOING!</p>
                    </div>
                    <div className="content-div">
                        <img className="icon" src={save} alt="sign up icon"/>
                        <p>Save your progress and download your lists as PDF.</p>
                    </div>
                </div>          
            </section>
        );
    }
}

export default Today;