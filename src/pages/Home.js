import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [fetchedExercises, setFetchedExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setFetchedExercises={setFetchedExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        fetchedExercises={fetchedExercises}
        setFetchedExercises={setFetchedExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
