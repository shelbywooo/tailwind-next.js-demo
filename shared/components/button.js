const Button = ({ buttonText }) => {
  return (
    <button className="bg-pink-400 text-pink-100 transition-shadow duration-5000 hover:shadow-md block rounded center mx-auto my-20 px-10 py-5">
      {buttonText}
    </button>
  );
};

export default Button;
