import React from 'react';
import {firebaseApp} from '../fbase';
class LoginPanel extends React.Component {
    
    constructor () {
        super();
        this.state = {
            email : "",
            password : ""
        }
        
    }
    authenticate = (e) => {
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( ()=> {
           this.props.changeLoggedIn(true);
        })
        .catch( () => {
            console.log('Błąd logowania')
        })
}
handleLoginChange = (event) =>{
    this.setState({
        [event.target.name]: event.target.value
    })
}
    render() {
        return(
         <div className="col-md-4 offset-md-4 ">
                <h2>Login to the admin panel</h2>
                <p>Example data: | login: <b>ad@m.in</b> | password: <b>admin1234</b></p>
                    <form onSubmit={this.authenticate}>
                       <div className="form-group">
                        <input type="text" placeholder="email" id="email"name="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email}/>
                        </div>
                        <div className="form-group">
                        <input type="password" placeholder="password" id="password" name="password" className="form-control" onChange={this.handleLoginChange} value={this.state.password}/>
                        </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            
            
        )
    }
}
export default LoginPanel;