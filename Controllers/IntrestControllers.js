const { IntrestModel } = require("../Model/IntrestModel");
const IntrestFormSubmit = async (req, res, next) => {
  const { postal, email, phone } = req.body;
  try {
    const form = new IntrestModel({
      postal,
      email,
      phone,
    });
    await form.save();
    return res
      .status(200)
      .json({ Success: "Message Sent successFfully!", id:form._id });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Somethng Went Worng!" });
  }
};

const IntrestFormUpdate = async (req, res, next) => {
  const { isNumberVarified, id } = req.body;
  try {
    const form = await IntrestModel.findByIdAndUpdate(id, {
      isNumberVarified: isNumberVarified,
    });
    if (form) {
      return res.status(200).json({ Success: "updated successFfully!", form });
    } else {
      return res.status(201).json({ error: "Wrong Credentials!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Somethng Went Worng!" });
  }
};

module.exports = { IntrestFormSubmit, IntrestFormUpdate };
