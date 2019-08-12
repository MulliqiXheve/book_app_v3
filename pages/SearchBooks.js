import NavBook from "../components/navBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import ShoppingCarIcon from "../components/SearchBooksComponents/ShoppingCarIcon";
import AddBooks  from '../components/AddBooks';
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
        <AddBooks />
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
