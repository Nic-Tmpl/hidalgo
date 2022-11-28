import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function AdminProductScreen(props) {

  const [modal, setModal] = useState(false);
  
  const productList = useSelector(store => store.productList);
  const { products, loading, error} = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [])

    return (
      loading ? <div>loading...</div> :
      error ? <div>{error}</div> :
      <div className="content-box">
            <div className="product-header">
                <h3>Products</h3>
                <button>Create Product</button>
            </div>
        <div className="product-list">
        
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {products.map(product => (<tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>

      </div>
      )
}

export default AdminProductScreen;