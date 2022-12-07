import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userEdit } from '../actions/userActions';
import { listOrders } from '../actions/orderActions';

/* TODO: create an action for user edits, possibly folding in the same userInfo useSelector calls as signup
and login. JSX will need default values and state will need to be set with userInfo. You should have info displayed, with
a modal to edit info like in Admin. Orders should be displayed in a sidebar - this will require accessing user order history
by id - orders will be stored in state, and clicking on one will call up a special OrderScreen using the /order/:id call
in the api. These both require putting the userid in the request body */


function UserScreen() {

  const [modal, setModal] = useState(false);

  //editing state controls
  const userdetails = useSelector(store => store.userLogin);
  const { loading, userInfo, error} = userdetails;

  const orderList = useSelector(store => store.orderList);
  const { orders } = orderList;
  const [id, setId] = useState(userInfo.id);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState(userInfo.first_name);
  const [lastName, setLastName] = useState(userInfo.last_name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect( () => {
    dispatch(listOrders(id));
  }, [])



  const openModal = () => {
    setModal(!modal);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userEdit(email, password, firstName, lastName));
}




  return (
      loading ? <div>loading...</div> :
      error ? <div>{error}</div> :
      <div className="form-container">
        <div className="account-info">
            <h1>Account Information</h1>
            <h3>Email:</h3>
            <p>{userInfo.email}</p>
            <h3>First Name:</h3>
            <p>{userInfo.first_name}</p>
            <h3>Last Name:</h3>
            <p>{userInfo.last_name}</p>          
            <button onClick={() => openModal()}>Edit Details/Change Password</button>
        </div>
      { modal ?
            <form onSubmit={submitHandler}>
                <section>
                    <label htmlFor="email">Email: </label>
                    <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </section>
                <section>
                    <label htmlFor="firstName">First Name: </label>
                    <input id="firstName" name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="lastName">Last Name: </label>
                    <input id="lastName" name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </section>
                <button type="submit">Update Info</button>
            </form>
         :
         <div className="orders">
            <h1>Order History</h1>
            {orders ? 
            orders.map(order => 
                <Link to={`/orders/${order.id}`}>
                <div className="order-info">
                    <p>{order.created}</p>
                    <p>{order.status}</p>
                    <p>{order.total}</p>
                </div></Link>)
            :
            <div>No Order History</div>
            }  
        </div> 
    }
    </div>
    );
};

export default UserScreen;