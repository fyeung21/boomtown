const styles = theme => ({
  background: {
    backgroundColor: "#262626"
  },
  card: {
    margin: "40px 80px"
  },
  cardContent: {
    margin: 40
  },
  flexContainer: {
    display: "flex"
  },
  title: {
    marginLeft: 15
  },
  sharedItems: {
    margin: "40px 80px"
  },
  itemGrid: {
    paddingTop: 100,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 80,
    margin: '5rem auto 0 auto'
  }
});

export default styles;
