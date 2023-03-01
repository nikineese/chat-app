import { colors } from "@mui/material";
export const getRandomColor = () => {
  const objColors = Object.values(colors);
  const propColor = Object.values(
    objColors[Math.floor(Math.random() * objColors.length)]
  );

  return propColor[4];
};
