import { useFormRegister } from '../customHooks/useFormRegister';
import search from '../assets/images/svgs/search.svg'
import Slider from '@mui/material/Slider';
import { DynamicColors } from './DynamicColors';
import { useEffect, useState } from 'react';


export function ProductFilter(props) {
    const { minMax = [0, Infinity] } = props.filterBy || {};
    const [register] = useFormRegister({ ...props.filterBy, minMax }, props.onChangeFilter);
    const { getColors, categories } = props;
    function handleSliderChange(event, newValue) {
        register('minMax')?.onChange({ // update global state
            target: {
                name: 'minMax',
                value: newValue,
                type: 'range'
            }
        });
    }

    function handleClickColor(ev) {
        const color = ev.target.style.backgroundColor;
        const newColors = [...props.filterBy.colors];

        if (newColors.includes(color)) {
            // If color is already in the array, remove it
            const index = newColors.indexOf(color);
            newColors.splice(index, 1);
        } else {
            // If color is not in the array, add it
            newColors.push(color);
        }

        props.onChangeFilter({ ...props.filterBy, colors: newColors });
        console.log('color:', color);
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
                {categories.map((category, i) => {
                    return (
                        <div key={i}>
                            <h4>{category}</h4>
                        </div>
                    );
                })}
            </section>
            <section className='price'>
                <h2>PRICE</h2>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={minMax}
                    min={minMax[0]}
                    max={minMax[1]}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                />
                <div className="range">
                    <div className="input-container">
                        <span >Price:{minMax[0]}₪-{minMax[1]}₪</span>

                    </div>
                </div>
            </section>
            <h2>COLOR</h2>
            <DynamicColors colors={getColors()} selectedColors={props.filterBy.colors} handleClick={handleClickColor} />


        </form >)
}
