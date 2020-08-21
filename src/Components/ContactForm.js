import React,{useState,useEffect} from 'react';


const ContactForm  = () => {
    const initialFeildValues ={
        fullname:'',
        mobile:'',
        email:'',
        address:''

    }
    var [values,setValues] = useState(initialFeildValues);
    return (
        <form autoComplete="off">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                    <   i className="fas fa-user"></i>
                    </span>
                </div> 
                <input className="form-control" placeholder="Full name"
                    value = { values.fullname}
                />   
            </div> 
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="fas fa-phone-square-alt"></i>
                        </span>
                    </div> 
                    <input className="form-control" placeholder="Mobile"
                        value = { values.fullname}
                    />   
                </div> 
                <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                    </span>
                </div> 
                <input className="form-control" placeholder="Email Adress"
                    value = { values.fullname}
                />   
            </div> 
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="fas fa-map-marker-alt"></i>
                        </span>
                    </div> 
                    <input className="form-control" placeholder="Address"
                        value = { values.fullname}
                    />   
                </div>
            </div>
            
             

        </form>
     )
}

export default ContactForm;