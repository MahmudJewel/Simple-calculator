import React, { useState } from "react";
import "../assets/design.css";

const Design = () => {
    return (
        <form >
            <div className="container d-flex justify-content-center py-5">
                <div className="card mt-4 col-md-8 shadow card-style">
                    <div className="card-title mt-3 ">
                        <h2 className="text-success text-center"> Calculator </h2>
                    </div>

                    <div className="card-body col-md-8 m-auto">

                        <div className="mb-4">
                            <h5 className="text-start">Num-1: </h5>
                            <input
                                className="form-control text-center"
                                type="text"
                                placeholder="num-1"
                                name="num-1"
                            />
                        </div>

                        <div className="mb-4">
                            <h5 className="text-start">Operator: </h5>
                            <input
                                className="form-control text-center"
                                type="text"
                                placeholder="Operator"
                                name="operator"
                            />
                        </div>

                        <div className="mb-4">
                            <h5 className="text-start">Num-2: </h5>
                            <input
                                className="form-control text-center"
                                type="text"
                                placeholder="Num-2"
                                name="num-2"
                            />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Design;