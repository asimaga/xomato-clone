import axios from "axios";
import { useEffect,useRef,useState } from "react";
import Searchhead from "../searchmenu/searchhead";

function WallPaper(){
    let [getlocations,setlocations] = useState([]);
    let [disabled,setdisabled]= useState(true);    
    let selectinput = useRef();

    let locationlist = async ()=>{
       let response = await axios.get("http://localhost:5004/api/get-location")
        let data = response.data
        
       if(data.status===true){
        setlocations([...data.result])
       }else{
        setlocations([])
       };
    };

    let getlocationid = (event)=>{
        let value=event.target.value;
        if(value !== ""){
            setdisabled(false);
        }else{
            setdisabled(true);
        }
    }
    useEffect(()=>{      
        locationlist();
    },[]);

    return(

    <>
    
      <div className="row  p-3 d-flex justify-content-center cont">
            {/* <div className="col-11  d-flex justify-content-end">
                <button className="btn text-white">Login</button>
                <button className="btn btn-outline-light ">create an account</button>
            </div> */}
            <div>
            <Searchhead color='bg-transparent'/>
            </div>
            <div className="col-12 d-flex justify-content-center ">
                <p className=" brandlogo mt-2 d-flex justify-content-center align-items-center fs-1 fw-bold text-danger">e!</p>
            </div>
            <p className="col-12 d-flex justify-content-center fs-1 fw-bolder text-white">Find the best restaurants, cafés, and bars</p>
            <div className="search d-flex justify-content-between mb-5 mt-1">
                   <select onChange={getlocationid} ref={selectinput} className="p-2 inp1 form-select" name="select location" id="">
                    <option value="">please select a location</option>
                   {getlocations.map((value,index)=>{
                    return (<option key={index} value={value.city_id}>{value.name},{value.city}</option>)
})};
                    </select> 
                
                
                <input className="p-2 inp2 form-control" type="text" placeholder="Search for restaurants" disabled={disabled}/>
            </div>
        </div>
    </>
)     
};

export default WallPaper;