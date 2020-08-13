import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { format } from 'date-fns';

import { Redirect } from 'react-router-dom';
import api from '../../services/api';

import isConnected from '../../utils/isConnected';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typdeIcons';


function Task({ match }) {

    const [redirect, setRedirect] = useState(false);;
    const [type, setType] = useState();
    const [id, setid] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();

    async function Remove() {
        const res = window.confirm('Deseja realmente remover a tarefa?')
        if (res) {
            await api.delete(`/task/${match.params.id}`).then(response => {
                setRedirect(true)
            });
        }
    }

    async function LoadTaskDetails() {
        await api.get(`/task/${match.params.id}`).then(response => {

            setType(response.data.type);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
            setHour(format(new Date(response.data.when), 'HH:mm'));

        }).catch(error => {
        })
    }
    useEffect(() => {
        if (!isConnected)
            setRedirect(true);

        if (match.params.id != null)
            LoadTaskDetails();

    }, [LoadTaskDetails]);

    async function Save() {
        if (match.params.id) {

            await api.put(`/task/${match.params.id}`, {
                macaddress: isConnected,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`

            }).then(() =>
                setRedirect(true)
            )
        } else {
            await api.post('/task', {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`

            }).then(() =>
                setRedirect(true)
            )
        }
    }

    return (
        <S.Container>
            {redirect && <Redirect to="/" />}
            <Header />
            <S.Form>
                <S.TypeIcones>
                    {
                        TypeIcons.map((t, index) => (
                            index > 0 &&
                            <button type="button" onClick={() => setType(index)}>
                                <img src={t} alt="Tipo da tarefas" className={type && type !== index && 'inative'} />
                            </button>
                        ))
                    }
                </S.TypeIcones>
                <S.Input>
                    <span>Título</span>
                    <input type="text" placeholder="Título da tarefa..."
                        onChange={e => setTitle(e.target.value)} value={title} />

                </S.Input>
                <S.TextArea>
                    <span>Título</span>
                    <textarea rows={5} type="text" placeholder="Detalhes da tarefas..."
                        onChange={e => setDescription(e.target.value)} value={description} />

                </S.TextArea>
                <S.DateTime>
                    <S.Input>
                        <span>Data</span>
                        <input type="date"
                            onChange={e => setDate(e.target.value)} value={date} />

                    </S.Input>
                    <S.Input>
                        <span>Hora</span>
                        <input type="time"
                            onChange={e => setHour(e.target.value)} value={hour} />

                    </S.Input>
                </S.DateTime>
                <S.Option>
                    <div>
                        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                        <span>CONCLUIDO</span>

                    </div>
                    {match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button>}

                </S.Option>
                <S.Save>
                    <button type="button" onClick={Save}>SALVAR</button>
                </S.Save>
            </S.Form>

            <Footer />
        </S.Container >
    )
}
export default Task;
