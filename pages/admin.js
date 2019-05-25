import Common from "../components/page/common/common";
import Head from "../components/head";
import Notification  from "../components/Admin/notification";
import {CURRENT_USER_QUERY} from "../components/test/signuppage";
import Navtest from "../components/test/navtest";

const Admin = () => (
    <div>
      <Head title="Admin" />
      <Navtest/>
      <Notification/>
    
    </div>
  );
  
  export default Admin;