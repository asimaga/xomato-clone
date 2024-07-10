import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Searchhead from './searchhead';

 function Searchitems(){
    let navigate = useNavigate();
    let params = useParams();
    let {meal_id}= params;
    console.log(meal_id);

    let filterOperations =  async ()=>{
        let URL = "localhost:5004/api/get-restaurent-by-location-id";
        let filter = {
            meal_type : meal_id
        }
        try{
        let {response} = await axios.post(URL);
        console.log(response.data)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        filterOperations();
    },[])
    
    return(<>
        <section className="row"> 
            <Searchhead color='bg-danger'/>
        <div className="col-12">
            <div className="container-lg ">
            <p className="fw-bold h2 p-4">Breakfast Places in Delhi</p>
            <div className="row">

                <div className="col-lg-3 col-md-4 col-12 border border-1 p-4 me-lg-4 me-md-2 ">
                    <div className="d-flex justify-content-between">
                    <p className="fw-bold m-0">Filter</p>
                    <button className="btn btn-info" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-controls="collapseExample">hide</button>
                    </div>
                    <div className="" id="collapseExample">
                    <label className="mt-2 mb-1 form-label" htmlFor="">Select location</label>
                        <div> 
                    <select className="form-select mb-4" name="" id="">
                        <option value="">Valpoi</option>
                        <option value="">Panjim</option>
                        <option value="">Bicholim</option>
                        <option value="">Margao</option>
                        <option value="">Ponda</option>
                    </select>
                        </div>
                    <p className="mt-2 m-0 mb-1">Cuisines</p>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label" htmlFor="">north indian</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label" htmlFor="">South indian</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label" htmlFor="">chinese</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label" htmlFor="">thai dish</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"/>
                        <label className="form-check-label" htmlFor="">street food</label>
                    </div>

                    <p className="mt-3 m-0 mb-1">Cost for Two</p>
                    <div>
                        <input type="radio"/>
                        <label htmlFor="">Less than ` 500</label>
                    </div>
                    <div>
                        <input type="radio"/>
                        <label htmlFor="">` 500 to ` 1000</label>
                    </div>
                    <div>
                        <input type="radio"/>
                        <label htmlFor="">` 1000 to ` 1500</label>
                    </div>
                    <div>
                        <input type="radio"/>
                        <label htmlFor="">` 1500 to ` 2000</label>
                    </div>
                    <div>
                        <input type="radio"/>
                        <label htmlFor="">` 2000+</label>
                    </div>

                    <p className="m-0 mt-3 mb-1">Sort</p>
                    <div>
                        <input type="radio"/>
                        <label htmlFor="">Price low to high</label>
                    </div>
                    <div>
                        <input type="radio"/>
                        <label htmlFor="">Price high to low</label>
                    </div>
                    </div>
                </div>


                <div className="col-lg-7 col-md-7 col-12 mt-lg-0 mt-md-0 mt-3">
                    <div className="row border border-1 mb-3  p-4">
                        <div className="col-12 d-flex align-items-center mb-4 hand" onClick={()=>navigate("/resthome/page1")}>
                            <img className="brandimg" src="../imagefile/dinner.png" alt=""/>
                            <div className="ms-4">
                                <p className="m-0 mb-2 h3 fw-bold">The Big Chill Cakery</p>
                                <p className="m-0 mb-2 fw-bold">FORT</p>
                                <p className="m-0 text-muted">Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-3 col-md-5 col-6">
                                <p>Cuisines:</p>
                                <p>Cost for Two:</p>
                            </div>
                            <div className="col-lg-3 col-md-5 col-6">
                                <p className="fw-bold">Bakery</p>
                                <p className="fw-bold">700</p>
                            </div>
                        </div>
                    </div>
                    <div className="row border border-2   p-4">
                        <div className="col-12 d-flex align-items-center mb-4 hand"  onClick={()=>navigate("/resthome/page2")}>
                            <img className="brandimg" src="../imagefile/drinks.png" alt=""/>
                            <div className="ms-4">
                                <p className="m-0 mb-2 h3 fw-bold">The Big Chill Cakery</p>
                                <p className="m-0 mb-2 fw-bold">FORT</p>
                                <p className="m-0 text-muted">Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-3 col-md-5 col-6">
                                <p>Cuisines:</p>
                                <p>Cost for Two:</p>
                            </div>
                            <div className="col-lg-3 col-md-5 col-6">
                                <p className="fw-bold h7">Bakery</p>
                                <p className="fw-bold">700</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>);
};

export default Searchitems;