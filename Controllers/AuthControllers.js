const AuthLogin = async (req, res, next) => {
  const { user, password } = req.body;
  console.log(req.body);
  let data = [
    { email: "satyam@test.in", password: "20172522" },
    { email: "rvbm@universe.com", password: "12345678" },
  ];

  try {
    for (let item = 0; item < data.length; item++) {
      if (data[item].email == user && data[item].password == password) {
        return res.status(200).json({ message: "Logged!" });
      }
    }
    return res.status(201).json({ message: "Wrong Credentials!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { AuthLogin }; 
