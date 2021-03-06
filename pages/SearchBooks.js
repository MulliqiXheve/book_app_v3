import NavBook from "../components/NavBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import ShoppingCarIcon from "../components/SearchBooksComponents/ShoppingCarIcon";
import SearchBar from "../components/SearchBooksComponents/SearchBar";
import BookToBuyList from "../components/SearchBooksComponents/BookToBuyList";

class SearchBooks extends React.Component {
  // const shoppingCartbutton = {
  //   float: "right",
  //   height: "50px",
  //   width: "50px"
  // };

  render() {
    return (
      <div>
        <NavBook />
        <br />
        <ShoppingCarIcon />
        <br />
        <SearchBar />
        <br />
        <BookToBuyList /> 
      </div>
    
      );
  }
}

export default SearchBooks;
