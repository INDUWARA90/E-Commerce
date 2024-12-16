import React from 'react'
import { useState } from 'react';
import './book.css'

import BCard from '../../componets/B-Card/BCard'
import { productArray } from "../../Data/Products";

function Book() {


    const [value, setValue] = useState('');


    function handelClick() {

        console.log(value);
        productArray.forEach((object) => {
            if ((object.productName == value)) {
                    console.log(true);
            }
        });


    }


  return (
    <div className='container'>

            <div className='conatiner-search'>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    placeholder='Search here...'

                />
                <button onClick={handelClick}>Search</button>
            </div>

            <div className=' conatiner-books'>
                {productArray.map(function (object, i) {
                    return <BCard name={object.productName} price={object.price} image={object.image} key={i} />;
                })}
            </div>

        </div>
  )
}

export default Book