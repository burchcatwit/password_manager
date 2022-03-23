import React from 'react';
import useLocalStorage from 'use-local-storage';
import "./index.css";

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

function Index()
    {
       const defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
        const [theme,setTheme] = useLocalStorage('theme',defaultDark ? 'dark' : 'light');

        const switchTheme = () => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        }
    

    return(
        <div className="main" data-onTouchMoveCapture={(theme)}>
          <button onClick={switchTheme}>
                Swtich to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
    );

    }

    export default Index;