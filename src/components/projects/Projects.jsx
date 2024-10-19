import style from './ProjectStyle.module.css'
import courses from '../../assets/courses.png'
import Restaurant from '../../assets/Restaurant.jpg'
import classyAds from '../../assets/classyAds.png'
import onlineStore from '../../assets/ss.png'
import ProjectCard from '../../common/ProjectCard';
import specailDesign from '../../assets/special.png'
import cartApp from '../../assets/cartApp.png'

function Projects(){
    return(
        <section id="projects" className={style.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={style.projectsContainer}>
                <ProjectCard src={courses} link="https://osamaabushama1.github.io/Online_Courses/" h3='Online Courses' />
                <ProjectCard src={Restaurant} link="https://osamaabushama1.github.io/Restaurant/" h3='Restaurant' />
                <ProjectCard src={classyAds} link="https://osamaabushama1.github.io/Classy_Ads/" h3='classyAds'/>
                <ProjectCard src={onlineStore} link="https://osamaabushama1.github.io/Online_Store/" h3='Online Store' />
                <ProjectCard src={specailDesign} link="https://osamaabushama1.github.io/SpecialDesign_Using_JS/" h3='Special Design' />
                <ProjectCard src={cartApp} link="https://osamaabushama1.github.io/Cart_App_Using_React/" h3='Cart App' />
            </div>
        </section>
    )
}

export default Projects;