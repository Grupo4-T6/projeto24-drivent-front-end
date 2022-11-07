import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import * as message from './EmptyMessages';

export default function EmptyMessage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function getLocation() {
    return pathname;
  }

  function changePage() {
    navigate('/dashboard/subscription');
  }
  function getMessage() {
    const location = getLocation();
    if (location === '/dashboard/payment' ) {
      return message.substcription;
    }
    if (location === '/dashboard/hotel' ) {
      return message.substcription;
    }
  }

  return (
    <Container>
      <StyledMessage >
        {getMessage()}
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
