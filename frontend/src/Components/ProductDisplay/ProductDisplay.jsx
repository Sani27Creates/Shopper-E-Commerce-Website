/*import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
      </div>
      <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>

          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">₹{product.old_price}</div>
            <div className="productdisplay-right-price-new">₹{product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category :</span>Shirt, T-Shrit, Crop Top</p>
          <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay*/


import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [userRating, setUserRating] = useState(product.rating || 0); // User-selected rating

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleStarClick = (index) => {
        setUserRating(index + 1); // Set user-selected rating
    };

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <img 
                    key={i} 
                    src={i < rating ? star_icon : star_dull_icon} 
                    alt="star" 
                    onClick={() => handleStarClick(i)} 
                    style={{ cursor: 'pointer' }}
                    aria-label={`Rate ${i + 1} star`} 
                />
            );
        }
        return stars;
    };

    // Provide default values for properties
    const images = product.images || [product.image];
    const sizes = product.sizes || ['S', 'M', 'L', 'XL', 'XXL'];
    const reviewCount = product.reviewCount || 122; // Assuming a default review count
    const oldPrice = product.old_price || null;
    const newPrice = product.new_price || 0;
    const description = product.description || 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.';
    const category = product.category || 'Category Not Specified'; // Provide a default value

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to cart.');
            return;
        }
        addToCart(product.id, selectedSize);
        alert(`Added to cart: ${product.name}, Size: ${selectedSize}`);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Product view ${index + 1}`} />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    {renderStars(userRating)}
                    <p>({reviewCount})</p>
                </div>
                <div className="productdisplay-right-prices">
                    {oldPrice && <div className="productdisplay-right-price-old">₹{oldPrice}</div>}
                    <div className="productdisplay-right-price-new">₹{newPrice}</div>
                </div>
                <div className="productdisplay-right-description">
                    {description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {sizes.map(size => (
                            <div
                                key={size}
                                className={selectedSize === size ? 'selected' : ''}
                                onClick={() => handleSizeSelect(size)}
                                aria-label={`Select size ${size}`}
                                style={{ cursor: 'pointer', border: selectedSize === size ? '2px solid black' : '1px solid grey' }}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> {category}</p>
                {/* Additional logic for tags and other details */}
            </div>
        </div>
    );
};

export default ProductDisplay;
