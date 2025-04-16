import { Button } from 'flowbite-react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';


const SeeMoreBtn = ({path}:{path:string}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const onSeeMore = () => {
        setIsLoading(true);
        router.push(`/${path}`);
        setIsLoading(false)
      };

  return (
    <Button onClick={onSeeMore} className="forumBtn px-4 py-1 rounded-3xl  mx-auto mb-20">
           <span className="z-[1]">{isLoading?<ImSpinner9 className='animate-spin' />:"See more..."} </span>
            <div className="forumBtn-overlay"></div>
          </Button>
  )
}

export default SeeMoreBtn
