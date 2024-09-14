// src/routes/AppRoutes.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuperAdminLayout from '../components/SuperAdminLayout';
import SuperAdminDashboard from '../pages/Dashboard/SuperAdmin/SuperAdminDashboard';
import UserManagement from '../pages/Dashboard/SuperAdmin/Usermanagement';
import CourseManagement from '../pages/Dashboard/SuperAdmin/CourseManagement';
import SubscriptionManagement from '../pages/Dashboard/SuperAdmin/SubscriptionManagement';
import SiteSettings from '../pages/Dashboard/SuperAdmin/Sitesettings';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Super Admin Routes */}
        <Route path="/superadmin" element={<SuperAdminLayout />}>
          <Route path="dashboard" element={<SuperAdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="courses" element={<CourseManagement />} />
          <Route path="subscriptions" element={<SubscriptionManagement />} />
          <Route path="settings" element={<SiteSettings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
