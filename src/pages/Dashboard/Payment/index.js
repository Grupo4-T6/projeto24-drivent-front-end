import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Typography from '@material-ui/core/Typography';

import EmptyMessage from './EmptyMessage';
export default function Payment() {
  const navigate = useNavigate();

  const { enrollment } = useEnrollment();
  const [isEnrolled, setisEnrolled] = useState(EmptyMessage);
 
  useEffect(() => {
    if (enrollment) {
      setisEnrolled('');
    }
  }, [enrollment]);

  function changePage() {
    navigate('/dashboard/subscription');
  }
  return (
    <>
      <StyledTypography variant="h4">
        Ingresso e pagamento
      </StyledTypography>
      <Container onClick={changePage}>
        {isEnrolled === '' ? EmptyMessage : isEnrolled }
      </Container>
    </>
    
  );
}

const StyledTypography = styled(Typography)`
margin-bottom: 20px!important;
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 70%;

`;

