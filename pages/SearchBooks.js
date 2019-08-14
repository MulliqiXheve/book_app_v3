import NavBook from "../components/NavBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import ShoppingCarIcon from "../components/SearchBooksComponents/ShoppingCarIcon";
import SearchBar from "../components/SearchBooksComponents/SearchBar";
import BookToBuyList from "../components/SearchBooksComponents/BookToBuyList";
import ConfirmBook from '../components/ConfirmBook';
import DeleteConfirmation from "../components/DeleteConfirmation";

class SearchBooks extends React.Component {

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
        <br />
        <ConfirmBook />
        <br />
        <DeleteConfirmation />


      </div>
    
      );
  }
}

export default SearchBooks;
