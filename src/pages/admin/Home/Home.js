import React from "react";

import { useQuery } from "react-query";

import { getMovies } from "api/movies";

import { Flex } from "components/Flex";
import { Box } from "components/Box";
import { MovieCard } from "components/MovieCard";
import { Loading } from "components/Loading";

export const Home = () => {
  const { data: movies, isLoading } = useQuery("movies", getMovies);

  if (isLoading) {
    return <Loading full />;
  }

  return (
    <Flex width="100%" justifyContent="center">
      <Flex justifyContent="center" flex={1} flexWrap="wrap">
        {movies.map((item, i) => (
          <Box mt={15} mx={5}>
            <MovieCard index={i} {...item} />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
