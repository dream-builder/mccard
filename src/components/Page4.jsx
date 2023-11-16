import React from 'react';

const Page4 = () => {

    return (<section className="main-container bangla">
            <div className="card card-info">

                <div className="card-body">

                    <div className="row">
                        <div>৬. গর্ভকালীন সেবা</div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">শেষ মাসিকের তারিখ</div>
                        <div className="col-md-3">প্রসবের সম্ভাব্য তারিখ</div>
                        <div className="col-md-3">গ্রাভিডা</div>
                        <div className="col-md-3">প্যারা</div>
                    </div>

                    <div className="row">
                        <div className='overflow-scroll'>
                            <table className="table-b  min-height">

                                <thead className="bangla ">
                                <tr className='text-center'>
                                    <th colSpan="7" rowSpan="2"></th>
                                    <th colSpan="5">শারীরিক পরীক্ষা</th>
                                    <th colSpan="7">ল্যাব এবং অন্যান্য পরীক্ষার ফলাফ</th>
                                    <th colSpan="5"></th>
                                </tr>
                                <tr className='text-center'>
                                    <th></th>
                                    <th></th>
                                    <th colSpan="3">গর্ভস্থ শিশু</th>
                                    <th colSpan="4">রক্ত পরীক্ষা</th>
                                    <th colSpan="2">প্রস্রাব পরীক্ষা</th>
                                    <th></th>
                                    <th colSpan="5"></th>
                                </tr>
                                <tr className="verticalTableHeader">
                                    <th className="bangla">তারিখ</th>
                                    <th>গর্ভকাল (সপ্তাহ)</th>
                                    <th>ওজন (কেজি)</th>
                                    <th>নাড়ীর স্পন্দন/মিনিট</th>
                                    <th>রক্তচাপ (মি.মি মার্কারী)</th>
                                    <th>রক্তসল্পতা (হ্যাঁ / না)</th>
                                    <th>জন্ডিস</th>
                                    <th>(ইডিমা)</th>
                                    <th>জরায়ুর উচ্চতা (সপ্তাহ/সেমি)</th>

                                    <th>স্বাভাবিক অবস্থান (হ্যাঁ / না)</th>
                                    <th>নাড়াচাড়া (স্বাভাবিক/কম/নাড়াচাড়া না করা)</th>
                                    <th>হৃদস্পন্দন (.......... বার মিনিট)</th>
                                    <th>রক্তের সুগার</th>
                                    <th>হিমোগ্লোবিন (গ্রাম/ডি.এল%)</th>
                                    <th>VDRL (-/+)</th>
                                    <th>HBsAg (-/+)</th>
                                    <th>এলবুমিন (নাই/আছে)</th>
                                    <th>সুগার (নাই/আছে)</th>
                                    <th>অনন্যান্য পরীক্ষার ফল</th>
                                    <th>চিকিৎসা ও পরামর্শ রেফার/</th>
                                    <th>পরবর্তী পরিদর্শনের তারিখ</th>
                                    <th>সেবা কেন্দ্রের নাম</th>
                                    <th>সেবা প্রদানকারীর নাম ও পদবী</th>
                                    <th>স্বাক্ষর</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    {/*Delivery plan*/}
                    <div className="row" style={{marginTop: '30px'}}>
                        <div>৭. প্রসব পরিকল্পনা এবং মা ও নবজাতকের বিপদচিহ্ন</div>
                    </div>

                    <div className="row">
                        <div style={{overflow: 'scroll', width: '100%'}}>
                            <table className="table-b bangla">
                                <tbody>
                                <tr>
                                    <td style={{width: '80%'}}>ক. প্রসব পরিকল্পনা</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        কোথায় প্রসব করাবেন?<br/>
                                        <label><input type="checkbox" disabled/> হাসপাতাল</label>
                                        <label><input type="checkbox" disabled/> ইউএইচএফডবিøউসি</label>
                                        <label><input type="checkbox" disabled/> সিসি</label>
                                        <label><input type="checkbox" disabled/> বাড়ী</label>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>কে আপনার প্রসব করাবেন?</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>গর্ভাবস্থায় সমস্যা হলে কোন হাসপাতালে যাবেন?</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>জরুরি প্রয়োজনে হাসপাতালে যাবার জন্য যানবাহনের ব্যবস্থা আছে কি?</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>যাতায়াত ও চিকিৎসার জন্য অর্থ সঞ্চয় করেছেন কি?</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>প্রয়োজনে রক্তদাতা ঠিক করে রেখেছেন কি?</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>সমস্যা হলে হাসপাতালে আপনার সঙ্গে কে যাবে?</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{overflow: 'scroll', width: '100%'}}>
                            <table className="table-b bangla">
                                <thead>
                                <tr>
                                    <th>খ. প্রসবপূর্ব, প্রসবকালীন ও প্রসব পরবর্তী মায়ের বিপদচিহ্ন</th>
                                    <th>গ. নবজাতকের বিপদচিহ্ন</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>গর্ভাবস্থায় রক্ত¯্রাব</td>
                                    <td>বুকের দুধ টানতে না পারা অথবা নেতিয়ে পড়া</td>
                                </tr>
                                <tr>
                                    <td>প্রসবের সময় বা প্রসবের পর খুব বেশি রক্ত¯্রাব</td>
                                    <td>খিঁচুনী</td>
                                </tr>
                                <tr>
                                    <td>গর্ভফুল না পড়া</td>
                                    <td>শরীরের তাপমাত্রা বেড়ে যাওয়া বা জ্বর</td>
                                </tr>
                                <tr>
                                    <td>অতিরিক্ত মাথা ব্যাথা ও চোখে ঝাপসা দেখা</td>
                                    <td>শরীরের তাপমাত্রা কমে যাওয়া বা ঠান্ডা হওয়া;</td>
                                </tr>
                                <tr>
                                    <td>ভীষণ জ্বর (১০০ বা. এর উপরে)/ দুর্গন্ধযুক্ত যোনী¯্রাব</td>
                                    <td>দ্রæত শ্বাস নেয়া অথবা বুকের খাঁচা ভেতরে দেবে যাওয়া</td>
                                </tr>
                                <tr>
                                    <td>বিলম্বিত প্রসব/ বাধাগ্রস্থ প্রসব</td>
                                    <td>নাভি পাকা</td>
                                </tr>
                                <tr>
                                    <td>খিঁচুনি</td>
                                    <td>&nbsp;</td>
                                </tr>

                                </tbody>

                            </table>
                        </div>

                        <div>* মা অথবা নবজাতকের উপরোক্ত কোন একটি বিপদচিহ্ন দেখা দিয়ে দ্রæত হাসপাতালে যেতে হবে
                        </div>

                        <div style={{overflow: 'scroll', width: '100%'}}>
                        </div>
                    </div>

                    <div className="row" style={{marginTop: '30px'}}>
                        <div>৮. গর্বকালীন অন্যান্য সেবাঃ</div>
                    </div>

                    <div className="row">
                        <div style={{overflow: 'scroll', width: '100%'}}>
                            <table className="table-b bangla">
                                <tbody>
                                <tr>
                                    <td>ক. ৮ মাস গর্ভাবস্থা পূর্ণ হবার পর মিসোপ্রস্টোল বড়ি সরবরাহ করা হয়েছে/
                                        পেয়েছে কি না
                                    </td>
                                    <td>
                                        <input type="checkbox" disabled/> হ্যাঁ &nbsp;&nbsp;
                                        <input type="checkbox" disabled/> না
                                    </td>
                                </tr>
                                <tr>
                                    <td>খ. ৮ মাস গর্ভাবস্থা পূর্ণ হবার পর ৭.১% ক্লোরহেক্সিডিন সরবরাহ করা হয়েছে/
                                        পেয়েছে কি না
                                    </td>
                                    <td>
                                        <input type="checkbox" disabled/> হ্যাঁ &nbsp;&nbsp;
                                        <input type="checkbox" disabled/> না
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>


                        <div style={{overflow: 'scroll', width: '100%'}}>
                        </div>
                    </div>
                </div>
                {/*    End of card body */}

            </div>
        </section>
    );
};

export default Page4;