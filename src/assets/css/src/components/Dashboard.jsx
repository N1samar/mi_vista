import React from "react";
import Header from "../template/header";
import { Apiurl } from "../services/Apirest";
import axios from "axios";
class Dashboard extends React.Component{
    state={
        servicios:[]
    }

    componentDidMount(){
        let url = Apiurl + "service";
        axios.get(url)
        .then(resposnse =>{
            this.setState({
                servicios : response.data
            })
        })
    }   
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div className= "container"> 
                    <br/> <br/>
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">OFICINA</th>
                            <th scope="col">SALA</th>
                            <th scope="col">PROCESO</th>
                            <th scope="col">SUBPROCESO</th>
                            <th scope="col">TIEMPO DEL SERVICIO</th>
                            <th scope="col">ESTADO</th>
                            <th scope="col">FECHA</th>
                            <th scope="col">REPRESENTANTE</th>
                            <th scope="col">CLIENTE</th>
                            <th scope="col">TURNO</th>
                            <th scope="col">TRAMITE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.servicios.map((value,index) =>{
                                return(
                                    <tr key= {index}>
                                        <td>{value.id}</td>
                                        <td>{value.ofice}</td>
                                        <td>{value.unit}</td>
                                        <td>{value.process}</td>
                                        <td>{value.subProcess}</td>
                                        <td>{value.timeService}</td>
                                        <td>{value.state}</td>
                                        <td>{value.dateCreate}</td>
                                        <td>{value.agent}</td>
                                        <td>{value.client}</td>
                                        <td>{value.turn}</td>
                                        <td>{value.procedure}</td>
                                    </tr>
                                );
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;