import React from 'react';


const Review = ({review}) => {
    const {name,img,title,rating} = review;
    
    
  return (
    <div className="basis-1/3 my-5 p-2">
            <div className='border-solid rounded border-2 border-sky-500 p-5'>
                <div className='flex flex-row'>
                    <img className='basis-1/5 review-img' src={img} alt=""/>
                    <div className='basis-4/5'>
                        <h5 className='text-2xl my-2'>{name}</h5>
                        
                    </div>
                </div>
                <p className='my-3'><i>" {title} "</i></p>
                <p>Rating: {rating}</p>
                
            </div>
        </div>
  );
};

export default Review;