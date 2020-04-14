import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  //   get unique types
  let types = getUnique(rooms, "type");
  //   add all
  types = [...types, "all"];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let capacities = getUnique(rooms, "capacity");
  capacities = capacities.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* {Select type} */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* {Select type} */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>
        {/* {End of select type} */}
        {/* Room Price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* End of Room PRiice */}
        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* End of size */}
        {/* Extras */}
        <div className="form-group">
          <div className="single-extra">
            <label htmlFor="pets">Pets</label>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              onChange={handleChange}
              checked={pets ? true : false}
              value="pets"
            />
          </div>
          <div className="single-extra">
            <label htmlFor="breakfast">Breakfast</label>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              onChange={handleChange}
              checked={breakfast ? true : false}
            />
          </div>
        </div>
        {/* Extras */}
      </form>
    </section>
  );
}
