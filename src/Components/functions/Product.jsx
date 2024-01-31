import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import '../css/product.css'
import {useNavigate} from 'react-router-dom'



function Product1() {
  const [products, setproducts] = useState([]);
  const nav = useNavigate();


  

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
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-3 gap-8 w-[90%] xl:mb-48 " role="group">
         {
          products.map(product =>(
            <a href='' onClick={
              (e) => {
                nav('/product', { state: { id: product.show.id} });
              }
          }>
            <Card className="cardwid shadow-lg m-2" placeholder="k">
      <CardBody placeholder="k">
        <div className="mb-3 ">
          <Typography variant="h6" color="blue-gray" className="text-black font-bold text-center text-xl" placeholder="k">
           {product.show.name}
          </Typography>
        </div>
        <div className='flex items-center justify-between'>
        <Typography color="gray" className=' text-black font-bold' placeholder="k">
        {product.show.language}
        </Typography>
        <Typography
          placeholder="k"
            color="blue-gray"
            className="text-black flex items-center gap-1.5 font-bold"
          >
            {product.show.status}
          </Typography>
        </div>

        <div className='flex items-center justify-between'>
        <Typography color="gray" className=' text-black font-bold' placeholder="k">
        {product.show.genres[0]}
        </Typography>
        <Typography
          placeholder="k"
            color="blue-gray"
            className="text-black font-bold flex items-center gap-1.5"
          >
            {product.show.genres[1]}
          </Typography>
        </div>

        <div className='flex items-center justify-between'>
        <Typography color="gray" className=' text-black font-bold' placeholder="k">
        {product.show.type}
        </Typography>
        <Typography
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
          </Typography>
        </div>
      </CardBody>
    </Card>
    </a>
          ))
         }
     </div>
      </div>
    );
  }
  
  export default Product1;
  