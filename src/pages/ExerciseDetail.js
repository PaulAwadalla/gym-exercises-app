import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { optionsApi, fetchData, youtubeOptions } from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { Box } from "@mui/material";

const ExerciseDetail = () => {
  const [exerciseDetail, setExericesDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBUrl = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      const exerciseDetailData = await fetchData(
        `${exerciseDBUrl}/exercises/exercise/${id}`,
        optionsApi
      );
      setExericesDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const exerciseTargetMuscleData = await fetchData(
        `${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,
        optionsApi
      );
      setTargetMuscleExercise(exerciseTargetMuscleData);
      const exerciseEquipmentData = await fetchData(
        `${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        optionsApi
      );
      setEquipmentExercise(exerciseEquipmentData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercise={targetMuscleExercise}
        equipmentExercise={equipmentExercise}
      />
    </Box>
  );
};

export default ExerciseDetail;
