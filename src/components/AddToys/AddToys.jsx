import React from 'react';
import { useForm } from "react-hook-form";

const AddToys = () => {

      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <div className="container my-5 px-5">
            <h1 className='text-color fw-bold text-center my-5'>Add Your Toy's Here</h1>
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
          </div>
          {/* name  */}
          <div className="row">
            <div className="form-group col-md-6 col-sm-12">
              <label htmlFor="sellerEmail">Seller Email</label>
              <input
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
                <option value="Truck Toy Cars">Truck Cars</option>
                <option value="Police Toy Car">Mini Police Car</option>
                <option value="Sports Toy Car">Sports Car</option>
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
                type="number"
                className="form-control"
                id="rating"
                {...register("rating", { required: true })}
              />
              {errors.rating && <span>This field is required</span>}
            </div>

            <div className="form-group col-md-6 col-sm-12">
              <label htmlFor="quantity">Available Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                {...register("quantity", { required: true })}
              />
              {errors.quantity && <span>This field is required</span>}
            </div>
          </div>
          <div className="form-group  mx-auto">
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