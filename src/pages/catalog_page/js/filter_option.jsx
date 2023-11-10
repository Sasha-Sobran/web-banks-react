const Option = (item) => {
  return (
    <option key={item} value={item}>
      {item}
    </option>
  );
};

export default Option;
