import React from 'react'
import {fizzbuzz} from "../components/Functions";

let n = 100;

function getList(n) {
    let fbList =[];
    let str;
    for (let i = 1; i <= n; i++) {
      str = fizzbuzz(i)
      fbList.push({"id":i,"val":str});
    }
    return fbList;
  }
const FizzBuzz = () => {
    let items = getList(n);
    const listItems = items.map((item) => <h3 key={item.id}>{item.val}</h3>);
    console.log(items);
  return (
    <div>
    {listItems }
    </div>
  )
}

export default FizzBuzz
