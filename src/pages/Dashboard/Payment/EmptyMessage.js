import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function EmptyMessage() {
  const navigate = useNavigate();

  function changePage() {
    navigate('/dashboard/subscription');
  }

  return (
    <Container>
      <StyledMessage onClick={changePage}>
        Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
      </StyledMessage>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70%;
`;

const StyledMessage = styled.div`
  width: 440px;
  height: 46px;

  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.4px;
  color: #8e8e8e;
`;
