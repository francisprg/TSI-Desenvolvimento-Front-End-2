import './App.css';
import ProductTable from './components/ProductTable/ProductTable';
import SearchBar from './components/SearchBar/SearchBar.jsx';

const PRODUCTS = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  ];


function App() {
  return (
    <>
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </>
  );
}


export default App;
