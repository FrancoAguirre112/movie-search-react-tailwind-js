function ListItem({ number, title, children }) {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
      {/* Number and title */}
      <div className="rounded-full border-2 bg-gray-400 flex gap-3">
        <div className="px-4 py-2 text-black rounded-full font-bold bg-white">
          {number}
        </div>
        <h3 className="text-md font-bold flex items-center">{title}</h3>
      </div>

      {/*Description */}
      <div className="flex pt-2 text-gray-300">
        <p>{children}</p>
      </div>
    </div>
  );
}

export default ListItem;
