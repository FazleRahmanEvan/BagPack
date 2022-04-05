import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

import './Home.css';

const Home = () => {
    return (
        <div className="mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="p-5 lg:mt-10">
            <h1 className="text-3xl font-bold px-10">Bag For Student</h1>
            <h1 className="text-3xl pt-5 px-10 font-bold text-indigo-600">
             Exclusive Bags
            </h1>
            <p className="flex justify-center text-justify px-10 pt-5">
            A backpack is a staple of your school wardrobe—it will accompany you to class, the gym, late-night library marathons, and early-morning coffee runs.
            </p>
            <button className="mt-5 mx-10 bg-indigo-200 rounded p-3 font-bold">
              Live Demo
            </button>
          </div>
          <div>
            <img
              className="mx-10 img-size"
              src="https://m.media-amazon.com/images/I/816pvuYbYNL._UX679_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
        <CustomerReview></CustomerReview>
        </div>
      </div>
    );
};

export default Home;