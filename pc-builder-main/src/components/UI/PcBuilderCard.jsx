import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const PcBuilderCard = ({data}) => {
    const {cartItems} = useSelector(state=> state?.addeditems)
    console.log(cartItems);
    const categories = [...new Set(data?.map(item => item.category))]; 
    const randomData = [];
    

   function ranData(){
    categories.map(category => {
        const categoryItems = data?.filter(item => item.category === category);
      
        if (categoryItems.length > 0) {
          const randomIndex = Math.floor(Math.random() * categoryItems.length);
          const randomItem = categoryItems[randomIndex];
          randomData.push(randomItem);
        }
      });
   }
   
    ranData()
   
  



    return (
        <div>
            {randomData?.map((item, ind)=>(
                <div key={ind}>
                <div className="flex items-center justify-between bg-gray-200 p-2 my-2 rounded-lg">

<div className="flex-none w-16">
   <Image src={item?.imageUrl} alt="Product Image" className="max-w-full h-auto" width={10} height={10} layout='responsive' />
</div>

<div className="w-1/4 text-center">
<p className="text-gray-600">Category: {item.category}</p>
{cartItems?.map((carti)=>{
    if(carti.category === item.category){
        return(
            <div className='bg-blue-500 p-3 flex justify-center items-center flex-col' key={carti._id}>
             <h3 className='text-white'>Items Added</h3>
            <p className='text-gray-800 font-bold'>Name: {carti?.productName}</p>
            <p className='text-gray-800 font-bold'>Price: ${carti?.price}</p>

            </div> 
        )
    }
})}
</div>
<div className="w-1/4 text-center">
<Link href={`categories/${item.category}`}>
<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Choose</button>
</Link>
</div>
</div> 
                </div>
            ))}
        </div>
    );
};

export default PcBuilderCard;