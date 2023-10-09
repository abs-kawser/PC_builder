import PcBuilderCard from '@/components/UI/PcBuilderCard';
import RootLayout from '@/components/layout/RootLayout';

import React from 'react';

const PcBuilderPage = ({data}) => {
  
    return (
        <div className='container mx-auto'>
        <PcBuilderCard data={data} />
     

        </div>
    );
};

export default PcBuilderPage;
PcBuilderPage.getLayout=function getLayout(page){
    return <RootLayout>{page}</RootLayout>
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://pc-builder-server-vercel-app/api/v1/getAllProdcut')
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data:data?.data } }
}