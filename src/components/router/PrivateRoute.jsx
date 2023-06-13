import { Outlet } from "react-router";
import { useAuthContext } from "../../contexts/authContext";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center">
        <h1>Please Log-in to view this content</h1>
      </div>
    );
  }

  return <Outlet />;
}
