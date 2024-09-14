import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null || storedValue === undefined || storedValue === '') {
      // اگر مقدار موجود نباشد، از مقدار پیش‌فرض استفاده می‌کند
      return initialState;
    }
    try {
      return JSON.parse(storedValue);
    } catch (error) {
      console.error(`Error parsing localStorage value for key "${key}":`, error);
      return initialState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage value for key "${key}":`, error);
    }
  }, [value, key]);

  return [value, setValue];
}
