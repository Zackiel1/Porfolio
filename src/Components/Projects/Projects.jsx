import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProjectsCards from "./ProjectsCards";
import projectList from "./ProjectsList.js";

const Projects = () => {
  return (
    <Box
      height="fit-content"
      minWidth="600px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginBottom="40px"
    >
      <Typography variant="h3" marginTop="70px" marginBottom="50px">
        Mis Proyectos
      </Typography>

      <Box
        //height="fit-content"
        display="flex"
        justifyContent="center"
        alignItems="center" 
        gap="20px" 
      >
        {
            projectList.map(item => {
                return(
                    <ProjectsCards 
                        key={item.title}
                        title={item.title}
                        img={item.img}
                    />
                )
            })
        }
        

      </Box>
    </Box>
  );
};

export default Projects;
