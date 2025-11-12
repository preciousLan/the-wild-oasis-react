import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";


export function useCreateCabin({ reset = () => {}, isEditSession }){

    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
        toast.success(isEditSession ? "Cabin edited successfully" : "New cabin created");
      queryClient.invalidateQueries(["cabins"]);
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
});
return {isPending, mutate}
}