import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from '../customHooks/useForm'
import { productService } from '../services/product.service'
import { useNavigate, useParams } from 'react-router';
import { uploadService } from "../services/upload.service";
import dragImg from '../assets/images/drag.png';
import { DynamicColors } from '../components/DynamicColors';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/actions/product.actions'


export function ProductEdit() {
    const [product, handleChange, setProduct] = useForm(productService.getEmptyProduct())
    const fileInputRef = useRef(null);
    const allColors = useSelector((storeState) => storeState.productModule.colors)
    const allSizes = useSelector((storeState) => storeState.productModule.sizes)
    const { name, description, category, price, imgURL, sizes } = product
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([sizes]);
    const dispatch = useDispatch()

    const onRemoveProduct = useCallback(async (productId) => {
        try {
            console.log('removing product', productId)
            dispatch(removeProduct(productId));
        } catch (error) {
            console.log('error:', error);
        }
    }, []);

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'KingSize | Edit Product';
        loadProduct()
    }, [])

    useEffect(() => {
        setSelectedColors(product.colors)
    }, [product])


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
            navigate(-1)
        } catch (error) {
            console.log('error:', error)
        }
    }

    async function handleFile({ target }) {
        const imgURL = await uploadService.uploadImg(target.files[0]);
        setProduct({ ...product, imgURL });
    }

    async function handleColor(ev) {
        const color = ev.target.style.backgroundColor;
        if (product.colors.includes(color)) {
            // The color is already selected, so we remove it
            setProduct({ ...product, colors: product.colors.filter(c => c !== color) });
        } else {
            // The color is not selected, so we add it
            setProduct({ ...product, colors: [...product.colors, color] });
        }
    }

    function handleSizeChange(ev) {
        const size = ev.target.value;
        if (selectedSizes.includes(size)) {
            // The size is already selected, so we remove it
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            // The size is not selected, so we add it
            setSelectedSizes([...selectedSizes, size]);
        }
    }


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

                <label htmlFor="price">Colors</label>
                <DynamicColors colors={allColors} selectedColors={selectedColors} handleClick={handleColor} />

                <label htmlFor="sizes">Sizes</label>
                <select id="sizes" multiple value={selectedSizes} onChange={handleSizeChange}>
                    {allSizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>

                <label htmlFor="imgURL">Image Url:</label>
                <div className="img-uploader">
                    <img src={imgURL || dragImg} alt="" />
                    <input
                        className="input-img"
                        onChange={handleFile}
                        ref={fileInputRef}
                        accept="image/*"
                        type="file"
                    />
                </div>

                <button
                    onClick={() => onRemoveProduct(product._id)}
                    className="btn-delete"
                >
                    Delete
                </button>

                <button type="button" onClick={() => fileInputRef.current.click()}>
                    Upload an image
                </button>
                <button>Save</button>
            </form>
        </section>)
}
