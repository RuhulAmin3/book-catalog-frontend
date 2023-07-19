/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, CardBody, CardHeader, Typography } from "@material-tailwind/react"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import AddReview from "../components/AddReview";
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import { useGetBookQuery } from "../redux/book/bookApi";
import Loading from "../components/Loading";

const BookDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const { data: book, isError, isSuccess, isLoading } = useGetBookQuery(id as string);
  let content;
  if (isLoading) {
    return content = <Loading />
  } else if (!isLoading && isError) {
    return content = "something is wrong"
  } else if (!isLoading && !isError && isSuccess) {
    const data = [
      {
        label: "Description",
        value: "description",
        desc: <Description book={book?.data} />,
      },
      {
        label: "Add Review",
        value: "review",
        desc: <AddReview id={id as string} />,
      },
      {
        label: "Reviews",
        value: "reviews",
        desc: <Reviews id={id as string} />,
      }
    ]
    content = <div className="grid grid-cols-12">
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
  }

  return content;
}

export default BookDetails