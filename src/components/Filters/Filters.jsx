import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import { FiltersWrapper, SelectLabel, SelectWrapper } from "./Filters.Styled";
import { selectFilterWord } from "../../redux/filters/filtersSelectors";
import { setFilterWord } from "../../redux/filters/filtersSlice";

const options = [
  { value: "", label: "All teachers" },
  { value: "french", label: "French" },
  { value: "english", label: "English" },
  { value: "german", label: "German" },
  { value: "ukrainian", label: "Ukrainian" },
  { value: "polish", label: "Polish" },
  { value: "spanish", label: "Spanish" },
  { value: "mandarin chinese", label: "Mandarin Chinese" },
  { value: "italian", label: "Italian" },
  { value: "korean", label: "Korean" },
  { value: " vietnamese", label: " Vietnamese" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
    borderRadius: "14px",
    padding: "6px",
    borderColor: "#fff",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
    borderRadius: "14px",
    paddingRight: "10px",
  }),
  menuList: (provided) => ({
    ...provided,
    "&::-webkit-scrollbar": {
      width: "8px",
      paddingRight: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#f3f3f3",
      borderRadius: "10px",
      margin: "14px 8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      borderRadius: "10px",
      margin: "14px 8px",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
    backgroundColor: "transparent",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: 1.11,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
};
export const Filters = () => {
  const filterWord = useSelector(selectFilterWord);
  const [selectedOption, setSelectedOption] = useState(filterWord);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const language = searchParams.get("language");
    if (language) {
      setSelectedOption(options.find((option) => option.value === language));
    }
  }, [searchParams]);

  const onChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSearchParams({ languages: selectedOption?.value || "" });
    dispatch(setFilterWord(selectedOption?.value || ""));
  };

  return (
    <FiltersWrapper>
      <SelectWrapper>
        <SelectLabel>Language</SelectLabel>
        <Select
          placeholder="Choose a language"
          name="languageFilter"
          id="language_filter"
          styles={customStyles}
          options={options}
          value={selectedOption}
          onChange={onChange}
        ></Select>
      </SelectWrapper>
    </FiltersWrapper>
  );
};
