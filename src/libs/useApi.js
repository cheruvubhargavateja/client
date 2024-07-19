import axios from "axios";
import { useState, useEffect } from "react";
import { errorToast } from "./toast-messages";
import { useNavigate } from "react-router-dom";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

const useFetch = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const controller = new AbortController();
    // const { signal } = controller;

    const makeApiRequest = async () => {
      try {
        const response = await api({
          url,
          method: "get",
          // signal,
        });
        if (response.status == 200) {
          setData(response.data);
        } else {
          errorToast(response.data.data.message);
        }
      } catch (err) {
        // if (signal.aborted) {
        //   console.log("Request was aborted");
        // } else {
        //   errorToast(err.response.data.message);
        // }
        errorToast(err.response.data.message);
        if (err.response.status == 401 || err.response.status == 403) {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    makeApiRequest();

    // return () => {
    //   controller.abort();
    // };
  }, [url]);

  return { loading, data };
};

export default useFetch;

const useRequestApi = async (url, method, requestData = {}) => {
  try {
    const response = await api({
      url,
      method,
      data: requestData,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (err) {
    console.log("error", err);
    errorToast(err.response.data.message);
    return err;
  }
};

export { useRequestApi };
