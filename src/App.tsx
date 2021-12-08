import { Suspense, useState } from 'react';
import { ApolloProvider} from '@apollo/client';

import {createApolloClient} from './graphql/lib/client';
import {Loader} from './components/Loader';

import AppRoute from './routes/index';

function App() {
  const [client] = useState(createApolloClient());
  return (
    <Suspense fallback={<Loader />}>
      <ApolloProvider client={client}>
        <AppRoute Loader={Loader} />
      </ApolloProvider>
    </Suspense> 
  );
}

export default App;
