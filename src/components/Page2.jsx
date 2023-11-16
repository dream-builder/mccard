import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import usePage2Store from "../store/page2.store";
import "react-datepicker/dist/react-datepicker.css";

const Page2 = () => {
    const {data, setData} = usePage2Store();
    const onchange = (name, value) => {
        setData(name, value);
    }
    return (<section className="main-container bangla page2">
        <div className="card card-info">

            <div className="card-body info" style={{
                backgroundColor: '#fff8c5', borderTop: 'solid 17px #ffe28d'
            }}>

                <div className="row">
                    <div className="info-title bangla">পারিবারিক পরিচয় ও কার্ডধারীর গুরুত্বপূর্ণ তথ্য</div>
                </div>

                <div className="white-bg">
                    <table className="bangla table">
                        <tbody>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        এনআইডি/রেজিষ্ট্রেশন নম্বর
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.nid_reg_no}
                                               onChange={(e) => onchange('nid_reg_no',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        রেজিষ্ট্রেশন তারিখ
                                    </div>
                                    <div className='field'>
                                        <DatePicker
                                            selected={data.registration_date ? new Date(data.registration_date) : ''}
                                            onChange={(date) => onchange('registration_date', moment(date).format('MM/DD/YYYY'))}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        বয়স
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.age}
                                               onChange={(e) => onchange('age',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        সেবা গ্রহীতার নাম
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.client_name}
                                               onChange={(e) => onchange('client_name',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        সমোবাইল নম্বর
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.client_mobile}
                                               onChange={(e) => onchange('client_mobile',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        সেবা গ্রহীতার স্বামীর নাম
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.client_husband_name}
                                               onChange={(e) => onchange('client_husband_name',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        বয়স
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.client_husband_age}
                                               onChange={(e) => onchange('client_husband_age',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        মোবাইল নম্বর
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.client_husband_mobile_no}
                                               onChange={(e) => onchange('client_husband_mobile_no',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        শিশুর নাম
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.child_name}
                                               onChange={(e) => onchange('child_name', e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='checkbox-wrap'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio"
                                               id="gender-male"
                                               checked={data.child_gender === 1}
                                               onChange={(e) => onchange('child_gender', 1)}/>
                                        <label className="form-check-label" htmlFor="gender-male">ছেলে</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="gender-female"
                                               checked={data.child_gender === 2}
                                               onChange={(e) => onchange('child_gender', 2)}/>
                                        <label className="form-check-label" htmlFor="gender-female">মেয়ে</label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        রেজিষ্ট্রেশন নম্বর
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.child_reg_no}
                                               onChange={(e) => onchange('child_reg_no',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        রেজিষ্ট্রেশন তারিখ
                                    </div>
                                    <div className='field'>
                                        <DatePicker
                                            selected={data.child_reg_date ? new Date(data.child_reg_date) : ''}
                                            onChange={(date) => onchange('child_reg_date', moment(date).format('MM/DD/YYYY'))}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        শিশুর জন্ম তারিখ (ইং)
                                    </div>
                                    <div className='field'>
                                        <DatePicker
                                            selected={data.child_date_of_birth ? new Date(data.child_date_of_birth) : ''}
                                            onChange={(date) => onchange('child_date_of_birth', moment(date).format('MM/DD/YYYY'))}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        জন্ম নিবন্ধন নং
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.child_brn}
                                               onChange={(e) => onchange('child_brn',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        স্থায়ী ঠিকানাঃ গ্রাম/মহল্লা
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.current_address_village}
                                               onChange={(e) => onchange('current_address_village',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        ইউনিয়ন
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.current_address_union}
                                               onChange={(e) => onchange('current_address_union',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        উপজেলা
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.current_address_upazila}
                                               onChange={(e) => onchange('current_address_upazila',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        জেলা
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.current_address_district}
                                               onChange={(e) => onchange('current_address_district',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        স্থায়ী ঠিকানাঃ গ্রাম/মহল্লা
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.permanent_address_village}
                                               onChange={(e) => onchange('permanent_address_village',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        ইউনিয়ন
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.permanent_address_union}
                                               onChange={(e) => onchange('permanent_address_union',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        উপজেলা
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.permanent_address_upazila}
                                               onChange={(e) => onchange('permanent_address_upazila',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        জেলা
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted"
                                               value={data.permanent_address_district}
                                               onChange={(e) => onchange('permanent_address_district',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <div className="info-title bangla">সেবাদানকারীর তথ্য</div>
                </div>

                <div className="white-bg">
                    <table className="bangla table ">
                        <tbody>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        পরিবার কল্যান পারিদর্শিকার নাম
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.visitor_name}
                                               onChange={(e) => onchange('visitor_name',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        মোবাইল নম্বর
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.visitor_mobile_number}
                                               onChange={(e) => onchange('visitor_mobile_number',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        পরিবার কল্যান সহকারীর নাম
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.assistant_visitor_name}
                                               onChange={(e) => onchange('assistant_visitor_name',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        মোবাইল নম্বর
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted"
                                               value={data.assistant_visitor_mobile_number}
                                               onChange={(e) => onchange('assistant_visitor_mobile_number',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        সিএইচসিপির নাম
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.chcp_name}
                                               onChange={(e) => onchange('chcp_name',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        মোবাইল নম্বর
                                    </div>
                                    <div className='field'>
                                        <input type='text' className="form-control dotted" value={data.chcp_mobile_number}
                                               onChange={(e) => onchange('chcp_mobile_number',  e.target.value)}/>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>


                <div className="white-bg" style={{marginTop: '30px'}}>
                    <table className="bangla table ">
                        <tbody>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        কার্ড প্রদানের তারিখ (গর্ভবতী নারী/ প্রসূতি মা)
                                    </div>
                                    <div className='field'>
                                        <DatePicker
                                            selected={data.cart_delivery_date_adult ? new Date(data.cart_delivery_date_adult) : ''}
                                            onChange={(date) => onchange('cart_delivery_date_adult', moment(date).format('MM/DD/YYYY'))}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='input-wrap'>
                                    <div className='label'>
                                        কার্ড প্রদানের তারিখ (শিশু)
                                    </div>
                                    <div className='field'>
                                        <DatePicker
                                            selected={data.cart_delivery_date_child ? new Date(data.cart_delivery_date_child) : ''}
                                            onChange={(date) => onchange('cart_delivery_date_child', moment(date).format('MM/DD/YYYY'))}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>);
};

export default Page2;