const PropertyCard = ({ property }) => {
    return (
      <div>
        <h2>{property.title}</h2>
        <p>Price: ₹{property.price}</p>
        <p>BHK: {property.bhk}</p>
        <p>Location: {property.location}</p>
      </div>
    );
  };
  
  export default PropertyCard;
  