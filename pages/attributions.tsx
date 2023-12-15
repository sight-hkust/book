import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Attributions() {
  return (
    <Layout
      prevPageHref="/epilogue"
      nextPageHref="#"
      className="w-full bg-black text-white pt-24">
      <Head>
        <title>Thanks & Credits</title>
      </Head>
      <h1 className="font-bold sm:text-6xl text-3xl ml-12">Thanks & Credits</h1>
      <section className="w-4/5 mx-auto py-24 flex flex-col space-y-16">
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Publisher</dt>
          <dd className="sm:text-2xl text-xl">SIGHT @ The Hong Kong University of <br/>Science and Technology</dd>
        </dl>
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Editorial Director</dt>
          <dd className="sm:text-2xl text-xl">Prof. Ying CHAU</dd>
        </dl>
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Creative Director</dt>
          <dd className="sm:text-2xl text-xl">Kahlen CHAN</dd>
        </dl>
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Editorial Team</dt>
          {
            ["Prof. Ying CHAU",
            "Malinda ABEYNAYAKE",
            "Joel YU",
            "Kristopher LAM",
            "Kahlen CHAN",
            "Mei Yue WONG",
            "Sze Chun Vanessa LEE",
            "Diya AGRAWAL"].map(name => (
              <dd className="sm:text-2xl text-xl" key={name}>{name}</dd>
            ))
          }
        </dl>
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Contributors</dt>
          {
            [
              "Prof. Wei SHYY",
              "Prof. Mukhopadhyay ANIRBAN",
              "Prof. Yuan Shuai Marshal LIU",
              "Prof. Yiu Fai Vincent LI",
              "Prof. Rhea LIEM",
              "Frances LO",
              "Jieying ZHONG",
              "One-2-One Charitable Trust",
              "Caritas Lok Kan School",
              "Wing Mui LEUNG @ Kowloon Sam Yuk Secondary School",
              "Lam Sze LAW @ Kowloon Sam Yuk Secondary School",
              "Tommy @ Salvation Army Hong Kong - Yau Ma Tei Shelter",
              "Jonathan Haiwei YANG",
              "Ziuwin LEUNG",
              "Ho Yeung CHIM",
              "Yui Fan CHIU",
              "Yun-wen MAO",
              "Fernando GARCÍA ALBERO Kevin CHANDRA",
              "Jin Teng CHUNG",
              "Reynaldi Octavianus WIJAYA Yee Hin LAU",
              "Zoya Estella WAHYU",
              "Chak Man LEUNG",
              "Nga Wun CHENG",
              "Chi Hong HO",
              "Rubaiyat QUADER",
              "Mei Yue WONG",
              "Sze Chun Vanessa LEE",
              "Diya AGRAWAL",
              "Tiffany YANG",
              "Minjin GU",
              "Enqi Michelle LAI",
              "Pik Sum CHIU",
              "Sze Ho Daniel LOO",
              "Wei Kuang Gabriel SOO",
              "Rainbow Yi Hung LAM",
              "Yanna Yatnga HUI",
              "Yoonsuh OH",
              "Hiu Ching Denise CHAN"
            ].map(name => <dd key={name} className="sm:text-2xl text-xl">{name}</dd>)
          }
        </dl>
        <p className="font-bold sm:text-lg text-2xl sm:mb-6 mb-3">
          SIGHT is made possible by a plethora of people and organizations, who and which so graciously gave us their time, funds and expertise. Donors provide funding so that our lights stay on, partner organizations which are always so accommodating with us, faculty advisors who guided our students with patience, and students who trust us to take the plunge into this wild journey. They are all listed above. But we would also like to take this space to have a special shoutout to all those who made a difference. To our InnoLab neighbors Global Community Engagement (GCE) and International Genetically Engineered Machine (iGEM), who had shared the amazing and sometimes chaotic place with us with so much understanding. To HKUSTConnect, for letting us tag along to Cambodia so that we could have our first scouting trip, partner and project, as well as providing critical logistics for our trips. To the Entrepreneurship Center (EC), for providing support to our student teams to convert their ideas into companies, and throwing a hackathon together along the way. To the Center for Education Innovation (CEI), who are always there when we needed help with student feedback and course development. To the Development and Alumni Office (DAO), our perennial partner in the search for funding. To the Public Affairs Office (PAO), for always showcasing us to an ever broader audience. To the Interdisciplinary Programs Office (IPO) and the now defunct Division of Biomedical Engineering (BME), for being our home when we first started. And finally to the Office of the Dean of Engineering (DENG), for taking us in and supporting us in every way imaginable.
	</p>
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Partners</dt>
          {
            [
              "One-2-One Charitable Trust",
              "Hong Kong Mucopolysaccharidoses & Rare Genetic Diseases Mutual Aid Group",
              "Helen Keller International – Indonesia",
              "Communist Youth League Committee in Changshun County, Guizhou",
              "Universitas Gadjah Mada",
              "Homestay Volunteer Teachers Organization",
              "Hong Kong Red Cross John F. Kennedy Centre",
              "Seal of Love Charitable Foundation",
              "Caritas Lok Kan School",
              "The Joint Shantou International Eye Center Department of Ophthalmology and Visual Sciences, CUHK",
              "The T.E.A. Project",
              "The Aware Foundation/Swapath",
              "Salvation Army Hong Kong",
              "Rajarata University of Sri Lanka",
              "CEDAR Fund",
              "Jockey Club “age at home” Gerontech Education and Rental Service",
              "Elderly Resources Centre",
              "Kowloon Sam Yuk Secondary School",
            ].map(name => <dd key={name} className="sm:text-2xl text-xl">{name}</dd>)
          }
        </dl>
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Funding</dt>
          {[
            "Chinese Manufacturer’s Association of Hong Kong",
            "Equal Opportunities Foundation",
            "Lau Chor Tak Foundation Limited",
            "Seal of Love Charitable Foundation",
            "University Grants Committee"
          ].map(name => <dd key={name} className="sm:text-2xl text-xl">{name}</dd>)}
        </dl>
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Faculty Advisors</dt>
          {
            [
              "Prof. Vincent Y F LI",
              "Prof. Y.S. Marshal LIU",
              "Prof. Davis Boyd BOOKHART",
              "Prof. Alex LAM",
              "Prof. Siu Woo CHEUNG",
              "Prof. May-yi SHAW",
              "Prof. Sujata VISARIA",
              "Prof. Carrie LING",
              "Prof. Luisa MOK",
              "Prof. Anirban MUKHOPADHYAY",
              "Prof. Richard Hau Yue SO",
              "Prof. Desmond TSOI",
              "Prof. Levent YOBAS",
              "Prof. Terrence Fu YEE",
              "Prof. Paul Whitfield FORSTER",
              "Prof. Ajay JONEJA",
              "Prof. Neville K S LEE",
              "Prof. Roger S K CHENG",
              "Prof. Lilong CAI",
              "Prof. Shing-Chi CHEUNG",
              "Prof. Yi-Kuen LEE",
              "Prof. Suk Wai Winnie LEUNG",
              "Prof. Danny SC NG",
              "Prof. Shenghui SONG",
              "Prof. Pedro SANDER",
              "Dr. Silver CHAN",
              "Mr. Derek LAM",
              "Mr. Donny Koon Ming SIU Mr. Tat Chi Francis LO",
            ].map(name => <dd key={name} className="sm:text-2xl text-xl">{name}</dd>)
          }
        </dl>
        <dl>
          <dt className="font-bold sm:text-4xl text-2xl sm:mb-6 mb-3">Special Thanks</dt>
          {
            [
              'Jin Teng CHUNG',
              'Jisoo LEE',
              'Sen ZHANG',
              'Jingting XU',
              'Fariza ZHORABEK',
              'Ming Jun Andrew TAN',
              'Man Yu LAM',
              'Chuhao LIU',
              'Kevin CHANDRA',
              'Sandra Anna SOBANSKA',
              'Wing Yu LEE',
              'Edbert Eddie PUSPITO',
              'Kwong Ho LEE',
              'Ji Eun KANG',
              'Hon Sing CHAN',
              'Yung Yung CHEUNG',
              'Sathish RAGHURAMAN',
              'Siu Hon NG',
              'Wenjiao ZENG',
              'Mohamed Thalha THAIKA',
              'UBAIDULLAH',
              'Tsz San WONG',
              'Kenneth CHEUNG',
              'Chung Yan YU',
              'Nadiya Aisha YUDIANA',
              'Tsz Ho TSAI',
              'Wai Ki Ricky LO',
              'Ka Long IP',
              'Chun Ho CHOI',
              'Gracia MONICA',
              'Chrysilla ANASTASIA',
              'Jonathan Haiwei YANG',
              'Hojeong PARK',
              'Maria Dominika Ivana SURADJA',
              'Cheuk Ping Germaine WONG',
              'Jin Hui LOW',
              'Vaishak ANIRUDH',
              'Ashish AGGARWAL',
              'Felicia AGATHA',
              'Charlotte Wing Yin CHUNG',
              'Chi Kin Benjamin LAI',
              'Jia WAN',
              'Haemin CHO',
              'Huiying FAN',
              'Vedanth GOWDARA VENKATA',
              'REDDY',
              'Kin Man YUEN',
              'Darwin LINARDI',
              'Albert Hans Christian MASLIM',
              'Rubaiyat QUADER',
              'Man Yee TAM',
              'Jiayuan Billy ZANG',
              'Rayan ARMANI',
              'Ziuwin LEUNG',
              'Tak Yan CHOW',
              'Yun-wen MAO',
              'Fernando GARCÍA ALBERO',
              'Tejas KOTHARI',
              'Issei HARUTA',
              'Tanay ROHATGI',
              'Ishan Shugan JAIN',
              'Kai Chen HUANG',
              'Bohan FAN',
              'Chi-hsuan MA',
              'Zihan FENG',
              'Ho-hsin LIU',
              'Zhiheng LING',
              'Ye Eun PARK',
              'Jin Young PARK',
              'Nga Wun CHENG',
              'Gian Miguel Sero DEL MUNDO',
              'Yee Hin LAU',
              'Prasenjit DAS',
              'Valencia Theodora TAMIN',
              'Sparsh SHARMA',
              'Anika Tahsin AHMED',
              'Jeongahn KIM',
              'Wing Yu CHAN',
              'Ho Yeung CHIM',
              'Mashiat LAMISA',
              'Chin Wai Athena WONG',
              'Chau Yuet CHU',
              'Irene GIANNI',
              'Alvin Riva KUSUMA',
              'Devi Natalie NADJAJA',
              'Vincentius Mario PURNAMA',
              'Hiu Tung Jasmine LEUNG ',
              'Shin Young JEONG',
              'Hoi Lun TSANG',
              'Wai Ting NG',
              'Sneha DAS GUPTA',
              'Jiajie GOH',
              'Vania Inka LIDVINA',
              'Winnie Wee Ni HONG',
              'Reynaldi Octavianus WIJAYA',
              'Evan Roberto LAIMAN',
              'Tan Erez Pablo STANZA',
              'Hiu Tung Jasmine LEUNG',
              'Xi LIU',
              'Akshay Ranjit KHANOLKAR',
              'Parth KAPUR',
              'Zhuxi PEI',
              'Shekh Shermin Jahan ANANNA',
              'Poojaa RAMALINGAM',
              'Wai Yan LAI',
              'Chi Hong HO',
              'Wai Ki WONG',
              'Chun Chung YUEN',
              'Hui Jeong JUNG',
              'Lavisha Ramesh Kumar KORANI',
              'Jungwon NAM',
              'Elsa VIJENDRAN',
              'Priscilla ADELINE',
              'Angelica Grace INTAN',
              'Minyoung JUNG',
              'Zoya Estella WAHYU',
              'Lai Wa CHOI',
              'Po Yu LI',
              'Wai Tin TANG',
              'Yui Fan CHIU',
              'Yan Wa LI',
              'Shin Dawn LO',
              'Catherine MARCHIO',
              'Nikareka MUNIYASAMY',
              'Jacqueline Cheryl SABRINA',
              'Bala SHARMA',
              'Axell Nathaniel WAHYU',
              'Ching Han SO',
              'Rong-er TSAI',
              'Ilef DEY',
              'Hei Shun TAM',
              'Ho Ying CHENG',
              'Kwan Yi MA',
              'Chun-yen LIN',
              'Mei Yue WONG',
              'Shehzore ALI',
              'Sze Chun Vanessa LEE',
              'Shulin LI',
              'Cheuk Wai CHAN',
              'Diya AGRAWAL',
              'Chak Man LEUNG',
              'Dogu Deniz UGUR',
              'Hao-yu LEE',
              'Nok Yiu NGAI',
              'Sung Him WONG',
              'Mei Shan KWONG',
              'Adhya BANSAL',
              'Lok Hin CHAN',
              'Minjin GU',
              'Sanjana Sai MANIKANDAN',
              'Tiffany YANG',
              'Sungbin YOON',
              'Hang Ho WONG',
              'Hiu Yau CHAN',
              'Kam Wai LAI',
              'Wing Tung HO',
              'Tae Eun KIM',
              'You Jin CHOI',
              'Ka On TUNG',
              'Anhad Singh CHAWLA',
              'Prerna ROY',
              'Yujung PARK',
              'Wan Yu WONG',
              'Ho Wa LI',
              'Pik Sum CHIU',
              'Yuk Chun CHENG',
              'Sze Ho Daniel LOO',
              'Chung Yin CHIU',
              'Wei Kuang Gabriel SOO',
              'Rainbow Yi Hung LAM',
              'Yanna Yatnga HUI',
              'Yoonsuh OH',
              'Hiu Ching Denise CHAN',
              'Ka Wai Aidan LEUNG',
              'Ka Kan Evans TUNG',
              'LAM Yun Tin',
              'NG Tik Sang',
              'WONG Chak Long'
            ].map(name => <dd key={name} className="sm:text-2xl text-xl">{name}</dd>)
          }
        </dl>
        <div className="w-full flex flex-row-reverse sm:text-xl">
          Copyright &#169; { new Date().getFullYear() } SIGHT
        </div>
      </section>
    </Layout>
  )
}
