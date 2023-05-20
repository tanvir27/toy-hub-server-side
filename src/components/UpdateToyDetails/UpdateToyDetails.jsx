import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const UpdateToyDetails = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="my-4">
          <h2 className="text-color text-center fw-bold">Update Toy Details</h2>

          <div className="form-group mb-3 w-50 mx-auto">
            <label htmlFor="name">Toy Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              defaultValue="Sports Car"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-group w-50 mx-auto">
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
        <div className="form-group w-50 mx-auto">
          <label htmlFor="quantity">Available Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            {...register("quantity", { required: true })}
          />
          {errors.quantity && <span>This field is required</span>}
        </div>

        <div className="form-group mt-3 w-50 mx-auto">
          <label htmlFor="description">Detail Description</label>
          <textarea
            className="form-control "
            id="description"
            rows="4"
            {...register("description", { required: true })}
          />
          {errors.description && <span>This field is required</span>}
        </div>

        <div className="text-center my-3">
          <Button className="w-25 btn-info fw-bold" onClick={props.onHide}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateToyDetails;
