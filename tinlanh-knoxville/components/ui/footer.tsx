import Link from "next/link"


export const Footer = () => {
    const center = 'd-flex justify-content-center align-items-center '
    return (
        <div className='text-center py-5 space-y-8 border-t-2 flex flex-col lg:flex-row lg:space-x-8 lg:justify-evenly lg:items-center'>

            <div>
                <p>Hội Thánh Tin Lành Việt Nam</p>
                <p className='text-4xl font-bold' >Knoxville</p>
            </div>

            <div>
                <h6 className="font-bold">Thờ Phượng Chúa Nhật</h6>
                <p>1:30PM  - 3:30PM</p>
                <p>8000 Middlebrook Pike</p>
                <p>Knoxville, TN, 37909</p>
            </div>

            <div className='space-x-5'>
                <Link href="#">Hội Thánh</Link>
                <Link href="#">Góp ý</Link>
                <Link href="#">Liên hệ</Link>
                <Link href="#">Tiếng Anh</Link>
                <small className="block">&copy; 2023 All rights reserved</small>
            </div>


        </div>
    )
}
