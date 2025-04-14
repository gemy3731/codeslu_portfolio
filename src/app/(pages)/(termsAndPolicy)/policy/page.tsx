
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const page = async () => {
  const res = await fetch(`${apiUrl}/api/privacy-policy`);
    const data = await res.json();
    console.log(data);

  return (
    <div className='container mx-auto px-4 md:px-0 py-10'>
      <h1 className='text-3xl font-bold text-center mb-10'>Privacy Policy</h1>
      <p  dangerouslySetInnerHTML={{ __html: data[0].description }}/>
    </div>
  )
}

export default page
