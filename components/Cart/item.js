import React, { useState, useEffect } from "react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
export default function CartItem({ props }) {
  console.log("cartitem", props);
  return (
    <div style={{ display: "flex" }}>
      <Avatar
        size="lg"
        as="div"
        src={props.uri}
        style={{ cursor: "pointer" }}
      />
      <div>
        <span
          style={{ margin: "5px", flexDirection: "column", marginLeft: "50px" }}
        >
          Engraved Wood
        </span>
        <br />
        <span
          style={{ margin: "5px", flexDirection: "column", marginLeft: "50px" }}
        >
          Quantity:
          <span style={{ backgroundColor: "transperent" }}>
            <span
              style={{
                paddingLeft: "5px",
                marginRight: "10px",

                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <button>-</button>
            </span>
            1
            <span
              style={{
                marginLeft: "10px",

                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <button>+</button>
            </span>
          </span>
        </span>

        <br />
        <span
          style={{ margin: "5px", flexDirection: "column", marginLeft: "50px" }}
        >
          Total Cost: $75
        </span>
      </div>
    </div>
  );
}
