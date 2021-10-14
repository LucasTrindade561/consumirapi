import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

// import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    // Esses dispatchs são as action dentro do reduce. Pode ter diversas action por evento.
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed={true}>
        <h1>
          Login
          <small>Hello</small>
        </h1>
      </Title>
      <Paragrafo>
        <p>Lorem ipsum dolor sit amet.</p>
      </Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}

// React.useEffect(() => {
//   async function getData() {
//     const response = await axios.get('/alunos');
//     const { data } = response;
//     console.log(data);
//   }
//   getData();
// }, []);
