import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import axios from "../global/axios";

const columns = [
  {
    title: "BMI",
    dataIndex: "BMI",
    key: "BMI",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Hút thuốc",
    dataIndex: "Smoking",
    key: "Smoking",
  },
  {
    title: "Rượu bia",
    dataIndex: "AlcoholDrinking",
    key: "AlcoholDrinking",
  },

  {
    title: "Đột quỵ",
    dataIndex: "Stroke",
    key: "Stroke",
  },
  {
    title: "Thể chất",
    dataIndex: "PhysicalHealth",
    key: "PhysicalHealth",
  },
  // {
  //   title: "MentalHealth",
  //   dataIndex: "MentalHealth",
  //   key: "MentalHealth",
  // },
  // {
  //   title: "DiffWalking",
  //   dataIndex: "DiffWalking",
  //   key: "DiffWalking",
  // },
  // {
  //   title: "Sex",
  //   dataIndex: "Sex",
  //   key: "Sex",
  // },
  {
    title: "Độ tuổi",
    dataIndex: "AgeCategory",
    key: "AgeCategory",
  },
  // {
  //   title: "Race",
  //   dataIndex: "Race",
  //   key: "Race",
  // },
  {
    title: "Tiểu đường",
    dataIndex: "Diabetic",
    key: "Diabetic",
  },

  {
    title: "Tập thể dục",
    dataIndex: "PhysicalActivity",
    key: "PhysicalActivity",
  },
  // {
  //   title: "GenHealth",
  //   dataIndex: "GenHealth",
  //   key: "GenHealth",
  // },
  {
    title: "Thời gian ngủ",
    dataIndex: "SleepTime",
    key: "SleepTime",
  },
  {
    title: "Bệnh suyễn",
    dataIndex: "Asthma",
    key: "Asthma",
  },
  // {
  //   title: "KidneyDisease",
  //   dataIndex: "KidneyDisease",
  //   key: "KidneyDisease",
  // },
  // {
  //   title: "SkinCancer",
  //   dataIndex: "SkinCancer",
  //   key: "SkinCancer",
  // },
  {
    title: 'Khả năng bị bệnh',
    key: 'HeartDisease',
    dataIndex: 'HeartDisease',
  },
];

function HistoryComponent() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get("/predict")
      setData(res.data.data)
    }
    getBlog()
  }, [])
  console.log(data)

  return (
    <div className='container'>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default HistoryComponent;