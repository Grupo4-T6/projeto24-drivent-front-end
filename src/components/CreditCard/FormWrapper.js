import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  margin-left: 30px;
  > div {
    width: calc(50% - 20px);
    margin: 0 10px 0 0;
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;
