import React from "react";
import Header from "../template/header";
import { Apiurl } from "../services/Apirest";
import React,{useState, useEffect} from "react";
import axios from "axios";

const SearchComponent = () =>{
    const [services, setServices] = useState([])
    const [search, setSearch] = useState("")

    const showData = async () =>{
      const response =  await fetch(Apiurl)
      const data = await response.json()
      setServices(data)
    }
   const searcher= (e)=>{
        setSearch(e.target.value)
        console.log(e.target.value)
   }
    let result= []
   if(!search){
        result=services
   }else{
        services.filter((dato)=> 
            dato.state.toLowerCase.include(search.toLocaleLowerCase())
        )
        services.filter((dato)=> 
            dato.identification.toLowerCase.include(search.toLocaleLowerCase())
        )
        services.filter((dato)=> 
            dato.typeIdentification.toLowerCase.include(search.toLocaleLowerCase())
        )
        services.filter((dato)=> 
            dato.nameAgent.toLowerCase.include(search.toLocaleLowerCase())
        )
        services.filter((dato)=> 
            dato.typeProcedure.toLowerCase.include(search.toLocaleLowerCase())
        )
        services.filter((dato)=> 
            dato.numTurn.toLowerCase.include(search.toLocaleLowerCase())
        )
        services.filter((dato)=> 
            dato.client.toLowerCase.include(search.toLocaleLowerCase())
        )
        services.filter((dato)=> 
            dato.typeClient.toLowerCase.include(search.toLocaleLowerCase())
        )
        
   }

    useEffect( ()=> {
        showData()
    }, [])

    return(
        <div className= "container"> 
                    <br/> <br/>
                    <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control"/>
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
                            {
                                result.map((service)=>
                                <tr key= {index}>
                                    <td>{services.id}</td>
                                    <td>{services.ofice}</td>
                                    <td>{services.unit}</td>
                                    <td>{services.process}</td>
                                    <td>{services.subProcess}</td>
                                    <td>{services.timeService}</td>
                                    <td>{services.state}</td>
                                    <td>{services.dateCreate}</td>
                                    <td>{services.agent}</td>
                                    <td>{services.client}</td>
                                    <td>{services.turn}</td>
                                    <td>{services.procedure}</td>
                                </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
    );

}
export default SearchComponent;