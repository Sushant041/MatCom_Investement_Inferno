const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stockNum: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  price: {
    type:Number,
    get:function(){
      return this.stockdata[this.stockdata.length-1].CLOSE;
    }
  },
  description: String,
  message: String,
  stockdata:[
    {
      OPEN: Number,
      HIGH: Number,
      LOW: Number,
      CLOSE: Number,
    }
  ],
});

module.exports = mongoose.model("Stock", stockSchema);
