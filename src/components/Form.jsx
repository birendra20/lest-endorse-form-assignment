import React from "react";

const Form = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>LetsEndorse</h1>
      <form>
        <h2>Introduction</h2>
        <label>Name:</label>
        <input type="text" name="username" placeholder="UserName" /> <br />
        <label>Stage of business:</label>
        <select name="business_stage">
          <option value="Select">Select</option>
          <option value="Start-up">Start-up</option>
          <option value="Scale-up">Scale-up</option>
        </select>{" "}
        <br />
        <label>Age of establishment:</label>
        <input type="number" min="0" max="100" placeholder="0 to 100" />
        <br />
        <label>Primary Products/Services offfered :</label>
        <input type="text" placeholder="primary_product_service_offered" />
        <br />
        <label>Secondary Product/Services</label>
        <input type="text" />
        <br />
        <label> Processed Products</label>
        <input type="text" placeholder="Processed Products" />
        <br />
        <label>Years of relevant experience in this field</label>
        <input type="number" placeholder="Relevant" />
        <br />
        <label>Skill training</label>
        <select>
          <option>No formal skill training</option>
          <option>Has formal skill training and certificate</option>
        </select>
        <br />
        <label>Unique Selling Proposition </label>
        <select>
          <option>the Entrepreners's experience in this field</option>
          <option>innovative product</option>
          <option>high profit margin</option>
          <option>high growth potential </option>
          <option>Superior customer support</option>
          <option>quality and affordable products/service </option>
          <option>high demand in the target market </option>
          <option>abundant supply of raw </option>
          <option>wide range of product/services </option>
          <option>robust value-chain of the business </option>
          <option>frequency of customer visit</option>
        </select>
        <br />
        <h2>Location</h2>
        <label>Locality of business</label>
        <select>
          <option>Urban</option>
          <option>Rural</option>
          <option>semi-Urban</option>
          <option>Slum</option>
        </select>{" "}
        <br />
        <label>Ownership of infrastructure</label>
        <select>
          <option>Rented</option>
          <option>Leased</option>
          <option>Self-owned</option>
        </select>
        <br />
        <br />
        <label>
          Establishment area (in square feet) (Enter 0 if the establishment area
          is irrelevant) :
        </label>
        <input type="number" placeholder=" Establishment area" />
        <h2>Target Market : </h2>
        <label>Market research</label>
        <br />
        <select>
          <option>Not Conducted</option>
          <option>Market research has been conducted</option>
        </select>
        <br />
        <label>Primary market</label>
        <select>
          <option value="local">Local</option>
          <option value="Regional">Regional</option>
          <option value="National">National</option>
          <option>International</option>
        </select>
        <br />
        <label>Customers</label>
        <input type="text" placeholder="Customers" />
        <br />
        <label>Suppliers</label>
        <input type="text" placeholder="Suppliers" /> <br />
        <label>Market avenues</label>
        <input type="text" placeholder="Select" />
        <br />
        <label>Avenues of scaling up in future</label>
        <input type="text" />
      </form>
    </>
  );
};

export default Form;
