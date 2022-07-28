import React from "react";
import "./Drinks.scss"

let data = [
  {
    img : "https://gfreefoodie.com/wp-content/uploads/2020/04/sangria_4.jpg",
    ingrediants: "Red Wine, Peach Liqour, Sprite, Orange Juice",
    price:"11.99$",
    title:"Red Sangria"
  },
  {
    img : "https://thesaltymarshmallow.com/wp-content/uploads/2021/04/white-wine-sangria.jpg",
    ingrediants: "White Wine, Peach Liqour, Sprite, Orange Juice",
    price:"11.99$",
    title:"White Sangria"
  },
  {
    img : "https://www.liquor.com/thmb/j0DKX_lCKZUVeuZoN-36CqtqHzM=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
    ingrediants: "Vodka, Moscow Formula, Lime, Simple Suger",
    price:"11.99$",
    title:"Moscow Mule"
  },
  {
    img : "https://www.liquor.com/thmb/ifqD2Q2Iw3bvXrs95a9xtoaoOw0=/720x720/smart/filters:no_upscale()/margarita-720x720-primary-f4a3b044e9a746d9b88890515c3a7328.jpg",
    ingrediants: "Tequila, Simple Syrup, Lime, Salt",
    price:"11.99$",
    title:"Margarita"
  },
  {
    img : "https://www.liquor.com/thmb/tWMxkT58B47ayCYjDdfAq_csW5Q=/720x540/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg",
    ingrediants: "Bourban, Rye, Sugar, Bitters",
    price:"11.99$",
    title:"Old Fashioned"
  },
  {
    img : "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Best-Cosmopolitan-Cocktail-Recipe-1-1200.jpg",
    ingrediants: "Vodka, Triple Sec, Lime, Cranberry Juice",
    price:"11.99$",
    title:"Cosomopolitan"
  }
]


export default function Drinks() {
  return <div className="container">
      {data.map((d) => (
        <div className="card">
          <img src={d.img}/>
          <div className="text">
      <h3>{d.ingrediants}</h3>
      <h3>{d.price}</h3>
      </div>
      <h3 className="title">{d.title}</h3>
      
      </div>
      ))}
    </div>
}