import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUsersStatusApi } from "../../../services/authService";

export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUsersStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeUserStatus };
}
