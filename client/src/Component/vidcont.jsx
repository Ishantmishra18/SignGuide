import React from 'react';
import { Link } from 'react-router-dom';

const VidCont = () => {
  const videoDetail = [
    {
      title: 'The First Video on Chemistry',
      duration: '12:56',
      thumbnail: 'https://industrialscripts.com/wp-content/uploads/2021/05/Walter-White-Chemsitry-Teacher.jpeg',
      prof: 'Walter White',
      profPhoto: 'https://blenderartists.org/uploads/default/original/4X/9/2/9/9291f2ead33510dd50c2939484dde242aa9ce143.jpeg',
      videoLink: 'walter-white',
    },
    {
      title: 'The Art of Making Crystal Meth',
      duration: '17:23',
      thumbnail: 'https://pbs.twimg.com/media/Ex9avhGWEAERFUo.jpg:large',
      prof: 'Walter Black',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: 'walter-black',
    },
    {
      title: 'Nuclear Bomb Guide',
      duration: '21:43',
      thumbnail: 'https://cdn.rehabfiles.com/sites/ukat/wp-content/uploads/2024/01/breaking-bad-lab-making-meth.svg',
      prof: 'Heisenberg',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: 'heisenberg',
    },
    {
      title: 'Nuclear Bomb Guide',
      duration: '21:43',
      thumbnail: 'https://cdn.rehabfiles.com/sites/ukat/wp-content/uploads/2024/01/breaking-bad-lab-making-meth.svg',
      prof: 'Heisenberg',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: 'heisenberg',
    },
    {
      title: 'Nuclear Bomb Guide',
      duration: '21:43',
      thumbnail: 'https://cdn.rehabfiles.com/sites/ukat/wp-content/uploads/2024/01/breaking-bad-lab-making-meth.svg',
      prof: 'Heisenberg',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: 'heisenberg',
    },
    {
      title: 'Nuclear Bomb Guide',
      duration: '21:43',
      thumbnail: 'https://cdn.rehabfiles.com/sites/ukat/wp-content/uploads/2024/01/breaking-bad-lab-making-meth.svg',
      prof: 'Heisenberg',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: 'heisenberg',
    },
  ];

  return (
    <div className='flex flex-wrap justify-center h-auto gap-6 mt-[6vh] overflow-x-hidden'>
      {videoDetail.map((val, index) => (
        <Link 
          to={`${val.videoLink}`} 
          key={index} 
          className='w-[22vw] max-w-[350px] h-auto pb-10 shadow-xl rounded-lg flex flex-col gap-4 cursor-pointer duration-200 hover:-translate-y-1'
        >
          <div className='thumbnail h-[30vh] w-full bg-neutral-300 rounded-lg relative overflow-hidden'>
            <img src={val.thumbnail} alt='Thumbnail' className='h-full w-full object-cover' />
            <div className='text-sm absolute px-2 py-1 rounded-lg bottom-1 right-1 bg-neutral-800 text-white'>
              {val.duration}
            </div>
          </div>
          <div className='details w-full h-auto flex flex-col'>
            <h1 className='text-2xl truncate'>{val.title}</h1>
            <div className='flex gap-5 items-center text-gray-700'>
              <img src={val.profPhoto} alt='Author' className='h-8 w-8 rounded-full bg-black object-cover'/>
              <h4>by {val.prof}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VidCont;