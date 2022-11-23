import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "../../../redux/reducers/users/usersSlice";
const SingleUserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));

  return (
  <div>SingleUserPage</div>
  );
};
export default SingleUserPage;
