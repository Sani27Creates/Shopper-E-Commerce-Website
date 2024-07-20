import React, { useState, useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import qrCodeImage from '../Assets/qr_code_image.png'; // Add the path to your QR code image

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, paymentOption } = useContext(ShopContext);
    const [showPaymentOptions, setShowPaymentOptions] = useState(false); // State to show payment options
    const [showQRCode, setShowQRCode] = useState(false); // State to show QR code
    const [promoCode, setPromoCode] = useState(''); // State to track the promo code
    const [discountApplied, setDiscountApplied] = useState(false); // State to track if discount is applied

    const handleProceedToPay = () => {
        setShowPaymentOptions(true);
    };

    const handlePaymentOption = (option) => {
        if (option === 'cashondelivery') {
            alert('Your Order is Confirmed');
            setShowQRCode(false); // Ensure QR code does not show for Cash on Delivery
        } else {
            setShowQRCode(true);
        }
    };

    const handleCloseQRCode = () => {
        setShowQRCode(false);
    };

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const handlePromoCodeSubmit = () => {
        if (!discountApplied && /^[0-9]$/.test(promoCode)) { // Check if promo code is a single digit between 0 and 9
            setDiscountApplied(true);
        }
    };

    const getDiscountedTotal = () => {
        const total = getTotalCartAmount();
        return discountApplied ? total * 0.95 : total;
    };

    const handleConfirmOrder = () => {
        if (paymentOption === 'cashondelivery') {
            alert('Your Order is Confirmed');
        } else {
            // Handle displaying QR code or other payment method confirmation
            console.log('Display QR code or payment confirmation for:', paymentOption);
        }
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>₹{e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee's</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>₹{getDiscountedTotal()}</h3>
                        </div>
                    </div>
                    {/* Proceed to Pay button */}
                    {!showPaymentOptions && (
                        <button onClick={handleProceedToPay} className="proceed-to-pay">PROCEED TO PAY</button>
                    )}

                    {/* Render payment options if showPaymentOptions is true */}
                    {showPaymentOptions && (
                        <div className="payment-options">
                            <button onClick={() => handlePaymentOption('gpay')}>Google Pay</button>
                            <button onClick={() => handlePaymentOption('paytm')}>Paytm</button>
                            <button onClick={() => handlePaymentOption('phonepay')}>PhonePe</button>
                            <button onClick={() => handlePaymentOption('cashondelivery')}>Cash on Delivery</button>
                        </div>
                    )}

                    {/* Confirm order button */}
                    {showPaymentOptions && (
                        <button onClick={handleConfirmOrder}>CONFIRM ORDER</button>
                    )}
                </div>

                <div className="cartitems-promocode">
                    <p>If you have a Promo Code, Enter it here.</p>
                    <div className="cartitems-promobox">
                        <input 
                            type="text" 
                            placeholder='Promo Code' 
                            value={promoCode} 
                            onChange={handlePromoCodeChange} 
                        />
                        <button onClick={handlePromoCodeSubmit}>Submit</button>
                    </div>
                </div>
            </div>

            {/* QR Code Modal */}
            {showQRCode && (
                <div className="qr-code-modal">
                    <div className="qr-code-content">
                        <span className="close" onClick={handleCloseQRCode}>&times;</span>
                        <h2>Scan to Pay</h2>
                        <img src={qrCodeImage} alt="QR Code" />
                        <p>UPI ID: 9307207466@ibl</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItems;
