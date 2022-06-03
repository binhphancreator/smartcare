import React from 'react'
import image from '../assets/images/b.png'
import { Card } from 'antd';
const { Meta } = Card;
export default function AboutUs() {
  return (
    <div>
      <div className="overview-people">

        <img className="image" src={image} style={{ width: "50%" }} />

        <div className="text-people">
          <h1 className="intro-long">Nhóm 3</h1>
          <p className="intro-group">Thực hành chuyên sâu</p>
        </div>

      </div>

      <p className="intro-group">Danh sách thành viên</p>
      <div className="detail-person">


        <Card
         className="card"
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Nguyễn Hoàng Yên" description="www.instagram.com" />
        </Card>
        <Card
         className="card"
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Phan Văn Bình" description="www.instagram.com" />
        </Card>
        <Card
         className="card"
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Phạm Tiến Chượng" description="www.instagram.com" />
        </Card>
        <Card
         className="card"
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Lê Duy Khánh" description="www.instagram.com" />
        </Card>
        <Card
         className="card"
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Nguyễn Quang Huy" description="www.instagram.com" />
        </Card>
      </div>
    </div>
  )
}
