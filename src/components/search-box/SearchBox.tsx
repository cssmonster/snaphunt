import React from "react";
import { ClearIcon } from "components/icon";

const SearchBox: React.FC<{
  onClearCallback?: () => void;
  onGetSearchKey?: (val: string) => void;
}> = ({ onClearCallback, onGetSearchKey }) => {
  const [internalValue, setInternalValue] = React.useState("");

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onGetSearchKey && onGetSearchKey(e.target.value);
  };

  const onHandleClear = () => {
    setInternalValue("");
    onClearCallback && onClearCallback();
  };

  return (
    <div className="w-full mobile-645px:h-45px h-45px rounded-5px bg-cs-secondary-100 relative overflow-hidden">
      <input
        data-testid="input"
        value={internalValue}
        onChange={onHandleChange}
        placeholder="Search title "
        type="text"
        className="absolute w-full h-full border-none outline-none pl-32px pr-32px text-pop text-18px leading-23px"
      />

      {internalValue !== "" && (
        <div
          data-testid="clear"
          onClick={onHandleClear}
          className="flex flex-col justify-center items-center absolute top-16px right-22px mobile-645px:top-16px"
        >
          <ClearIcon />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
