import { Box, Heading, Text, Image, ChakraProvider } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100%"
        bg="darkgray"
        color="#000000"
        fontFamily="Arial, sans-serif"
        textAlign="center"
        flexDirection="column"
      >
        <Image
          src="/error.png"
          alt="404 Image"
          style={{ marginTop: "10%" }}
          // style={{ backgroundColor: "blue" }}
        />
        <Box>
          {/* <Heading as="h1" size="2xl" mb={4} fontWeight="bold">
            Oops! Its not you, Its us
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mb={6}>
            We sincerely apologize for the inconvenience, as it seems we've
            encountered an issue and the page you're looking for cannot be
            found.
          </Text> */}
          <Text fontSize="sm">
            Please return to the{" "}
            <Box as="a" href="/" color="#000000" textDecoration="underline">
              Landing Page
            </Box>
            .
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default NotFoundPage;
