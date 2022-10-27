const FormValidations = {
  cardNumber: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um número de cartão válido',
    },
  },
  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um nome válido',
    }
  },
  validThru: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite uma data válida',
    },
  },
  cvc: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um cvc válido',
    },
  },
};
export default FormValidations; 

function isValidString(value) {
  return value || value?.trim();
}
