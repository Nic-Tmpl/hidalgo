import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import axios from 'axios';

function AdminProductScreen() {

  const [modal, setModal] = useState(false);

  //product creation state controls
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);


  const productList = useSelector(store => store.productList);
  const { products, loading, error} = productList;
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(listProducts());
    /* originally this was in product actions, but for some reason would return a Promise{<fulfilled> :data } format. This is messier 
    but works as intended, for reasons unknown. */
    const getCategories = async () => {
        const { data }  =  await axios.get("/products/categories");
        setCategories(data);
    };
    getCategories();
  }, [])

  const openModal = (product) => {
    setModal(true);
    setId(product.id);
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
                <button onClick={() => openModal({})}>Create Product</button>
            </div>
            { modal &&
            <div className="product-form">
                <h1>{id ? "Edit" : "Create"} Product</h1>
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
                        <select name="categories" id="categories">
                            {categories.map(cat =>
                                <option value={cat.id}>{cat.name}</option>
                            )}
                        </select>
                    </section>
                    <section>
                        <label htmlFor="description">Description: </label>
                        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </section>
                    <button type="submit">{ id ? 'Update' : 'Create'}</button>
                    <button type="button" onClick={() => setModal(false)}>Cancel</button>
                </form>
            </div>
            }
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
                        <td key={product.id}>{product.id}</td>
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
      </div>
      )
}

export default AdminProductScreen;