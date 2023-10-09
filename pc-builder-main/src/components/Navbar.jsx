import { useGetAllProductsQuery } from '@/redux/api/api';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const {data,isLoading,isError} =useGetAllProductsQuery();
  
    const categories = [...new Set(data?.data.map(item => item.category))];

    return (
        <div>
            <div className="navbar  bg-gray-300">
            <div className='container mx-auto'>
  <div className="flex-1">
    <Link href='/' className="btn btn-ghost normal-case text-xl">PC-BUILDER</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     
    <li>  <Link href='/'>Home</Link></li>
      <li>  <Link href='/pc-builder'>PC-Builder</Link></li>
      <li>
        <details>
          <summary>
            Categorise
          </summary>
          <ul className="p-2 bg-base-100 flex flex-col min-w-full gap-3 z-10">
          {categories?.map((link,ind)=><Link key={ind} href={`/categories/${link}`}>{link}</Link>)}
           
            
          </ul>
        </details>
      </li>
    </ul>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;