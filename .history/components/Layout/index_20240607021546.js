import SchoolNavbar from './navbar'

 
export default function Layout({ children }) {
  return (
    <>
   <SchoolNavbar></SchoolNavbar>
      <main>{children}</main>
    
    </>
  )
}