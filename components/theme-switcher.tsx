
import Button from './button'
import useDarkMode from 'use-dark-mode';

const Switcher = () => {
    const darkMode = useDarkMode(true);
  
    return (
      <div className="switch">
        <Button onClick={darkMode.disable}>
        Stay in the Light
        </Button>
        <Button onClick={darkMode.enable}>
        Go to the Dark Side
        </Button>
      </div>
    );
  };
  
  export default Switcher;