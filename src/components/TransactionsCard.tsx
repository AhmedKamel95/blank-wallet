import { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  Grid,
  Divider,
  Box,
  List,
  ListItem,
} from "@mui/material";
import AppContext from "context/background/AppContext";
import mockData from "utils/constants";
import { ethToUSD } from "utils/utilities";
import ArrowIcon from "assets/arrow.svg";
import icon from "assets/eth_logo.png";
import { IComponent } from "utils/interfaces";
import "../App.css";

const TransactionCard = ({
  index,
  handleChangeView,
}: IComponent): JSX.Element => {
  const {
    state: { transactions },
  } = useContext(AppContext);

  return (
    <Card hidden={index !== 0} sx={{ width: 400, maxHeight: 650 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "black" }}>A</Avatar>}
        title="Account 1"
        subheader="0xb95C...6Baa"
        titleTypographyProps={{ fontWeight: "bold" }}
      />
      <CardContent>
        <Box className="account_details">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {mockData.accountBalance} ETH
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            $ {mockData.ethPrice.toFixed(2)} USD
          </Typography>
          <div className="send_icon_background" onClick={handleChangeView(1)}>
            <img src={ArrowIcon} className="send_icon" alt="send" />
          </div>

          <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
            Send
          </Typography>
        </Box>

        <List sx={{ maxHeight: "300px", overflow: "auto" }}>
          {transactions.map((transaction) => (
            <>
              <ListItem disableGutters>
                <Grid item xs={2}>
                  <div className="ethereum_icon_background">
                    <img src={icon} className="ethereum_icon" alt="logo" />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: "0.9em", fontWeight: "bold" }}>
                    Sent Ether
                  </Typography>
                  <Typography variant="subtitle2">
                    {transaction.date}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs={4}
                  alignItems="flex-end"
                  flexDirection="column"
                >
                  <Typography sx={{ fontSize: "0.9em", fontWeight: "bold" }}>
                    {transaction.value} ETH
                  </Typography>
                  <Typography variant="subtitle2">
                    ${ethToUSD(Number(transaction.value))} USD
                  </Typography>
                </Grid>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
