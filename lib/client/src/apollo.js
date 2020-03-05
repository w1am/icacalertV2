import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const getURI = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      uri: `/graphql`
    }
  } else {
    return {
      uri: `http://localhost:3000/graphql`
    }
  }
}

const httpLink = new HttpLink(getURI());

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
