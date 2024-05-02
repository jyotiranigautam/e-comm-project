import express from "express";
import Product from '../models/products.model.js'

export const addProducts = async (req, res) => {

    const { productTitle, category, description, price, image } = req.body;
    console.log("req.body", req.body);
    try {
        const product = await Product.create({
            productTitle,
            category,
            description,
            price,
            image
        })

        if (product) {
            console.log("product created", product);
            res.status(200).json({ status: 200, message: 'Product added successfully', product });
        } else {
            console.log("Failed to add product");
            res.status(500).json({ status: 500, message: "Failed to add product" })
        }
    } catch (error) {
        console.log("error in adding product", error)
    }
}

export const getAllProducts = async (req, res) => {
    const products = Product.findAll();
    try {
        if (products) {
            console.log("products", products);
            res.status(200).json({ status: 200, message: "Products fetched successfully", products })
        } else {
            console.log("products not found");
            res.status(500).json({ status: 500, message: "Failed to fetch products" })
        }
    } catch (error) {
        console.log("error in fetching products", error);
        res.status(500).json({ message: error.message })
    }

}



