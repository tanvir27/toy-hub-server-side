import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
    useTitle("My Toys");
    
  // fetching data from db
    const [toysData, setToysData] = useState([]);
    // const url = `http://localhost:5000/myToys?email=${user.email}`;

    const url = `http://localhost:5000/myToys?email=${user.email}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setToysData(data));
    }, [user]);
    
    


  console.log("user info:", user.email);
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
              
                  <th>Seller</th>
                  <th>Email</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Rating </th>
                  <th> Quantity</th>
                  <th>Action 1</th>
                  <th>Action 2</th>
                </tr>
              </thead>
              <tbody>
                {toysData.map((toy, index) => (
                  <tr key={toy.id}>
                    <td>{index + 1}</td>
                    <td>{toy.toyName}</td>
                    
                    <td>{toy.sellerName}</td>
                    <td>{toy.sellerEmail}</td>

                    <td>{toy.subCategory}</td>
                    <td>{toy.price}</td>
                    <td>{toy.rating}</td>
                    <td>{toy.availableQuantity}</td>
                    <td>
                      <Link to="/editToys">
                        {" "}
                        <button className="btn btn-info text-white">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-info text-white ">
                        Delete
                      </button>
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
