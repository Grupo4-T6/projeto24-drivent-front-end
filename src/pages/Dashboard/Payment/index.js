import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Typography from '@material-ui/core/Typography';

import EmptyMessage from './EmptyMessage';
import CreditCard from '../../../components/CreditCard/index';

export default function Payment() {
  const navigate = useNavigate();
  const { enrollment } = useEnrollment();

  const [isEnrolled, setisEnrolled] = useState(EmptyMessage);

  useEffect(() => {
    if (enrollment) {
      setisEnrolled(true);
    } else {
      setisEnrolled(false);
    }
  }, [enrollment]);

  return (
    <>
      <StyledTypography variant="h4">
        Ingresso e pagamento
      </StyledTypography>

      <CreditCard /> 
    </>
    
  );
}

const StyledTypography = styled(Typography)`
margin-bottom: 20px!important;
`;

