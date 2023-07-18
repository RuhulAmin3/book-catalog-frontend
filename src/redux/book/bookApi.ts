import { BookType } from "../../types/user";
import { apiSlice } from "../api/apiSlice";

export type editDataType = {
  id: string;
  data: BookType;
};

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => ({
        url: "/book",
      }),
      providesTags: ["book"],
    }),
    getBook: builder.query({
      query: (id: string) => ({
        url: `/book/${id}`,
      }),
      providesTags: ["book"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }: editDataType) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    addBook: builder.mutation({
      query: (data: BookType) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useEditBookMutation,
  useGetAllBookQuery,
  useGetBookQuery,
  useDeleteBookMutation,
} = bookApi;
