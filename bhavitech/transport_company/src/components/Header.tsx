export default function Header() {
  return (
    <div className='container mx-auto my-5 '>
      <div className='flex border-b-2 border-b-gray-300 pb-3' >        
      <div className='logoWrapper relative h-20 w-40 md:h-20 md:w-48 lg:h-13 lg:w-80 my-auto' >        
        {/* <Image 
        src="../images/ketanLogo_dark.svg" 
        fill // Image will fill the parent
        style={{ objectFit: 'cover' }} // CSS styling
        alt='ketanLogo'
        sizes="(max-width: 200px) 100vw, 50vw" //
        /> */}
        <span className='text-3xl' >Transport <span className='font-extrabold text-linkColor' >Demo</span></span>
      </div>
      <div className='flex-auto px-5'>
        {/* center  */}
      </div>
      <div>        
        {/* <button className='cursor-pointer' onClick={oauthSignOut}>Sign Out</button> */}
        </div>
      </div>
    </div>
  )
}
