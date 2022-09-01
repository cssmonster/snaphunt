import React from "react";
import Link from "next/link";
import { MoveLeft, MoveRight, Threedot } from "components/icon";
import { _getPageList } from "utils/list";
import { PageItem } from "type";

const Pagination: React.FC<{
  onClickPage?: (val: number) => void;
  onMoveRight?: () => void;
  onMoveLeft?: () => void;
  onFirst?: () => void;
  onLast?: () => void;
  total?: number;
  current?: number;
}> = ({
  onClickPage,
  onMoveLeft,
  onMoveRight,
  total = 10,
  current = 6,
  onFirst,
  onLast,
}) => {
  const [list, setList] = React.useState<PageItem[]>([]);

  React.useEffect(() => {
    setList(_getPageList(total));
  }, [total]);

  const onHandleClickPage = (page: number) => {
    onClickPage && onClickPage(page);
  };

  const onHandleMoveLeft = () => {
    onMoveLeft && onMoveLeft();
  };

  const onHandleMoveRight = () => {
    onMoveRight && onMoveRight();
  };

  const onHandleClickFirst = () => {
    onFirst && onFirst();
  };
  const onHandleClickLast = () => {
    onLast && onLast();
  };

  if (total >= 10) {
    return (
      <div className="mobile-950px:flex-wrap flex justify-center items-center">
        <button
          onClick={onHandleClickFirst}
          className="mobile-950px:mb-8px pl-16px pr-16px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px"
        >
          First
        </button>
        <button
          onClick={onHandleMoveLeft}
          className="mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px"
        >
          <MoveLeft />
        </button>

        {current <= Math.ceil(list.length / 2) && (
          <>
            {list.slice(0, Math.ceil(list.length / 2)).map((item: PageItem) => (
              <button
                key={item.id}
                onClick={() => onHandleClickPage(Number(item.title))}
                className={`${
                  Number(item.title) === current
                    ? "font-bold border-cs-primary-100 text-cs-primary-100"
                    : ""
                }  mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px`}
              >
                {item.title}
              </button>
            ))}

            <button className="mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px">
              <Threedot />
            </button>
          </>
        )}

        {current > Math.ceil(list.length / 2) && (
          <>
            <button className="mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px">
              <Threedot />
            </button>
            {list
              .slice(Math.ceil(list.length / 2), list.length)
              .map((item: PageItem) => (
                <button
                  key={item.id}
                  onClick={() => onHandleClickPage(Number(item.title))}
                  className={`${
                    Number(item.title) === current
                      ? "font-bold border-cs-primary-100 text-cs-primary-100"
                      : ""
                  }  mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px`}
                >
                  {item.title}
                </button>
              ))}
          </>
        )}

        <button
          onClick={onHandleMoveRight}
          className="mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px"
        >
          <MoveRight />
        </button>
        <button
          onClick={onHandleClickLast}
          className="mobile-950px:mb-8px pl-16px pr-16px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px"
        >
          Last
        </button>
      </div>
    );
  } else {
    return (
      <div className="mobile-950px:flex-wrap flex justify-center items-center">
        <button
          onClick={onHandleClickFirst}
          className="mobile-950px:mb-8px pl-16px pr-16px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px"
        >
          First
        </button>
        <button
          onClick={onHandleMoveLeft}
          className="mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px"
        >
          <MoveLeft />
        </button>
        {list.map((item: PageItem) => (
          <button
            key={item.id}
            onClick={() => onHandleClickPage(1)}
            className={`${
              Number(item.title) === current
                ? "font-bold border-cs-primary-100 text-cs-primary-100"
                : ""
            }  mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px`}
          >
            {item.title}
          </button>
        ))}

        {/*
          <button className="mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px">
            <Threedot />
          </button> */}
        <button
          onClick={onHandleMoveRight}
          className="mobile-950px:mb-8px w-40px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px"
        >
          <MoveRight />
        </button>
        <button
          onClick={onHandleClickLast}
          className="mobile-950px:mb-8px pl-16px pr-16px h-40px rounded-3px border flex justify-center items-center ml-4px mr-4px"
        >
          Last
        </button>
      </div>
    );
  }
};

export default Pagination;
