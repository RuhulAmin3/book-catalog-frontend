import { LoginUserType, UserType } from "../../types/user";
import { apiSlice } from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (data: UserType) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data: LoginUserType) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignupUserMutation, useLoginUserMutation } = userApi;
