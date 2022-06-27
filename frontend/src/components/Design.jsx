import React, { useState } from "react";
import "../assets/design.css";
import { DropdownButton, Dropdown, Form } from "react-bootstrap";


const Design = () => {
    return (
        <form >
            <div className="container d-flex justify-content-center py-5">
                <div className="card mt-4 col-md-8 shadow card-style">
                    <div className="card-title mt-3 ">
                        <h2 className="text-success text-center"> Emoji-Calculator </h2>
                    </div>

                    <div className="card-body col-md-8 m-auto">

                        <div className="mb-4">
                            <label className="text-start col-form-label">Num-1: </label>
                            <input
                                className="form-control text-center"
                                type="number"
                                placeholder="num-1"
                                name="num-1"
                            />
                        </div>

                        <div className="mb-4" >
                            <label className="text-start col-form-label">Operator: </label>
                            <select className="form-select text-center">
                                <option disabled defaultValue >Choose An Emoji</option>
                                <option value="addition">&#x1F47D; Addition</option>
                                <option value="subtraction">&#x1F480; Subtraction</option>
                                <option value="multiplication">&#x1F47B; Multiplication</option>
                                <option value="division">&#x1F631; Division</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="text-start col-form-label">Num-2: </label>
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