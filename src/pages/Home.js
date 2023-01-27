import styled from 'styled-components';

const Container = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Welcome = styled.h1`
  color: #77529e;
  font-weight: 700;
  font-size: 48;
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <Welcome>
        Phone Book welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          ☎️
        </span>
      </Welcome>
    </Container>
  );
}
