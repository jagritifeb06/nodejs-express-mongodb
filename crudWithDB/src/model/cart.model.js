const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ItemSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      require: true,
      min: [1, "Quantity can not be less than 1"],
    },
  },
  {
    timestamps: true,
  }
);
const CartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [ItemSchema],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("cart", CartSchema);
