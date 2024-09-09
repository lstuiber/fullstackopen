import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
const Course = (props) => {
    console.log(props.course);
    return (
        <div>
        {props.course.map((item, i) => 
        <Header key={i} name={item.name} />
        )}
       {props.course.map((items, i) => 
        <Content key={i} course={items.parts} />
      )}
      <Total total={props.course} /> 
      </div>
    )


}

export default Course;