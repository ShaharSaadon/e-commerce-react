import { useEffect } from 'react';
import { useForm } from '../customHooks/useForm'
import { productService } from '../services/product.service.local'
import { useNavigate, useParams } from 'react-router';


export function ProductEdit() {
    const [product, handleChange, setProduct] = useForm(productService.getEmptyProduct())

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'KingSize | Edit Product';
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

                <label htmlFor="name">name</label>
                <input value={name} onChange={handleChange} type="text" name="name" id="name" />

                <label htmlFor="description">Description</label>
                <input value={description} onChange={handleChange} type="text" name="description" id="description" />

                <label htmlFor="category">Category</label>
                <input value={category} onChange={handleChange} type="text" name="category" id="category" />

                <label htmlFor="price">Price</label>
                <input value={price} onChange={handleChange} type="number" name="price" id="price" />


                <button>Save</button>
            </form>
        </section>)
}
