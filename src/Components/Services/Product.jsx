import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';





function Product() {
    const location = useLocation();
    const [products, setproducts] = useState([]);

    

    const fetchData = async () => {
        try {
            const response = await fetch(
              "https://api.tvmaze.com/search/shows?q=all",
              {
                method: "GET",
              }
            );
            if (response.ok) {
              const data = await response.json();
              setproducts(data)
            } else {
              alert("Something went wrong please login again");
            }
          } catch (error) {
            console.error("Error during login:", error);
          }
    }


    useEffect(() => {
        fetchData();
    }, []);


    return (
      <div className='my-3'>
      <div className="container mx-auto  w-[90%] my-28  " role="group">
        {
         products.filter((e)=>(e.show.id===location.state.id)).map(product =>(
           <div class="w-75 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{product.show.name}</h5>
        <div className='flex items-center justify-between m-2'>
        <div color="gray" className=' text-black font-bold' placeholder="k">
        {product.show.language}
        </div>
        <div
          placeholder="k"
            color="blue-gray"
            className="text-black flex items-center gap-1.5 font-bold"
          >
            {product.show.status}
          </div>
        </div>

        <div className='flex items-center justify-between m-2'>
        <div color="gray" className=' text-black font-bold' placeholder="k">
        {product.show.genres[0]}
        </div>
        <div
          placeholder="k"
            color="blue-gray"
            className="text-black font-bold flex items-center gap-1.5"
          >
            {product.show.genres[1]}
          </div>
        </div>

        <div className='flex items-center justify-between m-2'>
        <div color="gray" className=' text-black font-bold' placeholder="k">
        {product.show.type}
        </div>
        <div
          placeholder="k"
            color="blue-gray"
            className="text-black flex items-center gap-1.5 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {product.show.rating.average || "0"}
          </div>
        </div>
        <h5 class="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Summary</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><div dangerouslySetInnerHTML={{ __html:product.show.summary}} /></p>
    <a href={product.show.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        URL
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
         ))
        }
    </div>
     </div>
    );
}

export default Product;