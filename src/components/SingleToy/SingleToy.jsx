import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const SingleToy = (props) => {
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
            <div className="col-md-6 ">
              <img
                src="https://images.unsplash.com/photo-1575574419906-41458fc83949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRveSUyMHRydWNrJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                className="img-fluid rounded"
                style={{ height: "100%" }}
                alt=""
              />
            </div>
            <div className="col-md-6 ">
              <div className="card-body mt-3 text-center">
                <h5 className="card-title fw-bold text-color">Truck Car X</h5>
                <div className=" mt-3">
                  <p className="card-title  ">
                    <i className="fw-bold">Seller Name :</i> Tanvir Hasan
                  </p>
                  <p className="card-title  ">
                    <i className="fw-bold"> Seller Email :</i>{" "}
                    tanvir279@gmail.com
                  </p>
                </div>
                <p className="mt-2">
                  <i className="fw-bold">Quantity:</i> 500
                </p>

                <p className="">
                  <i className="fw-bold">Price:</i> $ 120
                </p>
                <p className="">
                  <i className="fw-bold">Ratings:</i> *****{" "}
                </p>

                <p>
                  <i className="fw-bold">Description:</i> Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Eligendi, sequi. In illo
                  excepturi blanditiis reiciendis. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Eligendi, sequi. In illo
                  excepturi blanditiis reiciendis.
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
