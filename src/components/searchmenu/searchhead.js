import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';

function Searchhead(props){
    let navigate = useNavigate()

    let navigatetohome = ()=>{
        navigate("/");
    }
    return(<>
    <GoogleOAuthProvider clientId="266932800970-pga5tdccrgktd2r0loe2abae0490ehmv.apps.googleusercontent.com">


<div className="modal fade" id="google-signin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">google signUpp</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <GoogleLogin
         onSuccess={credentialResponse => {
         console.log(credentialResponse);
        }}
         onError={() => {
            console.log('Login Failed');
         }}
        />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

        <div className={`row ${props.color}`}>
        <div className="col-12">
            <header>              
                <div className="container d-flex justify-content-between align-items-center py-2">
                        <p onClick={()=>navigatetohome()} className="hand brandname d-flex justify-content-center align-items-center text-danger h2 fw-bold">e!</p>
                        <div>
                            <button className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#google-signin">Login</button>
                            <button className="btn btn-outline-light">create an account</button>
                        </div>  
                </div>
            </header>
        </div>
    </div>
    </GoogleOAuthProvider>;
    </>);
};

export default Searchhead;