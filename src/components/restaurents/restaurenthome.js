import axios from "axios";
import Searchhead from "../searchmenu/searchhead";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RestaurentPage(){
    let [tab,setTab] = useState(1)
    let [menuitems,setmenuitems]=useState([])
    let [totalprice,settotal] = useState(0);

    async function Loadscript(){      
      const script = document.createElement('script')
      script.src ="https://checkout.razorpay.com/v1/checkout.js"
      script.onload = ()=>{
        return true
      }
      script.onerror = ()=>{
        return false
      }
      window.document.body.appendChild(script)  
  }

    

  let displayraxorpay=async ()=>{
    let isloaded = await Loadscript()
    if(isloaded===false){
        alert("sdk is not loaded");
        return false;
    }
    let {data} = await axios.post('http://localhost:5004/api/payment')
    let order = data.order
  var options = {
  "key": "rzp_test_smpXPCxQuZ2gmo", // Enter the Key ID generated from the Dashboard
  "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": order.currency,
  "name": "xomato corp",
  "description": "website developement",
  "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
  "order_id": order.id, //This is generated on the server side
  "handler": function (response){
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
  },
  prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9000090000"
  }   
};
var rzp1 = new window.Razorpay(options); //window gives the refrence of the object bcz we are using virtual dom and we need to inject thi in real dom
rzp1.open();
     
};

    

    let getmenuitem = async ()=>{
      let URL = "http://localhost:5004/api/worknow"
      let {data} = await axios.get(URL)
      console.log(data);
      if(data.status===true){
         setmenuitems([...data.result]);
      }else{
        setmenuitems([]);
      }
    }

    let addmenuitems = (index)=>{
       let _price = Number( menuitems[index].price )
       settotal(totalprice+_price);
    }

    return (<>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">The Big Chill Cakery</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {
          menuitems.map((menu_items,index)=>
          {
          return(<div className="row" key={index}> 
          <div className="col-8">
            <p>{menu_items.name}</p>
            <p>{menu_items.rating}</p>
            <p>{menu_items.descp}</p>
          </div>
          <div className="col-4 ">
            <img className="image-food border border-secondary border-2" src="/imagefile/drinks.png" alt="" />
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-success" onClick={()=>addmenuitems(index)}>add</button>
            </div>
          </div>
          <hr/>
        </div>)
        })
      }
      </div>

      <div className="modal-footer d-flex justify-content-between">
        <p>Subtotal: {totalprice}</p>
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={displayraxorpay}>pay now</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel2">Domino's</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1"/>
      </div>
      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="eg:name@example.com"/>
      </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">address</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
      </div>
      <div className="modal-footer d-flex justify-content-between">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
        <button className="btn btn-success">pay now</button>
      </div>
    </div>
  </div>
</div>

        <Searchhead color='bg-danger'/>
        <section>
            <section className="row justify-content-center">
                <section className="col-10 bg-info imag position-relative"> 
                <button className="btn position-absolute">Click to see Image Gallery</button>   
                </section>
                <section className="col-10">
                <h3 className="fw-bold mt-3 mb-3"> The Big Chill Cakery</h3>
                <div className="d-flex justify-content-between align-items-start mt-3 mb-1">
                <ul className="list-unstyled d-flex gap-3">
                    <li className="border-bottom border-2 border-danger hand" onClick={()=>setTab(1)}>overview</li>
                    <li className="border-bottom border-2 border-danger hand" onClick={()=>setTab(2)}>Contact</li>
                </ul>
                <button onClick={()=>getmenuitem()} className="btn btn-danger" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Place Online Order</button>
                </div>
                <hr/>
                {
                (tab===1)?(<section className="mb-4">
                <h5>About this place</h5>
                <p className="m-0">cuisine</p>
                <p className="m-0">Bakery, Fast-food</p>

                <h5 className="mt-4">Average Cost</h5>
                <p>₹700 for two people (approx.)</p>
                </section>):(<section className="mb-4">
                
                <p className="m-0 fw-bold">Phone Number</p>
                <p className="m-0">+91 114004566</p>

                <p className="m-0 fw-bold mt-4">The Big Chill Cakery</p>
                <p className="m-0 col-3">Shop 1, Plot D, Samruddhi Complex, Chincholi, Mumbai-400002, Maharashtra</p>
                </section>)
}
                </section>

            </section>
        </section>
    </>)
}

export default RestaurentPage;