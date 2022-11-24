import ClienteAxios from "../../config/clienteAxios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllContact,
  getLoading,
  allContactLoading,
  allContactRecieved,
} from "../../redux/reducers/contact/contactSlice";
import { Spinner } from "react-bootstrap";
const ListContact = () => {
  const allContacts = useSelector(getAllContact);
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();
  let contentToRender = "";

  useEffect(() => {
    const contactApi = async () => {
      dispatch(allContactLoading());
      const apiResponse = await ClienteAxios.get("prospectos");
      dispatch(allContactRecieved(apiResponse.data));
    };
    contactApi();
  }, [dispatch]);

  contentToRender = apiStatus === "pending" ? 
 ( 
    <>
    <Spinner></Spinner>
    </>
  ) : (
    <>
       
    </>
  );

  return <div>ListContact</div>;
};
export default ListContact;
