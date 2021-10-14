import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'REACT-BASE-TESTE',
      storage,
      whitelist: ['example'], // oq tu quer salvar
    },
    reducers,
  );

  return persistedReducer;
};
