import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {

        const [categories, setCategories] = useState([])

        useEffect(()=>{
            fetch('/categories.json')
            .then(res => res.json())
            .then (data => setCategories(data))
        },[])



    return (
        <div>
            <h2 className='mb-4 mt-2'>National News</h2>
         <div>
         {
                categories?.map(category => <Link to={`${category.id}`} className='block py-1' key={category.id}>
                    {category.name}
                </Link>)
            }
         </div>
        </div>
    );
};

export default LeftNavigation;