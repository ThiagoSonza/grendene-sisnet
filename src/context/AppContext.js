import React, { createContext, useState } from 'react';
import { authAPI } from '../axios/index';

export const AppContext = createContext({});

function AppProvider({ children }) {

    const [menuG, setMenuG] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    function changeAside() {
        setMenuG(!menuG)
        localStorage.setItem("_sisMenu", menuG)
    }

    function changeDarkMode() {
        setDarkMode(!darkMode)
        localStorage.setItem("_sisDark", darkMode)
    }

    function logout() {
        localStorage.removeItem("optBlack")
        localStorage.removeItem("optShowMore")
        localStorage.removeItem("optLarge")
    }

    async function auth(usuario, senha) {

        let resposta = false

        const xmls = `
        <?xml version="1.0" encoding="utf-8"?> 
        <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> 
        <soap:Body> 
        <funAutenticacaoLDAP xmlns="http://tempuri.org/"> 
        <pTxLogin>${usuario}</pTxLogin> 
        <pTxSenha>${senha}</pTxSenha> 
        </funAutenticacaoLDAP> 
        </soap:Body> 
        </soap:Envelope>`

        await authAPI.post('wsIntegracao_sis.asmx/funAutenticacaoLDAP',
            xmls,
            {
                headers:
                {
                    'Content-Type': 'text/xml',
                    // 'SOAPAction': "http://tempuri.org/funAutenticacaoLDAP",
                    // 'Access-Control-Allow-Origin': '*'
                }
            }).then(res => {
                console.log('sucesso', res)
            }).catch(err => {
                console.log('erro', err)
            })

        return resposta

    }

    const value = {
        menuG,
        darkMode,

        auth,
        logout,
        changeDarkMode,
        changeAside
    }

    return (
        <AppContext.Provider value={value}>

            {children}

        </AppContext.Provider>
    )

}

export default AppProvider;