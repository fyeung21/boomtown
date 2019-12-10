import React, { createContext, Component } from "react";

export const ItemPreviewContext = createContext();

const initialState = {
  title: "Name your item",
  description: "Describe your item",
  tags: [],
  imageurl: "https://via.placeholder.com/300?text=Your+Image+Here",
  itemowner: {
    fullname: "fio",
    avatar: "https://picsum.photos/id/1011/50"
  },
  created: new Date()
};

class ItemPreviewProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { item: initialState };
  }

  updatePreview = item => {
    console.log("Update preview", item)
    const updatedItem = { ...this.state.item, ...item };
    this.setState({ item: updatedItem });
  };

  resetPreview = () => {
    this.setState({ item: initialState });
  };
  render() {
    return (
      <ItemPreviewContext.Provider
        value={{
          state: this.state,
          updatePreview: this.updatePreview,
          resetPreview: this.resetPreview
        }}
      >
        {this.props.children}
      </ItemPreviewContext.Provider>
    );
  }
}

export default ItemPreviewProvider;
