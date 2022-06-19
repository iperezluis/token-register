const jwt = require("jsonwebtoken");
require("dotenv").config();

//generar jwt

const token = (uid, expireIn) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.JWT_KEY,
      {
        algorithm: "HS256",
        expiresIn: expireIn,
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se puedo generar el JWT");
        } else {
          resolve(token);
        }
      }
    );
  });
};
// const test = async () => {
//   try {
//     const res = await token("luis", "1 day");
//   } catch (error) {
//     console.log(error);
//   }
// };
// console.log(test());
const checkToken = (token = "") => {
  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    return uid;
  } catch (error) {
    return [false, null];
  }
};

const validateToken = (req, res) => {
  try {
    //este header llamado "x-token" lo vamos a enviar desde el fronEnd
    const token = req.header("x-token");
    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "no hay token en el header",
      });
    }
    //este payload va a retornar el uid del usuario, la fecha creacion y expired
    const payload = jwt.verify(token, process.env.JWT_KEY);
    const { uid } = payload;
    //almacenamos el uid del usuario en la request para mandarselo a nuestro renewToken()
    req.uid = uid;
    // next();
  } catch (error) {
    console.log(error);
    // 401 forbidden || no autorizado
    return res.status(401).json({
      ok: false,
      msg: "el token no es valido",
    });
  }
};

module.exports = { token, checkToken };
