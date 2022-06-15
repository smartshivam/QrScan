import React, { useState,useRef,useEffect } from 'react';
import QrReader from 'react-qr-scanner'
import { db } from '../../firebase';
import { set,ref,query, orderByValue ,onValue,get,orderByChild,equalTo} from 'firebase/database';
// import QRCode from "qrcode"
const Test = (props) => {
  const [allData, setAllData] = useState([])
  const [count, setCount] = useState(1)
  const [data, setData] = useState("");
  const [QrData,setQrData] = useState({});


//   useEffect(() => {
//     if (allData.length > 1) {
//         if (data == allData[count].data) {
//           alert("succes")
//             // swal(allData[count].message, " ", "success");
//             setCount(s => s + 1)
//         }
//     }
// }, [data])

  useEffect(()=>{
fetch()
  },[])
  const fetch=()=>{
    const starCountRef = ref(db, 'qr');
    // const starCountRef = ref(db, 'chatbox/');
    onValue(starCountRef, snapSort => {
        const data = snapSort.val()
        console.log(data)
        let Alldata1 = []
        for (const item in data) {
            Alldata1 = [...Alldata1, { id: item, ...data[item] }]
        }
        setAllData(Alldata1)
        console.log("ddd", Alldata1);
    })

  }
  // const [scan,setScan]= useState(false)
  const qrRef = useRef(null);

  // const 

const reference = ref(db,"qr")
const handleErrorFile = (error) => {
  console.log(error);
}
const handleScanFile = async(result) => {
  console.log("sacanready")
    if (result) {
      console.log(result)
      setData(result.text);

       let res = await get(query(ref(db, "qr"), orderByChild("data"), equalTo(result.text)))
       console.log("firebase",res.val())
       if(res.val()){
        //  alert("You can Proceed Now")
         const data = res.val()
         console.log(res)
         let Data = []
        for (const item in data) {
          Data = [...Data, { id: item, ...data[item] }]
        }

        console.log("fire",Data)


        if (Data[0].count ==count) {
          // if (result.text == Data[count].data) {
            alert("passed  Qr,,,Scan Next Qr ")
            setQrData(Data[0])

              // swal(allData[count].message, " ", "success");
              setCount(s => s + 1)
          // }
      }
      else{
        alert("Wrong Qr")
      }

       }

       

        // const mostViewedPosts = query(ref(db, 'qr1'), orderByValue(result.text));
        // console.log("fire",mostViewedPosts)
  
    }
}
// const onScanFile = () => {
//   // setScan(true)
//   qrRef.current.openImageDialog();
// }
// // const openImageDialog() {
// //   this.refs.qrReader1.openImageDialog()
// }

  return (
    <>
          {/* <video id='Qrsacn'></video> */}
          {/* <button onClick={()=>setScan(true)}>Scan Now</button> */}
          {/* <button    onClick={onScanFile}>Scan Qr Code</button> */}
{/* <div> */}
{/* <h1 style={{ color:"red" ,textAlign:"center" }} >Scan Qr</h1> */}
{/* <div  style={{ width: "400px" ,margin:"auto" }}> */}



      <QrReader
     delay={300}
     style={{width: '100%'}}
     onError={handleErrorFile}
     onScan={handleScanFile}/>
      {/* </div> */}
      {/* <h1 style={{ textAlign:"center" }} >{QrData.data}</h1> */}


    </>
  );
};
export default Test