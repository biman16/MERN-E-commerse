import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Product name."],
        trim: true,
    },
    description:{
        type: String,
        required: [true, "Please Enter Product description."],
    },
    price:{
        type: Number,
        required: [true, "Please Enter Product pricing."],
        maxLength: [7, "Price can not exceed 7 digit."],
    },
    ratings:{
        type: Number,
        default: 0,
    },
    image:[{
					public_id:{
							type: String,
							required: true,
					},
					url:{
							type: String,
							required: true,
					}
        }
      ],
			category:{
				type: String,
				required: [true, "Please enter the product category."]
			},
			stock:{
				type: Number,
				required: [true, "Please enter the product stock.."],
				maxLength: [5, "stock can not exceed 5 digit."],
				default: 1,
			},
			numberOfReviews:{
				type: Number,
				default: 0,
			},
			reviews:[
				{
					name:{
						type: String,
						required: true,
					},
					rating:{
						type: Number,
						required: true,
					},
					comment:{
						type: String,
						required: true,
					}
				}
		],
		createdAt:{
			type: Date,
			default: Date.now,
		}
});


export default mongoose.model("Product", productSchema);