import useSWR from "swr/immutable";
import type { Response } from "../app/api/letterboxd/latest/get-latest-film";
import fetcher from "@/lib/utils";

export function useLatestFilm(): Partial<Response> {
  const { data } = useSWR<Response>("/api/letterboxd/latest", fetcher, {
    revalidateIfStale: true,
  });

  return data ?? {};
}
