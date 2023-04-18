import React from "react"
import Slider from "@mui/material/Slider"
import { Typography } from "@mui/material"
import { Stack } from "@mui/system"

// Destructure props
const SliderComp = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps
}) => {
  return (
    // Using MUI Stack component to stack comps vertically.
    // my is shorthand for marginY [margin-top & margin-bottom].
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      {/* Using MUI Slider component to display sliders */}
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
        marks
        step={steps}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>

  )
}

export default SliderComp