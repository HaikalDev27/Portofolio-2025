import './index.css';

export default function App(){
    return(
        <div className='SkillsWrapper'>
            <span className="SkillsHeader">
                <h1 className="SkillsTitle">Skills & Expertise</h1>
            </span>
            <br />
            <p className="SkillsSubheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br />
            <span className="SkillsList">
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                </ul>
            </span>
        </div>
    );
}