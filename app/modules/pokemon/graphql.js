import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import { BatchHttpLink } from 'apollo-link-batch-http';

export default new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:5000' }),
  // use this to support batching if BE server supports it
  // link: new BatchHttpLink({ uri: 'http://localhost:5000' }),
  cache: new InMemoryCache(),
});
