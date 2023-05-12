import React from 'react'
import { useFormRegister } from '../customHooks/useFormRegister';


export function ProductFilter(props) {
    const [register] = useFormRegister({ ...props.filterBy }, props.onChangeFilter)

    return (
        <form className='product-filter' >
            <section>
                <label htmlFor="name">Name</label>
                <input {...register('name',)} />
            </section>
            <section>
                <label htmlFor="category">Category</label>
                <input {...register('category')} />
            </section>
            <section>
                <label htmlFor="maxPrice">Maximum Price</label>
                <input {...register('maxPrice', 'number')} />
            </section>
        </form>)
}
