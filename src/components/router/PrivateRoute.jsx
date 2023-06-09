import { Navigate, Outlet } from "react-router";
import { useAuthContext } from '../../contexts/authContext';
import Modal from '../Modal';
import Login from '../../pages/Login';

export default function PublicRoute() {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return (
            <Modal >
                <Login />
            </Modal>
        );
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}