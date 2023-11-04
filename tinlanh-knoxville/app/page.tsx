export default function Home() {
  return (
    <main className="container bg-gray-400 mx-auto flex min-h-screen flex-col items-center justify-center">

      <div 
      className="w-full h-screen relative bg-bottom bg-cover flex justify-center items-center"
      style={{backgroundImage : `url("https://images.unsplash.com/photo-1606092047066-ed7912359ff3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}
      >
      
      <div className="backdrop-blur-lg p-10 rounded-lg text-white flex flex-col justify-center items-center gap-8">
         <h3 className="text-4xl text-center">Thờ Phượng Chúa Nhật Hàng Tuần</h3>

         <div className="text-center">
          <p>1:30PM - 3:30PM</p>
          <p>Nhà Thờ Fellowship</p>
          <p>8000 Middlebrook Pike, Knoxville, TN 37909</p>
         </div>
      </div>

      </div>
    </main>
  )
}
