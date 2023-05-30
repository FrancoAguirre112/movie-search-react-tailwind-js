function ListItem({ number, title, children }) {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
      <div className="rounded-full bg-orange-200">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full font-bold bg-orange-500">
            {number}
          </div>
          <h3 className="text-base font-bold">{title}</h3>
        </div>
      </div>
      <div className="flex pt-2">
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
}

export default ListItem;
