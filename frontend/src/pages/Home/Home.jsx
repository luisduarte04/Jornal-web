import Cards from "../../components/Cards/Cards";
import Header  from "../../components/Header/Header";
import {getAllNews} from "../../services/postServices.js"
import { useState, useEffect } from "react";


export default function Home() {
  const [news, setNews] = useState([])

  async function findAllNews(){
    const response = await getAllNews()
    console.log(response.data.results.likes)
    setNews(response.data.results)
  }
  
  useEffect(() => {
    findAllNews()
  }, [])
  console.log(news)

  
  
  return (
    <>
    <Header/>
    <section className="grid grid-cols-2 gap-2 w-4/5 mx-auto my-4">
    {news.map((item) => (
        <Cards key={item.id} title={item.title} text={item.text} banner={item.banner} likes={item.likes?.length || 0} comments={item.comments?.length || 0} />
      ))}
      
    </section>
    </>
  )
}
