import styled from 'styled-components';

export default function EmptyMessage() {
  return (
    <>
      <StyledMessage>
        Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
      </StyledMessage>
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

