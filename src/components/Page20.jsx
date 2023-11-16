const Page20 = () => {

    return (<section className="main-container bangla">
        <div className="card card-info">

            <div className="card-body" style={{backgroundColor: '#E5F1D4'}}>
                <div style={{textAlign: 'center', padding: '10px', backgroundColor: '#ee4023', color: '#FFF'}}>
                    ১৫ বছর বয়স হলেই টিটি/টিডি টিকা নেয়া শুরু করুন এবং <br/>পরবর্তীতে ৫ ডোজ টিটি/টিডি টিকার
                    সময়সূচি অনুযায়ী অবশিষ্ট<br/>
                    টিটি/টিডি নেয়া শেষ করুন।
                </div>

                <table className="table-b">
                    <tbody>
                    <tr style={{backgroundColor: '#ffd4c5'}}>
                        <td>টিকার ডোজ</td>
                        <td>টিকা শুরু করার সঠিক বয়স</td>
                        <td>টিকা পাওয়ার তারিখ</td>
                        <td>টিকা প্রদানের তারিখ ও কর্মীর স্বাক্ষর</td>
                    </tr>
                    <tr>
                        <td>টিটি/টিডি-১</td>
                        <td>১৫ বছর বয়স
                            হলেই
                        </td>
                        <td>টিকা পাওয়ার তারিখ</td>
                        <td>টিকা প্রদানের তারিখ ও কর্মীর স্বাক্ষর</td>
                    </tr>
                    <tr>
                        <td>টিটি/টিডি-২</td>
                        <td>টিটি/টিডি-১ পাওয়ার
                            কমপক্ষে ২৮ দিন
                            পর
                        </td>
                        <td>টিকা পাওয়ার তারিখ</td>
                        <td>টিকা প্রদানের তারিখ ও কর্মীর স্বাক্ষর</td>
                    </tr>
                    <tr>
                        <td>টিটি/টিডি-৩</td>
                        <td>টিটি/টিডি-২ পাওয়ার
                            কমপক্ষে ৬ মাস প
                        </td>
                        <td>টিকা পাওয়ার তারিখ</td>
                        <td>টিকা প্রদানের তারিখ ও কর্মীর স্বাক্ষর</td>
                    </tr>
                    <tr>
                        <td>টিটি/টিডি-৪</td>
                        <td>টিটি/টিডি-৩ পাওয়ার
                            কমপক্ষে ১ বছর
                            পর
                        </td>
                        <td>টিকা পাওয়ার তারিখ</td>
                        <td>টিকা প্রদানের তারিখ ও কর্মীর স্বাক্ষর</td>
                    </tr>
                    <tr>
                        <td>টিটি/টিডি-৫</td>
                        <td>টিটি/টিডি-৩ পাওয়ার
                            কমপক্ষে ১ বছর
                            পর
                        </td>
                        <td>টিকা পাওয়ার তারিখ</td>
                        <td>টিকা প্রদানের তারিখ ও কর্মীর স্বাক্ষর</td>
                    </tr>
                    </tbody>
                </table>
                <div className='text-center' style={{padding: '20px', backgroundColor: ' #ffd4c5'}}>
                    টিকা পাওয়ার তারিখঃ রেজিস্ট্রেশনের সময় কিশোরী/মহিলার প্রাপ্য টিটি/টিডি টিকা
                    পাওয়ার তারিখ লিখে দিবেন এবং পরবর্তী টিটি/টিডি টিকার ডোজ পাওয়ার পরিপ্রেক্ষিতে
                    টিটি/টিডি টিকার সময়সূচি ঠিক রেখে ইপিআই সেশন প্লান অনুযায়ী পরবর্তী ডোজ টিটি/টিডি
                    টিকার তারিখ লিখে দিবেন।
                    টিকা প্রদানের তারিখ ও কর্মীর স্বাক্ষরঃ কেন্দ্রে টিকা প্রদানের পর টিকাদানকর্মী
                    তারিখ লিখে স্বাক্ষর দিবেন।
                </div>
                <div className='text-center text-white' style={{padding: '10px', backgroundColor: '#ee4023'}}>
                    কার্ডটি যত্ন করে রাখুন। যখনই স্বাস্থ্য কেন্দ্রে/টিকাদান<br/>
                    কেন্দ্রে যাবেন টিটি/টিডি টিকার কার্ডটি সাথে নিন।
                </div>

                <div style={{border: 'solid 1px #000', padding: '10px', marginTop: '5px'}}>
                    <img src="assets/images/page20-footer.png" className="w-100" alt='Footer' />
                </div>
            </div>
            {/*    End of card body */}

        </div>
    </section>
);
};

export default Page20;