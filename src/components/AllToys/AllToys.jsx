import React from 'react';

const AllToys = () => {
     const toysData = [
       {
         seller: "John Doe",
         name: "Toy Car",
         subCategory: "Vehicles",
         price: "$19.99",
         quantity: 10,
       },
       {
         seller: "Jane Smith",
         name: "Building Blocks",
         subCategory: "Educational",
         price: "$24.99",
         quantity: 5,
       },
       // Add more toy data here
    ];
    
    return (
      <div className="container">
        <div className="p-5">
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {toysData.map((toy, index) => (
                  <tr key={toy.id}>
                    <td>{index + 1}</td>
                    <td>{toy.seller}</td>
                    <td>{toy.name}</td>
                    <td>{toy.subCategory}</td>
                    <td>{toy.price}</td>
                    <td>{toy.quantity}</td>
                    <td>
                      <button className="btn btn-info text-white ">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllToys;