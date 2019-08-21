import NavBook from "../components/navBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import ShoppingCarIcon from "../components/SearchBooksComponents/ShoppingCarIcon";
import SearchBar from "../components/SearchBooksComponents/SearchBar";
import BookToBuyList from "../components/SearchBooksComponents/BookToBuyList";
// import ConfirmBook from '../components/ConfirmBook';
// import DeleteConfirmation from "../components/DeleteConfirmation";
import BookDetail from "../components/BookDetail";



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
        {/* <br />
        <ConfirmBook />
        <br />
        <DeleteConfirmation /> */}
        <br />
        <BookDetail />

    


      </div>
    
      );
  }
}

export default SearchBooks;
