import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSIS from "../../assets/img/logo_sis.png";
import { AppContext } from "../../context/AppContext";
import "./style.css";

function Login() {

    const navigate = useNavigate()
    const { auth } = useContext(AppContext)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function authenticate(e) {
        e.preventDefault()
        if (auth(userName, password)) return

        setError('Login Inválido!')
    }

    return (
        <div className="ant-layout-login">
            <main className="border-rd-2 ">
                <img src={logoSIS} alt="" />


                <form onSubmit={authenticate}>
                    <label htmlFor=""> {error} </label>
                    <input className={`border-rd-2 ${error ? 'erro' : ''}`} type="text" title="Usuário" value={userName} onChange={(e) => setUserName(e.target.value)} autoFocus />
                    <input className={`border-rd-2 ${error ? 'erro' : ''}`} type="password" title="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="border-rd-2" type="submit"> Login </button>
                </form>

            </main>
        </div>
    )
}

export default Login
