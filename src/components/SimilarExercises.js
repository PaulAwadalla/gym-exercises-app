import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import HorizontalScrollBar from "../components/HorizontalScrollBar.js";
import Loader from "./Loader.js";

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant='h5' mb={5} ml={7}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction={"row"} sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercise.length ? (
          <HorizontalScrollBar data={targetMuscleExercise} isBodyPart={false} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant='h5' mb={5} ml={7}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction={"row"} sx={{ p: 2, position: "relative" }}>
        {equipmentExercise.length ? (
          <HorizontalScrollBar data={equipmentExercise} isBodyPart={false} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
