import { useState } from 'react';
import {PropertyList} from '../components/PropertyList';
import { properties } from '../data/properties';

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [priceFilter, setPriceFilter] = useState('');
  const [bhkFilter, setBhkFilter] = useState('');

  const handleFilter = () => {
    let filtered = properties;
    if (priceFilter) {
      filtered = filtered.filter(property => property.price <= priceFilter);
    }
    if (bhkFilter) {
      filtered = filtered.filter(property => property.bhk == bhkFilter);
    }
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <h1>Rental Properties</h1>
      <div>
        <label>
          Price:
          <input
            type="number"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </label>
        <label>
          BHK:
          <input
            type="number"
            value={bhkFilter}
            onChange={(e) => setBhkFilter(e.target.value)}
          />
        </label>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <PropertyList properties={filteredProperties} />
    </div>
  );
}
