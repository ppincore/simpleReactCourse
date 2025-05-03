import styles from "./Pagination.module.scss";
import Button from "../Button/Button";
import clsx from "clsx";

type TPaginationProps = {
  pagesArray: number[];
  setPage: (pages: number) => void;
  currentPage: number
};

const Pagination = (props: TPaginationProps) => {
  const { pagesArray, setPage, currentPage } = props;
  return (
    <div className={styles.wrapper}>
      {pagesArray.map((p) => (
        <Button key={p} onClick={() => setPage(p)} children={p}  className={
          clsx({
            [styles.button]:true,
            [styles.buttonActive]: p===currentPage
          })
        }/>
      ))}
    </div>
  );
};

export default Pagination;
