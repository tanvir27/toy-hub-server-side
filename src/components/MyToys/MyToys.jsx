import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  useTitle("My Toys");

  // fetching data from db
  const [toysData, setToysData] = useState([]);
  console.log(toysData);

  const url = `https://toy-hub-server-side-tanvir27.vercel.app/myToys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, [user]);

  // console.log("user info:", user.email);
  // delete operation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-hub-server-side-tanvir27.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toysData.filter(
                (toyData) => toyData._id !== id
              );
              setToysData(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="py-5">
          <h1 className="text-center text-color fw-bold mb-5">
            Your <span className="text-danger">TOY</span> Collection
          </h1>
          <hr className="w-50 fw-bold mx-auto"></hr>
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
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {toysData.map((toy, index) => (
                  <MyToysRow
                    key={toy._id}
                    toy={toy}
                    index={index}
                    handleDelete={handleDelete}
                  ></MyToysRow>
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
