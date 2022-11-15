import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
//import { login } from '../actions/userActions';


function LoginScreen(props) {
    /*const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userLogin = useSelector(store => store.userLogin);
    const { loading, userInfo, error} = userLogin;
    const dispatch = useDispatch();
    const navigate = useNavigate();*/

   /* useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [userInfo]);*/

   /* const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }*/


    return (
       // loading ? <div>loading...</div> :
       // error ? <div>{error}</div> :
        <div className="form-container">
            <div className="form-content">
        <h1>Sign in</h1>
        <form action="/login/password" method="post">
            <section>
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" type="email" autoComplete="email" required autoFocus />
            </section>
            <section>
                <label htmlFor="current-password">Password</label>
                <input id="current-password" name="password" type="password" autoComplete="current-password" required />
            </section>
            <button type="submit">Sign in</button>
        </form>
        <p className="help">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    </div>
    );
};

export default LoginScreen;