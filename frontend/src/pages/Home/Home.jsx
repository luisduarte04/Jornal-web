import Cards from "../../components/Cards/Cards";
import Header  from "../../components/Header/Header";
import { news } from "../../../Data"


export default function Home() {
  return (
    <>
    <Header/>
    
    {news.map((item, index) => {
      return <Cards key={index} news={item} />
    })}

    </>
  )
}
