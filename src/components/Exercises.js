import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import { fetchData, optionsApi } from "../utils/fetchData";

const Exercises = ({ fetchedExercises, setFetchedExercises, bodyPart }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exercisePageCount = 9;
  const indexOflastExercise = currentPage * exercisePageCount;
  const indesxOffirstExercise = indexOflastExercise - exercisePageCount;

  const currentExercise = fetchedExercises.slice(
    indesxOffirstExercise,
    indexOflastExercise
  );

  const pagePaginate = (event, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          optionsApi
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          optionsApi
        );
      }
      setFetchedExercises(exercisesData);
    };
    fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt={"50px"} p={"20px"}>
      <Typography variant="h3" mb={"46px"}>
        Showing Exercises Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={"100px"} alignItems={"center"}>
        {fetchedExercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(fetchedExercises.length / exercisePageCount)}
            page={currentPage}
            onChange={pagePaginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
