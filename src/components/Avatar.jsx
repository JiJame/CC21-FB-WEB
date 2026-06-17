import DefaultImg from "../assets/default-avatar.png";
import { DropdownArrow } from "../icons";

function Avatar(props) {
  const { imgSrc, menu, bottom, right, ...restProps } = props;
  return (
    <div className="avatar items-center justify-center">
      <div {...restProps}>
        <img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
      </div>
      {menu && (
        <div
          className="absolute -bottom-1 -right-2 w-5 opacity-60"
          style={{ right: right, bottom: bottom }}
        >
          <DropdownArrow />
        </div>
      )}
    </div>
  );
}

export default Avatar;
