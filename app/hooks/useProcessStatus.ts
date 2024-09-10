import { useState } from "react";

export enum Status {
  Error,
  Loading,
  Success,
  Init,
}

export type ProcessStatus = {
  status: Status;
  information: string;
};

export const useProcessStatus = () => {
  const [processStatus, setProcessStatus] = useState<ProcessStatus>({
    status: Status.Init,
    information: "Proceso iniciado",
  });

  const setLoading = () =>
    setProcessStatus({
      status: Status.Loading,
      information: "Procesando solicitud",
    });

  const setError = (message: string) =>
    setProcessStatus({ status: Status.Error, information: message });

  const setSuccess = () =>
    setProcessStatus({
      status: Status.Success,
      information: "Solicitud aprobada",
    });

  const getInformation = () => processStatus.information;
  const isLoading = () => processStatus.status === Status.Loading;
  const isError = () => processStatus.status === Status.Error;
  const isSuccess = () => processStatus.status === Status.Success;

  return {
    setLoading,
    setError,
    setSuccess,
    isLoading,
    isError,
    isSuccess,
    getInformation,
  } as const;
};
