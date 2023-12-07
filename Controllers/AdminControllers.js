const { MessageModel } = require("../Model/MessageModel");
const { IntrestModel } = require("../Model/IntrestModel");
const { IntrestTrashModel } = require("../Model/TrashIntrestModel");

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
      const Trash = new IntrestTrashModel({
        phone: messages.phone,
        email: messages.email,
        postal: messages.postal,
        isNumberVarified: messages.isNumberVarified,
      });
      await Trash.save();
      return res.status(200).json({ messages: "deleted!" });
    } else {
      let messages = await IntrestTrashModel.findByIdAndDelete(id);
      if (messages) {
        return res.status(200).json({ messages: "deleted!" });
      } else {
        res.status(201).json({ error: "Somethng Went Worng!" });
      }
    }
    res.status(201).json({ error: "Somethng Went Worng!" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Something Went Worng!" });
  }
};

const GetTrash = async (req, res, next) => {
  try {
    let messages = await IntrestTrashModel.find();
    if (messages) {
      return res.status(200).json({ messages });
    }
    res.status(201).json({ error: "Somethng Went Worng!" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error: "Something Went Worng!" });
  }
};

module.exports = {
  AdminPanelForMessage,
  Deletedata,
  AdminPanelForIntrest,
  GetTrash,
};
