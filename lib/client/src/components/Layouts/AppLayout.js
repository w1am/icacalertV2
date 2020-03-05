import styled from 'styled-components';

export default styled.div`
  max-width: 1100px;
  padding: 3rem 0rem 0rem 2rem;
  margin-left: 20rem;
  @media (max-width: 850px) {
    max-width: 100%;
    margin: 1rem 0rem 0rem 1rem; 
    padding: 0rem;
  }
  @media (min-width: 1800px) {
    margin: 0 auto;
  }
`
