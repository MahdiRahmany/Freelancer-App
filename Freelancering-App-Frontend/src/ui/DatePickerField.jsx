import DatePicker from "react-multi-date-picker";
import persian from "react-multi-date-picker/calenders/persian";
import persian_fa from "react-multi-date-picker/locals/persian_fa";

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}
export default DatePickerField;
