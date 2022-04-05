
import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';



const CustomerReview = () => {
   const [review, setReview] = useReviews();
    return (
        <div>
        <h1 className="text-4xl text-center mt-10">Customer Reviews</h1>
        <div className='flex md:flex-row flex-col flex-wrap justify-center container mx-auto m-5'>
            {
                review && review.map(review => <Review key = {review._id} review = {review} />)
            }
        </div>
    </div>
    );
};

export default CustomerReview;