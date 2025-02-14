import FormComponent from "../FormComponent"

const HomeComponent = () => {
    return (
        <section className="hero my-4">
            <div className="w-[50%] mx-auto">
                <div className="heading bg-white rounded-xl border-t-[12px] border-t-[rgb(226,197,79)] flex flex-col gap-4 px-4 py-4 border">
                    <div className="title ">
                        <h1 className="text-center">ਦਸਤਾਰ-ਏ-ਖਾਲਸਾ</h1>
                    </div>
                    <div className="subheading ">
                        <h4>ਸਥਾਨ: ਕਰਨ ਫਾਰਮ, ਰਾਜਪੁਰਾ</h4>
                        <h4>ਦਿਨ: 30 ਮਾਰਚ 2025</h4>
                        <h4>ਸਮਾਂ: ਸਵੇਰੇ 9:00 ਵਜੇ ਤੋਂ ਦੁਪਹਿਰ 2:00 ਵਜੇ ਤੱਕ</h4>
                    </div>
                    <div className="conditon-list">
                        <h4 className="">ਸਰਤਾਂ</h4>
                        <div className="list ps-4 mt-1">
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>ਆਪਣਾ ਆਧਾਰ ਕਾਰਡ ਆਈ ਡੀ ਨਾਲ ਲੈਕੇ ਆਉਣ</li>
                                <li>ਦਸਤਾਰ ਮੁਕਾਬਲੇ ਵਿਚ ਪਹਿਲਾ ਜੇਤੂਆਂ ਦਾ ਦਸਤਾਰ ਮੁਕਾਬਲਾ ਅਲੱਗ ਹੋਵੇਗਾ </li>
                                <li>ਇਸ ਮੁਕਾਬਲੇ ਵਿਚ ਦਸਤਾਰ ਕੋਚ ਭਾਗ ਨਹੀਂ ਲੈ ਸਕਦੇ</li>
                                <li>ਨੌਜਵਾਨ ਬਾਜ ਸੀਸਾ‌ ਪੱਗ ਪਿੰਨ ਆਪੋ ਆਪਣਾ ਨਾਲ ਲੈਕੇ  ਆਉਣ</li>
                                <li>ਦਸਤਾਰ ਮੁਕਾਬਲੇ ਦਾ ਟਾਈਮ ੧੨ ਮਿੰਟ ਦਾ ਹੋਵੇਗਾ</li>
                                <li>ਉਮਰ 8-15 ਸਾਲ ਤੱਕ ਜੂਨੀਅਰ  ਗਰੁੱਪ</li>
                                <li>ਉਮਰ 16 ਤੋ 25 ਸਾਲ ਸੀਨੀਅਰ ਗਰੁੱਪ</li>
                                <li>ਜੱਜ ਸਾਹਿਬਾਨ ਦਾ ਫੈਸਲਾ ਅਟੱਲ ਹੋਵੇਗਾ</li>
                                <li>ਵਡੇ ਵੀਰਾ ਅਤੇ ਭੈਣਾ ਲਈ 25 ਸਾਲ ਤਕ ਦੀ ਉਮਰ ਨਿਰਧਾਰਿਤ ਕੀਤੀ ਗਈ ਹੈ ਇਸ ਤੋ ਜਿਆਦਾ ਉਮਰ ਦੇ ਵੀਰ ਭੈਣਾਂ ਹਿੱਸਾ ਨਹੀਂ ਲੈ ਸਕਦੇ </li>
                                <li>ਦੋਨੋ ਹੀ ਗਰੁੱਪ ਦੇ ਬੱਚੇ ਦਸਤਾਰ ਅਤੇ ਦੁਮਾਲੇ ਆਪਣੇ ਲੈ ਕੇ ਆਉਣ ਜੀ </li>
                                <li>ਰਜਿਸਟ੍ਰੇਸ਼ਨ 30/ਮਾਰਚ/2025 ਨੂੰ ਸਵੇਰੇ 11.00 ਵਜੇ ਬੰਦ ਹੋ ਜਾਵੇਗੀ </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <FormComponent/>
            </div>
        </section>
    )
}

export default HomeComponent
