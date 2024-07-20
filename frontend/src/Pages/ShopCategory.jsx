/*import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 37 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if(props.category===item.category){
             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory*/




/*import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedProducts = [...all_product]
    .filter(item => item.category === category)
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') {
        return a.new_price - b.new_price;
      } else if (sortOrder === 'highToLow') {
        return b.new_price - a.new_price;
      }
      return 0; // no sorting
    });

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 37 products
        </p>
        <div className="shopcategory-sort">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOrder} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.slice(0, 12).map((item) => (
          <Item
            key={item.id} // Use item.id as key if it's unique
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;*/



import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('');
  const [itemsToShow, setItemsToShow] = useState(12); // Initially showing 12 items

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleExploreMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 12); // Load 12 more items when clicked
  };

  const sortedProducts = [...all_product]
    .filter(item => item.category === category)
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') {
        return a.new_price - b.new_price;
      } else if (sortOrder === 'highToLow') {
        return b.new_price - a.new_price;
      }
      return 0; // no sorting
    });

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{Math.min(itemsToShow, sortedProducts.length)}</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOrder} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.slice(0, itemsToShow).map((item) => (
          <Item
            key={item.id} // Use item.id as key if it's unique
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore" onClick={handleExploreMore}>
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
