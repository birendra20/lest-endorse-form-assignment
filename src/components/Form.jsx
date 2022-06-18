import React from "react";
import { useState } from "react";

import "./Form.css";
import Output from "./Output";
const Form = () => {
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");
  const [age, setAge] = useState("");
  const [product, setProduct] = useState("");
  const [offfered, setOffered] = useState("");
  const [secproduct, setSecproduct] = useState("");
  const [procesedprod, setProcesedprod] = useState("");
  const [relyears, setRelyears] = useState("");
  const [skill, setSkill] = useState("");
  const [unique, setUnique] = useState("");
  const [local, setLocal] = useState("");
  const [owner, setOwner] = useState("");
  const [estab, setEstab] = useState("");
  const [mark, setMark] = useState("");
  const [pri, setPri] = useState("");
  const [avenues, setAvenues] = useState([]);
  const [scaling, setScaling] = useState([]);

  const getName = (e) => {
    setName(e.target.value);
  };

  const getIdea = (e) => {
    setIdea(e.target.value);
  };

  const getAge = (e) => {
    setAge(e.target.value);
  };

  const getProduct = (e) => {
    setProduct(e.target.value);
  };

  const getOffered = (e) => {
    setOffered(e.target.value);
  };

  const getSecproduct = (e) => {
    setSecproduct(e.target.value);
  };

  const getProcesedprod = (e) => {
    setProcesedprod(e.target.value);
  };

  const getRelyears = (e) => {
    setRelyears(e.target.value);
  };

  const getSkill = (e) => {
    setSkill(e.target.value);
  };

  const getUnique = (e) => {
    setUnique(e.target.value);
  };

  const getLocal = (e) => {
    setLocal(e.target.value);
  };

  const getOwner = (e) => {
    setOwner(e.target.value);
  };

  const getEstab = (e) => {
    setEstab(e.target.value);
  };

  const getMark = (e) => {
    setMark(e.target.value);
  };

  const getPri = (e) => {
    setPri(e.target.value);
  };

  const handleSelect = function (selectedItems) {
    const ave = [];
    for (let i = 0; i < selectedItems.length; i++) {
      ave.push(selectedItems[i].value);
    }
    setAvenues(ave);
  };

  const handleSelect1 = function (selectedItems) {
    const ave = [];
    for (let i = 0; i < selectedItems.length; i++) {
      ave.push(selectedItems[i].value);
    }

    setScaling(ave);
  };

  return (
    <>
      <div className="main">
        <div>
          <form>
            <label>Name:</label>
            <input
              type="text"
              name="username"
              placeholder="UserName"
              onChange={getName}
            />
            <label>Stage of business:</label>
            <select name="business_stage" onChange={getIdea}>
              <option value="Select">Select</option>
              <option value="Start-up">Start-up</option>
              <option value="Scale-up">Scale-up</option>
            </select>{" "}
            <br />
            <label>Age of establishment:</label>
            <input
              type="number"
              placeholder="Age of establishment"
              min="0"
              max="100"
              onChange={getAge}
            />
            <br />
            <label>Primary Products/Services offfered :</label>
            <input
              type="text"
              placeholder="primary_product_service_offered"
              onChange={getProduct}
            />
            <label>Offered to:</label>
            <select name="Offered to" onChange={getOffered}>
              <option value="Endcustomers">End customers</option>
              <option value="Wholesalers">Wholesalers</option>
              <option value="Distributors">Distributors</option>
              <option value="Retailers">Retailers</option>
            </select>
            <br />
            <label>Secondary Product/Services</label>
            <input type="text" onChange={getSecproduct} />
            <br />
            <label> Processed Products</label>
            <input
              type="text"
              placeholder="Processed Products"
              onChange={getProcesedprod}
            />
            <br />
            <label>Years of relevant experience in this field</label>
            <input
              type="number"
              placeholder="Releavent"
              onChange={getRelyears}
            />
            <label>Skill training</label>
            <select onChange={getSkill}>
              <option>No formal skill taining</option>
              <option>Has formal skill training and certificate</option>
            </select>
            <br />
            <label>Unique Selling Proposition </label>
            <select onChange={getUnique}>
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
            <label>Establishment Type </label>
            <select onChange={getUnique}>
              <option>Factory</option>
              <option>Mill</option>
              <option>Stall</option>
              <option>Workshop</option>
              <option>Boutique</option>
              <option>Store </option>
              <option>Farm </option>
              <option>Plant </option>
              <option>Vending Cart </option>
              <option>Shop </option>
              <option>Manufacturing Unit</option>
            </select>
            <br />
            <label>Locality of business</label>
            <select onChange={getLocal}>
              <option>Urban</option>
              <option>Rural</option>
              <option>semi-Urban</option>
              <option>Slum</option>
            </select>{" "}
            <br />
            <label>Ownership of infrastructure</label>
            <select onChange={getOwner}>
              <option>Rented</option>
              <option>Leased</option>
              <option>Self-owned</option>
            </select>
            <br />
            <br />
            <label>
              Establishment area (in square feet) (Enter 0 if the establishment
              area is irrelevant) :
            </label>
            <input
              type="number"
              placeholder=" Establishment area"
              onChange={getEstab}
            />
            <h2>Target Market : </h2>
            <label>Market research</label>
            <br />
            <select onChange={getMark}>
              <option>Not Conducted</option>
              <option>Market research has been conducted</option>
            </select>
            <br />
            <label>Primeary market</label>
            <select onChange={getPri}>
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
            <form>
              <select
                multiple={true}
                value={avenues}
                onChange={(e) => {
                  handleSelect(e.target.selectedOptions);
                }}
              >
                <option value=" Distribution of marketing material,">
                  Distribution of marketing material{" "}
                </option>
                <option value="storefront/business branding,">
                  storefront/business branding ,{" "}
                </option>
                <option value="Seasonal discounts and offers,">
                  Seasonal discounts and offers
                </option>
                <option value="Digital Marketing,">Digital Marketing</option>
                <option value="Cross-promotion,">Cross-promotion,</option>
                <option value="Word of mouth"> Word of mouth </option>
              </select>
            </form>
            <br />
            <label>Aveneus of scaling up in future</label>
            <form>
              <select
                multiple={true}
                value={scaling}
                onChange={(e) => {
                  handleSelect1(e.target.selectedOptions);
                }}
              >
                <option value="increasing the variety of product/service offering,">
                  increasing the variety of product/service offering,{" "}
                </option>
                <option value="expanding the current offering to other ">
                  expanding the current offering to other ,{" "}
                </option>
                <option value="geographies,">geographies</option>
                <option value="opening more outlets,">
                  opening more outlets
                </option>
                <option value="growing the scale of operation,">
                  growing the scale of operation
                </option>
                <option value="building value-chain integrations">
                  {" "}
                  building value-chain integrations{" "}
                </option>
              </select>
            </form>
          </form>
        </div>
        <div>
          <Output
            name={name}
            idea={idea}
            age={age}
            product={product}
            offfered={offfered}
            secproduct={secproduct}
            procesedprod={procesedprod}
            relyears={relyears}
            unique={unique}
            local={local}
            owner={owner}
            estab={estab}
            mark={mark}
            pri={pri}
            avenues={avenues}
            scaling={scaling}
          />
        </div>
      </div>
    </>
  );

  // function Output() {
  //   return (
  //     <>
  //       <p>
  //         {" "}
  //         <strong>{name}</strong> is looking <strong>{idea}</strong> to their
  //         business of share market
  //       </p>
  //       <p>
  //         This enterprise has been operational since <strong>{age}</strong>{" "}
  //         years and has been serving its customers since then
  //       </p>
  //       <p>
  //         This establishment offers products/services like{" "}
  //         <strong>{product}</strong> to <strong>{offfered}</strong>
  //       </p>
  //       <p>
  //         In addition, the enterprise shall also be invloved in{" "}
  //         <strong>{secproduct}</strong>{" "}
  //       </p>
  //       <p>
  //         other products of the enterprise shall include in{" "}
  //         <strong>{procesedprod}</strong>{" "}
  //       </p>
  //       <p>
  //         {" "}
  //         <strong>{name}</strong> has relevant experience of
  //         <strong>{relyears}</strong> years in the field
  //       </p>
  //       <p>
  //         The entrepreneur <strong>{skill}</strong> in this field of work
  //       </p>
  //       <p>
  //         The enterprise is uniquely positioned because of its{" "}
  //         <strong>{unique}</strong>{" "}
  //       </p>

  //       <p>
  //         The <strong>{local}</strong> is located in area of in a{" "}
  //         <strong>{owner}</strong> property
  //       </p>

  //       <p>
  //         The size of the establishment is <strong>{estab}</strong> sq ft
  //       </p>
  //       <p>
  //         {" "}
  //         <strong>{mark}</strong> and the range of products and target market
  //         has been identified after that.
  //       </p>
  //       <p>
  //         The enterprise shall focus on offering its products/services to{" "}
  //         <strong>{pri}</strong> markets
  //       </p>
  //       <p>
  //         Our marketing avenues to reach the targeted customers shall include-
  //         <strong>{avenues}</strong> markets
  //       </p>
  //       <p>
  //         Our marketing avenues to reach the targeted customers shall include-
  //         <strong>{scaling}</strong> markets
  //       </p>
  //     </>
  //   );
  // }
};

export default Form;
