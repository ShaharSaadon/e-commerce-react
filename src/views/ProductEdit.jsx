import { useEffect } from 'react';
import { useForm } from '../customHooks/useForm'
import { productService } from '../services/product.service.local'
import { useNavigate, useParams } from 'react-router';


export function ProductEdit() {
    const [product, handleChange, setProduct] = useForm(productService.getEmptyProduct())

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadProduct()
    }, [])

    async function loadProduct() {
        const productId = params.id
        if (productId) {
            try {
                const product = await productService.getById(productId)
                setProduct(product)
            } catch (error) {
                console.log('error:', error)
            }
        }
    }

    async function onSaveProduct(ev) {
        ev.preventDefault()
        try {
            await productService.save({ ...product })
            navigate('/shop')
        } catch (error) {
            console.log('error:', error)
        }
    }

    const { name, description, category, price } = product

    return (
        <section className='product-edit'>
            <h1>{product._id ? 'Edit' : 'Add'} Product</h1>
            <form onSubmit={onSaveProduct} >

                <label htmlFor="Name">name</label>
                <input value={name} onChange={handleChange} type="text" name="Name" id="Name" />

                <label htmlFor="Description">Email</label>
                <input value={description} onChange={handleChange} type="text" name="Description" id="Description" />

                <label htmlFor="Category">Phone</label>
                <input value={category} onChange={handleChange} type="text" name="Category" id="Category" />

                <label htmlFor="Price">Phone</label>
                <input value={price} onChange={handleChange} type="number" name="Price" id="Price" />


                <button>Save</button>
            </form>
        </section>)
}
