import styled from 'styled-components';

export default function EmptyMessage() {
  return (
    <>
      <Container>
        <StyledMessage>
            Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
        </StyledMessage>
      </Container>
      
    </>
  
  );
}

const StyledMessage = styled.div`
  width: 440px;
  height: 46px;

  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.40px;
  color: #8E8E8E;

`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 70%;

`;

