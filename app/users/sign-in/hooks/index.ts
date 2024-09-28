"use client";
import { useProcessStatus } from "@/app/hooks/useProcessStatus";
import { useBrowser } from "@/app/hooks/useBrowser";
import { post } from "../api";
import { SignInProps } from "../types";

export const useSignInProcess = () => {
  const process = useProcessStatus();
  const browser = useBrowser();

  const signIn = (user: SignInProps) => {
    post(user, {
      initPost() {
        process.setLoading();
      },
      endPostWithSuccess() {
        process.setSuccess();
        browser.toHomePage();
      },
      endPostWithProblems(error) {
        process.setError(error);
      },
    });
  };

  const { isError, isLoading, getInformation } = process;
  return {
    iniciarSesion: signIn,
    huboUnError: isError,
    estaCargando: isLoading,
    obtenerInformacion: getInformation,
  } as const;
};
