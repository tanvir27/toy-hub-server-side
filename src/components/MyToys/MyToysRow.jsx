import React, { useState } from "react";
// import Swal from "sweetalert2";
import SingleToy from "../SingleToy/SingleToy";
import UpdateToyDetails from "../UpdateToyDetails/UpdateToyDetails";

const MyToysRow = ({ toy, index, handleDelete }) => {


  const [modalShow, setModalShow] = React.useState(false);
  const [modalUpdateShow, setModalUpdateShow] = React.useState(false);
  const [control, setControl] = useState(false);

  
  
  // handle toy update
  const handleToyUpdate = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/updateToy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };

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
      {/* <td>
        <Link to={`/editToys/${toy._id}`}>
          {" "}
          <button className="btn btn-info text-white">Edit</button>
        </Link>
      </td> */}
      <td>
        <button
          type="button"
          className="btn w-75 btn-info"
          onClick={() => setModalUpdateShow(true)}
        >
          Edit
        </button>

        <UpdateToyDetails
          show={modalUpdateShow}
          onHide={() => setModalUpdateShow(false)}
          toy={toy}
          handleToyUpdate={handleToyUpdate}
        />
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
