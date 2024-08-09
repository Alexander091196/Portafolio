import "./MyWork.css";
import theme from "../../assets/react.svg";
import MyWork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="MyWork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="mywork-container">
        {MyWork_data.map((work,index)=>{
            return <img key={index} src={work.wk_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src="#" alt="" />
      </div>
    </div>
  );
};

export default MyWork;
