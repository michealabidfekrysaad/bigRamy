import axios from "axios";
import { createContext, useState } from "react";

export const AxiosContext = createContext();
export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

const AxiosProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  return (
    <AxiosContext.Provider value={{ loader, setLoader }}>
      {children}
    </AxiosContext.Provider>
  );
};

export default AxiosProvider;
