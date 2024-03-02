import Link from "next/link";
// import { removeToken } from '../service/browserToken';
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dropdown, Avatar, Text, Grid, User, blue } from "@nextui-org/react";
import Image from "next/image";
import logo from "../public/logo_orange.png";
import gift from "../public/giftbox.png";
import CartItem from "./Cart/item";

const Navbar = ({ children, props }) => {
  const router = useRouter();

  let filters = [
    {
      key: "Update Email",
      value: "updateEmail",
    },
    {
      key: "Update Password",
      value: "updatePassword",
    },
    {
      key: "Update Wallet",
      value: "updateWallet",
    },
    {
      key: "My Accomplishment",
      value: "updateWallet",
    },
    {
      key: "Logout",
      value: "out",
    },
    {
      key: "Update Email",
      value: "updateEmail",
    },
    {
      key: "Update Password",
      value: "updatePassword",
    },
    {
      key: "Update Wallet",
      value: "updateWallet",
    },
    {
      key: "My Accomplishment",
      value: "updateWallet",
    },
    {
      key: "Logout",
      value: "out",
    },
  ];

  let menuItems = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/shop",
      title: "Shop",
    },
    {
      href: "/top-picks",
      title: "Top Picks",
    },
    {
      href: "/reviews",
      title: "Reviews",
    },
    {
      href: "/support",
      title: "Support",
    },
    {
      href: "/design",
      title: "DesignYours!",
    },
  ];

  function handleRegister(e) {
    e.preventDefault();
    removeToken();
    // console.log('called');
    router.push("/auth/register");
  }

  async function handelFilter(filter_option) {
    filter_option = filter_option.split(",").map(String);
    // console.log('THIS IS FILTER OPTION', filter_option);
    if (filter_option[0] == "Logout") {
      removeToken();

      router.push("/auth/login");
    } else if (filter_option[0] == "Admin Panel") {
      router.push(`/auth/admin`);
    } else if (filter_option[0] == "My Accomplishment") {
      router.push(`/auth/accomplishment`);
    } else {
      router.push(`/auth/user_settings?setting=${filter_option[1]}`);
    }
  }

  return (
    <div className="min-h-screen flex flex-col daddy text-format">
      <header
        style={{
          backgroundColor: "rgba(60, 65, 66)",
          display: "flex", // Use flexbox
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          maxHeight: "90px",
        }}
        className="navbar fixed-top "
      >
        <div
          style={{
            maxHeight: "80px",
            minHeight: "50px",
            display: "flex", // Use flexbox
            alignItems: "center", // Center vertically
            justifyContent: "center", // Distribute space around divs
            overflow: "hidden",
            width: "100%", // Ensure the div stretches to full width
            padding: "0 10px", // Add padding to create space
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative", // Position the red div absolutely
              right: "111px", // Adjust the left position as neede
            }}
          >
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Logo"
                width={160}
                height={160}
                style={{ maxHeight: "100%" }}
              />
            </Link>
          </div>
          <div
            style={{
              position: "relative",
              fontSize: "10px",
              color: "darkgray",
            }}
          >
            {menuItems.map(({ href, title }) => (
              <Link
                key={title}
                className={`${
                  router.asPath === href && "text-underline-navbar"
                }`}
                href={`${href}`}
              >
                <span className="brand text-2xl">{title}</span>
              </Link>
            ))}
          </div>

          <div
            style={{
              position: "relative", // Position the black div absolutely
              left: "111px", // Adjust the right position as needed
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <span className="dropdown-container ">
                <Grid.Container>
                  <Grid>
                    <Dropdown placement="bottom-left">
                      <Dropdown.Trigger>
                        <Avatar size="lg" as="button" src={"../avatar_b.png"} />
                      </Dropdown.Trigger>
                      <Dropdown.Menu
                        aria-label="Dynamic Actions"
                        items={filters}
                        onAction={handelFilter}
                      >
                        {(item) => (
                          <Dropdown.Item
                            withDivider={
                              item.key == "Admin Panel" ||
                              item.key == "Logout" ||
                              item.key == "My Accomplishment"
                            }
                            key={[item.key, item.value]}
                            color={"info"}
                          >
                            {item.key}
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Grid>
                </Grid.Container>
              </span>

              <span className="dropdown-container ">
                <Grid.Container>
                  <Grid>
                    <Dropdown placement="bottom-left">
                      <Dropdown.Trigger>
                        <Avatar size="lg" as="button" src={"../giftbox.png"} />
                      </Dropdown.Trigger>
                      <Dropdown.Menu
                        aria-label="Dynamic Actions"
                        items={filters}
                        onAction={handelFilter}
                        className="custom-dropdown"
                      >
                        {(item) => (
                          <Dropdown.Item
                            withDivider
                            key={[item.key, item.value]}
                            color={"info"}
                            css={{ height: "100px" }}
                          >
                            <CartItem props={{ uri: `${"../giftbox.png"}` }} />
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Grid>
                </Grid.Container>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1 fixed-bot">
        {<main className="flex-1">{children}</main>}
      </div>
    </div>
  );
};

export default Navbar;
