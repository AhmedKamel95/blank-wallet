import { useContext, useRef, SyntheticEvent } from "react";
import moment from "moment";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AppContext from "context/background/AppContext";
import { idGenerator } from "utils/utilities";
import { IComponent } from "utils/interfaces";
import "../App.css";

const FormCard = ({ index, handleChangeView }: IComponent): JSX.Element => {
  const recipientRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const { addTransaction } = useContext(AppContext);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    addTransaction({
      id: idGenerator(),
      to: recipientRef.current?.value,
      from: "Ahmed Kamel",
      value: Number(amountRef.current?.value),
      date: moment(new Date()).format("DD-MM-YYYY hh:mm"),
    });
    handleChangeView(2)();
    //@ts-ignore
    recipientRef.current.value = null;
    //@ts-ignore
    amountRef.current.value = null;
  };

  return (
    <Card hidden={index !== 1} sx={{ width: 350, height: 650 }}>
      <CardHeader
        avatar={
          <IconButton onClick={handleChangeView(0)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        }
        title="Send Ether"
        titleTypographyProps={{
          fontSize: "1.4em",
          fontWeight: "bold",
          textAlign: "end",
        }}
      />
      <form onSubmit={handleSubmit}>
        <CardContent sx={{ height: "75%" }}>
          <TextField
            fullWidth
            margin="normal"
            label="Add Recipient"
            variant="outlined"
            inputRef={recipientRef}
            placeholder="John Doe"
            inputProps={{
              required: true,
            }}
          />
          <TextField
            fullWidth
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              title: "Only digits are allowed",
              required: true,
            }}
            margin="normal"
            placeholder="250"
            label="Amount"
            variant="outlined"
            inputRef={amountRef}
          />
        </CardContent>
        <CardActions>
          <Button variant="outlined" fullWidth onClick={handleChangeView(0)}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" fullWidth>
            Next
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default FormCard;
