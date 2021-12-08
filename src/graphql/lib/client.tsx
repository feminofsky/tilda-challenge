import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const createApolloClient = () => {
 return new ApolloClient({
   link: new HttpLink({
     uri: 'https://tilda-quiz.hasura.app/v1/graphql',
   }),
   cache: new InMemoryCache(),
 });
};
