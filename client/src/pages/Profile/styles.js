const styles = theme => ({
  background: {
    backgroundColor: "#262626",
    paddingTop: 80
  },
  card: {
    margin: "0 80px"
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
    paddingTop: 60,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 80,
    margin: '0 2rem'
  }
});

export default styles;
