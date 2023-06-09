function TestimonialCard({ img, name, children }) {
  return (
    <div className=" mt-10  bg-gray-400 rounded-lg p-10 ">
      <div className="flex flex-col items-center text-center ">
        <img src={img} alt="" className="w-20 rounded-full border-2" />
        <h3 className="font-bold pb-2">{name}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
