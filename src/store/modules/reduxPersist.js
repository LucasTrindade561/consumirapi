import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'CONSUMIR_API',
      storage,
      whitelist: ['auth'], // oq tu quer salvar
    },
    reducers,
  );

  return persistedReducer;
};
