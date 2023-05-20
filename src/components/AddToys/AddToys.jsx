import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Toys");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (toy) => {
    fetch("http://localhost:5000/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container my-5 px-5" data-aos="fade-up">
      <h1 className="text-color fw-bold text-center my-5">
        Add Your Toy's Here
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* photo and email  */}
        <div className="row ">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="pictureUrl">Picture URL of the toy</label>
            <input
              type="text"
              className="form-control"
              id="pictureUrl"
              {...register("pictureUrl", { required: true })}
            />
            {errors.pictureUrl && <span>This field is required</span>}
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="toyName">Toy Name</label>
            <input
              type="text"
              className="form-control"
              id="toyName"
              {...register("toyName", { required: true })}
            />
            {errors.toyName && <span>This field is required</span>}
          </div>
        </div>
        {/* name  */}
        <div className="row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="sellerEmail">Seller Email</label>
            <input
              defaultValue={user.email}
              type="email"
              className="form-control"
              id="sellerEmail"
              {...register("sellerEmail", { required: true })}
            />
            {errors.sellerEmail && <span>This field is required</span>}
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="sellerName">Seller Name</label>
            <input
              type="text"
              defaultValue={user.displayName}
              className="form-control"
              id="sellerName"
              {...register("sellerName", { required: true })}
            />
            {errors.sellerName && <span>This field is required</span>}
          </div>
        </div>

        {/* sub category  */}
        <div className="row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="subCategory">Sub-category</label>
            <select
              className="form-control"
              id="subCategory"
              {...register("subCategory", { required: true })}
            >
              <option value="">Select a sub-category</option>
              <option value="Sports Car">Sports Car</option>
              <option value="Truck Cars">Truck Cars</option>
              <option value="Mini Police Car">Mini Police Car</option>
            </select>
            {errors.subCategory && <span>This field is required</span>}
          </div>

          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              {...register("price", { required: true })}
            />
            {errors.price && <span>This field is required</span>}
          </div>
        </div>

        {/* rating and  quantity */}
        <div className="row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              className="form-control"
              id="rating"
              {...register("rating", { required: true })}
            />
            {errors.rating && <span>This field is required</span>}
          </div>

          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="availableQuantity">Available Quantity</label>
            <input
              type="number"
              className="form-control"
              id="availableQuantity"
              {...register("availableQuantity", { required: true })}
            />
            {errors.availableQuantity && <span>This field is required</span>}
          </div>
        </div>
        <div className="form-group  px-sm-0 py-sm-0 px-lg-5 py-lg-2 mx-auto">
          <label htmlFor="description">Detail Description</label>
          <textarea
            className="form-control w-100 w-md-50"
            id="description"
            rows="4"
            {...register("description", { required: true })}
          />
          {errors.description && <span>This field is required</span>}
        </div>

        <div className=" text-center mt-3">
          <button type="submit" className="btn w-50 btn-info">
            ADD TOY
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
