import { useContext, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import "./login.scss"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"

function Login() {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload:user})
            navigate("/")
        })
        .catch((error) => {
            setError(true)
        });
    }

    return (
        <div className="login">
            <div className="bg-login">
                <img src="https://wallpaperaccess.com/full/1601026.jpg" alt="" />
            </div>
            <form onSubmit={handleLogin}>
                <div className="login-text">
                    <p>OLÁ, <span>BEM VINDO!</span></p>
                    <h1>Entre na sua conta</h1>
                </div>
                <label>E-mail</label>
                <input type="email" placeholder="admin@name.dev" onChange={e => setEmail(e.target.value)}/>
                <label>Senha</label>
                <input type="password" placeholder="********" onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                {error && <span className="error">Wrong email or password!</span>}
            </form>
        </div>
    )
}

export default Login