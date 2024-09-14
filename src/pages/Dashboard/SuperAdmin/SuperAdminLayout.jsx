import Sidebar from "./Sidebar"; // Sidebar Component for navigation

const SuperAdmin = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="flex-1 p-4 bg-gray-100"></main>
    </div>
  );
};

export default SuperAdmin;
