import ProductRating from '@/components/UI/ProductRating';
import RootLayout from '@/components/layout/RootLayout';
import { AddtoCart } from '@/redux/productSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router'



const ProductCategoryPage= ({catItems}) => {
   
const dispatch=useDispatch()

    const addToCartItem=(items)=>{
        dispatch(AddtoCart(items));
      Router.push('/pc-builder')

    }

    return (
        <div className='container mx-auto'>
        <div className="flex justify-center items-center flex-wrap gap-[24px] mt-5">
           {catItems?.map((product, ind)=>(
            
           <div key={ind} className="card  w-96  bg-base-100 shadow-xl overflow-hidden">
    
           <Image className='max-h-[200px]' src={product?.imageUrl} 
            alt={product.productName} width={100} height={100} layout='responsive' />
       
       <div className="card-body">
        <h2 className="card-title">
        {product.productName}
      <div className={`badge badge-secondary ${product?.status === 'Out of Stock' ? 'bg-red-500 border-none text-white' : 'bg-green-500 border-none text-white'}`}>{product?.status}</div>
    </h2>
    <div>
      <ProductRating rating={product?.averageRating} />
    </div>
   
    <p>${product?.price}</p>
    <div className="badge badge-outline">{product.category}</div> 
    <div className="card-actions justify-end">
    <button onClick={()=> addToCartItem(product)} className="btn btn-info">
        Addx
    </button>
    </div>
  </div>
</div>
            
           ))}
        </div>
   
        </div>
    );
};

export default ProductCategoryPage;


ProductCategoryPage.getLayout=function getLayout(page){
    return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths=async()=>{
    const res=await fetch(`http://pc-builder-server-vercel/v1/getAllProdcut`)
    const data=await res.json();
    const paths=data?.data.map((details)=>({
        params:{productCategory:details.category}
    }))
    return{paths, fallback:false}
    }




export const getStaticProps=async(context)=>{
    const {params} =context;

    const res=await fetch(`https://pc-builder-server-vercel.app/api/v1/ProductGetByCategory/${params.productCategory}`)
    const data=await res.json();
    return{
        props:{ 
            catItems:data.data
        }
    }
}


