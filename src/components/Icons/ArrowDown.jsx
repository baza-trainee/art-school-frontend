const ArrowDown = ({ hovered }) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.2929 3.52711C23.6834 3.13658 23.6834 2.50342 23.2929 2.11289L21.8863 0.706336C21.4961 0.316113 20.8635 0.315768 20.4729 0.705565L12 9.16L3.52711 0.705565C3.13646 0.315767 2.50389 0.316113 2.11366 0.706336L0.707106 2.11289C0.316582 2.50342 0.316582 3.13658 0.707108 3.52711L12 14.82L23.2929 3.52711Z"
        fill={!hovered ? 'black' : '#d66600'}
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default ArrowDown;
