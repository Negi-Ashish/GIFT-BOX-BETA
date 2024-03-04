import Link from "next/link";
// import { removeToken } from '../service/browserToken';
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dropdown, Avatar, Grid } from "@nextui-org/react";
import Image from "next/image";
import logo from "../public/logo_orange.png";
import CartItem from "./Cart/item";
import { ShoppingCart } from "react-feather";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Badge,
  AvatarBadge,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

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

  // TEST CART ONE
  // let cart = [
  //   {
  //     key: "1",
  //     value: "updateEmail",
  //   },
  //   {
  //     key: "2",
  //     value: "updatePassword",
  //   },
  //   {
  //     key: "3",
  //     value: "updateWallet",
  //   },
  //   {
  //     key: "4",
  //     value: "updateWallet",
  //   },
  //   {
  //     key: "5",
  //     value: "out",
  //   },
  //   {
  //     key: "6",
  //     value: "updateEmail",
  //   },
  //   {
  //     key: "7",
  //     value: "updatePassword",
  //   },
  //   {
  //     key: "8",
  //     value: "updateWallet",
  //   },
  //   {
  //     key: "9",
  //     value: "updateWallet",
  //   },
  //   {
  //     key: "10",
  //     value: "out",
  //   },
  //   {
  //     key: "Final",
  //     value: "total",
  //   },
  // ];

  // TEST CART TWO
  let cart = [
    {
      key: "1",
      value: "updateEmail",
    },
    {
      key: "2",
      value: "updatePassword",
    },
    {
      key: "3",
      value: "updateWallet",
    },
    {
      key: "4",
      value: "updateWallet",
    },
    {
      key: "5",
      value: "out",
    },
    {
      key: "6",
      value: "updateEmail",
    },
    {
      key: "7",
      value: "updatePassword",
    },
    {
      key: "8",
      value: "updateWallet",
    },
    {
      key: "9",
      value: "updateWallet",
    },
    {
      key: "10",
      value: "out",
    },
    {
      key: "11",
      value: "updateEmail",
    },
    {
      key: "12",
      value: "updatePassword",
    },
    {
      key: "13",
      value: "updateWallet",
    },
    {
      key: "14",
      value: "updateWallet",
    },
    {
      key: "15",
      value: "out",
    },
    {
      key: "Final",
      value: "total",
    },
  ];

  // TEST CART Three
  // let cart = [
  //   {
  //     key: "1",
  //     value: "updateEmail",
  //   },
  //   {
  //     key: "2",
  //     value: "updatePassword",
  //   },
  // ];

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
      href: "/highlights",
      title: "Highlights",
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
      href: "/personalize",
      title: "Personalize",
    },
  ];

  // function handleRegister(e) {
  //   e.preventDefault();
  //   removeToken();
  //   // console.log('called');
  //   router.push("/auth/register");
  // }

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

  //Blurr Modal chakra ui
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

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
                <Avatar
                  onClick={() => {
                    setOverlay(<OverlayTwo />);
                    onOpen();
                  }}
                  size="lg"
                  as="button"
                  src={"../giftbox.png"}
                />
                <Badge
                  colorScheme="red"
                  borderRadius="full"
                  px="2"
                  position="absolute"
                  top="-8px"
                  right="-15px"
                >
                  0
                </Badge>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1 ">
        {<main className="flex-1">{children}</main>}
      </div>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent mt={3}>
          <ModalHeader
            marginLeft={120}
            fontSize={30}
            fontFamily={"cursive"}
            mb={-9}
          >
            Your Cart
          </ModalHeader>
          <Badge
            colorScheme="red"
            borderRadius="full"
            px="2"
            position="absolute"
            top="-8px"
            right="-15px"
          >
            0
          </Badge>
          <ModalCloseButton />

          {/* Cart Items here dontkillme. */}

          <ModalBody>
            {cart.map((item) => (
              <Box
                withDivider
                key={[item.key, item.value]}
                css={{
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",

                  margin: 1,

                  borderRadius: 10,
                }}
              >
                <CartItem props={{ uri: `${"../test_item.jpeg"}` }} />
                {/* <Box as="hr" mt={2} bg={"grey"} /> */}
              </Box>
            ))}
          </ModalBody>

          <ModalFooter marginTop={-6} display="flex" flexDir={"row"}>
            <Button
              colorScheme={"#ff581b;"}
              variant="outline"
              _hover={{ textColor: `white`, backgroundColor: "#ff581b" }}
              rightIcon={<Icon as={ShoppingCart} />}
              onClick={onClose}
              height={100}
              fontSize={20}
              style={{ width: "100%", fontFamily: "cursive" }}
            >
              Finalize
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Navbar;
