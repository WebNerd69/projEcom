import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js"
// function to add product
const addProduct = async (req, res) => {
     try {
          const { name, description, category, type, sizes, price, bestseller } = req.body;
          const image1 = req.files.image1 && req.files.image1[0]
          const image2 = req.files.image2 && req.files.image2[0]
          const image3 = req.files.image3 && req.files.image3[0]
          const image4 = req.files.image4 && req.files.image4[0]

          const images = [image1,image2,image3,image4].filter((item)=> item!=undefined)
          const imageUrl = await Promise.all(
               images.map(async (item)=>{
                    let result = await cloudinary.uploader.upload(item.path)
                    return result.secure_url
               })
          )

          // Check if sizes is a valid JSON string
          let parsedSizes;
          try {
               parsedSizes = JSON.parse(sizes);
          } catch (error) {
               return res.status(400).json({ success: false, message: "Invalid sizes format" });
          }

          const productData = {
               name,
               description,
               price: Number(price),
               sizes: parsedSizes,
               category,
               type,
               bestseller: bestseller === 'true',
               image: imageUrl,
               date : Date.now()
          }
          const product = new productModel(productData)
          await product.save()

          console.log(productData)
          res.json({success:true,message:"Product added successfully."})
          } 
               
     catch (error) {
          console.error(error)
          res.json({success:false,message:error.message})
          }
}
// function to remove product
const removeProduct = async (req, res) => {
     try {
          const { id } = req.body; // Get the product ID from request parameters
          const deletedProduct = await productModel.findByIdAndDelete(id); // Use findByIdAndDelete

          if (!deletedProduct) {
               return res.status(404).json({ success: false, message: "Product not found" });
          }

          res.json({ success: true, message: "Product removed" });
     } catch (error) {
          console.error(error);
          res.json({ success: false, message: error.message });
     }
}
// function to list product
const listProduct = async (req, res) => {
     try {
          const product = await productModel.find({})
          console.log(product)
          res.json({success:true,product})
     } catch (error) {
          console.error(error)
          res.json({success:false,message:error.message})
     }
}    
// function to get single product info
const singleProduct = async (req, res) => {
     try {
          const {id} = req.body
          const product = await productModel.findById(id)
          res.json({success:true,
               product
          })
     } catch (error) {
          console.error(error)
          res.json({success:false,message:error.message})
     }
}

export { addProduct, removeProduct, listProduct, singleProduct }