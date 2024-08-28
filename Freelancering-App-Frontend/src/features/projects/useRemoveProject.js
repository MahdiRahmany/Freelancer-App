import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeProjectApi } from "../../services/projectService";

export function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi(id),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-project"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { removeProject, isDeleting };
}
