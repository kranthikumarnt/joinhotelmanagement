import React, {useState}  from 'react';
import Classes from './login.module.css';

const Login = (props) => {
    // all teh data in the page can be fetched using these fields
    console.log(props);
    const [l_email, setLemail] = useState(null);
    const [l_password, setLpassword] = useState(null);
    const [s_email, setSemail] = useState(null);
    const [s_password, setSpassword] = useState(null);
    const [s_dob, setSdob] = useState(null);
    const [s_rpassword, setSrpassword] = useState(null);
    const [s_validation, setLvalidation] = useState(null);
    // validations for the fields
    var error = "is-invalid";
    let onLoginSubmit=(e) =>{
        e.preventDefault();
    }
    let onSignupSubmit=(e) =>{
        e.preventDefault();
        setLvalidation(s_password !== s_rpassword ?error:null);
        console.log(l_email,l_password,s_email,s_password,s_dob);
    }
    return (
        <div>
            <header style={{backgroundColor:"#007bff",paddingTop: "20px"}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-6">
                            <span className={Classes.logo}>Welcome to 
                            <br/>
                            Join Hotel Management</span>
                        </div>
                        <div className="col-sm-6 hidden-xs">
                            <form method="post" onSubmit={onLoginSubmit}>
                                <div className="row">

                                        <div className="col-sm-5">
                                            <div className="form-group">
                                            {/* here is the input email field */}
                                                    <input type="email" className={"form-control "} placeholder="Email Address" required autoComplete="true"
                                
                                                 onChange={(event)=>{setLemail(event.target.value)}}/>
                                                <div className={Classes.loginBottomText + " checkbox hidden-sm"} >
                                                    <label>
                                                        <input type="checkbox" id="check"/>
                                                        Keep me sign in
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="form-group">
                                            {/* here is the input password field */}
                                                <input type="password" className={"form-control "} placeholder="Password" required autoComplete="true"
                                                 onChange={(event)=>{setLpassword(event.target.value)}}/>
                                                <div className="login-bottom-text hidden-sm"> Forgot your password? </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="form-group">
                                                <input type="submit" value="login" className="btn btn-default "/>
                                            </div>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
    <div className="container">
        <div className="row">
            <div className="col-sm-8">
                <div className={Classes.loginMain}>
                    <h4> Lorem</h4>
                    <span>Lorem </span>

                    <h4>  text data </h4>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing el</span>

                    <h4> tetxt ....</h4>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing el</span>

                    <h4>text</h4>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing el</span>
                </div>
            </div>
            <div className="col-sm-4">
                <div className={Classes.Register}>

                    <h3> Register now</h3>
                    <hr/>
                    <form onSubmit={onSignupSubmit}>
                        
                        <div className="form-group">
                            <label className="control-label" htmlFor="">Email Address</label>
                            {/* here is the input signup email field */}
                            <input type="email" className="form-control" placeholder="Email Address"  required autoComplete="true"
                            onChange={(event)=>{setSemail(event.target.value)}}/>
                        </div>
    
                        <div className="form-group">
                        {/* here is the input signup password field */}
                            <label className={"control-label "} htmlFor="">Password</label>
                            <input type="password" className={"form-control "+ s_validation} placeholder="Password" required autoComplete="true"
                                onChange={(event)=>{setSpassword(event.target.value)}}
                            />

                        </div>
    
                        <div className="form-group">
                            <label className="control-label" htmlFor="">Repeat Password</label>
                            
                            <input type="password" className={"form-control "+ s_validation} placeholder="Repeat Password" required autoComplete="true"
                            onChange={(event)=>{setSrpassword(event.target.value)}}/>
                        </div>
    
                        <div className="">
                        {/* here is the input signup birthday field */}
                            <label>Birthday</label>
                            <div className="form-group">
                                <input className="form-control" type="date" name="" id="" required autoComplete="true"
                                onChange={(event)=>{setSdob(event.target.value)}}/>
                            </div>
                        </div>
    
                        <small>
                            By clicking Sign Up, you agree to our Terms and that you have read our
                            Data Use Policy, including our Cookie Use.
                        </small>
                        <div ></div>
                        <div className="form-group">
                            <label className="control-label" htmlFor=""></label>
                            <input type="submit" className="btn btn-primary"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        </div>

<footer className="container">
    <hr/>
    <div ></div>
    <small className="copyrights"> © Copyrights reserved 2020</small>
</footer>

        </div>
    );
}

export default Login;
