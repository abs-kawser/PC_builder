import express from 'express'
import { CreateProduct, DeleteSingleProduct, GetAllProducts, GetSingleProduct, ProductGetByCategory, updateProduct } from './controller.js';

const router =express.Router();

router.post('/create-product', CreateProduct)
router.delete('/deleteSingleProdcut/:id', DeleteSingleProduct)
router.patch('/prodcutUpdate/:id', updateProduct)
router.get('/getAllProdcut', GetAllProducts )
router.get('/ProductGetByCategory/:category', ProductGetByCategory )
router.get('/getSingleProdcut/:id', GetSingleProduct)



export default router
