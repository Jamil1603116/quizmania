import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Super Admin Panel</h1>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="py-2 px-4">
            <Link to="/superadmin/dashboard">Dashboard</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/superadmin/users">User Management</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/superadmin/courses">Course Management</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/superadmin/subscriptions">Subscription Management</Link>
          </li>
          <li className="py-2 px-4">
            <Link to="/superadmin/settings">Site Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
