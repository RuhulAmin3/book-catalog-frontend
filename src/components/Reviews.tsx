/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Avatar, Typography } from '@material-tailwind/react'
import { useGetAllReviewQuery } from '../redux/review/reviewApi'
import Loading from './Loading';

interface IProps {
  id: string
}
const Reviews = ({ id }: IProps) => {
  const { data, isLoading, isError, isSuccess } = useGetAllReviewQuery(id);
  console.log(data)
  let content;
  if (isLoading) {
    content = <Loading />
  } else if (!isLoading && isError) {
    content = "something is wrong"
  } else if (!isLoading && !isError && isSuccess) {
    content = data?.data?.map((review: any, idx: any) => <div key={idx} className="flex items-center gap-4 mb-2">
      <Avatar src='' alt="avatar" withBorder={true} color="green" />
      <div>
        <Typography variant="h6">
          {`${review?.user?.firstName} ${review?.user?.lastName}`}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">{review?.review}
        </Typography>
      </div>
    </div>)
  }
  return content;
}

export default Reviews
