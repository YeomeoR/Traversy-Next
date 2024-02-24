import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse',
  description: 'Property Pulse is a real estate platform that helps you find the perfect home.',
  keywords: 'real estate, property, home, buy, sell, rent'
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div> 
        
      </body>
    </html>
  )
}

export default MainLayout;