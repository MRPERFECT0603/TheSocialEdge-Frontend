import "./Register.scss";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Lama Social.</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                    alias totam numquam ipsa exercitationem dignissimos, error nam,
            cons    equatur.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                    
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="UserName" />
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="text" placeholder="Name"/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register