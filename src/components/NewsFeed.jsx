


// export default function NewsFeed({data}) {
//   return (
//     <section>
//       <h2>Hello</h2>
//     {data?.posts.map((data)=>{
//       return(
//         <div>title: {data.title}</div>
//       )
//     })}
//     </section>
//   )
// }

// export async function getStaticProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://dummyjson.com/posts`);
//   const data = await res.json();
//   console.log(data, "at NewsFeed Page")
 
//   // Pass data to the page via props
//   return { props: { data } };
// }










async function getData() {
  const res = await fetch('https://dummyjson.com/posts');

  if (!res.ok) {
    // This will activate the  `error.js` Error 
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 
export default async function Page() {
  const data = await getData();
  console.log(data,"fetched data")
 
  return <main>
    {data.posts.map((data=>{
      return(
        <div>title: {data.title}</div>
      )
    }))}
  </main>;
}