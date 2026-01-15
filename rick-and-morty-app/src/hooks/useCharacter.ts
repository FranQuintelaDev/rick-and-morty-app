import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../services/api";

export function useCharacter(id: number | undefined) {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacter(id!),
    enabled: !!id, 
  })
}