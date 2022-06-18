import { useState } from "react";

function Output({
  name,
  age,
  skill,
  idea,
  product,
  offfered,
  secproduct,
  procesedprod,
  relyears,
  unique,
  local,
  owner,
  estab,
  mark,
  pri,
  avenues,
  scaling,
}) {
  return (
    <>
      <div>
        <p>
          {" "}
          <strong>{name}</strong> is looking <strong>{idea}</strong> to their
          business of share market
        </p>
        <p>
          This enterprise has been operational since <strong>{age}</strong>{" "}
          years and has been serving its customers since then
        </p>
        <p>
          This establishment offers products/services like{" "}
          <strong>{product}</strong> to <strong>{offfered}</strong>
        </p>
        <p>
          In addition, the enterprise shall also be invloved in{" "}
          <strong>{secproduct}</strong>{" "}
        </p>
        <p>
          other products of the enterprise shall include in{" "}
          <strong>{procesedprod}</strong>{" "}
        </p>
        <p>
          {" "}
          <strong>{name}</strong> has relevant experience of
          <strong>{relyears}</strong> years in the field
        </p>
        <p>
          The entrepreneur <strong>{skill}</strong> in this field of work
        </p>
        <p>
          The enterprise is uniquely positioned because of its{" "}
          <strong>{unique}</strong>{" "}
        </p>

        <p>
          The <strong>{local}</strong> is located in area of in a{" "}
          <strong>{owner}</strong> property
        </p>

        <p>
          The size of the establishment is <strong>{estab}</strong> sq ft
        </p>
        <p>
          {" "}
          <strong>{mark}</strong> and the range of products and target market
          has been identified after that.
        </p>
        <p>
          The enterprise shall focus on offering its products/services to{" "}
          <strong>{pri}</strong> markets
        </p>
        <p>
          Our marketing avenues to reach the targeted customers shall include-
          <strong>{avenues}</strong> markets
        </p>
        <p>
          Our marketing avenues to reach the targeted customers shall include-
          <strong>{scaling}</strong> markets
        </p>
      </div>
    </>
  );
}

export default Output;
