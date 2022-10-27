import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { InputWrapper } from './InputWrapper';
import { FormWrapper } from './FormWrapper';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { ErrorMsg } from './ErrorMessage';
import { useForm } from '../../hooks/useForm';
import FormValidations from './FormValidations';
import { toast } from 'react-toastify';
import { useState } from 'react';
import FinishedPayment from './FinishedPayment';

import { CustomDatePicker } from './CustomDatePicker';
import CardImage from './CardImage';

export default function CreditCard(props) {
  const [ispaid, setIspaid] = useState(false);
  const [dynamicInputIsLoading, setDynamicInputIsLoading] = useState(false);
  const {
    handleSubmit,
    handleChange,
    data,
    errors,
    setData,
    customHandleChange,
  } = useForm({
    validations: FormValidations,

    onSubmit: async(data) => {
      const newData = {
        
        cardNumber: data.cardNumber.replaceAll('.', '').replaceAll('-', ''),
        name: data.name,
        validThru: data.validThru,
        cvc: data.cvc,
      };
    },

    initialValues: {
      cardNumber: null,
      name: '',
      validThru: '',
      cvc: '',
    },
  });
  function finishPayment() {
    setIspaid(true);
  }
  return (
    ispaid?
      <FinishedPayment/>
      :
      <>
        <StyledTypographyy variant="h4">
          <h2> Pagamento </h2>
        </StyledTypographyy>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CardSection>
            <CardImage 
              cardNumber={data.cardNumber} 
              name={data.name}
              validThru={data.validThru}
              cvc={data.cvc} 
            />
            <FormWrapper onSubmit={handleSubmit}>
              <InputWrapper>
                <Input
                  label="Card Number"
                  name="card"
                  type="text"
                  mask='9999.9999.9999.9999'
                  value={data?.cardNumber || ''}
                  onChange={handleChange('cardNumber')}
                />
                {errors.card && <ErrorMsg>{errors.card}</ErrorMsg>}
              </InputWrapper>
              <InputWrapper>
                <Input              
                  name="Name"
                  label="Name"
                  type="text"
                  value={data?.name || ''}
                  onChange={handleChange('name')}
                />
                {errors.cpf && <ErrorMsg>{errors.cpf}</ErrorMsg>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  name="validThru"
                  error={false}
                  helperText={null}
                  format="MM-YY"
                  mask='99/99'
                  label="Valid Thru"
                  inputVariant="outlined"
                  clearable
                  value={data.validThru}
                  onChange={(handleChange('validThru'))}
                />
                {errors.valid && <ErrorMsg>{errors.valid}</ErrorMsg>}
              </InputWrapper>
              <InputWrapper>
                <Input              
                  name="cvc"
                  label="CVC"
                  type="text"
                  maxLength="3"
                  value={data?.cvc || ''}
                  onChange={handleChange('cvc')}
                />
                {errors.cvc && <ErrorMsg>{errors.cvc}</ErrorMsg>}
              </InputWrapper>
            </FormWrapper>
          </CardSection>
        </MuiPickersUtilsProvider>
        <SubmitContainer>
          <Button 
            type="submit" 
            disabled={dynamicInputIsLoading}
            onClick={finishPayment}
          >
            FINALIZAR PAGAMENTO
          </Button>
        </SubmitContainer>
      </>
  );
};

const StyledTypographyy = styled(Typography)`
  margin: 20px 0px!important;
h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #8e8e8e;
  }
`;

const SubmitContainer = styled.div`
  margin-top: 40px!important;
  width: 100%!important;

  > Button {
    margin-top: 0 !important;
  }
`;

const CardSection = styled.div`
  display: flex;
`;
