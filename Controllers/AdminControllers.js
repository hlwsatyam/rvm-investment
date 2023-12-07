const { MessageModel } = require("../Model/MessageModel");
const { IntrestModel } = require("../Model/intrestModel");

const AdminPanelForMessage = async (req, res, next) => {
  try {
    let messages = await MessageModel.find();
    if (messages) {
      return res.status(200).json({ messages });
    }
    res.status(404).json({ error: "Somethng Went Worng!" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Somethng Went Worng!" });
  }
};
const AdminPanelForIntrest = async (req, res, next) => {
  
  try {
    let messages = await IntrestModel.find();
    if (messages) {
      return res.status(200).json({ messages });
    }
    res.status(404).json({ error: "Somethng Went Worng!" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Something Went Worng!" });
  }
};
const Deletedata = async (req, res, next) => {
  const { id } = req.params;
  try {
    let messages = await IntrestModel.findByIdAndDelete(id);
    if (messages) {
      return res.status(200).json({ messages: "deleted!" });
    }
    res.status(201).json({ error: "Somethng Went Worng!" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Something Went Worng!" });
  }
};

module.exports = { AdminPanelForMessage, Deletedata, AdminPanelForIntrest };
