
import { useEffect, useState } from 'react';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import TicketsForm from '../../../components/Payment/Options';
import { useNavigate } from 'react-router-dom';

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

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamentos</StyledTypography>
      {isEnrolled === '' ? <TicketsForm /> : isEnrolled}
    </> 
  );
}

const StyledTypography = styled(Typography)`

  margin-bottom: 20px!important;
`;

