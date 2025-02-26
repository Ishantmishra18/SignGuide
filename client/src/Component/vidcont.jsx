import React ,{useEffect , useState} from 'react';
import { Link } from 'react-router-dom';


const VidCont = () => {

   const [videoDetail, setVid] = useState([]);
  
    useEffect(() => {
      fetch("/data/videos.json") // Fetch from public/data/quiz.json
        .then((res) => res.json())
        .then((data) => setVid(data.video)) // Assuming "quizzes" is the main key in JSON
        .catch((error) => console.error("Error fetching quizzes:", error));
    }, []);



  return (
    <div className='flex flex-wrap justify-center h-auto gap-6 py-12 mt-[6vh] overflow-x-hidden'>
      {videoDetail.map((val, index) => (
        <Link 
          to={`${val.videoLink}`} 
          key={index} 
          className='w-[22vw] max-w-[350px] h-auto pb-10 shadow-xl rounded-lg flex flex-col gap-4 cursor-pointer duration-200 hover:-translate-y-1'
        >
          <div className='thumbnail w-full aspect-video bg-neutral-300 rounded-lg relative overflow-hidden'>
            <img src={`/video/${val.videoLink}/thumb.png`} alt='Thumbnail' className='h-full w-full object-cover' />
            <div className='text-sm absolute px-2 py-1 rounded-lg bottom-1 right-1 bg-neutral-800 text-white'>
              {val.duration}
            </div>
          </div>
          <div className='details w-full h-auto flex flex-col px-3'>
            <h1 className='text-xl truncate'>{val.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VidCont;