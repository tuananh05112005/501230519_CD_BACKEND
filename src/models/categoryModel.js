import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
    code: {
        type: String,
        required: [true, "Bắt buộc phải nhập mã loại sản phẩm"],
        minLength: [5, "Mã loại sản phẩm phải có đọo dài 5 đến 10 ký tự"],
        maxLength: [10, "Mã loại sản phẩm phải có đọo dài 5 đến 10 ký tự"],
        
    },
    name: {
        type: String,
        required: [true, "Bắt buộc phải nhập tên loại sản phẩm"],
    },
    image: {
        type: String,
        required: [true, "Bắt buộc phải nhập link hình ảnh loại sản phẩm"],
    },
    searchString:{
        type: String,
        required: [true, "Bắt buộc phải nhập chuổi tìm kiếm"],
    },
    createAt: Date,
    updatedAt: Date,
    deletedAt: Date
},{
    versionKey: false,
    collection: "categories"
})
const CategoryModel = mongoose.model("Category", categorySchema);
export default CategoryModel;