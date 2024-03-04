import React, { useState, useEffect } from "react";
import { Avatar } from "@nextui-org/react";

import { Box, Image, Button } from "@chakra-ui/react";
import { HeartIcon } from "./HeartIcon";
export default function CartItem({ props }) {
  console.log("cartitem", props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",

        minHeight: "100px",
      }}
    >
      {/* <Avatar
        size="lg"
        as="div"
        src={props.uri}
        style={{ cursor: "pointer", marginLeft: "75px" }}
      /> */}
      <Image borderRadius={"10"} src={props.uri} width={100} height={100} />
      <div style={{ width: "100%" }}>
        <span
          style={{
            margin: "5px",
            flexDirection: "column",
            marginLeft: "50px",
            fontWeight: "bold",
            fontFamily: "cursive",
          }}
        >
          Engraved Wood
        </span>
        <br />
        <span
          style={{ margin: "5px", flexDirection: "column", marginLeft: "50px" }}
        >
          <span style={{ backgroundColor: "red" }}>
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
          $75
        </span>
      </div>
    </div>
  );
}
