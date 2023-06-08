import { Box, color } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import skillsList from "./SkillsList";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <Box sx={{ height: "fit-content" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minWidth="600px"
      >
        <Typography variant="h3" marginTop="70px" marginBottom="50px">
          Acerca de mi..
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          gap="40px"
          height="100%"
          justifyContent="center"
        >
          <Box width="400px" p="20px">
            <h2>¿Quien soy?</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Explicabo nihil illum hic, eos corporis eius impedit quis nisi
              <br />
              corrupti dolor dicta fugit pariatur sapiente quaerat eveniet,
              <br />
              debitis neque distinctio suscipit?
              <br />
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Explicabo nihil illum hic, eos corporis eius impedit quis nisi
              <br />
              corrupti dolor dicta fugit pariatur sapiente quaerat eveniet,
              <br />
              debitis neque distinctio suscipit?
            </p>
          </Box>

          <Box width="400px" gap="8px" p="20px" display="flex" flexWrap="wrap">
            <Typography variant="h6" paddingTop="20px">
              Conocimientos y habilidades en...
            </Typography>
            {skillsList.map((item) => {
              return (
                <SkillsCard
                  key={item.title}
                  img={item.img}
                  title={item.title}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
