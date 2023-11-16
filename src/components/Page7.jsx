import React from 'react';

const Page7 = () => {

    return (<section className="main-container bangla">
            <div className="card card-info">

                <div className="card-body info" style={{backgroundColor: '#fff8c5', borderTop: '1px solid #ffe28d'}}>

                    <div className="row">
                        <div className="info-title bangla">গর্ভাবস্থায় পুষ্টি পরামর্শ এবং আয়রন ফলিক এসিড ও
                            ক্যালসিয়াম ট্যাবলেট গ্রহণ
                        </div>
                        <p>গর্ভাবস্থার প্রথম তিন মাসের মধ্যে প্রসব পূর্ব সেবা গ্রহণের জন্য রেজিস্ট্রেশন করুন
                            কমপক্ষে চার বার প্রসব পূর্ব সেবা গ্রহণ করুন এবং ৮ বার স্বাক্ষাত করুন।</p>
                    </div>

                    <div className='overflow-scroll w-100'>
                        <table className="table table-bordered black">
                            <thead>
                            <tr style={{backgroundColor: '#b6dc8c'}}>
                                <th>প্রসব পূর্ব সেবা</th>
                                <th>১</th>
                                <th>২</th>
                                <th>৩</th>
                                <th>৪</th>
                                <th>৫</th>
                                <th>৬</th>
                                <th>৭</th>
                                <th>৮</th>
                                <th>৯</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr className='bg-white'>
                                <td style={{backgroundColor: '#cee7b1'}}>প্রসব পূর্ব সেবা গ্রহণের তারিখ</td>
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

                            <tr className='bg-white'>
                                <td style={{backgroundColor: '#cee7b1'}}>
                                    <img style={{width: '250px'}} src=" assets/images/nutrition.png" alt='img'/>
                                </td>
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

                            <tr className='bg-white'>
                                <td style={{backgroundColor: '#cee7b1'}}>
                                    <img style={{width: '250px'}} src=" assets/images/iron_foloc_acid.png" alt=" img"/>
                                </td>
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

                            <tr className='bg-white'>
                                <td style={{backgroundColor: '#cee7b1'}}>
                                    <img style={{width: '250px'}} src=" assets/images/calcium.png" alt=" img"/>
                                </td>
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
                {/*    End of card body */}

            </div>
        </section>
    );
};

export default Page7;