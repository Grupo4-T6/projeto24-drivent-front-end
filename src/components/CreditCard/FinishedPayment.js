import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function FinishedPayment() {
  return (
    <>
      <StyledTypographyy variant="h4">Pagamento</StyledTypographyy>
      <Container>
        <ion-icon name="checkmark-circle"></ion-icon>
        <Text>
          <h4>Pagamento confirmado!</h4>
          <h5>Prossiga para escolha de hospedagem e atividades</h5>
        </Text>
      </Container>
    </>
    
  );
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;

    ion-icon {
      font-size: 40.33px;
      color:  #36B853;
      margin-right: 20px;
    }
`;
const Text = styled.div`
   
h4{
  font-family: Roboto;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
}

h5{
  font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
}

`;

const StyledTypographyy = styled(Typography)`
  margin-bottom: 20px!important;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;

color: #8E8E8E;
`;
