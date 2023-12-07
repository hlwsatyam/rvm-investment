let data = [
  { email: "satyam@test.in", password: "20172522" },
  { email: "rvbm@universe.com", password: "12345678" },
];

const AdminAccess = (user, password) => {
  for (let item = 0; item < data.length; item++) {
    if (data[item].email == user && data[item].password == password) {
      return true;
    }
    return false;
  }
};

module.exports = { AdminAccess };
