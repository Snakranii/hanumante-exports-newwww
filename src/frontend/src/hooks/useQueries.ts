import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { ContactFormInput, ContactSubmission } from "../backend.d";

function useBackendActor() {
  return useActor(createActor);
}

export function useGetContactSubmissions() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation<ContactSubmission, Error, ContactFormInput>({
    mutationFn: async (input: ContactFormInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContactForm(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
  });
}
