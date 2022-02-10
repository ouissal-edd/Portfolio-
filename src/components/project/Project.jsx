import "./project.css";
const pic = require('../../img/moon.png')

const Project = ({ img, link }) => {
    return (
        <div className="p">
            <a href={link} >
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    );
};

export default Project;
