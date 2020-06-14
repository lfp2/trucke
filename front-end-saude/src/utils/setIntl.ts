import * as Yup from "yup";

const setIntl = () => {
  Yup.setLocale({
    mixed: {
      required: "Obrigatorio"
    },
    string: {
      email: "Email Invalido"
    }
  });
};

export default setIntl;
