import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import { optionsApi, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setFetchedExercises, bodyPart, setBodyPart }) => {
  const [searchExercise, setSearchExercise] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        optionsApi
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (searchExercise) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        optionsApi
      );
      const userSearchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchExercise) ||
          exercise.target.toLowerCase().includes(searchExercise) ||
          exercise.equipment.toLowerCase().includes(searchExercise) ||
          exercise.bodyPart.toLowerCase().includes(searchExercise)
      );
      setSearchExercise("");
      setFetchedExercises(userSearchedExercises);
    }
  };

  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb={"50px"}
        textAlign={"center"}
      >
        Amazing Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            input: { fontWeight: "500", border: "none", borderRadius: "4px" },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#ffffff",
            borderRadius: "40px",
          }}
          height={"76px"}
          value={searchExercise}
          onChange={(e) => {
            setSearchExercise(e.target.value.toLowerCase());
          }}
          placeholder='Search for Exercises'
          type={"text"}
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          positon: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart={true}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
