import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

//make a the two functions a reusable components
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className='left-arrow'>
      <img src={LeftArrowIcon} alt='left-arrow' />
    </Typography>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className='right-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item, key) => (
        <Box
          Key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m={"0 40px"}
        >
          {isBodyPart ? (
            <BodyPart
              item={item}
              BodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
