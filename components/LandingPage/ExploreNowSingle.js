import {
  background,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

export const ExploreNowSingle = () => {
  const router = useRouter();

  async function handelExplore() {
    router.push(`/explore`);
  }

  return (
    <Box width="100%" mt="85" position="relative">
      <Stack direction="row" spacing={0} width="100%">
        <Flex
          // style={{
          //   border: "solid",
          //   // marginLeft: "182px",
          // }}
          minWidth="900px"
          maxWidth="1200px"
        >
          <Image
            src="/giftbox.png"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="700px"
            minW="900px"
            objectFit="cover"
          />
        </Flex>
        <Box minW="900px" maxW="900px" position="relative">
          <Stack>
            <Stack mt="50px">
              <Image
                src="/banner_slogan_two.png"
                alt="Customize Your Board Today"
                fallback={<Skeleton />}
              />
            </Stack>
            <HStack ml="310" position="absolute" bottom="275" right="390">
              <Button
                rightIcon={<Icon as={FaArrowRight} />}
                onClick={handelExplore}
              >
                Craft Now
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
