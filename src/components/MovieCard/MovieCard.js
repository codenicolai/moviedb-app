import React from "react";

import moment from "moment";

import { useTheme } from "styled-components";
import { useHistory } from "react-router";

import { Flex } from "components/Flex";
import { Box } from "components/Box";
import { Image } from "components/Image";
import { Text } from "components/Text";

import { AiFillStar } from "react-icons/ai";

export const MovieCard = ({
  index,
  poster_path,
  title,
  vote_average,
  release_date,
  overview,
  vote_count,
  id,
  ...props
}) => {
  const theme = useTheme();
  const history = useHistory();

  return (
    <Box
      width="fit-content"
      onClick={() => history.push(`/movie/${id}`)}
      {...props}
    >
      <Flex flexDirection="column" maxWidth={500} width={1}>
        <Flex justifyContent="center" width="100%">
          <Image img={`http://image.tmdb.org/t/p/w300${poster_path}`} />
        </Flex>

        <Flex
          maxWidth={300}
          mt={6}
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Text fontWeight={3} color="blue">
            <Text mr={2} color="black" fontWeight={1}>
              {`${index + 1}.`}
            </Text>
            {title}
            <Text ml={2} color="gray" fontWeight={1}>
              {`(${moment(release_date, "YYYY-MM-DD").format("YYYY")})`}
            </Text>
          </Text>
          <Flex mt={4}>
            <AiFillStar color={theme.colors.yellow} size={14} />
            <Text fontSize="small">{vote_average}</Text>
          </Flex>

          <Flex mt={2} width="100%" maxHeight={200} overflow="hidden">
            <Text textAlign="justify" fontSize="medium">
              {overview}
            </Text>
          </Flex>

          <Text mt={2} fontSize="xsmall" color="gray">
            Votes: {vote_count}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
