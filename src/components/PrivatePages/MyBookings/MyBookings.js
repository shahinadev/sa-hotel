import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useAuth from "./../../../hooks/useAuth";
import Loading from "./../../Shared/Loading/Loading";
import "./MyBookings.css";
const MyBookings = () => {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState("");
  const deleteModalRef = useRef(null);
  const dissmissModal = useRef(null);
  const { user } = useAuth();

  //delete booking
  const deleteBooking = () => {
    axios
      .delete(`https://fierce-thicket-55699.herokuapp.com/orders/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          //filter orders after delete successfully..
          const newOrders = orders.filter((order) => order._id !== id);
          setOrders(newOrders);
          dissmissModal.current.click();
        } else {
          alert("something is wrong...");
        }
      });
  };
  useEffect(() => {
    const url = `https://fierce-thicket-55699.herokuapp.com/orders/?email=${user.email}`;
    axios
      .get(url)
      .then((result) => setOrders(result.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1>My Bookings</h1>
        {!orders.length > 0 ? (
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
                              <td>{order.room_count}</td>
                              <td>{order.country}</td>
                              <td>{order.address}</td>
                              <td>{order.status}</td>
                              <td>
                                <a
                                  ref={deleteModalRef}
                                  href="#myModal"
                                  class="trigger-btn"
                                  data-toggle="modal"
                                ></a>
                                <button
                                  onClick={() => {
                                    deleteModalRef.current.click();
                                    setId(order._id);
                                  }}
                                  className="delete"
                                  title="Delete"
                                  data-toggle="tooltip"
                                >
                                  <i className="material-icons text-danger">
                                    &#xE872;
                                  </i>
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

      {/* Delete Modal */}
      <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header flex-column">
              <div class="icon-box">
                <i class="material-icons">&#xE5CD;</i>
              </div>
              <h4 class="modal-title w-100">Are you sure?</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <p>
                Do you really want to delete these records? This process cannot
                be undone.
              </p>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                ref={dissmissModal}
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={deleteBooking}
                type="button"
                class="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookings;
