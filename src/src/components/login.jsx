import React from "react";
//css
import '../assets/css/Login.css';

//Servicios
import { Apiurl } from "../services/Apirest";

//libreria 
import axios from "axios";

class Login extends React.Component{
    
    constructor(props){
        super(props);
    }
    state={
        form:{
            "usuario":"",
            "password":""
        },
        error:false,
        erroMsg:" Password incorrecta"
    }
    manejadorSubmit =e=>{
        e.preventDefault();
    }

    manejadorChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    manenajorBoton(){
        let url=Apiurl + "auth";
        axios.post(url,this.state.form)
        .then(response =>{
            if(response.data.status === "ok"){
                localStorage.setItem("Token", response.data.result.token);
                this.props.history.push("/dashboard");
            }else{
                this.setState({
                    error: true,
                    errorMsg: response.data.result.error_msg
                })
            }
        }).catch(error =>{
            console.log(error);
            this.setState({
                error: true,
                errorMsg: "Error al conectar con el api"
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <div class="sidenav">
                    <div class="login-main-text">
                        <h2>Application<br/> Login</h2>
                        <p>Login or register to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form onSubmit={ this.manejadorSubmit}>
                                <div className="form-group">
                                <label>User Name</label>
                                    <input type="text" className="form-control" name="usuario" placeholder="UserName" onChange={this.manejadorChange}/>
                                </div>
                                <div className ="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.manejadorChange}/>
                                </div>
                                <button type="submit" className="btn btn-black" onClick={this.manenajorBoton}>Login</button>
                            </form>
                            { this.state.error === true &&
                                <div className="alert alert-danger" role="alert">
                                    {this.state.erroMsg}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;