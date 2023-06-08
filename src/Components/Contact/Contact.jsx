import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Contact = () => {
  return (
    <Box
      height="fit-content"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="auto"
      marginBottom="40px"
      width="600px"
    >
      <Typography variant="h3" marginTop="70px" marginBottom="50px">
        Contacto
      </Typography>

      <Box
        width="600px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="initial"
        gap="20px"
        component="form"
        autoComplete="off"
      >
        <TextField
          id="email"
          type="email"
          label="Email"
          variant="outlined"
          required
        />

        <TextField
          id="asunto"
          type="text"
          label="Asunto"
          variant="outlined"
          required
        />

        <TextField
          id="texto"
          multiline
          rows={5}
          rowsMax={10}
          label="Comentario"
          variant="outlined"
          required
        />
        <Button variant="contained" type="submit"  color="primary">
          Enviar
        </Button>
      </Box>

      <Box display="flex" flexDirection="row" padding="40px">
      <IconButton>
        <img src='../../../img/linkedin.png'/>
      </IconButton>
      <IconButton sx={{ml: "16px"}}>
        <img src='../../../img/gmail.png'/>
      </IconButton>
    </Box>
    </Box>
  );
};

export default Contact;
