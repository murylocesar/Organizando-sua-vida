import React, { useState, useEffect } from 'react';
import logo from '../../icons/logo.png'
import * as S from './styles';
import bell from '../../icons/bell.png';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import { Link } from 'react-router-dom';

function Header({ clickNotification }) {

    const [lateCount, setLateCount] = useState([]);

    async function lateVerifiy() {
        await api.get(`/task/filter/late/${isConnected}`).then(response => {
            setLateCount(response.data.length);
        });
    }

    useEffect(() => {
        lateVerifiy();
    }, []);

    async function Logout() {
        localStorage.removeItem('@todo/macaddress')
        window.location.reload()
    }

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo" />
            </S.LeftSide>

            <S.RightSide>
                <Link to="/">INÍCIO</Link>
                <span className="dividir" />

                <Link to="/task">NOVA TAREFA</Link>
                <span className="dividir" />
                {!isConnected ?
                    <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
                    :
                    <button type="button" onClick={Logout}>SAIR</button>
                }
                {
                    lateCount &&
                    <>
                        <span className="dividir" />
                        <button onClick={clickNotification} id="notification">
                            <img src={bell} alt="Notificação" />
                            {lateCount > 0 &&
                                <span>{lateCount}</span>
                            }
                        </button>
                    </>
                }
            </S.RightSide>
        </S.Container>
    )

}
export default Header;