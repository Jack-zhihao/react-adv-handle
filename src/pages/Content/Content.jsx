import React from 'react'
import { Layout, Row, Col, Card } from 'antd'
import './Content.css'
import { getData } from '../../api'
const { Content } = Layout
const { Meta } = Card;
class Cont extends React.Component {
  constructor() {
    super()
    this.state = {
      CardList: []
    }
  }

  componentWillMount() {
    getData().then(res => {
      this.setState({ CardList: res });
    })
  }
  
  NacativeTo(url) {
    const { host } = window.location
    window.location.href = `http://${host}${url}`
  }

  render() {
    return (
      <Layout>
        <Content>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {this.state.CardList.map((card, idx) =>
                <Col key={idx} className="gutter-row" xs={12} sm={12} md={8} lg={4}>
                    <Card
                      className="Card"
                      hoverable
                      cover={<img alt={card.description} style={{}} src={card.imgUrl}/>}
                      onClickCapture={this.NacativeTo.bind(this, card.url)}
                    >
                      <Meta title={card.title} description={card.description || "..."} />
                      <p className="update">上线日期：{card.update}</p>
                    </Card>
                </Col>)}
            </Row>
        </Content>
      </Layout>
    )
  }
}

export default Cont
