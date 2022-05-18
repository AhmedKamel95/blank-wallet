import { Card, Typography, Button, Grid, Link } from "@mui/material";
import { IComponent } from "utils/interfaces";
import paymentSuccess from "assets/payment_success.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../App.css";

const SuccessCard = ({ index, handleChangeView }: IComponent) => {
  return (
    <Card hidden={index !== 2} sx={{ width: 350, height: 650 }}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "20px", height: "100%" }}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={paymentSuccess}
            className="payment_success_img"
            alt="payment success"
          />
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Success
          </Typography>
          <Typography>You've successfully sent yout funds.</Typography>

          <Link
            underline="none"
            target="_blank"
            href="https://etherscan.io/"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "170px",
              marginTop: "20px",
            }}
          >
            View on Etherscan
            <ArrowForwardIcon color="primary" />
          </Link>
        </Grid>
        <Button variant="contained" fullWidth onClick={handleChangeView(0)}>
          Done
        </Button>
      </Grid>
    </Card>
  );
};

export default SuccessCard;
