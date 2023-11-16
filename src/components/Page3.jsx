import React from 'react';
import usePage3Store from "../store/page3.store";

const Page3 = () => {
    const {data, setData} = usePage3Store();
    const onchange = (name, value) => {
        setData(name, value);
    }
    return (<section className="main-container bangla">
            <div className="card card-info">
                <div className="card-body">
                    <div className="gov">
                        <div className='text-center'>
                            <img className="gov-logo" style={{height: "100px"}}
                                 src="/assets/images/bd-govt-logo.png" alt="Logo"/>
                        </div>
                        <div className='text-center'>
                            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার<br/>
                            মাতৃ স্বাস্থ্য কর্মসূচী<br/>
                            স্বাস্থ্য অধিদপ্তর, মহাখালী, ঢাকা-১২১২<br/><br/>
                            <h4>মাতৃত্ব সেবা কার্ড (এএনসি ও পিএনসি কার্ড)</h4>
                            <br/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label bangla">সেবা কেন্দ্রের নাম</label>
                        <div className="col-sm-8">
                            <input type='text' className='form-control bangla dotted' value={data.service_center_name}
                                   onChange={e => onchange('service_center_name', e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label bangla">গর্ভবতী মহিলার পরিচিতি</label>
                        <div className="col-sm-8">
                            <input type='text' className='form-control bangla dotted' value={data.pregnant_lady_name}
                                   onChange={e => onchange('pregnant_lady_name', e.target.value)}/>
                        </div>
                    </div>

                    <div>
                        <table className="table-b bangla ">
                            <tbody>
                            <tr>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>মহিলার নাম</div>
                                        <div className='field'>
                                            <input type='text' className='form-control' value={data.lady_name}
                                                   onChange={e => onchange('lady_name', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>বয়স</div>
                                        <div className='field'>
                                            <input type='number' className='form-control' value={data.lady_age}
                                                   onChange={e => onchange('lady_age', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td colSpan="2">
                                    <div className='input-wrap'>
                                        <div className='label'>রেজিঃ নং</div>
                                        <div className='field'>
                                            <input type='text' className='form-control' value={data.registration_no}
                                                   onChange={e => onchange('registration_no', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>স্বামীর নাম</div>
                                        <div className='field'>
                                            <input type='number' className='form-control' value={data.husband_name}
                                                   onChange={e => onchange('husband_name', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>পিতার নাম</div>
                                        <div className='field'>
                                            <input type='number' className='form-control' value={data.father_name}
                                                   onChange={e => onchange('father_name', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td colSpan="2">
                                    <div className='input-wrap'>
                                        <div className='label'>উচ্চতা</div>
                                        <div className='field'>
                                            <input type='number' className='form-control' value={data.height}
                                                   onChange={e => onchange('height', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>জাতীয় পরিচয়পত্র নং</div>
                                        <div className='field'>
                                            <input type='text' className='form-control' value={data.national_id_no}
                                                   onChange={e => onchange('national_id_no', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>জন্ম নিবন্ধন নং</div>
                                        <div className='field'>
                                            <input type='text' className='form-control' value={data.birth_reg_no}
                                                   onChange={e => onchange('birth_reg_no', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td colSpan="2">
                                    <div className='input-wrap'>
                                        <div className='label'>রক্তের গ্রুপ</div>
                                        <div className='field'>
                                            <select className='form-control' value={data.blood_group}
                                                    onChange={e => onchange('blood_group', e.target.value)}>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>বর্তমান ঠিকানাঃ গ্রাম/মহল্লা</div>
                                        <div className='field'>
                                            <input type='text' className='form-control'
                                                   value={data.present_address_village}
                                                   onChange={e => onchange('present_address_village', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>ইউনিয়ন/পৈারসভা</div>
                                        <div className='field'>
                                            <input type='text' className='form-control'
                                                   value={data.present_address_union}
                                                   onChange={e => onchange('present_address_union', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>উপজেলা/সিটি কর্পোরেশন</div>
                                        <div className='field'>
                                            <input type='text' className='form-control'
                                                   value={data.present_address_upazila}
                                                   onChange={e => onchange('present_address_upazila', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-wrap'>
                                        <div className='label'>জেলা</div>
                                        <div className='field'>
                                            <input type='text' className='form-control'
                                                   value={data.present_address_district}
                                                   onChange={e => onchange('present_address_district', e.target.value)}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>জাতীয় পরিচয়পত্র নং</td>
                                <td>জন্ম নিবন্ধন নং</td>
                                <td colSpan="2">রক্তের গ্রুপ</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>৩. টিটি টিকার তথ্য (শিশু টিকা দান কার্ড ও টিটি টিকাদান কার্ড দেখে পুরন করতে হবে)</div>
                    <div className="overflow-scroll">
                        <table className="table-b bangla">
                            <tbody>
                            <tr className="background-gray text-center">
                                <td></td>
                                <td>১ম</td>
                                <td>২য়</td>
                                <td>তয়</td>
                                <td>৪র্থ</td>
                                <td>৫ম</td>
                            </tr>
                            <tr>
                                <td className="text-center">তারিখ</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>৪. বর্তমান গর্ভ সংক্রান্ত তথ্য (ঝুঁকিপূর্ণ গর্ভের তথ্য)</div>
                    <div className="overflow-scroll">
                        <table className="table bangla">
                            <tbody>
                            <tr>
                                <td>
                                    বয়স<br/>
                                    গর্ভ সংখ্যা ছোট সন্তানের বয়স<br/>
                                    উচ্চতা<br/>
                                    মারাত্নক রক্তসল্পতা (হিমো.)
                                </td>
                                <td>
                                    <div><input type="checkbox" disabled/> ২০ এর কম</div>
                                    <div><input type="checkbox" disabled/> ৩৫ এর বেশী</div>
                                    <div><input type="checkbox" disabled/> ১ম গর্ভ</div>
                                    <div><input type="checkbox" disabled/> ২ বছরের নিচে</div>
                                    <div><input type="checkbox" disabled/> ১৪৫ সে.মি. বা ৪ ফুট ১০ ইঞ্চির কম</div>
                                    <div><input type="checkbox" disabled/>
                                        {`<`}
                                        ৭ গ্রাম/ডিএল এর কম
                                    </div>
                                    <div><input type="checkbox" disabled/> ৪ বা ততোধিক গর্ভ</div>
                                </td>

                                <td>
                                    <div><input type="checkbox" disabled/> উচচ্চ রক্তচাপ</div>
                                    <div><input type="checkbox" disabled/> ডায়াবেটিস</div>
                                    <div><input type="checkbox" disabled/> হৃদরোগ</div>
                                    <div><input type="checkbox" disabled/> জন্ডিস</div>
                                    <div><input type="checkbox" disabled/> জমজ বা ততোধিক গর্ভ</div>
                                    <div><input type="checkbox" disabled/> রক্তক্ষরণ</div>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="overflow-scroll">
                            <table className="table-b bangla">
                                <tbody>
                                <tr className="background-gray text-center">
                                    <td colSpan="4">পূর্ববর্তী গর্ভের ইতিহাস</td>
                                    <td>নং</td>
                                    <td>পূর্বর যে কোন গর্ভে নিন্মের যে কোন একটি জটিলতা থাকেলে প্রযোজ্য ঘরে টিক
                                        চিহ্ন দিন
                                    </td>
                                </tr>
                                <tr>
                                    <td>গর্ভ</td>
                                    <td>সন</td>
                                    <td>ফলাফল*</td>
                                    <td>প্রসবের ধরন**</td>
                                    <td>১</td>
                                    <td>প্রসবের পরবর্তী রক্তক্ষণ</td>
                                </tr>


                                <tr>
                                    <td>১</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>২</td>
                                    <td>জরায়ুতে গর্ভফুল আটকে থাকা</td>
                                </tr>

                                <tr>
                                    <td>২</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>৩</td>
                                    <td>বিলম্বিত প্রসব (১২ ঘন্টার বেশি প্রসব ব্যাথা)/ বাধাগ্রস্থ প্রসব</td>
                                </tr>

                                <tr>
                                    <td>৩</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>৪</td>
                                    <td>উচ্চ রক্তচাপ/ প্রি-একল্যাম্পশিয়া/একল্যাম্পশিয়া/ডায়াবেটিস</td>
                                </tr>

                                <tr>
                                    <td>৪</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>৫</td>
                                    <td>গর্ভস্থ শিশুর মৃত্যু/ নবজাতকের মৃত্যু</td>
                                </tr>

                                <tr>
                                    <td>৫</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>৬</td>
                                    <td>অন্যান্য (অপরিনত প্রসব, জন্মকালীন ত্রুটি, কম জন্ম ওজনের শিশু (২০০০ গ্রাম
                                        এর নিচে)
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="4">গর্ভের ফলাফলঃ জীবিত বা মৃত জন্ম বা গর্ভপাত</td>
                                    <td colSpan="2">প্রসবের ধরণ** স্বাভাবিক/ সিজার / ভ্যাকুয়াম / ফরসেপ</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>৫. মেডিকেলি ইতিহাস</div>
                        <table className="table-b bangla">
                            <tbody>
                            <tr className="background-gray text-center">
                                <td></td>
                                <td>১ম চেক-আপ</td>
                                <td>২য় চেক-আপ</td>
                                <td>৩য় চেক-আপ</td>
                                <td>৪র্থ চেক-আপ</td>
                                <td>৪ এর অধিক চেক-আপ</td>
                            </tr>

                            <tr>
                                <td>তারিখ</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>কাশি (৪ সপ্তাহের বেশি)</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>জ্বর (৪ সপ্তাহের বেশি)</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>অল্পতেই হাঁপিয়ে উঠেন</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>শরীরের নিন্মাংশে পানি এসেছে</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>উচ্চ রক্তচাপ আছে</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>স্তনে চাকা আছে</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>ঘন ঘন প্রস্রাব/ প্রস্রাবে জ্বালাপোড়া আছে</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>প্রস্রাবে রক্ত যায়</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>তলপেটে ব্যথা আছে</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>ডায়াবেটিস আছে কিনা?</td>
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
            </div>
        </section>
    );
};

export default Page3;