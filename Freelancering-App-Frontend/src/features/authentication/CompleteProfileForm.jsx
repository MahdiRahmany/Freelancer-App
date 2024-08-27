import { useState } from "react";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8">
          <TextField
            label="نام و نام خانوادگی"
            name="email"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label="ايميل"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-center gap-x-8">
            <div className="flex items-center gap-x-2 text-secondary-600">
              <input
                className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
                type="radio"
                name="role"
                id="OWNER"
                value="OWNER"
              />
              <label htmlFor="OWNER">كارفرما</label>
            </div>
            <div className="flex items-center gap-x-2 text-secondary-600">
              <input
                className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
                type="radio"
                name="role"
                id="FREELANCER"
                value="FREELANCER"
              />
              <label htmlFor="FREELANCER">فريلنسر</label>
            </div>
          </div>
          <button className="btn btn--primary w-full">تاييد</button>
        </form>
      </div>
    </div>
  );
}
export default CompleteProfileForm;
