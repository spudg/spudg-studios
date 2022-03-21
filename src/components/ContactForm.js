import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button, Checkbox, FormControlLabel, Link } from "@mui/material";
import { purple } from "@mui/material/colors";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#663ab6",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#663ab6",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#663ab6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#663ab6",
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  fontFamily: "Nunito",
  textTransform: "none",
  color: theme.palette.getContrastText("#663ab6"),
  backgroundColor: "#663ab6",
  "&:hover": {
    backgroundColor: "#522f91",
  },
}));

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/f64897a0-a8f1-11ec-975b-f9cc2b0e6900";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div style={{ margin: "20px" }}>
        <CssTextField type="text" name="name" label="Name" required />
      </div>
      <div style={{ margin: "20px" }}>
        <CssTextField type="email" name="email" label="Email" required />
      </div>
      <div style={{ margin: "20px" }}>
        <CssTextField type="text" name="message" label="Message" required />
      </div>
      <div style={{ margin: "20px" }}>
        <FormControlLabel
          control={<Checkbox name="privacy-policy" required />}
          label={
            <p style={{ fontFamily: "Nunito" }}>
              I agree to the &nbsp;
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://docs.google.com/document/d/1Z1zndT180b9o-KQtEH5n1qVarvOOhSZ6xgLC2fvxglQ/edit?usp=sharing"
                  );
                }}
              >
                Privacy Policy
              </Link>
              &nbsp; and &nbsp;
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://docs.google.com/document/d/1w0e1VhutYVjfKlNxMxbNOnMwxEZ4p9oyR6V67hgQNUw/edit?usp=sharing"
                  );
                }}
              >
                Terms of Use
              </Link>
              .
            </p>
          }
        />
      </div>
      <div style={{ margin: "20px" }}>
        <ColorButton type="submit" variant="outlined">
          Submit
        </ColorButton>
      </div>
    </form>
  );
};

export default ContactForm;
