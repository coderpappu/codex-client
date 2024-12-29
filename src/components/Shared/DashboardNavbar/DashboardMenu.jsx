import { imageFrame } from '../../../assets/Home/Common SVG Images/svg';
import adminImage from '../../../assets/blogAuthor.png';
export default function DashboardMenu() {
  return (
    <section>
      <div className='flex items-center flex-col'>
        {!adminImage ? (
          <img draggable={false} src={adminImage} className='w-[40px]' alt='Admin Image' />
        ) : (
          <span>{imageFrame}</span>
        )}

        <h2>Mohammad Ikhtiar Uddin</h2>
        <p>Admin</p>
      </div>
      <div>
        <p>Navigator</p>
    <button>Dashboard</button>
      </div>
    </section>
  );
}
