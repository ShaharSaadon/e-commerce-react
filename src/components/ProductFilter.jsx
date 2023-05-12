import React, { useState } from 'react'
import { useFormRegister } from '../customHooks/useFormRegister';
import search from '../assets/images/svgs/search.svg'
import { useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import { DynamicColors } from './DynamicColors';


export function ProductFilter(props) {
    const [register] = useFormRegister({ ...props.filterBy }, props.onChangeFilter)
    const categories = useSelector((storeState) => storeState.productModule.categories)

    const [value, setValue] = useState([20, 37]);

    function handleChange(event) {
        console.log('event:', event.target.value)
        setValue(event.target.value);
    };

    function valuetext(value) {
        return `${value}°C`;
    }

    return (
        <form className='product-filter' >
            <section className='search-box'>
                {/* <label htmlFor="name">Name</label> */}
                <input {...register('name',)} placeholder='Search Products...' className='search' />
                <button type="search" value="search">
                    <img src={search} alt="" />
                </button>
            </section>
            <section className='categories'>
                <h2>CATEGORIES</h2>
                {categories.map((value, index) => (
                    <p key={index}>{value}</p>
                ))}
            </section>
            <section className='price'>
                <h2>PRICE</h2>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
                <div className="range">
                    <div className="input-container">
                        <span >Price:{value[0]}₪-{value[1]}₪</span>

                    </div>
                </div>
            </section>
            <h2>COLOR</h2>
            <DynamicColors />

        </form >)
}
