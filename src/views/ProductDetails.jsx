import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { productService } from "../services/product.service";
import { DynamicColors } from "../components/DynamicColors";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cart.actions";
import { ProductAccordion } from "../components/Accordion";
import { QuantityPicker } from "../components/QuantityPicker";
import { linkService } from "../services/link.service";

import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export function ProductDetails({ setIsCartVisible }) {
    const dispatch = useDispatch();
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("");
    const { ColorButton } = linkService;
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        loadProduct();
    }, [params.id]);

    async function loadProduct() {
        try {
            const product = await productService.getById(params.id);
            setProduct(product);

            if (product.colors && product.colors.length > 0) {
                setSelectedColor(product.colors[0]);
            }
            if (product.sizes && product.sizes.length > 0) {
                setSelectedSize(product.sizes[0]);
            }
        } catch (error) {
            console.log("error:", error);
        }
    }

    function handleAddToCart(ev) {
        ev.preventDefault();
        setIsCartVisible((prevState) => !prevState);
        if (!(selectedColor && selectedSize)) return;
        dispatch(
            addToCart({
                name,
                price,
                imgURL,
                size: selectedSize,
                color: selectedColor,
                quantity: quantity,
            })
        );
    }

    function handleColor(color) {
        setSelectedColor(color.label);
    }

    function handleSizeChange(event) {
        const selectedValue = event.target.value;
        setSelectedSize(selectedValue);
    }

    if (!product) return <div>Loading...</div>;
    const { name, shortDescription, price, imgURL, colors, sizes } = product;

    return (
        <section className="product-details">
            <div className="content">
                <div className="img-container">
                    <img src={imgURL} className="square-ratio" />
                </div>
                <section className="product-info">
                    <h1 className="product-name">{name}</h1>
                    <p>
                        <span className="price">{price}</span>&משלוח חינם - עד
                        סוף חודש יוני
                    </p>
                    <p className="shortDescription">{shortDescription}</p>
                    <span>מידה</span>

                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-required-label">
                            גודל
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={selectedSize}
                            label="Age *"
                            onChange={handleSizeChange}
                        >
                            {sizes.map((size, index) => (
                                <MenuItem value={size.value}>
                                    {size.label}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <div className="details flex">
                        <div className="colors flex flex-column">
                            <span>צבעים</span>
                            <DynamicColors
                                allColors={colors || []}
                                handleClick={handleColor}
                                selectedColor={selectedColor}
                            />
                        </div>
                        <div className="quantity-container flex flex-column">
                            <span>כמות</span>
                            <QuantityPicker
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </div>
                    </div>

                    <ColorButton
                        variant="contained"
                        width="100%"
                        onClick={handleAddToCart}
                    >
                        הוספה לסל הקניות
                    </ColorButton>

                    <ProductAccordion product={product} />

                    {/* <RecommendationsContainer /> */}
                    {/* <button className='designed-btn' onClick={handleAddToCart}>Buy it Now</button> */}
                    {/* <button onClick={onBack} className="designed-btn">Back</button> */}
                    {/* <button className='designed-btn' >הוספה לסל הקניות</button> */}
                </section>
            </div>
        </section>
    );
}
