import { Link } from 'react-router-dom';

export const Notfound = () => {
    return (
        <div style={{margin:'20% auto', textAlign:'center'}}> 
            <h1>Page Not Found</h1>
            <Link to="/">Go To Home</Link>
        </div>
    );
};
