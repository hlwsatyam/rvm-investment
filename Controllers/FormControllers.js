const { MessageModel } = require("../Model/MessageModel");

const { Verifiedmail } = require("../Verification/SentEmail");

const FormSubmit = async (req, res, next) => {
  
  const { name, email, phone, message } = req.body;

  try {
    const form = new MessageModel({
      name,
      email,
      phone,
      message,
    }); 
    await form.save();
    Verifiedmail(email, req.body);
    return res.status(200).json({ Success: "Message Sent successFfully!" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Somethng Went Worng!" });
  }
};

module.exports = { FormSubmit };
