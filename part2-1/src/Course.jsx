import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
const Course = ({course}) => {

    console.log("course2", course);
    const dataItems = course.map((items, i) => 
      items.parts
  );
    console.log("data", dataItems);
    return (
        <div>
        {course.map((item) => 
          <div>
        <Header key={item.id} name={item.name} /> 
        <Content parts={item.parts} />
        <Total parts={item.parts}/>
        </div>
        )}

      </div>
    )


}

export default Course;