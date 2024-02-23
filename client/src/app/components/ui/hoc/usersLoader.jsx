import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
    getDataStatus,
    getUsersLoadingStatus,
    loadUsersList
} from "../../../store/users";
import { useEffect } from "react";

const UsersLoader = ({ children }) => {
    const dataStatus = useSelector(getDataStatus());
    const dispatch = useDispatch();
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    useEffect(() => {
        if (!dataStatus) {
            dispatch(loadUsersList());
        }
    }, []);
    if (usersStatusLoading) return "loading";

    return children;
};

UsersLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default UsersLoader;
