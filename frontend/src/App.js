import './css/global.css'
import './App.css';

function App() {
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
                            <span>이름</span>
                            <p>유권</p>
                        </article>
                        <article>
                            <span>생년월일</span>
                            <p>1993. 07. 28</p>
                        </article>
                        <article>
                            <span>연락처</span>
                            <p>010 - 9517 - 4790</p>
                            <p>dbrnjsdlfma@gmail.com</p>
                        </article>
                    </div>
                </div>
            </section>
            <section>
                <div className="skills">
                    <div className="section_title">
                        <h2>About me</h2>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <address>
                <span>Copyright © 2023 YuGwon Portfolio. All rights reserved.</span>
            </address>
            <button>
                <span class="material-symbols-outlined">
                    arrow_upward
                </span>
            </button>
        </footer>
    </div>
  );
}

export default App;
