import React from 'react'

export async function getData(id) {
  const res = await fetch(`https://melivecode.com/api/attractions/${id}`)
  return res.json()
}


export default async function Page({ params }) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
  return (
    <div>
        <h1><p>{data.attraction.name}</p></h1><br></br>
        <div>
            <img src={data.attraction.coverimage} alt={data.attraction.name} />           
        </div>
<br></br>
           <h3><p>{data.attraction.detail}</p></h3>
          
    </div>
  )
}
