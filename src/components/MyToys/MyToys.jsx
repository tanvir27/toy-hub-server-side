import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";

import SingleToy from "../SingleToy/SingleToy";
import UpdateToyDetails from "../UpdateToyDetails/UpdateToyDetails";

const MyToys = () => {
  const [modalShowDetails, setModalShowDetails] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);

  useTitle("My Toys");
  const toysData = [
    {
      seller: "John Doe",
      name: "Toy Car",
      subCategory: "Vehicles",
      price: "$19.99",
      quantity: 10,
      rating: 5,
      email: "john.doe@gmail.com",
    },
    {
      seller: "Jane Smith",
      name: "Building Blocks",
      subCategory: "Educational",
      price: "$24.99",
      quantity: 5,
      rating: 5,
      email: "john.doe@gmail.com",
    },
    // Add more toy data here
  ];
  return (
    <div>
      <div className="container">
        <div className="py-5">
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Toy Name</th>
                  <th>Picture</th>
                  <th>Seller</th>
                  <th>Email</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Rating </th>
                  <th> Quantity</th>
                  <th>Action 1</th>
                  <th>Action 2</th>
                  <th> Details</th>
                </tr>
              </thead>
              <tbody>
                {toysData.map((toy, index) => (
                  <tr key={toy.id}>
                    <td>{index + 1}</td>
                    <td>{toy.name}</td>
                    <td>Picture</td>
                    <td>{toy.seller}</td>
                    <td>{toy.email}</td>

                    <td>{toy.subCategory}</td>
                    <td>{toy.price}</td>
                    <td>{toy.rating}</td>
                    <td>{toy.quantity}</td>
                    <td>
                      <button
                        className="btn btn-info text-white"
                        onClick={() => setModalShowEdit(true)}
                      >
                        Edit
                      </button>
                      <UpdateToyDetails
                        show={modalShowEdit}
                        onHide={() => setModalShowEdit(false)}
                      />
                    </td>
                    <td>
                      <button className="btn btn-info text-white ">
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-info text-white"
                        onClick={() => setModalShowDetails(true)}
                      >
                        View Details
                      </button>
                      <SingleToy
                        show={modalShowDetails}
                        onHide={() => setModalShowDetails(false)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
