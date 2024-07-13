import React from 'react';
import '../popup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePicker from 'react-horizontal-datepicker';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface CaloriIntakePopupProps {
  setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalorieIntakePopup: React.FC<CaloriIntakePopupProps> = ({ setShowCalorieIntakePopup }) => {
  const color = '#ffc20e';
  const [date, setDate] = React.useState<any>(new Date());
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  const selectedDay = (val: any) => {
    console.log(val);
    setDate(val); // Ensure state is updated when a date is selected
  };

  return (
    <div className='popupout'>
      <div className='popupbox'>
        <button className='close' onClick={() => setShowCalorieIntakePopup(false)}>
          <AiOutlineClose />
        </button>

        <DatePicker
          getSelectedDay={selectedDay}
          endDate={new Date(Date.now() + 100 * 24 * 60 * 60 * 1000)} // Updated endDate to be a valid date object
          selectDate={new Date()}
          labelFormat={"MMMM"}
          color={color}
        />

        <TextField id="outlined-basic" label="Food item name" variant="outlined" color="warning" />
        <TextField id="outlined-basic" label="Food item amount (in gms)" variant="outlined" color="warning" />

        <div className='timebox'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeClock value={value} onChange={(newValue) => setValue(newValue)} />
          </LocalizationProvider>
        </div>

        <Button variant="contained" color="warning">
          Save
        </Button>

        <div className='hrline'></div>

        <div className='items'>
          {['Apple', 'Banana', 'Rice'].map((item, index) => (
            <div className='item' key={index}>
              <h3>{item}</h3>
              <h3>{`${(index + 1) * 100} gms`}</h3>
              <button> <AiFillDelete /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalorieIntakePopup;
