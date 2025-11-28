import Product from "../model/productModel.js";

export const createProduct = async(req, res)=>{
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
}

export const getAllProducts = async(req, res)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}

export const updateProduct = async(req, res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
    if(!product){
        return res.status(500).json({
            success:false,
            message:"No Product found."
        })
    }    

    res.status(200).json({
        success:true,
        product,
    })
};

export const deleteProduct = async(req, res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
            return res.status(500).json({
                success:false,
                message:"No Product found."
            })
        }
    res.status(200).json({
        success:true,
        message: "Product deleted successfully",
    })
};


export const getSingleProduct = async(req, res)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"No Product found."
        })
    }

    res.status(200).json({
        success: true,
        product
    })
};