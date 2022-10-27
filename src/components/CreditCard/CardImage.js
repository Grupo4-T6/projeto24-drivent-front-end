import styled from 'styled-components';
import chip from '../../assets/images/chip.png';

export default function CardImage(props) {
  return (
    <>
      <Card>
        <img src={chip} alt='chip'></img>
        <Number>{props.cardNumber}</Number>
        <Container>
          <Name>{props.name}</Name>
          <ValidContainer>
            <p>Valid Thru</p>
            <Valid>{props.validThru}</Valid>
          </ValidContainer>
        </Container>
      </Card>
    </>
  );
};

const Card = styled.div`
display: flex;
flex-direction: column;
  width: 300px;
  height: 180px;
  background-color: grey;
  border-radius: 20px;

  img{
    width: 35px;
    margin-top: 20px;
    margin-left: 35px;
  }
`;
const Number = styled.div`
  margin: 40px 0px 0px 35px;

  border-radius: 20px;
  color: white;
  font-weight: bold;;
  font-size: 20px;
`;

const Container = styled.div`
margin: 20px 20px 0px 35px;
display: flex;
justify-content: space-between;
flex-direction: row;
`;

const Name = styled.div`

  border-radius: 20px;
  color: white;
  font-weight: bold;;
`;

const ValidContainer = styled.div`

  border-radius: 20px;
  color: white;
  font-weight: bold;;

  p {
    font-size: 10px
  }
`;

const Valid = styled.div`

  border-radius: 20px;
  color: white;
  font-weight: bold;;
`;

const Cvc = styled.div`
  background-color: green;
  border-radius: 20px;
`;
