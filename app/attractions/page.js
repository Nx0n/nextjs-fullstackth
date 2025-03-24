import React from 'react'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://melivecode.com/api/attractions')
  return res.json()
}
export default async function Page() {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <h1>Attractions</h1><br></br>
      <ul>
        <h3>
        {data.map(attraction => (
          <li key={attraction.id}>
            <img src={attraction.coverimage} alt={attraction.name} width={150}/> 
            {attraction.name} <br></br> 
            <Link href={`/attractions/${attraction.id}`}>Read More</Link><br></br><br></br>
          </li>
        ))}
        </h3>
      </ul>
    
    </div>
  )
}
