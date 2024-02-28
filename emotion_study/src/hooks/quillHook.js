import { useState } from "react";

export function useQuillInput() {
    const [ quillValue, setQuillValue ] = useState("");
    const onChnage = (value) => {
        setQuillValue(() => value);
    }
    return [ quillValue, onChnage ];
}