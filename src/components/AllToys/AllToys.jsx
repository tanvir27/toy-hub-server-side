import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import SingleToy from "../SingleToy/SingleToy";

const AllToys = () => {
  let i = 1;
  useTitle("All Toys");

  const [modalShow, setModalShow] = React.useState(false);
  const toysData = useLoaderData();

  return (
    <div className="container">
      <div className="p-5">
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {toysData.map((data) => (
                <tr key={data.id}>
                  <td>{i++}</td>
                  <td>{data.sellerName}</td>
                  <td>{data.toyName}</td>
                  <td>{data.subCategory}</td>
                  <td>{data.price}</td>
                  <td>{data.availableQuantity}</td>
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
                      data={data}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
