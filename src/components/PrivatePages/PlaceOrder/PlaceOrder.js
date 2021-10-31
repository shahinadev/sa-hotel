import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "./../../../hooks/useAuth";
import Modal from "./../../Pages/Modal/Modal";

const PlaceOrder = () => {
  const modalRef = useRef(null);
  const { id } = useParams();
  const { user } = useAuth();
  const [service, setService] = useState({});
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm();
  //save to database by api
  const onSubmit = async (data) => {
    const newData = { ...data };
    newData.status = "pending";
    newData.service_name = service.service_name;
    newData.name = user.displayName;
    newData.email = user.email;
    newData.service_id = service._id;
    newData.service_id = service._id;
    try {
      const result = await axios.post(
        "http://localhost:8080/add-order",
        newData
      );
      reset();
      modalRef.current.click();
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //fetch the single service by id form api
    axios
      .get(`http://localhost:8080/services/${id}`)
      .then((result) => {
        setService(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src={service.service_img}
              className="img-fluid d-block w-100 h-50 rounded-3"
              alt="service banner"
            />
            <h1 className="fw-500">{service.service_name}</h1>
            <p className="fw-bold">Location: {service.location}</p>
            <p>{service.description}</p>
          </div>
        </div>
        <section className="we_are_ready_sectoion we_are_ready_two we_are_ready_three">
          <div className="container">
            <div className="we_are_content">
              <div className="online_booking">
                <h2>Book Hotel Now</h2>
                <form
                  className="booking_form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-lg-12 col-sm-12 form-group">
                      <label htmlFor="name">Hotel Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={service.service_name}
                        placeholder="service_name"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={user.displayName}
                        placeholder="name"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label htmlFor="location">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue={user.email}
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label htmlFor="image">How may rooms?</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="rooms number"
                        {...register("room_count", {
                          required: true,
                        })}
                      />
                      {errors.room_count && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="col-lg-6 col-sm-12 form-group">
                      <label htmlFor="image">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="country"
                        {...register("country", {
                          required: true,
                        })}
                      />
                      {errors.country && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-sm-12 form-group">
                      <label htmlFor="description">Your address?</label>
                      <textarea
                        className="form-control text_area"
                        placeholder="address"
                        spellcheck="true"
                        {...register("address", {
                          required: true,
                        })}
                      ></textarea>
                      {errors.description && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12 form-group custom_button">
                    <Modal></Modal>
                    <a href="#myModal" data-toggle="modal" ref={modalRef}></a>
                    <button type="submit" className="btn login-btn">
                      Book
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlaceOrder;
