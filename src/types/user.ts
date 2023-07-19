export type UserType = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type BookType = {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  price: number;
  cover: string;
  description: string;
};

export type GenericErrorMessageType = {
  path: string | number;
  message: string;
};

export type GenericErrorResponseType = {
  data: {
    statusCode: number;
    message: string;
    errorMessages: GenericErrorMessageType[];
  };
};
