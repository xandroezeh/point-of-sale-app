import mongoose from 'mongoose';

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamp: true
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;