import React from "react";

import moment from "moment";

import { useTheme } from "styled-components";
import { useHistory } from "react-router";
import { useQuery } from "react-query";

import { getMovies } from "api/movies";

import { Flex } from "components/Flex";
import { Box } from "components/Box";
import { Loading } from "components/Loading";
import { Image } from "components/Image";
import { Text } from "components/Text";

import { AiFillStar } from "react-icons/ai";

export const Home = () => {
  const theme = useTheme();
  const history = useHistory();
  const { data: movies, isLoading } = useQuery("movies", getMovies);

  if (isLoading) {
    return <Loading full />;
  }

  return (
    <Flex width="100%" justifyContent="center">
      <Flex justifyContent="center" flex={1} flexWrap="wrap">
        {movies.map((item, i) => (
          <Box
            mx={5}
            onClick={() => history.push(`/movie/${item.id}`)}
            mt={15}
            width="fit-content"
          >
            <Flex flexDirection="column" maxWidth={500} width={1}>
              <Flex justifyContent="center" width="100%">
                <Image
                  img={`http://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
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
                    {`${i + 1}.`}
                  </Text>
                  {item.title}
                  <Text ml={2} color="gray" fontWeight={1}>
                    {`(${moment(item.release_date, "YYYY-MM-DD").format(
                      "YYYY"
                    )})`}
                  </Text>
                </Text>
                <Flex mt={4}>
                  <AiFillStar color={theme.colors.yellow} size={14} />
                  <Text fontSize="small">{item.vote_average}</Text>
                </Flex>

                <Flex mt={2} width="100%" maxHeight={200} overflow="hidden">
                  <Text textAlign="justify" fontSize="medium">
                    {item.overview}
                  </Text>
                </Flex>

                <Text mt={2} fontSize="xsmall" color="gray">
                  Votes: {item.vote_count}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
