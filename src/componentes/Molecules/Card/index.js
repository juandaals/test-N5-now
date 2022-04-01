import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import { useState } from "react";
import { CardStyle } from "./styles";

export const Card = ({ characterinfo }) => {
  const [hover, setHover] = useState(false);

  const { image, ...info } = characterinfo;
  return (
    <CardStyle className={`card__container`}>
      {!hover ? (
        <CardFront
          className="card__container-img"
          hover={hover}
          setHover={setHover}
          characterimage={image}
        />
      ) : (
        <CardBack setHover={setHover} characterInfo={info} />
      )}
    </CardStyle>
  );
};

export default Card;
