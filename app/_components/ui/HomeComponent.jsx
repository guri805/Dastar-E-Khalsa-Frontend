import Link from "next/link"
import FormComponent from "../FormComponent"

const HomeComponent = () => {
    return (
        <section className="hero">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Image */}
                <div className="image w-full h-auto md:h-[20vh] lg:h-[23vh] py-1">
                    <img src="headerImage.png" alt="header image" className="w-full h-full rounded-2xl" />
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row lg:h-auto text-black pt-2 pb-2">
                    {/* Left Section (Heading and Instructions) */}
                    <div className="heading lg:border-r-2 sm:border-b-2 lg:border-b-0 sm:border-r-0 border-black h-full flex flex-col gap-2 px-4 py-2 lg:basis-[45%]">
                        <div className="title text-center">
                            <h2 className="text-lg font-bold underline pb-2">ਹਦਾਇਤਾਂ(Instructions)</h2>
                        </div>
                        <div className="subheading">
                            <h4 className="text-base">ਸਥਾਨ: ਕਰਨ ਫਾਰਮ, ਰਾਜਪੁਰਾ</h4>
                            <h4 className="text-base">ਦਿਨ: 30 ਮਾਰਚ 2025</h4>
                            <h4 className="text-base">ਸਮਾਂ: ਸਵੇਰੇ 9:00 ਵਜੇ ਤੋਂ ਦੁਪਹਿਰ 2:00 ਵਜੇ ਤੱਕ</h4>
                        </div>
                        <div className="conditon-list">
                            <h4 className="font-semibold text-base">ਸਰਤਾਂ</h4>
                            <div className="list ps-4 mt-1">
                                <ul className="list-disc pl-6 space-y-1 text-sm">
                                    <li>ਆਪਣਾ ਆਧਾਰ ਕਾਰਡ ਆਈ ਡੀ ਨਾਲ ਲੈਕੇ ਆਉਣ</li>
                                    <li>ਦਸਤਾਰ ਮੁਕਾਬਲੇ ਵਿਚ ਪਹਿਲਾ ਜੇਤੂਆਂ ਦਾ ਦਸਤਾਰ ਮੁਕਾਬਲਾ ਅਲੱਗ ਹੋਵੇਗਾ</li>
                                    <li>ਇਸ ਮੁਕਾਬਲੇ ਵਿਚ ਦਸਤਾਰ ਕੋਚ ਭਾਗ ਨਹੀਂ ਲੈ ਸਕਦੇ</li>
                                    <li>ਨੌਜਵਾਨ ਬਾਜ ਸੀਸਾ‌ ਪੱਗ ਪਿੰਨ ਆਪੋ ਆਪਣਾ ਨਾਲ ਲੈਕੇ ਆਉਣ</li>
                                    <li>ਦਸਤਾਰ ਮੁਕਾਬਲੇ ਦਾ ਟਾਈਮ ੧੨ ਮਿੰਟ ਦਾ ਹੋਵੇਗਾ</li>
                                    <li>ਉਮਰ 8-15 ਸਾਲ ਤੱਕ ਜੂਨੀਅਰ  ਗਰੁੱਪ</li>
                                    <li>ਉਮਰ 16 ਤੋ 25 ਸਾਲ ਸੀਨੀਅਰ ਗਰੁੱਪ</li>
                                    <li>ਜੱਜ ਸਾਹਿਬਾਨ ਦਾ ਫੈਸਲਾ ਅਟੱਲ ਹੋਵੇਗਾ</li>
                                    <li>ਵਡੇ ਵੀਰਾ ਅਤੇ ਭੈਣਾ ਲਈ 25 ਸਾਲ ਤਕ ਦੀ ਉਮਰ ਨਿਰਧਾਰਿਤ ਕੀਤੀ ਗਈ ਹੈ ਇਸ ਤੋ ਜਿਆਦਾ ਉਮਰ ਦੇ ਵੀਰ ਭੈਣਾਂ ਹਿੱਸਾ ਨਹੀਂ ਲੈ ਸਕਦੇ</li>
                                    <li>ਦੋਨੋ ਹੀ ਗਰੁੱਪ ਦੇ ਬੱਚੇ ਦਸਤਾਰ ਅਤੇ ਦੁਮਾਲੇ ਆਪਣੇ ਲੈ ਕੇ ਆਉਣ ਜੀ</li>
                                    <li>ਰਜਿਸਟ੍ਰੇਸ਼ਨ 30/ਮਾਰਚ/2025 ਨੂੰ ਸਵੇਰੇ 11.00 ਵਜੇ ਬੰਦ ਹੋ ਜਾਵੇਗੀ</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Form Component) */}
                    <div className="lg:basis-[55%] px-4 py-2 mt-4 lg:mt-0">
                        <FormComponent />
                    </div>
                </div>

                {/* Admin Login Link */}
                <div className="link text-end">
                    <Link href={"/"} className="text-blue-400 underline">Login As Admin</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeComponent
