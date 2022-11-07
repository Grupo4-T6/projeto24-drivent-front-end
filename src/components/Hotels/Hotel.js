import styled from 'styled-components';

export default function Hotel(props) {
  return (
    <Container onClick={() => props.sethotelSelected(props.id)} selected={props.id === props.hotelSelected}>
      <img src={props.imageUrl} alt="hotel" />
      <h1>{props.name}</h1>
      <h3>Tipos de acomodação:</h3>
      <p>{props.type}</p>
      <h3>Vagas disponíveis:</h3>
      <p>{props.avaliableRoons}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 196px;
  height: 264px;
  padding: 16px 14px 22px 14px;

  background-color: ${(props) => (props.selected ? '#FFEED2' : '#f1f1f1')};
  border-radius: 10px;
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  h1 {
    font-weight: 400;
    font-size: 20px;
    color: #343434;
    margin-top: 10px;
  }
  h3 {
    font-weight: 700;
    font-size: 12px;
    color: #3c3c3c;
    margin-top: 10px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    color: #3c3c3c;
    margin-top: 2x;
  }
`;
