const multer=require('multer');
const { ErrorHandler } = require("../error");

const MIME_TYPES = ["image/jpg", "image/png", "image/jpeg"];
const multer = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "assets");
  },
  filename: (req, file, callback) => {
    console.log("FILE IS" + file);
    let filename = file.originalnmae.split(" ").join("-");
    filename = filename.split(".");
    const fileExtension = filename.pop();
    filename = `${filename.join(
      "-"
    )}-${Date.now()}.${fileExtension}`.toLowerCase();
    console.log("FILE name IS" + filename);
    callback(null, filename);
  },
});
const fileFilterCB = (req, file, callback) => {
  console.log("FILE type IS" + file.mimetype);
  if (MIME_TYPES.includes(file.mimetype)) {
    return callback(null, true);
  }
  // callback(new Error({ message:'Please upload valid file type',success:'error}));
  callback(new ErrorHandler(404, "Invalid Image Type (png/jpg)", "error"));
};

module.exports = multer({ storage: storage, filefilter: fileFilterCB });
