import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const SingleToy = (props) => {
   const data = props.data;
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className=""
      >
        <Modal.Header className="mx-auto">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-color"
          >
            TOY Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col-md-6 p-3">
              <img
                src={data.imageURL}
                className=" img-fluid rounded-3"
                style={{ height: "100%" }}
                alt=""
              />
            </div>
            <div className="col-md-6 ">
              <div className="card-body mt-3 text-center">
                <h5 className="card-title fw-bold text-color">{data.name}</h5>
                <div className=" mt-3">
                  <p className="card-title  ">
                    <i className="fw-bold">Seller Name :</i> {data.sellerName}
                  </p>
                  <p className="card-title  ">
                    <i className="fw-bold"> Seller Email : </i>
                    {data.sellerEmail}
                  </p>
                </div>
                <p className="mt-2">
                  <i className="fw-bold">Quantity:</i> {data.availableQuantity}
                </p>

                <p className="">
                  <i className="fw-bold">Price:</i> $ {data.price}
                </p>
                <p className="">
                  <i className="fw-bold">Ratings:</i> {data.rating}
                </p>

                <p>
                  <i className="fw-bold">Description:</i> {data.description}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <div className="text-center my-3">
          <Button className="w-25 btn-info fw-bold" onClick={props.onHide}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SingleToy;
