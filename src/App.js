import React, { useState } from "react"
import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import Navbar from "./Components/Navbar"
import Result from "./Components/Result"
import SliderSelect from "./Components/SliderSelect"
import LoanTermSelect from "./Components/LoanTermSelect"

export default function App() {
  // Set default values for sliders
  const [ data, setData ] = useState({
    homeValue: 3000,
    downPayment: 3000 * .02,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  })

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect  data={data} setData={setData}/>
            <LoanTermSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}