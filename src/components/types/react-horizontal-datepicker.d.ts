declare module 'react-horizontal-datepicker' {
    import * as React from 'react';
  
    interface DatePickerProps {
      getSelectedDay: (selectedDate: Date) => void;
      endDate?: Date;
      startDate?: Date;
      selectDate?: Date;
      selectedDayBackgroundColor?: string;
      selectedDayColor?: string;
      unselectedDayBackgroundColor?: string;
      unselectedDayColor?: string;
      activeDayBackgroundColor?: string;
      activeDayColor?: string;
      dayNameFormat?: string;
      dayNumberFormat?: string;
      dayNameColor?: string;
      dayNumberColor?: string;
      disabledDayColor?: string;
      onDateChange?: (date: Date) => void;
      labelFormat?: string;  // Add labelFormat prop
      color?: string;  // Add color prop
    }
  
    const DatePicker: React.FC<DatePickerProps>;
  
    export default DatePicker;
  }
  
  
  