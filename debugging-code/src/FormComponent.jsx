import React, { Component } from "react"


function FormComponent(props) {
    const { data, handleChange } = props;
    return (
        <main>
            <form>
                <input
                    placeholder="First Name"
                    value={data.firstName}
                    name="firstName"
                    onChange={handleChange}
                /><br />
                <input
                    placeholder="Last Name"
                    value={data.lastName}
                    name="lastName"
                    onChange={handleChange}
                /><br />
                <input
                    placeholder="Age"
                    value={data.age}
                    name="age"
                    onChange={handleChange}
                /><br />

                <label htmlFor="gender">
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={handleChange}
                    /> Female
                </label>
                <br />

                <select
                    name="destination"
                    value={data.destination}
                    onChange={handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Kiev">Kiev</option>
                    <option value="Zaporozhye">Zaporozhye</option>
                    <option value="Kherson">Kherson</option>
                </select>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={data.isVegan}
                        onChange={handleChange}
                    /> Vegan?
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={data.isKosher}
                        onChange={handleChange}
                    /> Kosher?
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={data.isLactoseFree}
                        onChange={handleChange}
                    /> LactoseFree?
                </label>
                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2><font color="#3AC1EF">Entered information:</font></h2>
            <p>Your name: {data.firstName} {data.lastName}</p>
            <p>Your age: {data.age}</p>
            <p>Your gender: {data.gender}</p>
            <p>Your destination: {data.destination}</p>
            <div>
                <p>Your dietary restrictions:</p>
                <p>Vegan: {data.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {data.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free: {data.isLactoseFree ? "Yes" : "No"}</p>
            </div>
        </main>
    )
}

export default FormComponent