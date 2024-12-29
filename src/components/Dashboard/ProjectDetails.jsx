import { threeDots } from "../../assets/Home/Common SVG Images/svg";
import mdKawsar from "../../assets/mdKawsar.jpg";

const ProjectDetails = () => {
  return (
    <div className="grid xl:grid-cols-12 grid-cols-1 gap-6 mx-6 mb-6">
      {/* inbox message  */}
      <div className="xl:col-span-4 bg-white rounded md:overflow-auto overflow-x-scroll">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Inbox</th>
              <th className="grid justify-end">
                {/* three dots button  */}
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn m-1 bg-transparent border-none shadow-none"
                  >
                    {threeDots}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-blue-50 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img draggable={false} src={mdKawsar} alt="UserImage" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Md Kawsar</div>
                    <div className="text-sm opacity-50">Feni, Bangladesh</div>
                  </div>
                </div>
              </td>
              <td className="grid justify-end">10:00am</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img draggable={false} src={mdKawsar} alt="UserImage" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Md Kawsar</div>
                    <div className="text-sm opacity-50">Feni, Bangladesh</div>
                  </div>
                </div>
              </td>
              <td className="grid justify-end">10:00am</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img draggable={false} src={mdKawsar} alt="UserImage" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Md Kawsar</div>
                    <div className="text-sm opacity-50">Feni, Bangladesh</div>
                  </div>
                </div>
              </td>
              <td className="grid justify-end">10:00am</td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img draggable={false} src={mdKawsar} alt="UserImage" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Md Kawsar</div>
                    <div className="text-sm opacity-50">Feni, Bangladesh</div>
                  </div>
                </div>
              </td>
              <td className="grid justify-end">10:00am</td>
            </tr>
            {/* row 5 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img draggable={false} src={mdKawsar} alt="UserImage" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Md Kawsar</div>
                    <div className="text-sm opacity-50">Feni, Bangladesh</div>
                  </div>
                </div>
              </td>
              <td className="grid justify-end">10:00am</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* project details  */}
      <div className="xl:col-span-8 bg-white rounded  md:overflow-auto overflow-x-scroll">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody className="lg:text-sm text-xs">
            {/* row 1 */}
            <tr className="border-[#ddd]">
              <th>1</th>
              <td>Build Communication</td>
              <td>01-02-2020</td>
              <td>01-01-2023</td>
              <td>
                <div className="badge badge-error text-white lg:text-[12px] text-[6px]  w-[50px] lg:min-w-fit">
                  Not Work
                </div>
              </td>
              <td>Md Kawsar</td>
            </tr>
            {/* row 2 */}
            <tr className="border-[#ddd]">
              <th>2</th>
              <td>Build Communication</td>
              <td>01-02-2020</td>
              <td>01-01-2023</td>
              <td>
                <div className="badge badge-error text-white lg:text-[12px] lg:min-w-fit text-[6px]">
                  Not Work
                </div>
              </td>
              <td>Md Kawsar</td>
            </tr>
            {/* row 3 */}
            <tr className="border-[#ddd]">
              <th>3</th>
              <td>Build Communication</td>
              <td>01-02-2020</td>
              <td>01-01-2023</td>
              <td>
                <div className="badge badge-error text-white lg:text-[12px] w-[50px] lg:min-w-fit text-[6px]">
                  Not Work
                </div>
              </td>
              <td>Md Kawsar</td>
            </tr>
            {/* row 4 */}
            <tr className="border-[#ddd]">
              <th>4</th>
              <td>Build Communication</td>
              <td>01-02-2020</td>
              <td>01-01-2023</td>
              <td>
                <div className="badge badge-error text-white lg:text-[12px]  w-[50px] lg:min-w-fit text-[6px]">
                  Not Work
                </div>
              </td>
              <td>Md Kawsar</td>
            </tr>
            {/* row 5  */}
            <tr className="border-[#ddd]">
              <th>5</th>
              <td>Build Communication</td>
              <td>01-02-2020</td>
              <td>01-01-2023</td>
              <td>
                <div className="badge badge-error text-white lg:text-[12px] w-[50px] lg:min-w-fit text-[6px]">
                  Not Work
                </div>
              </td>
              <td>Md Kawsar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectDetails;
