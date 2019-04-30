import Reset from '../components/test/Reset';
import Nav from "../components/Navbar";

const ResetPassword = props => (
    <div>
        <Nav />
        <Reset resetToken={props.query.resetToken}/>
    </div>
);

export default ResetPassword;