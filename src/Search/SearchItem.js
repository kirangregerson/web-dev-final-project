const SearchItem = ({ item }) => {
  const itemHref = `/item/${item["listing_id"]}`;
  return (
    <a className="list-group-item" href={itemHref}>
      <li className="d-flex">
        <div className="col-8 overflow-hidden">
          <div>{item.title}</div>
          <div>{"$" + item.price.amount / 100}</div>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <img className="col-8 float-end" src={item.image}></img>
        </div>
      </li>
    </a>
  );
};

export default SearchItem;
