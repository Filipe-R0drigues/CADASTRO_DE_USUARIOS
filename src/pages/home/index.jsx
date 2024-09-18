import { useRef,useState } from 'react';
import './style.css'
import api from '../../services/api'

function Home() {

const inputname = useRef()
const inputage = useRef()
const inputemail = useRef()

  async function createUser(){
    await api.post('/usuarios', {
      name: inputname.current.value,
      name: inputage.current.value,
      name: inputemail.current.value
    })
  }

  return (
    <div className='container'>
      <form>
        <h1>Cadastre-se!</h1>
        <input name='nome' type="text" placeholder="Nome" ref={inputname}/>
        <input name='idade' type="number" placeholder="Idade" ref={inputage}/>
        <input name='email' type="email" placeholder="Email" ref={inputemail}/>
        <button type='button' onClick={createUser}>Cadastrar</button>
      </form>
    </div>
  );
}
export default Home
