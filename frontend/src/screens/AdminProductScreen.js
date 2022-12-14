import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, listProducts, saveProduct } from '../actions/productActions';
import axios from 'axios';
import { API_URL } from '../constants/urlConstants';

function AdminProductScreen() {

  const [modal, setModal] = useState(false);

  //product creation state controls
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);


  const productList = useSelector(store => store.productList);
  const { products, loading, error} = productList;

  const productSave = useSelector(store => store.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector(store => store.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect( () => {
    if (successSave) {
        setModal(false);
    }
    dispatch(listProducts());
    /* originally this was in product actions, but for some reason would return a Promise{<fulfilled> :data } format.
     This is messier but works as intended, for reasons unknown. */
    const getCategories = async () => {
        const { data }  =  await axios.get(`${API_URL}/products/categories`);
        setCategories(data);
    };
    getCategories();
  }, [successSave, successDelete])

  const openModal = (product) => {
    setModal(true);
    setId(product.id);
    setName(product.name);
    setImage(product.image);
    setPrice(product.price);
    setCategory(product.category_id);
    setDescription(product.description);
    
  }

  const saveProductHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
        id: id,
        name,
        image,
        description,
        category,
        price,
    })
    );
  };

const deleteHandler = (product) => {
    dispatch(deleteProduct(product.id));
};

    return (
      loading ? <div>loading...</div> :
      error ? <div>{error}</div> :
      <div className="content-box">
            <div className="product-header">
                <h3>Products</h3>
                <button onClick={() => openModal({})}>Create Product</button>
            </div>
            { modal ?
            <div className="product-form">
                <h1>{id ? "Edit" : "Create"} Product</h1>
                <form onSubmit={saveProductHandler}>
                    <section>
                        {loadingSave && <div>Loading...</div>}
                        {errorSave && <div>{errorSave}</div>}
                    </section>
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
                        <select name="categories" id="categories" onChange={(e) => setCategory(e.target.value)}>
                            {categories.map(cat =>
                                <option value={cat.id} >{cat.name}</option>
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
            :
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
                            <button className="button" onClick={() => openModal(product)}>Edit</button> 
                            <button className="button" onClick={() => deleteHandler(product)}>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
        }
      </div>
      )
}

export default AdminProductScreen;