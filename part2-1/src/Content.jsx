import Part from "./Part";
const Content = ({parts}) => {
   console.log("content", parts);
   return (
    <>
    {parts.map(item =>     
    <Part name={item.name} num={item.exercises} />)}

    </>
   )
}

export default Content;