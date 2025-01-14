import CategoryModel from "../models/categoryModel.js"
import { ObjectId } from "mongodb"

export async function listCategory(req, res){
    try{
    const categories =  await CategoryModel.find({deletedAt: null})
    res.render("pages/categories/list", {
        title: "Categories",
        categories: categories,
    })
} catch(error){
    console.log(error)
    res.send("Hiện tại không có sản phẩm nào")
}}

export async function renderPageCreateCategory(req, res){
    res.render("pages/categories/form", {
        title: "Create Categories",
        mode: "Create",
        category: {}
    })
   }

export async function createCategory(req, res){
    const {code, name, image} = req.body;
    try{
    await CategoryModel.create(
        { code, name, image, createdAt: new Date ()}
    )
    res.redirect("/categories")
} catch(error){
    console.log(error)
    res.send("Tạo loại sản phẩm không thành công!")
}}


export async function renderPageUpdateCategory(req, res){
    try{
        const { id } = req.params
        const category = await CategoryModel.findOne({_id: new ObjectId(id), deletedAt: null })
        if(category){
        res.render("pages/categories/form", {
            title: "Create Categories",
            mode: "Update",
            category: category
        })
       }else{
        res.send("Hiện không có sản phẩm nào phù hợp")
       }
    }catch(error){
        res.send("Trang web này không tồn tại!")
    }
   }


export async function updateCategory(req, res){
    const {code, name, image, id} = req.body;
    try{
    await CategoryModel.updateOne( 
        {_id: new ObjectId(id) }, 
        {code, name, image, updatedAt: new Date ()}
    ) 
    res.redirect("/categories")
} catch(error){
    console.log(error)
    res.send("Cập nhật sản phẩm không thành công!")
}}


export async function renderPageDeleteCategory(req, res){
    try{
        const { id } = req.params
        const category = await CategoryModel.findOne({_id: new ObjectId(id), deletedAt: null})
        if(category){
        res.render("pages/categories/form", {
            title: "Delete Categories",
            mode: "Delete",
            category: category
        })
       }else{
        res.send("Hiện không có sản phẩm nào phù hợp")
       }
    } catch (error){
        console.log(error)
        res.send("Trang web này không tông tại")
 
    }
}

export async function deleteCategory(req, res){
    const {id} = req.body;
    try{
    await CategoryModel.updateOne( 
        {_id: new ObjectId(id) }, 
        { deletedAt: new Date ()}
    ) 
    res.redirect("/categories")
} catch(error){
    console.log(error)
    res.send("Xóa loại sản phẩm không thành công!")
}}