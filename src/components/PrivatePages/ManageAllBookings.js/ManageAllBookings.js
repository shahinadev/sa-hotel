import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "./../../Shared/Loading/Loading";
import "../MyBookings/MyBookings.css";
const ManageAllBookings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const successModalRef = useRef();
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(false);
  //delete single booking
  const deleteBooking = (id) => {
    const isDelete = window.confirm("do you really want to delete it?");
    if (isDelete) {
      axios
        .delete(`https://fierce-thicket-55699.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const newOrders = orders.filter((order) => order._id !== id);
            setOrders(newOrders);
            alert("deleted successfully..");
          } else {
            alert("something is wrong...");
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  //change booking pending status
  const changeStatus = (id) => {
    axios
      .put(`https://fierce-thicket-55699.herokuapp.com/orders/`, { id })
      .then((res) => {
        setUpdate(true);
        successModalRef.current.click();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    const url = `https://fierce-thicket-55699.herokuapp.com/orders/`;
    axios
      .get(url)
      .then((result) => setOrders(result.data))
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [update]);
  return (
    <>
      <div className="container">
        <h1>My All Bookings</h1>
        {isLoading ? (
          <Loading />
        ) : !orders.length > 0 ? (
          <>
            <p className="display-6 text-center">No Data Found</p>
          </>
        ) : (
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title"></div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Service Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total Room(s)</th>
                        <th>Country</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!orders.length > 0 ? (
                        <Loading />
                      ) : (
                        orders.map((order, index) => (
                          <>
                            <tr key={index}>
                              <td>{order.service_name}</td>
                              <td>{order.name}</td>
                              <td>{order.email}</td>
                              <td>{order.room_count}</td>
                              <td>{order.country}</td>
                              <td>{order.address}</td>
                              <td>{order.status}</td>
                              <td>
                                <button
                                  onClick={() => deleteBooking(order._id)}
                                  className="delete"
                                  title="Delete"
                                  data-toggle="tooltip"
                                >
                                  <i className="material-icons text-danger">
                                    &#xE872;
                                  </i>
                                </button>
                                <button
                                  onClick={() => changeStatus(order._id)}
                                  className="btn btn-success"
                                >
                                  Approved
                                </button>
                              </td>
                            </tr>
                          </>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <a href="#myModal" data-toggle="modal" ref={successModalRef}></a>
      <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <div class="icon-box">
                <i class="material-icons">&#xE876;</i>
              </div>
              <h4 class="modal-title w-100">Awesome!</h4>
            </div>
            <div class="modal-body">
              <p class="text-center">
                booking Status is changed successfully...
              </p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-success btn-block" data-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAllBookings;
