const PRUEBA_KO = "pruebaKO123";

const RESPONSE_OK = { status: 200 };
const RESPONSE_KO = { status: 401 };

const submitForm = (data, repass, optionalQuestion) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (data.passwordManager !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)),
      3000
    )
  );

export { submitForm };
