module.exports.addImage = async (req, res, next) => {
  console.log("File name is" + req.file.filename);
  try {
    res.send(req.file.filename);
  } catch (error) {
    res
      .status(400)
      .json({ message: "image type only jpg/png", success: error });
  }
};
