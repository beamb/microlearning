import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 5,
    label: "5m",
  },
  {
    value: 10,
    label: "10m",
  },
  {
    value: 15,
    label: "15m",
  },
  {
    value: 20,
    label: "20m",
  },
  {
    value: 25,
    label: "25m",
  },
  {
    value: 30,
    label: "30m",
  },
  {
    value: 35,
    label: "35m",
  },
  {
    value: 40,
    label: "40m",
  },
  {
    value: 45,
    label: "45m",
  },
  {
    value: 50,
    label: "50m",
  },
  {
    value: 55,
    label: "55m",
  },
  {
    value: 60,
    label: "60m",
  },
];

const valuetext = (value) => {
  return `${value} minutes`;
};

export const IntervalSlider = ({
  interval,
  handleAllIntervals,
  allDisabled,
}) => {
  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
    handleAllIntervals(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={interval}
        getAriaValueText={valuetext}
        onChange={handleSliderChange}
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={marks}
        valueLabelDisplay="auto"
        min={5}
        max={60}
        disabled={allDisabled}
      />
    </div>
  );
};

export default IntervalSlider;
