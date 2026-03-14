import { type PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

const PageLayout = ({children}: PropsWithChildren) => {
  return (
    <div className='container mx-auto my-5'>
        <section >
          <h2 className="py-3">
            <Header />
          </h2>
        </section>
        <section >          
          {children}
        </section>
        <section >
          <h2 className="py-3">
            <Footer className='w-50 m-auto' />
          </h2>
        </section>      
    </div>
  )
}

export default PageLayout
