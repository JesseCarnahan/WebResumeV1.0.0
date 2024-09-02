import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";


const Projects = () => {
    return (
        <div className="project-sc resume-block">
            <div className="container">
                <div className="project-content dotted-border-left">
                    <Title titleText={"Projects"} />
                    <div>
                        <div className="project-item grid items-center">
                            <div className="project-icon">
                                <div className="project-list grid">
                                    <h1>Dice Roller bot</h1>
                                    {
                                        DATA.projects?.map((item) => (
                                            <ProjectItem key={item.id} item={item} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects

const ProjectItem = ({ item }) => {
    return (
        <div className="project-item grid items-center">
            <div className="project-icon">
                <img src={item.icon} alt="" />
            </div>
            <div className="project-info grid">
                <div className="project-info-l">
                    <p className="project-provider">{item.description}</p>
                    <br />
                </div>
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
}
