import React from "react";

import moment from "moment";

import { useTheme } from "styled-components";
import { useHistory, useParams } from "react-router";
import { useQuery } from "react-query";

import { getMovieById } from "api/movies";

import { Flex } from "components/Flex";
import { Box } from "components/Box";
import { Loading } from "components/Loading";
import { Image } from "components/Image";
import { Text } from "components/Text";

import { AiFillStar } from "react-icons/ai";

export const Movie = () => {
  const { id } = useParams();
  const theme = useTheme();
  const history = useHistory();

  const { data: movie, isLoading } = useQuery("movieById", () =>
    getMovieById(id)
  );

  if (isLoading) {
    return <Loading full />;
  }

  return (
    <Flex
      mx={{ _: 10, mobile: 15, tablet: "50px" }}
      flex={1}
      mt={{ _: 8, mobile: 10, tablet: "40px" }}
      alignItems="baseline"
      flexDirection="column"
    >
      <Flex flex={1}>
        <Text
          fontSize="medium"
          color="gray"
          mb={3}
          onClick={() => history.push("/home")}
        >
          Back to home
        </Text>
      </Flex>
      <Flex justifyContent="center" width="100%">
        <Image img={`http://image.tmdb.org/t/p/w780${movie.poster_path}`} />
      </Flex>

      <Flex
        mt={10}
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Text fontSize="large" fontWeight={3}>
          {movie.title}
          <Text ml={2} color="gray" fontWeight={1}>
            {`(${moment(movie.release_date, "YYYY-MM-DD").format("YYYY")})`}
          </Text>
        </Text>
        <Flex alignItems="center" mt={4}>
          <AiFillStar color={theme.colors.yellow} size={25} />
          <Text ml={3} fontSize="large">
            {movie.vote_average}
          </Text>
        </Flex>

        <Flex mt={5} width="100%" maxHeight={200} overflow="hidden">
          <Text textAlign="justify" fontSize="large">
            {movie.overview}
          </Text>
        </Flex>
      </Flex>

      <Flex mt={4}>
        <Text fontWeight={2}>Companies:</Text>
        <Box ml={3} display="inline-block">
          {movie.production_companies.map((company, i) => (
            <Text>{i !== 0 ? `, ${company.name}` : company.name}</Text>
          ))}
        </Box>
      </Flex>
      <Flex mt={2}>
        <Text fontWeight={2}>Genres:</Text>
        <Box ml={3} display="inline-block">
          {movie.genres.map((genre, i) => (
            <Text>{i !== 0 ? `, ${genre.name}` : genre.name}</Text>
          ))}
        </Box>
      </Flex>
      <Flex mt={3} alignItems="center">
        <Text fontSize="small" color="gray">
          Votes: {movie?.vote_count}
        </Text>
        <Text ml={5} fontSize="small" color="gray">
          Popularity: {movie?.popularity}
        </Text>
        <Text ml={5} fontSize="small" color="gray">
          Budget: $
          {movie?.budget.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
        </Text>
      </Flex>
    </Flex>
  );
};
