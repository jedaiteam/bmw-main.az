import { Modal } from "antd";
import moment from "moment";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import BodyImage from "../components/BodyImage";
import Car from "../components/Car";
import Layout from "../components/Layout";
import { Context } from "../context/Context";
import Style from "../styles/Car.module.css";

const Cars = (cars) => {
  const [lang, setlang] = useContext(Context);

  const [visible, setVisible] = useState(false);
  const [data, setdata] = useState([]);
  const [status, setStatus] = useState("idle");
  const [modalIndex, setModalIndex] = useState(0);
  const [imagesIndex, setimagesIndex] = useState(0);
  const getData = async () => {
    try {
      setStatus("loading");
      const res = await fetch("https://admin.bmwpartsbaku.az/public/api/car");
      const cars = await res.json();
      setdata(cars);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          Yaponiyadan avtomobil sifarişi . Xaricden maşın getirmək BMW{" "}
        </title>
        <meta
          name="description"
          content="Almaniyadan, Amerikadan masin sifarişi BMW. Yaponiyadan avtomobil sifarişi. Xaricden masin. BMW ehtiyat hisseleri.  Bu xidmətləri sizə bmwpartsbaku.az göstərir."
        />
        <link rel="icon" href="../uploads/bmw.svg" />
        <meta
          name="keywords"
          content="yaponiyadan avtomobil sifarişi, almaniyadan masin sifarisi, xaricden masin getirmek, amerikadan masin sifarisi"
        />
      </Head>
      <BodyImage
        title={lang === "az" ? "Avtomobillər" : "Aвтомобили"}
        title2={
          lang === "az"
            ? "Almaniyadan, Amerikadan, Yaponiyadan BMW avtomobilləri"
            : "BMW cars from Germany, America, Japan"
        }
      />

      <div className="custom_wrapper">
        {status === "loading" && (
          <div className={Style.spinnerParent}>
            <div className={Style.spinner}></div>
          </div>
        )}

        <div className={Style.parentelement}>
          <Modal
            /*    title="Modal 1000px width" */
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => {
              setVisible(false);
              setimagesIndex(0);
            }}
            width={1000}
            footer={null}
          >
            {data[modalIndex]?.images?.length > 1 && (
              <span
                className={(Style.icons, Style.prev)}
                onClick={() => {
                  0 >= imagesIndex
                    ? setimagesIndex(data[modalIndex].images.length - 1)
                    : setimagesIndex(imagesIndex - 1);
                }}
              >
                <svg
                  width="20"
                  height="45"
                  viewBox="0 0 20 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.584 42.5476L2.41732 22.4516L17.584 2.35547"
                    stroke="#fff"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            )}

            {data.length > 0 && (
              <img
                alt="yaponiyadan avtomobil sifarişi"
                className={Style.img__custom}
                src={
                  "https://admin.bmwpartsbaku.az/" +
                  data[modalIndex].images[imagesIndex].name
                }
                width="100%"
                height="500px"
                style={{ objectFit: "cover" }}
              />
            )}

            {data[modalIndex]?.images?.length > 1 && (
              <span
                className={Style.icons}
                onClick={() => {
                  data[modalIndex].images.length <= imagesIndex + 1
                    ? setimagesIndex(0)
                    : setimagesIndex(imagesIndex + 1);
                }}
              >
                <svg
                  width="20"
                  height="44"
                  viewBox="0 0 20 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.41602 1.58463L17.5827 22.0013L2.41602 42.418"
                    stroke="#fff"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            )}

            {data.length > 0 && (
              <>
                <div className={Style.modalFooter}>
                  <h3>{data[modalIndex].model}</h3>
                  <div className={Style.footerArea}>
                    <div>
                      <p>
                        {" "}
                        {lang === "az" ? "Kuza nömrəsi" : "Номер куза"}:{" "}
                        {data[modalIndex].kuzov}
                      </p>
                      <p>
                        {lang === "az" ? "İli" : "Год"}: {data[modalIndex].year}
                      </p>
                    </div>
                    <div>
                      <p>
                        {lang === "az" ? "Alınma tarixi" : "Дата покупки"}:{" "}
                        {moment(data[modalIndex].purchase_date).format("LL")}{" "}
                      </p>
                      <p>
                        {lang === "az"
                          ? "Hansı ölkədən gətirilib"
                          : "Страна импорта"}
                        : {data[modalIndex].country}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Modal>

          {data.map((item, index) => (
            <Car
              key={item.id}
              kuza={item}
              setModalIndex={setModalIndex}
              index={index}
              setvis={setVisible}
            />
          ))}
        </div>
      </div>

      <ul
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "50px",
          marginTop: "50px",
          rowGap: "15px",
        }}
      >
        <li style={{ width: "80%", fontSize: "23px", textAlign: "justify" }}>
          Şirkətimiz minik avtomobilləri və müxtəlif markalı BMW
          avtomobillərinin ən böyük təchizatçılarından biridir. BMW Parts Baku
          olaraq Amerikadan, Almaniyadan maşın sifarişi, xaricdən maşın
          gətirmək, xüsusi avadanlıq seçimi fəaliyyəti göstəririk, işlənmiş
          ehtiyat hissələrin satışını təşkil edirik. Bundan əlavə, biz həmişə
          qiymətləri mümkün qədər aşağı salmağa, müştərilər üçün əlverişli
          şərait yaratmağa çalışırıq.{" "}
        </li>
        <li style={{ width: "80%", fontSize: "23px", textAlign: "justify" }}>
          Veb saytımızdakı kataloqdan zövqünüzə uyğun bir avtomobil seçə
          bilərsiniz. Burada mütəxəssislər tərəfindən xaricdən gətirilmiş,
          sınaqdan keçirilmiş, ətraflı təsviri olan, həmçinin müxtəlif
          cəhətlərdən xüsusiyyətlər və fotoşəkillərlə təchiz edilmiş
          avtomobilləri tapa bilərsiniz. Filtrlərin köməyi ilə bir neçə meyara
          diqqət yetirərək ehtiyacınız olan avtomobilləri asanlıqla seçə
          bilərsiniz.{" "}
        </li>
        <li style={{ width: "80%", fontSize: "23px", textAlign: "justify" }}>
          Kataloqda sizin üçün uyğun bir model yoxdursa, veb saytımızın əlaqə
          bölməsindən telefon və ya elektron poçt vasitəsi ilə xəyalınızdakı BMW
          avtomobilinin modelini, istehsal ilini, avtomobil üçün büdcənizi və
          digər xüsusiyyətlərini qeyd edə bilərsiniz. BMW Parts Baku işçiləri
          ABŞ –dan, Yaponiyadan, Almaniyadan gələn avtomobillərin ən uyğun
          variantlarını seçəcək və bütün xidmətlərlə birlikdə alış qiymətini
          təyin edəcəklər. Şirkətimiz tərəfindən xaricdən (Almaniya, Yaponiya,
          Amerika) gətirilən BMW avtomobillərinin keyfiyyəti yüksək
          qiymətləndirilir.{" "}
        </li>
      </ul>
    </Layout>
  );
};

export default Cars;
