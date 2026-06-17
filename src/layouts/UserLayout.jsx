import { Outlet } from "react-router";

function UserLayout() {
  return (
    <>
      <div className="py-4 border">Header</div>
      <Outlet />
    </>
  );
}

export default UserLayout;
