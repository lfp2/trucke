const firebaseConfig = require("../../config/firebase");
const db = firebaseConfig.firestore();
const carriersRef = db.collection("carriers");

class CarrierController {
  async signUp(req, res) {
    try {
      const {
        cnpj,
        num_employees,
        cep,
        street,
        number,
        complement,
        city,
        uf,
        email,
        phone,
        razao_social,
        nome_fantasia,
        data_de_abertura,
      } = req.body;

      const verifyEmailExists = await carrierRef
        .where("email", "==", email)
        .get();

      const verifyEmailExists = await carrierRef
        .where("cnpj", "==", cnpj)
        .get();

      const urlCNPJ = str.concat(
        "https://consulta-cnpj-gratis.p.rapidapi.com/companies/",
        cnpj
      );

      const responseCNPJ = await axios({
        method: "GET",
        url: urlCNPJ,
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "consulta-cnpj-gratis.p.rapidapi.com",
          "x-rapidapi-key": PROCESS.ENV.X_RAPIDAPI_KEY,
          useQueryString: true,
        },
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = new CarrierController();
