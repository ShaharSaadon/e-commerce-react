import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { productService } from '../services/product.service'
import { uploadService } from "../services/upload.service";
import { DynamicColors } from '../components/DynamicColors';
import { removeProduct } from '../store/actions/product.actions'
import { useForm } from '../customHooks/useForm'
import dragImg from '../assets/images/drag.png';
import Select from 'react-select'
import ColorPicker from '../components/ColorPicker'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import UploadIcon from '@mui/icons-material/Upload';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

export function ProductEdit() {
    const [product, handleChange, setProduct] = useForm(productService.getEmptyProduct())
    const fileInputRef = useRef(null);
    const [isUploading, setIsUploading] = useState(false);
    const allColors = useSelector((storeState) => storeState.productModule.colors)
    const allSizes = useSelector((storeState) => storeState.productModule.sizes)
    const sizeOptions = allSizes.map(size => ({ label: size, value: size }));
    const { imgURL, sizes } = product
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([sizes]);
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const fields = [
        { label: 'Name', name: 'name', type: 'text' },
        { label: 'Description', name: 'description', type: 'text' },
        { label: 'Price', name: 'price', type: 'number' },
        { label: 'shortDescription', name: 'shortDescription', type: 'text' },
    ];

    const onRemoveProduct = useCallback(async (productId) => {
        try {
            console.log('removing product', productId)
            dispatch(removeProduct(productId));
        } catch (error) {
            console.log('error:', error);
        }
    }, []);

    useEffect(() => {
        document.title = 'KingSize | ערוך מוצר';
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
        try {
            await productService.save({ ...product, colors: selectedColors })
            navigate(-1)
        } catch (error) {
            console.log('error:', error)
        }
    }

    async function handleFile({ target }) {
        setIsUploading(true);
        const imgURL = await uploadService.uploadImg(target.files[0]);
        console.log('imgURL:', imgURL)
        setProduct(prevProduct => ({ ...prevProduct, imgURL }));
        setIsUploading(false);
    }

    async function handleColor(ev) {
        const color = ev.target.style.backgroundColor;
        if (selectedColors.includes(color)) {
            // The color is already selected, so we remove it
            setSelectedColors(prevColors => prevColors.filter(c => c !== color));
        } else {
            // The color is not selected, so we add it
            setSelectedColors(prevColors => [...prevColors, color]);
        }
    }
    function handleSizeChange(selectedOption) {
        setSelectedSizes(selectedOption.map(option => option.value));
    }

    const selectedSizeOptions = selectedSizes.map(size => ({ label: size, value: size }));

    return (
        <section className='product-edit'>
            <h1>{product._id ? 'ערוך' : 'הוסף'} Product</h1>
            <form onSubmit={onSaveProduct} >

                {fields.map(({ label, name, type }) => (
                    <div key={name}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            value={product[name]}
                            onChange={handleChange}
                            type={type}
                            name={name}
                            id={name}
                        />
                    </div>
                ))}

                <label htmlFor="price">צבעים</label>
                <DynamicColors colors={allColors} selectedColors={selectedColors} handleClick={handleColor} />

                <ColorPicker />
                <label htmlFor="sizes">Sizes</label>
                <Select
                    id="sizes"
                    options={sizeOptions}
                    isMulti
                    value={selectedSizeOptions}
                    onChange={handleSizeChange}
                />

                {isUploading ? <CircularProgress /> : <div className="img-uploader">
                    <img src={imgURL || dragImg} alt="" />
                    <input
                        className="input-img"
                        onChange={handleFile}
                        ref={fileInputRef}
                        accept="image/*"
                        type="file"
                        style={{ display: 'none' }}

                    />
                </div>}

                <Stack direction="column" spacing={2}>
                    <LoadingButton loading={isUploading} onClick={() => fileInputRef.current.click()} startIcon={<UploadIcon />} variant="outlined">
                        העלה תמונה
                    </LoadingButton>
                    <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} onClick={() => onRemoveProduct(product._id)}
                        className="btn-delete">
                        מחק מוצר
                    </Button>
                    <Button variant="contained" startIcon={<SaveAltIcon />} onClick={onSaveProduct}>
                        שמור שינויים
                    </Button>
                </Stack>



            </form>
        </section>)
}
