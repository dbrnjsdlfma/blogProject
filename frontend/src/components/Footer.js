import React from "react";

function Footer ({topBtn}) {
    return (
        <>
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
        </>
    )
}

export default Footer