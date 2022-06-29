import React, { useState, useEffect } from "react";
import "../assets/design.css";
import axios from "axios";

const Design = () => {

    const initial_values = { num_1: "", operator: "", num_2: "" };
    const [formValues, setFormValues] = useState(initial_values);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        // console.log(e.target.name);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    };

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/calculate?num_1=${formValues.num_1}&num_2=${formValues.num_2}&operator=${formValues.operator}`);
            setResult(res.data)
            // console.log('fetch data->',res)
            console.log('result-> ',result);
        } catch (error) {
            console.log('Error-> ',error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log('values are: ', formValues)
        fetchData()
        // console.log('num_1 are: ', formValues.num_1)
    };

    useEffect(() => {
        // console.log("Errors are : ", formErrors);
        // if (Object.keys(formErrors).length === 0 && isSubmit) {
        //     console.log(formValues);
        // }
        if (isSubmit){
            console.log('submit: ', isSubmit)
            fetchData()
        }
    }, [result]);

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
                                required
                            />
                        </div>

                        <div className="mb-4" >
                            <label className="text-start col-form-label">Operator: </label>
                            <select className="form-select text-center" onChange={handleChange} name="operator" required>
                                <option defaultValue >Choose An Emoji</option>
                                <option value="add">&#x1F47D; Addition</option>
                                <option value="sub">&#x1F480; Subtraction</option>
                                <option value="mul">&#x1F47B; Multiplication</option>
                                <option value="div">&#x1F631; Division</option>
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
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-success">Submit</button>
                        </div>
                        <br /><br />
                        <div className="text-center">
                            Result is: {result}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Design;