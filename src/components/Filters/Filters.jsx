import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import {
  FiltersWrapper,
  ResetButton,
  SelectLabel,
  SelectLevelsWrapper,
  SelectPriceWrapper,
  SelectWrapper,
} from "./Filters.Styled";
import {
  selectFilterLevel,
  selectFilterPrice,
  selectFilterWord,
} from "../../redux/filters/filtersSelectors";
import {
  setFilterLevel,
  setFilterPrice,
  setFilterWord,
} from "../../redux/filters/filtersSlice";

const options = [
  { value: "french", label: "French" },
  { value: "english", label: "English" },
  { value: "german", label: "German" },
  { value: "spanish", label: "Spanish" },
  { value: "mandarin chinese", label: "Mandarin Chinese" },
  { value: "italian", label: "Italian" },
  { value: "korean", label: "Korean" },
  { value: "vietnamese", label: " Vietnamese" },
];

const optionsLevels = [
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
  { value: "C1 Advanced", label: "C1 Advanced" },
  { value: "C2 Proficient", label: "C2 Proficient" },
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
export const Filters = ({ teachers }) => {
  const filterWord = useSelector(selectFilterWord);
  const filterPrice = useSelector(selectFilterPrice);
  const filterLevel = useSelector(selectFilterLevel);
  const [selectedOption, setSelectedOption] = useState(filterWord);
  const [selectedPrice, setSelectedPrice] = useState(filterPrice);
  const [selectedLevel, setSelectedLevel] = useState(filterLevel);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const priceOptions = teachers
    .map((teacher) => teacher.price_per_hour)
    .sort((a, b) => a - b)
    .filter((value, index, array) => {
      return index === 0 || value !== array[index - 1];
    })
    .map((price) => ({ value: price.toString(), label: price.toString() }));

  useEffect(() => {
    const language = searchParams.get("language");
    const price = searchParams.get("price");
    const level = searchParams.get("level");

    if (language) {
      const selectedLanguage = options.find(
        (option) => option.value === language,
      );
      setSelectedOption(selectedLanguage);
      dispatch(setFilterWord(selectedLanguage?.value || ""));
    }

    if (price) {
      const selectedPriceOption = priceOptions.find(
        (option) => option.value === price,
      );
      setSelectedPrice(selectedPriceOption);
      dispatch(setFilterPrice(selectedPriceOption?.value || ""));
    }

    if (level) {
      const selectedLevelOption = optionsLevels.find(
        (option) => option.value === level,
      );
      setSelectedLevel(selectedLevelOption);
      dispatch(setFilterLevel(selectedLevelOption?.value || ""));
    }
  }, [searchParams, dispatch]);

  const updateSearchParams = (
    selectedLanguage,
    selectedPrice,
    selectedLevel,
  ) => {
    const params = new URLSearchParams();

    if (selectedLanguage) {
      params.set("language", selectedLanguage);
    }
    if (selectedPrice) {
      params.set("price", selectedPrice);
    }
    if (selectedLevel) {
      params.set("level", selectedLevel);
    }

    setSearchParams(params);
  };

  const onLangChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSearchParams({ languages: selectedOption?.value || "" });
    dispatch(setFilterWord(selectedOption?.value || ""));
    updateSearchParams(
      selectedOption?.value,
      selectedPrice?.value,
      selectedLevel?.value,
    );
  };

  const onPriceChange = (selectedPrice) => {
    setSelectedPrice(selectedPrice);
    setSearchParams({ price: selectedPrice?.value || "" });
    dispatch(setFilterPrice(selectedPrice?.value || ""));
    updateSearchParams(
      selectedOption?.value,
      selectedPrice?.value,
      selectedLevel?.value,
    );
  };

  const onLevelChange = (selectedLevel) => {
    setSelectedLevel(selectedLevel);
    setSearchParams({ level: selectedLevel?.value || "" });
    dispatch(setFilterLevel(selectedLevel?.value || ""));
    updateSearchParams(
      selectedOption?.value,
      selectedPrice?.value,
      selectedLevel?.value,
    );
  };

  const onReset = () => {
    setSelectedOption("");
    setSelectedPrice("");
    setSelectedLevel("");
    dispatch(setFilterWord(""));
    dispatch(setFilterPrice(""));
    dispatch(setFilterLevel(""));
    setSearchParams({});
  };

  return (
    <>
      <FiltersWrapper>
        <SelectWrapper>
          <SelectLabel>Language</SelectLabel>
          <Select
            placeholder="Language "
            name="languageFilter"
            id="language_filter"
            styles={customStyles}
            options={options}
            value={selectedOption}
            onChange={onLangChange}
          ></Select>
        </SelectWrapper>

        <SelectPriceWrapper>
          <SelectLabel>Price per hour</SelectLabel>
          <Select
            placeholder="Price"
            name="priceFilter"
            id="price-filter"
            styles={customStyles}
            options={priceOptions}
            value={selectedPrice}
            onChange={onPriceChange}
          ></Select>
        </SelectPriceWrapper>

        <SelectLevelsWrapper>
          <SelectLabel>Students level</SelectLabel>
          <Select
            placeholder="Level"
            name="levelFilter"
            id="level-filter"
            styles={customStyles}
            options={optionsLevels}
            value={selectedLevel}
            onChange={onLevelChange}
          ></Select>
        </SelectLevelsWrapper>

        <ResetButton type="button" onClick={onReset}>
          Reset
        </ResetButton>
      </FiltersWrapper>
    </>
  );
};
