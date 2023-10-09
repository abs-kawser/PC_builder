
import RootLayout from "@/components/layout/RootLayout"
import ProductCard from "@/components/UI/ProductCard";

const Home=({data})=>{
  
  
  return(
    <>
      <div className="min-h-screen">
         <ProductCard data={data} />
      </div>
    </>
  )
}

export default Home

Home.getLayout=function getLayout(page){
   return(
    <RootLayout>{page}</RootLayout>
   )
}




export async function getStaticProps() {
  // Fetch data from external API
    const res=await fetch(`http://pc-builder-server-vercel/v1/getAllProdcut`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data }, revalidate:10,}
}


// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:5000/api/v1/getAllProdcut`)
//   const data = await res.json()
 
//   // Pass data to the page via props
//   return { props: { data } }
// }