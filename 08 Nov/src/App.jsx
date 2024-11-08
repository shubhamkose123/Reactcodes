
// const App=()=>{
//      const name=["shubham", "raja", "ankur", "danish", "ram"];
//     const data=name.map((item)=>{
//         return(
//             <>
//            <option>{item}</option> 
//             </>
//         )
//     })
//     return(
//       <>
//       <h1>welcome</h1>
//       <select>
//       {data}
//       </select>
//       </>
      
//     )
// }

const student=[
{
    "rollno":102,
    "name":"shubham",
    "City":"bhopal",
},
{
    "rollno":103,
    "name":"ankur",
    "City":"bhopal",
},
{
    "rollno":104,
    "name":"ram",
    "City":"bhopal",
},
{
    "rollno":105,
    "name":"danish",
    "City":"bhopal",
}
]
const ans=student.map((key)=>{
    return(
        <>
        <tr>
            <td> {key.rollno} </td>
            <td> {key.name} </td>
            <td> {key.City} </td>
        </tr>
        </>
    )
})
const App=()=>{
    return(
<>
<h1>welcome</h1>
<table>
    <tr>
        <td>rollno</td>
        <td>name</td>
        <td>city</td>
    </tr>
    {ans}
</table>
</>
    )
}

export default App;