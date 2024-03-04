import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
    productTitle: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    createdAt: Date,
    updatedAt: Date,
},
{timestamps:true}
)

const Product = model('Product', productSchema);

export default Product;