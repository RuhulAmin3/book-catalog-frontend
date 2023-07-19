/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { apiSlice } from "../api/apiSlice";

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getAllReview: builder.query({
      query: (id: string) => ({
        url: `/review/${id}`,
      }),
      providesTags: ["review"],
    }),
  }),
});

export const { usePostReviewMutation, useGetAllReviewQuery } = reviewApi;
