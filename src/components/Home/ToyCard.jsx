import React from 'react';
import SingleToy from '../SingleToy/SingleToy';

const ToyCard = ({data}) => {
      const [modalShow, setModalShow] = React.useState(false);
    return (
      <div className="card mb-3">
        <div className="row g-0 py-2">
          <div className="col-md-6 col-sm-12">
            <img
              src={data.imageURL}
              className="img-fluid  rounded "
              style={{ height: "100%" }}
              alt=""
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card-body">
                        <h5 className="card-title fw-bold text-color">{data.toyName}</h5>
              <div className="mt-3">
                <p className="">Price: $ {data.price}</p>
                <p className="">Ratings: {data.rating} </p>
              </div>
              <div className="text-center mt-2">
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
                                data= {data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyCard;