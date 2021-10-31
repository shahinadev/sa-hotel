import React, { useRef } from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddNewService = () => {
  const modalRef = useRef();
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
    try {
      const result = await axios.post(
        "https://fierce-thicket-55699.herokuapp.com/add-service",
        newData
      );
      reset();
      modalRef.current.click();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="my-5 we_are_ready_sectoion we_are_ready_two we_are_ready_three">
        <div className="container">
          <div className="we_are_content">
            <div className="online_booking">
              <h2>Add a New Service</h2>
              <form className="booking_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 form-group">
                    <label htmlFor="name">Service Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="service name"
                      {...register("service_name", {
                        required: true,
                        min: {
                          value: 5,
                          message: "service name must be minimum 5 letter",
                        },
                      })}
                    />
                    {errors.service_name && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="col-lg-6 col-sm-12 form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="location"
                      {...register("location", {
                        required: true,
                      })}
                    />
                    {errors.location && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 form-group">
                    <label htmlFor="image">Service Price</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="price"
                      {...register("price", {
                        required: true,
                      })}
                    />
                    {errors.price && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="col-lg-6 col-sm-12 form-group">
                    <label htmlFor="image">Service banner</label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="banner img url"
                      {...register("service_img", {
                        required: true,
                      })}
                    />
                    {errors.service_img && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-sm-12 form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control text_area"
                      placeholder="description"
                      spellcheck="true"
                      {...register("description", {
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
                  <button type="submit" className="btn login-btn">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <a href="#myModal" data-toggle="modal" ref={modalRef}></a>
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
              <p class="text-center">Service Added successfully...</p>
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

export default AddNewService;
