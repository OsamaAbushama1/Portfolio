
function ProjectCard({src , link , h3 }){
    return(
        <a href={link} className="hover" target="_blank">
            <img src={src} alt={`${h3} Logo`} />
            <h3>{h3}</h3>
        </a>
    )
}

export default ProjectCard;