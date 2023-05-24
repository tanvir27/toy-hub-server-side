import { Button, Modal } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
// import { useLoaderData, useParams } from "react-router-dom";

const UpdateToyDetails = (props) => {
  // const data = props.data;

  const { handleToyUpdate } = props;
    console.log(props.toy._id);
  const { user } = useContext(AuthContext);



  // const id = useParams();
  // console.log(id);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/editToys/${id.id}`)
  //     .then((data) => data.json())
  //     .then((data) => console.log(data));
  // }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  //   // console.log(data); TODO:     -------
  // //   fetch(`https://toy-hub-server-side-tanvir27.vercel.app/editToys/${id.id}`, {
  // //     method: "PATCH",
  // //     headers: {
  // //       "content-type": "application/json",
  // //     },
  // //     body: JSON.stringify(updatedDoc),
  // //   })
  // //     .then((res) => res.json())
  // //     .then((data) => {
  // //       console.log(data);
  // //       if (data.modifiedCount > 0) {
  // //         alert("updated successfully!");
  // //         navigate("/myToys");
  // //       }
  // //     });
  // };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-4">
            {" "}
            <h2 className="text-color text-center fw-bold">
              Update Toy Details
            </h2>
          </div>
          {
            <form onSubmit={handleSubmit(handleToyUpdate)}>
              {/* photo and email  */}
              <div className="row ">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="imageURL">Picture URL of the toy</label>
                  <input
                    type="text"
                    className="form-control"
                    id="imageURL"
                    defaultValue={props?.toy?.imageURL}
                    {...register("imageURL", { required: true })}
                  />
                  {errors.imageURL && <span>This field is required</span>}
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="toyName">Toy Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="toyName"
                    defaultValue={props?.toy?.toyName}
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
                    readOnly
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
                    readOnly
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
                    defaultValue={props?.toy?.subCategory}
                    readOnly
                    {...register("subCategory", { required: true })}
                  >
                    <option value="">Select a sub-category</option>
                    <option value="Sports Car">Sports Car</option>
                    <option value="Truck Car">Truck Car</option>
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
                    defaultValue={props?.toy?.price}
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
                    defaultValue={props?.toy?.rating}
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
                    defaultValue={props?.toy?.availableQuantity}
                    {...register("availableQuantity", { required: true })}
                  />
                  {errors.availableQuantity && (
                    <span>This field is required</span>
                  )}
                </div>
              </div>
              <div className="form-group text-center  px-sm-0 py-sm-0 px-lg-5 py-lg-2 mx-auto">
                <label htmlFor="description">Detail Description</label>
                <textarea
                  className="form-control w-100 w-md-50"
                  id="description"
                  rows="4"
                  defaultValue={props?.toy?.description}
                  {...register("description", { required: true })}
                />
                {errors.description && <span>This field is required</span>}
              </div>
              <div className="form-group col-md-6 col-sm-12">
                <input
                  className="text-input d-none"
                  {...register("_id")}
                  value={props?.toy?._id}
                />
              </div>
              <div className=" text-center mt-3">
                <button
                  type="submit"
                  className="btn w-50 btn-info"
                  onClick={() => {
                    toast.success("Toy updated successfully!");
                  }}
                >
                  UPDATE TOY
                </button>
              </div>
              <Toaster position="top-center" reverseOrder={false} />;
            </form>
          }
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateToyDetails;
