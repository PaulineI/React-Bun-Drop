function useSpecialStyle() {
  const headerStyle = {
    color: "#36454f",
    fontSize: "42px",
    textAlign: "center",
  };
  const buttonStyle = { backgroundColor: "orange", color: "white" };
  const pictureStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "25px",
  };
  const linkStyle = {
    textDecoration: "none",
  };

  return { headerStyle, buttonStyle, pictureStyle, linkStyle };
}

export default useSpecialStyle;
