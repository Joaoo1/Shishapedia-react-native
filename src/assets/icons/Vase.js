import Svg, { Path } from 'react-native-svg';

const Vase = (props) => (
    <Svg
      width={props.width ?? 52}
      height={props.height ?? 65}
      viewBox="0 0 400 391.534"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M178.042 15.4c-7.857.203-15.714.642-17.46.975-1.746.333-4.923.816-7.059 1.072-6.418.77-5.956-1.004-5.879 22.534.078 23.814-.137 25.22-3.99 26.189-10.3 2.59-15.065 12.421-13.51 27.876 1.53 15.217 1.613 16.909 1.117 22.621-.279 3.213-.76 6.507-1.069 7.32-.309.813-.562 2.509-.562 3.769 0 1.479-.264 2.391-.744 2.575-.409.157-.902 1.075-1.095 2.041-.578 2.884-3.427 10.934-5.287 14.94-.957 2.061-1.902 4.276-2.1 4.923-.432 1.41-2.729 3.321-3.991 3.321-1.246 0-2.579 1.597-2.971 3.559-.181.901-.719 1.771-1.197 1.934a9.265 9.265 0 00-1.663.806c-.436.281-1.562.819-2.5 1.197-.955.385-1.963 1.305-2.288 2.091-.42 1.014-.864 1.33-1.597 1.139-.791-.207-1.249.243-2.077 2.044-.585 1.27-.928 1.773-.762 1.118.598-2.367-1.22-1.264-2.897 1.757-1.61 2.902-5.612 5.475-9.169 5.897-1.616.191-3.091.707-3.564 1.246-.444.505-3.188 2.165-6.098 3.688-2.91 1.523-6.315 3.451-7.567 4.284-1.251.833-2.501 1.515-2.777 1.515-.791 0-2.619 2.032-2.619 2.91 0 .436-.417.801-.926.811-1.603.03-6.492 1.913-7.162 2.759-.354.446-1.595 1.112-2.759 1.48-3.66 1.157-14.296 7.454-16.413 9.717-.819.875-2.79 1.899-3.656 1.899-.424 0-1.678.833-2.785 1.85-1.108 1.017-2.226 1.85-2.486 1.852-.444.002-5.261 3.921-7.32 5.954-.516.51-1.172.926-1.459.926-.862 0-3.497 5.848-4.291 9.524-.53 2.453-.741 7.31-.737 16.931l.007 13.493 2.001 6.349c1.1 3.492 2.347 7.099 2.771 8.016.424.917.77 1.954.77 2.305 0 .871 3.034 4.656 5.291 6.6 1.019.878 3.183 2.846 4.81 4.374 1.627 1.528 3.217 2.779 3.534 2.779.316 0 1.459.833 2.539 1.852 1.08 1.018 2.168 1.851 2.419 1.851.25 0 .455.21.455.465 0 .256.774.756 1.719 1.112 2.96 1.113 4.351 1.839 4.769 2.488.533.829 3.489 2.285 4.639 2.285.502 0 1.209.357 1.571.793.363.437.961.794 1.331.794s.804.344.966.764c.161.42 1.258 1.053 2.437 1.407 1.18.353 2.145.84 2.145 1.081 0 .242.952.591 2.116.778 1.164.186 2.116.546 2.116.8 0 .253.431.461.957.461.527 0 1.42.35 1.985.777.564.427 1.477.784 2.026.793 2.039.035 3.445 4.28 1.646 4.971-1.134.435-1.134 15.739 0 20.093.437 1.676.794 3.483.794 4.015 0 .532.344 1.253.764 1.602.421.349 1.169 1.866 1.662 3.372 1.084 3.31 7.985 10.406 12.168 12.512 1.431.721 2.721 1.467 2.866 1.658.897 1.181 16.384 6.93 21.693 8.054 2.215.468 7.986 1.916 12.026 3.016 2.104.573 4.604 1.046 5.556 1.051.952.005 3.397.365 5.434.8 2.114.451 9.153 1.006 16.402 1.292 6.984.276 16.984.787 22.222 1.136 7.324.489 12.947.494 24.339.024 8.148-.336 20.291-.762 26.984-.946 6.693-.184 12.424-.536 12.735-.781.311-.246 3.168-.666 6.349-.934 7.845-.661 20.009-2.31 20.334-2.756.146-.2 2.05-.537 4.233-.75 2.183-.212 4.259-.622 4.615-.909.355-.288 1.427-.726 2.381-.975 6.513-1.698 10.719-2.546 14.168-2.857 5.471-.494 6.315-.761 6.652-2.106.311-1.239 2.719-2.946 4.155-2.946.836 0 4.636-2.25 6.03-3.57.384-.364 1.277-.662 1.984-.662.707 0 1.285-.228 1.285-.506 0-.808 2.616-3.198 3.501-3.198.444 0 1.139-.298 1.545-.662 1.704-1.528 2.342-1.984 2.776-1.984.653 0 2.76-2.331 2.76-3.054 0-.332.833-1.269 1.852-2.082 1.018-.813 1.851-1.75 1.852-2.082 0-.333.357-.742.793-.91.437-.167.794-.762.794-1.322s.357-1.155.793-1.323c.464-.178.794-.971.794-1.908 0-.883.179-1.606.397-1.608.889-.01 1.72-3.059 1.721-6.319.002-1.906.157-6.84.345-10.965l.344-7.499 3.755-1.801c10.108-4.848 11.8-5.741 13.192-6.958.825-.721 2.194-1.463 3.042-1.649.849-.187 1.543-.558 1.543-.826 0-.268.312-.487.694-.487.381 0 1.173-.447 1.76-.994.586-.546 1.584-1.158 2.217-1.358.632-.201 1.372-.78 1.643-1.286.271-.507 1.58-1.48 2.909-2.164 1.329-.684 2.417-1.444 2.417-1.689 0-.245.298-.461.661-.479.681-.034 6.842-6.901 7.225-8.053.118-.354 1.011-1.621 1.984-2.815.974-1.194 1.77-2.388 1.77-2.653 0-.266.468-1.356 1.041-2.424.89-1.66 2.275-5.678 4.249-12.329 2.714-9.139 2.384-28.672-.589-34.887-.549-1.146-.997-2.501-.997-3.012 0-.51-.242-1.077-.537-1.259-.296-.183-.858-1.09-1.249-2.015-.392-.926-1.519-2.441-2.505-3.367-3.011-2.825-8.832-7.576-9.294-7.585-.24-.005-1.012-.616-1.716-1.358-.703-.741-2.148-1.791-3.21-2.333-1.061-.541-2.241-1.359-2.621-1.817-.38-.458-1.026-.832-1.436-.832-.41 0-.881-.352-1.045-.781-.381-.992-3.161-2.394-4.749-2.394-.668 0-1.414-.356-1.658-.791-.243-.435-1.862-1.052-3.597-1.371-1.736-.32-3.49-.857-3.898-1.194-.417-.344-2.735-.644-5.291-.685-4.456-.071-4.552-.099-4.713-1.42-.126-1.037-.552-1.426-1.852-1.69-4.109-.835-5.656-1.405-5.656-2.082 0-.435-.847-.87-2.113-1.084-1.163-.196-2.248-.574-2.412-.84-.165-.266-.851-.483-1.526-.483-.674 0-1.523-.357-1.885-.794-.362-.436-1.128-.793-1.702-.793-.598 0-1.161-.452-1.319-1.059-.153-.582-.711-1.058-1.242-1.058s-1.113-.238-1.293-.529c-.179-.291-1.39-.529-2.689-.529-2.034 0-2.433-.184-2.866-1.323-.3-.788-.921-1.323-1.537-1.323-.568 0-1.39-.357-1.827-.793-.436-.437-1.049-.794-1.36-.794-.312 0-.567-.915-.567-2.034 0-2.067-1.205-3.786-2.653-3.786-.395 0-1.255-.504-1.911-1.121-.963-.905-1.48-1.03-2.68-.648-2.704.861-4.396.321-4.396-1.403 0-.833-.358-1.871-.794-2.308-.437-.436-.794-.947-.794-1.134 0-.807-1.619-1.852-2.872-1.852-.982 0-1.361-.278-1.361-1 0-.627-.495-1.125-1.322-1.333-.728-.183-1.323-.685-1.323-1.116 0-.518-.538-.783-1.587-.783-1.481 0-1.588-.133-1.591-1.984-.002-1.092-.322-2.58-.711-3.307a620.244 620.244 0 00-2.454-4.498c-2.799-5.086-4.239-8.044-4.239-8.709 0-1.299-2.278-5.841-2.93-5.841-.683 0-.835-1.077-1.609-11.376-.22-2.929.119-8.306 1.1-17.46 2.261-21.085 1.54-26.454-4.458-33.191-2.142-2.406-6.959-4.638-10.016-4.64-2.627-.002-3.06-3.431-3.435-27.206-.192-12.199-.408-22.226-.48-22.282-.434-.339-56.563-.496-68.384-.191"
        fillRule="evenodd"
        fill={props.color ?? 'black'}
      />
    </Svg>
  );

export default Vase;