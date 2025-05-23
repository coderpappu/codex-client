const DashboardTableData = ({ data }) => {
  const { blogName, blogImg, authorName, authorImg, date, status } = data;
  return (
    <tbody className="text-gray-600 text-sm font-light">
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{blogName}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">
          <div className="flex items-center">
            <div className="mr-2">
              <img
                className="w-6 h-6 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
              />
            </div>
            <span>{authorName}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <h2>{date}</h2>
        </td>
        <td className="py-3 px-6 text-center">
          {status === "published" ? (
            <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
              published
            </span>
          ) : (
            <span className="bg-purple-200 text-violet-600 py-1 px-3 rounded-full text-xs">
              pending
            </span>
          )}
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center gap-2 justify-center">
            <div title="Active Or Disable Account" className="w-5 mr-2 cursor-pointer transform hover:text-purple-500 hover:scale-110">
              {/* Preview Blog button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default DashboardTableData;
