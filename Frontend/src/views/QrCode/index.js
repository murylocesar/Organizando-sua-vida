import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Redirect } from 'react-router-dom';

function Qrcode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function SaveMac() {
        if (!mac) {
            alert('Você precisa informar o número que apareceu no celular');
        } else {
            await localStorage.setItem('@todo/macaddress', mac)
            setRedirect(true);
            window.location.reload();
        }
    }
    return (
        <S.Container>
            {
                redirect && <Redirect to="/" />
            }
            <Header />
            <S.content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <S.QrcodeArea>
                    <Qr value='getmacaddress' size={300} />
                </S.QrcodeArea>

                <S.ValidationCode>

                    <span>Digite a numeração que apareceu no celular</span>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac} />
                    <button type="button" onClick={SaveMac}>SINCRONIZAR</button>

                </S.ValidationCode>


                <p>suas atividades serão sincronizadas com a do seu celular.</p>
            </S.content>
            <Footer />
        </S.Container>
    )
}
export default Qrcode;