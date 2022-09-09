const useDarkStyle = () => {
  const isDarkMode = useState("darkMode", () => true);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  }
  return { isDarkMode, toggleDarkMode }
}

export default useDarkStyle;