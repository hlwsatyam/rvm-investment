const { AdminAccess } = require("../Authentication/AdminAccess");

const AuthLogin = async (req, res, next) => {
  const { user, password } = req.body;
  console.log(req.body);

  try {
    if (AdminAccess(user, password)) {
      return res.status(200).json({ message: "Logged!" });
    }

    return res.status(201).json({ message: "Wrong Credentials!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { AuthLogin };
