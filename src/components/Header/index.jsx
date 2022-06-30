import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import user from "../../assets/img/user.jpg";
import "./style.css";

function Header() {

    const [menu, setMenu] = useState()
    const [optBlack, setOptBlack] = useState(getValue('optBlack'))
    const [optLarge, setOptLarge] = useState(getValue('optLarge'))
    const [optShowMore, setOptShowMore] = useState(getValue('optShowMore'))

    useEffect(() => {
        
        if (optBlack !== getValue('optBlack')) 
            localStorage.setItem('optBlack', optBlack)
        
        if (optLarge !== getValue('optLarge'))
            localStorage.setItem('optLarge', optLarge)

        if (optShowMore !== getValue('optShowMore'))
            localStorage.setItem('optShowMore', optShowMore)

    }, [optBlack, optLarge, optShowMore])

    function getValue(str) {
        const strValue = localStorage.getItem(str)

        if (strValue === 'false' || !str)
            return false

        return true
    }

    function handleShowMenu(type) {
        if (type === menu) type = null
        setMenu(type)
    }

    return (
        <header className="mb-100 border-rd-2">
            <div>
                {/* toogle menu */}
                <div>
                    <HiOutlineMenuAlt2 />
                </div>
            </div>
            <div>
                {/* settings */}
                <div className="menu menu-cfg" onClick={() => handleShowMenu(1)}>
                    <IoSettingsOutline />
                    {menu === 1 &&
                        <div className="sub-menu border-rd-2">
                            <div className="item">
                                <span> Modo Escuro </span>
                                <label className="switch">
                                    <input type="checkbox" checked={optBlack} onChange={() => setOptBlack(!optBlack)} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="item">
                                <span> Ícones Grandes </span>
                                <label className="switch">
                                    <input type="checkbox" checked={optLarge} onChange={() => setOptLarge(!optLarge)} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="item">
                                <span> Exibir Todos </span>
                                <label className="switch">
                                    <input type="checkbox" checked={optShowMore} onChange={() => setOptShowMore(!optShowMore)} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    }
                </div>

                {/* user */}
                <div className="menu menu-usr" onClick={() => handleShowMenu(2)}>
                    <img src={user} alt="Usuário" />
                    {menu === 2 &&
                        <div className="sub-menu border-rd-2">
                            <div className="item">
                                <Link to="/login"> Sair </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
    )

}

export default Header