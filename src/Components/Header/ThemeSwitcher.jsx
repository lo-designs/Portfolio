function ThemeSwitcher({ colorTheme, handleClick }) {
  return (
    <div className="theme-options">
      <div
        className={`dark${colorTheme === "theme-black" ? " active-theme" : ""}`}
        id="theme-black"
        onClick={() => handleClick("theme-black")}
      >
        dark
      </div>
      <span className="light-dark-divider"> </span>
      <div
        className={`light${colorTheme === "theme-white" ? " active-theme" : ""}`}
        id="theme-white"
        onClick={() => handleClick("theme-white")}
      >
        light
      </div>
    </div>
  );
}

export default ThemeSwitcher;
