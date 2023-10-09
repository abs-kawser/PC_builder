import ProductRating from '@/components/UI/ProductRating';
import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';

const ProductDetails = ({ singleItem }) => {

    return (
        <div className='container mx-auto my-[50px]'>
            <div className="flex gap-1">

                <div className="w-1/2">
                    <Image className='max-w-[400px]' src={singleItem?.imageUrl}
                        alt={singleItem.productName} width={100} height={100} layout='responsive' />
                </div>


                <div className="w-1/2 p-4 flex m-auto flex-col gap-5">
                    <h1 className="text-2xl font-semibold">{singleItem.productName}</h1>
                    <p className="text-gray-600">{singleItem.description}</p>
                    <div className={`badge badge-secondary ${singleItem?.status === 'Out of Stock' ? 'bg-red-500 border-none text-white' : 'bg-green-500 border-none text-white'}`}>{singleItem?.status}</div>
                    <ProductRating rating={singleItem.averageRating} />
                    <p className="text-xl text-yellow-500">$ {singleItem.price}</p>
                    <p className="text-xl text-yellow-500">Brand: {singleItem.keyFeatures.brand}</p>
                    <p className="text-xl text-yellow-500">Model: {singleItem.keyFeatures.model}</p>
                    <p className="text-xl text-yellow-500">Port: {singleItem.keyFeatures.port}</p>
                    <p className="text-xl text-yellow-500">Resolution: {singleItem.keyFeatures.resolution}</p>
                    <p className="text-xl text-yellow-500">Type: {singleItem.keyFeatures.type}</p>
                    <p className="text-xl text-yellow-500">Port: {singleItem.keyFeatures.voltage}</p>

                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Bu</button> */}
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}


export const getStaticPaths = async () => {
    const res = await fetch(`https://pc-builder-server-vercel.app/api/v1/getAllProdcut`)
    const data = await res.json();
    const paths = data?.data.map((details) => ({
        params: { productDetails: details._id }
    }))
    return { paths, fallback: false }
}


export const getStaticProps = async (context) => {
    const { params } = context;
    console.log(params);
    const res = await fetch(`https://pc-builder-server-vercel.app/api/v1/getSingleProdcut/${params.productDetails}`)
    const data = await res.json();
    return {
        props: {
            singleItem: data.data
        }
    }
}



// export const getServerSideProps=async(context)=>{
//     const {params} =context;

//     const res=await fetch(`http://localhost:5000/api/v1/getSingleProdcut/${params.productDetails}`)
//     const data=await res.json();
//     return{
//         props:{
//             singleItem:data.data
//         }
//     }
// }