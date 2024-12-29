import DashboardTableData from './DashboardTableData';

const DashboardUsers = () => {
  const tableData = [
    {
      id: 1,
      blogName: 'Mastering in MERN Stack Web Application',
      blogImg: null,
      authorName: 'Jubair',
      authorImg: null,
      date: '23-11-2023',
      status: 'published',
    },
    {
      id: 2,
      blogName: 'Dive into App development',
      blogImg: null,
      authorName: 'Jubair',
      authorImg: null,
      date: '26-11-2023',
      status: 'pending',
    },
    {
      id: 3,
      blogName: 'Diven into Data Science',
      blogImg: null,
      authorName: 'Jubair',
      authorImg: null,
      date: '26-12-2023',
      status: 'published',
    },
  ];
  return (
    <div className='overflow-x-auto mx-auto'>
      <div className='flex font-sans overflow-hidden justify-center'>
        <div className='w-full lg:w-5/6'>
          <div className='bg-white shadow-md rounded my-6'>
            <table className='min-w-max w-full table-auto'>
              <thead>
                <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                  <th className='py-3 px-6 text-left'>User Name</th>
                  <th className='py-3 px-6 text-left'>Image</th>
                  <th className='py-3 px-6 text-center'>Date</th>
                  <th className='py-3 px-6 text-center'>Role</th>
                  <th className='py-3 px-6 text-center'>Actions</th>
                </tr>
              </thead>
              {tableData?.map((data) => (
                <DashboardTableData data={data} key={data.id} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsers;
