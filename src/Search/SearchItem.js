const SearchItem = ({ item }) => {
  return (
    <a className="list-group-item" href="#">
      <li className="d-flex">
        <div className="col-8 overflow-hidden">
          <div>{item.title}</div>
          <div>{"$" + item.price}</div>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <img className="col-8 float-end" src={item.image}></img>
        </div>
      </li>
    </a>
  );
};

export default SearchItem;
