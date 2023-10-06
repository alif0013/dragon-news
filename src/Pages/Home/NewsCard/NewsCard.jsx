import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { title, _id, thumbnail_url, image_url, details } = news;



    return (
        <div>

            <div className="card">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)} <Link 
                            
                            to= {`/news/${_id}`}
                            className='text-blue-600'>read more...</Link></p>
                            : <p>{details}</p>

                        }
                 
                </div>
            </div>

        </div>
    );
};

export default NewsCard;