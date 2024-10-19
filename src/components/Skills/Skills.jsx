import style from './StyleSkills.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
function Skills(){
    return(
        <section id='skills' className={style.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={style.skilllist}>
                <SkillList src={checkMarkIcon} skill='HTML'/>
                <SkillList src={checkMarkIcon} skill='CSS'/>
                <SkillList src={checkMarkIcon} skill='JavaScript'/>
                <SkillList src={checkMarkIcon} skill='TypeScript'/>
                <SkillList src={checkMarkIcon} skill='Node'/>
            </div>
            <hr />
            <div className={style.skilllist}>
                <SkillList src={checkMarkIcon} skill='React'/>
                <SkillList src={checkMarkIcon} skill='Redux'/>
                <SkillList src={checkMarkIcon} skill='Git'/>
                <SkillList src={checkMarkIcon} skill='Bootsrtap'/>
            </div>
        </section>
    )
}

export default Skills;