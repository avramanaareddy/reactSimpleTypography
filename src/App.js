import React from "react";
import "./styles.css";
import { Typography, Button } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <h1>మెటీరియల్ యుఐ టైపోగ్రఫి </h1>
      <Typography variant="h4" color="primary">
        ఆత్మ జ్ఞాని:{" "}
        <Typography variant="h5" color="secondary" component="span">
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
      <br />
      <br />
      <Typography variant="h4" align="left" color="primary">
        రాతను ఎడమపక్కకు పెట్టుట{" "}
      </Typography>
      <br />
      <br />
      <Typography variant="h4" align="center" color="secondary">
        రాతను నడుమ పెట్టుట{" "}
      </Typography>
      <br />
      <br />
      <Typography variant="h4" align="right" color="default">
        రాతను కుడి పక్కకు పెట్టుట{" "}
      </Typography>
      <Typography color="primary" wrap>
        మన అమ్మనుడి అయిన తెలుగు గొప్పదనం ఎంత చెప్పినా తక్కువే. తెలుగులోని మాటలు
        ఎంతో యెఱుక[wisdom ] తో కూడుకొని ఉన్నాయి అని చెప్పుకోవచ్చు. ఎల్ల[every ]
        తెలుగు మాటలను లోతుగా చూస్తే ఎంత యెఱుక అందులో దాగి ఉన్నదో తెలియును.
        మచ్చుకు ఈ మాటలను తీసుకొని చూద్దాము. ఎల్లిగాడు, మల్లిగాడు, అనే మాటలను
        విడదీస్తే ఎల్లి+గ +ఆడు=> ఎల్లిగా ఆడేవాడు. మల్లి+గ+ ఆడు=> మల్లిగా
        ఆడేవాడు. ఇక్కడ ఎవరు ఆడుతున్నది ఎల్లిగా అని అంటే ఎల్లిగాని ఒంటినిండా
        పైనుండి కిందికి సత్తుగా పరచబడి రవ్వ రవ్వలోను కదలిక సత్తుగా ఉండి మన
        ఒంటిని ఆడిస్తున్నది ఎదరి[ఆత్మ] . అందుకే ఆ మాట వింటే మనకు ఏమి
        గుర్తురావాలి అంటే ఎల్లిగాని గా ఎల్లిగాని ఒంటిని అడిస్తున్నాడు అని
        తెల్లం[understand ] అవుతున్నది. కాబట్టి ఎల్లిగాడు అను మాట యెఱుక తో కూడి
        ఉన్న మాట.
      </Typography>
    </div>
  );
}
