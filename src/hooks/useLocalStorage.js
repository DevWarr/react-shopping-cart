import { useState } from "react";

// STRETCH: useLocalStorage
export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    const storeValue = newValue => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value, storeValue]
}