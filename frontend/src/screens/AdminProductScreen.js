import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, listProducts } from '../actions/productActions';

function AdminProductScreen() {

  const [modal, setModal] = useState(false);

  //product creation state controls
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState('');


  const productList = useSelector(store => store.productList);
  var categories;
  const { products, loading, error} = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [])

  const openModal = async (product) => {
    setModal(true);
    categories = await getCategories();
    //setId(product.id); -- not certain id will be necessary to display, as it should be immutable
    setName(product.name);
    setImage(product.image);
    setPrice(product.price);
    setCategory(product.category);
    setDescription(product.description);
    
  }

  const submitHandler = () => {
    console.log("Submitted!");
  }


    return (
      loading ? <div>loading...</div> :
      error ? <div>{error}</div> :
      <div className="content-box">
            <div className="product-header">
                <h3>Products</h3>
                <button onCLick={() => openModal({})}>Create Product</button>
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
                            <button onClick={() => openModal(product)}>Edit</button> 
                            <button>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
        { modal &&
        <form onSubmit={submitHandler}>
                <section>
                    <label htmlFor="name">Name: </label>
                    <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="image">Image Path: </label>
                    <input id="image" name="image" type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                </section>
                <section>
                    <label htmlFor="price">Price: </label>
                    <input id="price" name="price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="category">Category: </label>
                    {console.log(categories)}
                </section>
                <section>
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </section>
                <button type="submit">Sign up</button>
            </form>
        }
      </div>
      )
}

export default AdminProductScreen;