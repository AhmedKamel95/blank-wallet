import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { TransactionCard, FormCard, SuccessCard } from "./components";
import "./App.css";

import AppState from "./context/background/AppState";

const App = () => {
  const [index, setIndex] = useState<number>(0);

  const handleChangeView = (index: number) => () => setIndex(index);

  return (
    <AppState>
      <Container>
        <Grid
          container
          wrap="nowrap"
          justifyContent="center"
          className="App-container"
        >
          <TransactionCard index={index} handleChangeView={handleChangeView} />
          <FormCard index={index} handleChangeView={handleChangeView} />
          <SuccessCard index={index} handleChangeView={handleChangeView} />
        </Grid>
      </Container>
    </AppState>
  );
};

export default App;
