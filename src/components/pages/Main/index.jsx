import React, { useCallback, useMemo, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import Character from "components/Character";
import { fetchCharacters } from "store/actions";
import './styles.scss';

const Main = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleNext = useCallback(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const hasMore = useMemo(() => page !== 20, [page]);

  return (
    <InfiniteScroll
      dataLength={characters.length} //This is important field to render the next data
      next={handleNext}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="characters_container">
        {characters.map(({ id, name, image }) => (
          <Character key={id} id={id} name={name} image={image} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Main;
