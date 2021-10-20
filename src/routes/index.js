import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Fotos from '../pages/Fotos';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Alunos} isClosed />
      <MyRoute exact path="/fotos/" component={Fotos} isClosed />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
