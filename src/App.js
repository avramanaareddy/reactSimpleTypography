import React from "react";
import "./styles.css";
import { Typography, Button } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <h1>మెటీరియల్ యుఐ టైపోగ్రఫి </h1>
      <Typography variant="h4" color="primary">
        ఆత్మ జ్ఞాని: <Typography variant="h5" color="secondary" component="span">
        ఆత్మను గురించి తెలుసుకొంటాడు
      </Typography>
      </Typography>
      <br />
      <hr />
      <hr />
      
      <br />
      మందము:{" "}
      <Button variant="contained" color="primary">
        మందము బొత్తము
      </Button>
      <br />
      <br />
      చుట్టూ గీత:{"   "}
      <Button variant="outlined" color="secondary">
        చుట్టూ గీత బొత్తము
      </Button>
      <br />
      <br />
      మొత్తము పొడుగు :{"   "}
      <Button variant="outlined" fullWidth="true" color="default">
        మొత్తము పొడుగు బొత్తము
      </Button>
      <br />
      <br />
      మరీ చిన్న బొత్తము :{"   "}
      <Button variant="outlined" size="small" fullWidth="true" color="primary">
        మరీ చిన్న బొత్తము
      </Button>
      <br />
      <br />
      చిన్న బొత్తాము :{"   "}
      <Button variant="outlined" size="medium" color="secondary">
        చిన్న బొత్తము
      </Button>
      <br />
      <br />
      పెద్ద బొత్తము :{"   "}
      <Button variant="outlined" size="large" color="default">
        పెద్ద బొత్తాము
      </Button>
    </div>
  );
}
