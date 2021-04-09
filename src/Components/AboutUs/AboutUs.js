import React from "react";
import cardPhoto from "../assets/serhan.jpeg"
import cardPhotoAysegul from "../assets/ayşegül.jpeg"
import cardPhotoBurak from "../assets/burak.jpeg"
import cardPhotoFunda from "../assets/funda.jpeg"
import cardPhotoKerim from "../assets/kerim.jpeg"
import { withRouter } from 'react-router-dom';
import './AboutUs.scss';

const AboutUs = () => {

   return(
        <div className="aboutUsContainer">
            <h1>BİZ KİMİZ?</h1>
            <div className="personCards">
                <div className="Card">
                    <div className="upperContainer">
                        <img src ={cardPhotoAysegul} alt="Serhan Elmalı" />
                        <div className="text-container">
                            <span className = "name">Ayşegül SARI</span>
                            <span className="title">Psikolojik Danışman-FrontEnd Developer</span>
                        </div>
                    </div>
                    <div className="info-text">1996 Manisa doğumlu Ayşegül, Uludağ Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümü lisans mezunu, Selçuk Üniversitesi Yönetim Bilişim Sistemleri yüksek lisans öğrencisidir. Kariyer danışmanlığı ve ön-yüz geliştirme alanlarında çalışmalar yapmaktadır.<br></br> İletişim : sariaysegulll@gmail.com</div> </div>
                <div className="Card">
                    <div className="upperContainer">
                        <img src ={cardPhotoBurak} alt="Ayşegül Sarı" />
                        <div className="text-container">
                            <span className = "name">Burak ERTÜRK</span>
                            <span className="title">Software Developer</span>
                        </div>
                    </div>
                    <div className="info-text">1999 Bursa doğumlu Burak Akdeniz Üniversitesi Yönetim Bilişim Sistemleri lisans öğrencisidir. FrontEnd Developer olarak kariyerine devam etmektedir.<br></br> İletişim : burakerturk16@outlook.com</div> </div>
                <div className="Card">
                    <div className="upperContainer">
                        <img src ={cardPhotoFunda} alt="Burak Ertürk" />
                        <div className="text-container">
                            <span className = "name">Funda Görgülü</span>
                            <span className="title">Software Developer</span>
                        </div>
                    </div>
                    <div className="info-text">1998 Ankara doğumlu Funda, Eskişehir Osmangazi Ünivesitesi Bilgisayar Mühendisliği son sınıf öğrencisidir. Veri Bilimi, Yapay Zeka, Önyüz geliştirme alanlarında çalışmalar yapmaktadır. İletişim : fgorgulu98@gmail.com</div> </div>
                <div className="Card">
                    <div className="upperContainer">
                        <img src ={cardPhotoKerim} alt="Funda Görgülü" />
                        <div className="text-container">
                            <span className = "name">Kerim Yalçın</span>
                            <span className="title">FrontEnd Developer</span>
                        </div>
                    </div>
                    <div className="info-text">1997 yılında Bursa'da doğan Kerim, Adnan Menderes Üniversitesi Bilgisayar Öğretmenliği ve Öğretim Teknolojileri bölümü mezunudur. Front-End Developer olarak kariyerine devam etmektedir. İletişim: kerimylcn@gmail.com</div> </div>
                <div className="Card">
                    <div className="upperContainer">
                        <img src ={cardPhoto} alt="Kerim Yalçın" />
                        <div className="text-container">
                            <span className = "name">Serhan Elmalı</span>
                            <span className="title">FrontEnd Developer</span>
                        </div>
                    </div>
                    <div className="info-text">1997 Adana doğumlu olan Serhan, Çukurova Üniversitesi Almanca Öğretmenliği bölümünde eğitim hayatını sürdürmeye devam etmektedir.FrontEnd Developer olarak kendini geliştirmektedir.
                            İletişim : serhanelmali@gmail.com</div> </div>
            </div>
        </div>
    )
}
export default withRouter(AboutUs);