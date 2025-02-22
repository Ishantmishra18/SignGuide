import React from 'react';
import {Link } from 'react-router-dom'


const VidCont = () => {

  const videoDetail = [
    {
      title: 'The First Video on Chemistry',
      duration: '12:56',
      thumbnail: 'https://industrialscripts.com/wp-content/uploads/2021/05/Walter-White-Chemsitry-Teacher.jpeg',
      prof: 'Walter White',
      profPhoto: 'https://blenderartists.org/uploads/default/original/4X/9/2/9/9291f2ead33510dd50c2939484dde242aa9ce143.jpeg',
      videoLink: '/walter-white',
    },
    {
      title: 'The Art of Making Crystal Meth',
      duration: '17:23',
      thumbnail: 'https://pbs.twimg.com/media/Ex9avhGWEAERFUo.jpg:large',
      prof: 'Walter Black',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: '/walter-black',
    },
    {
      title: 'Nuclear Bomb Guide',
      duration: '21:43',
      thumbnail: 'https://cdn.rehabfiles.com/sites/ukat/wp-content/uploads/2024/01/breaking-bad-lab-making-meth.svg',
      prof: 'Heisenberg',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: '/heisenberg',
    },
    {
      title: 'How to Start Your Own Brand',
      duration: '47:23',
      thumbnail: 'https://i.pinimg.com/originals/b6/17/bb/b617bbb33d2e2926664cd03d8fe1ccf3.jpg',
      prof: 'Gus',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: '/gus',
    },
    {
      title: 'My Wisdom on Your Regrets',
      duration: '11:12',
      thumbnail: 'https://metro.co.uk/wp-content/uploads/2019/09/breaking-bad-mike-main-ac02.jpg?quality=90&strip=all&crop=0px%2C23px%2C900px%2C473px&resize=1200%2C630',
      prof: 'Mike',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: '/mike',
    },
    {
      title: 'Career as a Legal Advisor',
      duration: '26:23',
      thumbnail: 'https://images.theconversation.com/files/479051/original/file-20220814-34367-qta4ii.jpg?ixlib=rb-4.1.0&rect=69%2C43%2C5571%2C2824&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
      prof: 'Saul Goodman',
      profPhoto: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
      videoLink: '/saul-goodman',
    },
  ];

  return (
    <div className='w-screen flex flex-wrap justify-start h-auto gap-6 mt-[6vh] overflow-hidden'>
      {videoDetail.map((val, index) => (
        <Link to={`/vid${val.videoLink}`}
          key={index}
          className='w-[22vw] max-w-[350px] h-auto pb-10 shadow-xl rounded-lg flex flex-col gap-4 p-2 cursor-pointer duration-200 hover:-translate-y-1'
        >
          <div className="thumbnail h-[30vh] w-full bg-neutral-300 rounded-lg relative overflow-hidden">
            <img src={val.thumbnail} alt="Thumbnail" className='h-full w-full object-cover' />
            <div className="text-sm time absolute px-2 py-1 rounded-lg bottom-1 right-1 bg-neutral-800 text-white">{val.duration}</div>
          </div>
          <div className="details w-full h-auto flex flex-col">
            <h1 className='text-2xl truncate'>{val.title}</h1>
            <div className="flex gap-5 items-center text-gray-700">
              <img src={val.profPhoto} alt="Author" className='h-8 w-8 rounded-full bg-black object-cover'/>
              <h4>by {val.prof}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VidCont;
