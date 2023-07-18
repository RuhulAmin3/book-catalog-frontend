
import { Avatar, Typography } from '@material-tailwind/react'

const Reviews = () => {
  return (
    <div className="flex items-center gap-4">
    <Avatar src="/img/face-2.jpg" alt="avatar" withBorder={true} color="green" />
    <div>
      <Typography variant="h6">Tania Andrew</Typography>
      <Typography variant="small" color="gray" className="font-normal">Web Developer</Typography>
    </div>
  </div> 
  )
}

export default Reviews