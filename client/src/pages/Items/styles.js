const styles = theme => ({
  background: {
    backgroundColor: "#262626"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  itemGrid: {
    paddingTop: 100,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 80
  }
});

export default styles;
