import Svg, { Path } from 'react-native-svg';

function Hose(props) {
  return (
    <Svg
      width={46}
      height={19}
      viewBox="0 0 46 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.35.264c-4.05.43-6.96 2.395-6.834 4.613.164 2.9 3.984 5.171 9.562 5.685 1.16.107 1.151.113-1.278.853a6.612 6.612 0 01-1.322.231c-.474.024-.777.099-1.029.254-.27.167-.503.22-.948.213-.382-.005-.938.095-1.571.282-1.904.564-3.055.812-4.957 1.07-1.806.243-2.128.323-2.785.688-.192.107-.38.124-.7.065-.53-.097-1.159.022-1.435.273-.114.103-.51.237-.903.306-.385.066-1.758.32-3.05.562-1.293.243-2.62.49-2.95.548-.33.06-.908.178-1.284.263-.86.196-1.429.206-1.826.033-.289-.126-.336-.117-.672.14-.466.355-1.44.657-2.12.657-.747 0-.888.161-.819.93.082.898.258.962 1.562.566.71-.216.725-.216 1.414-.038.696.18.696.18.97-.038.535-.425.82-.516 3.036-.959 4.718-.944 6.617-1.263 7.14-1.2.543.066.974-.073 1.47-.475.25-.202.304-.21.664-.091.365.12.497.098 1.978-.33 2.309-.668 3.122-.844 4.687-1.02 1.73-.192 2.347-.36 2.808-.766l.359-.315.538.183.54.184.404-.268c.457-.303 1.72-.596 3.227-.75.878-.09 1.374-.248 1.374-.437 0-.042.323-.076.718-.076.498 0 .844-.059 1.125-.19.224-.105.703-.24 1.065-.3 5.497-.914 8.725-3.848 7.416-6.74l-.217-.48L44 3.78c1.377-.647 1.537-.805 1.255-1.235-.217-.33-.422-.314-1.872.15-1.803.576-1.666.566-2.393.17C39.026 1.799 35.89.923 33.05.647l-1-.097c-.165-.016-.48-.056-.7-.09-.22-.032-.554-.079-.743-.104-.56-.073-2.825-.137-3.257-.091zm5.1 3.285c2.126.478 4.075 1.166 3.874 1.367-.112.112-1.552.56-2.724.849-.603.148-.813.19-1.354.268a1.07 1.07 0 00-.3.085c-.053.03-.22.048-.371.04s-.275.013-.275.046c0 .319-3.928-.406-4.9-.905-2.637-1.353 1.935-2.676 6.05-1.75z"
        fill={props.color ?? 'black'}
      />
    </Svg>
  )
}

export default Hose
