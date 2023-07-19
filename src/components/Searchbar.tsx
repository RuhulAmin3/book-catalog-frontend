import { Button, Input } from "@material-tailwind/react";
import homeImg from "../assets/Homepage.jpg";
import { useAppDispatch } from "../redux/hook";
import { setSearchText } from "../redux/search/searchSlice";
export default function Searchbar() {
  const dispatch = useAppDispatch();
  return (
    <figure className="h-full w-full">
      <img
        className="h-full w-full rounded-xl"
        src={homeImg}
        alt="nature image"
      />
      <figcaption className="w-[100%] mt-2 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <form className="flex flex-col md:flex-row gap-3 w-full" >
          <Input
            type="search"
            placeholder="search by title, author and genre..."
            className="min-w-full"
            onChange={(e) => dispatch(setSearchText(e.target.value))}
          />
          <Button type="submit" color="green">Search</Button>
        </form>
      </figcaption>
    </figure>
  );
}
