import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: model.Schema(),
        required: true
    }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);
