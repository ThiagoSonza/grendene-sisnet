import logoSIS from "../../assets/img/logo_sis.png";
import user from "../../assets/img/user.jpg";
import "./style.css";

function Aside() {
    
    return (
        <aside className="border-rd-2">
            <div className="logo">
                <img src={logoSIS} alt="Logo" />
            </div>

            <hr />
            <span> PROGRAMAS MAIS ACESSADOS: </span>

            <div className="list-programs">
                <div className="border-rd-2">
                    <img src={user} alt="" />
                    <span> AAA </span>
                </div>
                <div className="border-rd-2">
                    <img src={user} alt="" />
                    <span> AAA </span>
                </div>
                <div className="border-rd-2">
                    <img src={user} alt="" />
                    <span> AAA </span>
                </div>
                <div className="border-rd-2">
                    <img src={user} alt="" />
                    <span> AAA </span>
                </div>
                <div className="border-rd-2">
                    <img src={user} alt="" />
                    <span> AAA </span>
                </div>
                <div className="border-rd-2">
                    <img src={user} alt="" />
                    <span> AAA </span>
                </div>
                <div className="border-rd-2">
                    <img src={user} alt="" />
                    <span> AAA </span>
                </div>
            </div>
        </aside>
    )

}

export default Aside