import CollecItem from "../collecItems"

const CategoriesProduct = () => {
    return(
        <ul className="w-full mb-10 h-fit gap-2 grid grid-rows-2 grid-cols-2">
        <CollecItem
          className="row-span-2 !h-[454px]"
          img={"/collec/headphone.svg"}
          title={"Headphones"}
          link={"/sortpro/headphones"}
        />
        <CollecItem
          className=""
          img={"/collec/earbuds.svg"}
          title={"Earbuds"}
          link={"/sortpro/earbuds"}
        />
        <CollecItem
          className=""
          img={"/collec/accessories.svg"}
          title={"Accessories"}
          link={"/sortpro/accessories"}
        />
      </ul>
    )
}

export default CategoriesProduct