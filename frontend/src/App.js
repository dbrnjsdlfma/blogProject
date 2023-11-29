import React from 'react';
import SkillItem from './components/SkillItem'
import frontEndSkill from "./data/frontEndSkill"
import backEndSkill from "./data/backEndSkill"
import dataBaseSkill from "./data/dataBaseSkill"
import otherSkill from "./data/otherSkill"
import './css/global.css'
import './App.css';
function App() {
    console.log(frontEndSkill)
    const topBtn = (e) => {
        window.scrollTo({top : 0 , behavior: 'smooth'})
    }
return (
    <div className="App">
        <header>
            <nav>
                <div className="logo">
                    <a href="#"><h1>YuGwon Portfolio</h1></a>
                </div>
                <ul>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h1>안녕하세요<br/>신입 프론트엔드 개발자 입니다.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="aboutme">
                    <div className="section_title">
                        <h2>About me</h2>
                    </div>
                    <div className="aboutme_body">
                        <article>
                            <span className="material-symbols-outlined">
                                person이름
                            </span>
                            <p>유권</p>
                        </article>
                        <article>
                            <span class="material-symbols-outlined">
                                cake생년월일
                            </span>
                            <p>1993. 07. 28</p>
                        </article>
                        <article>
                            <span class="material-symbols-outlined">
                                phonelink_ring연락처
                            </span>
                            <p>010 - 9517 - 4790</p>
                            {/* <p>dbrnjsdlfma@gmail.com</p> */}
                        </article>
                    </div>
                </div>
            </section>
            <section>
                <div className="skills">
                    <div className="section_title">
                        <h2>Skills</h2>
                    </div>
                    <ul>
                        <li>
                            <span>FrontEnd</span>
                            <SkillItem data={frontEndSkill}/>
                        </li>
                        <li>
                            <span>BackEnd</span>
                            <SkillItem data={backEndSkill}/>
                        </li>
                        <li>
                            <span>DataBase</span>
                            <SkillItem data={dataBaseSkill}/>
                        </li>
                        <li>
                            <span>Others</span>
                            <SkillItem data={otherSkill}/>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className='projects'>
                    <div className="section_title">
                        <h2>Projects</h2>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <address>
                <span>Copyright © 2023 YuGwon Portfolio. All rights reserved.</span>
            </address>
            <button onClick={() => topBtn()}>
                <span className="material-symbols-outlined">
                    arrow_upward
                </span>
            </button>
        </footer>
    </div>
  );
}

export default App;
