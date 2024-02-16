import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../mainApiClient";
import useRegisterArtistStore from "./store";
import { AxiosError } from "axios";

interface UserInfo {
    _id: string;
    token: string;
}
interface ErrorMessage {
    message?: string;
}

const useRegister = () => {
    const setArtistInfo = useRegisterArtistStore((s) => s.setArtistInfo);
    const register = useMutation<UserInfo, AxiosError<ErrorMessage>, string>({
        mutationFn: async (username: string) => {
            try {
                const { data } = await axiosInstance.post<UserInfo>(
                    "artist/profile/register",
                    {
                        username,
                    }
                );
                setArtistInfo(data._id!, data.token!);
                return data;
            } catch (error) {
                const errorMessage = error as { response?: { data?: Error } };
                throw errorMessage.response?.data;
            }
        },
    });
    return register;
};

export default useRegister;
