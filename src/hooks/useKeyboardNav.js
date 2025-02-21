const useKeyboardNav = () => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'Home':
          document.querySelector('#hero').scrollIntoView();
          break;
        case 'End':
          document.querySelector('#footer').scrollIntoView();
          break;
        // Add more cases for other sections
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
}; 