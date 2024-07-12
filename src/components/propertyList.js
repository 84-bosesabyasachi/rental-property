import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
