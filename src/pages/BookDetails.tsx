import { Button, CardBody, CardHeader, Typography } from "@material-tailwind/react"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom"
import AddReview from "../components/AddReview";
import Description from "../components/Description";
import Reviews from "../components/Reviews";

const BookDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const data = [
    {
      label: "Description",
      value: "description",
      desc: <Description title="title" description="description" author="author" price="45"/>,
    },
    {
      label: "Add Review",
      value: "review",
      desc: <AddReview/>,
    },
    {
      label: "Reviews",
      value: "reviews",
      desc: <Reviews/>,
    }
  ]
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <CardHeader shadow={false} floated={false} className="w-full shrink-0 m-0 rounded-r-none h-auto">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
          alt="cover image" 
          className="w-full h-full object-cover"
        />
      </CardHeader>
      </div>
      <div className="col-span-8">
      <CardBody>
        {/* <Typography variant="h6" color="blue" className="uppercase mb-4">Title: startups</Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Author: Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="font-normal mb-8">
          Description: Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
        </Typography>
        <Link to={"/edit-book/1"}> 
        <Button color="green">Edit Book</Button> 
        </Link> */}
        <Tabs value={activeTab}>
       <TabsHeader>
    {data.map(({ label, value }) => (
      <Tab key={value} value={value}>
        {label}
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody>
    {data.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
        {desc}
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>
      </CardBody>
      </div>
    </div>
  )
}

export default BookDetails