/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */

import { useQuery } from "react-query";
import { axiosInstance } from "./AxiosConfig";

export const CallAPI = ({
  name,
  method = "get",
  body,
  query,
  url,
  baseURL,
  headers,
  cacheTime,
  enabled = true,
  initialData,
  initialDataUpdatedAt,
  isDataEqual,
  keepPreviousData,
  meta,
  notifyOnChangeProps,
  notifyOnChangePropsExclusions,
  onError,
  onSettled,
  onSuccess,
  queryKeyHashFn,
  refetchInterval,
  refetchIntervalInBackground,
  refetchOnMount,
  refetchOnReconnect,
  refetchOnWindowFocus,
  retry = false,
  retryOnMount,
  retryDelay,
  select,
  staleTime,
  structuralSharing,
  suspense,
  useErrorBoundary,
}) => {

  return useQuery(
    name,
    () =>
      axiosInstance({
        url,
        data: body,
        method,
        headers: {
          ...headers,
        },
        params: query,
        baseURL,
      }),
    {
      cacheTime,
      enabled,
      initialData,
      initialDataUpdatedAt,
      isDataEqual,
      keepPreviousData,
      meta,
      notifyOnChangeProps,
      notifyOnChangePropsExclusions,
      onError,
      onSettled,
      onSuccess,
      queryKeyHashFn,
      refetchInterval,
      refetchIntervalInBackground,
      refetchOnMount,
      refetchOnReconnect,
      refetchOnWindowFocus,
      retry,
      retryOnMount,
      retryDelay,
      select,
      staleTime,
      structuralSharing,
      suspense,
      useErrorBoundary,
    }
  );
};
