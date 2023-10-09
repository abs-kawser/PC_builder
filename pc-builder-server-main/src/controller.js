import Product from "./model.js";


export const CreateProduct=async(req,res, next)=>{
    console.log(req.body);
    let body =req.body;
 console.log(body);
 try {
    const productItem=await Product.create(body)
    res.status(200).json({status:'success', data:productItem})
     productItem.save() 
 } catch (error) {
    console.log(error);
  next()
 }

}



  export const GetAllProducts=async(req, res)=>{
    try{
     const data=await Product.find({})
      res.status(200).json({status: "success", data:data})
  }
  catch (error) {
      res.status(400).json({status: "failed",error:error})
  }
  }


  export const GetSingleProduct=async(req, res)=>{
    try {
     const singleProduct=await Product.findById({_id:req.params.id})
     res.status(200).json({status:'Success', data:singleProduct})

    } catch (error) {
      console.log(error);
      
    }
  
  } 

  export const ProductGetByCategory=async(req, res)=>{
   
    try {
     const singleProduct=await Product.find({category:req.params.category})
     res.status(200).json({status:'Success', data:singleProduct})

    } catch (error) {
      console.log(error);
      
    }
  
  } 
 
  

  
export const updateProduct=async(req,res)=>{
 console.log(req.params.id);
 console.log(req.body);
     try {
      const updateProduct=await Product.findOneAndUpdate({_id:req.params.id}, {$set:req.body}, {new:true, useFindAndModify:true})
      res.status(200).json({status:'fail', data:updateProduct}) 
     await updateProduct.save();
     } catch (error) {
     console.log(error);
     }
    
  }


  export const DeleteSingleProduct=async(req, res, next)=>{
    try {
     const product=await Product.findByIdAndDelete({_id:req.params.id})
     res.status(200).json({status:'success', data :product})

    } catch (error) {
      console.log(error);
      next(error)
    }
  
  } 