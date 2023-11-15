import React from 'react'
import ArabicLogo from "../../Assets/images/arabic-logo.png"

const Header = () => {
  return (
    <main className="bg-transparent absolute fixed top-14 text-white flex items-center w-screen justify-between px-36">
        <div>
            <button className="bg-pink-700 px-3.5 py-8 rounded w-52">احصل علي الخدمة</button>
        </div>
        <div className=" flex gap-6">
            <button>اتصل بنا</button>
            <button>المقالات المتخصصة</button>
            <button>شركائنا</button>
            <button>عملائنا</button>
            <button>أعمالنا</button>
            <button>عن روبكس</button>
        </div>
        <div>
            <img src={ArabicLogo}/>
        </div>
    </main>
  )
}

export default Header