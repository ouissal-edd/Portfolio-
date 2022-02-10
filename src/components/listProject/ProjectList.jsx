import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sniet eligendi numquam reiciendis mollitia laborum fuga ratione! Eos, ullam!
                </p>

            </div>
            <div className="pl-list">
                {projects.map((item, index) => (
                    // console.log(item)
                    <Project key={index} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
