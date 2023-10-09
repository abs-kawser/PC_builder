
import Image from 'next/image';

import Link from 'next/link';
import ProductRating from './ProductRating';




const ProductCard = ({data}) => {
    const categories = [...new Set(data?.data?.map(item => item.category))]; 
    const randomData = [];
    

   function ranData(){
    categories.map(category => {
        const categoryItems = data?.data?.filter(item => item.category === category);
      
        if (categoryItems.length > 0) {
          const randomIndex = Math.floor(Math.random() * categoryItems.length);
          const randomItem = categoryItems[randomIndex];
          randomData.push(randomItem);
        }
      });
   }
   
    ranData()
   
  
    
 
    
    return (
        <div className='container mx-auto'>
        <div className="flex justify-center items-center flex-wrap gap-[24px] mt-5">
           {randomData?.map((product, ind)=>(
            
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
    <button className="btn btn-info">
        <Link href={`/productDetails/${product._id}`}>View</Link>
    </button>
    </div>
  </div>
</div>
            
           ))}
        </div>
   
        </div>
    );
};

export default ProductCard;