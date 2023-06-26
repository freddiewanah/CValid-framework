import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Credential } from "../../pages/learner-dashboard";
import { useCredentialOptInPera } from "../CredentialOptInPera";
import CardMedia from "@mui/material/CardMedia";
import CircleIcon from "@mui/icons-material/Circle";
import { event as GAEvent } from "nextjs-google-analytics";

interface CredentialCardProps {
  credential: Credential;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const CredentialCard = ({ credential }: CredentialCardProps) => {
  const { optInAssetPera } = useCredentialOptInPera();
  // console.log("credential", credential);
  const handleOptIn = async (credential: Credential) => {
    optInAssetPera(credential).then(async (res) => {
      console.log(res);
      if (res) {
        //call the api to get the updated list of credentials
        const dbRes = await fetch("api/credentials?action=optin", {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("AccessToken"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            txnId: credential.txn_id,
            to: credential.to_address,
          }),
        });
        // console.log("response from db", dbRes);
        if (dbRes.status === 200) {
          alert("Opted in successfully");
          //refresh the page
          window.location.reload();
        } else {
          alert("Opt in failed");
        }
      } else {
        alert("Opted in failed");
      }
    }).catch((err) => {
        alert("Opted in failed");
    });

  };

  const credentialCardStatus = () => {
    switch (credential.status) {
      case "CREATED":
        return (
          <Typography sx={{ mb: 1.5 }} color="text.secondary" fontSize="small">
            <CircleIcon color="error" fontSize="small" />
            WAIT FOR OPT_IN
          </Typography>
        );
      case "OPT_IN":
        return (
          <Typography sx={{ mb: 1.5 }} color="text.secondary" fontSize="small">
            <CircleIcon color="warning" fontSize="small" />
            PROCESSING BY ISSUER
          </Typography>
        );
      case "FINISHED":
        return (
          <Typography sx={{ mb: 1.5 }} color="text.secondary" fontSize="small">
            <CircleIcon color="success" fontSize="small" />
            ACTIVE
          </Typography>
        );
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        marginTop: "1rem",
        marginBottom: "1rem",
        maxWidth: "450px",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {credential.asset_index}
          </Typography>
          <Typography variant="h5" component="div">
            {credential.asset_name}
          </Typography>
          {credentialCardStatus()}
          <Typography variant="body2">
            Issuer: {credential.firstname} {credential.lastname}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            sx={{ marginRight: "2rem" }}
            disabled={
              credential.status == "OPT_IN" || credential.status == "FINISHED"
            }
            variant="outlined"
            size="small"
            onClick={() => {
              handleOptIn(credential);
            }}
          >
            {credential.status == "CREATED" ? "OptIn to Receive" : "OptedIn"}
          </Button>

          <Button
            variant="contained"
            size="small"
            href={credential.asset_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              GAEvent("submit_form", {
                category: "Click",
                label: "ViewCredential",
              });
            }}
          >
            View
          </Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/CValidImages/DemoCertificate.png"
        alt="Credential details"
      />
    </Card>
  );
};

export default CredentialCard;
