import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateToyDetails = () => {
  const id = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/editToys/${id.id}`)
      .then((data) => data.json())
      .then((data) => console.log(data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.toyName.value;
        const price = form.price.value;
        const quantity = form.availableQuantity.value;
        const description = form.description.value;
        const updatedDoc = {
            name,price,quantity,description
        }


    // console.log(data); TODO:     -------
    fetch(`https://toy-hub-server-side-tanvir27.vercel.app/editToys/${id.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("updated successfully!");
          navigate("/myToys");
        }
      });
  };

  return (
    <div className="container p-5">
      <form onSubmit={handleUpdate}>
        <div className="my-4">
          <h2 className="text-color text-center fw-bold">Update Toy Details</h2>

          <div className="form-group mb-3 w-50 w-sm-100 mx-auto">
            <label htmlFor="name">Toy Name</label>
            <input type="text" className="form-control" name="toyName" />
          </div>
          <div className="form-group w-50 mx-auto">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control" name="price" />
          </div>
        </div>
        <div className="form-group w-50 mx-auto">
          <label htmlFor="quantity">Available Quantity</label>
          <input
            type="number"
            className="form-control"
            name="availableQuantity"
          />
        </div>

        <div className="form-group mt-3 w-50 mx-auto">
          <label htmlFor="description">Detail Description</label>
          <textarea className="form-control " name="description" />
        </div>

        <div className="text-center mt-3 ">
          <input type="submit" value="UPDATE"></input>
        </div>
      </form>
    </div>
  );
};

export default UpdateToyDetails;
