// ProductCard.jsx
import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";

export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, salePrice, rating } = product;
  return (
    <Stack spacing="5" borderRadius="xl" borderColor="black">
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius="xl"
            maxW="100%" // Adjust the max width of the image
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>

      {/* Name + Price + Reviews */}
      <Stack spacing="3">
        <Text
          fontWeight="medium"
          color={useColorModeValue("gray.700", "gray.400")}
        >
          {name}
        </Text>
        <PriceTag price={price} salePrice={salePrice} currency="USD" />
        <HStack>
          <Rating defaultValue={rating} size="md" /> // Adjust the size of the
          rating
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>

      {/* Button  */}
      <Stack align="center">
        <Button colorScheme="blue" width="full" fontSize="lg">
          Add to Cart
        </Button>

        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Quick Shop
        </Link>
      </Stack>
    </Stack>
  );
};
