import React from "react";
import "./Modal.css";
const Modal = () => {
  return (
    <>
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
                Your booking has been confirmed. you can check it form my
                booking page.for details. Thanks
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

export default Modal;
