import * as React from "react";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { createTheme } from "@mui/material/styles";

dayjs.extend(isBetweenPlugin);

const theme = createTheme({
  palette: {
    black: "#000000",
    0: "#FFFFFF",
    1: "#DEF5E5",
    2: "#BCEAD5",
    3: "#9ED5C5",
    4: "#8EC3B0",
  }, // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
});

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "count" && prop !== "isFirstDay" && prop !== "isLastDay",
})(({ theme, count }) => ({
  ...{
    borderRadius: 0,
    backgroundColor: theme.palette[count],
    color: theme.palette.black,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  // ...(isLastDay && {
  //   borderRadius: 0,
  //   backgroundColor: theme.palette.list.one,
  //   color: theme.palette.list.black,
  //   "&:hover, &:focus": {
  //     backgroundColor: theme.palette.primary.dark,
  //   },
  // }),
}));

export default function Calendar() {
  const [value, setValue] = React.useState(dayjs());
  // 1. GET : date와 개수 정보 받아오기
  // TODO : date를 dayjs에서 다른 format으로 바꾸기
  const getList = [
    { date: "2023-02-01", count: 4 },
    { date: "2023-02-02", count: 3 },
    { date: "2023-02-03", count: 2 },
    { date: "2023-02-04", count: 1 },
    { date: "2023-02-05", count: 2 },
  ];

  const dateList = getList.map((data) => {
    return { date: dayjs(data.date), count: data.count };
  });

  // 모든 일에 대해 검사
  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    // console.log(selectedDates); // 선택한 날
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }
    const today = dateList.find((element) => date.isSame(element.date, "day"));
    // const start = value.startOf("month");
    // const end = value.endOf("month");
    // // var now = dayjs();
    // // console.log(date);
    // // for (let i = start; i < end; i++) {
    // //   if (i % 7 === 1) console.log(1);
    // // }

    // // const dayIsBetween = date.isBetween(start, end, null, "[]");
    // const isFirstDay = date.isSame(start, "day");
    // const isLastDay = date.isSame(end, "day");
    // console.log(isLastDay);
    // const today = date.isSame(now, "day");

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        theme={theme}
        // dayIsBetween={dayIsBetween}
        // isFirstDay={isFirstDay}
        // isLastDay={isLastDay}
        // today={today}
        count={today === undefined ? undefined : today.count}
      />
    );
  };
  //
  return (
    <div className="calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          label="Week picker"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderDay={renderWeekPickerDay}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="'Week of' MMM d"
        />
      </LocalizationProvider>
      <style jsx>
        {`
          .calendar {
            margin-top: 10%;
          }
        `}
      </style>
    </div>
  );
}
