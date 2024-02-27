import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
},
{timestamps:true}
)

const Category = model('Category', categorySchema);

export default Category;