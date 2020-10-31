
import Button from './button'
import useDarkMode from 'use-dark-mode';

const Switcher = () => {
    const darkMode = useDarkMode(true);
  
    return (
      <div className="switch">
        <Button onClick={darkMode.disable}>
        Light
        </Button>
        <Button onClick={darkMode.enable}>
        Dark
        </Button>
      </div>
    );
  };
  
  export default Switcher;