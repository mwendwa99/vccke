import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Container,
  Typography,
} from "@mui/material";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xrgwjpdv"); // Replace with your actual Formspree form ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container maxWidth="md" sx={{ minHeight: "50vh", mt: 4 }}>
      <Paper elevation={0} sx={{ p: 2 }}>
        <Typography align="center" variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </Button>
            </Grid>
            {state.succeeded && <p>Thank you for your message!</p>}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactForm;
