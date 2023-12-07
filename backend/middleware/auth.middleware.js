const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      res.status(400).json({ status: "fail", message: `Token Required` });
    } else {
      jwt.verify(token, "masai", (err, decoded) => {
        if (decoded) {
          // console.log(`auth part:`, decoded);
          req.body.userId = decoded.userId;
          req.body.username = decoded.username;
          next();
        } else {
          res
            .status(400)
            .json({ status: "fail", message: `Token cant be decoded` });
        }
      });
    }
  } catch (error) {
    // console.log(`auth part:`, error);
    res.status(400).json({ status: "fail", message: error.message });
  }
};

module.exports = { auth };
