import SearchPanel from "@/components/pages/main-page/search-panel/SearchPanel";
import GoodsList from "@/components/pages/main-page/goods/Goods";
import Basket from "@/components/pages/main-page/basket/Basket";

export default function Home() {
  return (
    <>
      <div className='container'>
        <SearchPanel/>
        <GoodsList/>
        <Basket/>
      </div>
    </>
  )
}
