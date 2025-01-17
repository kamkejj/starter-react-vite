const Pizza = (props) => {
    return (
        <div className="pizza">
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <img src={props.image} alt={props.name} width="200" height="200" />
        </div>
    )
  };

  export default Pizza;
