import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SingleToy from "../SingleToy/SingleToy";
const MyToysRow = ({ toy, index, handleDelete }) => {
  console.log(toy._id);

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <tr key={toy._id}>
      <td>{index + 1}</td>
      <td>{toy.toyName}</td>

      <td>{toy.sellerName}</td>
      <td>{toy.sellerEmail}</td>

      <td>{toy.subCategory}</td>
      <td>{toy.price}</td>
      <td>{toy.rating}</td>
      <td>{toy.availableQuantity}</td>
      <td>
        <Link to={`/editToys/${toy._id}`}>
          {" "}
          <button className="btn btn-info text-white">Edit</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(toy._id)}
          className="btn btn-info text-white"
        >
          Delete
        </button>
      </td>
      <td>
        {/* {console.log("on map :", data)} */}
        <button
          type="button"
          className="btn w-75 btn-info"
          onClick={() => setModalShow(true)}
        >
          View Details
        </button>
        <SingleToy
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={toy}
        />
      </td>
    </tr>
  );
};

export default MyToysRow;
