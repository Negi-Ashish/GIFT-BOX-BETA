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

export const ExploreNow = () => {
  const router = useRouter();

  async function handelExplore() {
    router.push(`/explore`);
  }

  return (
    <Box width="100%" mt="85" position="relative">
      <Stack direction="row" spacing={0} width="100%">
        <Box minW="900px" maxW="900px" position="relative">
          <Stack>
            <Stack spacing="4">
              <Image
                src="/banner_slogan_one.png"
                alt="Customize Your Board Today"
                fallback={<Skeleton />}
              />
            </Stack>
            <HStack ml="310" position="absolute" bottom="130" right="370">
              <Button
                rightIcon={<Icon as={FaArrowRight} />}
                onClick={handelExplore}
              >
                Explore Now
              </Button>
            </HStack>
          </Stack>
        </Box>
        <Flex minWidth="900px" maxWidth="1200px">
          <Image
            src="/giftbox.png"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="700px"
            minW="450px"
            objectFit="cover"
          />
          <Image
            src="/giftbox.png"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="700px"
            minW="450px"
            objectFit="cover"
          />
        </Flex>
      </Stack>
    </Box>
  );
};
