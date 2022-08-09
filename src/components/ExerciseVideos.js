import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  if (!exerciseVideos.length) {
    return <Loader />;
  }
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p={"20px"}>
      <Typography variant='h5' mb={5} ml={7}>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "40px", xs: "0px" },
        }}
        ml={7}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target={"_blank"}
            rel='noreferrer'
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              width={"100%"}
            />
            <Box>
              <Typography variant='h6' color='#000'>
                {item.video.title}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
