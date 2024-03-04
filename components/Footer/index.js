import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: "12",
      md: "16",
    }}
    bg="rgb(60, 65, 66)"
    minWidth="100%"
    position="relative"

    // style={{ marginTop: "auto" }}
  >
    <Stack
      spacing={{
        base: "4",
        md: "5",
      }}
      direction="row"
    >
      {/* Column No 1 */}
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
        direction="column"
      >
        <Stack justify="space-between" direction="row" align="center">
          {/* <Logo /> */}
          <Image
            src={"/logo_orange.svg"}
            alt="Logo"
            height={300}
            width={300}
            style={{
              marginLeft: "200px",
              marginBlockStart: "-80px",
            }}
          />
        </Stack>
      </Stack>
      {/* Column No 2 */}
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
        direction="column"
        style={{ marginLeft: "25px" }}
      >
        <List padding={1}>
          <label>
            <b>Company</b>
          </label>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Why Gift Box?
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Our Story
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Careers
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Press
            </ListItem>
          </Link>
          <Link href={"/"}>
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              FAQs
            </ListItem>
          </Link>
        </List>
      </Stack>
      {/* Column No 3 */}
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
        direction="column"
        style={{ marginLeft: "25px" }}
      >
        <List padding={1}>
          <label>
            <b>Product</b>
          </label>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              How it works?
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Pricing
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Use Cases
            </ListItem>
          </Link>
          <Link href={"/"}>
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Integrations
            </ListItem>
          </Link>
        </List>
      </Stack>
      {/* Column No 4 */}
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
        direction="column"
        style={{ marginLeft: "25px" }}
      >
        <List padding={1}>
          <label>
            <b>Resources</b>
          </label>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Blog
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Partnerships
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Case studies
            </ListItem>
          </Link>
          <Link href={"/"}>
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Media Assets
            </ListItem>
          </Link>
        </List>
      </Stack>
      {/* Column No 5 */}
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
        direction="column"
        style={{ marginLeft: "25px" }}
      >
        <List padding={1}>
          <label>
            <b>Legal</b>
          </label>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Terms of Service
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Privacy Policy
            </ListItem>
          </Link>
          <Link href={"/"}>
            {" "}
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              Offer terms
            </ListItem>
          </Link>
          <Link href={"/"}>
            <ListItem mt={1} _hover={{ color: `var(--primary-color)` }}>
              License
            </ListItem>
          </Link>
        </List>
      </Stack>
      {/* Column No 6 */}
      <Stack spacing={{ base: "4", md: "5" }}>
        <label>
          <b>Stay up to date</b>
        </label>
        <Stack justify="space-between" direction="row" align="center">
          <Input
            borderColor="#ff581b"
            focusBorderColor="#ff581b"
            placeholder="Enter your email"
            _hover={{ borderColor: "orange" }}
          />

          <Button
            size={"md"}
            colorScheme={"#ff581b;"}
            textColor={"white"}
            variant="outline"
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Stack>

    <Box as="hr" bg={"grey"} />

    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack
        style={{ marginLeft: "200px" }}
        justify="space-between"
        direction="row"
        align="center"
      >
        {" "}
        <ButtonGroup style={{ marginTop: "40px" }} variant="tertiary">
          <IconButton
            _hover={{ color: `var(--primary-color)` }}
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin size="lg" />}
          />
          <IconButton
            _hover={{ color: `var(--primary-color)` }}
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub size="lg" />}
          />
          <IconButton
            _hover={{ color: `var(--primary-color)` }}
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter size="lg" />}
          />
        </ButtonGroup>
        <Text
          style={{ marginRight: "350px", marginTop: "40px" }}
          fontSize="lg"
          color="fg.subtle"
        >
          &copy; {new Date().getFullYear()} Gift Box, All rights reserved.
        </Text>
      </Stack>
    </Stack>
  </Container>
);
