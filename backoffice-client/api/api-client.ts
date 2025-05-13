import ky from "ky";

export const baseApiClient = ky.create({
  prefixUrl: "http://localhost:8081",
});

export const apiClient = baseApiClient.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/api`,
  credentials: "include",
  timeout: false,
}));
