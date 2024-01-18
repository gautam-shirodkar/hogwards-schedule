import { FC } from "react";

interface ICharacter {
  img: string;
  name: string;
  classes?: string;
}
const Character: FC<ICharacter> = ({ img, name, classes = null }) => {
  return (
    <>
      <img
        className={`w-[60px] h-[60px] rounded-[50%] object-fill border-2 border-rose-400 ${classes}`}
        src={img}
        alt={name}
      />
      <span className="text-white font-bold">{name}</span>
    </>
  );
};

export default Character;
