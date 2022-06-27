import React, { useState, useEffect } from "react";
import "../assets/design.css";
import { DropdownButton, Dropdown, Form } from "react-bootstrap";


const Design = () => {

    const initial_values = { num_1: "", operator: "", num_2: "" };
    const [formValues, setFormValues] = useState(initial_values);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        // console.log(e.target.name);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log('values are: ', formValues)
    };

    useEffect(() => {
        console.log("Errors are : ", formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    return (
        <form onSubmit={handleSubmit}>
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
                                name="num_1"
                                value={formValues.num_1}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4" >
                            <label className="text-start col-form-label">Operator: </label>
                            <select className="form-select text-center" onChange={handleChange} name="operator">
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
                                type="number"
                                placeholder="Num-2"
                                name="num_2"
                                value={formValues.num_2}
                                onChange={handleChange}
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