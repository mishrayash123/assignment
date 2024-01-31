import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'



const Book = () => {
  const [name, setname] = useState(""); 
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [quantity, setquantity] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleBook = async(e) => {
    e.preventDefault();
    localStorage.setItem("name",name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("quantity",quantity);
    localStorage.setItem("movie",location.state.name);
    alert("Congrates you have Booked")
    navigate("/")
  };

  return (
    <section >
      <div className="container h-full px-6 mt-2">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg border-gray-50 border-4 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Book a Ticket
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleBook}>
                <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event name</label>
                        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value={location.state.name}/>
                    </div>
                <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" required value={name}
                  onChange={(e) => setname(e.target.value)}/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="Number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxx xxx xxx" required  value={phone}
                  onChange={(e) => setphone(e.target.value)}/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxx xxx xxx xxx" required  value={address}
                  onChange={(e) => setaddress(e.target.value)}/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                        <input type="Number"  placeholder="xx" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required   value={quantity}
                  onChange={(e) => setquantity(e.target.value)}/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" onClick={handleBook}>Book</button>
                </form>
            </div>
        </div>
    </div>
    </div>
        </div>
    </section>
  );
};

export default Book;
