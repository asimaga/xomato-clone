import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchhead from "../searchmenu/searchhead";


function Quicksearch(){
    let [mealtypelist, setmealtype] = useState([]); //use to store the data

    let quicksearchmealtype = async ()=>{
        let response =await axios.get("http://localhost:5004/api/get-meal-types")
        let data = response.data
        if(data.status ===true){
            setmealtype([...data.result]);
        }else{
            setmealtype([]);
        }
    }; 

    let navigate = useNavigate();
    let getsearchelement = (id)=>{
        navigate("/search-page/"+id)
    }

/// first http request connected to database through server
    useEffect(()=>{
        quicksearchmealtype();
    },[]); //whhen useeffect []  useeffect only runs once
    
    // console.log(mealtypelist);

    return(<>
         <section className="container-fluid">
            <div className="row ">
            <div className="col-12 ms-5 mt-4">
                <p className="fs-3 fw-bold qcksrch">Quick Searches</p>
                <p className="dscvr">Discover restaurants by type of meal</p>
            </div>
            <div className="row">
                <div className="col-12 ms-5 mt-3 d-flex justify-content-between flex-wrap mb-3"> 
                    {mealtypelist.map((mealType,index)=>{
                        return (
                        <div key={index} onClick={()=>getsearchelement(mealType.meal_id)} className="col-4 d-flex justify-content-between box me-2 shadd hand">
                        <img className="shadd" src={mealType.image} alt=""/>
                        <div className="mx-3">
                            <p className="fw-bold fs-5 m-1">{mealType.name}</p>
                            <p className="">{mealType.content}</p>
                        </div>
                        </div>
                        );    
                    })}
                    
                </div>
            </div>
            </div>
        </section>
    </>)
}

export default Quicksearch;