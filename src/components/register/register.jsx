import "./register.css"
// import Logo from "../../../public/assets/images/logo.jpg"
import Logo from "./logo.jpg"
const Register= ()=> {

    return (
        <>
            <div className="wrapper-reg">
                <div className="left-side-reg">
                    {/* <Logo style={{width:"90px"}} alt="nice"/> */}
                   
                    <h2>Hidden Hills</h2>
                    <p>we are your preferred travel partners!</p>
                </div>
                <div className="right-side-reg">
                <form action="post" method="POST">
                    <div className="form-control-reg"> 
                        <div className="top-side-reg">
                            <h2>Register</h2>
                            <p>create  account to get started</p>
                        </div>
                        <div className="middle-side-reg">
                            <div className="form-item-reg">
                                <label htmlFor="username" >Fullname</label>
                                <input type="text" />
                            </div>
                            <div className="form-item-reg">
                                <label htmlFor="username" >Email</label>
                                <input type="email" />
                            </div>
                            <div className="form-item-reg">
                                <label htmlFor="username" >Username</label>
                                <input type="text" />
                            </div>
                            <div className="form-item-reg">
                                <label htmlFor="username">password</label>
                                <input type="password" />
                            </div>
                            <div className="form-item-reg">
                                <label htmlFor="username">Confirm password</label>
                                <input type="password" />
                            </div>
                        </div>
                        
                        <button className="btnLog" type="submit" >Submit</button>

                        <div className="footer-side-reg">
                            <p>Already have account? <a href="/login">Login</a></p>
                        </div>
                    </div>
                    </form>

                </div>
            </div>
        </>
    )

}

export default Register;