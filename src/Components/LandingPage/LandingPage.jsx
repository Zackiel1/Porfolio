import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const LandingPage = () => {
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",

          height: "100vh",
          minWidth:"600px",
          backgroundImage: `url('../../../img/Code3.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          

          fontSize: { xs: "25px", sm: "35px", lg: "45px" },
          color: "white"
        }}
      >
       

        <Box 
        sx={{
            height: "200px",
            width: "200px",
            bgcolor: "salmon",
            backgroundImage: `url('../../../img/foto.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            mb: "15px"
        }}
        > 
            
        </Box>

        <Typography variant="p">Hola!</Typography>
        <Typography variant="p" color="blue">Soy Alejandro Fernandez</Typography>
        <Typography variant="p">Desarrollador Web Jr.</Typography>
      </Box>
  );
};

export default LandingPage;
