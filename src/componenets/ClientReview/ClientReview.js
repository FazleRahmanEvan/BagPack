import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomLink from '../CustomLink/CustomLink';
import Review from '../Review/Review';

const ClientReview = () => {
    const [review, setReview] = useReviews();
    console.log(review);
    return (
        <div>
             <h1 className='text-4xl text-center mt-10'>Customer Review</h1>

<div className='flex md:flex-row flex-col flex-wrap justify-center container mx-auto m-5'>
    {
        review && review.slice(0, 3).map(review => <Review key = {review._id} review = {review} />)
    }
</div>
<div className='text-center my-5'>
    <CustomLink to='/review'>
        <button className='border p-3'>See all review</button></CustomLink>
        </div>
        </div>
    );
};

export default ClientReview;